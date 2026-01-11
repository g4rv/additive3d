'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Package, Clock, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { Popup, usePopup } from '@/components/ui/popup';
import { useToast } from '@/components/ui/toast';
import { deleteUserOrder } from './actions';
import { useRealtimeOrders } from '@/lib/hooks/useRealtimeOrders';

interface OrderFile {
  name: string;
  url: string;
  weight: number;
  quantity: number;
  includePaint: boolean;
  pricePerUnit: number;
  totalPrice: number;
}

interface Order {
  id: string;
  user_id: string;
  order_number: string;
  status: string;
  total_price: number;
  total_weight: number;
  files: any; // JSON from database, will be OrderFile[] at runtime
  created_at: string;
  profiles?: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
}

interface OrdersListProps {
  orders: Order[];
  userId: string;
}

export default function OrdersList({ orders: initialOrders, userId }: OrdersListProps) {
  const [deletingOrderId, setDeletingOrderId] = useState<string | null>(null);
  const { popup, showConfirm, close } = usePopup();
  const { success: showSuccessToast, error: showErrorToast, info, ToastContainer } = useToast();

  // Use real-time updates filtered by userId
  const orders = useRealtimeOrders(initialOrders, {
    userId,
    onOrderInserted: (order) => {
      info('Нове замовлення', `Замовлення ${order.order_number} створено`);
    },
    onOrderUpdated: (order) => {
      info('Замовлення оновлено', `Статус замовлення ${order.order_number} змінено`);
    },
    onOrderDeleted: (orderId) => {
      info('Замовлення видалено', 'Замовлення було видалено');
    },
  });

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

  const canDeleteOrder = (status: string) => {
    // Users can delete orders that are pending, completed, or cancelled
    // But NOT processing
    return ['pending', 'completed', 'cancelled'].includes(status);
  };

  const handleDeleteOrder = async (order: Order) => {
    const confirmed = await showConfirm({
      title: 'Видалити замовлення?',
      message:
        `Ви впевнені, що хочете видалити замовлення ${order.order_number}?\n\n` +
        `Це призведе до:\n` +
        `- Видалення всіх файлів (${order.files.length} шт.)\n` +
        `- Втрати інформації про замовлення\n\n` +
        `Цю дію неможливо скасувати!`,
      confirmText: 'Видалити',
      cancelText: 'Скасувати',
    });

    if (!confirmed) return;

    setDeletingOrderId(order.id);

    const result = await deleteUserOrder(order.id);

    setDeletingOrderId(null);

    if (result.success) {
      showSuccessToast('Замовлення видалено', `Замовлення ${order.order_number} успішно видалено`);
      // Real-time updates will automatically remove the order from the list
    } else {
      showErrorToast('Помилка видалення', result.error || 'Не вдалося видалити замовлення');
    }
  };

  if (orders.length === 0) {
    return (
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
    );
  }

  return (
    <>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-base-100 rounded-lg p-5 border border-base-300 hover:border-primary/50 transition-colors"
          >
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
              <div className="flex items-center gap-2">
                {getStatusBadge(order.status)}
                {canDeleteOrder(order.status) && (
                  <button
                    onClick={() => handleDeleteOrder(order)}
                    disabled={deletingOrderId === order.id}
                    className="btn btn-xs btn-error btn-ghost gap-1"
                    title="Видалити замовлення"
                  >
                    {deletingOrderId === order.id ? (
                      <span className="loading loading-spinner loading-xs"></span>
                    ) : (
                      <Trash2 className="w-3 h-3" />
                    )}
                  </button>
                )}
              </div>
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
                    <span className="badge badge-sm badge-ghost">+{order.files.length - 3} більше</span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirmation Popup */}
      {popup && (
        <Popup
          isOpen={popup.isOpen}
          onClose={close}
          title={popup.title}
          message={popup.message}
          type={popup.type}
          confirmText={popup.confirmText}
          cancelText={popup.cancelText}
          onConfirm={popup.onConfirm}
          onCancel={popup.onCancel}
        />
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
}
