import { Metadata } from 'next';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import ButtonLink from '@/components/ui/button-link';
import { CONTACT_INFO, NAVIGATION } from '@/lib/constants';
import {
  FileUp,
  Mail,
  Phone,
  Settings,
  Zap,
  Clock,
  Shield,
  CheckCircle,
} from 'lucide-react';
import BgPattern from '@/components/ui/bg-pattern';

export const metadata: Metadata = {
  title: 'Калькулятор 3D-друку | Additive3D',
  description:
    'Розрахуйте вартість вашого 3D-друку онлайн. Миттєва оцінка з можливістю завантаження моделі.',
};

export default function CalculatorPage() {
  return (
    <>
      <HeroFancy
        title="Калькулятор 3D-друку"
        description="Отримайте миттєву оцінку вартості вашого проєкту"
      />

      {/* Coming Soon Section */}
      <section className="bg-base-100 relative isolate py-16 lg:py-24">
        <BgPattern pattern="dots" opacity={0.1} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-6 py-3">
              <Zap className="text-primary h-5 w-5" />
              <span className="text-primary font-semibold">Незабаром</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Онлайн-калькулятор у розробці
            </h2>

            <p className="text-base-content/80 mx-auto mb-12 max-w-2xl text-lg leading-relaxed">
              Ми працюємо над створенням потужного онлайн-калькулятора, який дозволить вам миттєво
              отримати точну вартість 3D-друку просто завантаживши модель.
            </p>

            {/* Features Preview */}
            <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-base-200 rounded-lg p-6 text-left">
                <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <FileUp className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Завантаження моделі</h3>
                <p className="text-base-content/70 text-sm">
                  Підтримка STL, STEP, OBJ та інших форматів 3D-моделей
                </p>
              </div>

              <div className="bg-base-200 rounded-lg p-6 text-left">
                <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Налаштування параметрів</h3>
                <p className="text-base-content/70 text-sm">
                  Вибір матеріалу, технології, кількості та пост-обробки
                </p>
              </div>

              <div className="bg-base-200 rounded-lg p-6 text-left">
                <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Миттєвий розрахунок</h3>
                <p className="text-base-content/70 text-sm">
                  Отримайте точну вартість та терміни за лічені секунди
                </p>
              </div>

              <div className="bg-base-200 rounded-lg p-6 text-left">
                <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Оцінка термінів</h3>
                <p className="text-base-content/70 text-sm">
                  Автоматичний розрахунок часу виробництва для вашого замовлення
                </p>
              </div>

              <div className="bg-base-200 rounded-lg p-6 text-left">
                <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Безпека даних</h3>
                <p className="text-base-content/70 text-sm">
                  Повна конфіденційність ваших файлів та проєктів
                </p>
              </div>

              <div className="bg-base-200 rounded-lg p-6 text-left">
                <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Без реєстрації</h3>
                <p className="text-base-content/70 text-sm">
                  Користуйтесь калькулятором безкоштовно без створення облікового запису
                </p>
              </div>
            </div>

            {/* Current Alternative */}
            <div className="bg-base-200 rounded-lg p-8 lg:p-12">
              <h3 className="mb-4 text-2xl font-bold">Отримайте розрахунок зараз</h3>
              <p className="text-base-content/80 mx-auto mb-8 max-w-2xl">
                Поки калькулятор у розробці, ви можете отримати детальну оцінку вартості та
                консультацію від наших фахівців протягом 2-4 годин.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <ButtonLink
                  href={CONTACT_INFO.email.link}
                  variant="secondary"
                  size="large"
                  className="gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Надіслати модель на Email
                </ButtonLink>

                <ButtonLink
                  href={CONTACT_INFO.phone.link}
                  variant="outlined"
                  size="large"
                  className="gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Зателефонувати нам
                </ButtonLink>
              </div>

              <div className="mt-8 text-sm text-base-content/60">
                <p>
                  <strong>Як отримати оцінку:</strong>
                </p>
                <ol className="mt-2 space-y-1 text-left mx-auto max-w-md">
                  <li>1. Надішліть 3D модель на {CONTACT_INFO.email.label}</li>
                  <li>2. Вкажіть бажаний матеріал та кількість</li>
                  <li>3. Отримайте детальну пропозицію протягом 2-4 годин</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-base-200 py-16 lg:py-20">
        <div className="custom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-primary mb-12 text-3xl font-bold lg:text-4xl">
              Чому обирають нас?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="text-primary mb-4 text-5xl font-bold">15+</div>
                <h3 className="mb-2 text-lg font-semibold">Років досвіду</h3>
                <p className="text-base-content/70">
                  Експертиза в адитивному виробництві та 3D-друку
                </p>
              </div>

              <div>
                <div className="text-primary mb-4 text-5xl font-bold">24h</div>
                <h3 className="mb-2 text-lg font-semibold">Швидка пропозиція</h3>
                <p className="text-base-content/70">
                  Отримайте детальний розрахунок протягом доби
                </p>
              </div>

              <div>
                <div className="text-primary mb-4 text-5xl font-bold">100%</div>
                <h3 className="mb-2 text-lg font-semibold">Гарантія якості</h3>
                <p className="text-base-content/70">
                  Контроль якості на всіх етапах виробництва
                </p>
              </div>
            </div>

            <div className="mt-12">
              <ButtonLink
                href={NAVIGATION.services.href}
                variant="outlined"
                size="large"
              >
                Дізнатися більше про послуги
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
