'use server';

import { createClient } from '@/lib/supabase/server';
import { loginSchema, type LoginFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  mapAuthError,
  validateFormData,
  type FormState,
} from '@/lib/validation/utils';
import { redirect } from 'next/navigation';

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

  // Sign in with Supabase
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Redirect to dashboard on successful login
  redirect('/');
}
