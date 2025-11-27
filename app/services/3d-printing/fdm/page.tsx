import { FadeIn, StaggerChildren } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import {
  CheckCircle,
  Clock,
  DollarSign,
  Gauge,
  Package,
  Settings,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FDM 3D Друк | Additive3D',
  description:
    'FDM 3D друк - екструзійна технологія з точністю 0.1мм. Економічне рішення для прототипів та функціональних деталей.',
};

export default function FDMPrintingPage() {
  const specifications = [
    {
      title: 'Точність',
      value: '±0.1мм',
      icon: <Gauge className="h-6 w-6" />,
    },
    {
      title: 'Висота шару',
      value: '0.05-0.3мм',
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: 'Швидкість',
      value: '50-150мм/с',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: 'Розмір будівництва',
      value: '300x300x400мм',
      icon: <Package className="h-6 w-6" />,
    },
  ];

  const materials = [
    {
      name: 'ABS',
      color: 'text-orange-500',
      description: 'Міцний, термостійкий, ідеальний для функціональних прототипів',
      properties: ['Висока міцність', 'Термостійкість 105°C', 'Хімічна стійкість'],
    },
    {
      name: 'PETG',
      color: 'text-blue-500',
      description: 'Удароміцний, біосумісний, підходить для харчових виробів',
      properties: ['Удароміцність', 'Біосумісність', 'Прозорість'],
    },
    {
      name: 'TPU',
      color: 'text-purple-500',
      description: 'Гнучкий, еластичний, для амортизаторів та захисту',
      properties: ['Гнучкість', 'Еластичність', 'Стійкість до стирання'],
    },
    {
      name: 'PLA',
      color: 'text-green-500',
      description: 'Екологічний, легкий у друку, для візуальних моделей',
      properties: ['Екологічність', 'Легкість друку', 'Яскраві кольори'],
    },
  ];

  const applications = [
    {
      title: 'Прототипування',
      description: 'Швидке створення концептуальних та функціональних прототипів',
      icon: '🔧',
      benefits: ['Швидкість', 'Низька вартість', 'Ітерації дизайну', 'Перевірка збірки'],
    },
    {
      title: 'Функціональні деталі',
      description: 'Робочі компоненти для механізмів та пристроїв',
      icon: '⚙️',
      benefits: ['Механічна міцність', 'Термостійкість', 'Вибір матеріалів', 'Точність'],
    },
    {
      title: 'Корпуси та чохли',
      description: 'Захисні корпуси для електроніки та інших пристроїв',
      icon: '📱',
      benefits: ['Індивідуальний дизайн', 'Міцність', 'Ергономіка', 'Вентиляція'],
    },
    {
      title: 'Освітні проєкти',
      description: 'Навчальні моделі та освітні матеріали',
      icon: '🎓',
      benefits: ['Візуалізація', 'Інтерактивність', 'Доступність', 'Безпека'],
    },
  ];

  const advantages = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Економічність',
      description: 'Найнижча вартість друку серед усіх технологій',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Швидкість',
      description: 'Швидке виробництво від 24 годин для замовлень',
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Вибір матеріалів',
      description: 'Більше 25 матеріалів для будь-яких завдань',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Надійність',
      description: 'Перевірена технологія з прогнозованими результатами',
    },
  ];

  return (
    <div className="min-h-no-header-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient relative overflow-hidden py-20">
        <BgPattern pattern="dots" size={40} color="rgb(255, 210, 49)" opacity={0.1} />

        <div className="custom-container">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-base-content mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                FDM <span className="text-primary">3D друк</span>
              </h1>
              <p className="text-base-content/90 text-xl leading-relaxed md:text-2xl">
                Fused Deposition Modeling - найпопулярніша технологія 3D друку. Економічне рішення з
                точністю 0.1мм для прототипів та функціональних деталей.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href="/services/3d-printing/calculator"
                  variant="secondary"
                  className="btn-lg"
                >
                  Розрахувати вартість
                </ButtonLink>
                <ButtonLink href="/materials/fdm" variant="outlined" className="btn-lg border-2">
                  Вибрати матеріал
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Технологія <span className="text-primary">FDM</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Пошарове нанесення розплавленого пластику через екструдер для створення тривимірних
                об&apos;єктів
              </p>
            </header>
          </FadeIn>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <h3 className="text-base-content mb-6 text-2xl font-bold">Як працює FDM друк</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-base-content mb-1 font-semibold">Підготовка моделі</h4>
                      <p className="text-base-content/70">
                        3D модель розрізається на шари програмним забезпеченням
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-base-content mb-1 font-semibold">Нагрівання матеріалу</h4>
                      <p className="text-base-content/70">
                        Пластик нагрівається до рідкого стану в екструдері
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-base-content mb-1 font-semibold">Екструзія шарів</h4>
                      <p className="text-base-content/70">
                        Розплавлений матеріал наноситься шар за шаром
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary h-8 w-8 shrink-0 rounded-full">
                      4
                    </div>
                    <div>
                      <h4 className="text-base-content mb-1 font-semibold">Охолодження</h4>
                      <p className="text-base-content/70">
                        Кожен шар застигає перед нанесенням наступного
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-base-200 rounded-xl p-6 text-center">
                    <div className="text-primary mb-3 flex justify-center">{spec.icon}</div>
                    <div className="text-primary mb-2 text-xl font-bold">{spec.value}</div>
                    <div className="text-base-content/70 text-sm">{spec.title}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-base-200 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                FDM <span className="text-primary">матеріали</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Широкий вибір інженерних та функціональних пластиків
              </p>
            </header>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            childDelay={0.2}
            direction="up"
            className="grid gap-8 lg:grid-cols-2"
          >
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-xl p-8 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className={`text-4xl font-bold ${material.color}`}>{material.name}</div>
                  <div className="flex-1">
                    <h3 className="text-base-content mb-3 text-xl font-bold">{material.name}</h3>
                    <p className="text-base-content/80 mb-4 leading-relaxed">
                      {material.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {material.properties.map((prop, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                        >
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Застосування <span className="text-primary">FDM технології</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Універсальні рішення для різних галузей та завдань
              </p>
            </header>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            childDelay={0.2}
            direction="up"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-base-200 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{app.icon}</div>
                <h3 className="text-base-content mb-3 text-lg font-bold">{app.title}</h3>
                <p className="text-base-content/70 mb-4 leading-relaxed">{app.description}</p>
                <div className="space-y-1">
                  {app.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-success h-3 w-3 shrink-0" />
                      <span className="text-base-content/80 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-base-200 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Переваги <span className="text-primary">FDM друку</span>
              </h2>
            </header>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <FadeIn key={index} direction="up" delay={0.15 * index}>
                <div className="bg-base-100 rounded-xl p-8 text-center transition-all hover:shadow-lg">
                  <div className="text-primary mb-6 flex justify-center">{advantage.icon}</div>
                  <h3 className="text-base-content mb-4 text-xl font-bold">{advantage.title}</h3>
                  <p className="text-base-content/80 leading-relaxed">{advantage.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient relative py-20">
        <BgPattern pattern="dots" size={30} color="rgb(255, 210, 49)" opacity={0.15} />

        <div className="custom-container">
          <FadeIn direction="up">
            <div className="bg-base-100/95 border-primary/20 mx-auto max-w-4xl rounded-2xl border-2 p-12 text-center backdrop-blur-sm">
              <h2 className="text-base-content mb-4 text-3xl font-bold">
                Готові використати <span className="text-primary">FDM друк</span>?
              </h2>
              <p className="text-base-content/80 mb-8 text-lg">
                Отримайте точний розрахунок вартості та термінів виконання вашого проєкту
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href="/services/3d-printing/calculator"
                  variant="secondary"
                  className="btn-lg"
                >
                  Розрахувати онлайн
                </ButtonLink>
                <ButtonLink href="/contact" variant="outlined" className="btn-lg border-2">
                  Консультація експерта
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
