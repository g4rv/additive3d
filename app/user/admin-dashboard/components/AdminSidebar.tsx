'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Package, Shield } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { cn } from '@/utils/cn';

const AdminSidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Користувачі',
      href: ROUTES.adminUsers,
      icon: Users,
    },
    {
      label: 'Замовлення',
      href: ROUTES.adminOrders,
      icon: Package,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="bg-base-200 border-base-300 w-64 border-r p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Адмін панель</h2>
        </div>
        <p className="text-sm text-base-content/70">Управління системою</p>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                    active
                      ? 'bg-primary text-primary-content font-medium shadow-md'
                      : 'text-base-content/70 hover:bg-base-300 hover:text-base-content'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Back to Dashboard Link */}
      <div className="mt-8 pt-8 border-t border-base-300">
        <Link
          href={ROUTES.dashboard}
          className="flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition-colors"
        >
          ← Назад до профілю
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
