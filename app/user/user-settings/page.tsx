import { getCurrentUserWithProfile } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Lock, Shield, Check, X } from 'lucide-react';
import ProfileForm from './ProfileForm';
import EmailChangeForm from './EmailChangeForm';
import PasswordChangeForm from './PasswordChangeForm';
import { ROUTES } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Налаштування профілю | Additive3D',
};

export default async function UserSettingsPage() {
  const userData = await getCurrentUserWithProfile();

  if (!userData || !userData.profile) {
    redirect(ROUTES.login);
  }

  const { profile, email } = userData;

  return (
    <section className="min-h-no-header-screen flex flex-col px-4 py-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={ROUTES.dashboard}
            className="inline-flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад до профілю
          </Link>
          <h1 className="text-4xl font-bold mb-2">Налаштування профілю</h1>
          <p className="text-base-content/70">Керуйте своєю особистою інформацією та безпекою</p>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Profile Information Card */}
          <div className="bg-base-200 rounded-box p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2.5 rounded-lg">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Особиста інформація</h2>
                <p className="text-sm text-base-content/70">Оновіть ім'я, телефон та організацію</p>
              </div>
            </div>
            <ProfileForm profile={profile} />
          </div>

          {/* Email Change Card */}
          <div className="bg-base-200 rounded-box p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2.5 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Електронна пошта</h2>
                <p className="text-sm text-base-content/70">Змініть адресу електронної пошти</p>
              </div>
            </div>
            <EmailChangeForm currentEmail={email} />
          </div>

          {/* Password Change Card */}
          <div className="bg-base-200 rounded-box p-6 shadow-lg lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2.5 rounded-lg">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Безпека</h2>
                <p className="text-sm text-base-content/70">Змініть пароль для захисту акаунту</p>
              </div>
            </div>
            <PasswordChangeForm />
          </div>

          {/* Privacy & Consent Card */}
          <div className="bg-base-200 rounded-box p-6 shadow-lg lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2.5 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Налаштування конфіденційності</h2>
                <p className="text-sm text-base-content/70">
                  Статус згоди на обробку та передачу файлів
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Consent Status */}
              <div className="bg-base-100 rounded-lg p-4">
                <div className="space-y-3">
                  {/* Agree to share files status */}
                  <div className="flex items-start gap-3">
                    {profile.agree_to_share_files ? (
                      <div className="bg-success/10 p-1 rounded">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    ) : (
                      <div className="bg-base-300 p-1 rounded">
                        <X className="w-4 h-4 text-base-content/40" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-semibold">Згода на передачу файлів</p>
                      <p className="text-sm text-base-content/70">
                        {profile.agree_to_share_files
                          ? 'Надано'
                          : 'Не надано (необхідно для розміщення замовлень)'}
                      </p>
                    </div>
                  </div>

                  {/* Has not signed NDA status */}
                  <div className="flex items-start gap-3">
                    {profile.has_not_signed_nda ? (
                      <div className="bg-success/10 p-1 rounded">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    ) : (
                      <div className="bg-base-300 p-1 rounded">
                        <X className="w-4 h-4 text-base-content/40" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-semibold">Відсутність NDA</p>
                      <p className="text-sm text-base-content/70">
                        {profile.has_not_signed_nda
                          ? 'Підтверджено'
                          : 'Не підтверджено (необхідно для розміщення замовлень)'}
                      </p>
                    </div>
                  </div>

                  {/* Consent date */}
                  {profile.consent_given_at && (
                    <div className="border-t border-base-300 pt-3 mt-3">
                      <p className="text-sm text-base-content/60">
                        Згода надана:{' '}
                        {new Date(profile.consent_given_at).toLocaleDateString('uk-UA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Info box */}
              <div className="bg-info/10 border-info/30 border-l-4 rounded-lg p-4">
                <p className="text-sm text-base-content/90">
                  <strong>Важливо:</strong> Згода на обробку файлів необхідна для розміщення
                  замовлень. Ваші файли можуть бути передані партнерам-виробникам для виконання
                  замовлення. Згоду можна надати при першій спробі розміщення замовлення.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
