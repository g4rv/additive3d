import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import Image from 'next/image';

export const metadata = {
  title: 'Хімічне згладжування | Additive3D',
  description:
    'Професійне хімічне згладжування для підвищення міцності та зносостійкості 3D-друкованих деталей. Підвищення щільності та стабілізація розмірів.',
};

export default function SteamIroningPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroFancy
        title="Хімічне згладжування"
        description="Інноваційна технологія для підвищення міцності та зносостійкості пластикових деталей. Підвищення щільності та стабілізація розмірів."
      />

      <div className="custom-container py-12">
        {/* Service Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-primary mb-6 text-3xl font-bold">
                Ми спеціалізуємося на згладжуванні поверхні деталей парами розчинника
              </h2>
              <p className="text-base-content/80 mb-8 text-lg leading-relaxed">
                Інноваційна технологія для підвищення міцності та зносостійкості пластикових
                деталей. Підвищення щільності та стабілізація розмірів.
              </p>
              <div className="mb-8 flex gap-4">
                <div className="badge badge-primary badge-lg">Підвищення міцності</div>
                <div className="badge badge-secondary badge-lg">Зменшення шорсткості</div>
                <div className="badge badge-outline badge-lg">FDM та MJF</div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Services/post-processing/post-processing.jpg"
                alt="Хімічне згладжування"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mb-16">
          <h2 className="text-primary mb-12 text-center text-3xl font-bold">
            Переваги хімічного згладжування
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-primary h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-primary mb-3 text-lg font-bold">Герметизація поверхні</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Усунення пористості та мікротріщин поверхні полімерних деталей
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-primary h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-primary mb-3 text-lg font-bold">Хімічна стійкість</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Створює захисний бар&apos;єр, який покращує стійкість до хімічних речовин, води та
                  масел.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-primary h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a6 6 0 00-3-5.197M9 3h6a2 2 0 012 2v4a6 6 0 01-3 5.197M9 3v6a6 6 0 003 5.197"
                    />
                  </svg>
                </div>
                <h3 className="text-primary mb-3 text-lg font-bold">Підвищення міцності</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Додає міцний захисний шар, який може покращити механічні властивості деталі
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-primary h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m0-6l-3 3m6 0l-3-3m-6 0l-3-3"
                    />
                  </svg>
                </div>
                <h3 className="text-primary mb-3 text-lg font-bold">Покращення поверхні</h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Створення гладкої та однорідної поверхні без видимих дефектів
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Process */}
        <div className="mb-16">
          <h2 className="text-primary mb-12 text-center text-3xl font-bold">Технологія процесу</h2>

          <div className="card bg-primary/5 border-primary/20 border">
            <div className="card-body p-8">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-primary mb-4 text-xl font-bold">
                      Процес хімічного згладжування
                    </h3>
                    <p className="text-base-content/80 mb-6 leading-relaxed">
                      Контрольований процес хімічної обробки деталей парами розчинника з точним
                      регулюванням температури та часу обробки.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <div>
                          <div className="text-base-content font-medium">Точна температура</div>
                          <div className="text-base-content/60 text-sm">Контрольована до 1°C</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <div>
                          <div className="text-base-content font-medium">Рівномірна обробка</div>
                          <div className="text-base-content/60 text-sm">
                            Однорідний вплив розчинника на всю поверхню
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <div>
                          <div className="text-base-content font-medium">Автоматизація</div>
                          <div className="text-base-content/60 text-sm">
                            Програмоване керування процесом
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-primary mb-4 text-xl font-bold">Матеріали для обробки</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <div>
                          <div className="text-base-content font-medium">FDM технологія</div>
                          <div className="text-base-content/60 text-sm">ASA, ABS</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <div>
                          <div className="text-base-content font-medium">MJF технологія</div>
                          <div className="text-base-content/60 text-sm">PA12, PA11, TPU</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/Services/post-processing/dyeing-mjf.jpg"
                    alt="Технологія парового зварювання"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-primary mb-12 text-center text-3xl font-bold">
            Застосування технології
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-bold">Функціональні прототипи</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Підвищення міцності прототипів для тестування та валідації конструкцій
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-bold">Серійне виробництво</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Повторюваність розмірів та властивостей при масовому виробництві деталей
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-bold">Інженерні деталі</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Покращення механічних характеристик для відповідності технічним вимогам
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-bold">Медичні вироби</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Забезпечення гладкості поверхні протезів
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6">
                <h3 className="text-primary mb-2 text-lg font-bold">Автомобільні запчастини</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Підвищення зносостійкості та довговічності функціональних елементів
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-primary mb-12 text-center text-3xl font-bold">
            Технічні специфікації
          </h2>

          <div className="card bg-base-200 border-base-300 border">
            <div className="card-body p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h4 className="text-primary mb-4 text-lg font-bold">Параметри процесу</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Температура:</span>
                      <span className="font-medium">100-180°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Час обробки:</span>
                      <span className="font-medium">5-30 хвилин</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Вакуум:</span>
                      <span className="font-medium">автоматичне переключення</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Матеріали виробів:</span>
                      <span className="font-medium">PA12, ABS, ASA</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-primary mb-4 text-lg font-bold">Результати обробки</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Підвищення щільності:</span>
                      <span className="font-medium">5-15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Стабільність розмірів:</span>
                      <span className="font-medium">±0.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Підвищення міцності:</span>
                      <span className="font-medium">10-25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Зниження пористості:</span>
                      <span className="font-medium">до 90%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-primary mb-4 text-lg font-bold">Якість поверхні</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Шорсткість:</span>
                      <span className="font-medium">Ra 1.6-3.2 мкм</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Однорідність:</span>
                      <span className="font-medium">Висока</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Колір:</span>
                      <span className="font-medium">Без змін</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Дефекти:</span>
                      <span className="font-medium">Відсутні</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="mb-16">
          <h2 className="text-primary mb-12 text-center text-3xl font-bold">Контроль якості</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-8 text-center">
                <div className="bg-success/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-success h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-primary mb-4 text-xl font-bold">Вхідний контроль</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Перевірка вихідних параметрів 3D-друку перед обробкою
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-8 text-center">
                <div className="bg-success/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-success h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-primary mb-4 text-xl font-bold">Процесний моніторинг</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Контроль температури та часу обробки в реальному часі
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-8 text-center">
                <div className="bg-success/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-success h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m0 0a2 2 0 002 2v5a2 2 0 002-2V7a2 2 0 00-2-2H9z"
                    />
                  </svg>
                </div>
                <h3 className="text-primary mb-4 text-xl font-bold">Вихідний контроль</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Вимірювання розмірів та перевірка відповідності технічним вимогам
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h2 className="text-primary mb-12 text-center text-3xl font-bold">Переваги технології</h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <svg
                    className="text-primary h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary mb-2 text-lg font-bold">Інноваційний підхід</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Використання сучасних технологій для досягнення максимальної ефективності
                    процесу зварювання.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <svg
                    className="text-primary h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary mb-2 text-lg font-bold">Висока точність</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Стабільні результати з мінімальними відхиленнями розмірів та властивостей
                    матеріалу.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <svg
                    className="text-primary h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m0-6l-3 3m6 0l-3-3m-6 0l-3-3"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary mb-2 text-lg font-bold">Екологічність</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Відсутність хімічних речовин та безпечність для використання у різних галузях.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <svg
                    className="text-primary h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a6 6 0 00-3-5.197M9 3h6a2 2 0 012 2v4a6 6 0 01-3 5.197M9 3v6a6 6 0 003 5.197"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary mb-2 text-lg font-bold">Надійність</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Прогнозовані результати з гарантованою якістю та стабільністю характеристик.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <svg
                    className="text-primary h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary mb-2 text-lg font-bold">Економічна ефективність</h4>
                  <p className="text-base-content/80 leading-relaxed">
                    Оптимізація виробничих процесів та зменшення витрат на додаткову обробку.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA
        title="Потрібна консультація по хімічному згладжуванню?"
        description="Наші інженери допоможуть обрати оптимальні параметри обробки та розрахують вартість для вашого проєкту"
        cta1={{ text: 'Розрахувати вартість', href: '/services/3d-printing/calculator' }}
        cta2={{ text: "Зв'язатися з нами", href: '/contact' }}
      />
    </>
  );
}
