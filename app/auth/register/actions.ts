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

  // Get origin from headers
  const headersList = await headers();
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const origin = `${protocol}://${host}`;

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
    return {
      error: 'Користувач з такою поштою вже зареєстрований',
      fieldErrors: {
        email: 'Ця електронна пошта вже використовується',
      },
      values: rawData,
    };
  }

  // Note: When email confirmation is enabled, signup doesn't create a session
  // User will get a session after clicking the verification link in their email

  // Redirect to verify-email page
  redirect(ROUTES.verifyEmail);
}
