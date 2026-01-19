import AboutUs from '@/components/about-us';
import CTA from '@/components/cta';
import FAQ from '@/components/faq';
import HeroMain from '@/components/hero/hero-main/HeroMain';
import OurAdvantages from '@/components/our-advantages';
import { FAQ_DATA } from '@/lib/content/homePage';
import { createMetadata } from '@/lib/metadata';
import { generateFAQSchema, StructuredData } from '@/lib/structured-data';

export const metadata = createMetadata({
  title: 'Промисловий 3D друк та адитивне виробництво',
  description:
    'Професійні послуги 3D друку в Україні: MJF, FDM, LFAM технології. Виготовлення прототипів і серійних деталей, 3D сканування, моделювання. Замовити 3D друк в Києві ⚡ Швидко, якісно, доступно.',
  path: '/',
  keywords: [
    '3D друк',
    '3D друк Україна',
    '3D друк Київ',
    'промисловий 3D друк',
    'адитивне виробництво',
    'MJF друк',
    'FDM друк',
    'LFAM друк',
    '3D сканування',
    '3D моделювання',
    'прототипування',
    'серійне виробництво',
    'замовити 3D друк',
    '3D printing Ukraine',
  ],
});

export default function Home() {
  // Generate FAQ schema for SEO
  const faqSchema = generateFAQSchema(
    FAQ_DATA.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
  );

  return (
    <>
      <StructuredData data={faqSchema} />
      <HeroMain />
      <OurAdvantages />
      <AboutUs />
      <FAQ {...FAQ_DATA} />
      <CTA />
    </>
  );
}
