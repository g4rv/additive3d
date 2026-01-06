import { requireAdmin } from '@/lib/auth/route-protection';
import { getAllUsers } from '@/lib/supabase/queries';
import Link from 'next/link';
import { ArrowLeft, User, Shield, AlertTriangle, Mail, Settings } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import UserManagementRow from './UserManagementRow';
import DeleteByIdForm from './DeleteByIdForm';

export default async function MockManagePage() {
  // Verify user is authenticated and has admin role
  await requireAdmin();

  // Fetch all users
  const users = await getAllUsers();

  

  // Check if service role key is configured
  const hasServiceKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY;

  return (
    <section className="min-h-no-header-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={ROUTES.adminDashboard}
            className="inline-flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад до адмін панелі
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold">Mock: Управління користувачами</h1>
            <span className="badge badge-warning">ТЕСТ</span>
          </div>
          <p className="text-base-content/70">Тестова сторінка для зміни ролей та видалення користувачів</p>
        </div>

        {/* Warning Banner */}
        <div className="alert alert-warning mb-6">
          <AlertTriangle className="w-5 h-5" />
          <div>
            <h3 className="font-bold">Увага! Тестова сторінка</h3>
            <div className="text-sm">
              Ця сторінка призначена ТІЛЬКИ для розробки та тестування.
              У продакшені доступ до цих функцій повинен бути строго обмежений.
            </div>
          </div>
        </div>

        {/* Service Key Warning */}
        {!hasServiceKey && (
          <div className="alert alert-error mb-6">
            <AlertTriangle className="w-5 h-5" />
            <div>
              <h3 className="font-bold">Service Role Key не налаштований</h3>
              <div className="text-sm">
                Для видалення користувачів потрібен <code>SUPABASE_SERVICE_ROLE_KEY</code> в <code>.env.local</code>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="bg-base-200 rounded-box p-6 shadow-lg">
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

          <div className="bg-base-200 rounded-box p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 p-4 rounded-lg">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-base-content/70">Адміністраторів</p>
                <p className="text-3xl font-bold">
                  {users.filter((u) => u.role === 'admin').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 rounded-box p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-lg">
                <Settings className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-sm text-base-content/70">Service Key</p>
                <p className="text-xl font-bold">
                  {hasServiceKey ? '✓ Configured' : '✗ Missing'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delete by ID Form */}
        <div className="mb-6">
          <DeleteByIdForm />
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
                      <span>Користувач</span>
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
                      <Shield className="w-4 h-4" />
                      <span>Роль</span>
                    </div>
                  </th>
                  <th className="bg-base-300">
                    <span>Дії</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-base-content/70">
                      Користувачів не знайдено
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <UserManagementRow key={user.id} user={user} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Notes */}
        <div className="mt-6 space-y-4">
          <div className="bg-base-300 rounded-lg p-4">
            <p className="text-sm text-base-content/70">
              <strong className="text-base-content">Функції:</strong>
            </p>
            <ul className="text-sm text-base-content/70 list-disc list-inside mt-2 space-y-1">
              <li><strong>Make User / Make Admin:</strong> Змінює роль користувача в таблиці profiles</li>
              <li><strong>Delete User:</strong> Видаляє користувача з auth.users та profiles (потребує service role key)</li>
            </ul>
          </div>

          <div className="bg-error/10 rounded-lg p-4 border border-error/20">
            <p className="text-sm text-error">
              <strong>Важливо:</strong> Ця сторінка використовує service role key для видалення користувачів.
              Ніколи не використовуйте таку функціональність в продакшені без належного захисту!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
