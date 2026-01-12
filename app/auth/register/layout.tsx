import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Реєстрація',
  description: 'Створіть акаунт Additive3D для розміщення замовлень на 3D друк та управління проєктами',
  path: '/auth/register',
  noIndex: true,
});

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
