'use client';

import { FadeIn } from '@/components/animations';
import ButtonLink from '@/components/ui/button-link';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface TechnologyFeature {
  label: string;
  mjf: string | boolean;
  fdm: string | boolean;
}

const FEATURES: TechnologyFeature[] = [
  { label: 'Швидкість друку', mjf: 'Висока', fdm: 'Середня' },
  { label: 'Точність', mjf: '±0.2мм', fdm: '±0.1-0.2мм' },
  { label: 'Товщина шару', mjf: '80 мкм', fdm: '127-330 мкм' },
  { label: 'Підтримки', mjf: false, fdm: true },
  { label: 'Серійне виробництво', mjf: true, fdm: true },
  { label: 'Складна геометрія', mjf: true, fdm: true },
  { label: 'Вартість матеріалу', mjf: 'Середня', fdm: 'Низька-Середня' },
  { label: 'Обробка поверхні', mjf: 'Гладка', fdm: 'Видимі шари' },
];

/**
 * TechnologyComparison - Side-by-side comparison of MJF vs FDM technologies
 * Helps users understand technology differences and applications
 */
export default function TechnologyComparison() {
  return (
    <section className="bg-base-100 relative isolate py-16 lg:py-24" aria-labelledby="tech-comparison-heading">
      <div className="custom-container">
        <FadeIn direction="up" className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            className="text-base-content mb-4 text-3xl font-bold md:text-4xl"
            id="tech-comparison-heading"
          >
            Сучасні адитивні технології
          </h2>
          <p className="text-base-content/80 text-lg">
            Виберіть оптимальну технологію для вашого проєкту з нашого спектру рішень MJF та FDM
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* MJF Technology */}
          <FadeIn direction="left" delay={0.1}>
            <div className="bg-base-200 border-base-300 overflow-hidden rounded-lg border">
              {/* Image Header */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/equipment/hp-jet-fusion-5200.png"
                  fill
                  className="object-cover"
                  alt="HP Jet Fusion MJF принтер"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-primary mb-1 text-3xl font-bold">MJF</h3>
                  <p className="text-sm text-white/90">Multi Jet Fusion</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="mb-6 space-y-3">
                  {FEATURES.map((feature) => (
                    <li key={feature.label} className="flex items-start justify-between gap-4">
                      <span className="text-base-content/70 text-sm">{feature.label}</span>
                      <span className="text-base-content text-right text-sm font-semibold">
                        {typeof feature.mjf === 'boolean' ? (
                          feature.mjf ? (
                            <Check className="text-success h-5 w-5" />
                          ) : (
                            <span className="text-base-content/40">—</span>
                          )
                        ) : (
                          feature.mjf
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <ButtonLink href="/services/3d-printing/mjf" variant="outlined" className="w-full">
                  Детальніше про MJF
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* FDM Technology */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-base-200 border-base-300 overflow-hidden rounded-lg border">
              {/* Image Header */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/equipment/stratasys-fortus-400mc.png"
                  fill
                  className="object-contain"
                  alt="Stratasys Fortus FDM принтер"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-primary mb-1 text-3xl font-bold">FDM</h3>
                  <p className="text-sm text-white/90">Fused Deposition Modeling</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="mb-6 space-y-3">
                  {FEATURES.map((feature) => (
                    <li key={feature.label} className="flex items-start justify-between gap-4">
                      <span className="text-base-content/70 text-sm">{feature.label}</span>
                      <span className="text-base-content text-right text-sm font-semibold">
                        {typeof feature.fdm === 'boolean' ? (
                          feature.fdm ? (
                            <Check className="text-success h-5 w-5" />
                          ) : (
                            <span className="text-base-content/40">—</span>
                          )
                        ) : (
                          feature.fdm
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <ButtonLink href="/services/3d-printing/fdm" variant="outlined" className="w-full">
                  Детальніше про FDM
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn direction="up" delay={0.3} className="mt-12 text-center">
          <ButtonLink href="/services/3d-printing/calculator" variant="secondary" className="mx-auto">
            Отримати консультацію щодо технології
          </ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
