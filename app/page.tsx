import CTA from '@/components/cta';
import FAQ from '@/components/faq';
import HeroMain from '@/components/hero/hero-main/HeroMain';

export default function Home() {
  return (
    <>
      <HeroMain />
      <FAQ
        items={[
          { question: 'Gay?', answer: 'Gay', id: '1' },
          { question: 'Gay?', answer: 'Gay', id: '1' },
          { question: 'Gay?', answer: 'Gay', id: '1' },
          { question: 'Gay?', answer: 'Gay', id: '1' },
        ]}
      />
      <CTA
        title="Готові почати проєкт?"
        description="Отримайте безкоштовну консультацію та розрахунок вартості"
        cta1={{ text: 'Розрахувати вартість', href: '/calculator' }}
        cta2={{ text: "Зв'язатися з нами", href: '/contact' }}
      />
    </>
  );
}
