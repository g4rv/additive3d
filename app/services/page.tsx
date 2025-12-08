import { Metadata } from 'next';
import {
  Printer,
  Scan,
  Box,
  Ruler,
  Droplet,
  Wind,
  Wrench,
  Zap,
  Target,
  Award,
  CheckCircle,
  Settings,
  Package,
  Users,
  ArrowRight,
  Sparkles,
  Shield,
  Rocket,
} from 'lucide-react';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import CTA from '@/components/cta';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Послуги | Additive3D',
  description:
    'Повний спектр послуг адитивного виробництва: 3D-друк (MJF, FDM, LFAM), 3D-сканування, моделювання, реверс-інжиніринг, інспекція геометрії та постобробка.',
};

export default function ServicesPage() {
  const coreServices = [
    {
      title: '3D-друк',
      description:
        'Професійні технології адитивного виробництва для прототипування та серійного виробництва',
      icon: Printer,
      href: '/services/3d-printing',
      features: [
        'MJF (Multi Jet Fusion)',
        'FDM (Fused Deposition Modeling)',
        'LFAM (Large Format)',
        'Серійне виробництво',
      ],
      image: '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-collection.png',
      stats: { value: '3', label: 'Технології' },
    },
    {
      title: '3D-сканування',
      description:
        'Високоточне оцифрування об\'єктів за технологією фотограмметрії та лазерного сканування',
      icon: Scan,
      href: '/services/3d-scanning',
      features: [
        'Точність до 0,02 мм',
        'Zeiss GOM Scan 1',
        'Zeiss T-SCAN Hawk 2',
        'Безконтактне сканування',
      ],
      image: '/Technology/FDM/Fortus 400mc/fortus-400mc.jpg',
      stats: { value: '0.02мм', label: 'Точність' },
    },
    {
      title: '3D-моделювання',
      description:
        'Створення точних CAD-моделей для конструкторських розробок та дизайну',
      icon: Box,
      href: '/services/3d-modeling',
      features: [
        'Інженерне моделювання',
        'Дизайнерське моделювання',
        'Параметризація',
        'Підготовка до виробництва',
      ],
      image: '/Technology/LFAM/HERON 300 HV/heron-300-hv-printing-2.jpg',
      stats: { value: '5+', label: 'ПЗ пакетів' },
    },
  ];

  const additionalServices = [
    {
      title: 'Реверс-інжиніринг',
      description:
        'Відновлення технічної документації та створення CAD-моделей на основі фізичних об\'єктів',
      icon: Wrench,
      href: '/services/reverse-engineering',
    },
    {
      title: 'Інспекція геометрії',
      description:
        'Точний контроль відповідності виготовлених деталей технічній документації',
      icon: Ruler,
      href: '/services/geometry-inspection',
    },
    {
      title: 'Фарбування',
      description:
        'Професійне фарбування 3D-друкованих виробів для покращення естетики та властивостей',
      icon: Droplet,
      href: '/services/dyeing',
    },
    {
      title: 'Парове прасування',
      description:
        'Покращення механічних властивостей та зовнішнього вигляду деталей',
      icon: Wind,
      href: '/services/smoothing',
    },
  ];

  const advantages = [
    {
      title: 'Комплексний підхід',
      description:
        'Повний цикл від ідеї до готового виробу: сканування, моделювання, друк, постобробка',
      icon: Package,
    },
    {
      title: 'Високі стандарти якості',
      description:
        'Контроль якості на всіх етапах виробництва з документуванням результатів',
      icon: Award,
    },
    {
      title: 'Швидке виконання',
      description:
        'Оперативне виробництво завдяки сучасному обладнанню та налагодженим процесам',
      icon: Zap,
    },
    {
      title: 'Точність виготовлення',
      description:
        'Висока точність друку та вимірювань для найвимогливіших інженерних завдань',
      icon: Target,
    },
    {
      title: 'Професійна консультація',
      description:
        'Допомога у виборі технології, матеріалів та оптимізації конструкції під виробництво',
      icon: Users,
    },
    {
      title: 'Гнучкість виробництва',
      description:
        'Від одиничних прототипів до серійних партій з можливістю швидких змін',
      icon: Settings,
    },
  ];

  const workflow = [
    {
      number: 1,
      title: 'Консультація та аналіз',
      description:
        'Обговорення ваших потреб, аналіз технічних вимог, підбір оптимальної технології та матеріалів',
      icon: Users,
    },
    {
      number: 2,
      title: 'Підготовка та моделювання',
      description:
        '3D-сканування (за потреби), створення або оптимізація CAD-моделі, підготовка до виробництва',
      icon: Box,
    },
    {
      number: 3,
      title: 'Виробництво',
      description:
        '3D-друк на професійному обладнанні з контролем параметрів та якості на всіх етапах',
      icon: Printer,
    },
    {
      number: 4,
      title: 'Постобробка та контроль',
      description:
        'Видалення підтримок, фарбування, парове прасування, інспекція геометрії, упакування',
      icon: CheckCircle,
    },
  ];

  const industries = [
    { name: 'Автомобільна промисловість', icon: Rocket },
    { name: 'Аерокосмічна галузь', icon: Rocket },
    { name: 'Медичні пристрої', icon: Shield },
    { name: 'Електроніка та телекомунікації', icon: Sparkles },
    { name: 'Промислові корпуси та кріплення', icon: Package },
    { name: 'Оснащення виробництва', icon: Settings },
    { name: 'Архітектура та дизайн', icon: Target },
    { name: 'Освітні заклади та R&D', icon: Users },
  ];

  return (
    <>
      <HeroFancy
        title="Послуги"
        description="Повний спектр послуг адитивного виробництва для професійних завдань"
      />

      {/* Core Services - Consistent 3-Column Grid */}
      <section className="bg-base-100 relative isolate py-16 lg:py-24">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-primary text-4xl font-bold lg:text-5xl">
              Основні послуги
            </h2>
            <p className="text-base-content/70 mx-auto mt-6 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Професійні технології адитивного виробництва для вирішення найскладніших
              інженерних завдань
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="card bg-base-200 group h-full overflow-hidden border-base-300 shadow-lg transition-all duration-[var(--duration-moderate)] hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Image with Stats Overlay */}
                    <figure className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={450}
                        className="h-full w-full object-cover transition-transform duration-[var(--duration-slower)] group-hover:scale-110"
                        priority={index === 0}
                      />
                      {/* Gradient Overlay for Better Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-base-300/90 via-base-300/20 to-transparent" />

                      {/* Stats Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-primary rounded-lg px-4 py-3 shadow-lg backdrop-blur-sm">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-base-100 text-3xl font-bold">
                              {service.stats.value}
                            </span>
                            <span className="text-base-100/90 text-sm font-medium uppercase tracking-wide">
                              {service.stats.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </figure>

                    {/* Card Content */}
                    <div className="card-body p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="bg-primary/10 text-primary rounded-xl p-3 transition-all duration-[var(--duration-moderate)] group-hover:bg-primary group-hover:text-base-100">
                          <Icon className="size-7" />
                        </div>
                        <h3 className="text-primary text-2xl font-bold">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-base-content/80 mb-6 min-h-[3rem] leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="mb-6 space-y-2.5">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2.5">
                            <CheckCircle className="text-primary mt-0.5 size-4 shrink-0" />
                            <span className="text-base-content/70 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Link */}
                      <Link
                        href={service.href}
                        className="text-primary group mt-auto inline-flex items-center gap-2 font-semibold transition-all duration-[var(--duration-fast)] hover:gap-3"
                      >
                        Детальніше
                        <ArrowRight className="size-5 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow - Clean Timeline */}
      <section className="bg-base-200 relative isolate py-16 lg:py-24">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-primary text-4xl font-bold lg:text-5xl">
              Як ми працюємо
            </h2>
            <p className="text-base-content/70 mx-auto mt-6 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Прозорий процес від ідеї до готового виробу
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="card bg-base-100 group relative h-full border-base-300 shadow-md transition-all duration-[var(--duration-moderate)] hover:shadow-xl"
                  >
                    <div className="card-body p-8">
                      {/* Step Number Badge */}
                      <div className="bg-primary mb-4 inline-flex size-16 items-center justify-center rounded-xl shadow-lg">
                        <span className="text-base-100 text-3xl font-bold">
                          {step.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="text-primary mb-4 transition-transform duration-[var(--duration-moderate)] group-hover:scale-110">
                        <Icon className="size-10" />
                      </div>

                      {/* Content */}
                      <h3 className="text-primary mb-3 text-xl font-bold">
                        {step.title}
                      </h3>
                      <p className="text-base-content/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector Arrow (Desktop Only) */}
                    {step.number < workflow.length && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                        <div className="bg-base-200 rounded-full p-1">
                          <ArrowRight className="text-primary size-5" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - Compact Grid */}
      <section className="bg-base-100 relative isolate py-16 lg:py-24">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-primary text-4xl font-bold lg:text-5xl">
              Додаткові послуги
            </h2>
            <p className="text-base-content/70 mx-auto mt-6 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Комплексні рішення для повного циклу виробництва
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="card bg-base-200 group h-full border-base-300 shadow-md transition-all duration-[var(--duration-moderate)] hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="card-body p-6 text-center">
                      {/* Icon */}
                      <div className="bg-primary/10 text-primary mx-auto mb-4 inline-flex size-20 items-center justify-center rounded-2xl transition-all duration-[var(--duration-moderate)] group-hover:scale-110 group-hover:bg-primary group-hover:text-base-100">
                        <Icon className="size-10" />
                      </div>

                      {/* Title */}
                      <h3 className="text-primary mb-3 text-lg font-bold">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base-content/70 mb-4 min-h-[4rem] text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="text-primary mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-all duration-[var(--duration-fast)] group-hover:gap-3">
                        Більше
                        <ArrowRight className="size-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages - Clean Grid */}
      <section className="bg-base-200 relative isolate py-16 lg:py-24">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-primary text-4xl font-bold lg:text-5xl">
              Наші переваги
            </h2>
            <p className="text-base-content/70 mx-auto mt-6 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Чому професіонали обирають Additive3D
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div
                    key={index}
                    className="card bg-base-100 group border-base-300 shadow-md transition-all duration-[var(--duration-moderate)] hover:shadow-xl"
                  >
                    <div className="card-body p-6">
                      <div className="bg-primary/10 text-primary mb-4 inline-flex size-14 items-center justify-center rounded-xl transition-all duration-[var(--duration-moderate)] group-hover:bg-primary group-hover:text-base-100">
                        <Icon className="size-7" />
                      </div>
                      <h3 className="text-primary mb-3 text-lg font-bold">
                        {advantage.title}
                      </h3>
                      <p className="text-base-content/70 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-base-100 relative isolate py-16 lg:py-24">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-primary text-4xl font-bold lg:text-5xl">
              Галузі застосування
            </h2>
            <p className="text-base-content/70 mx-auto mt-6 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Наші технології використовуються у різних галузях промисловості
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="card bg-base-200 group border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                  >
                    <div className="card-body items-center p-6 text-center">
                      <div className="bg-primary/10 text-primary mb-3 inline-flex size-12 items-center justify-center rounded-xl transition-all duration-[var(--duration-moderate)] group-hover:bg-primary group-hover:text-base-100">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-base-content/80 text-sm font-medium leading-tight">
                        {industry.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guarantee - Highlighted Section */}
      <section className="bg-base-200 relative isolate py-16 lg:py-24">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-primary/30 overflow-hidden border-2 shadow-2xl">
              <div className="card-body p-10 lg:p-16">
                <div className="mb-8 text-center">
                  <div className="bg-primary mx-auto mb-6 inline-flex size-20 items-center justify-center rounded-2xl shadow-lg">
                    <Award className="text-base-100 size-10" />
                  </div>
                  <h2 className="text-primary mb-6 text-4xl font-bold lg:text-5xl">
                    Гарантія якості
                  </h2>
                  <p className="text-base-content/80 mx-auto max-w-3xl text-lg leading-relaxed">
                    Ми забезпечуємо високу якість виконання на всіх етапах виробництва.
                    Використовуємо лише сертифіковані матеріали та професійне обладнання
                    провідних світових виробників. Кожен проєкт супроводжується
                    контролем якості та технічною підтримкою наших фахівців.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { icon: Settings, text: 'Професійне обладнання' },
                    { icon: Shield, text: 'Сертифіковані матеріали' },
                    { icon: Target, text: 'Контроль на всіх етапах' },
                    { icon: Users, text: 'Технічна підтримка' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="card bg-base-100/80 group backdrop-blur-sm border-base-300 shadow-md transition-all duration-[var(--duration-moderate)] hover:shadow-lg"
                      >
                        <div className="card-body items-center p-6 text-center">
                          <div className="bg-primary/10 text-primary mb-3 inline-flex size-14 items-center justify-center rounded-xl transition-all duration-[var(--duration-moderate)] group-hover:bg-primary group-hover:text-base-100">
                            <Icon className="size-7" />
                          </div>
                          <span className="text-base-content/90 text-sm font-semibold leading-tight">
                            {item.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
