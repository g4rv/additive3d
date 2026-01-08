'use client';

import { useState } from 'react';
import { Download, ChevronDown, ChevronUp, Archive, Trash2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import { updateOrderStatus, deleteOrder } from './actions';
import { downloadFilesAsZip, downloadFile, FileToDownload } from '@/lib/utils/file-download';

interface OrderFile {
  name: string;
  url: string;
  weight: number;
  quantity: number;
  includePaint: boolean;
  pricePerUnit: number;
  totalPrice: number;
  fileSize: number;
}

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_price: number;
  files: OrderFile[];
  created_at: string;
  profiles: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
}

interface OrderRowProps {
  order: Order;
}

const OrderRow = ({ order }: OrderRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const files: OrderFile[] = Array.isArray(order.files) ? order.files : [];

  const handleStatusChange = async (newStatus: 'pending' | 'processing' | 'completed' | 'cancelled') => {
    if (newStatus === order.status) return;

    setIsLoading(true);
    setMessage(null);

    const result = await updateOrderStatus(order.id, newStatus);

    setIsLoading(false);

    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'Status updated' });
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to update status' });
    }
  };

  const handleDownloadAll = async () => {
    if (files.length === 0) return;

    setIsLoading(true);
    setMessage(null);

    const filesToDownload: FileToDownload[] = files.map((file) => ({
      url: file.url,
      name: `${file.name}.stl`,
    }));

    const result = await downloadFilesAsZip(
      filesToDownload,
      `${order.order_number}_files.zip`
    );

    setIsLoading(false);

    if (result.success) {
      setMessage({
        type: 'success',
        text: `Downloaded ${result.downloadedCount}/${result.totalCount} files`,
      });
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to download files' });
    }
  };

  const handleDownloadFile = (file: OrderFile) => {
    downloadFile(file.url, `${file.name}.stl`);
  };

  const handleDelete = async () => {
    // Confirm before deleting
    const confirmed = window.confirm(
      `Ви впевнені, що хочете видалити замовлення ${order.order_number}?\n\n` +
      `Ця дія видалить замовлення та всі файли (${files.length} шт.) з Cloudflare R2.\n\n` +
      `Цю дію неможливо скасувати!`
    );

    if (!confirmed) return;

    setIsDeleting(true);
    setMessage(null);

    const result = await deleteOrder(order.id);

    setIsDeleting(false);

    if (result.success) {
      setMessage({
        type: 'success',
        text: `Замовлення видалено (${result.filesDeleted} файлів)`,
      });
      setTimeout(() => {
        // Refresh the page to show updated list
        window.location.reload();
      }, 1500);
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to delete order' });
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'badge-warning';
      case 'processing':
        return 'badge-info';
      case 'completed':
        return 'badge-success';
      case 'cancelled':
        return 'badge-error';
      default:
        return 'badge-ghost';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'В очікуванні';
      case 'processing':
        return 'В роботі';
      case 'completed':
        return 'Виконано';
      case 'cancelled':
        return 'Відхилено';
      default:
        return status;
    }
  };

  return (
    <>
      <tr className={`hover ${isLoading || isDeleting ? 'opacity-50' : ''}`}>
        {/* Order Number */}
        <td>
          <div className="font-medium flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-xs btn-ghost"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            {order.order_number}
          </div>
          {message && (
            <div
              className={`text-xs mt-1 ${
                message.type === 'success' ? 'text-success' : 'text-error'
              }`}
            >
              {message.text}
            </div>
          )}
        </td>

        {/* User */}
        <td>
          <div className="text-sm">
            {order.profiles ? (
              <>
                <div className="font-medium">
                  {order.profiles.first_name} {order.profiles.last_name}
                </div>
                <div className="text-xs text-base-content/70">{order.profiles.email}</div>
              </>
            ) : (
              <span className="text-base-content/50">—</span>
            )}
          </div>
        </td>

        {/* Date */}
        <td>
          <div className="text-sm">
            {new Date(order.created_at).toLocaleDateString('uk-UA', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </td>

        {/* Status */}
        <td>
          <select
            value={order.status}
            onChange={(e) =>
              handleStatusChange(e.target.value as 'pending' | 'processing' | 'completed' | 'cancelled')
            }
            disabled={isLoading}
            className="select select-sm select-bordered w-full max-w-xs"
          >
            <option value="pending">В очікуванні</option>
            <option value="processing">В роботі</option>
            <option value="completed">Виконано</option>
            <option value="cancelled">Відхилено</option>
          </select>
        </td>

        {/* Price */}
        <td>
          <div className="text-sm font-medium">{order.total_price.toFixed(2)} ₴</div>
        </td>

        {/* Files Count */}
        <td>
          <span className={cn('badge badge-sm', getStatusBadgeClass(order.status))}>
            {files.length}
          </span>
        </td>

        {/* Actions */}
        <td>
          <div className="flex gap-2">
            <button
              onClick={handleDownloadAll}
              disabled={isLoading || files.length === 0}
              className="btn btn-xs btn-primary gap-1"
              title="Download all files as ZIP"
            >
              <Archive className="w-3 h-3" />
              ZIP
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting || isLoading}
              className="btn btn-xs btn-error gap-1"
              title="Delete order"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        </td>
      </tr>

      {/* Expanded Row - Files Details */}
      {isExpanded && (
        <tr>
          <td colSpan={7} className="bg-base-300/30">
            <div className="p-4">
              <h4 className="font-medium mb-3">Файли замовлення:</h4>
              {files.length === 0 ? (
                <p className="text-sm text-base-content/70">Файлів немає</p>
              ) : (
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-base-200 rounded-lg p-3"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-sm">{file.name}.stl</div>
                        <div className="text-xs text-base-content/70 mt-1">
                          Вага: {file.weight}г | Кількість: {file.quantity} | Ціна за од.:{' '}
                          {file.pricePerUnit.toFixed(2)} ₴
                          {file.includePaint && ' | З фарбуванням'}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownloadFile(file)}
                        className="btn btn-xs btn-ghost gap-1"
                        title="Download file"
                      >
                        <Download className="w-3 h-3" />
                        Завантажити
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default OrderRow;
