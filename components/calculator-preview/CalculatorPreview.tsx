import { FadeIn } from '@/components/animations';
import ButtonLink from '@/components/ui/button-link';

/**
 * CalculatorPreview - Preview of transparent cost calculator
 * Addresses manufacturing industry's biggest pain point: opaque pricing
 */
export default function CalculatorPreview() {
  return (
    <section className="bg-base-100 py-16" aria-labelledby="calculator-heading">
      <div className="custom-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content Side */}
          <FadeIn direction="up">
            <div className="lg:pr-8">
              <header>
                <h2 id="calculator-heading" className="text-base-content mb-6 text-3xl font-bold lg:text-4xl">
                  Прозорий розрахунок вартості
                </h2>
                <p className="text-base-content/80 mb-8 text-lg">
                  Дізнайтеся точну вартість вашого проєкту за 1 хвилину. Без прихованих платежів та
                  неочікуваних витрат.
                </p>
              </header>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold mb-2">Детальна вартість</h3>
                    <p className="text-base-content/70">
      Поелементний розрахунок: матеріал, час друку, підтримки, постобробка
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold mb-2">Безпека файлів</h3>
                    <p className="text-base-content/70">
      Всі завантаження захищені та конфіденційні
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base-content font-semibold mb-2">Миттєвий результат</h3>
                    <p className="text-base-content/70">
      Отримайте точну вартість та терміни виконання одразу
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <ButtonLink href="/calculator" variant="secondary" className="btn-lg">
                  Спробувати калькулятор
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* Preview Side */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-base-200 border-primary/20 rounded-xl border-2 p-8">
              <div className="mb-6">
                <h3 className="text-base-content mb-4 text-xl font-bold">Приклад розрахунку</h3>
                <div className="space-y-3">
                  <div className="bg-base-100 p-4 rounded-lg">
                    <div className="text-base-content/70 text-sm mb-1">Матеріал: ABS+</div>
                    <div className="text-base-content font-semibold">320г × 1.2 грн/г</div>
                  </div>
                  <div className="bg-base-100 p-4 rounded-lg">
                    <div className="text-base-content/70 text-sm mb-1">Час друку: 4.5 години</div>
                    <div className="text-base-content font-semibold">4.5 × 150 грн/год</div>
                  </div>
                  <div className="bg-base-100 p-4 rounded-lg">
                    <div className="text-base-content/70 text-sm mb-1">Постобробка</div>
                    <div className="text-base-content font-semibold">Видалення підтримок</div>
                  </div>
                  <div className="border-primary/20 border-t-2 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base-content font-bold">Разом:</span>
                      <span className="text-primary text-2xl font-bold">1,124 грн</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-base-100/50 p-4 rounded-lg text-center">
                <div className="text-base-content/70 text-sm mb-2">Готовність через</div>
                <div className="text-base-content text-xl font-bold">2-3 робочі дні</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}