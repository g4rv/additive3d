'use server';

import { createClient } from '@/lib/supabase/server';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  validateFormData,
  type FormState,
} from '@/lib/validation/utils';
import {
  checkRateLimit,
  recordFailedAttempt,
  recordSuccessfulAttempt,
  getClientIp,
  formatRateLimitError,
} from '@/lib/rate-limit';
import { logAuthEvent } from '@/lib/auth-logger';
import { headers } from 'next/headers';
import { ROUTES } from '@/lib/constants';

export async function sendPasswordResetEmail(
  prevState: FormState<ForgotPasswordFormData>,
  formData: FormData
): Promise<FormState<ForgotPasswordFormData>> {
  // Extract and validate form data
  const rawData = extractFormData<ForgotPasswordFormData>(formData, ['email']);
  const validation = validateFormData(forgotPasswordSchema, rawData);

  if (!validation.success) {
    return validation.error;
  }

  const { email } = validation.data;

  // Get origin from headers and client IP for rate limiting and logging
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const origin = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
  const clientIp = getClientIp(headersList);
  const userAgent = headersList.get('user-agent') || 'Unknown';

  // Check rate limit using both email and IP
  const emailRateLimit = await checkRateLimit(email.toLowerCase(), 'password_reset');
  const ipRateLimit = await checkRateLimit(clientIp, 'password_reset');

  // If either email or IP is rate limited, block the attempt
  if (!emailRateLimit.allowed) {
    return {
      error: formatRateLimitError(emailRateLimit, 'password_reset'),
      fieldErrors: {},
      values: rawData,
    };
  }

  if (!ipRateLimit.allowed) {
    return {
      error: formatRateLimitError(ipRateLimit, 'password_reset'),
      fieldErrors: {},
      values: rawData,
    };
  }

  const supabase = await createClient();

  // Send password reset email
  // Note: Supabase will only send the email if the user exists in auth.users
  // This is secure - we don't reveal whether the email is registered or not
  // The email template will include token_hash for stateless verification
  const redirectTo = `${origin}${ROUTES.resetPassword}?recovery=true`;

  console.log('Password reset - Origin:', origin);
  console.log('Password reset - Redirect URL:', redirectTo);

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  });

  if (error) {
    console.error('Password reset error:', error);

    // Record failed attempt and log event
    await Promise.all([
      recordFailedAttempt(email.toLowerCase(), 'password_reset'),
      recordFailedAttempt(clientIp, 'password_reset'),
      logAuthEvent({
        email: email.toLowerCase(),
        eventType: 'password_reset_requested', // Failed request
        ipAddress: clientIp,
        userAgent,
        metadata: {
          error: error.message,
        },
      }),
    ]);

    return {
      error: 'Помилка надсилання листа. Спробуйте ще раз.',
      fieldErrors: {},
      values: rawData,
    };
  }

  // Record the attempt and log (we don't know if email exists due to security)
  // Always record as successful to prevent email enumeration
  await Promise.all([
    recordSuccessfulAttempt(email.toLowerCase(), 'password_reset'),
    recordSuccessfulAttempt(clientIp, 'password_reset'),
    // Log password reset request (even if email doesn't exist for security)
    logAuthEvent({
      email: email.toLowerCase(),
      eventType: 'password_reset_requested', // Successful request
      ipAddress: clientIp,
      userAgent,
    }),
  ]);

  // Success - always show success message for security
  // (don't reveal whether the email exists or not)
  return {
    error: '',
    fieldErrors: {},
    values: rawData,
    success: 'Якщо ця адреса зареєстрована, ви отримаєте лист для скидання пароля',
  };
}
