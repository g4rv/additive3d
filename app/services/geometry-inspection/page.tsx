import { Metadata } from 'next';
import {
  Scan,
  Target,
  Eye,
  FileText,
  Settings,
  CheckCircle,
  BarChart3,
  Layers,
} from 'lucide-react';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import CTA from '@/components/cta';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Інспекція геометрії | Additive3D',
  description:
    'Інспекція відсканованих деталей: контроль точності у цифровому виробництві. Zeiss GOM Inspect для порівняння з CAD-моделлю та виявлення відхилень.',
};

export default function GeometryInspectionPage() {
  const processSteps = [
    {
      number: 1,
      title: 'Оцифрування виробу',
      description:
        'Деталь сканується з високою точністю та роздільною здатністю, вищою за допуски до даної деталі. Результатом є полігональне тіло (mesh), що відображає форму поверхні з точністю до мікронів',
      icon: Scan,
    },
    {
      number: 2,
      title: 'Вирівнювання (alignment)',
      description:
        'Відсканована модель суміщується з еталонною CAD-моделлю за ключовими орієнтирами або геометричними базами',
      icon: Target,
    },
    {
      number: 3,
      title: 'Порівняння геометрії',
      description:
        'Спеціалізоване програмне забезпечення Zeiss GOM Inspect аналізує відхилення між двома поверхнями. Результати відображаються у вигляді кольорової карти відхилень',
      icon: Eye,
    },
    {
      number: 4,
      title: 'Формування звіту',
      description:
        'Після аналізу система автоматично генерує звіт із візуалізацією, числовими параметрами, допусками та коментарями, що спрощує прийняття рішень у виробничому процесі',
      icon: FileText,
    },
  ];

  const benefits = [
    {
      title: 'Контроль якості',
      description: 'Як одиничних прототипів, так і серійних виробів',
      icon: CheckCircle,
    },
    {
      title: 'Виявлення неточностей',
      description: 'Викликаних зношенням інструменту, похибками складання або технологічними відхиленнями',
      icon: Settings,
    },
    {
      title: 'Параметризація аналізу',
      description: 'Створення автоматизованих шаблонів контролю для різних партій деталей',
      icon: Layers,
    },
    {
      title: 'Стабільна якість',
      description: 'Прискорення повторної перевірки й забезпечення стабільної якості',
      icon: BarChart3,
    },
  ];

  return (
    <>
      <HeroFancy
        title="Інспекція геометрії"
        description="Контроль точності у цифровому виробництві"
      />

      {/* Visual Showcase Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="card bg-base-100 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <Image
                  src="/Services/geometry-inspection/3d-geometry-inspection-color-map.png"
                  alt="3D інспекція геометрії з кольоровою картою відхилень"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-100 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <Image
                  src="/Services/geometry-inspection/cross-sectional-geometry-inspection.png"
                  alt="Інспекція геометрії у поперечному розрізі"
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
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-200 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h2 className="text-primary mb-6 text-2xl font-semibold lg:text-3xl">
                  Інспекція - контроль точності у цифровому виробництві
                </h2>
                <div className="space-y-4 text-base-content/90 leading-relaxed text-base lg:text-lg">
                  <p>
                    Інспекція відсканованих деталей — це процес порівняння отриманої 3D
                    моделі або хмари точок з еталонною CAD-моделлю чи технічними
                    кресленнями. Її головна мета — перевірка геометричної відповідності
                    виробу проєктним параметрам, виявлення відхилень і контроль якості
                    виробництва.
                  </p>
                  <p>
                    У сучасному інженерному середовищі цей етап є невід&apos;ємною частиною циклу
                    3D сканування та реверс-інжинірингу, оскільки саме інспекція гарантує, що
                    відтворений або виготовлений об&apos;єкт відповідає заданим стандартам.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">
              Процес інспекції
            </h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Процес інспекції зазвичай складається з кількох кроків
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="card bg-base-100 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <div className="card-body p-6 lg:p-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-primary/10 flex size-12 items-center justify-center rounded-lg">
                          <span className="text-primary text-xl font-bold">
                            {step.number}
                          </span>
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
      </section>

      {/* Benefits Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">
              Переваги інспекції
            </h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Інспекція дозволяє контролювати якість та виявляти відхилення
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-200 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <div className="card-body p-6">
                    <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-primary mb-2 text-lg font-semibold">
                      {benefit.title}
                    </h3>
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

      {/* Software Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="card bg-primary/5 border-primary/20 border shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Eye className="text-primary size-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary mb-4 text-2xl font-bold">
                      Zeiss GOM Inspect
                    </h3>
                    <p className="text-base-content/90 leading-relaxed text-lg">
                      Спеціалізоване програмне забезпечення Zeiss GOM Inspect аналізує
                      відхилення між двома поверхнями. Результати відображаються у вигляді
                      кольорової карти відхилень, що дозволяє візуально оцінити точність
                      виготовлення.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Value Proposition */}
      <section className="bg-base-100 py-8 lg:py-12">
        <div className="custom-container">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-200 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h3 className="text-primary mb-4 text-2xl font-semibold">
                  Ключова ланка цифрового виробництва
                </h3>
                <p className="text-base-content/90 leading-relaxed text-lg">
                  Отже, інспекція відсканованих деталей є ключовою ланкою у цифровому
                  виробництві. Вона поєднує точність 3D сканування, можливості аналізу
                  CAD-даних та автоматизацію контролю, забезпечуючи надійність,
                  повторюваність і довіру до кожного виготовленого виробу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
