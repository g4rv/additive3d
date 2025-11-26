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
        'bg-base-100 relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24',
        className
      )}
      role="banner"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,210,49,0.1),transparent_50%)]" />
      </div>

      {/* Animated accent line */}
      <div className="via-primary absolute top-0 right-0 left-0 h-1 bg-linear-to-r from-transparent to-transparent opacity-50" />

      <div className="custom-container relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
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
                <p className="text-base-content/80 mx-auto max-w-2xl text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            )}
          </div>

          {/* Material Properties Grid */}
          {properties.length > 0 && (
            <div>
              <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {properties.map((property, index) => {
                  const IconComponent = property.icon ? iconMap[property.icon] : Gauge;

                  return (
                    <div
                      key={index}
                      className="bg-base-200 border-base-content/10 hover:border-primary/30 rounded-xl border p-6 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <IconComponent className="text-primary h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <p className="text-base-content/70 mb-1 text-sm">{property.label}</p>
                          <p className="text-base-content text-xl font-bold">{property.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          {cta && (
            <div>
              <div className="text-center">
                <ButtonLink
                  href={cta.href}
                  variant="primary"
                  className="group inline-flex items-center gap-2"
                >
                  {cta.text}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="via-primary/30 absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent to-transparent" />
    </section>
  );
}
