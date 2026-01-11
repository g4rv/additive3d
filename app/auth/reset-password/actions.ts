'use server';

import { createClient } from '@/lib/supabase/server';
import { resetPasswordSchema, type ResetPasswordFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  mapAuthError,
  validateFormData,
  type FormState,
} from '@/lib/validation/utils';
import { logAuthEvent } from '@/lib/auth-logger';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function resetPassword(
  prevState: FormState<ResetPasswordFormData>,
  formData: FormData
): Promise<FormState<ResetPasswordFormData>> {
  // Extract and validate form data
  const rawData = extractFormData<ResetPasswordFormData>(formData, [
    'password',
    'confirm_password',
  ]);
  const validation = validateFormData(resetPasswordSchema, rawData);

  if (!validation.success) {
    return validation.error;
  }

  const { password } = validation.data;

  // Get user info for logging
  const headersList = await headers();
  const clientIp = headersList.get('x-forwarded-for')?.split(',')[0] ||
                   headersList.get('x-real-ip') ||
                   headersList.get('cf-connecting-ip') ||
                   'unknown';
  const userAgent = headersList.get('user-agent') || 'Unknown';

  // Update password with Supabase
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    console.error('Password update error:', error);

    // Log failed password reset
    await logAuthEvent({
      userId: userData?.user?.id,
      email: userData?.user?.email || 'unknown',
      eventType: 'password_reset_completed', // Failed
      ipAddress: clientIp,
      userAgent,
      metadata: {
        error: error.message,
      },
    });

    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: {},
    };
  }

  // Log successful password reset
  await logAuthEvent({
    userId: userData?.user?.id,
    email: userData?.user?.email || 'unknown',
    eventType: 'password_reset_completed', // Success
    ipAddress: clientIp,
    userAgent,
  });

  // Redirect to login with success message
  const successMessage = encodeURIComponent('Пароль успішно оновлено. Увійдіть з новим паролем.');
  redirect(`/auth/login?message=${successMessage}`);
}
