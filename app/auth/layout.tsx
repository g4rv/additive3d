import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Авторизація | Additive3D',
  description: 'Увійдіть або зареєструйтесь на платформі Additive3D для замовлення послуг 3D друку',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
