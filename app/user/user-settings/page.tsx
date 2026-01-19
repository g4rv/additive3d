import { getCurrentUserWithProfile } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import ButtonLink from '@/components/ui/button-link';
import { ArrowLeft, User, Mail, Lock, Shield, Check, X } from 'lucide-react';
import ProfileForm from './ProfileForm';
import EmailChangeForm from './EmailChangeForm';
import PasswordChangeForm from './PasswordChangeForm';
import ConsentForm from './ConsentForm';
import { ROUTES } from '@/lib/constants';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Налаштування профілю',
  description: 'Налаштуйте свій профіль: оновіть особисту інформацію, змініть пароль, керуйте конфіденційністю та безпекою акаунту.',
  path: '/user/user-settings',
  noIndex: true,
});

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
          <ButtonLink
            href={ROUTES.dashboard}
            variant="string"
            startAdornment={<ArrowLeft className="w-4 h-4" />}
            className="mb-4"
          >
            Назад до профілю
          </ButtonLink>
          <h1 className="text-4xl font-bold mb-2">Налаштування профілю</h1>
          <p className="text-base-content/70">Керуйте своєю особистою інформацією та безпекою</p>
        </div>

        {/* Settings Grid - 2x2 Layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Left: Profile Information Card */}
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

          {/* Top Right: Privacy & Consent Card */}
          <div className="bg-base-200 rounded-box p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2.5 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Налаштування конфіденційності</h2>
                <p className="text-sm text-base-content/70">
                  Згода на обробку та передачу файлів
                </p>
              </div>
            </div>
            <ConsentForm profile={profile} />
          </div>

          {/* Bottom Left: Email Change Card */}
          <div className="bg-base-200 rounded-box flex flex-col p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2.5 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Електронна пошта</h2>
                <p className="text-sm text-base-content/70">Змініть адресу електронної пошти</p>
              </div>
            </div>
            <EmailChangeForm currentEmail={email} className='grow' />
          </div>

          {/* Bottom Right: Password Change Card */}
          <div className="bg-base-200 rounded-box p-6 shadow-lg flex flex-col">
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
        </div>
      </div>
    </section>
  );
}
