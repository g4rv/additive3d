'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastConfig {
  id?: string;
  message: string;
  type?: ToastType;
  duration?: number; // milliseconds, 0 = no auto-dismiss
  description?: string;
}

interface ToastItemProps extends ToastConfig {
  onClose: (id: string) => void;
}

function ToastItem({ id, message, description, type = 'info', duration = 4000, onClose }: ToastItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    setTimeout(() => setIsVisible(true), 10);

    // Auto-dismiss after duration
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id!);
    }, 300);
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-success" />,
    error: <AlertCircle className="w-5 h-5 text-error" />,
    warning: <AlertTriangle className="w-5 h-5 text-warning" />,
    info: <Info className="w-5 h-5 text-info" />,
  };

  return (
    <div
      className={`
        pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg
        bg-base-200 border border-base-300
        transform transition-all duration-300 ease-out
        ${isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-base-content">{message}</p>
          {description && (
            <p className="mt-1 text-sm text-base-content/70">{description}</p>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 btn btn-xs btn-ghost btn-square"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

interface ToastContainerProps {
  toasts: (ToastConfig & { id: string })[];
  onClose: (id: string) => void;
}

function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return createPortal(
    <div className="fixed top-0 right-0 z-[9999] p-4 space-y-3 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>,
    document.body
  );
}

// Toast Manager Hook
let toastId = 0;

export function useToast() {
  const [toasts, setToasts] = useState<(ToastConfig & { id: string })[]>([]);
  const [mounted, setMounted] = useState(false);

  // Ensure we only render portal on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const show = (config: ToastConfig) => {
    const id = config.id || `toast-${++toastId}`;
    setToasts((prev) => [...prev, { ...config, id }]);
  };

  const success = (message: string, description?: string, duration?: number) => {
    show({ message, description, type: 'success', duration });
  };

  const error = (message: string, description?: string, duration?: number) => {
    show({ message, description, type: 'error', duration: duration ?? 6000 });
  };

  const warning = (message: string, description?: string, duration?: number) => {
    show({ message, description, type: 'warning', duration });
  };

  const info = (message: string, description?: string, duration?: number) => {
    show({ message, description, type: 'info', duration });
  };

  const close = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const closeAll = () => {
    setToasts([]);
  };

  return {
    toasts,
    show,
    success,
    error,
    warning,
    info,
    close,
    closeAll,
    ToastContainer: mounted ? () => <ToastContainer toasts={toasts} onClose={close} /> : () => null,
  };
}
