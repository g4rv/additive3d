
import { FadeIn } from '@/components/animations';
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
        'relative bg-base-100 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden',
        className
      )}
      role="banner"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      {/* Animated accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="custom-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {subtitle && (
              <FadeIn direction="up" delay={0.1}>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                  {subtitle}
                </p>
              </FadeIn>
            )}

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-base-content text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {title}
              </h1>
            </FadeIn>

            {description && (
              <FadeIn direction="up" delay={0.3}>
                <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                  {description}
                </p>
              </FadeIn>
            )}

            {/* Features list */}
            {features.length > 0 && (
              <FadeIn direction="up" delay={0.4}>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-base-content/90">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {cta && (
              <FadeIn direction="up" delay={0.5}>
                <ButtonLink
                  href={cta.href}
                  variant="primary"
                  className="group inline-flex items-center gap-2"
                >
                  {cta.text}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </FadeIn>
            )}
          </div>

          {/* Image */}
          {image && (
            <FadeIn direction="left" delay={0.3}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50" />

                <div className="relative bg-base-200 rounded-2xl p-8 shadow-xl">
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
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
