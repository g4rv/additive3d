'use client';

import { useState } from 'react';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { Eye, EyeOff, Shield, CheckCircle, AlertCircle, Building2, Users, Package, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});

    // Validate current step
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const errors: Record<string, string> = {};

    if (step === 1) {
      const firstName = formData.get('firstName') as string;
      const lastName = formData.get('lastName') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const company = formData.get('company') as string;

      if (!firstName?.trim()) errors.firstName = 'Ім\'я обов\'язкове';
      if (!lastName?.trim()) errors.lastName = 'Прізвище обов\'язкове';
      if (!email) errors.email = 'Електронна пошта обов\'язкова';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Будь ласка, введіть правильну електронну адресу';
      if (!phone?.trim()) errors.phone = 'Номер телефону обов\'язковий';
      if (!company?.trim()) errors.company = 'Назва компанії обов\'язкова';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms || !agreedToPrivacy) {
      setFormErrors({
        terms: 'Ви повинні погодитися з Умовами використання та Політикою конфіденційності'
      });
      return;
    }

    setIsLoading(true);
    setFormErrors({});

    // Validate final step
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const errors: Record<string, string> = {};

    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!password) errors.password = 'Пароль обов\'язковий';
    else if (password.length < 8) errors.password = 'Пароль повинен містити щонайменше 8 символів';
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      errors.password = 'Пароль повинен містити великі, малі літери та цифри';
    }

    if (!confirmPassword) errors.confirmPassword = 'Будь ласка, підтвердіть ваш пароль';
    else if (password !== confirmPassword) errors.confirmPassword = 'Паролі не збігаються';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);

    console.log('Registration successful');
    // Redirect to login or dashboard
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    setFormErrors({});
  };

  return (
    <div className="min-h-no-header-screen flex items-center justify-center bg-base-100">
      <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

      <div className="relative z-10 w-full max-w-lg px-4 py-8">
        {/* Logo and Breadcrumb */}
        <div className="mb-8">
          <Link href="/" aria-label="Additive3D - Повернутися на головну" className="mb-4 inline-block">
            <Image
              src="/logo.png"
              alt="Additive3D Логотип"
              width={100}
              height={32}
            />
          </Link>

          {step > 1 && (
            <button
              onClick={handlePreviousStep}
              className="text-base-content/70 hover:text-base-content mb-4 flex items-center gap-2 text-sm transition-colors duration-[var(--duration-fast)]"
            >
              <ArrowLeft size={16} />
              Повернутися до попереднього кроку
            </button>
          )}

          <h1 className="text-primary text-3xl font-bold leading-tight">
            {step === 1 ? 'Створити бізнес-акаунт' : 'Завершіть ваш профіль'}
          </h1>
          <p className="text-base-content/80 mt-2 text-lg">
            {step === 1
              ? 'Приєднуйтесь до тисяч виробничих професіоналів'
              : 'Налаштуйте ваш захищений пароль та параметри'
            }
          </p>

          {/* Progress Indicator */}
          <div className="mt-6 flex items-center gap-2">
            <div className={`h-2 flex-1 rounded-full transition-all duration-[var(--duration-normal)] ${
              step >= 1 ? 'bg-primary' : 'bg-base-300'
            }`} />
            <div className={`h-2 flex-1 rounded-full transition-all duration-[var(--duration-normal)] ${
              step >= 2 ? 'bg-primary' : 'bg-base-300'
            }`} />
          </div>
          <div className="text-base-content/60 mt-2 flex justify-between text-xs">
            <span>Інформація про компанію</span>
            <span>Налаштування безпеки</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-base-200 mb-6 rounded-lg border border-base-300 p-4">
          <div className="flex items-start gap-3">
            <Shield className="text-primary mt-0.5 size-5 flex-shrink-0" />
            <div>
              <h3 className="text-base-content font-semibold text-sm">Корпоративна B2B платформа</h3>
              <p className="text-base-content/70 text-xs leading-relaxed">
                Сертифікована ISO 27001 платформа з безпекою корпоративного рівня. Ваша інтелектуальна власність та виробничі дані повністю захищені.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-step Form */}
        <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-5">
          {step === 1 ? (
            <>
              {/* Step 1: Company Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-base-content mb-2 block text-sm font-medium">
                    Ім&apos;я *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    aria-invalid={formErrors.firstName ? 'true' : 'false'}
                    aria-describedby={formErrors.firstName ? 'firstName-error' : undefined}
                    className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 px-4 py-3 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                    placeholder="Іван"
                    disabled={isLoading}
                  />
                  {formErrors.firstName && (
                    <div id="firstName-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                      <AlertCircle size={14} />
                      <span>{formErrors.firstName}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="text-base-content mb-2 block text-sm font-medium">
                    Прізвище *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    aria-invalid={formErrors.lastName ? 'true' : 'false'}
                    aria-describedby={formErrors.lastName ? 'lastName-error' : undefined}
                    className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 px-4 py-3 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                    placeholder="Петренко"
                    disabled={isLoading}
                  />
                  {formErrors.lastName && (
                    <div id="lastName-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                      <AlertCircle size={14} />
                      <span>{formErrors.lastName}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="text-base-content mb-2 block text-sm font-medium">
                  Назва компанії *
                </label>
                <div className="relative">
                  <Building2 className="text-base-content/50 absolute left-3 top-1/2 -translate-y-1/2 size-5" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    aria-invalid={formErrors.company ? 'true' : 'false'}
                    aria-describedby={formErrors.company ? 'company-error' : undefined}
                    className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 pl-10 pr-4 py-3 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                    placeholder="Технології та Виробництво ООО"
                    disabled={isLoading}
                  />
                </div>
                {formErrors.company && (
                  <div id="company-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                    <AlertCircle size={14} />
                    <span>{formErrors.company}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-base-content mb-2 block text-sm font-medium">
                  Робоча електронна пошта *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-invalid={formErrors.email ? 'true' : 'false'}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 px-4 py-3 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  placeholder="ivan@company.com"
                  disabled={isLoading}
                />
                {formErrors.email && (
                  <div id="email-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                    <AlertCircle size={14} />
                    <span>{formErrors.email}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-base-content mb-2 block text-sm font-medium">
                  Номер телефону *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  required
                  aria-invalid={formErrors.phone ? 'true' : 'false'}
                  aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                  className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 px-4 py-3 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  placeholder="+38 (0XX) XXX-XX-XX"
                  disabled={isLoading}
                />
                {formErrors.phone && (
                  <div id="phone-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                    <AlertCircle size={14} />
                    <span>{formErrors.phone}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="text-primary-content bg-primary hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50 disabled:hover:bg-primary disabled:active:scale-100 w-full rounded-lg px-6 py-3 font-semibold transition-all duration-[var(--duration-fast)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-base-100"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-primary-content size-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    Обробка...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Перейти до безпеки
                    <ArrowRight size={18} />
                  </div>
                )}
              </button>
            </>
          ) : (
            <>
              {/* Step 2: Security Setup */}
              <div>
                <label htmlFor="password" className="text-base-content mb-2 block text-sm font-medium">
                  Пароль *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    required
                    aria-invalid={formErrors.password ? 'true' : 'false'}
                    aria-describedby={formErrors.password ? 'password-error' : undefined}
                    className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 px-4 py-3 pr-12 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                    placeholder="Створіть надійний пароль"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-base-content/50 hover:text-base-content absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-[var(--duration-fast)]"
                    aria-label={showPassword ? 'Сховати пароль' : 'Показати пароль'}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {formErrors.password && (
                  <div id="password-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                    <AlertCircle size={14} />
                    <span>{formErrors.password}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="text-base-content mb-2 block text-sm font-medium">
                  Підтвердіть пароль *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    autoComplete="new-password"
                    required
                    aria-invalid={formErrors.confirmPassword ? 'true' : 'false'}
                    aria-describedby={formErrors.confirmPassword ? 'confirmPassword-error' : undefined}
                    className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 px-4 py-3 pr-12 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                    placeholder="Підтвердіть ваш пароль"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-base-content/50 hover:text-base-content absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-[var(--duration-fast)]"
                    aria-label={showConfirmPassword ? 'Сховати підтвердження пароля' : 'Показати підтвердження пароля'}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {formErrors.confirmPassword && (
                  <div id="confirmPassword-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                    <AlertCircle size={14} />
                    <span>{formErrors.confirmPassword}</span>
                  </div>
                )}
              </div>

              {/* Terms and Privacy */}
              <div className="space-y-3">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="border-primary bg-base-200 text-primary focus:ring-primary/20 mt-1 size-4 rounded focus:ring-2"
                    disabled={isLoading}
                  />
                  <span className="text-base-content/80 text-xs leading-relaxed">
                    Я погоджуюсь з{' '}
                    <Link href="/terms" className="text-primary hover:text-primary/80 transition-colors duration-[var(--duration-fast)]">
                      Умовами використання
                    </Link>{' '}
                    і розумію, що це B2B платформа для професійних виробничих послуг.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="border-primary bg-base-200 text-primary focus:ring-primary/20 mt-1 size-4 rounded focus:ring-2"
                    disabled={isLoading}
                  />
                  <span className="text-base-content/80 text-xs leading-relaxed">
                    Я підтверджую, що ознайомився(-лась) з{' '}
                    <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors duration-[var(--duration-fast)]">
                      Політикою конфіденційності
                    </Link>{' '}
                    і згоджуюся на захищену обробку моїх виробничих даних та інтелектуальної власності.
                  </span>
                </label>
              </div>

              {formErrors.terms && (
                <div className="text-error flex items-center gap-2 text-sm">
                  <AlertCircle size={14} />
                  <span>{formErrors.terms}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !agreedToTerms || !agreedToPrivacy}
                className="text-primary-content bg-primary hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50 disabled:hover:bg-primary disabled:active:scale-100 w-full rounded-lg px-6 py-3 font-semibold transition-all duration-[var(--duration-fast)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-base-100"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-primary-content size-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    Створення акаунту...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Створити бізнес-акаунт
                    <CheckCircle size={18} />
                  </div>
                )}
              </button>
            </>
          )}
        </form>

        {/* Alternative Actions */}
        <div className="mt-6 space-y-3">
          <div className="text-base-content/60 text-center text-sm">
            Вже є акаунт?{' '}
            <Link href="/auth/login" className="text-primary hover:text-primary/80 font-medium transition-colors duration-[var(--duration-fast)]">
              Увійти
            </Link>
          </div>

          <ButtonLink
            href="/services/3d-printing/calculator"
            variant="string"
            className="w-full justify-center py-2 text-sm"
          >
            Продовжити як гість (Миттєвий розрахунок)
          </ButtonLink>
        </div>

        {/* Business Benefits */}
        <div className="bg-base-200/50 mt-8 rounded-lg border border-base-300 p-4">
          <h3 className="text-base-content mb-3 flex items-center gap-2 font-semibold text-sm">
            <Building2 size={16} />
            Переваги бізнес-акаунту
          </h3>
          <ul className="space-y-2">
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <Package className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Ціноутворення на основі обсягів та корпоративні знижки</span>
            </li>
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <Users className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Багатокористувацька співпраця та управління проєктами</span>
            </li>
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <Shield className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Покращений захист інтелектуальної власності та підтримка NDA</span>
            </li>
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <CheckCircle className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Пріоритетна технічна підтримка та консультація</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}