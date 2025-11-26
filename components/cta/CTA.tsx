import ButtonLink from '@/components/ui/button-link';
import { cn } from '@/utils/cn';
import BgPattern from '../ui/bg-pattern';
import type { CTAProps } from './CTA.types';

/**
 * CTA - Call-to-Action component with flexible layouts
 *
 * @example
 * <CTA
 *   title="Готові почати проєкт?"
 *   description="Отримайте безкоштовну консультацію та розрахунок вартості"
 *   cta1={{ text: "Розрахувати вартість", href: "/calculator", variant: "primary" }}
 *   cta2={{ text: "Зв'язатися з нами", href: "/contact", variant: "outline" }}
 *   variant="default"
 * />
 */
export default function CTA({ title, description, cta1, cta2, className }: CTAProps) {
  return (
    <section className={cn('bg-base-200 relative isolate py-12 lg:py-16', className)}>
      <BgPattern />

      <div className="custom-container flex w-fit flex-col items-center gap-8 text-center">
        {/* Content */}
        <div>
          <h2 className="mb-4 text-2xl font-bold lg:text-4xl">{title}</h2>

          {description && <p className="mb-8 text-lg leading-relaxed">{description}</p>}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <ButtonLink
            href={cta1.href}
            size="large"
            className="min-w-60 w-full sm:w-fit"
            variant={cta1.variant || 'secondary'}
          >
            {cta1.text}
          </ButtonLink>

          {cta2 && (
            <ButtonLink
              href={cta2.href}
              size="large"
              className="min-w-60 w-full sm:w-fit"
              variant={cta2.variant || 'outlined'}
            >
              {cta2.text}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
