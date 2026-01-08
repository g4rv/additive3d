'use server';

import { createClient } from '@/lib/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';

/**
 * Update a user's role
 */
export async function updateUserRole(userId: string, newRole: 'user' | 'admin') {
  try {
    const supabase = await createClient();

    // Get current user to check permissions
    const { data: { user: currentUser } } = await supabase.auth.getUser();

    // Prevent admins from changing their own role
    if (currentUser?.id === userId) {
      console.warn('Admin attempted to change their own role');
      return { success: false, error: 'Ви не можете змінювати свою власну роль' };
    }

    // Update the user's role in profiles table
    const { data, error } = await supabase
      .from('profiles')
      .update({ role: newRole, updated_at: new Date().toISOString() })
      .eq('id', userId)
      .select();

    if (error) {
      console.error('Error updating role:', error);
      return { success: false, error: error.message };
    }

    // Revalidate the admin users page
    revalidatePath('/user/admin-dashboard/users');

    return { success: true, message: `Role updated to ${newRole}` };
  } catch (error) {
    console.error('Error updating role:', error);
    return { success: false, error: 'Failed to update role' };
  }
}

/**
 * Update a user's PPG (price per gram)
 */
export async function updateUserPpg(userId: string, ppg: number) {
  try {
    const supabase = await createClient();

    // Validate ppg is positive
    if (ppg <= 0) {
      return { success: false, error: 'PPG must be greater than 0' };
    }

    // Update the user's ppg in profiles table
    const { error } = await supabase
      .from('profiles')
      .update({ ppg, updated_at: new Date().toISOString() })
      .eq('id', userId);

    if (error) {
      console.error('Error updating PPG:', error);
      return { success: false, error: error.message };
    }

    // Revalidate the admin users page
    revalidatePath('/user/admin-dashboard/users');

    return { success: true, message: `PPG updated to ${ppg}` };
  } catch (error) {
    console.error('Error updating PPG:', error);
    return { success: false, error: 'Failed to update PPG' };
  }
}

/**
 * Delete a user completely from auth and profiles
 * WARNING: This requires the service role key and should be protected
 */
export async function deleteUser(userId: string) {
  try {
    // Get service role key from environment
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      return {
        success: false,
        error: 'Service role key not configured. Add SUPABASE_SERVICE_ROLE_KEY to .env.local'
      };
    }

    // Create admin client with service role
    const supabaseAdmin = createAdminClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // First, delete from profiles table (if exists)
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', userId);

    if (profileError) {
      console.error('Error deleting profile:', profileError);
      // Continue anyway, as the user might not have a profile
    }

    // Delete user from auth
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (authError) {
      console.error('Error deleting user from auth:', authError);
      return { success: false, error: authError.message };
    }

    // Revalidate the admin users page
    revalidatePath('/user/admin-dashboard/users');

    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, error: 'Failed to delete user' };
  }
}
