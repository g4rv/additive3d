import { z } from 'zod';
import { AuthError } from '@supabase/supabase-js';
import { ERROR_MESSAGES, SUPABASE_ERROR_MESSAGES } from './error-messages';

// Form state type used by actions
export type FormState<T extends Record<string, unknown> = Record<string, unknown>> = {
  error: string;
  fieldErrors: Partial<Record<keyof T, string>>;
  values: Partial<T>;
  success?: string;
};

// Extract form data from FormData object
export function extractFormData<T extends Record<string, unknown>>(
  formData: FormData,
  fields: (keyof T)[]
): T {
  const data: Record<string, unknown> = {};

  for (const field of fields) {
    data[field as string] = formData.get(field as string) as string;
  }

  return data as T;
}

// Validate form data with Zod schema
export function validateFormData<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
):
  | { success: true; data: z.infer<T> }
  | { success: false; error: FormState<z.infer<T>> }
{
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors = result.error.flatten().fieldErrors;
  const fieldKeys = Object.keys(errors);

  // Get first error message
  const firstError = fieldKeys.reduce<string>((acc, key) => {
    if (acc) return acc;
    const errorArray = errors[key];
    return errorArray?.[0] || '';
  }, '');

  // Map field errors
  const fieldErrors: Record<string, string> = {};
  for (const [key, value] of Object.entries(errors)) {
    if (value && value[0]) {
      fieldErrors[key] = value[0];
    }
  }

  return {
    success: false,
    error: {
      error: firstError || ERROR_MESSAGES.VALIDATION_ERROR,
      fieldErrors,
      values: data as Partial<z.infer<T>>,
    },
  };
}

// Map Supabase Auth errors to Ukrainian messages
export function mapAuthError(error: AuthError): string {
  const message = error.message.toLowerCase();

  if (message.includes('invalid login credentials')) {
    return SUPABASE_ERROR_MESSAGES.INVALID_CREDENTIALS;
  }

  if (message.includes('email not confirmed')) {
    return SUPABASE_ERROR_MESSAGES.EMAIL_NOT_CONFIRMED;
  }

  if (message.includes('user already registered')) {
    return SUPABASE_ERROR_MESSAGES.USER_ALREADY_REGISTERED;
  }

  if (message.includes('password')) {
    return SUPABASE_ERROR_MESSAGES.PASSWORD_REQUIREMENTS;
  }

  return SUPABASE_ERROR_MESSAGES.GENERIC_ERROR;
}
