import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import Image from 'next/image';

export const metadata = {
  title: 'Фарбування 3D-друкованих деталей | Additive3D',
  description: 'Високоякісне фарбування деталей, надрукованих на FDM та MJF обладнанні. Глибоке просочення фарбою та розпилення за палітрою RAL.',
};

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Ми спеціалізуємося на високоякісному фарбуванні деталей
              </h2>
              <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                Залежно від ваших вимог до зовнішнього вигляду, стійкості та бюджетних рамок, ми запропонуємо оптимальний метод обробки.
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
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Послуги фарбування
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dyeing Method */}
            <div className="card bg-base-200 border border-base-300 hover:border-primary/30 transition-all duration-300">
              <div className="card-body p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Метод пропитки (Dyeing)</h3>
                <p className="text-base-content/80 text-lg mb-6">
                  Глибоке просочення пластика барвником забезпечує рівномірне забарвлення матеріалу зсередини та максимальну стійкість до стирання.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-base-content">Доступний у класичному чорному кольорі</div>
                      <div className="text-sm text-base-content/60">Ідеальний для універсальних технічних рішень</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-base-content">Ідеальний для технічних деталей</div>
                      <div className="text-sm text-base-content/60">Що піддаються активному використанню</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-base-content">Не змивається та не сколюється</div>
                      <div className="text-sm text-base-content/60">Зберігає колір з часом</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-base-300 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-base-content/60">Матеріали:</span>
                      <span className="ml-2 font-medium">PA12, PA11, TPU</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Терміновість:</span>
                      <span className="ml-2 font-medium">3-5 днів</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Вартість:</span>
                      <span className="ml-2 font-medium">₴200-400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spray Coating Method */}
            <div className="card bg-base-200 border border-base-300 hover:border-primary/30 transition-all duration-300">
              <div className="card-body p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Метод розпилення (Spray Coating)</h3>
                <p className="text-base-content/80 text-lg mb-6">
                  Нанесення фарби методом розпилення забезпечує бездоганний зовнішній вигляд і дозволяє підібрати точний відтінок згідно з палітрою RAL.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-base-content">Будь-який колір із каталогу RAL</div>
                      <div className="text-sm text-base-content/60">Повна відповідність бренд-книзі</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-base-content">Вибір фактури</div>
                      <div className="text-sm text-base-content/60">Матова, глянцева чи текстурована поверхня</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-base-content">Оптимально для зовнішніх елементів</div>
                      <div className="text-sm text-base-content/60">Що мають відповідати брендингу</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-base-300 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-base-content/60">Матеріали:</span>
                      <span className="ml-2 font-medium">Усі матеріали</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Терміновість:</span>
                      <span className="ml-2 font-medium">5-7 днів</span>
                    </div>
                    <div>
                      <span className="text-base-content/60">Вартість:</span>
                      <span className="ml-2 font-medium">₴500-1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additive3D Approach */}
        <div className="mb-16">
          <div className="card bg-primary/5 border border-primary/20">
            <div className="card-body p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Підхід Additive3D</h3>
              <p className="text-base-content/80 text-lg leading-relaxed mb-8">
                Ми пропонуємо повний супровід проєкту: від підготовки поверхні й вибору оптимального методу фарбування до контролю якості покриття. Кожну деталь тестуємо на адгезію та відповідність технічним вимогам.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">Контроль якості покриття</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/80">Перевірка рівномірності та глибини кольору</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/80">Тестування на стійкість до стирання та подряпин</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/80">Контроль відповідності корпоративним стандартам бренду</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">Додаткові опції</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/80">Лакове покриття для підвищення глянцю та захисту від подряпин</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/80">Маскування окремих зон для багатокольорових схем</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/80">Поверхнева підготовка: шліфування, праймування, герметизація пор</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="card bg-base-100 border border-base-300">
                      <div className="card-body p-6">
                        <Image
                          src="/Services/post-processing/dyeing-mjf.jpg"
                          alt="MJF фарбування"
                          width={250}
                          height={200}
                          className="rounded-lg mb-4"
                        />
                        <h5 className="font-bold text-primary mb-2">Обидва методи гарантують</h5>
                        <p className="text-sm text-base-content/80">
                          Високу якість покриття, довговічність та точну відповідність технічним вимогам.
                        </p>
                      </div>
                    </div>

                    <div className="card bg-base-100 border border-base-300">
                      <div className="card-body p-6">
                        <Image
                          src="/Services/post-processing/mjf-dyeing-comparison.jpg"
                          alt="Порівняння кольорів"
                          width={250}
                          height={200}
                          className="rounded-lg mb-4"
                        />
                        <h5 className="font-bold text-primary mb-2">Індивідуальний підхід</h5>
                        <p className="text-sm text-base-content/80">
                          Ми забезпечуємо індивідуальний підхід до кожного замовлення та готові реалізувати найскладніші завдання.
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