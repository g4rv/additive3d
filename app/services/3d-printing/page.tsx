import { FadeIn, StaggerChildren } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { Calculator, CheckCircle, Clock, Gauge, Package, Shield, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Друк | Additive3D',
  description:
    'Професійний 3D друк FDM та MJF технологіями. Точність 0.1мм, 50+ матеріалів, серійне виробництво.',
};

export default function ThreeDPrintingPage() {
  const technologies = [
    {
      name: 'FDM 3D Друк',
      description: 'Fused Deposition Modeling - екструзія матеріалу шар за шаром',
      icon: <Package className="h-12 w-12" />,
      href: '/services/3d-printing/fdm',
      accuracy: '±0.1мм',
      layer: '0.05-0.3мм',
      speed: '50-150мм/с',
      materials: 25,
      features: ['Економічність', 'Швидкість', 'Великий вибір матеріалів', 'Простота використання'],
      popular: true,
    },
    {
      name: 'MJF 3D Друк',
      description: 'Multi Jet Fusion - багатоструменеве джетування плавлених матеріалів',
      icon: <Zap className="h-12 w-12" />,
      href: '/services/3d-printing/mjf',
      accuracy: '±0.02мм',
      layer: '0.08мм',
      speed: 'Швидкий для серій',
      materials: 15,
      features: ['Висока точність', 'Однорідність', 'Ізотропні властивості', 'Серійне виробництво'],
      popular: false,
    },
  ];

  const applications = [
    {
      title: 'Прототипування',
      description: 'Швидке створення прототипів для перевірки дизайну та функціональності',
      icon: '🔧',
      benefits: ['Швидкість', 'Низька вартість', 'Ітерації', 'Візуалізація'],
    },
    {
      title: 'Функціональні деталі',
      description: 'Виготовлення робочих компонентів для промислового застосування',
      icon: '⚙️',
      benefits: ['Міцність', 'Точність', 'Матеріали', 'Надійність'],
    },
    {
      title: 'Серійне виробництво',
      description: 'Масове виробництво деталей від 100 до 10,000+ одиниць',
      icon: '🏭',
      benefits: ['Масштаб', 'Консистентність', 'Автоматизація', 'Оптимізація'],
    },
    {
      title: 'Кастомні вироби',
      description: 'Персоналізовані вироби та унікальні компоненти',
      icon: '🎨',
      benefits: ['Індивідуальність', 'Складні форми', 'Персоналізація', 'Унікальність'],
    },
  ];

  const advantages = [
    {
      icon: <Gauge className="h-8 w-8" />,
      title: 'Інженерна точність',
      description: 'Точність до 0.02мм та контроль геометрії на кожному етапі',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Швидкість виконання',
      description: 'Від 24 годин для стандартних замовлень та термінове виробництво',
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Широкий вибір',
      description: '50+ промислових матеріалів для будь-яких завдань',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Гарантія якості',
      description: 'ISO 9001 та контроль якості на кожному етапі виробництва',
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
                Професійний <span className="text-primary">3D друк</span>
              </h1>
              <p className="text-base-content/90 text-xl leading-relaxed md:text-2xl">
                Промисловий адитивний друк з точністю 0.02мм. FDM та MJF технології для прототипів,
                функціональних деталей та серійного виробництва.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href="/services/3d-printing/calculator"
                  variant="secondary"
                  className="btn-lg"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Розрахувати вартість
                </ButtonLink>
                <ButtonLink href="/contact" variant="outlined" className="btn-lg border-2">
                  Консультація експерта
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Технології <span className="text-primary">3D друку</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Сучасні методи адитивного виробництва для різних завдань та бюджетів
              </p>
            </header>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            {technologies.map((tech, index) => (
              <FadeIn key={index} direction="up" delay={0.2 * index}>
                <div
                  className={`bg-base-200 relative rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl ${
                    tech.popular ? 'ring-primary ring-2' : ''
                  }`}
                >
                  {tech.popular && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-primary text-primary-content rounded-full px-4 py-1 text-sm font-semibold">
                        Найпопулярніша
                      </span>
                    </div>
                  )}

                  <div className="text-primary mb-6">{tech.icon}</div>

                  <h3 className="text-base-content mb-3 text-2xl font-bold">{tech.name}</h3>

                  <p className="text-base-content/80 mb-6 leading-relaxed">{tech.description}</p>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <div className="bg-base-100 rounded-lg p-3 text-center">
                      <div className="text-primary text-lg font-bold">{tech.accuracy}</div>
                      <div className="text-base-content/70 text-sm">Точність</div>
                    </div>
                    <div className="bg-base-100 rounded-lg p-3 text-center">
                      <div className="text-primary text-lg font-bold">{tech.layer}</div>
                      <div className="text-base-content/70 text-sm">Шар</div>
                    </div>
                    <div className="bg-base-100 rounded-lg p-3 text-center">
                      <div className="text-primary text-lg font-bold">{tech.materials}</div>
                      <div className="text-base-content/70 text-sm">Матеріали</div>
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-2 gap-2">
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="text-success h-4 w-4 flex-shrink-0" />
                        <span className="text-base-content/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <ButtonLink
                    href={tech.href}
                    variant={tech.popular ? 'secondary' : 'outlined'}
                    className="w-full"
                  >
                    Детальніше про {tech.name.split(' ')[0]}
                  </ButtonLink>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-base-200 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Застосування <span className="text-primary">3D друку</span>
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
                className="bg-base-100 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{app.icon}</div>
                <h3 className="text-base-content mb-3 text-lg font-bold">{app.title}</h3>
                <p className="text-base-content/70 mb-4 leading-relaxed">{app.description}</p>
                <div className="space-y-2">
                  {app.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-success h-3 w-3 flex-shrink-0" />
                      <span className="text-base-content/80 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Процес <span className="text-primary">виробництва</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Прозорий та контрольований процес від замовлення до готового виробу
              </p>
            </header>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Аналіз моделі',
                description: 'Перевірка STL файлу та оптимізація для друку',
              },
              {
                step: '02',
                title: 'Підготовка',
                description: 'Налаштування параметрів та орієнтація моделі',
              },
              {
                step: '03',
                title: 'Друк',
                description: 'Виробництво з контролем якості на кожному етапі',
              },
              {
                step: '04',
                title: 'Постобробка',
                description: 'Видалення опор та фінішна обробка за потреби',
              },
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={0.15 * index}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-base-content mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-base-content/70">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-base-200 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Наші <span className="text-primary">переваги</span>
              </h2>
            </header>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <FadeIn key={index} direction="up" delay={0.15 * index}>
                <div className="bg-base-100 rounded-xl p-6 text-center transition-all hover:shadow-lg">
                  <div className="text-primary mb-4 flex justify-center">{advantage.icon}</div>
                  <h3 className="text-base-content mb-3 text-lg font-bold">{advantage.title}</h3>
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
                Готові розпочати <span className="text-primary">3D друк?</span>
              </h2>
              <p className="text-base-content/80 mb-8 text-lg">
                Завантажте вашу модель та отримайте миттєвий розрахунок вартості
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href="/services/3d-printing/calculator"
                  variant="secondary"
                  className="btn-lg"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Розрахувати онлайн
                </ButtonLink>
                <ButtonLink href="/materials" variant="outlined" className="btn-lg border-2">
                  <Package className="mr-2 h-5 w-5" />
                  Вибрати матеріал
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
