import AboutUs from '@/components/about-us';
import CTA from '@/components/cta';
import FAQ from '@/components/faq';
import HeroMain from '@/components/hero/hero-main/HeroMain';
import OurAdvantages from '@/components/our-advantages';
import { FAQ_DATA } from '@/lib/content/homePage';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Промисловий 3D друк та адитивне виробництво',
  description: 'Професійні послуги 3D друку на промисловому обладнанні: LFAM, MJF, FDM. Виготовлення прототипів та серійних деталей для бізнесу в Україні. Швидко, якісно, доступно.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <HeroMain />
      <OurAdvantages />
      <AboutUs />
      <FAQ {...FAQ_DATA} />
      <CTA />
    </>
  );
}
