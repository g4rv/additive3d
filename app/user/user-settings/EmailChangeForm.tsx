'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import { AlertCircle, CheckCircle2, Mail, Info } from 'lucide-react';
import { useActionState } from 'react';
import { changeEmail } from './actions';
import { cn } from '@/utils/cn';

interface EmailChangeFormProps {
  currentEmail: string;
  className?: string;
}

export default function EmailChangeForm({ currentEmail, className }: EmailChangeFormProps) {
  const initial = {
    error: '',
    fieldErrors: {} as Record<string, string | undefined>,
    values: {} as Record<string, string | undefined>,
    success: undefined as string | undefined,
  };
  const [state, formAction] = useActionState(changeEmail, initial);

  return (
    <form action={formAction} className={cn("flex flex-col gap-5", className)}>
      {/* Success Message */}
      {state?.success && (
        <div className="alert alert-success">
          <CheckCircle2 className="h-5 w-5" />
          <span>{state.success}</span>
        </div>
      )}

      {/* Error Message */}
      {state?.error && !state?.success && (
        <div className="alert alert-error">
          <AlertCircle className="h-5 w-5" />
          <span>{state.error}</span>
        </div>
      )}

      {/* Info Notice */}
      <div className="bg-base-300 rounded-lg p-4 border border-base-content/10">
        <div className="flex items-start gap-3">
          <Info className="text-info mt-0.5 size-5 flex-shrink-0" />
          <div>
            <h3 className="text-base-content font-semibold text-sm mb-1">Зміна електронної пошти</h3>
            <p className="text-base-content/70 text-xs">
              Для безпеки, вам потрібно підтвердити зміну на обох адресах: ви отримаєте листи для підтвердження як на поточну, так і на нову адресу. Підтвердіть обидва листи, щоб завершити процес.
            </p>
          </div>
        </div>
      </div>

      {/* Current Email (Read-only) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="current_email" className="text-sm font-medium">
          Поточна електронна пошта
        </label>
        <div className="relative">
          <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
            <Mail className="h-5 w-5" />
          </div>
          <input
            type="email"
            id="current_email"
            value={currentEmail}
            disabled
            className="bg-base-300 text-base-content/70 w-full rounded border border-transparent py-3 pr-4 pl-12 cursor-not-allowed"
          />
        </div>
      </div>

      {/* New Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="new_email" className="text-sm font-medium">
          Нова електронна пошта
        </label>
        <div className="relative">
          <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
            <Mail className="h-5 w-5" />
          </div>
          <input
            type="email"
            id="new_email"
            name="new_email"
            autoComplete="email"
            className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
              state?.fieldErrors?.new_email
                ? 'border-error focus:border-error'
                : 'focus:border-primary border-transparent'
            }`}
            placeholder="новапошта@example.com"
          />
        </div>
        {state?.fieldErrors?.new_email && (
          <p className="text-error text-xs">{state.fieldErrors.new_email}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-auto">
        <SubmitButton
          text="Змінити електронну пошту"
          pendingText="Зміна адреси..."
          className="w-full"
        />
      </div>
    </form>
  );
}
