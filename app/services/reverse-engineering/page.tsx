import { Metadata } from 'next';
import {
  Scan,
  Box,
  Settings,
  CheckCircle,
  Layers,
  Target,
  Wrench,
  FileSearch,
  Cpu,
} from 'lucide-react';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import CTA from '@/components/cta';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Реверс-інжиніринг | Additive3D',
  description:
    'Реверс-інжиніринг: відтворення цифрової моделі на основі фізичного об\'єкта. Zeiss Reverse Engineering для точної конвертації scan-to-CAD.',
};

export default function ReverseEngineeringPage() {
  const processSteps = [
    {
      number: 1,
      title: 'Оцифрування об\'єкта',
      description:
        'Здійснюється за допомогою 3D сканера або фотограмметрії, які створюють хмару точок — набір просторових координат, що описують поверхню виробу',
      icon: Scan,
    },
    {
      number: 2,
      title: 'Обробка даних',
      description:
        'Отримані точки перетворюються у полігональну сітку (mesh), після чого проводиться очищення, вирівнювання та згладжування поверхонь',
      icon: Layers,
    },
    {
      number: 3,
      title: 'Моделювання у CAD-середовищі',
      description:
        'На цьому етапі створюється параметрична 3D модель — геометрично точна та придатна для редагування, близька до mesh-тіла але не обов\'язково абсолютно відповідна. Використовується принцип параметризації, що дозволяє швидко змінювати розміри, кути або форми елементів без повторного проектування',
      icon: Box,
    },
    {
      number: 4,
      title: 'Аналіз та валідація',
      description:
        'Готову модель порівнюють із вихідними даними сканування для перевірки точності',
      icon: CheckCircle,
    },
  ];

  const applications = [
    { title: 'Промисловість', icon: Settings },
    { title: 'Машинобудування', icon: Cpu },
    { title: 'Архітектура', icon: Target },
    { title: 'Медицина', icon: Wrench },
    { title: 'Реставрація культурної спадщини', icon: FileSearch },
  ];

  return (
    <>
      <HeroFancy
        title="Реверс-інжиніринг"
        description="Шлях від об'єкта до цифрової моделі"
      />

      {/* Visual Showcase Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="card bg-base-100 border-base-300 shadow-sm overflow-hidden lg:col-span-2">
              <figure className="aspect-video">
                <Image
                  src="/Services/reverse-engineering/3d-surface-reconstruction-mesh-to-cad.png"
                  alt="Реконструкція 3D поверхні від mesh до CAD"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-100 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <Image
                  src="/Services/reverse-engineering/reverse-engineering.jpg"
                  alt="Процес реверс-інжинірингу"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-100 border-base-300 shadow-sm overflow-hidden">
              <figure className="aspect-video">
                <Image
                  src="/Services/reverse-engineering/reverse-engineering-2.webp"
                  alt="Результат реверс-інжинірингу"
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
                  Реверс-інжиніринг: шлях від об&apos;єкта до цифрової моделі
                </h2>
                <div className="space-y-4 text-base-content/90 leading-relaxed text-base lg:text-lg">
                  <p>
                    Реверс-інжиніринг (reverse engineering) — це процес відтворення цифрової
                    тривимірної моделі або технічної документації на основі вже існуючого
                    фізичного об&apos;єкта. Головна мета цього підходу — зрозуміти конструкцію
                    виробу, його принцип дії та геометрію, щоб відновити або вдосконалити
                    його без початкових креслень чи CAD-файлів.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Approaches Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Два підходи</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Часто виникає потреба отримання CAD-моделі з деталі, яку ви «тримаєте в
              руках». Є два способи.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {/* Manual Approach */}
            <div className="card bg-base-100 border-base-300 shadow-sm">
              <div className="card-body p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-base-200 text-base-content/60 rounded-lg p-3">
                    <Wrench className="size-6" />
                  </div>
                  <h3 className="text-base-content text-xl font-semibold">
                    Перший спосіб: ручний
                  </h3>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  За допомогою штангенциркуля та інших ручних вимірювальних приладів зробити
                  заміри та спробувати відтворити цю деталь у зручній для вас CAD-програмі.
                </p>
              </div>
            </div>

            {/* Our Service Approach */}
            <div className="card bg-primary/5 border-primary/20 border shadow-sm">
              <div className="card-body p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <Scan className="size-6" />
                  </div>
                  <h3 className="text-primary text-xl font-semibold">
                    Другий спосіб: звернутись до нас
                  </h3>
                </div>
                <p className="text-base-content/90 leading-relaxed">
                  За допомогою 3D-сканера та програмного забезпечення Zeiss Reverse
                  Engineering ми перетворюємо фізичний об&apos;єкт на точну STL-модель, яку потім
                  трансформуємо в твердотільну CAD-модель із визначеними математичними
                  поверхнями. З отриманою моделлю ви вже можете далі працювати в зручній для
                  вас CAD-програмі.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">
              Галузі застосування
            </h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Реверс-інжиніринг широко використовується у різних галузях
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="card bg-base-200 border-base-300 shadow-sm">
              <div className="card-body p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {applications.map((app, index) => {
                    const Icon = app.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="text-primary size-5 flex-shrink-0" />
                        <span className="text-base-content/90">{app.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="card bg-base-100 border-base-300 shadow-sm">
              <div className="card-body p-8">
                <p className="text-base-content/80 leading-relaxed">
                  Наприклад, за допомогою 3D сканера можна відтворити деталі старих
                  механізмів, для яких креслення давно втрачено, або створити точну копію
                  складного елемента, що потребує заміни.
                </p>
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
              Процес реверс-інжинірингу
            </h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Процес зазвичай складається з кількох етапів
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
          <div className="mx-auto max-w-5xl">
            <div className="card bg-base-200 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <h2 className="text-primary mb-6 text-2xl font-semibold lg:text-3xl">
                  Можливості реверс-інжинірингу
                </h2>
                <div className="space-y-4 text-base-content/90 leading-relaxed text-base lg:text-lg">
                  <p>
                    Реверс-інжиніринг відкриває значні можливості: дозволяє модернізувати
                    застарілі деталі, адаптувати вироби під нові технології, створювати
                    запасні частини без документації або оптимізувати існуючі конструкції. Він
                    також є важливим етапом у поєднанні зі 3D друком, коли оцифрований об&apos;єкт
                    можна відтворити у фізичній формі.
                  </p>
                  <p>
                    Таким чином, реверс-інжиніринг є невід&apos;ємною частиною сучасного цифрового
                    виробництва. У поєднанні зі 3D скануванням та моделюванням він формує
                    замкнений цикл — від реального об&apos;єкта до цифрової моделі та назад,
                    забезпечуючи точність, ефективність і гнучкість інженерних процесів.
                  </p>
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
