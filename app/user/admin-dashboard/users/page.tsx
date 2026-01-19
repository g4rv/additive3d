import { getAllUsers } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/server';
import UsersTable from './UsersTable';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Управління користувачами',
  description: 'Адміністративна панель для перегляду та редагування даних користувачів системи Additive3D.',
  path: '/user/admin-dashboard/users',
  noIndex: true,
});

export default async function UsersPage() {
  // Fetch all users
  const users = await getAllUsers();

  // Get current user to prevent self-modification
  const supabase = await createClient();
  const { data: { user: currentUser } } = await supabase.auth.getUser();
  const currentUserId = currentUser?.id;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Управління користувачами</h1>
        <p className="text-base-content/70">
          Перегляд та редагування даних користувачів системи
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div className="bg-base-200 rounded-box p-6 shadow-lg">
          <div>
            <p className="text-sm text-base-content/70 mb-1">Всього користувачів</p>
            <p className="text-3xl font-bold">{users.length}</p>
          </div>
        </div>
        <div className="bg-base-200 rounded-box p-6 shadow-lg">
          <div>
            <p className="text-sm text-base-content/70 mb-1">Адміністраторів</p>
            <p className="text-3xl font-bold">
              {users.filter((u) => u.role === 'admin').length}
            </p>
          </div>
        </div>
        <div className="bg-base-200 rounded-box p-6 shadow-lg">
          <div>
            <p className="text-sm text-base-content/70 mb-1">Звичайних користувачів</p>
            <p className="text-3xl font-bold">
              {users.filter((u) => u.role === 'user').length}
            </p>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <UsersTable users={users} currentUserId={currentUserId} />
    </div>
  );
}
