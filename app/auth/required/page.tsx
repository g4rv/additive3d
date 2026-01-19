import { Metadata } from 'next';
import AuthRequiredBanner from '@/components/ui/auth-required-banner/AuthRequiredBanner';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Потрібна авторизація',
  description: 'Для доступу до цієї функції необхідно увійти в систему.',
  path: '/auth/required',
  noIndex: true,
});

export default function AuthRequiredPage() {
  return (
    <AuthRequiredBanner
      title="Увійдіть, щоб продовжити"
      message="Ця функція доступна тільки для зареєстрованих користувачів. Створіть безкоштовний обліковий запис для доступу до всіх можливостей платформи."
    />
  );
}
