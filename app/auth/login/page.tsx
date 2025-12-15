'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import { useActionState } from 'react';
import { signIn } from './actions';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import { ROUTES } from '@/lib/constants';

export default function LoginPage() {
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
            {/* Error Message */}
            {state?.error && (
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
                  placeholder="ваша@пошта.com"
                />
              </div>
              {state?.fieldErrors?.email && (
                <p className="text-error text-xs">{state.fieldErrors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                Пароль
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50">
                  <Lock className="size-5" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  defaultValue={state?.values?.password || ''}
                  className={`w-full bg-base-300 border rounded pl-12 pr-4 py-3 text-base-content placeholder:text-base-content/40 focus:outline-none transition-colors duration-[var(--duration-normal)] ${
                    state?.fieldErrors?.password
                      ? 'border-error focus:border-error'
                      : 'border-transparent focus:border-primary'
                  }`}
                  placeholder="Введіть ваш пароль"
                />
              </div>
              {state?.fieldErrors?.password && (
                <p className="text-error text-xs">{state.fieldErrors.password}</p>
              )}
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
          <a href={ROUTES.register} className="text-primary hover:text-primary/80 font-medium transition-colors duration-[var(--duration-fast)]">
            Створити акаунт
          </a>
        </div>
      </div>
    </section>
  );
}
