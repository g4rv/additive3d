import { Mail, CheckCircle2 } from 'lucide-react';
import ButtonLink from '@/components/ui/button-link';
import { ROUTES } from '@/lib/constants';
import { getCurrentUser } from '@/lib/supabase/queries';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Підтвердження email',
  description: 'Підтвердіть вашу електронну адресу для завершення реєстрації в Additive3D',
  path: '/auth/verify-email',
  noIndex: true,
});

export default async function VerifyEmailPage() {
  // Note: When email confirmation is enabled, signup doesn't create a session
  // So user might not be authenticated when first landing on this page
  const user = await getCurrentUser();

  // Get user email for display
  const userEmail = user?.email || '';

  return (
    <section className="min-h-no-header-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Mail className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">Перевірте свою пошту</h1>
          <p className="text-base-content/70">
            {userEmail ? (
              <>
                Ми надіслали вам листа для підтвердження на <strong>{userEmail}</strong>
              </>
            ) : (
              'Ми надіслали вам листа для підтвердження'
            )}
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-base-200 rounded-box p-8 shadow-lg">
          <div className="flex flex-col gap-6">
            {/* Instructions */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <p className="text-base-content/80">
                  Перевірте свою поштову скриньку
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <p className="text-base-content/80">
                  Натисніть на посилання для підтвердження
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <p className="text-base-content/80">
                  Ви будете автоматично перенаправлені на панель керування
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="divider my-2"></div>

            {/* Additional Info */}
            <div className="bg-base-300 rounded-lg p-4">
              <p className="text-sm text-base-content/70">
                <strong className="text-base-content">Не отримали листа?</strong>
                <br />
                Перевірте папку &quot;Спам&quot; або зачекайте кілька хвилин. Якщо лист не прийшов, спробуйте
                зареєструватися ще раз.
              </p>
            </div>

            {/* Back to Login */}
            <div className="text-center">
              <ButtonLink href={ROUTES.login} variant="string" size="small">
                Повернутися до входу
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
