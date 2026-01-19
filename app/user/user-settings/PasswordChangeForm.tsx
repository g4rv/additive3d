'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import { AlertCircle, Shield } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';
import { changePassword } from './actions';
import PasswordInput from '@/components/ui/password-input/PasswordInput';
import { useToast } from '@/components/ui/toast';

export default function PasswordChangeForm() {
  const initial = {
    error: '',
    fieldErrors: {} as Record<string, string | undefined>,
    values: {} as Record<string, string | undefined>,
    success: undefined as string | undefined,
  };
  const [state, formAction] = useActionState(changePassword, initial);
  const { success: showToast, ToastContainer } = useToast();

  // Track password fields for change detection
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Check if all fields are filled
  const hasAllFields = currentPassword.trim() && newPassword.trim() && confirmPassword.trim();

  // Show toast on success and clear fields
  useEffect(() => {
    if (state?.success) {
      showToast(state.success);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  }, [state?.success, showToast]);

  return (
    <>
      <ToastContainer />
      <form action={formAction} className="flex flex-col gap-5">
        {/* Error Message */}
        {state?.error && (
          <div className="alert alert-error">
            <AlertCircle className="h-5 w-5" />
            <span>{state.error}</span>
          </div>
        )}

      {/* Password Requirements Notice */}
      <div className="mb-5">
        <div className="bg-base-300 rounded-lg p-4 border border-base-content/10">
          <div className="flex items-start gap-2.5 mb-3">
            <Shield className="text-primary size-5 flex-shrink-0" />
            <h3 className="text-base-content font-semibold text-sm">Вимоги до пароля</h3>
          </div>
          <ul className="text-base-content/80 space-y-1.5 text-xs grid grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Мінімум 8 символів</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Велика літера (A-Z)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Мала літера (a-z)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Цифра (0-9)</span>
            </li>
          </ul>
        </div>
      </div>

        {/* Password Inputs */}
        <div className="space-y-5">
          <PasswordInput
            id="current_password"
            name="current_password"
            label="Поточний пароль"
            autoComplete="current-password"
            placeholder="Введіть поточний пароль"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            error={state?.fieldErrors?.current_password}
            required
          />

          <PasswordInput
            id="password"
            name="password"
            label="Новий пароль"
            autoComplete="new-password"
            placeholder="Введіть новий пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            error={state?.fieldErrors?.password}
            required
          />

          <PasswordInput
            id="confirm_password"
            name="confirm_password"
            label="Підтвердіть новий пароль"
            autoComplete="new-password"
            placeholder="Підтвердіть новий пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={state?.fieldErrors?.confirm_password}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <SubmitButton
            text="Змінити пароль"
            pendingText="Зміна пароля..."
            className="w-full"
            disabled={!hasAllFields}
          />
        </div>
      </form>
    </>
  );
}
