'use server';

import { createClient } from '@/lib/supabase/server';
import { loginSchema, type LoginFormData } from '@/lib/validation/schemas';
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
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export async function signIn(
  prevState: FormState<LoginFormData>,
  formData: FormData
): Promise<FormState<LoginFormData>> {
  // Extract and validate form data
  const rawData = extractFormData<LoginFormData>(formData, ['email', 'password']);
  const validation = validateFormData(loginSchema, rawData);

  if (!validation.success) {
    return validation.error;
  }

  const { email, password } = validation.data;

  // Get client IP and user agent for rate limiting and logging
  const headersList = await headers();
  const clientIp = getClientIp(headersList);
  const userAgent = headersList.get('user-agent') || 'Unknown';

  // Check rate limit using both email and IP
  const emailRateLimit = await checkRateLimit(email.toLowerCase(), 'login');
  const ipRateLimit = await checkRateLimit(clientIp, 'login');

  // If either email or IP is rate limited, block the attempt
  if (!emailRateLimit.allowed) {
    return {
      error: formatRateLimitError(emailRateLimit, 'login'),
      fieldErrors: {},
      values: rawData,
    };
  }

  if (!ipRateLimit.allowed) {
    return {
      error: formatRateLimitError(ipRateLimit, 'login'),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Sign in with Supabase
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // Record failed attempt for both email and IP
    await Promise.all([
      recordFailedAttempt(email.toLowerCase(), 'login'),
      recordFailedAttempt(clientIp, 'login'),
      // Log failed login attempt
      logAuthEvent({
        email: email.toLowerCase(),
        eventType: 'login_failed',
        ipAddress: clientIp,
        userAgent,
        metadata: {
          error: error.message,
        },
      }),
    ]);

    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Get user data for logging
  const { data: userData } = await supabase.auth.getUser();

  // Record successful attempt (clears rate limit) and log event
  await Promise.all([
    recordSuccessfulAttempt(email.toLowerCase(), 'login'),
    recordSuccessfulAttempt(clientIp, 'login'),
    // Log successful login
    logAuthEvent({
      userId: userData?.user?.id,
      email: email.toLowerCase(),
      eventType: 'login_success',
      ipAddress: clientIp,
      userAgent,
    }),
  ]);

  // Redirect to dashboard on successful login
  redirect('/');
}
