import { requireAdmin } from '@/lib/auth/route-protection';
import AdminSidebar from './components/AdminSidebar';

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Verify user is authenticated and has admin role
  await requireAdmin();

  return (
    <div className="min-h-no-header-screen flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
