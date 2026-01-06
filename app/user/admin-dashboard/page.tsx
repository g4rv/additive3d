import { requireAdmin } from '@/lib/auth/route-protection';
import { getAllUsers } from '@/lib/supabase/queries';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Phone, Building2, Calendar, Settings } from 'lucide-react';
import { ROUTES } from '@/lib/constants';

export default async function AdminDashboardPage() {
  // Verify user is authenticated and has admin role
  await requireAdmin();

  // Fetch all users
  const users = await getAllUsers();

  return (
    <section className="min-h-no-header-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={ROUTES.dashboard}
            className="inline-flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад до профілю
          </Link>
          <h1 className="text-4xl font-bold mb-2">Адмін панель</h1>
          <p className="text-base-content/70">Управління користувачами</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <Link
            href={ROUTES.adminMockManage}
            className="btn btn-primary gap-2"
          >
            <Settings className="w-4 h-4" />
            Mock: Управління користувачами
          </Link>
        </div>

        {/* Users Stats */}
        <div className="bg-base-200 rounded-box p-6 shadow-lg mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-sm text-base-content/70">Всього користувачів</p>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-base-200 rounded-box shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-base-300">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Ім&apos;я</span>
                    </div>
                  </th>
                  <th className="bg-base-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </div>
                  </th>
                  <th className="bg-base-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Телефон</span>
                    </div>
                  </th>
                  <th className="bg-base-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>Організація</span>
                    </div>
                  </th>
                  <th className="bg-base-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Дата реєстрації</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-base-content/70">
                      Користувачів не знайдено
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="hover">
                      <td>
                        <div className="font-medium">
                          {user.first_name} {user.last_name}
                        </div>
                      </td>
                      <td>
                        <div className="text-sm">{user.email}</div>
                      </td>
                      <td>
                        <div className="text-sm">{user.phone_number || '—'}</div>
                      </td>
                      <td>
                        <div className="text-sm">{user.organization_name || '—'}</div>
                      </td>
                      <td>
                        <div className="text-sm">
                          {new Date(user.created_at).toLocaleDateString('uk-UA', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-6 bg-base-300 rounded-lg p-4">
          <p className="text-sm text-base-content/70">
            <strong className="text-base-content">Примітка:</strong> Це базова адмін панель для
            перегляду користувачів. Для зміни ролей та видалення користувачів перейдіть на
            сторінку &quot;Mock: Управління користувачами&quot;.
          </p>
        </div>
      </div>
    </section>
  );
}
