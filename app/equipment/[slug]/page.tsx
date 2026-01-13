import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import { EQUIPMENT_DATA } from '@/lib/constants';
import { SlugPageProps } from '@/lib/types';
import isTechnologySlug from '@/utils/isTechnologySlug';
import {
  Award,
  Box,
  CheckCircle,
  Cog,
  Layers,
  Printer,
  Settings,
  Target,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Technology titles
const TECHNOLOGY_TITLES: Record<string, { title: string; description: string }> = {
  mjf: {
    title: 'Multi Jet Fusion (MJF)',
    description: 'Високошвидкісна технологія для серійного виробництва полімерних деталей',
  },
  fdm: {
    title: 'Fused Deposition Modeling (FDM)',
    description: 'Надійна технологія для міцних функціональних прототипів та виробів',
  },
  lfam: {
    title: 'Large Format Additive Manufacturing (LFAM)',
    description: 'Технологія для виробництва великогабаритних композитних виробів',
  },
};

// Generate static params for all technologies
export async function generateStaticParams() {
  return [{ slug: 'mjf' }, { slug: 'fdm' }, { slug: 'lfam' }];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isTechnologySlug(slug)) {
    return {
      title: 'Технологія не знайдена | Additive3D',
    };
  }

  const tech = TECHNOLOGY_TITLES[slug.toLowerCase()];

  return {
    title: `Обладнання ${tech.title} | Additive3D`,
    description: tech.description,
  };
}

export default async function EquipmentTechnologyPage({ params }: SlugPageProps) {
  const { slug } = await params;

  if (!isTechnologySlug(slug)) {
    notFound();
  }

  const technology = slug.toUpperCase();
  const techInfo = TECHNOLOGY_TITLES[slug.toLowerCase()];

  // Filter equipment by technology
  const equipmentList = EQUIPMENT_DATA.filter((eq) => eq.technology === technology);

  if (equipmentList.length === 0) {
    notFound();
  }

  const specificationIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    buildChamber: Box,
    layerThickness: Layers,
    materials: Settings,
    accuracy: Target,
    printSpeed: Zap,
    supportSystem: Cog,
    heatedChamber: Settings,
    heatedBed: Settings,
  };

  const specificationLabels: Record<string, string> = {
    buildChamber: 'Робоча камера',
    layerThickness: 'Товщина шару',
    materials: 'Матеріали',
    accuracy: 'Точність',
    printSpeed: 'Швидкість друку',
    supportSystem: 'Система підтримок',
    heatedChamber: 'Камера з підігрівом',
    heatedBed: 'Підігрів платформи',
  };

  return (
    <>
      <HeroFancy title={techInfo.title} description={techInfo.description} />

      {/* Equipment List Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Наше обладнання</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Професійні 3D-принтери технології {technology}
            </p>
          </div>

          <div className="mx-auto max-w-7xl space-y-12">
            {equipmentList.map((equipment) => (
              <div
                key={equipment.name}
                className="card bg-base-200 border-base-300 shadow-lg transition-all duration-[var(--duration-moderate)] hover:shadow-xl"
              >
                <div className="card-body p-8 lg:p-12">
                  {/* Equipment Header */}
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <Printer className="text-primary size-8" />
                        </div>
                        <div>
                          <h3 className="text-primary text-2xl font-bold lg:text-3xl">
                            {equipment.name}
                          </h3>
                          <p className="text-base-content/60 text-lg">{equipment.title}</p>
                        </div>
                      </div>
                      <p className="text-base-content/90 text-lg leading-relaxed lg:text-xl">
                        {equipment.description}
                      </p>
                    </div>
                  </div>

                  {/* Equipment Images Gallery */}
                  {equipment.images && equipment.images.length > 0 && (
                    <div className="mb-8">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {equipment.images.map((imagePath, idx) => (
                          <div
                            key={idx}
                            className="bg-base-100 overflow-hidden rounded-lg border border-base-300 transition-all duration-[var(--duration-moderate)] hover:shadow-lg"
                          >
                            <Image
                              src={imagePath}
                              alt={`${equipment.name} - зображення ${idx + 1}`}
                              width={400}
                              height={192}
                              className="h-48 w-full object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits & Best For Grid */}
                  <div className="mb-8 grid gap-6 lg:grid-cols-2">
                    {/* Benefits */}
                    <div className="card bg-base-100 border-base-300 shadow-sm">
                      <div className="card-body p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <Award className="text-primary size-5" />
                          <h4 className="text-primary text-lg font-semibold">
                            Ключові переваги
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {equipment.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="text-primary mt-1 size-4 flex-shrink-0" />
                              <span className="text-base-content/90 text-sm leading-relaxed">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="card bg-base-100 border-base-300 shadow-sm">
                      <div className="card-body p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <Target className="text-primary size-5" />
                          <h4 className="text-primary text-lg font-semibold">
                            Оптимальне застосування
                          </h4>
                        </div>
                        <p className="text-base-content/90 leading-relaxed">
                          {equipment.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h4 className="text-primary mb-4 flex items-center gap-2 text-lg font-semibold">
                      <Settings className="size-5" />
                      Технічні характеристики
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {Object.entries(equipment.specifications).map(([key, value]) => {
                        const Icon = specificationIcons[key] || Settings;
                        const label = specificationLabels[key] || key;

                        // Handle different value types
                        let displayValue: React.ReactNode;
                        if (typeof value === 'boolean') {
                          displayValue = value ? 'Так' : 'Ні';
                        } else if (Array.isArray(value)) {
                          displayValue = (
                            <ul className="space-y-1">
                              {value.map((item, idx) => (
                                <li key={idx} className="text-xs">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          );
                        } else {
                          displayValue = value;
                        }

                        return (
                          <div
                            key={key}
                            className="bg-base-100 rounded-lg border border-base-300 p-4"
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <Icon className="text-primary size-4 flex-shrink-0" />
                              <h5 className="text-primary text-sm font-semibold">{label}</h5>
                            </div>
                            <div className="text-base-content/90 text-sm">{displayValue}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-primary text-3xl font-bold lg:text-4xl">
                Переваги технології {technology}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Technology-specific benefits */}
              {technology === 'MJF' && (
                <>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Zap className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Висока швидкість
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Одночасний друк великої кількості деталей з високою продуктивністю
                      </p>
                    </div>
                  </div>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Target className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Точність та якість
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Однорідні механічні властивості та висока точність деталей
                      </p>
                    </div>
                  </div>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Settings className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Без підтримок
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Самопідтримуючі структури без необхідності видалення підтримок
                      </p>
                    </div>
                  </div>
                </>
              )}

              {technology === 'FDM' && (
                <>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Award className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Інженерні матеріали
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Широкий вибір високопродуктивних термопластиків
                      </p>
                    </div>
                  </div>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Settings className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Термостійкість
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Матеріали витримують високі робочі температури
                      </p>
                    </div>
                  </div>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Cog className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Міцність
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Високі механічні характеристики для навантажених деталей
                      </p>
                    </div>
                  </div>
                </>
              )}

              {technology === 'LFAM' && (
                <>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Box className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Великий формат
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Виробництво великогабаритних деталей до 3 метрів
                      </p>
                    </div>
                  </div>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Zap className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Швидке виробництво
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Висока швидкість нанесення матеріалу до 50 кг/год
                      </p>
                    </div>
                  </div>
                  <div className="card bg-base-100 border-base-300 shadow-sm">
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                        <Settings className="size-6" />
                      </div>
                      <h3 className="text-primary mb-2 text-lg font-semibold">
                        Композитні матеріали
                      </h3>
                      <p className="text-base-content/80 text-sm leading-relaxed">
                        Армовані матеріали для підвищеної міцності
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-base-100 py-8 lg:py-16">
        <div className="custom-container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-primary text-3xl font-bold lg:text-4xl">
                Процес виробництва
              </h2>
              <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
                Від цифрової моделі до готової деталі
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: 1,
                  title: 'Підготовка моделі',
                  description:
                    'Завантаження 3D-моделі, перевірка геометрії та оптимізація орієнтації для найкращого результату',
                  icon: Settings,
                },
                {
                  number: 2,
                  title: 'Налаштування параметрів',
                  description:
                    'Вибір матеріалу, товщини шару, заповнення та інших параметрів друку відповідно до вимог',
                  icon: Cog,
                },
                {
                  number: 3,
                  title: 'Виробництво',
                  description:
                    'Автоматизований процес друку з контролем якості на кожному етапі виробництва',
                  icon: Zap,
                },
                {
                  number: 4,
                  title: 'Постобробка та контроль',
                  description:
                    'Видалення підтримок, фінішна обробка та перевірка відповідності технічним вимогам',
                  icon: CheckCircle,
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="card bg-base-200 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                  >
                    <div className="card-body p-6 lg:p-8">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-primary/10 flex size-12 items-center justify-center rounded-lg">
                            <span className="text-primary text-xl font-bold">{step.number}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="mb-3 flex items-center gap-3">
                            <Icon className="text-primary size-5" />
                            <h3 className="text-primary text-lg font-semibold lg:text-xl">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-base-content/90 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={`Замовити друк на технології ${technology}`}
        description="Отримайте професійну консультацію та розрахунок вартості для вашого проєкту"
      />
    </>
  );
}
