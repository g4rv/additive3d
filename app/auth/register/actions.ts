'use server';

import { ROUTES } from '@/lib/constants';
import { createClient } from '@/lib/supabase/server';
import { registerSchema, type RegisterFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  mapAuthError,
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
import { redirect } from 'next/navigation';

export async function signUp(
  prevState: FormState<RegisterFormData>,
  formData: FormData
): Promise<FormState<RegisterFormData>> {
  // Extract and validate form data
  const rawData = extractFormData<RegisterFormData>(formData, [
    'first_name',
    'last_name',
    'email',
    'phone_number',
    'organization_name',
    'password',
    'confirm_password',
  ]);

  const validation = validateFormData(registerSchema, rawData);

  if (!validation.success) {
    return validation.error;
  }

  const { email, password, first_name, last_name, phone_number, organization_name } =
    validation.data;

  // Get origin from headers and client IP for rate limiting and logging
  const headersList = await headers();
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const origin = `${protocol}://${host}`;
  const clientIp = getClientIp(headersList);
  const userAgent = headersList.get('user-agent') || 'Unknown';

  // Check rate limit using both email and IP
  const emailRateLimit = await checkRateLimit(email.toLowerCase(), 'signup');
  const ipRateLimit = await checkRateLimit(clientIp, 'signup');

  // If either email or IP is rate limited, block the attempt
  if (!emailRateLimit.allowed) {
    return {
      error: formatRateLimitError(emailRateLimit, 'signup'),
      fieldErrors: {},
      values: rawData,
    };
  }

  if (!ipRateLimit.allowed) {
    return {
      error: formatRateLimitError(ipRateLimit, 'signup'),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Sign up with Supabase
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
        phone_number,
        organization_name,
      },
      emailRedirectTo: `${origin}${ROUTES.authCallback}`,
    },
  });

  if (error) {
    // Record failed attempt and log event
    await Promise.all([
      recordFailedAttempt(email.toLowerCase(), 'signup'),
      recordFailedAttempt(clientIp, 'signup'),
      logAuthEvent({
        email: email.toLowerCase(),
        eventType: 'signup', // Failed signup
        ipAddress: clientIp,
        userAgent,
        metadata: {
          error: error.message,
          first_name,
          last_name,
        },
      }),
    ]);

    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Check if email already exists (Supabase-specific behavior)
  // When email confirmation is enabled and email already exists,
  // Supabase returns data.user but with an empty identities array
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    // Record failed attempt for duplicate email and log
    await Promise.all([
      recordFailedAttempt(email.toLowerCase(), 'signup'),
      recordFailedAttempt(clientIp, 'signup'),
      logAuthEvent({
        email: email.toLowerCase(),
        eventType: 'signup', // Duplicate email
        ipAddress: clientIp,
        userAgent,
        metadata: {
          reason: 'duplicate_email',
          first_name,
          last_name,
        },
      }),
    ]);

    return {
      error: 'Користувач з такою поштою вже зареєстрований',
      fieldErrors: {
        email: 'Ця електронна пошта вже використовується',
      },
      values: rawData,
    };
  }

  // Record successful signup (clears rate limit) and log event
  await Promise.all([
    recordSuccessfulAttempt(email.toLowerCase(), 'signup'),
    recordSuccessfulAttempt(clientIp, 'signup'),
    logAuthEvent({
      userId: data.user?.id,
      email: email.toLowerCase(),
      eventType: 'signup', // Successful signup
      ipAddress: clientIp,
      userAgent,
      metadata: {
        first_name,
        last_name,
        organization_name,
      },
    }),
  ]);

  // Note: When email confirmation is enabled, signup doesn't create a session
  // User will get a session after clicking the verification link in their email

  // Redirect to verify-email page
  redirect(ROUTES.verifyEmail);
}
