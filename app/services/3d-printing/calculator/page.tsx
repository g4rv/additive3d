import { FadeIn } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import {
  AlertCircle,
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Package,
  Settings,
  Upload,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор 3D Друку | Additive3D',
  description:
    'Миттєвий розрахунок вартості 3D друку онлайн. Завантажте STL файл та отримайте точну ціну.',
};

export default function CalculatorPage() {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Миттєвий розрахунок',
      description: 'Отримайте точну вартість за 2 хвилини',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Прозорість цін',
      description: 'Детальний розбір вартості матеріалів та роботи',
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Безкоштовно',
      description: "Ніяких прихованих платежів та зобов'язань",
    },
  ];

  const supportedFormats = [
    { name: 'STL', description: 'Стандартний формат для 3D друку', recommended: true },
    { name: 'OBJ', description: 'Формат з текстурами', recommended: false },
    { name: 'STEP', description: 'Інженерний формат', recommended: false },
    { name: '3MF', description: 'Сучасний формат 3D Manufacturing', recommended: false },
  ];

  const processSteps = [
    { step: '01', title: 'Завантажте файл', description: 'Оберіть ваш 3D файл (STL, OBJ, STEP)' },
    { step: '02', title: 'Виберіть параметри', description: 'Матеріал, технологія, кількість' },
    { step: '03', title: 'Отримайте розрахунок', description: 'Детальна вартість та терміни' },
    { step: '04', title: 'Замовте друк', description: 'Оплатте та отримайте готові вироби' },
  ];

  return (
    <div className="min-h-no-header-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient relative overflow-hidden py-20">
        <BgPattern pattern="dots" size={40} color="rgb(255, 210, 49)" opacity={0.1} />

        <div className="custom-container">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-base-content mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                Калькулятор <span className="text-primary">3D друку</span>
              </h1>
              <p className="text-base-content/90 text-xl leading-relaxed md:text-2xl">
                Розрахуйте вартість вашого замовлення миттєво. Завантажте файл, виберіть параметри
                та отримайте точну ціну з термінами виконання.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="bg-base-100 py-16">
        <div className="custom-container">
          <FadeIn direction="up">
            <div className="bg-base-200 border-primary/20 mx-auto max-w-4xl rounded-2xl border-2 p-8">
              <div className="mb-8 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  <Calculator className="h-12 w-12" />
                </div>
                <h2 className="text-base-content mb-4 text-3xl font-bold">
                  Розрахуйте вартість вашого виробу
                </h2>
                <p className="text-base-content/80 mx-auto max-w-2xl">
                  Наш калькулятор автоматично проаналізує вашу модель та запропонує оптимальні
                  варіанти друку
                </p>
              </div>

              {/* Upload Area */}
              <div className="bg-base-100 border-base-300 hover:border-primary/50 mb-8 rounded-xl border-2 border-dashed p-12 transition-colors">
                <div className="text-center">
                  <Upload className="text-primary mx-auto mb-6 h-16 w-16" />
                  <h3 className="text-base-content mb-4 text-xl font-bold">
                    Завантажте ваш 3D файл
                  </h3>
                  <p className="text-base-content/70 mb-6">
                    Перетягніть файл у цю область або оберіть файл
                  </p>

                  <div className="mb-8">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      accept=".stl,.obj,.step,.stp,.3mf"
                    />
                    <label
                      htmlFor="file-upload"
                      className="btn btn-secondary btn-lg cursor-pointer"
                    >
                      <Package className="mr-2 h-5 w-5" />
                      Оберіть файл
                    </label>
                  </div>

                  <div className="text-base-content/60 text-sm">
                    Максимальний розмір файлу: 100MB | Підтримувані формати: STL, OBJ, STEP, 3MF
                  </div>
                </div>
              </div>

              {/* Configuration Options */}
              <div className="mb-8 grid gap-8 md:grid-cols-2">
                <div className="bg-base-100 rounded-xl p-6">
                  <h4 className="text-base-content mb-4 flex items-center gap-2 text-lg font-bold">
                    <Settings className="text-primary h-5 w-5" />
                    Параметри друку
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-base-content/80 mb-2 block text-sm">Технологія</label>
                      <select className="bg-base-200 border-base-300 w-full rounded-lg border p-3">
                        <option>FDM 3D Друк</option>
                        <option>MJF 3D Друк</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-base-content/80 mb-2 block text-sm">Матеріал</label>
                      <select className="bg-base-200 border-base-300 w-full rounded-lg border p-3">
                        <option>ABS</option>
                        <option>PETG</option>
                        <option>TPU</option>
                        <option>PLA</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-base-content/80 mb-2 block text-sm">Кількість</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="bg-base-200 border-base-300 w-full rounded-lg border p-3"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-base-100 rounded-xl p-6">
                  <h4 className="text-base-content mb-4 flex items-center gap-2 text-lg font-bold">
                    <Zap className="text-primary h-5 w-5" />
                    Швидкість та якість
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-base-content/80 mb-2 block text-sm">
                        Точність друку
                      </label>
                      <select className="bg-base-200 border-base-300 w-full rounded-lg border p-3">
                        <option>Стандарт (0.2мм)</option>
                        <option>Висока (0.1мм)</option>
                        <option>Преміум (0.05мм)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-base-content/80 mb-2 block text-sm">Заповнення</label>
                      <select className="bg-base-200 border-base-300 w-full rounded-lg border p-3">
                        <option>20% (економ)</option>
                        <option>50% (стандарт)</option>
                        <option>100% (суцільний)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-base-content/80 mb-2 block text-sm">
                        Терміновість
                      </label>
                      <select className="bg-base-200 border-base-300 w-full rounded-lg border p-3">
                        <option>Стандарт (3-5 днів)</option>
                        <option>Швидко (1-2 дні)</option>
                        <option>Терміново (24 години)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="text-center">
                <button className="btn btn-secondary btn-lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Розрахувати вартість
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-200 py-16">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold">
                Чому наш <span className="text-primary">калькулятор</span>
              </h2>
            </header>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <FadeIn key={index} direction="up" delay={0.15 * index}>
                <div className="bg-base-100 rounded-xl p-6 text-center transition-all hover:shadow-lg">
                  <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-base-content mb-3 text-lg font-bold">{feature.title}</h3>
                  <p className="text-base-content/80">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-base-100 py-16">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold">
                Як <span className="text-primary">працює</span> калькулятор
              </h2>
            </header>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="text-center">
                  <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-base-content mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-base-content/70 text-sm">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="bg-base-200 py-16">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold">
                Підтримувані <span className="text-primary">формати</span>
              </h2>
            </header>
          </FadeIn>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportedFormats.map((format, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div
                  className={`bg-base-100 rounded-xl border-2 p-6 text-center ${
                    format.recommended ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  {format.recommended && (
                    <div className="bg-primary text-primary-content mb-3 rounded-full px-3 py-1 text-sm font-semibold">
                      Рекомендовано
                    </div>
                  )}
                  <div className="text-primary mb-2 text-2xl font-bold">.{format.name}</div>
                  <p className="text-base-content/70 text-sm">{format.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-base-100 py-16">
        <div className="custom-container">
          <FadeIn direction="up">
            <div className="bg-primary/5 border-primary/20 mx-auto max-w-3xl rounded-2xl border p-8 text-center">
              <div className="text-primary mb-6 flex justify-center">
                <AlertCircle className="h-12 w-12" />
              </div>
              <h2 className="text-base-content mb-4 text-2xl font-bold">
                Потрібна допомога з розрахунком?
              </h2>
              <p className="text-base-content/80 mb-8">
                Наші інженери допоможуть оптимізувати вашу модель та підібрати найкращі параметри
                друку
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="secondary" className="btn-lg">
                  Консультація експерта
                </ButtonLink>
                <ButtonLink href="/materials" variant="outlined" className="btn-lg border-2">
                  <FileText className="mr-2 h-5 w-5" />
                  Довідка матеріалів
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
