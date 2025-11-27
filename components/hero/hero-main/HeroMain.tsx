import { FadeIn } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import ScrollIndicator from '@/components/ui/scroll-indicator/ScrollIndicator';
import { NAVIGATION } from '@/lib/constants';
import { CircleDollarSign } from 'lucide-react';
import Image from 'next/image';

export default function HeroMain() {
  return (
    <section
      className="bg-hero-gradient min-h-no-header-screen relative isolate overflow-hidden object-fill"
      role="banner"
      aria-label="Additive3D - Професійний 3D друк та сканування"
    >
      <BgPattern />

      <div className="min-h-no-header-screen custom-container grid items-center gap-8 2xl:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col items-center gap-8 text-center lg:gap-12 lg:text-left 2xl:items-start">
          <FadeIn delay={0.1} direction="up" className="text-center 2xl:text-left max-w-lg w-full">
            <h1 className="text-base-content 5xl:text-6xl mb-4 text-4xl leading-tight font-extrabold md:text-5xl">
              Професійний <span className="text-primary whitespace-nowrap">3D друк</span> та{' '}
              <span className="text-primary">сканування</span>
            </h1>

            <p className="text-base-content/90 mx-auto max-w-2xl text-lg leading-relaxed md:text-xl 2xl:mx-0">
              Адитивні рішення для серійних виробів і складних прототипів — від інженерної ідеї до
              готової деталі з контролем якості.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <ButtonLink
              href={NAVIGATION.calculator.href}
              variant="secondary"
              className="min-w-[200px]"
              aria-label="Отримати миттєвий розрахунок вартості 3D друку"
              startAdornment={<CircleDollarSign />}
            >
              Миттєвий розрахунок
            </ButtonLink>

            <ButtonLink
              href={NAVIGATION.services.href}
              variant="outlined"
              className="min-w-[200px]"
              aria-label="Переглянути наші послуги"
            >
              Переглянути послуги
            </ButtonLink>
          </div>
        </div>

        {/* Visual Column - Right Side */}
        <div className="relative hidden max-h-fit 2xl:block">
          <div className="border-primary absolute bottom-16 left-16 z-10 size-40 border-6" />
          <Image
            src="/hp-jet-fusion.png"
            className="relative z-20 scale-80"
            aria-hidden
            alt="декоративна картинка"
            width={768}
            height={568}
          />
          <div className="border-primary absolute top-10 right-0 z-30 size-30 border-6" />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
