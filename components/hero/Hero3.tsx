
import { FadeIn } from '@/components/animations';
import ButtonLink from '@/components/ui/button-link';
import { cn } from '@/utils/cn';
import { ArrowRight, Gauge, Thermometer, Zap } from 'lucide-react';

interface MaterialProperty {
  label: string;
  value: string;
  icon?: 'strength' | 'temperature' | 'flexibility';
}

interface Hero3Props {
  title: string;
  subtitle?: string;
  description?: string;
  properties?: MaterialProperty[];
  cta?: {
    text: string;
    href: string;
  };
  className?: string;
}

const iconMap = {
  strength: Gauge,
  temperature: Thermometer,
  flexibility: Zap,
};

/**
 * Hero3 - Material Unit Hero
 * Simple, professional hero for material detail pages with property display
 * Designed for technical specifications in B2B manufacturing context
 *
 * @example
 * <Hero3
 *   title="PA12 Nylon"
 *   subtitle="Multi Jet Fusion Material"
 *   description="High-performance thermoplastic for functional prototypes and end-use parts"
 *   properties={[
 *     { label: "Tensile Strength", value: "48 MPa", icon: "strength" },
 *     { label: "Max Temperature", value: "176°C", icon: "temperature" },
 *     { label: "Elongation", value: "18%", icon: "flexibility" }
 *   ]}
 *   cta={{ text: "View Technical Specs", href: "/materials/pa12" }}
 * />
 */
export default function Hero3({
  title,
  subtitle,
  description,
  properties = [],
  cta,
  className,
}: Hero3Props) {
  return (
    <section
      className={cn(
        'relative bg-base-100 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden',
        className
      )}
      role="banner"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,210,49,0.1),transparent_50%)]" />
      </div>

      {/* Animated accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="custom-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
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
                <p className="text-base-content/80 text-lg leading-relaxed max-w-2xl mx-auto">
                  {description}
                </p>
              </FadeIn>
            )}
          </div>

          {/* Material Properties Grid */}
          {properties.length > 0 && (
            <FadeIn direction="up" delay={0.4}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {properties.map((property, index) => {
                  const IconComponent = property.icon ? iconMap[property.icon] : Gauge;

                  return (
                    <div
                      key={index}
                      className="bg-base-200 rounded-xl p-6 border border-base-content/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-base-content/70 text-sm mb-1">
                            {property.label}
                          </p>
                          <p className="text-base-content text-xl font-bold">
                            {property.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          )}

          {/* CTA */}
          {cta && (
            <FadeIn direction="up" delay={0.5}>
              <div className="text-center">
                <ButtonLink
                  href={cta.href}
                  variant="primary"
                  className="group inline-flex items-center gap-2"
                >
                  {cta.text}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
