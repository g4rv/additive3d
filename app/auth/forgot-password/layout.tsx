import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Відновлення пароля',
  description: 'Забули пароль? Скиньте його через електронну пошту та відновіть доступ до вашого акаунту Additive3D',
  path: '/auth/forgot-password',
  noIndex: true,
});

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
