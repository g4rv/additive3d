'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export type PopupType = 'success' | 'error' | 'warning' | 'info' | 'confirm';

export interface PopupConfig {
  title?: string;
  message: string;
  type?: PopupType;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface PopupProps extends PopupConfig {
  isOpen: boolean;
  onClose: () => void;
}

export function Popup({
  isOpen,
  onClose,
  title,
  message,
  type = 'info',
  confirmText = 'OK',
  cancelText = 'Скасувати',
  onConfirm,
  onCancel,
}: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 200);
  };

  const handleConfirm = () => {
    onConfirm?.();
    handleClose();
  };

  const handleCancel = () => {
    onCancel?.();
    handleClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && type !== 'confirm') {
      handleClose();
    }
  };

  if (!isOpen && !isVisible) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-success" />,
    error: <AlertCircle className="w-5 h-5 text-error" />,
    warning: <AlertTriangle className="w-5 h-5 text-warning" />,
    info: <Info className="w-5 h-5 text-info" />,
    confirm: <AlertCircle className="w-5 h-5 text-warning" />,
  };

  const content = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleBackdropClick}
      />

      {/* Modal Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-md transform transition-all duration-200 ${
            isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-base-200 rounded-lg shadow-xl border border-base-300 overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4 border-b border-base-300">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                {/* Status Icon */}
                <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
                {/* Title */}
                <div className="flex-1 min-w-0">
                  {title && (
                    <h3 className="text-lg font-semibold text-base-content">
                      {title}
                    </h3>
                  )}
                </div>
              </div>
              {/* Close button only for non-confirm dialogs */}
              {type !== 'confirm' && (
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 btn btn-sm btn-ghost btn-square ml-2"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Body */}
            <div className="p-6 pt-4">
              <p className="text-base text-base-content/80 whitespace-pre-line break-words">
                {message}
              </p>
            </div>

            {/* Footer with Actions */}
            <div className="flex gap-3 p-6 pt-0">
              {type === 'confirm' ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="flex-1 btn btn-ghost"
                  >
                    {cancelText}
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="flex-1 btn btn-primary"
                  >
                    {confirmText}
                  </button>
                </>
              ) : onConfirm ? (
                <button
                  onClick={handleConfirm}
                  className="w-full btn btn-primary"
                >
                  {confirmText}
                </button>
              ) : (
                <button
                  onClick={handleClose}
                  className="w-full btn btn-primary"
                >
                  {confirmText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
}

// Hook for managing popup state
export function usePopup() {
  const [popup, setPopup] = useState<(PopupConfig & { isOpen: boolean }) | null>(null);

  const show = (config: PopupConfig) => {
    setPopup({ ...config, isOpen: true });
  };

  const showSuccess = (message: string, title?: string) => {
    show({ message, title, type: 'success' });
  };

  const showError = (message: string, title?: string) => {
    show({ message, title, type: 'error' });
  };

  const showWarning = (message: string, title?: string) => {
    show({ message, title, type: 'warning' });
  };

  const showInfo = (message: string, title?: string) => {
    show({ message, title, type: 'info' });
  };

  const showConfirm = (config: Omit<PopupConfig, 'type'>) => {
    return new Promise<boolean>((resolve) => {
      show({
        ...config,
        type: 'confirm',
        onConfirm: () => {
          config.onConfirm?.();
          resolve(true);
        },
        onCancel: () => {
          config.onCancel?.();
          resolve(false);
        },
      });
    });
  };

  const close = () => {
    setPopup((prev) => (prev ? { ...prev, isOpen: false } : null));
  };

  return {
    popup,
    show,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showConfirm,
    close,
  };
}
