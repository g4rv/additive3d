'use server';

import { createClient } from '@/lib/supabase/server';
import { resetPasswordSchema, type ResetPasswordFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  mapAuthError,
  validateFormData,
  type FormState,
} from '@/lib/validation/utils';
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

  // Update password with Supabase
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    console.error('Password update error:', error);
    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: {},
    };
  }

  // Redirect to login with success message
  redirect('/auth/login?message=Пароль успішно оновлено. Увійдіть з новим паролем.');
}
