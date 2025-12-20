'use server';

import { createClient } from '@/lib/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { ROUTES } from '@/lib/constants';

/**
 * Update a user's role
 */
export async function updateUserRole(userId: string, newRole: 'user' | 'admin') {
  try {
    const supabase = await createClient();

    // Update the user's role in profiles table
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId);

    if (error) {
      console.error('Error updating role:', error);
      return { success: false, error: error.message };
    }

    // Revalidate the page
    revalidatePath('/user/admin-dashboard/mock-manage');

    return { success: true, message: `Role updated to ${newRole}` };
  } catch (error) {
    console.error('Error updating role:', error);
    return { success: false, error: 'Failed to update role' };
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
    const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

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

    // Revalidate the page
    revalidatePath('/user/admin-dashboard/mock-manage');

    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, error: 'Failed to delete user' };
  }
}
