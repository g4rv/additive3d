'use server';

import { createClient } from '@/lib/supabase/server';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  validateFormData,
  type FormState,
} from '@/lib/validation/utils';
import { headers } from 'next/headers';

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

  // Get origin from headers (works in both dev and production)
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const origin = `${protocol}://${host}`;

  // Send password reset email
  // Note: Supabase will only send the email if the user exists in auth.users
  // This is secure - we don't reveal whether the email is registered or not
  // Supabase will automatically add token_hash and type=recovery parameters
  const redirectTo = `${origin}/auth/callback`;

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

  // Success - always show success message for security
  // (don't reveal whether the email exists or not)
  return {
    error: '',
    fieldErrors: {},
    values: rawData,
    success: 'Якщо ця адреса зареєстрована, ви отримаєте лист для скидання пароля',
  };
}
