import ButtonLink from '@/components/ui/button-link';
import { cn } from '@/utils/cn';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Hero2Props {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  features?: string[];
  cta?: {
    text: string;
    href: string;
  };
  className?: string;
}

/**
 * Hero2 - Equipment Unit Hero
 * Simple, professional hero for equipment detail pages with image support
 * Designed for B2B manufacturing context with subtle animations
 *
 * @example
 * <Hero2
 *   title="HP Jet Fusion 5200"
 *   subtitle="Multi Jet Fusion Technology"
 *   description="Industrial-grade 3D printing for production manufacturing"
 *   image="/equipment/hp-jet-fusion-5200.png"
 *   imageAlt="HP Jet Fusion 5200 3D Printer"
 *   features={["High throughput", "Consistent quality", "PA12 materials"]}
 *   cta={{ text: "Request Quote", href: "/contact" }}
 * />
 */
export default function Hero2({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  features = [],
  cta,
  className,
}: Hero2Props) {
  return (
    <section
      className={cn(
        'bg-base-100 relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24',
        className
      )}
      role="banner"
    >
      {/* Subtle background gradient */}
      <div className="from-primary/5 absolute inset-0 bg-linear-to-br via-transparent to-transparent" />

      {/* Animated accent line */}
      <div className="via-primary absolute top-0 right-0 left-0 h-1 bg-linear-to-r from-transparent to-transparent opacity-50" />

      <div className="custom-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            {subtitle && (
              <div>
                <p className="text-primary mb-4 text-sm font-semibold tracking-wider uppercase">
                  {subtitle}
                </p>
              </div>
            )}

            <div>
              <h1 className="text-base-content mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </div>

            {description && (
              <div>
                <p className="text-base-content/80 mb-8 text-lg leading-relaxed">{description}</p>
              </div>
            )}

            {/* Features list */}
            {features.length > 0 && (
              <div>
                <ul className="mb-8 space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="text-base-content/90 flex items-center gap-3">
                      <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cta && (
              <div>
                <ButtonLink
                  href={cta.href}
                  variant="primary"
                  className="group inline-flex items-center gap-2"
                >
                  {cta.text}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div>
              <div className="relative">
                {/* Glow effect */}
                <div className="bg-primary/10 absolute -inset-4 rounded-full opacity-50 blur-3xl" />

                <div className="bg-base-200 relative rounded-2xl p-8 shadow-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={image}
                      alt={imageAlt || title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="border-primary/50 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2" />
                <div className="border-primary/50 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
