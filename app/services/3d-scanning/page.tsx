import { Metadata } from 'next';
import {
  Scan,
  Target,
  Zap,
  Cog,
  Building2,
  Users,
  Package,
  Settings,
  Rocket,
  CheckCircle,
  Clock,
  Shield,
  Eye,
} from 'lucide-react';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import CTA from '@/components/cta';

export const metadata: Metadata = {
  title: '3D-сканування | Additive3D',
  description:
    'Високоточне 3D-сканування об\'єктів за технологією фотограмметрії (Zeiss GOM Scan 1) та лазерного сканування (Zeiss T-SCAN Hawk 2). Точність до 0,02 мм для промислових застосувань.',
};

export default function ThreeDScanningPage() {
  const equipment = [
    {
      name: 'Zeiss GOM Scan 1',
      technology: 'Фотограмметрія',
      description:
        'Високоточне оцифрування складних деталей та поверхонь за технологією фотограмметрії з точністю до мікронів',
      icon: Scan,
      features: [
        'Точність до 0,02 мм',
        'Безконтактне сканування',
        'Складні геометрії',
        'Швидке оцифрування',
      ],
    },
    {
      name: 'Zeiss T-SCAN Hawk 2',
      technology: 'Лазерне сканування',
      description:
        'Лазерне сканування для надвисокої швидкості та високоточної цифровізації промислових об\'єктів',
      icon: Zap,
      features: [
        'Надшвидка обробка',
        'Великі об\'єкти',
        'Реверс-інжиніринг',
        'Контроль якості',
      ],
    },
  ];

  const applications = [
    {
      title: 'Промисловість',
      description: 'Контроль геометрії, порівняння з CAD-моделлю, зворотний інжиніринг деталей',
      icon: Cog,
    },
    {
      title: 'Дизайн',
      description: 'Створення цифрових моделей для 3D-друку або подальшої обробки',
      icon: Target,
    },
    {
      title: 'Архітектура',
      description: 'Точне відтворення елементів фасаду, пам\'яток і скульптур',
      icon: Building2,
    },
    {
      title: 'Медицина',
      description: 'Виготовлення індивідуальних імплантів чи ортопедичних рішень',
      icon: Package,
    },
    {
      title: 'Мистецтво',
      description: 'Цифрове дублювання об\'єктів і людей для візуалізацій',
      icon: Users,
    },
    {
      title: 'VR та кінематографія',
      description: 'Інтерактивне відображення об\'єктів у цифровому середовищі',
      icon: Rocket,
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Оцифрування об\'єкта',
      description:
        'Деталь сканується з високою точністю та роздільною здатністю, вище за допуски до даної деталі. Результатом є полігональне тіло, що відображає форму поверхні з точністю до мікронів.',
      icon: Scan,
    },
    {
      number: 2,
      title: 'Вирівнювання (alignment)',
      description:
        'Відсканована модель суміщується з еталонною CAD-моделлю за ключовими орієнтирами або геометричними базами.',
      icon: Target,
    },
    {
      number: 3,
      title: 'Порівняння геометрії',
      description:
        'Спеціалізоване програмне забезпечення Zeiss GOM Inspect аналізує відхилення між двома поверхнями. Результати відображаються у вигляді кольорової карти відхилень.',
      icon: Eye,
    },
    {
      number: 4,
      title: 'Формування звіту',
      description:
        'Після аналізу система автоматично генерує звіт із візуалізацією, числовими параметрами, допусками та коментарями, що спрощує прийняття рішень у виробничому процесі.',
      icon: CheckCircle,
    },
  ];

  const benefits = [
    {
      title: 'Висока точність',
      description: 'До 0,02 мм для найвимогливіших завдань',
      icon: Target,
    },
    {
      title: 'Швидкість',
      description: 'Безконтактне сканування за лічені хвилини',
      icon: Clock,
    },
    {
      title: 'Повторюваність',
      description: 'Стабільні результати з мінімальними відхиленнями',
      icon: Settings,
    },
    {
      title: 'Інтеграція з CAD',
      description: 'Прямий експорт у популярні САПР системи',
      icon: Package,
    },
    {
      title: 'Безконтактність',
      description: 'Без ризику пошкодження оригінального об\'єкта',
      icon: Shield,
    },
    {
      title: 'Складні форми',
      description: 'Оцифрування геометрії будь-якої складності',
      icon: Zap,
    },
  ];

  return (
    <>
      <HeroFancy
        title="3D-сканування"
        description="Високоточне оцифрування реальних об'єктів у точні цифрові 3D-моделі для промислових застосувань"
      />

      {/* Visual Showcase Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Приклади сканування</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Візуалізація процесу 3D-сканування та результатів ourої роботи
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Structured Light Scanner */}
            <div className="card bg-base-100 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <img
                  src="/Services/3d-scanning/engineer-using-structured-light-scanner.jpg"
                  alt="Інженер використовує структурований світловий сканер Zeiss"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-semibold">Структурований світловий сканер</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Професійне обладнання Zeiss GOM Scan 1 для високоточного сканування складних поверхонь
                </p>
              </div>
            </div>

            {/* 3D Mesh Wireframe */}
            <div className="card bg-base-100 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <img
                  src="/Services/3d-scanning/3d-mesh-wireframe-model.png"
                  alt="3D модел у вигляді каркасної сітки"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-semibold">Цифрова модель</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Каркасна полігональна модель, створена на основі хмари точок з високою точністю
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-200 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h2 className="text-primary mb-6 text-2xl font-semibold lg:text-3xl">
                  Що таке 3D-сканування?
                </h2>
                <div className="space-y-4 text-base-content/90 leading-relaxed text-base lg:text-lg">
                  <p>
                    3D сканування — це процес, що дозволяє перетворювати реальні об&apos;єкти у
                    точні цифрові 3D-моделі. За допомогою спеціального обладнання — 3D-сканерів —
                    з поверхні предмета зчитуються мільйони точок, які формують детальну хмару
                    точок. На основі цих даних створюється тривимірна сітка або поверхнева модель
                    (полігональна), яку можна використовувати для подальшого аналізу, модифікацій
                    (обмежено) чи виготовлення.
                  </p>
                  <p>
                    Процес сканування у нас відбувається за технологією фотограмметрії (Zeiss GOM
                    Scan 1), або лазерною (Zeiss T-SCAN Hawk 2) - відносно швидко, безконтактно та
                    з високою точністю — до 0,02 мм. 3D сканування ідеально підходить для
                    вимірювання складних форм, які важко або неможливо описати традиційними
                    інструментами.
                  </p>

                  {/* Key Capabilities */}
                  <div className="bg-base-100 mt-6 grid gap-4 rounded-lg p-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="text-primary mb-2 text-3xl font-bold">0,02 мм</div>
                      <p className="text-base-content/70 text-sm">Точність сканування</p>
                    </div>
                    <div className="text-center">
                      <div className="text-primary mb-2 text-3xl font-bold">2</div>
                      <p className="text-base-content/70 text-sm">Технології сканування</p>
                    </div>
                    <div className="text-center">
                      <div className="text-primary mb-2 text-3xl font-bold">100%</div>
                      <p className="text-base-content/70 text-sm">Безконтактний процес</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Наше обладнання</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Професійні 3D-сканери Zeiss для високоточного оцифрування
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-100 border-base-300 shadow-sm transition-all duration-(--duration-moderate) hover:shadow-lg"
                >
                  <div className="card-body p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`bg-base-200 text-primary rounded-lg p-3`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-primary text-xl font-semibold">{item.name}</h3>
                        <p className="text-base-content/60 text-sm">{item.technology}</p>
                      </div>
                    </div>

                    <p className="text-base-content/90 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-primary size-4 shrink-0" />
                          <span className="text-base-content/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Процес роботи</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Від оцифрування до готового звіту за чотири кроки
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {processSteps.map((step) => {
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
                        <p className="text-base-content/90 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Examples Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Приклади застосувань</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Реальні кейси використання 3D-сканування у промисловості
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {/* Metal Cast Part Scanning */}
            <div className="card bg-base-200 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <img
                  src="/Services/3d-scanning/3d-laser-scanning-of-cast-metal-part.jpg"
                  alt="3D лазерне сканування литої металевої деталі"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-semibold">Контроль литих деталей</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Точне сканування металевих литих виробів для контролю якості та виявлення дефектів
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-outline badge-sm">Промисловість</span>
                  <span className="badge badge-outline badge-sm">Якість</span>
                </div>
              </div>
            </div>

            {/* Surface Detail Scanning */}
            <div className="card bg-base-200 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <img
                  src="/Services/3d-scanning/3d-surface-scan-model-detail.png"
                  alt="Детальне сканування поверхні моделі"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-semibold">Деталізація поверхні</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Ультраточне сканування мікроструктури поверхні для інженерного аналізу
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-outline badge-sm">Інженерія</span>
                  <span className="badge badge-outline badge-sm">R&D</span>
                </div>
              </div>
            </div>

            {/* Portable Scanner */}
            <div className="card bg-base-200 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <img
                  src="/Services/3d-scanning/portable-3d-scanner-vehicle-inspection.jpg"
                  alt="Переносний 3D сканер для інспекції транспортного засобу"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-semibold">Мобільне сканування</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Переносне сканування великих об&apos;єктів прямо на місці експлуатації
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-outline badge-sm">Автомобілі</span>
                  <span className="badge badge-outline badge-sm">Поле</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Галузі застосування</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              3D-сканування для різних індустрій та застосувань
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-100 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <div className="card-body p-6">
                    <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-primary mb-2 text-lg font-semibold">{app.title}</h3>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">
              Переваги 3D-сканування
            </h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              Чому професіонали обирають наші послуги сканування
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-200 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <div className="card-body p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Icon className="text-primary size-5 flex-shrink-0" />
                      <h3 className="text-primary font-semibold">{benefit.title}</h3>
                    </div>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Note Section */}
      <section className="bg-base-200 py-8 lg:py-12">
        <div className="custom-container">
          <div className="mx-auto max-w-4xl">
            <div className="card bg-base-100 border-primary/20 border shadow-sm">
              <div className="card-body p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Settings className="text-primary size-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary mb-3 text-lg font-semibold">
                      Технічні обмеження
                    </h3>
                    <p className="text-base-content/90 leading-relaxed">
                      Принцип роботи сканера базується на такому фізичному явищі, як бінокулярний
                      паралакс (стереокамера). Тому сканування глибоких «кишенів» або отворів,
                      куди не можуть «поглянути» дві камери одночасно — неможливе, а внутрішні
                      порожнини взагалі не скануються. Наші фахівці проконсультують вас щодо
                      можливості сканування вашого об&apos;єкта.
                    </p>
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
