import { getOrdersByStatus } from '@/lib/supabase/queries';
import OrdersTable from './OrdersTable';

interface OrdersPageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function OrdersPage({ searchParams }: OrdersPageProps) {
  const params = await searchParams;
  const statusFilter = params.status || 'all';

  // Fetch orders with optional status filter
  const orders = await getOrdersByStatus(statusFilter);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Управління замовленнями</h1>
        <p className="text-base-content/70">Перегляд та обробка всіх замовлень системи</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <div className="bg-base-200 rounded-box p-6 shadow-lg">
          <div>
            <p className="text-sm text-base-content/70 mb-1">Всього замовлень</p>
            <p className="text-3xl font-bold">{orders.length}</p>
          </div>
        </div>
        <div className="bg-base-200 rounded-box p-6 shadow-lg">
          <div>
            <p className="text-sm text-base-content/70 mb-1">В очікуванні</p>
            <p className="text-3xl font-bold">
              {orders.filter((o) => o.status === 'pending').length}
            </p>
          </div>
        </div>
        <div className="bg-base-200 rounded-box p-6 shadow-lg">
          <div>
            <p className="text-sm text-base-content/70 mb-1">В роботі</p>
            <p className="text-3xl font-bold">
              {orders.filter((o) => o.status === 'processing').length}
            </p>
          </div>
        </div>
        <div className="bg-base-200 rounded-box p-6 shadow-lg">
          <div>
            <p className="text-sm text-base-content/70 mb-1">Виконано</p>
            <p className="text-3xl font-bold">
              {orders.filter((o) => o.status === 'completed').length}
            </p>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <OrdersTable orders={orders} currentFilter={statusFilter} />
    </div>
  );
}
