import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import { Box, Lightbulb, RefreshCw, Sparkles, Workflow } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '3D-моделювання | Additive3D',
  description:
    'Професійне 3D-моделювання: цифрове відтворення об`єкту. Параметричне CAD-моделювання, реверс-інжиніринг, дизайнерське моделювання.',
};

export default function ThreeDModelingPage() {
  const modelingDirections = [
    {
      title: 'Інженерне моделювання (CAD)',
      description:
        'Створення точних моделей деталей і вузлів для конструкторських розробок, розрахунків і підготовки до виробництва',
      icon: Box,
    },
    {
      title: 'Дизайнерське моделювання',
      description:
        'Формування концептуальних моделей для візуалізації ідей у промисловому, архітектурному чи графічному дизайні',
      icon: Lightbulb,
    },
    {
      title: 'Реверс-інжиніринг',
      description:
        "Відновлення технічної документації або створення CAD-моделей на основі фізичних об'єктів, отриманих через 3D сканування",
      icon: RefreshCw,
    },
    {
      title: 'Віртуальна та доповнена реальність',
      description:
        "Використання 3D-моделей для інтерактивного відображення об'єктів у цифровому середовищі",
      icon: Sparkles,
    },
  ];

  const software = ['Zeiss Reverse Engineering', 'Zeiss Inspect', 'Relevant CAD-systems'];

  return (
    <>
      <HeroFancy title="3D-моделювання" description="Цифрове відтворення об'єкту" />

      {/* Visual Showcase Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <div className="card bg-base-100 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src="/Services/modeling/3d-modeling.jpg"
                  alt="Професійне 3D-моделювання"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-100 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src="/Services/modeling/3d-modeling-2.jpg"
                  alt="CAD моделювання деталей"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-100 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src="/Services/modeling/3d-modeling-3.jpg"
                  alt="Концептуальне 3D-моделювання"
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
                  3D-моделювання: цифрове відтворення об'єкту
                </h2>
                <div className="text-base-content/90 space-y-4 text-base leading-relaxed lg:text-lg">
                  <p>
                    3D моделювання — це процес створення тривимірних об&apos;єктів у віртуальному
                    просторі за допомогою спеціалізованого програмного забезпечення. Воно дозволяє
                    візуалізувати форму, розміри та пропорції реальних або вигаданих предметів, що
                    робить його невід&apos;ємною складовою сучасних технологій виробництва, дизайну
                    та інженерії.
                  </p>
                  <p>
                    Після етапу 3D сканування, коли об&apos;єкт оцифровується і перетворюється на
                    хмару точок, а потім на сітку полігонів, розпочинається моделювання. Саме на
                    цьому етапі здійснюється редагування отриманої геометрії — видаляються зайві
                    елементи, згладжуються поверхні, заповнюються отвори та уточнюються деталі. У
                    результаті формується точна цифрова копія виробу, придатна для подальшого
                    використання в різних сферах.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parametrization Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="card bg-primary/5 border-primary/20 border shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Workflow className="text-primary size-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary mb-4 text-2xl font-bold">Параметризація</h3>
                    <p className="text-base-content/90 text-lg leading-relaxed">
                      Важливим аспектом сучасного 3D моделювання є параметризація — можливість
                      задавати геометричні характеристики об&apos;єкта через змінні параметри. Це
                      дозволяє швидко змінювати розміри, форми або пропорції моделі без потреби
                      створювати її заново. Завдяки параметризації інженери можуть легко адаптувати
                      конструкції під різні вимоги виробництва чи експлуатації, що значно підвищує
                      ефективність розробки.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modeling Directions Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">
              Основні напрямки 3D-моделювання
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {modelingDirections.map((direction, index) => {
              const Icon = direction.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-200 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-lg"
                >
                  <div className="card-body p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="bg-primary/10 text-primary rounded-lg p-3">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-primary text-xl font-semibold">{direction.title}</h3>
                    </div>
                    <p className="text-base-content/90 leading-relaxed">{direction.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software Tools Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Програмне забезпечення</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Для роботи застосовуються програмне забезпечення Zeiss Reverse Engineering, Zeiss
              Inspect та CAD-системи. Вибір інструменту залежить від завдання: від високоточної
              інженерії до творчої візуалізації.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="card bg-base-100 border-base-300 shadow-sm">
              <div className="card-body p-8">
                <div className="flex flex-wrap justify-center gap-3">
                  {software.map((tool, index) => (
                    <div
                      key={index}
                      className="badge badge-lg badge-outline text-primary px-6 py-4"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Value Proposition */}
      <section className="bg-base-100 py-8 lg:py-12">
        <div className="custom-container">
          <div className="mx-auto max-w-4xl">
            <div className="card bg-base-200 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <p className="text-base-content/90 text-lg leading-relaxed">
                  3D моделювання відкриває можливості для оптимізації виробничих процесів,
                  скорочення часу розробки та зниження витрат на прототипування. У поєднанні зі 3D
                  скануванням воно створює повний цикл цифрового виробництва — від реального
                  об&apos;єкта до готової моделі, готової до друку, аналізу або серійного
                  виготовлення.
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
