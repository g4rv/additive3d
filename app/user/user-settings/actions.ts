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
import {
  checkRateLimit,
  recordFailedAttempt,
  recordSuccessfulAttempt,
  getClientIp,
  formatRateLimitError,
} from '@/lib/rate-limit';
import { logAuthEvent } from '@/lib/auth-logger';
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
    'password',
    'confirm_password',
  ]);

  const validation = validateFormData(changePasswordSchema, rawData);

  if (!validation.success) {
    return validation.error;
  }

  // Get client info for logging
  const headersList = await headers();
  const clientIp = getClientIp(headersList);
  const userAgent = headersList.get('user-agent') || 'Unknown';

  // Verify current password by trying to sign in
  const supabase = await createClient();
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: user.email!,
    password: validation.data.current_password,
  });

  if (signInError) {
    // Log failed password change (wrong current password)
    await logAuthEvent({
      userId: user.id,
      email: user.email!,
      eventType: 'password_changed', // Failed
      ipAddress: clientIp,
      userAgent,
      metadata: {
        reason: 'incorrect_current_password',
      },
    });

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
    // Log failed password change (update error)
    await logAuthEvent({
      userId: user.id,
      email: user.email!,
      eventType: 'password_changed', // Failed
      ipAddress: clientIp,
      userAgent,
      metadata: {
        error: error.message,
      },
    });

    return {
      error: mapAuthError(error),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Log successful password change
  await logAuthEvent({
    userId: user.id,
    email: user.email!,
    eventType: 'password_changed', // Success
    ipAddress: clientIp,
    userAgent,
  });

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

  // Get origin from headers and client IP for rate limiting and logging
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const origin = `${protocol}://${host}`;
  const clientIp = getClientIp(headersList);
  const userAgent = headersList.get('user-agent') || 'Unknown';

  // Check rate limit using both current email and IP
  const emailRateLimit = await checkRateLimit(user.email!.toLowerCase(), 'email_change');
  const ipRateLimit = await checkRateLimit(clientIp, 'email_change');

  // If either email or IP is rate limited, block the attempt
  if (!emailRateLimit.allowed) {
    return {
      error: formatRateLimitError(emailRateLimit, 'email_change'),
      fieldErrors: {},
      values: rawData,
    };
  }

  if (!ipRateLimit.allowed) {
    return {
      error: formatRateLimitError(ipRateLimit, 'email_change'),
      fieldErrors: {},
      values: rawData,
    };
  }

  // Update email
  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser(
    { email: new_email },
    {
      emailRedirectTo: `${origin}${ROUTES.dashboard}`,
    }
  );

  if (error) {
    // Record failed attempt and log event
    await Promise.all([
      recordFailedAttempt(user.email!.toLowerCase(), 'email_change'),
      recordFailedAttempt(clientIp, 'email_change'),
      // Log failed email change request
      logAuthEvent({
        userId: user.id,
        email: user.email!,
        eventType: 'email_change_requested', // Failed
        ipAddress: clientIp,
        userAgent,
        metadata: {
          new_email: new_email.toLowerCase(),
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

  // Record successful attempt and log event (clears rate limit)
  await Promise.all([
    recordSuccessfulAttempt(user.email!.toLowerCase(), 'email_change'),
    recordSuccessfulAttempt(clientIp, 'email_change'),
    // Log email change request initiated
    logAuthEvent({
      userId: user.id,
      email: user.email!,
      eventType: 'email_change_requested', // Initiated (pending verification)
      ipAddress: clientIp,
      userAgent,
      metadata: {
        new_email: new_email.toLowerCase(),
        status: 'pending_verification',
      },
    }),
  ]);

  // Success
  return {
    error: '',
    fieldErrors: {},
    values: rawData,
    success: 'Листи з підтвердженням надіслано на обидві адреси (поточну та нову). Підтвердіть обидва листи для завершення зміни.',
  };
}

// Update User Consent Action
export async function updateUserConsent(
  agreeToShare: boolean,
  hasNotSignedNda: boolean
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check authentication
    const user = await getCurrentUser();
    if (!user) {
      return {
        success: false,
        error: 'Необхідна автентифікація',
      };
    }

    // Validate that both consents are true
    if (!agreeToShare || !hasNotSignedNda) {
      return {
        success: false,
        error: 'Обидві згоди є обов\'язковими',
      };
    }

    // Get client info for logging
    const headersList = await headers();
    const clientIp = getClientIp(headersList);
    const userAgent = headersList.get('user-agent') || 'Unknown';

    // Update profile with consent
    const supabase = await createClient();
    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        agree_to_share_files: agreeToShare,
        has_not_signed_nda: hasNotSignedNda,
        consent_given_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    if (updateError) {
      console.error('Error updating consent:', updateError);
      return {
        success: false,
        error: 'Помилка при збереженні згоди',
      };
    }

    // Log consent event
    await logAuthEvent({
      userId: user.id,
      email: user.email!,
      eventType: 'consent_given',
      ipAddress: clientIp,
      userAgent,
      metadata: {
        agree_to_share_files: agreeToShare,
        has_not_signed_nda: hasNotSignedNda,
      },
    });

    // Revalidate relevant paths
    revalidatePath(ROUTES.dashboard);
    revalidatePath(ROUTES.profile);

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error in updateUserConsent:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Невідома помилка',
    };
  }
}
