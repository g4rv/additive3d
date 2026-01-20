'use client';

import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import PasswordInput from '@/components/ui/password-input/PasswordInput';
import ButtonLink from '@/components/ui/button-link';
import { ROUTES } from '@/lib/constants';
import { Building2, Mail, Phone, ShieldCheck, User } from 'lucide-react';
import { useActionState } from 'react';
import { signUp } from './actions';

export default function RegisterPage() {
  const initial = {
    error: '',
    fieldErrors: {} as Record<string, string | undefined>,
    values: {} as Record<string, string | undefined>,
  };
  const [state, formAction] = useActionState(signUp, initial);

  return (
    <section className="min-h-no-header-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold">Створити акаунт</h1>
          <p className="text-base-content/70">Приєднуйтесь до нашої виробничої платформи</p>
        </div>

        {/* Registration Card */}
        <div className="bg-base-200 rounded-box p-8 shadow-lg">
          <form action={formAction} className="flex flex-col gap-6">
            {/* Error Message */}
            {state?.error && (
              <div className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{state.error}</span>
              </div>
            )}
            {/* Name Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="text-sm font-medium">
                  Ім&apos;я <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
                    <User className="size-5" />
                  </div>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    defaultValue={state?.values?.first_name || ''}
                    className={`bg-base-300 text-base-content placeholder:text-base-content/40 w-full rounded border py-3 pr-4 pl-12 transition-colors duration-[var(--duration-normal)] focus:outline-none ${
                      state?.fieldErrors?.first_name
                        ? 'border-error focus:border-error'
                        : 'focus:border-primary border-transparent'
                    }`}
                    placeholder="Іван"
                  />
                </div>
                {state?.fieldErrors?.first_name && (
                  <p className="text-error text-xs">{state.fieldErrors.first_name}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="last_name" className="text-sm font-medium">
                  Прізвище <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
                    <User className="size-5" />
                  </div>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    defaultValue={state?.values?.last_name || ''}
                    className={`bg-base-300 text-base-content placeholder:text-base-content/40 w-full rounded border py-3 pr-4 pl-12 transition-colors duration-[var(--duration-normal)] focus:outline-none ${
                      state?.fieldErrors?.last_name
                        ? 'border-error focus:border-error'
                        : 'focus:border-primary border-transparent'
                    }`}
                    placeholder="Петренко"
                  />
                </div>
                {state?.fieldErrors?.last_name && (
                  <p className="text-error text-xs">{state.fieldErrors.last_name}</p>
                )}
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Електронна пошта <span className="text-error">*</span>
              </label>
              <div className="relative">
                <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
                  <Mail className="size-5" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={state?.values?.email || ''}
                  className={`bg-base-300 text-base-content placeholder:text-base-content/40 w-full rounded border py-3 pr-4 pl-12 transition-colors duration-[var(--duration-normal)] focus:outline-none ${
                    state?.fieldErrors?.email
                      ? 'border-error focus:border-error'
                      : 'focus:border-primary border-transparent'
                  }`}
                  placeholder="email@example.com"
                />
              </div>
              {state?.fieldErrors?.email && (
                <p className="text-error text-xs">{state.fieldErrors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone_number" className="text-sm font-medium">
                Номер телефону <span className="text-error">*</span>
              </label>
              <div className="relative">
                <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
                  <Phone className="size-5" />
                </div>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  defaultValue={state?.values?.phone_number || ''}
                  className={`bg-base-300 text-base-content placeholder:text-base-content/40 w-full rounded border py-3 pr-4 pl-12 transition-colors duration-[var(--duration-normal)] focus:outline-none ${
                    state?.fieldErrors?.phone_number
                      ? 'border-error focus:border-error'
                      : 'focus:border-primary border-transparent'
                  }`}
                  placeholder="+380 XX XXX XX XX"
                />
              </div>
              {state?.fieldErrors?.phone_number && (
                <p className="text-error text-xs">{state.fieldErrors.phone_number}</p>
              )}
              <p className="text-base-content/60 text-xs">
                Увага: переконайтеся, що номер введено правильно. Він буде використовуватися для
                зв&apos;язку з вами щодо замовлень.
              </p>
            </div>

            {/* Organization Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="organization_name" className="text-sm font-medium">
                Назва організації
              </label>
              <div className="relative">
                <div className="text-base-content/50 absolute top-1/2 left-4 -translate-y-1/2">
                  <Building2 className="size-5" />
                </div>
                <input
                  type="text"
                  id="organization_name"
                  name="organization_name"
                  defaultValue={state?.values?.organization_name || ''}
                  className={`bg-base-300 text-base-content placeholder:text-base-content/40 w-full rounded border py-3 pr-4 pl-12 transition-colors duration-[var(--duration-normal)] focus:outline-none ${
                    state?.fieldErrors?.organization_name
                      ? 'border-error focus:border-error'
                      : 'focus:border-primary border-transparent'
                  }`}
                  placeholder="Назва вашої компанії"
                />
              </div>
              {state?.fieldErrors?.organization_name && (
                <p className="text-error text-xs">{state.fieldErrors.organization_name}</p>
              )}
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <PasswordInput
                id="password"
                name="password"
                label="Пароль"
                autoComplete="new-password"
                placeholder="Створіть пароль"
                error={state?.fieldErrors?.password}
                required
              />

              <PasswordInput
                id="confirm_password"
                name="confirm_password"
                label="Підтвердіть пароль"
                autoComplete="new-password"
                placeholder="Підтвердіть пароль"
                error={state?.fieldErrors?.confirm_password}
                required
              />
            </div>

            {/* Submit Button */}
            <SubmitButton
              variant="secondary"
              size="large"
              className="w-full"
              text="Створити акаунт"
              pendingText='Створення акаунту...'
            />

            {/* Security Assurance */}
            <div className="text-base-content/50 flex items-center justify-center gap-2 text-xs">
              <ShieldCheck className="size-4" />
              <span>Ваші дані захищені і конфіденційні</span>
            </div>
          </form>
        </div>

        {/* Login Link */}
        <div className="text-base-content/60 mt-6 text-center text-sm">
          Вже є акаунт?{' '}
          <ButtonLink href={ROUTES.login} variant="string" size="small">
            Увійти
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
