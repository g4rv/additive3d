import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Адмін панель | Additive3D',
};

export default function AdminDashboardPage() {
  // Redirect to users page
  redirect(ROUTES.adminUsers);
}
