import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants';

export default function AdminDashboardPage() {
  // Redirect to users page
  redirect(ROUTES.adminUsers);
}
