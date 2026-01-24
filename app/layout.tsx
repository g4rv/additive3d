import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { generateOrganizationSchema, StructuredData } from '@/lib/structured-data';
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
  metadataBase: new URL('https://additive3d.com.ua'),
  title: 'Additive3D - Промисловий 3D Друк',
  description: 'Професійні послуги 3D друку та моделювання для бізнесу',
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'Additive3D',
    title: 'Additive3D - Промисловий 3D Друк',
    description: 'Професійні послуги 3D друку та моделювання для бізнесу',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Additive3D',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Additive3D - Промисловий 3D Друк',
    description: 'Професійні послуги 3D друку та моделювання для бізнесу',
    images: ['/og-image.jpg'],
  },
  // Additional meta tags
  other: {
    'facebook:domain_verification': 'your-facebook-verification-code',
    'google-site-verification': 'your-google-verification-code',
  },
  // Icons and manifests
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate Organization structured data for SEO
  const organizationSchema = generateOrganizationSchema({
    name: 'Additive3D',
    description:
      'Професійні послуги 3D друку, моделювання, сканування та реверс-інжинірингу в Україні',
    url: 'https://additive3d.com.ua',
    logo: 'https://additive3d.com.ua/logo.png',
    contactPhone: '+380638862047',
    contactEmail: 'info@additive.com.ua',
    address: {
      streetAddress: '',
      addressLocality: 'Київ',
      addressRegion: 'Київська область',
      postalCode: '',
      addressCountry: 'UA',
    },
    sameAs: [
      // Add your social media URLs here when available
      // 'https://www.facebook.com/additive3d',
      // 'https://www.linkedin.com/company/additive3d',
      // 'https://www.instagram.com/additive3d',
    ],
  });

  return (
    <html lang="uk" className="h-full">
      <head>
        <StructuredData data={organizationSchema} />
      </head>
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
        <ScrollToTop />
        <Header />
        <main className="grow" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
