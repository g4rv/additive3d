import ButtonLink from '@/components/ui/button-link';
import { NAVIGATION } from '@/lib/constants';
import { cn } from '@/utils/cn';

interface CTAProps {
  className?: string;
  title?: string;
  description?: string;
  cta1?: {
    text: string;
    href: string;
  };
  cta2?: {
    text: string;
    href: string;
  };
}

/**
 * CTA - Call-to-Action component with clean, subtle design
 *
 * @example
 * <CTA />
 * <CTA title="Custom Title" description="Custom description" />
 */
export default function CTA({
  className,
  title = 'Готові почати проєкт?',
  description = 'Отримайте безкоштовну консультацію та розрахунок вартості',
  cta1 = { text: 'Розрахувати вартість', href: NAVIGATION.calculator.href },
  cta2 = { text: "Зв'язатися з нами", href: NAVIGATION.contact.href },
}: CTAProps) {
  return (
    <section className={cn('bg-base-200 relative isolate py-12 lg:py-16', className)}>
      <div className="custom-container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-8 lg:p-12">
              <h2 className="text-primary mb-6 text-3xl font-bold lg:text-4xl">{title}</h2>

              <p className="text-base-content/80 mx-auto mb-8 text-lg leading-relaxed lg:max-w-2xl">
                {description}
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                <ButtonLink
                  href={cta1.href}
                  size="large"
                  className="min-w-48"
                  variant="secondary"
                >
                  {cta1.text}
                </ButtonLink>

                <ButtonLink
                  href={cta2.href}
                  size="large"
                  variant="outlined"
                  className="min-w-48"
                >
                  {cta2.text}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
