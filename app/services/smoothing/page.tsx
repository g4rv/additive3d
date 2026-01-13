import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import Image from 'next/image';
import {
  Zap,
  CheckCircle,
  Shield,
  Droplets,
  Gauge,
  Sparkles,
  Lightbulb,
  Target,
  Leaf,
  TrendingUp,
  DollarSign,
  AlertCircle,
  ClipboardCheck,
  Search as SearchIcon,
} from 'lucide-react';

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

      <div className="custom-container py-12 md:py-16">
        {/* Service Overview */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-primary mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-balance">
                Ми спеціалізуємося на згладжуванні поверхні деталей парами розчинника
              </h2>
              <p className="text-base-content/80 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-prose">
                Інноваційна технологія для підвищення міцності та зносостійкості пластикових
                деталей. Підвищення щільності та стабілізація розмірів.
              </p>
              <div className="mb-8 flex flex-wrap gap-2 md:gap-4">
                <div className="badge badge-primary badge-md md:badge-lg">Підвищення міцності</div>
                <div className="badge badge-secondary badge-md md:badge-lg">Зменшення шорсткості</div>
                <div className="badge badge-outline badge-md md:badge-lg">FDM та MJF</div>
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
        <div className="mb-12 md:mb-16">
          <h2 className="text-primary mb-8 md:mb-12 text-center text-2xl md:text-3xl font-bold text-balance">
            Переваги хімічного згладжування
          </h2>

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-4 md:p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-3 md:mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                  <Droplets className="text-primary h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-primary mb-2 md:mb-3 text-base md:text-lg font-bold text-balance">
                  Герметизація поверхні
                </h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Усунення пористості та мікротріщин поверхні полімерних деталей
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-4 md:p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-3 md:mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                  <Shield className="text-primary h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-primary mb-2 md:mb-3 text-base md:text-lg font-bold text-balance">
                  Хімічна стійкість
                </h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Створює захисний бар&apos;єр, який покращує стійкість до хімічних речовин, води та
                  масел.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-4 md:p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-3 md:mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                  <Gauge className="text-primary h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-primary mb-2 md:mb-3 text-base md:text-lg font-bold text-balance">
                  Підвищення міцності
                </h3>
                <p className="text-base-content/80 text-sm leading-relaxed">
                  Додає міцний захисний шар, який може покращити механічні властивості деталі
                </p>
              </div>
            </div>

            <div className="card bg-base-200 border-primary/20 hover:border-primary/40 border transition-all duration-300">
              <div className="card-body p-4 md:p-6 text-center">
                <div className="bg-primary/20 mx-auto mb-3 md:mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                  <Sparkles className="text-primary h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-primary mb-2 md:mb-3 text-base md:text-lg font-bold text-balance">
                  Покращення поверхні
                </h3>
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
        <div className="mb-12 md:mb-16">
          <h2 className="text-primary mb-8 md:mb-12 text-center text-2xl md:text-3xl font-bold text-balance">
            Контроль якості
          </h2>

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6 md:p-8 text-center">
                <div className="bg-success/20 mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                  <CheckCircle className="text-success h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-primary mb-3 md:mb-4 text-lg md:text-xl font-bold text-balance">
                  Вхідний контроль
                </h3>
                <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                  Перевірка вихідних параметрів 3D-друку перед обробкою
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6 md:p-8 text-center">
                <div className="bg-success/20 mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                  <AlertCircle className="text-success h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-primary mb-3 md:mb-4 text-lg md:text-xl font-bold text-balance">
                  Процесний моніторинг
                </h3>
                <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                  Контроль температури та часу обробки в реальному часі
                </p>
              </div>
            </div>

            <div className="card bg-base-100 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-6 md:p-8 text-center">
                <div className="bg-success/20 mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                  <ClipboardCheck className="text-success h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-primary mb-3 md:mb-4 text-lg md:text-xl font-bold text-balance">
                  Вихідний контроль
                </h3>
                <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                  Вимірювання розмірів та перевірка відповідності технічним вимогам
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-primary mb-8 md:mb-12 text-center text-2xl md:text-3xl font-bold text-balance">
            Переваги технології
          </h2>

          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/20 flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Lightbulb className="text-primary h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-primary mb-1 md:mb-2 text-base md:text-lg font-bold text-balance">
                    Інноваційний підхід
                  </h4>
                  <p className="text-base-content/80 text-sm md:text-base leading-relaxed max-w-prose">
                    Використання сучасних технологій для досягнення максимальної ефективності
                    процесу зварювання.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/20 flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Target className="text-primary h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-primary mb-1 md:mb-2 text-base md:text-lg font-bold text-balance">
                    Висока точність
                  </h4>
                  <p className="text-base-content/80 text-sm md:text-base leading-relaxed max-w-prose">
                    Стабільні результати з мінімальними відхиленнями розмірів та властивостей
                    матеріалу.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/20 flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Leaf className="text-primary h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-primary mb-1 md:mb-2 text-base md:text-lg font-bold text-balance">
                    Екологічність
                  </h4>
                  <p className="text-base-content/80 text-sm md:text-base leading-relaxed max-w-prose">
                    Відсутність хімічних речовин та безпечність для використання у різних галузях.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/20 flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <TrendingUp className="text-primary h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-primary mb-1 md:mb-2 text-base md:text-lg font-bold text-balance">
                    Надійність
                  </h4>
                  <p className="text-base-content/80 text-sm md:text-base leading-relaxed max-w-prose">
                    Прогнозовані результати з гарантованою якістю та стабільністю характеристик.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/20 flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <DollarSign className="text-primary h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-primary mb-1 md:mb-2 text-base md:text-lg font-bold text-balance">
                    Економічна ефективність
                  </h4>
                  <p className="text-base-content/80 text-sm md:text-base leading-relaxed max-w-prose">
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
