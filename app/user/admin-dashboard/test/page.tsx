import { createClient } from '@/lib/supabase/server';

export default async function AdminTestPage() {
  const supabase = await createClient();

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id || '')
    .single();

  // Try to get orders count
  const { count: ordersCount, error: ordersCountError } = await supabase
    .from('orders')
    .select('*', { count: 'exact', head: true });

  // Try to get orders
  const { data: orders, error: ordersError } = await supabase
    .from('orders')
    .select('*')
    .limit(5);

  // Try to get profiles count
  const { count: profilesCount, error: profilesCountError } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Diagnostics</h1>

      <div className="space-y-6">
        {/* User Info */}
        <div className="bg-base-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Current User</h2>
          <pre className="bg-base-300 p-4 rounded overflow-auto">
            {JSON.stringify({
              id: user?.id,
              email: user?.email,
              role: user?.role
            }, null, 2)}
          </pre>
        </div>

        {/* Profile Info */}
        <div className="bg-base-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Profile</h2>
          <pre className="bg-base-300 p-4 rounded overflow-auto">
            {JSON.stringify(profile, null, 2)}
          </pre>
        </div>

        {/* Orders Count */}
        <div className="bg-base-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Orders Access Test</h2>
          <div className="space-y-2">
            <p><strong>Count:</strong> {ordersCount ?? 'null'}</p>
            <p><strong>Count Error:</strong></p>
            <pre className="bg-base-300 p-4 rounded overflow-auto">
              {JSON.stringify(ordersCountError, null, 2)}
            </pre>
            <p className="mt-4"><strong>Orders Error:</strong></p>
            <pre className="bg-base-300 p-4 rounded overflow-auto">
              {JSON.stringify(ordersError, null, 2)}
            </pre>
            <p className="mt-4"><strong>Sample Orders:</strong></p>
            <pre className="bg-base-300 p-4 rounded overflow-auto">
              {JSON.stringify(orders, null, 2)}
            </pre>
          </div>
        </div>

        {/* Profiles Count */}
        <div className="bg-base-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Profiles Access Test</h2>
          <div className="space-y-2">
            <p><strong>Count:</strong> {profilesCount ?? 'null'}</p>
            <p><strong>Error:</strong></p>
            <pre className="bg-base-300 p-4 rounded overflow-auto">
              {JSON.stringify(profilesCountError, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
