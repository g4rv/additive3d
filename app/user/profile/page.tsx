import { getCurrentUserWithProfile, getUserOrders } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Phone, Building2, Calendar, LogOut, Settings, Package } from 'lucide-react';
import { signOut } from '@/app/auth/logout/actions';
import { ROUTES } from '@/lib/constants';
import OrdersList from './OrdersList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мій профіль | Additive3D',
};

export default async function DashboardPage() {
  const userData = await getCurrentUserWithProfile();

  if (!userData) {
    redirect(ROUTES.login);
  }

  const { id, email, profile } = userData;
  const orders = await getUserOrders(id);

  return (
    <section className="min-h-no-header-screen flex flex-col px-4 py-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Профіль</h1>
          <p className="text-base-content/70">
            Вітаємо, {profile?.first_name} {profile?.last_name}!
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Left Column - User Info */}
          <div className="flex flex-col gap-6">
            {/* Profile Information Card */}
            <div className="bg-base-200 rounded-box p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-6">Профіль</h2>

              <div className="flex flex-col gap-5">
                {/* First Name */}
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg h-fit">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/70 mb-0.5">Ім&apos;я</p>
                    <p className="font-medium text-sm">{profile?.first_name || '—'}</p>
                  </div>
                </div>

                {/* Last Name */}
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg h-fit">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/70 mb-0.5">Прізвище</p>
                    <p className="font-medium text-sm">{profile?.last_name || '—'}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg h-fit">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/70 mb-0.5">Електронна пошта</p>
                    <p className="font-medium text-sm break-all">{email}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg h-fit">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/70 mb-0.5">Телефон</p>
                    <p className="font-medium text-sm">{profile?.phone_number || '—'}</p>
                  </div>
                </div>

                {/* Organization */}
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg h-fit">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/70 mb-0.5">Організація</p>
                    <p className="font-medium text-sm">{profile?.organization_name || '—'}</p>
                  </div>
                </div>

                {/* Created At */}
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg h-fit">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/70 mb-0.5">Дата реєстрації</p>
                    <p className="font-medium text-sm">
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

              {/* Divider */}
              <div className="divider my-6"></div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  href={ROUTES.profile}
                  className="btn btn-primary btn-sm gap-2 w-full"
                >
                  <Settings className="w-4 h-4" />
                  Налаштування профілю
                </Link>

                <form action={signOut} className="w-full">
                  <button
                    type="submit"
                    className="btn btn-outline btn-error btn-sm gap-2 w-full"
                  >
                    <LogOut className="w-4 h-4" />
                    Вийти
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Orders */}
          <div className="bg-base-200 rounded-box p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Package className="w-6 h-6" />
                Мої замовлення
              </h2>
              <span className="badge badge-neutral">{orders.length}</span>
            </div>

            <OrdersList orders={orders} userId={id} />
          </div>
        </div>
      </div>
    </section>
  );
}
