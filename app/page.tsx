import CalculatorDescription from '@/components/calculator-description/CalculatorDescription';
import CallToAction from '@/components/call-to-action/CallToAction';
import CardShowcase from '@/components/card-showcase/CardShowcase';
import { HeroMain } from '@/components/hero';
import TrustBadges from '@/components/principles-showcase';
import ServicesVisual from '@/components/services-visual/ServicesVisual';
import TechnologyComparison from '@/components/technology-comparison/TechnologyComparison';
import { MATERIALS_DATA } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <HeroMain />
      <TrustBadges />
      <ServicesVisual />
      <TechnologyComparison />
      <CardShowcase
        title="Матеріали для 3D друку"
        subtitle="Оберіть відповідний матеріал для вашого проєкту з нашої колекції інженерних термопластиків"
        cards={MATERIALS_DATA}
        ctaText="Допомога з вибором матеріалу"
        cardLinkPrefix="/materials/"
      />
      <CalculatorDescription />
      <CallToAction />
    </>
  );
}
