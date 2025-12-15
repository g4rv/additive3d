import { getCurrentUserWithProfile } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Phone, Building2, Calendar, LogOut, Edit } from 'lucide-react';
import { signOut } from '@/app/auth/logout/actions';
import { ROUTES } from '@/lib/constants';

export default async function DashboardPage() {
  const userData = await getCurrentUserWithProfile();

  if (!userData) {
    redirect(ROUTES.login);
  }

  const { email, profile } = userData;

  return (
    <section className="min-h-no-header-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Панель керування</h1>
          <p className="text-base-content/70">
            Вітаємо, {profile?.first_name} {profile?.last_name}!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Information Card */}
          <div className="bg-base-200 rounded-box p-8 shadow-lg md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Інформація профілю</h2>
              <Link
                href={ROUTES.profile}
                className="btn btn-primary btn-sm gap-2"
              >
                <Edit className="w-4 h-4" />
                Редагувати
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* First Name */}
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70 mb-1">Ім&apos;я</p>
                  <p className="font-medium">{profile?.first_name || '—'}</p>
                </div>
              </div>

              {/* Last Name */}
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70 mb-1">Прізвище</p>
                  <p className="font-medium">{profile?.last_name || '—'}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70 mb-1">Електронна пошта</p>
                  <p className="font-medium">{email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70 mb-1">Телефон</p>
                  <p className="font-medium">{profile?.phone_number || '—'}</p>
                </div>
              </div>

              {/* Organization */}
              <div className="flex gap-4 md:col-span-2">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70 mb-1">Організація</p>
                  <p className="font-medium">{profile?.organization_name || '—'}</p>
                </div>
              </div>

              {/* Created At */}
              <div className="flex gap-4 md:col-span-2">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70 mb-1">Дата реєстрації</p>
                  <p className="font-medium">
                    {profile?.created_at
                      ? new Date(profile.created_at).toLocaleDateString('uk-UA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : '—'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div className="bg-base-200 rounded-box p-8 shadow-lg md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Дії</h2>
            <div className="flex flex-col gap-4">
              <form action={signOut}>
                <button
                  type="submit"
                  className="btn btn-outline btn-error w-full md:w-auto gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Вийти з акаунту
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
