import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Вхід',
  description: 'Увійдіть до свого акаунту Additive3D для доступу до калькулятора 3D друку та управління замовленнями',
  path: '/auth/login',
  noIndex: true,
});

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
