import { FadeIn } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import { Eye, Lock, Mail, Shield, User, Zap } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Вхід | Additive3D',
  description: 'Увійдіть до вашого особистого кабінету Additive3D',
};

export default function LoginPage() {
  return (
    <div className="min-h-no-header-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <FadeIn direction="up">
            <div className="mb-8 text-center">
              <h1 className="text-base-content mb-2 text-3xl font-bold">
                Вхід до <span className="text-primary">Additive3D</span>
              </h1>
              <p className="text-base-content/70">Увійдіть до вашого особистого кабінету</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="text-base-content/80 mb-2 block text-sm">
                  Email адреса
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="text-base-content/50 h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-base-200 border-base-300 focus:ring-primary w-full rounded-lg border py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-base-content/80 mb-2 block text-sm">
                  Пароль
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="text-base-content/50 h-5 w-5" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-base-200 border-base-300 focus:ring-primary w-full rounded-lg border py-3 pr-10 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      type="button"
                      className="text-base-content/50 hover:text-base-content focus:outline-none"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="bg-base-200 border-base-300 focus:ring-primary h-4 w-4 rounded focus:ring-2"
                  />
                  <label htmlFor="remember" className="text-base-content/80 ml-2 text-sm">
                    Запам&apos;ятати мене
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="text-primary hover:underline">
                    Забули пароль?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-primary text-primary-content hover:bg-primary/90 focus:ring-primary flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  <User className="h-5 w-5" />
                  Увійти
                </button>
              </div>

              <div className="text-center">
                <span className="text-base-content/70 text-sm">
                  Немає акаунту?{' '}
                  <Link href="/register" className="text-primary font-semibold hover:underline">
                    Зареєструватись
                  </Link>
                </span>
              </div>
            </form>

            {/* Social Login Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="border-base-300 w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-base-100 text-base-content/70 px-2">Або увійдіть через</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="border-base-300 hover:bg-base-200 flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="border-base-300 hover:bg-base-200 flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right Side - Hero Content */}
      <div className="bg-hero-gradient relative hidden overflow-hidden lg:block lg:w-1/2">
        <BgPattern pattern="dots" size={40} color="rgb(255, 210, 49)" opacity={0.1} />

        <div className="flex h-full items-center justify-center p-12">
          <FadeIn direction="right">
            <div className="max-w-md text-center">
              <div className="text-primary mb-8 flex justify-center">
                <Shield className="h-20 w-20" />
              </div>
              <h2 className="text-base-content mb-6 text-4xl font-bold">
                Керуйте вашими <span className="text-primary">3D проєктами</span>
              </h2>
              <p className="text-base-content/90 mb-8 text-lg">
                Отримайте доступ до особистого кабінету для управління замовленнями, відстеження
                статусу та доступу до спеціальних пропозицій.
              </p>

              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold">Швидкі замовлення</h3>
                    <p className="text-base-content/70 text-sm">
                      Створюйте замовлення одним кліком
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold">Безпечність даних</h3>
                    <p className="text-base-content/70 text-sm">
                      Ваші проєкти під надійним захистом
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold">Персоналізація</h3>
                    <p className="text-base-content/70 text-sm">
                      Індивідуальні налаштування та пропозиції
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
