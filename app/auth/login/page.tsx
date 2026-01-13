'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import PasswordInput from '@/components/ui/password-input/PasswordInput';
import ButtonLink from '@/components/ui/button-link';
import { useActionState, Suspense } from 'react';
import { signIn } from './actions';
import { Mail, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';

function LoginForm() {
  const searchParams = useSearchParams();
  const successMessage = searchParams.get('message');

  const initial = {
    error: '',
    fieldErrors: {} as Record<string, string | undefined>,
    values: {} as Record<string, string | undefined>
  };
  const [state, formAction] = useActionState(signIn, initial);

  return (
    <section className="min-h-no-header-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Ласкаво просимо</h1>
          <p className="text-base-content/70">Увійдіть до свого акаунту</p>
        </div>

        {/* Login Card */}
        <div className="bg-base-200 rounded-box p-8 shadow-lg">
          <form action={formAction} className="flex flex-col gap-6">
            {/* Success Message */}
            {successMessage && (
              <div className="alert alert-success">
                <CheckCircle className="h-6 w-6" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* Error Message */}
            {state?.error && (
              <div className="alert alert-error">
                <AlertCircle className="size-6" />
                <span>{state.error}</span>
              </div>
            )}
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Електронна пошта
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50">
                  <Mail className="size-5" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={state?.values?.email || ''}
                  className={`w-full bg-base-300 border rounded pl-12 pr-4 py-3 text-base-content placeholder:text-base-content/40 focus:outline-none transition-colors duration-[var(--duration-normal)] ${
                    state?.fieldErrors?.email
                      ? 'border-error focus:border-error'
                      : 'border-transparent focus:border-primary'
                  }`}
                  placeholder="email@example.com"
                />
              </div>
              {state?.fieldErrors?.email && (
                <p className="text-error text-xs">{state.fieldErrors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <PasswordInput
              id="password"
              name="password"
              label="Пароль"
              placeholder="Введіть ваш пароль"
              error={state?.fieldErrors?.password}
              required
            />

            {/* Forgot Password Link */}
            <div className="text-right">
              <ButtonLink href={ROUTES.forgotPassword} variant="string" size="small">
                Забули пароль?
              </ButtonLink>
            </div>

            {/* Submit Button */}
            <SubmitButton
              variant="secondary"
              size="large"
              className="w-full"
              text="Увійти"
              pendingText="Вхід..."
            />

            {/* Security Assurance */}
            <div className="flex items-center justify-center gap-2 text-xs text-base-content/50">
              <ShieldCheck className="size-4" />
              <span>Безпечно і Конфіденційно</span>
            </div>
          </form>
        </div>

        {/* Register Link */}
        <div className="mt-6 text-center text-sm text-base-content/60">
          Немає акаунту?{' '}
          <ButtonLink href={ROUTES.register} variant="string" size="small">
            Створити акаунт
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-no-header-screen flex items-center justify-center">Завантаження...</div>}>
      <LoginForm />
    </Suspense>
  );
}
