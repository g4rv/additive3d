'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Shield, FileText } from 'lucide-react';
import { updateUserConsent } from './actions';

interface ConsentFormProps {
  profile: {
    agree_to_share_files?: boolean;
    has_not_signed_nda?: boolean;
    consent_given_at?: string | null;
  };
}

export default function ConsentForm({ profile }: ConsentFormProps) {
  const [agreeToShare, setAgreeToShare] = useState(profile.agree_to_share_files ?? false);
  const [hasNotSignedNda, setHasNotSignedNda] = useState(profile.has_not_signed_nda ?? false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const result = await updateUserConsent(agreeToShare, hasNotSignedNda);
      if (!result.success) {
        throw new Error(result.error || 'Failed to update consent');
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Помилка при збереженні згоди');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasGivenConsent = agreeToShare && hasNotSignedNda;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 grow">
      {/* Success Message */}
      {success && (
        <div className="alert alert-success">
          <CheckCircle2 className="h-5 w-5" />
          <span>Зміни успішно збережено!</span>
        </div>
      )}

      {/* Error Message */}
      {error && !success && (
        <div className="alert alert-error">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-base-300 rounded-lg p-4 border border-base-content/10">
        <div className="flex items-start gap-2.5">
          <FileText className="text-info size-5 flex-shrink-0" />
          <div>
            <h3 className="text-base-content font-semibold text-sm">Про згоду</h3>
            <p className="text-base-content/80 text-xs mt-2">
              Для виконання замовлення нам потрібен доступ до ваших 3D моделей. Файли передаються
              партнерам-виробникам для обробки та виробництва ваших замовлень.
            </p>
            <p className="text-base-content/60 text-xs mt-2">
              Статус: {hasGivenConsent ? (
                <span className="text-success">Згоду надано</span>
              ) : (
                <span className="text-warning">Згоду не надано (необхідно для замовлень)</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="space-y-4">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={agreeToShare}
            onChange={(e) => {
              setAgreeToShare(e.target.checked);
              setError(null);
            }}
            className="checkbox checkbox-primary mt-0.5"
            disabled={isSubmitting}
          />
          <span className="text-sm">
            Я погоджуюся на обробку та використання моїх файлів для виконання замовлення
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={hasNotSignedNda}
            onChange={(e) => {
              setHasNotSignedNda(e.target.checked);
              setError(null);
            }}
            className="checkbox checkbox-primary mt-0.5"
            disabled={isSubmitting}
          />
          <span className="text-sm">
            Я підтверджую, що НЕ підписував(ла) угоду про нерозголошення (NDA), яка забороняє
            передачу цих файлів третім особам
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="mt-auto">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Збереження...
            </>
          ) : (
            <>
              <Shield className="w-4 h-4" />
              Зберегти зміни
            </>
          )}
        </button>
      </div>
    </form>
  );
}
