'use client';

import { AlertTriangle, Check, FileText, Shield } from 'lucide-react';
import { useState } from 'react';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsent: (agreeToShare: boolean, hasNotSignedNda: boolean) => Promise<void>;
}

export default function ConsentModal({ isOpen, onClose, onConsent }: ConsentModalProps) {
  const [agreeToShare, setAgreeToShare] = useState(false);
  const [hasNotSignedNda, setHasNotSignedNda] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!agreeToShare || !hasNotSignedNda) {
      setError('Обидві згоди є обов\'язковими для розміщення замовлення');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      await onConsent(agreeToShare, hasNotSignedNda);
      // Modal will be closed by parent component after successful consent
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Помилка при збереженні згоди');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-base-100 w-full max-w-2xl rounded-lg shadow-xl">
        {/* Header */}
        <div className="border-b-base-300 border-b p-6">
          <div className="flex items-start gap-4">
            <div className="bg-warning/10 text-warning flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Згода на обробку файлів</h2>
              <p className="text-base-content/70 mt-2">
                Для розміщення замовлення необхідно надати згоду на передачу файлів
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6">
          {/* Explanation */}
          <div className="bg-info/10 border-info/30 rounded-lg border-l-4 p-4">
            <div className="flex gap-3">
              <FileText className="text-info h-5 w-5 shrink-0" />
              <div className="text-sm">
                <p className="text-base-content/90 font-semibold">Чому це необхідно?</p>
                <p className="text-base-content/70 mt-1">
                  Для виконання замовлення нам потрібен доступ до ваших 3D моделей.
                  Це необхідно для обробки та виробництва ваших замовлень.
                </p>
              </div>
            </div>
          </div>

          {/* Consent checkboxes */}
          <div className="space-y-4">
            {/* Checkbox 1: Agree to share files */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreeToShare}
                onChange={(e) => {
                  setAgreeToShare(e.target.checked);
                  setError(null);
                }}
                className="checkbox checkbox-primary mt-1"
                disabled={isSubmitting}
              />
              <div className="flex-1">
                <p className="font-semibold">
                  Я погоджуюся на обробку та використання моїх файлів для виконання замовлення
                </p>
                <p className="text-base-content/60 mt-1 text-sm">
                  Ваші файли будуть використані для виробництва вашого замовлення
                </p>
              </div>
            </label>

            {/* Checkbox 2: Has not signed NDA */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={hasNotSignedNda}
                onChange={(e) => {
                  setHasNotSignedNda(e.target.checked);
                  setError(null);
                }}
                className="checkbox checkbox-primary mt-1"
                disabled={isSubmitting}
              />
              <div className="flex-1">
                <p className="font-semibold">
                  Я підтверджую, що НЕ підписував(ла) угоду про нерозголошення (NDA), яка
                  забороняє передачу цих файлів третім особам
                </p>
                <p className="text-base-content/60 mt-1 text-sm">
                  Якщо ви підписали NDA, будь ласка, зверніться до нас для обговорення альтернативних
                  варіантів виконання замовлення
                </p>
              </div>
            </label>
          </div>

          {/* Warning notice */}
          <div className="bg-warning/10 border-warning/30 rounded-lg border-l-4 p-4">
            <div className="flex gap-3">
              <AlertTriangle className="text-warning h-5 w-5 shrink-0" />
              <div className="text-sm">
                <p className="text-base-content/90 font-semibold">Важливо!</p>
                <p className="text-base-content/70 mt-1">
                  Надаючи згоду, ви підтверджуєте, що маєте права на передачу цих файлів і що вони не
                  містять конфіденційної інформації, захищеної угодою про нерозголошення.
                </p>
              </div>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-error/10 border-error/30 rounded-lg border-l-4 p-4">
              <p className="text-error text-sm">{error}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t-base-300 flex gap-3 border-t p-6">
          <button
            onClick={onClose}
            className="btn btn-ghost flex-1"
            disabled={isSubmitting}
          >
            Скасувати
          </button>
          <button
            onClick={handleSubmit}
            className="btn btn-primary flex-1"
            disabled={!agreeToShare || !hasNotSignedNda || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Збереження...
              </>
            ) : (
              <>
                <Check className="h-5 w-5" />
                Погодитися та продовжити
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
