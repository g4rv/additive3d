'use client';

import { useState } from 'react';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { Eye, EyeOff, Shield, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});

    // Simulate validation
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors: Record<string, string> = {};

    if (!email) {
      errors.email = 'Електронна пошта обов\'язкова';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Будь ласка, введіть правильну електронну адресу';
    }

    if (!password) {
      errors.password = 'Пароль обов\'язковий';
    } else if (password.length < 8) {
      errors.password = 'Пароль повинен містити щонайменше 8 символів';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);

    // Redirect would happen here
    console.log('Login successful');
  };

  return (
    <div className="min-h-no-header-screen flex items-center justify-center bg-base-100">
      <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

      <div className="relative z-10 w-full max-w-md px-4 py-8">
        {/* Logo and Brand */}
        <div className="mb-8 text-center">
          <Link href="/" aria-label="Additive3D - Повернутися на головну" className="mb-6 inline-block">
            <Image
              src="/logo.png"
              alt="Additive3D Логотип"
              width={120}
              height={38}
              className="mx-auto"
            />
          </Link>

          <h1 className="text-primary text-3xl font-bold leading-tight">
            Вітаємо знову
          </h1>
          <p className="text-base-content/80 mt-2 text-lg">
            Доступ до вашого виробничого кабінету та проєктів
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="bg-base-200 mb-6 rounded-lg border border-base-300 p-4">
          <div className="flex items-start gap-3">
            <Shield className="text-primary mt-0.5 size-5 flex-shrink-0" />
            <div>
              <h3 className="text-base-content font-semibold text-sm">Захищений B2B портал</h3>
              <p className="text-base-content/70 text-xs leading-relaxed">
                Безпека корпоративного рівня з відповідністю ISO 27001. Ваша інтелектуальна власність захищена сквозним шифруванням.
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-base-content mb-2 block text-sm font-medium">
              Електронна пошта
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

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-base-content mb-2 block text-sm font-medium">
                Пароль
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-primary hover:text-primary/80 text-sm transition-colors duration-[var(--duration-fast)]"
              >
                Забули пароль?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                autoComplete="current-password"
                required
                aria-invalid={formErrors.password ? 'true' : 'false'}
                aria-describedby={formErrors.password ? 'password-error' : undefined}
                className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 px-4 py-3 pr-12 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                placeholder="Введіть ваш пароль"
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

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="border-primary bg-base-200 text-primary focus:ring-primary/20 mr-2 size-4 rounded focus:ring-2"
              disabled={isLoading}
            />
            <label htmlFor="remember" className="text-base-content/80 text-sm">
              Запам\'ятати мене на 30 днів
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="text-primary-content bg-primary hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50 disabled:hover:bg-primary disabled:active:scale-100 w-full rounded-lg px-6 py-3 font-semibold transition-all duration-[var(--duration-fast)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-base-100"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="text-primary-content size-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                Увійти...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                Увійти
                <ArrowRight size={18} />
              </div>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="text-base-content/30 my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-current" />
          <span className="text-xs uppercase">або</span>
          <div className="flex-1 h-px bg-current" />
        </div>

        {/* Alternative Actions */}
        <div className="space-y-4">
          <ButtonLink
            href="/auth/register"
            variant="outlined"
            className="w-full justify-center py-3 text-base"
          >
            Створити бізнес-акаунт
          </ButtonLink>

          <ButtonLink
            href="/services/3d-printing/calculator"
            variant="string"
            className="w-full justify-center py-2 text-sm"
          >
            Продовжити як гість (Миттєвий розрахунок)
          </ButtonLink>
        </div>

        {/* Account Benefits */}
        <div className="bg-base-200/50 mt-8 rounded-lg border border-base-300 p-4">
          <h3 className="text-base-content mb-3 font-semibold text-sm">Переваги акаунту</h3>
          <ul className="space-y-2">
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <CheckCircle className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Відстеження замовлень у реальному часі виробництва</span>
            </li>
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <CheckCircle className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Захищене сховище файлів з контролем версій</span>
            </li>
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <CheckCircle className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Знижки на великі обсяги та корпоративні ціни</span>
            </li>
            <li className="text-base-content/70 flex items-start gap-2 text-xs">
              <CheckCircle className="text-primary mt-0.5 size-3.5 flex-shrink-0" />
              <span>Пріоритетна підтримка та технічна консультація</span>
            </li>
          </ul>
        </div>

        {/* Security Information */}
        <div className="text-base-content/50 mt-6 text-center text-xs">
          <p>
            Захищено системою безпеки корпоративного рівня.
            <Link href="/security" className="text-primary hover:text-primary/80 ml-1 transition-colors duration-[var(--duration-fast)]">
              Дізнатися більше про наші заходи безпеки
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}