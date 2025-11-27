import { FadeIn } from '@/components/animations';
import ButtonLink from '@/components/ui/button-link';

/**
 * CalculatorDescription - Simple calculator-focused section for quick price calculation
 * Emphasizes convenience and ease of use of the price calculator
 */
export default function CalculatorDescription() {
  const benefits = [
    {
      title: "Зручно та просто",
      description: "Інтуїтивний інтерфейс для легкого використання",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Прозорість цін",
      description: "Детальна вартість матеріалів та часу виробництва",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Безкоштовно",
      description: "Ніяких прихованих платежів та зобов'язань",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-base-100 py-20 relative" aria-labelledby="calculator-heading">
      <div className="custom-container">
        <FadeIn direction="up">
          <header className="mb-16 text-center">
            <h2 id="calculator-heading" className="text-base-content mb-6 text-4xl font-bold lg:text-5xl">
              Розрахуйте вартість вашого проєкту
            </h2>
            <p className="text-base-content/80 mx-auto max-w-2xl text-xl">
              Простий та зручний калькулятор для розрахунку вартості 3D друку
            </p>
          </header>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side: Benefits */}
          <FadeIn direction="up">
            <div className="space-y-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-base-content mb-2 font-semibold text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-base-content/70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <ButtonLink
                href="/calculator"
                variant="secondary"
                className="btn-lg w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Відкрити калькулятор
                </span>
              </ButtonLink>
            </div>
          </FadeIn>

          {/* Right Side: How it works */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-base-200 border-primary/20 rounded-xl border-2 p-8">
              <div className="mb-6">
                <h3 className="text-base-content mb-4 text-xl font-bold text-center">
                  Як це працює
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary h-8 w-8 flex items-center justify-center rounded-full font-bold text-sm">
                      1
                    </div>
                    <span className="text-base-content">Завантажте вашу 3D модель у форматі .STL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary h-8 w-8 flex items-center justify-center rounded-full font-bold text-sm">
                      2
                    </div>
                    <span className="text-base-content">Виберіть матеріал та технологію</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary h-8 w-8 flex items-center justify-center rounded-full font-bold text-sm">
                      3
                    </div>
                    <span className="text-base-content">Отримайте детальний розрахунок</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-primary/10 rounded-lg border p-6 text-center">
                <div className="text-base-content/70 text-sm mb-2">
                  Підтримувані формати
                </div>
                <div className="text-primary text-2xl font-bold mb-1">
                  .STL
                </div>
                <div className="text-base-content/60 text-sm">
                  Стандартний формат для 3D друку
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-base-300">
                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-base-content/70">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Безкоштовно</span>
                  </div>
                  <div className="flex items-center gap-2 text-base-content/70">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Конфіденційно</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}