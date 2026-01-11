'use client';

import { useRouter } from 'next/navigation';
import { Package, User, Calendar, DollarSign, FileText, Filter, Wifi, WifiOff } from 'lucide-react';
import OrderRow from './OrderRow';
import { useRealtimeOrders } from '@/lib/hooks/useRealtimeOrders';
import { useToast } from '@/components/ui/toast';
import { useState, useEffect } from 'react';

interface Order {
  id: string;
  user_id: string;
  order_number: string;
  status: string;
  total_price: number;
  total_weight: number;
  files: any;
  created_at: string;
  profiles?: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
}

interface OrdersTableProps {
  orders: Order[];
  currentFilter: string;
}

const OrdersTable = ({ orders: initialOrders, currentFilter }: OrdersTableProps) => {
  const router = useRouter();
  const { info, ToastContainer } = useToast();
  const [isConnected, setIsConnected] = useState(true);

  // Use real-time updates
  const orders = useRealtimeOrders(initialOrders, {
    onOrderInserted: (order) => {
      info('Нове замовлення', `Замовлення ${order.order_number} створено`);
    },
    onOrderUpdated: (order) => {
      info('Замовлення оновлено', `Замовлення ${order.order_number} змінено`);
    },
    onOrderDeleted: (orderId) => {
      info('Замовлення видалено', 'Замовлення було видалено');
    },
  });

  useEffect(() => {
    // Monitor connection status
    const handleOnline = () => setIsConnected(true);
    const handleOffline = () => setIsConnected(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleFilterChange = (status: string) => {
    if (status === 'all') {
      router.push('/user/admin-dashboard/orders');
    } else {
      router.push(`/user/admin-dashboard/orders?status=${status}`);
    }
  };

  return (
    <>
      <div className="bg-base-200 rounded-box shadow-lg">
        {/* Filter Bar */}
        <div className="p-6 border-b border-base-300">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-base-content/70" />
                <span className="text-sm font-medium">Фільтр за статусом:</span>
              </div>
              <select
                value={currentFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="select select-bordered select-sm"
              >
                <option value="all">Всі</option>
                <option value="pending">В очікуванні</option>
                <option value="processing">В роботі</option>
                <option value="completed">Виконано</option>
                <option value="cancelled">Відхилено</option>
              </select>
            </div>

            {/* Real-time status indicator */}
            <div className="flex items-center gap-2 text-xs">
              {isConnected ? (
                <>
                  <Wifi className="w-4 h-4 text-success" />
                  <span className="text-success">Оновлення в реальному часі</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-error" />
                  <span className="text-error">Offline</span>
                </>
              )}
            </div>
          </div>
        </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <span>Номер замовлення</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Користувач</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Дата</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <span>Статус</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Ціна</span>
                </div>
              </th>
              <th className="bg-base-300">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Файлів</span>
                </div>
              </th>
              <th className="bg-base-300">
                <span>Дії</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-base-content/70">
                  Замовлень не знайдено
                </td>
              </tr>
            ) : (
              orders.map((order) => <OrderRow key={order.id} order={order} />)
            )}
          </tbody>
        </table>
      </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};

export default OrdersTable;
