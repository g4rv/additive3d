import { getCurrentUserWithProfile } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Lock } from 'lucide-react';
import ProfileForm from './ProfileForm';
import EmailChangeForm from './EmailChangeForm';
import PasswordChangeForm from './PasswordChangeForm';
import { ROUTES } from '@/lib/constants';

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
        </div>
      </div>
    </section>
  );
}
