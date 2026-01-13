import { Metadata } from 'next';
import AuthRequiredBanner from '@/components/ui/auth-required-banner/AuthRequiredBanner';

export const metadata: Metadata = {
  title: 'Потрібна авторизація | Additive3D',
  description: 'Для доступу до цієї функції необхідно увійти в систему.',
};

export default function AuthRequiredPage() {
  return (
    <AuthRequiredBanner
      title="Увійдіть, щоб продовжити"
      message="Ця функція доступна тільки для зареєстрованих користувачів. Створіть безкоштовний обліковий запис для доступу до всіх можливостей платформи."
    />
  );
}
