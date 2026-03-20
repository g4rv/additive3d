import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кабінет користувача | Additive3D',
  description: 'Особистий кабінет користувача для управління замовленнями та налаштуваннями',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
