// Diagnostic utility for admin functions
import { createClient } from './server';

export async function checkOrdersAccess() {
  try {
    const supabase = await createClient();

    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    console.log('Current user:', user?.id, user?.email);

    if (userError) {
      console.error('User auth error:', userError);
      return { error: 'Auth error', details: userError };
    }

    // Try simple orders query
    const { data: orders, error: ordersError, count } = await supabase
      .from('orders')
      .select('*', { count: 'exact' });

    console.log('Orders count:', count);
    console.log('Orders error:', ordersError);
    console.log('Orders data length:', orders?.length);

    return { orders, error: ordersError, count };
  } catch (err) {
    console.error('Exception:', err);
    return { error: 'Exception', details: err };
  }
}

export async function checkProfileAccess(userId: string) {
  try {
    const supabase = await createClient();

    // Try to read profile
    const { data: profile, error: readError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    console.log('Profile read:', profile);
    console.log('Profile read error:', readError);

    // Try to update profile role (dry run check)
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', userId);

    console.log('Profile update test error:', updateError);

    return { profile, readError, updateError };
  } catch (err) {
    console.error('Exception:', err);
    return { error: 'Exception', details: err };
  }
}
