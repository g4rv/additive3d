import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import { SlugPageProps } from '@/lib/types';
import { cn } from '@/utils/cn';
import isTechnologySlug from '@/utils/isTechnologySlug';
import {
  Award,
  BrushCleaning,
  CheckCircle,
  Clock,
  Cpu,
  FileText,
  Layers,
  Package,
  Settings,
  Target,
  Wrench,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';

// Metadata for each technology
const TECHNOLOGY_METADATA = {
  mjf: {
    title: 'MJF 3D-друк',
    description:
      'HP Multi Jet Fusion 5200: високошвидкісний 3D-друк для серійного виробництва. Точність ±0.2 мм, робоча камера 380×284×380 мм.',
    path: '/services/3d-printing/mjf',
  },
  fdm: {
    title: 'FDM 3D-друк',
    description:
      'Fortus 400mc і 250: надійна FDM технологія для міцних термопластичних деталей. Інженерні матеріали: ABS, PC, Ultem.',
    path: '/services/3d-printing/fdm',
  },
  lfam: {
    title: 'LFAM 3D-друк',
    description:
      'HERON 300 HV: великоформатний 3D-друк для виробництва великогабаритних деталей. Об\'єм побудови: 3000×2000×1000 мм.',
    path: '/services/3d-printing/lfam',
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
    return createMetadata({
      title: 'Технологія не знайдена',
      description: 'Запитувану технологію 3D-друку не знайдено.',
      path: `/services/3d-printing/${slug}`,
      noIndex: true,
    });
  }

  const metadata = TECHNOLOGY_METADATA[slug as keyof typeof TECHNOLOGY_METADATA];
  return createMetadata(metadata);
}

export default async function Page({ params }: SlugPageProps) {
  const { slug } = await params;

  if (!isTechnologySlug(slug)) return notFound();

  const technologyData = {
    mjf: {
      title: 'MJF (Multi Jet Fusion)',
      description:
        'Високотехнологічний метод 3D-друку від HP для серійного виробництва з надзвичайною деталізацією та однорідними механічними властивостями.',
      fullName: 'HP Multi Jet Fusion 5200',
      metadata: {
        title: 'MJF 3D-друк | Additive3D',
        description:
          'HP Multi Jet Fusion 5200: високошвидкісний 3D-друк для серійного виробництва. Точність ±0.2 мм, робоча камера 380×284×380 мм.',
      },
      hero: {
        title: 'MJF 3D-друк',
        description: 'Серійне виробництво деталей з високою точністю та однорідними властивостями',
      },
      features: [
        {
          title: 'Висока продуктивність',
          description: 'Швидкість друку до 5058 см³/год для ефективного серійного виробництва',
          icon: Zap,
        },
        {
          title: 'Велика робоча камера',
          description: 'Розміри камери 380 × 284 × 380 мм для виготовлення великих партій',
          icon: Package,
        },
        {
          title: 'Промислова точність',
          description:
            'Точність виготовлення залежить від розміру. Деталі близькі до квалітету ІТ 14',
          icon: Target,
        },
        {
          title: 'Без підтримок',
          description: 'Відсутність потреби у підтримкових структурах для складних геометрій',
          icon: Settings,
        },
      ],
      specs: [
        { label: 'Робоча камера', value: '380 × 284 × 380 мм' },
        { label: 'Товщина шару', value: '80 мкм' },
        { label: 'Точність', value: 'Деталі близькі до квалітету ІТ 14' },
        { label: 'Швидкість друку', value: 'До 5058 см³/год' },
        { label: 'Матеріали', value: 'PA12 (Nylon 12)' },
        { label: 'Пост-обробка', value: 'Автоматизовані модулі' },
      ],
      process: [
        {
          step: 1,
          title: 'Нанесення порошку',
          description:
            'Нанесення тонкого рівномірного шару порошку термопластика на робочу платформу',
          icon: Layers,
        },
        {
          step: 2,
          title: 'Друкування агентів',
          description:
            'Струменевий друк двох типів агентів в перетин деталей та по їх периметру на кожен шар порошку',
          icon: Zap,
        },
        {
          step: 3,
          title: 'Спікання (плавлення)',
          description:
            'Інфрачервоні лампи проходить над шаром. Чорні ділянки (де нанесені агенти) поглинають більше енергії і сплавляються, утворюючи твердий шар. Там, де агент не був нанесений, порошок залишається неплавленим',
          icon: Settings,
        },
        {
          step: 4,
          title: 'Охолодження та вилучення',
          description: 'Контрольоване охолодження з автоматизованим вилученням готових деталей',
          icon: Clock,
        },
        {
          step: 5,
          title: 'Очищення',
          description: 'Очищення деталей від залишків порошку в дробеструменевій камері',
          icon: BrushCleaning,
        },
      ],
      applications: [
        'Серійне виробництво',
        'Функціональні деталі',
        'Прототипи з високою точністю',
        'Автомобільна промисловість',
        'Корпуси електроніки',
        'Медичні пристрої',
      ],
      images: [
        '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-with-build-unit.png',
        '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-process.jpg',
        '/Technology/MJF/mjf-printed-models.jpg',
        '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-collection.jpg',
      ],
    },
    fdm: {
      title: 'FDM (Fused Deposition Modeling)',
      description:
        'Надійна технологія адитивного виробництва для створення функціональних прототипів та складних технічних деталей з інженерних термопластиків.',
      fullName: 'Stratasys Fortus 400mc/250mc',
      metadata: {
        title: 'FDM 3D-друк | Additive3D',
        description:
          'Stratasys FDM 3D-друк: функціональні прототипи та технічні деталі. Широкий вибір інженерних матеріалів, висока точність.',
      },
      hero: {
        title: 'FDM 3D-друк',
        description: 'Функціональні прототипи та складні технічні деталі з інженерних матеріалів',
      },
      features: [
        {
          title: 'Висока точність',
          description: 'Точність виготовлення ±0.1 мм для відповідності інженерним вимогам',
          icon: Target,
        },
        {
          title: 'Широкий вибір матеріалів',
          description: 'Підтримка різних інженерних термопластиків від ABS до Ultem™',
          icon: Package,
        },
        {
          title: 'Розчинні підтримки',
          description: 'Складні геометрії з підтримками, що розчиняються для ідеальної поверхні',
          icon: Settings,
        },
        {
          title: 'Стабільна якість',
          description: 'Відтворювані властивості для надійності та повторюваності',
          icon: Award,
        },
      ],
      specs: [
        { label: 'Робоча камера', value: 'до 406 × 355 × 406 мм' },
        { label: 'Товщина шару', value: '0.127–0.330 мм' },
        { label: 'Точність', value: '±0.09 мм або ±0.0015 мм/мм' },
        { label: 'Матеріали', value: 'ABS, PC, ASA, Ultem™ 9085, PP, Nylon 12' },
        { label: 'Система підтримок', value: 'Розчинні підтримки SR-30 / SR-100' },
      ],
      process: [
        {
          step: 1,
          title: 'Підготовка 3D друку',
          description:
            'Імпорт та аналіз 3D моделі з автоматичною перевіркою геометрії. Автоматична генерація оптимальних траєкторій екструдера.',
          icon: FileText,
        },
        {
          step: 2,
          title: 'FDM процес',
          description:
            'Витиснення розплавленого матеріалу через сопло та пошарове нанесення за заданими траєкторіями.',
          icon: Layers,
        },
        {
          step: 3,
          title: 'Пост-обробка',
          description: 'Вилучення підтримок та фінішна обробка поверхні',
          icon: Wrench,
        },
      ],
      applications: [
        'Машинобудування',
        'Авіаційна та автомобільна галузь',
        'Кінцеві деталі',
        'Функціональні прототипи',
        'Пристосування',
        'Технологічне та модельне оснащення',
      ],
      images: [
        '/Technology/FDM/Fortus 400mc/fortus-400mc.jpg',
        '/Technology/FDM/Fortus 250/fortus-250-printing.jpg',
        '/Technology/FDM/Fortus 400mc/fortus-400mc-cartridge.jpg',
        '/Technology/FDM/Fortus 250/fortus-250.png',
      ],
    },
    lfam: {
      title: 'LFAM (Large Format Additive Manufacturing)',
      description:
        'Промислова платформа великоформатного адитивного виробництва для виготовлення великих та складних полімерних виробів з армованих термопластиків.',
      fullName: 'Caracol HERON 300 HV – High Versatility',
      metadata: {
        title: 'LFAM 3D-друк | Additive3D',
        description:
          'Caracol HERON 300 HV: великогабаритний 3D-друк. Робоча зона 3000×1500×1000 мм, продуктивність до 8 кг/год.',
      },
      hero: {
        title: 'LFAM 3D-друк',
        description: 'Великоформатне адитивне виробництво для промислових застосувань',
      },
      features: [
        {
          title: 'Велика робоча зона',
          description: 'Розміри робочої зони 3000 × 1500 × 1000 мм для великих деталей',
          icon: Package,
        },
        {
          title: 'Висока продуктивність',
          description: 'Продуктивність до 8 кг/год для швидкого виробництва',
          icon: Zap,
        },
        {
          title: 'Роботизований маніпулятор',
          description: 'KUKA KR120 з високою точністю траєкторії',
          icon: Settings,
        },
        {
          title: 'EIDOS Builder',
          description: 'Просунуте програмне забезпечення для керування процесом',
          icon: Cpu,
        },
      ],
      specs: [
        { label: 'Робоча зона', value: '3000 × 1500 × 1000 мм' },
        { label: 'Продуктивність', value: 'до 8 кг/год' },
        { label: 'Діаметр сопла', value: '2–8 мм' },
        { label: 'Температура екструдера', value: 'до 450°C' },
        { label: 'Матеріали', value: 'PP + GF, ABS + GF/CF, ASA + GF, PETG + GF, PC + CF' },
        { label: 'Програмне забезпечення', value: 'EIDOS Builder' },
      ],
      process: [
        {
          step: 1,
          title: 'Підготовка матеріалу',
          description: 'Автоматичне сушіння грануляту з контролем вологості',
          icon: Package,
        },
        {
          step: 2,
          title: 'Планування траєкторій',
          description:
            'EIDOS Builder генерує оптимальні траєкторії руху робота та роботу екструдера',
          icon: Cpu,
        },
        {
          step: 3,
          title: '3D-друк',
          description: 'Роботизований екструдер наносить материал пошарово',
          icon: Layers,
        },
        {
          step: 4,
          title: 'Моніторинг якості',
          description: 'Вбудовані системи контролю та моніторингу забезпечують якість виробу',
          icon: CheckCircle,
        },
      ],
      applications: [
        'Виробництво великогабаритних корпусів',
        'Оснащення та пристосування',
        'Технологічна оснастка',
        'Архітектурні форми',
        'Лодочні корпуси',
        'Промислові конструкції',
      ],
      images: [
        '/Technology/LFAM/HERON 300 HV/heron-300-hv-no-bg.png',
        '/Technology/LFAM/HERON 300 HV/heron-300-hv-printing.jpg',
        '/Technology/LFAM/HERON 300 HV/heron-300-hv-extruder.jpg',
        '/Technology/LFAM/HERON 300 HV/heron-300-hv-printing-3.jpg',
      ],
    },
  };

  const tech = technologyData[slug as keyof typeof technologyData];
  if (!tech) return notFound();

  return (
    <>
      <HeroFancy title={tech.hero.title} description={tech.hero.description} />

      {/* Visual Showcase Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="card bg-base-200 border-base-300 overflow-hidden shadow-sm lg:col-span-2">
              <figure className="aspect-video">
                <Image
                  src={tech.images[0]}
                  alt={`${tech.title} - основне обладнання`}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-200 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src={tech.images[1]}
                  alt={`${tech.title} - процес`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-200 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src={tech.images[2]}
                  alt={`${tech.title} - результати`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-100 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h2 className="text-primary mb-6 text-2xl font-semibold lg:text-3xl">
                  {tech.title}
                </h2>
                <h3 className="text-base-content mb-4 text-xl font-medium">{tech.fullName}</h3>
                <div className="text-base-content/90 space-y-4 text-base leading-relaxed lg:text-lg">
                  <p>{tech.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Переваги технології</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Ключові переваги, що роблять {tech.title} ідеальним вибором
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-2">
            {tech.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-200 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <div className="card-body p-4 sm:p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="bg-primary/10 text-primary rounded-lg p-2 sm:p-3 flex-shrink-0">
                        <Icon className="size-5 sm:size-6" />
                      </div>
                      <h3 className="text-primary text-base sm:text-lg font-semibold leading-snug">{feature.title}</h3>
                    </div>
                    <p className="text-base-content/80 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-100 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h2 className="text-primary mb-8 text-2xl font-semibold lg:text-3xl">
                  Технічні характеристики
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {tech.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="border-base-200 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 border-b pb-3 last:border-b-0"
                    >
                      <span className="text-base-content/70 font-medium text-sm sm:text-base">{spec.label}</span>
                      <span className="text-base-content font-medium text-sm sm:text-base sm:text-right break-words">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Процес роботи</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Як працює технологія {tech.title}
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-4 sm:space-y-6">
            {tech.process.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="card bg-base-200 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <div className="card-body p-4 sm:p-6 lg:p-8">
                    <div className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0 my-auto">
                        <div className="bg-primary/10 flex size-12 items-center justify-center rounded-lg">
                          <span className="text-primary text-xl font-bold">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 flex items-center gap-3">
                          <Icon className="text-primary size-5 flex-shrink-0" />
                          <h3 className="text-primary text-base sm:text-lg font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-base-content/90 text-sm sm:text-base leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-100 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h2 className="text-primary mb-6 text-2xl font-semibold lg:text-3xl">
                  Галузі застосування
                </h2>
                <p className="text-base-content/90 mb-6 text-lg leading-relaxed">
                  Технологія {tech.title} ідеально підходить для:
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {tech.applications.map((application, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-primary/20 text-primary size-2 rounded-full" />
                      <span className="text-base-content/80">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images */}
      {tech.images.length > 3 && (
        <section className="bg-base-100 relative isolate py-8 lg:py-16">
          <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

          <div className="custom-container relative z-10">
            <div className="mx-auto grid max-w-6xl gap-8 lg:max-w-[600px]">
              {tech.images.slice(3).map((image, index) => (
                <div
                  key={index}
                  className="card bg-base-200 border-base-300 overflow-hidden shadow-sm"
                >
                  <figure className="aspect-video">
                    <Image
                      src={image}
                      alt={`${tech.title} - додаткове зображення ${index + 1}`}
                      width={600}
                      height={400}
                      className={cn("h-full w-full object-cover", slug === 'fdm' && 'object-contain')}
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Value Proposition */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-100 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h3 className="text-primary mb-4 text-2xl font-semibold">
                  Чому обрати {tech.title}
                </h3>
                <div className="text-base-content/90 space-y-4 text-lg leading-relaxed">
                  <p>
                    {slug === 'lfam'
                      ? 'LFAM (Large Format Additive Manufacturing) — це інноваційне промислове рішення для виробництва великогабаритних виробів, що поєднує високу точність, швидкість та надійність. Наша команда пропонує виготовлення масштабних деталей на виробничій системі Caracol HERON 300 HV.'
                      : `${tech.title} — це ідеальне рішення для професійного виробництва, що поєднує високу точність, швидкість та надійність. Наша команда має багаторічний досвід роботи з цією технологією та готова реалізувати найскладніші проекти.`}
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-primary size-5 flex-shrink-0" />
                      <span className="text-base-content/80">Професійне обслуговування</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-primary size-5 flex-shrink-0" />
                      <span className="text-base-content/80">Технічна підтримка</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-primary size-5 flex-shrink-0" />
                      <span className="text-base-content/80">Гарантія якості</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-primary size-5 flex-shrink-0" />
                      <span className="text-base-content/80">Оперативні терміни</span>
                    </div>
                  </div>
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
