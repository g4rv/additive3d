import ButtonLink from '@/components/ui/button-link';
import { cn } from '@/utils/cn';

/**
 * CTA - Call-to-Action component with hardcoded content
 */
export default function CTA({ className }: { className?: string }) {
  return (
    <section className={cn('bg-base-200 relative isolate py-12 lg:py-16', className)}>

      <div className="custom-container flex w-fit flex-col items-center gap-8 text-center">
        {/* Content */}
        <div>
          <h2 className="mb-4 text-2xl font-bold lg:text-4xl">Готові почати проєкт?</h2>

          <p className="mb-8 text-lg leading-relaxed">
            Отримайте безкоштовну консультацію та розрахунок вартості
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <ButtonLink
            href="/calculator"
            size="large"
            className="w-full min-w-60 sm:w-fit"
            variant="secondary"
          >
            Розрахувати вартість
          </ButtonLink>

          <ButtonLink
            href="/contact"
            size="large"
            className="w-full min-w-60 sm:w-fit"
            variant="outlined"
          >
            Зв&apos;язатися з нами
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
