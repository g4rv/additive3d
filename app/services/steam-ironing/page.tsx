import { FadeIn, StaggerChildren } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { CheckCircle, Droplets, Settings, Thermometer, Zap } from 'lucide-react';

export default function SteamIroningPage() {
  const services = [
    {
      title: 'Видалення опор',
      description:
        'Випаровування розчинних опорних матеріалів (PVA, HIPS, BVOH) без пошкодження основної деталі',
      icon: <Droplets className="h-12 w-12" />,
      temperature: '60-80°C',
      materials: ['PVA', 'HIPS', 'BVOH'],
      features: ['Безконтактне', 'Безпечно', 'Ефективно', 'Автоматично'],
    },
    {
      title: 'Термічна обробка',
      description: 'Зміцнення деталей шляхом термічної обробки та усадки внутрішніх напружень',
      icon: <Thermometer className="h-12 w-12" />,
      temperature: '80-120°C',
      materials: ['Nylon', 'TPU', 'PETG', 'ABS'],
      features: ['Зміцнення', 'Зменшення напруг', 'Стабілізація', 'Покращення властивостей'],
    },
    {
      title: 'Випарування вологи',
      description: 'Просушування гігроскопічних матеріалів та видалення вологи після обробки',
      icon: <Zap className="h-12 w-12" />,
      temperature: '50-70°C',
      materials: ['Nylon', 'TPU', 'PLA'],
      features: [
        'Просушування',
        'Стабілізація',
        'Запобігання деформації',
        'Готовність до виробництва',
      ],
    },
    {
      title: 'Поверхнева обробка',
      description: 'Полірування та вирівнювання поверхонь для кращого вигляду та якості',
      icon: <Settings className="h-12 w-12" />,
      temperature: 'Кімнатна',
      materials: ['Всі типи пластику'],
      features: [
        'Гладкість',
        'Візуальна якість',
        'Маскування дефектів',
        'Підготовка до фінішної обробки',
      ],
    },
  ];

  const workflow = [
    { step: '01', title: 'Підготовка', description: 'Очищення та контроль температури' },
    { step: '02', title: 'Парова камера', description: 'Розміщення виробів у паровій камері' },
    { step: '03', title: 'Обробка парою', description: 'Контрольована обробка заданої тривалості' },
    {
      step: '04',
      title: 'Охолодження',
      description: 'Поступове охолодження та контроль результатів',
    },
  ];

  const benefits = [
    {
      title: 'Безпека матеріалу',
      description: 'Відсутність механічного контакту запобігає пошкодженню',
      icon: '🛡️',
    },
    {
      title: 'Рівномірність',
      description: 'Пара рівномірно прогріває всю поверхню деталі',
      icon: '⚡',
    },
    {
      title: 'Контроль',
      description: 'Точне регулювання температури та часу обробки',
      icon: '🎯',
    },
    {
      title: 'Ефективність',
      description: 'Швидке видалення опор та обробка складних форм',
      icon: '🚀',
    },
  ];

  const applications = [
    {
      title: 'Складні геометрії',
      description: 'Обробка деталей з важкодоступними порожнинами та внутрішніми порожнинами',
      icon: '🔧',
      examples: ['Лабіринти', 'Порожнисті структури', 'Внутрішні канали', 'Складні форми'],
    },
    {
      title: 'Промислові деталі',
      description: 'Підготовка виробничих деталей до фінальної обробки та збирання',
      icon: '🏭',
      examples: ['Інструменти', 'Кріплення', "З'єднувачі", 'Механізми'],
    },
    {
      title: 'Медичні вироби',
      description: 'Стерилізація та обробка медичних пристроїв та компонентів',
      icon: '🏥',
      examples: ['Протези', 'Корсети', 'Хірургічні інструменти', 'Моделі'],
    },
    {
      title: 'Архітектурні моделі',
      description: 'Фінішна обробка та стабілізація архітектурних макетів',
      icon: '🏛️',
      examples: ['Будівельні моделі', "Інтер'єр", 'Деталі', 'Макети'],
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
                Професійне <span className="text-primary">парове прасування</span>
              </h1>
              <p className="text-base-content/90 text-xl leading-relaxed md:text-2xl">
                Інноваційна технологія обробки 3D друкованих виробів. Видалення опор, зміцнення
                конструкцій та фінішна обробка без пошкодження деталей.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="secondary" className="btn-lg">
                  Консультація з обробки
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
                Наші <span className="text-primary">послуги</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Різноманітні методи парової обробки для різних завдань
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
                  <div className="bg-base-100 rounded-lg p-3 text-center">
                    <div className="text-primary text-lg font-bold">{service.temperature}</div>
                    <div className="text-base-content/70 text-sm">Температура</div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3 text-center">
                    <div className="text-primary text-lg font-bold">
                      {service.materials.length}+
                    </div>
                    <div className="text-base-content/70 text-sm">Матеріали</div>
                  </div>
                </div>

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

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4 shrink-0" />
                      <span className="text-base-content/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
                Процес <span className="text-primary">парової обробки</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Контрольований процес обробки кожної деталі
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

      {/* Benefits */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Переваги <span className="text-primary">парового прасування</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Чому парова обробка краща за традиційні методи
              </p>
            </header>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} direction="up" delay={0.15 * index}>
                <div className="bg-base-200 rounded-xl p-8 text-center transition-all hover:shadow-lg">
                  <div className="mb-6 text-4xl">{benefit.icon}</div>
                  <h3 className="text-base-content mb-4 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-base-content/80 leading-relaxed">{benefit.description}</p>
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
                Застосування <span className="text-primary">парової обробки</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Різноманітні галузі та завдання, де використовується парова обробка
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
                  {app.examples.slice(0, 3).map((example, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-success h-3 w-3 shrink-0" />
                      <span className="text-base-content/80 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-base-100 py-20">
        <div className="custom-container">
          <FadeIn direction="up">
            <div className="bg-base-200 mx-auto max-w-4xl rounded-2xl p-12">
              <h2 className="text-base-content mb-8 text-center text-3xl font-bold">
                Технічні <span className="text-primary">характеристики</span>
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="text-base-content mb-4 text-xl font-bold">Парова камера</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Об&apos;єм: 300x300x400мм</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Температура: 20-200°C</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Вологість: 95-100%</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base-content mb-4 text-xl font-bold">Контроль</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Автоматичне управління</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Точність ±1°C</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Моніторинг в реальному часі</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base-content mb-4 text-xl font-bold">Безпека</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Захист від перегріву</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Автоматичне відключення</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-success h-4 w-4" />
                      <span>Вентиляція</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient relative py-20">
        <BgPattern pattern="dots" size={30} color="rgb(255, 210, 49)" opacity={0.15} />

        <div className="custom-container">
          <FadeIn direction="up">
            <div className="bg-base-100/95 border-primary/20 mx-auto max-w-4xl rounded-2xl border-2 p-12 text-center backdrop-blur-sm">
              <h2 className="text-base-content mb-4 text-3xl font-bold">
                Потрібна <span className="text-primary">партова обробка</span> деталей?
              </h2>
              <p className="text-base-content/80 mb-8 text-lg">
                Консультуйтеся з нашими спеціалістами для підбору оптимальних параметрів
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="secondary" className="btn-lg">
                  Консультація інженера
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
