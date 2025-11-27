'use client';

import { useState } from 'react';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});

    // Validate email
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const emailValue = formData.get('email') as string;
    const errors: Record<string, string> = {};

    if (!emailValue) {
      errors.email = 'Електронна пошта обов\'язкова';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      errors.email = 'Будь ласка, введіть правильну електронну адресу';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail(emailValue);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setFormErrors({});
  };

  return (
    <div className="min-h-no-header-screen flex items-center justify-center bg-base-100">
      <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

      <div className="relative z-10 w-full max-w-md px-4 py-8">
        {/* Logo and Navigation */}
        <div className="mb-8">
          <Link href="/" aria-label="Additive3D - Повернутися на головну" className="mb-6 inline-block">
            <Image
              src="/logo.png"
              alt="Additive3D Логотип"
              width={100}
              height={32}
            />
          </Link>

          <Link
            href="/auth/login"
            className="text-base-content/70 hover:text-base-content mb-4 flex items-center gap-2 text-sm transition-colors duration-[var(--duration-fast)]"
          >
            <ArrowLeft size={16} />
            Повернутися до входу
          </Link>

          <h1 className="text-primary text-3xl font-bold leading-tight">
            {isSubmitted ? 'Посилання для скидання надіслано' : 'Скинути пароль'}
          </h1>
          <p className="text-base-content/80 mt-2 text-lg">
            {isSubmitted
              ? `Ми надіслали безпечне посилання для скидання пароля на ${email}`
              : 'Введіть свою електронну адресу і ми надішлемо вам безпечне посилання для скидання пароля'
            }
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="bg-base-200 mb-6 rounded-lg border border-base-300 p-4">
          <div className="flex items-start gap-3">
            <Shield className="text-primary mt-0.5 size-5 flex-shrink-0" />
            <div>
              <h3 className="text-base-content font-semibold text-sm">Захищене відновлення</h3>
              <p className="text-base-content/70 text-xs leading-relaxed">
                {isSubmitted
                  ? 'Посилання для скидання дійсне протягом 30 хвилин і може бути використано лише один раз. З міркувань безпеки, ми не підтверджуємо, чи існує електронна адреса в нашій системі.'
                  : 'Для вашої безпеки, ми надсилатимемо посилання для скидання лише на перевірені бізнес-адреси, пов\'язані з вашим акаунтом.'
                }
              </p>
            </div>
          </div>
        </div>

        {!isSubmitted ? (
          /* Reset Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="text-base-content mb-2 block text-sm font-medium">
                Робоча електронна адреса
              </label>
              <div className="relative">
                <Mail className="text-base-content/50 absolute left-3 top-1/2 -translate-y-1/2 size-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-invalid={formErrors.email ? 'true' : 'false'}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  className="bg-base-200 text-base-content placeholder-base-content/50 w-full rounded-lg border border-base-300 pl-10 pr-4 py-3 text-[16px] transition-all duration-[var(--duration-normal)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  placeholder="ivan@company.com"
                  disabled={isLoading}
                />
              </div>
              {formErrors.email && (
                <div id="email-error" className="text-error mt-2 flex items-center gap-2 text-sm">
                  <AlertCircle size={14} />
                  <span>{formErrors.email}</span>
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
                  Надсилання посилання...
                </div>
              ) : (
                'Надіслати безпечне посилання'
              )}
            </button>
          </form>
        ) : (
          /* Success State */
          <div className="space-y-5">
            <div className="bg-success/20 border-success/30 rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-success mt-0.5 size-5 flex-shrink-0" />
                <div>
                  <h3 className="text-base-content font-semibold text-sm">Лист успішно надіслано</h3>
                  <p className="text-base-content/70 text-xs leading-relaxed">
                    Будь ласка, перевірте свою пошту (включаючи папку спам) для листа зі скиданням пароля. Натисніть безпечне посилання в листі, щоб створити новий пароль.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base-content font-medium text-sm">Що відбувається далі?</h3>
              <ol className="text-base-content/70 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-semibold">1.</span>
                  <span>Перевірте свою пошту на посилання скидання (дійсне 30 хвилин)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-semibold">2.</span>
                  <span>Натисніть безпечне посилання для створення нового пароля</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-semibold">3.</span>
                  <span>Увійдіть, використовуючи новий пароль</span>
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <ButtonLink
                href="/auth/login"
                variant="primary"
                className="w-full justify-center py-3"
              >
                Повернутися до входу
              </ButtonLink>

              <button
                onClick={handleReset}
                disabled={isLoading}
                className="text-base-content/70 hover:text-base-content w-full rounded-lg px-6 py-2 text-sm transition-colors duration-[var(--duration-fast)] disabled:opacity-50"
              >
                Надіслати на іншу адресу
              </button>
            </div>
          </div>
        )}

        {/* Security Information */}
        <div className="text-base-content/50 mt-8 text-center text-xs">
          <p>
            Не отримали лист? Перевірте папку спам або{' '}
            <button
              onClick={isSubmitted ? handleReset : undefined}
              disabled={isLoading}
              className="text-primary hover:text-primary/80 transition-colors duration-[var(--duration-fast)] disabled:opacity-50"
            >
              спробуйте знову
            </button>
          </p>
          <p className="mt-2">
            Для негайної допомоги зв\'яжіться з нашою{' '}
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors duration-[var(--duration-fast)]">
              службою підтримки
            </Link>
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-base-200/50 mt-6 rounded-lg border border-base-300 p-4">
          <h3 className="text-base-content mb-2 flex items-center gap-2 font-semibold text-sm">
            <Shield size={14} />
            Нагадування про безпеку
          </h3>
          <ul className="text-base-content/70 space-y-1 text-xs">
            <li>• Посилання для скидання пароля застарівають через 30 хвилин для безпеки</li>
            <li>• Посилання можна використати лише один раз</li>
            <li>• Ми ніколи не зберігаємо і не надсилаємо існуючі паролі</li>
            <li>• Завжди перевіряйте, що ви на сайті additive3d.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}