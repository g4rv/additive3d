'use client';

import { useRouter } from 'next/navigation';
import { Package, User, Calendar, DollarSign, FileText, Filter } from 'lucide-react';
import OrderRow from './OrderRow';

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
            {initialOrders.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-base-content/70">
                  Замовлень не знайдено
                </td>
              </tr>
            ) : (
              initialOrders.map((order) => <OrderRow key={order.id} order={order} />)
            )}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default OrdersTable;
