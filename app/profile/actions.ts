'use server';

import { getCurrentUser, updateUserProfile } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { profileSchema, type ProfileFormData } from '@/lib/validation/schemas';
import {
  extractFormData,
  validateFormData,
  type FormState,
} from '@/lib/validation/utils';
import { SUPABASE_ERROR_MESSAGES } from '@/lib/validation/error-messages';
import { ROUTES } from '@/lib/constants';

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

    // Revalidate the dashboard and profile pages
    revalidatePath(ROUTES.dashboard);
    revalidatePath(ROUTES.profile);

    // Redirect to dashboard after successful update
    redirect(ROUTES.dashboard);
  } catch (error) {
    console.error('Error updating profile:', error);
    return {
      error: SUPABASE_ERROR_MESSAGES.PROFILE_UPDATE_ERROR,
      fieldErrors: {},
      values: rawData,
    };
  }
}
