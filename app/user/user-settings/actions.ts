'use server';

import { getCurrentUser, updateUserProfile } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import {
  profileSchema,
  resetPasswordSchema,
  emailField,
  type ProfileFormData,
  type ResetPasswordFormData,
} from '@/lib/validation/schemas';
import {
  extractFormData,
  validateFormData,
  mapAuthError,
  type FormState,
} from '@/lib/validation/utils';
import { SUPABASE_ERROR_MESSAGES, ERROR_MESSAGES } from '@/lib/validation/error-messages';
import { ROUTES } from '@/lib/constants';
import { z } from 'zod';

export async function updateProfile(
  prevState: FormState<ProfileFormData>,
  formData: FormData
): Promise<FormState<ProfileFormData>> {
  // Check authentication
  const user = await getCurrentUser();
  if (!user) {
    redirect(ROUTES.login);
  }

  // Extract and validate form data
  const rawData = extractFormData<ProfileFormData>(formData, [
    'first_name',
    'last_name',
    'phone_number',
    'organization_name',
  ]);

  const validation = validateFormData(profileSchema, rawData);

  if (!validation.success) {
    return validation.error;
  }

  // Update profile
  try {
    await updateUserProfile(user.id, validation.data);

    // Revalidate the pages
    revalidatePath(ROUTES.dashboard);
    revalidatePath(ROUTES.profile);

    // Return success without redirect
    return {
      error: '',
      fieldErrors: {},
      values: rawData,
      success: 'Профіль успішно оновлено',
    };
  } catch (error) {
    console.error('Error updating profile:', error);
    return {
      error: SUPABASE_ERROR_MESSAGES.PROFILE_UPDATE_ERROR,
      fieldErrors: {},
      values: rawData,
    };
  }
}

// Change Password Action
type ChangePasswordFormData = ResetPasswordFormData & {
  current_password: string;
};

const changePasswordSchema = z
  .object({
    current_password: z.string().min(1, 'Поточний пароль обов\'язковий'),
    password: resetPasswordSchema.shape.password,
    confirm_password: resetPasswordSchema.shape.confirm_password,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: ERROR_MESSAGES.PASSWORD_MISMATCH,
    path: ['confirm_password'],
  });

export async function changePassword(
  prevState: FormState<ChangePasswordFormData>,
  formData: FormData
): Promise<FormState<ChangePasswordFormData>> {
  // Check authentication
  const user = await getCurrentUser();
  if (!user) {
    redirect(ROUTES.login);
  }

  // Extract and validate form data
  const rawData = extractFormData<ChangePasswordFormData>(formData, [
    'current_password',
    'new_password',
    'confirm_password',
  ]);

  // Map new_password to password for validation
  const dataForValidation = {
    current_password: rawData.current_password,
    password: rawData.new_password,
    confirm_password: rawData.confirm_password,
  };

  const validation = validateFormData(changePasswordSchema, dataForValidation);

  if (!validation.success) {
    return validation.error;
  }

  // Verify current password by trying to sign in
  const supabase = await createClient();
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: user.email!,
    password: validation.data.current_password,
  });

  if (signInError) {
    return {
      error: 'Неправильний поточний пароль',
      fieldErrors: {
        current_password: 'Поточний пароль невірний',
      },
      values: rawData,
    };
  }

  // Update password
  const { error } = await supabase.auth.updateUser({
    password: validation.data.password,
  });

  if (error) {
    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Success
  return {
    error: '',
    fieldErrors: {},
    values: {},
    success: 'Пароль успішно змінено',
  };
}

// Change Email Action
type ChangeEmailFormData = {
  new_email: string;
};

const changeEmailSchema = z.object({
  new_email: emailField,
});

export async function changeEmail(
  prevState: FormState<ChangeEmailFormData>,
  formData: FormData
): Promise<FormState<ChangeEmailFormData>> {
  // Check authentication
  const user = await getCurrentUser();
  if (!user) {
    redirect(ROUTES.login);
  }

  // Extract and validate form data
  const rawData = extractFormData<ChangeEmailFormData>(formData, ['new_email']);
  const validation = validateFormData(changeEmailSchema, rawData);

  if (!validation.success) {
    return validation.error;
  }

  const { new_email } = validation.data;

  // Check if new email is same as current
  if (new_email === user.email) {
    return {
      error: 'Нова електронна пошта не може бути такою ж, як поточна',
      fieldErrors: {
        new_email: 'Введіть іншу електронну адресу',
      },
      values: rawData,
    };
  }

  // Get origin from headers
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const origin = `${protocol}://${host}`;

  // Update email
  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser(
    { email: new_email },
    {
      emailRedirectTo: `${origin}${ROUTES.dashboard}`,
    }
  );

  if (error) {
    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Success
  return {
    error: '',
    fieldErrors: {},
    values: rawData,
    success: 'Лист з підтвердженням надіслано на нову адресу. Перевірте вашу пошту.',
  };
}
