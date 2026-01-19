import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Фарбування 3D-друкованих деталей',
  description:
    'Високоякісне фарбування деталей, надрукованих на FDM та MJF обладнанні. Глибоке просочення фарбою та розпилення за палітрою RAL.',
  path: '/services/dyeing',
});

export default function DyeingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroFancy
        title="Фарбування 3D-друкованих деталей"
        description="Ми спеціалізуємося на високоякісному фарбуванні деталей, надрукованих на FDM та MJF обладнанні."
      />

      <div className="custom-container py-12">
        {/* Service Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-primary mb-6 text-3xl font-bold">
                Ми спеціалізуємося на високоякісному фарбуванні деталей
              </h2>
              <p className="text-base-content/80 mb-8 text-lg leading-relaxed">
                Залежно від ваших вимог до зовнішнього вигляду, стійкості та бюджетних рамок, ми
                запропонуємо оптимальний метод обробки.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/Services/post-processing/dyeing.jpg"
                alt="Фарбування 3D-деталей"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Service Methods */}
        <div className="mb-16">
          <h2 className="text-primary mb-12 text-center text-3xl font-bold">Послуги фарбування</h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Dyeing Method */}
            <div className="card bg-base-200 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-8">
                <h3 className="text-primary mb-4 text-2xl font-bold">Метод занурення (Dyeing)</h3>
                <p className="text-base-content/80 mb-6 text-lg">
                  Поверхневе просочення у розчині з барвником забезпечує рівномірне забарвлення
                  виробу зовні.
                </p>

                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <div>
                      <div className="text-base-content font-medium">
                        Доступний у класичному чорному кольорі
                      </div>
                      <div className="text-base-content/60 text-sm">
                        Ідеальний для універсальних технічних рішень
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <div>
                      <div className="text-base-content font-medium">
                        Ідеальний для технічних деталей
                      </div>
                      <div className="text-base-content/60 text-sm">
                        Що піддаються активному використанню
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <div>
                      <div className="text-base-content font-medium">
                        Не змивається та не сколюється
                      </div>
                      <div className="text-base-content/60 text-sm">Зберігає колір з часом</div>
                    </div>
                  </div>
                </div>

                <div className="border-base-300 border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-base-content/60">Матеріали:</span>
                      <span className="ml-2 font-medium">PA12, PA11, TPU</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Термін виконання:</span>
                      <span className="ml-2 font-medium">3-5 днів</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Вартість:</span>
                      <span className="ml-2 font-medium">від 100 грн</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spray Coating Method */}
            <div className="card bg-base-200 border-base-300 hover:border-primary/30 border transition-all duration-300">
              <div className="card-body p-8">
                <h3 className="text-primary mb-4 text-2xl font-bold">
                  Метод розпилення (Spray Coating)
                </h3>
                <p className="text-base-content/80 mb-6 text-lg">
                  Нанесення фарби методом розпилення забезпечує бездоганний зовнішній вигляд і
                  дозволяє підібрати точний відтінок згідно з палітрою RAL.
                </p>

                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <div>
                      <div className="text-base-content font-medium">
                        Будь-який колір із каталогу RAL
                      </div>
                      <div className="text-base-content/60 text-sm">
                        Повна відповідність бренд-книзі
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <div>
                      <div className="text-base-content font-medium">Вибір фактури</div>
                      <div className="text-base-content/60 text-sm">
                        Матова, глянцева чи текстурована поверхня
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <div>
                      <div className="text-base-content font-medium">
                        Оптимально для зовнішніх елементів
                      </div>
                      <div className="text-base-content/60 text-sm">
                        Що мають відповідати брендингу
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-base-300 border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-base-content/60">Матеріали:</span>
                      <span className="ml-2 font-medium">Усі матеріали</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Термін виконання:</span>
                      <span className="ml-2 font-medium">5-7 днів</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Вартість:</span>
                      <span className="ml-2 font-medium">від 100 грн</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additive3D Approach */}
        <div className="mb-16">
          <div className="card bg-primary/5 border-primary/20 border">
            <div className="card-body p-8">
              <h3 className="text-primary mb-6 text-2xl font-bold">Підхід Additive3D</h3>
              <p className="text-base-content/80 mb-8 text-lg leading-relaxed">
                Ми пропонуємо повний супровід проєкту: від підготовки поверхні й вибору оптимального
                методу фарбування до контролю якості покриття. Кожну деталь тестуємо на адгезію та
                відповідність технічним вимогам.
              </p>

              <div className="grid gap-12 2xl:grid-cols-2">
                <div className="flex flex-col gap-4 space-y-6 xl:flex-row xl:justify-between 2xl:flex-col 2xl:justify-start">
                  <div>
                    <h4 className="text-primary mb-4 text-xl font-bold">
                      Контроль якості покриття
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-base-content/80">
                          Перевірка рівномірності та глибини кольору
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-base-content/80">
                          Тестування на стійкість до стирання та подряпин
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-base-content/80">Контроль відповідності кольору</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-primary mb-4 text-xl font-bold">Додаткові опції</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-base-content/80">
                          Лакове покриття для підвищення глянцю та захисту від подряпин
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-base-content/80">
                          Маскування окремих зон для багатокольорових схем
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-success mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="text-base-content/80">
                          Поверхнева підготовка: шліфування, праймування, герметизація пор
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card bg-base-100 border-base-300 border">
                      <div className="card-body p-6 text-center md:text-start">
                        <Image
                          src="/Services/post-processing/dyeing-mjf.jpg"
                          alt="MJF фарбування"
                          width={250}
                          height={200}
                          className="mx-auto mb-4 rounded-lg"
                        />
                        <h5 className="text-primary mb-2 font-bold">Обидва методи гарантують</h5>
                        <p className="text-base-content/80 text-sm">
                          Високу якість покриття, довговічність та точну відповідність технічним
                          вимогам.
                        </p>
                      </div>
                    </div>

                    <div className="card bg-base-100 border-base-300 border">
                      <div className="card-body p-6 text-center md:text-start">
                        <Image
                          src="/Services/post-processing/mjf-dyeing-comparison.jpg"
                          alt="Порівняння кольорів"
                          width={250}
                          height={200}
                          className="mx-auto mb-4 rounded-lg"
                        />
                        <h5 className="text-primary mb-2 font-bold">Індивідуальний підхід</h5>
                        <p className="text-base-content/80 text-sm">
                          Ми забезпечуємо індивідуальний підхід до кожного замовлення та готові
                          реалізувати найскладніші завдання.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA
        title="Потрібна консультація з фарбуванням?"
        description="Наші інженери допоможуть обрати оптимальний метод фарбування та розрахують вартість для вашого проєкту"
        cta1={{ text: 'Розрахувати вартість', href: '/services/3d-printing/calculator' }}
        cta2={{ text: "Зв'язатися з нами", href: '/contact' }}
      />
    </>
  );
}
