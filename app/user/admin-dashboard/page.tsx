import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Адмін панель',
  description: 'Панель адміністратора для керування користувачами, замовленнями та налаштуваннями платформи Additive3D.',
  path: '/user/admin-dashboard',
  noIndex: true,
});

export default function AdminDashboardPage() {
  // Redirect to users page
  redirect(ROUTES.adminUsers);
}
