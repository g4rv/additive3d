'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import { AlertCircle, CheckCircle2, Lock, Shield } from 'lucide-react';
import { useActionState } from 'react';
import { changePassword } from './actions';

export default function PasswordChangeForm() {
  const initial = {
    error: '',
    fieldErrors: {} as Record<string, string | undefined>,
    values: {} as Record<string, string | undefined>,
  };
  const [state, formAction] = useActionState(changePassword, initial);

  return (
    <form action={formAction} className="flex flex-col gap-5">
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

      {/* Security Notice */}
      <div className="bg-base-300 rounded-lg p-4 border border-base-content/10">
        <div className="flex items-start gap-3">
          <Shield className="text-primary mt-0.5 size-5 flex-shrink-0" />
          <div>
            <h3 className="text-base-content font-semibold text-sm mb-1">Вимоги до пароля</h3>
            <ul className="text-base-content/70 space-y-1 text-xs">
              <li>• Мінімум 8 символів</li>
              <li>• Хоча б одна велика літера (A-Z)</li>
              <li>• Хоча б одна мала літера (a-z)</li>
              <li>• Хоча б одна цифра (0-9)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Current Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="current_password" className="text-sm font-medium">
            Поточний пароль
          </label>
          <div className="relative">
            <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type="password"
              id="current_password"
              name="current_password"
              autoComplete="current-password"
              className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
                state?.fieldErrors?.current_password
                  ? 'border-error focus:border-error'
                  : 'focus:border-primary border-transparent'
              }`}
              placeholder="Введіть поточний пароль"
            />
          </div>
          {state?.fieldErrors?.current_password && (
            <p className="text-error text-xs">{state.fieldErrors.current_password}</p>
          )}
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="new_password" className="text-sm font-medium">
            Новий пароль
          </label>
          <div className="relative">
            <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type="password"
              id="new_password"
              name="new_password"
              autoComplete="new-password"
              className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
                state?.fieldErrors?.new_password
                  ? 'border-error focus:border-error'
                  : 'focus:border-primary border-transparent'
              }`}
              placeholder="Введіть новий пароль"
            />
          </div>
          {state?.fieldErrors?.new_password && (
            <p className="text-error text-xs">{state.fieldErrors.new_password}</p>
          )}
        </div>

        {/* Confirm New Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="confirm_password" className="text-sm font-medium">
            Підтвердіть новий пароль
          </label>
          <div className="relative">
            <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              autoComplete="new-password"
              className={`bg-base-300 w-full rounded border py-3 pr-4 pl-12 transition-colors focus:outline-none ${
                state?.fieldErrors?.confirm_password
                  ? 'border-error focus:border-error'
                  : 'focus:border-primary border-transparent'
              }`}
              placeholder="Підтвердіть новий пароль"
            />
          </div>
          {state?.fieldErrors?.confirm_password && (
            <p className="text-error text-xs">{state.fieldErrors.confirm_password}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <SubmitButton
          text="Змінити пароль"
          pendingText="Зміна пароля..."
          className="w-full lg:w-auto lg:min-w-48"
        />
      </div>
    </form>
  );
}
