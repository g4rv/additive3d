import AboutUs from '@/components/about-us';
import CTA from '@/components/cta';
import FAQ from '@/components/faq';
import HeroMain from '@/components/hero/hero-main/HeroMain';
import OurAdvantages from '@/components/our-advantages';
import { FAQ_DATA } from '@/lib/content/homePage';

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
