'use server';

import { createClient } from '@/lib/supabase/server';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  validateFormData,
  type FormState,
} from '@/lib/validation/utils';

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

  const supabase = await createClient();

  // Check if email exists in profiles table
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('email')
    .eq('email', email)
    .single();

  if (profileError || !profile) {
    // Email is not registered
    return {
      error: 'Користувача з такою електронною поштою не знайдено',
      fieldErrors: {
        email: 'Ця електронна пошта не зареєстрована в системі',
      },
      values: rawData,
    };
  }

  // Email exists, send password reset email
  const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  });

  if (error) {
    console.error('Password reset error:', error);
    return {
      error: 'Помилка надсилання листа. Спробуйте ще раз.',
      fieldErrors: {},
      values: rawData,
    };
  }

  // Success - email was sent
  return {
    error: '',
    fieldErrors: {},
    values: rawData,
    success: 'Лист успішно надіслано',
  };
}
