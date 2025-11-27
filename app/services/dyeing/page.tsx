import { FadeIn, StaggerChildren } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { CheckCircle, Droplets, Eye, Package, Palette, Settings, Shield, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фарбування 3D Друкованих Виробів | Additive3D',
  description:
    'Професійне фарбування 3D друкованих виробів. Поверхнева обробка, текстурування, захисні покриття.',
};

export default function DyeingPage() {
  const services = [
    {
      title: 'Порошкове фарбування',
      description: 'Високоякісне фарбування порошковими фарбами з високою адгезією',
      icon: <Droplets className="h-12 w-12" />,
      durability: '5+ років',
      colors: '2000+ кольорів RAL',
      materials: ['PLA', 'PETG', 'ABS', 'Nylon'],
      features: ['Висока міцність', 'Стійкість до УФ', 'Хімічна стійкість', 'Плавні переходи'],
    },
    {
      title: 'Аерозольне фарбування',
      description: 'Швидке та якісне покриття для невеликих партій та прототипів',
      icon: <Zap className="h-12 w-12" />,
      durability: '2-3 роки',
      colors: 'Стандартна палітра',
      materials: ['PLA', 'PETG', 'ABS'],
      features: ['Швидкість', 'Економічність', 'Різноманітність', 'Легкість нанесення'],
    },
    {
      title: 'Грунтовка та підготовка',
      description: 'Підготовка поверхні для оптимальної адгезії фарби',
      icon: <Shield className="h-12 w-12" />,
      importance: "Обов'язково",
      materials: ['Всі типи пластику'],
      features: ['Покращення адгезії', 'Заповнення пор', 'Захист матеріалу', 'Ізоляція'],
    },
    {
      title: 'Текстурування',
      description: 'Створення текстурних поверхонь для кращого вигляду та тактильних властивостей',
      icon: <Eye className="h-12 w-12" />,
      options: ['Матова', 'Глянцева', 'Шкіряна', "Дерев'яна"],
      materials: ['Всі типи пластику'],
      features: [
        'Візуальна привабливість',
        'Тактильні властивості',
        'Маскування дефектів',
        'Індивідуальність',
      ],
    },
  ];

  const workflow = [
    { step: '01', title: 'Підготовка', description: 'Шліфування, очищення та нанесення грунтовки' },
    { step: '02', title: 'Маскування', description: 'Захист зон, що не фарбуються' },
    { step: '03', title: 'Фарбування', description: 'Нанесення фарби у кілька шарів' },
    { step: '04', title: 'Фінішна обробка', description: 'Полірування та захисне покриття' },
  ];

  const applications = [
    {
      title: 'Прототипи та моделі',
      description: 'Професійне оформлення презентаційних моделей',
      icon: '🎨',
      benefits: ['Привабливий вигляд', 'Реалістичність', 'Брендування', 'Виставки'],
    },
    {
      title: 'Функціональні деталі',
      description: 'Захисні покриття для робочих компонентів',
      icon: '⚙️',
      benefits: [
        'Захист від середовища',
        'Візуальна ідентифікація',
        'Корозійна стійкість',
        'Зносостійкість',
      ],
    },
    {
      title: 'Споживчі товари',
      description: 'Кастомізація товарів під бренд або дизайн',
      icon: '📱',
      benefits: ['Індивідуальність', 'Брендування', 'Естетика', 'Розрізнення'],
    },
    {
      title: 'Архітектурні моделі',
      description: 'Реалістичне оформлення архітектурних макетів',
      icon: '🏛️',
      benefits: ['Реалістичність', 'Матеріалізація', 'Презентація', 'Візуалізація'],
    },
  ];

  const colorSystems = [
    {
      system: 'RAL Classic',
      colors: '216 кольорів',
      description: 'Стандартизована промислова палітра',
    },
    {
      system: 'Pantone',
      colors: '1000+ кольорів',
      description: 'Графічна та дизайнерська палітра',
    },
    { system: 'NCS', colors: '1950 кольорів', description: 'Природна система кольорів' },
    { system: 'Custom', colors: 'Безмежно', description: 'Кастомні кольори за зразком' },
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
                Професійне <span className="text-primary">фарбування</span>
              </h1>
              <p className="text-base-content/90 text-xl leading-relaxed md:text-2xl">
                Високоякісне фарбування 3D друкованих виробів. Поверхнева обробка, текстурування та
                захисні покриття для ідеального вигляду та довговічності.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="secondary" className="btn-lg">
                  <Palette className="mr-2 h-5 w-5" />
                  Консультація з фарбування
                </ButtonLink>
                <ButtonLink
                  href="/services/3d-printing"
                  variant="outlined"
                  className="btn-lg border-2"
                >
                  3D друк + обробка
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Наші <span className="text-primary">послуги фарбування</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Різноманітні методи фарбування для різних завдань та матеріалів
              </p>
            </header>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            childDelay={0.2}
            direction="up"
            className="grid gap-8 lg:grid-cols-2"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-base-200 rounded-xl p-8 transition-all hover:shadow-xl"
              >
                <div className="text-primary mb-6">{service.icon}</div>

                <h3 className="text-base-content mb-4 text-2xl font-bold">{service.title}</h3>

                <p className="text-base-content/80 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6 grid grid-cols-2 gap-4">
                  {service.durability && (
                    <div className="bg-base-100 rounded-lg p-3 text-center">
                      <div className="text-primary text-lg font-bold">{service.durability}</div>
                      <div className="text-base-content/70 text-sm">Тривалість</div>
                    </div>
                  )}
                  {service.colors && (
                    <div className="bg-base-100 rounded-lg p-3 text-center">
                      <div className="text-primary text-lg font-bold">{service.colors}</div>
                      <div className="text-base-content/70 text-sm">Кольори</div>
                    </div>
                  )}
                </div>

                {service.materials && (
                  <div className="mb-6">
                    <h4 className="text-base-content mb-3 font-semibold">Матеріали:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((material, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary rounded px-3 py-1 text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.features && (
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="text-success h-4 w-4 flex-shrink-0" />
                        <span className="text-base-content/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-base-200 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Процес <span className="text-primary">фарбування</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Професійний підхід до фарбування кожної деталі
              </p>
            </header>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-4">
            {workflow.map((step, index) => (
              <FadeIn key={index} direction="up" delay={0.15 * index}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-base-content mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Color Systems */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Системи <span className="text-primary">кольорів</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Працюємо з провідними системами кольорів для точного відтворення
              </p>
            </header>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {colorSystems.map((system, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-base-200 rounded-xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 text-4xl">🎨</div>
                  <h3 className="text-base-content mb-2 text-lg font-bold">{system.system}</h3>
                  <p className="text-primary mb-2 text-xl font-bold">{system.colors}</p>
                  <p className="text-base-content/70 text-sm">{system.description}</p>
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
                Застосування <span className="text-primary">фарбування</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Різноманітні завдання, що вирішуються за допомогою професійного фарбування
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
                <div className="space-y-1">
                  {app.benefits.slice(0, 3).map((benefit, i) => (
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

      {/* Advantages */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Переваги нашого <span className="text-primary">фарбування</span>
              </h2>
            </header>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Package className="h-8 w-8" />,
                title: 'Висока якість',
                description: 'Професійні матеріали та обладнання',
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: 'Точний колір',
                description: 'Відтворення кольору з точністю 95%+',
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Захист',
                description: 'УФ-захист та хімічна стійкість',
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: 'Досвід',
                description: '5+ років роботи з різними матеріалами',
              },
            ].map((advantage, index) => (
              <FadeIn key={index} direction="up" delay={0.15 * index}>
                <div className="bg-base-200 rounded-xl p-8 text-center transition-all hover:shadow-lg">
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
                Потрібне <span className="text-primary">професійне фарбування</span>?
              </h2>
              <p className="text-base-content/80 mb-8 text-lg">
                Консультуйтеся з нашими спеціалістами для підбору оптимального рішення
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="secondary" className="btn-lg">
                  Консультація спеціаліста
                </ButtonLink>
                <ButtonLink
                  href="/services/3d-printing"
                  variant="outlined"
                  className="btn-lg border-2"
                >
                  3D друк + обробка
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
