'use client';

import { useActionState, useEffect, useState, Suspense } from 'react';
import BgPattern from '@/components/ui/bg-pattern';
import { Shield, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { resetPassword } from './actions';
import SubmitButton from '@/components/ui/submit-button/SubmitButton';
import PasswordInput from '@/components/ui/password-input/PasswordInput';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isValidSession, setIsValidSession] = useState<boolean | null>(null);

  const initial = {
    error: '',
    fieldErrors: {} as Record<string, string | undefined>,
    values: {} as Record<string, string | undefined>,
  };

  const [state, formAction] = useActionState(resetPassword, initial);

  // Check if user has a valid recovery session
  useEffect(() => {
    const checkSession = async () => {
      // Check for recovery flag from callback
      const recoveryFlag = searchParams.get('recovery');

      if (!recoveryFlag) {
        // No recovery flag, redirect to forgot password
        setIsValidSession(false);
        setTimeout(() => {
          router.push('/auth/forgot-password?error=Посилання для скидання пароля застаріло або недійсне');
        }, 3000);
        return;
      }

      // Verify user has an active session after OTP verification
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user) {
        setIsValidSession(false);
        setTimeout(() => {
          router.push('/auth/forgot-password?error=Посилання для скидання пароля застаріло або недійсне');
        }, 3000);
        return;
      }

      setIsValidSession(true);
    };

    checkSession();

    // Listen for PASSWORD_RECOVERY event (best practice from Supabase docs)
    const supabase = createClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        // User is in password recovery mode
        setIsValidSession(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, searchParams]);

  // Show loading state while checking session
  if (isValidSession === null) {
    return (
      <div className="min-h-no-header-screen flex items-center justify-center bg-base-100">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="text-base-content/70 mt-4">Перевірка посилання...</p>
        </div>
      </div>
    );
  }

  // Show error if session is invalid
  if (isValidSession === false) {
    return (
      <div className="min-h-no-header-screen flex items-center justify-center bg-base-100">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />
        <div className="relative z-10 w-full max-w-md px-4 py-8">
          <div className="alert alert-error">
            <AlertCircle className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Недійсне посилання</h3>
              <p className="text-sm">Посилання для скидання пароля застаріло або вже було використано. Ви будете перенаправлені...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-no-header-screen flex items-center justify-center bg-base-100">
      <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

      <div className="relative z-10 w-full max-w-md px-4 py-8">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" aria-label="Additive3D - Повернутися на головну" className="mb-6 inline-block">
            <Image
              src="/logo.png"
              alt="Additive3D Логотип"
              width={100}
              height={32}
            />
          </Link>

          <h1 className="text-primary text-3xl font-bold leading-tight">
            Створіть новий пароль
          </h1>
          <p className="text-base-content/80 mt-2 text-lg">
            Введіть новий безпечний пароль для вашого акаунту
          </p>
        </div>

        {/* Security Requirements */}
        <div className="bg-base-200 mb-6 rounded-lg border border-base-300 p-4">
          <div className="flex items-start gap-3">
            <Shield className="text-primary mt-0.5 size-5 flex-shrink-0" />
            <div>
              <h3 className="text-base-content font-semibold text-sm mb-2">Вимоги до пароля</h3>
              <ul className="text-base-content/70 space-y-1 text-xs">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3" />
                  <span>Мінімум 8 символів</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3" />
                  <span>Хоча б одна велика літера (A-Z)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3" />
                  <span>Хоча б одна мала літера (a-z)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3" />
                  <span>Хоча б одна цифра (0-9)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reset Form */}
        <form action={formAction} className="space-y-5">
          {/* Error Message */}
          {state?.error && (
            <div className="alert alert-error">
              <AlertCircle className="h-6 w-6" />
              <span>{state.error}</span>
            </div>
          )}

          {/* New Password Input */}
          <PasswordInput
            id="password"
            name="password"
            label="Новий пароль"
            autoComplete="new-password"
            placeholder="Введіть новий пароль"
            error={state?.fieldErrors?.password}
            required
          />

          {/* Confirm Password Input */}
          <PasswordInput
            id="confirm_password"
            name="confirm_password"
            label="Підтвердіть пароль"
            autoComplete="new-password"
            placeholder="Введіть пароль ще раз"
            error={state?.fieldErrors?.confirm_password}
            required
          />

          <SubmitButton
            variant="secondary"
            size="large"
            className="w-full"
            text="Оновити пароль"
            pendingText="Оновлення пароля..."
          />
        </form>

        {/* Security Notice */}
        <div className="bg-base-200/50 mt-6 rounded-lg border border-base-300 p-4">
          <h3 className="text-base-content mb-2 flex items-center gap-2 font-semibold text-sm">
            <Shield size={14} />
            Нагадування про безпеку
          </h3>
          <ul className="text-base-content/70 space-y-1 text-xs">
            <li>• Використовуйте унікальний пароль для кожного акаунту</li>
            <li>• Не використовуйте особисту інформацію в паролі</li>
            <li>• Зберігайте пароль у безпечному місці</li>
            <li>• Ніколи не діліться паролем з іншими</li>
          </ul>
        </div>

        {/* Login Link */}
        <div className="text-base-content/50 mt-8 text-center text-sm">
          <p>
            Пам'ятаєте пароль?{' '}
            <Link href="/auth/login" className="text-primary hover:text-primary/80 transition-colors duration-[var(--duration-fast)] cursor-pointer">
              Увійти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-no-header-screen flex items-center justify-center bg-base-100">
      <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />
      <div className="relative z-10 text-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="text-base-content/70 mt-4">Завантаження...</p>
      </div>
    </div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
