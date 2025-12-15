import { getCurrentUserWithProfile } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProfileForm from './ProfileForm';
import { ROUTES } from '@/lib/constants';

export default async function ProfilePage() {
  const userData = await getCurrentUserWithProfile();

  if (!userData || !userData.profile) {
    redirect(ROUTES.login);
  }

  const { profile } = userData;

  return (
    <section className="min-h-no-header-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={ROUTES.dashboard}
            className="inline-flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад до панелі
          </Link>
          <h1 className="text-4xl font-bold mb-2">Редагувати профіль</h1>
          <p className="text-base-content/70">Оновіть свою особисту інформацію</p>
        </div>

        {/* Profile Edit Card */}
        <div className="bg-base-200 rounded-box p-8 shadow-lg">
          <ProfileForm profile={profile} />
        </div>

        {/* Info Note */}
        <div className="mt-4 bg-base-300 rounded-lg p-4">
          <p className="text-sm text-base-content/70">
            <strong className="text-base-content">Примітка:</strong> Електронна пошта не може бути
            змінена. Якщо вам потрібно змінити електронну адресу, зв&apos;яжіться з підтримкою.
          </p>
        </div>
      </div>
    </section>
  );
}
