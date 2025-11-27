import { FadeIn } from '@/components/animations';
import ButtonLink from '@/components/ui/button-link';
import { NAVIGATION } from '@/lib/constants';
import { Clock, Info, ShieldCheck } from 'lucide-react';

/**
 * FinalCTA - Strong final call-to-action before footer
 * Last conversion opportunity with risk-free messaging
 */
export default function CallToAction() {
  return (
    <section className="bg-base-200 relative py-20" aria-labelledby="final-cta-heading">
      <div className="custom-container">
        <FadeIn direction="up">
          <div className="text-center text-white">
            <h2 id="final-cta-heading" className="mb-6 text-4xl font-bold lg:text-5xl">
              Готові розпочати ваш проєкт?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-white/90">
              Зв&apos;яжіться з нашою командою для консультації. Ми надамо професійну підтримку на
              кожному етапі вашого проєкту.
            </p>

            <ButtonLink href={NAVIGATION.contact.href} variant="secondary">
              Зв&apos;язатися з нами
            </ButtonLink>

            <ul className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <li className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Безкоштовно
              </li>
              <li className="flex items-center gap-2">
                <Info size={18} />
                Конфіденційно
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} />
                Швидко
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
