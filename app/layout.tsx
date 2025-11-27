import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { cn } from '@/utils/cn';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Additive3D - Промисловий 3D Друк',
  description: 'Професійні послуги 3D друку та моделювання для бізнесу',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className='h-full'>
      <body
        className={cn(
          montserrat.variable,
          inter.variable,
          'bg-base-100 text-base-content min-h-full flex flex-col font-sans antialiased'
        )}
        data-theme="dark"
      >
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-content sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4"
        >
          До головного контенту
        </a>
        <Header />
        <main className="grow" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
