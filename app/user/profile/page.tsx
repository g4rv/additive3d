import { getCurrentUserWithProfile, getUserOrders } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Phone, Building2, Calendar, LogOut, Settings, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { signOut } from '@/app/auth/logout/actions';
import { ROUTES } from '@/lib/constants';

export default async function DashboardPage() {
  const userData = await getCurrentUserWithProfile();

  if (!userData) {
    redirect(ROUTES.login);
  }

  const { id, email, profile } = userData;
  const orders = await getUserOrders(id);

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
      pending: { label: 'В обробці', color: 'badge-warning', icon: Clock },
      processing: { label: 'Виконується', color: 'badge-info', icon: Clock },
      completed: { label: 'Завершено', color: 'badge-success', icon: CheckCircle },
      cancelled: { label: 'Скасовано', color: 'badge-error', icon: XCircle },
    };

    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span className={`badge ${config.color} gap-1`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </span>
    );
  };

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
                  Налаштування
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

            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 mx-auto text-base-content/30 mb-4" />
                <p className="text-base-content/70 text-lg mb-2">Замовлень ще немає</p>
                <p className="text-base-content/50 text-sm mb-6">
                  Почніть з калькулятора 3D-друку, щоб створити ваше перше замовлення
                </p>
                <Link href={ROUTES.calculator} className="btn btn-primary">
                  Перейти до калькулятора
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order: any) => (
                  <div key={order.id} className="bg-base-100 rounded-lg p-5 border border-base-300 hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{order.order_number}</h3>
                        <p className="text-sm text-base-content/70">
                          {new Date(order.created_at).toLocaleDateString('uk-UA', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                      {getStatusBadge(order.status)}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-base-content/70">Кількість файлів</p>
                        <p className="font-semibold">{Array.isArray(order.files) ? order.files.length : 0}</p>
                      </div>
                      <div>
                        <p className="text-xs text-base-content/70">Загальна вага</p>
                        <p className="font-semibold">{order.total_weight.toLocaleString('uk-UA')} г</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-base-content/70">Загальна вартість</p>
                        <p className="font-semibold text-lg">{order.total_price.toLocaleString('uk-UA')} грн</p>
                      </div>
                    </div>

                    {Array.isArray(order.files) && order.files.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-base-300">
                        <p className="text-xs text-base-content/70 mb-2">Файли:</p>
                        <div className="flex flex-wrap gap-2">
                          {order.files.slice(0, 3).map((file: any, index: number) => (
                            <span key={index} className="badge badge-sm badge-outline">
                              {file.name}
                            </span>
                          ))}
                          {order.files.length > 3 && (
                            <span className="badge badge-sm badge-ghost">
                              +{order.files.length - 3} більше
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
