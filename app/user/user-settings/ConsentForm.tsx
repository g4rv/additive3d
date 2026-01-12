'use client';

import { useState } from 'react';
import { Check, X, AlertTriangle, FileText, Shield } from 'lucide-react';
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

  const hasGivenConsent = (profile.agree_to_share_files ?? false) && (profile.has_not_signed_nda ?? false);

  const handleSubmit = async () => {
    if (!agreeToShare || !hasNotSignedNda) {
      setError('Обидві згоди є обов\'язковими');
      return;
    }

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

  return (
    <div className="space-y-4">
      {/* Consent Status Display */}
      <div className="bg-base-100 rounded-lg p-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            {hasGivenConsent ? (
              <div className="bg-success/10 p-1 rounded">
                <Check className="w-4 h-4 text-success" />
              </div>
            ) : (
              <div className="bg-base-300 p-1 rounded">
                <X className="w-4 h-4 text-base-content/40" />
              </div>
            )}
            <div className="flex-1">
              <p className="font-semibold">Статус згоди</p>
              <p className="text-sm text-base-content/70">
                {hasGivenConsent
                  ? 'Згоду надано - ви можете розміщувати замовлення'
                  : 'Згоду не надано - необхідно для розміщення замовлень'}
              </p>
            </div>
          </div>

          {profile.consent_given_at && (
            <div className="border-t border-base-300 pt-3 mt-3">
              <p className="text-sm text-base-content/60">
                Згода надана:{' '}
                {new Date(profile.consent_given_at).toLocaleDateString('uk-UA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-info/10 border-info/30 border-l-4 rounded-lg p-4">
        <div className="flex gap-3">
          <FileText className="text-info h-5 w-5 shrink-0" />
          <div className="text-sm">
            <p className="text-base-content/90 font-semibold">Чому це необхідно?</p>
            <p className="text-base-content/70 mt-1">
              Для виконання замовлення нам потрібен доступ до ваших 3D моделей. Файли
              передаються партнерам-виробникам для обробки та виробництва ваших замовлень.
            </p>
          </div>
        </div>
      </div>

      {/* Consent Form */}
      <div className="bg-base-100 rounded-lg p-4 space-y-4">
        <p className="font-semibold text-sm">Дати згоду:</p>

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
            <p className="font-medium text-sm">
              Я погоджуюся на обробку та використання моїх файлів для виконання замовлення
            </p>
            <p className="text-base-content/60 mt-1 text-xs">
              Ваші файли будуть використані для виробництва вашого замовлення
            </p>
          </div>
        </label>

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
            <p className="font-medium text-sm">
              Я підтверджую, що НЕ підписував(ла) угоду про нерозголошення (NDA), яка забороняє
              передачу цих файлів третім особам
            </p>
            <p className="text-base-content/60 mt-1 text-xs">
              Якщо ви підписали NDA, будь ласка, зверніться до нас
            </p>
          </div>
        </label>

        {/* Warning notice */}
        <div className="bg-warning/10 border-warning/30 border-l-4 rounded-lg p-3">
          <div className="flex gap-2">
            <AlertTriangle className="text-warning h-4 w-4 shrink-0" />
            <p className="text-xs text-base-content/80">
              Надаючи згоду, ви підтверджуєте, що маєте права на передачу цих файлів і що вони не
              містять конфіденційної інформації, захищеної NDA.
            </p>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-error/10 border-error/30 border-l-4 rounded-lg p-3">
            <p className="text-error text-xs">{error}</p>
          </div>
        )}

        {/* Success message */}
        {success && (
          <div className="bg-success/10 border-success/30 border-l-4 rounded-lg p-3">
            <p className="text-success text-xs flex items-center gap-2">
              <Check className="w-4 h-4" />
              Згоду успішно збережено!
            </p>
          </div>
        )}

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={!agreeToShare || !hasNotSignedNda || isSubmitting}
          className="btn btn-primary btn-sm w-full"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-xs"></span>
              Збереження...
            </>
          ) : (
            <>
              <Shield className="w-4 h-4" />
              Зберегти згоду
            </>
          )}
        </button>
      </div>
    </div>
  );
}
