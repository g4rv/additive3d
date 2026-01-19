import { ROUTES } from '@/lib/constants';
import { LogIn, Shield, UserPlus } from 'lucide-react';
import BgBlobs from '../bg-blobs/BgBlobs';
import BgPattern from '../bg-pattern';
import ButtonLink from '../button-link';

interface AuthRequiredBannerProps {
  title?: string;
  message?: string;
  showRegister?: boolean;
}

const AuthRequiredBanner = ({
  title = 'Вхід необхідний',
  message = 'Онлайн-калькулятор доступний тільки для зареєстрованих користувачів. Створіть безкоштовний обліковий запис для миттєвого доступу до професійних розрахунків 3D-друку.',
  showRegister = true,
}: AuthRequiredBannerProps) => {
  return (
    <section className="from-base-100 via-base-200 to-base-100 relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-linear-to-br py-20">
      {/* Animated background gradient blobs */}
      <BgBlobs />

      {/* Subtle pattern overlay */}
      <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0 z-0" />

      <div className="custom-container relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon with animation */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="bg-primary/20 relative rounded-full p-6 shadow-lg">
              <div className="bg-primary/30 absolute inset-0 animate-pulse rounded-full" />
              <Shield className="text-primary relative h-16 w-16 md:h-20 md:w-20" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">{title}</h1>

          {/* Message */}
          <p className="text-base-content/80 mx-auto mb-12 max-w-2xl text-xl leading-relaxed md:text-2xl">
            {message}
          </p>

          {/* Action Buttons */}
          <div className="mb-16 flex flex-col gap-4 md:flex-row sm:justify-center">
            <ButtonLink
              href={ROUTES.login}
              variant="secondary"
              size="large"
              startAdornment={<LogIn className="h-6 w-6" />}
              className='justify-center'
            >
              Увійти в систему
            </ButtonLink>

            {showRegister && (
              <ButtonLink
                href={ROUTES.register}
                variant="outlined"
                size="large"
                startAdornment={<UserPlus className="h-6 w-6" />}
                className='justify-center'
              >
                Створити обліковий запис
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthRequiredBanner;
