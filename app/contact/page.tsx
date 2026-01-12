import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { COMPANY_NAME, CONTACT_INFO, NAVIGATION } from '@/lib/constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Контакти - Зв\'яжіться з нами',
  description: 'Телефони, email, адреса виробництва Additive3D. Відповідаємо протягом 2-4 годин у робочі дні. Миттєвий розрахунок вартості 3D друку онлайн.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <HeroFancy
        title="Зв'яжіться з"
        highlight={COMPANY_NAME}
        description="Готові відповісти на ваші запитання та допомогти з реалізацією проєкту"
      />

      {/* Main Contact Section */}
      <section className="bg-base-100 relative isolate py-16 lg:py-24">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-5xl">
            {/* Primary Contact Methods */}
            <div className="mb-16 grid gap-8 2xl:grid-cols-3">
              {/* Phone */}
              <div className="bg-base-200 group border-base-300 hover:border-primary/50 rounded-lg border p-8 transition-all duration-(--duration-moderate) hover:shadow-lg">
                <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-(--duration-fast)">
                  <Phone className="h-8 w-8" />
                </div>

                <h3 className="text-primary mb-4 text-2xl font-bold">Телефон</h3>

                <p className="text-base-content/70 mb-6 leading-relaxed">
                  Зателефонуйте для термінових питань та консультацій
                </p>

                <div className="space-y-3">
                  <ButtonLink href={CONTACT_INFO.phone.link} variant="string" className="text-base text-start">
                    {CONTACT_INFO.phone.label}
                  </ButtonLink>
                  <ButtonLink
                    href={CONTACT_INFO.phone2.link}
                    variant="string"
                    className="text-base text-start"
                  >
                    {CONTACT_INFO.phone2.label}
                  </ButtonLink>
                </div>
              </div>

              {/* Email */}
              <div className="bg-base-200 group border-base-300 hover:border-primary/50 rounded-lg border p-8 transition-all duration-(--duration-moderate) hover:shadow-lg">
                <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-(--duration-fast)">
                  <Mail className="h-8 w-8" />
                </div>

                <h3 className="text-primary mb-4 text-2xl font-bold">Email</h3>

                <p className="text-base-content/70 mb-6 leading-relaxed">
                  Надішліть технічну документацію та деталі проєкту
                </p>

                <ButtonLink
                  href={CONTACT_INFO.email.link}
                  variant="string"
                  className="text-base break-all text-start"
                >
                  {CONTACT_INFO.email.label}
                </ButtonLink>
              </div>

              {/* Location */}
              <div className="bg-base-200 group border-base-300 hover:border-primary/50 rounded-lg border p-8 transition-all duration-(--duration-moderate) hover:shadow-lg">
                <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-(--duration-fast)">
                  <MapPin className="h-8 w-8" />
                </div>

                <h3 className="text-primary mb-4 text-2xl font-bold">Адреса</h3>

                <p className="text-base-content/70 mb-6 leading-relaxed">
                  Відвідайте наше виробництво за попереднім записом
                </p>

                <ButtonLink
                  href={CONTACT_INFO.address.link}
                  variant="string"
                  className="text-base text-start"
                >
                  {CONTACT_INFO.address.label}
                </ButtonLink>
              </div>
            </div>

            {/* Instant Quote CTA */}
            <div className="bg-base-200 border-base-300 overflow-hidden rounded-lg border">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="bg-primary/10 text-primary mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg">
                    <Send className="h-7 w-7" />
                  </div>

                  <h2 className="text-primary mb-4 text-3xl font-bold lg:text-4xl">
                    Миттєвий розрахунок
                  </h2>

                  <p className="text-base-content/80 mb-8 text-lg leading-relaxed">
                    Завантажте 3D модель та отримайте детальну оцінку вартості за кілька секунд
                  </p>

                  <ButtonLink
                    href={NAVIGATION.calculator.href}
                    variant="secondary"
                    size="large"
                    className="w-full transition-all duration-(--duration-moderate) hover:scale-[1.02] sm:w-auto"
                  >
                    Перейти до калькулятора
                  </ButtonLink>
                </div>

                <div className="bg-base-300/30 flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="mb-6 text-2xl font-bold">Години роботи</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base-content/70">Понеділок - П&apos;ятниця</span>
                      <span className="text-primary font-bold">09:00 - 18:00</span>
                    </div>

                    <div className="border-base-300 border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-base-content/70">Субота - Неділя</span>
                        <span className="text-primary font-bold">10:00 - 16:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-warning/10 border-warning/30 mt-6 rounded border-l-4 p-4">
                    <p className="text-base-content/80 text-sm">
                      <strong className="text-warning">Увага:</strong> Для термінових замовлень
                      можливе виробництво поза робочими годинами
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="bg-base-200 py-16 lg:py-20">
        <div className="custom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-primary mb-4 text-3xl font-bold lg:text-4xl">Час відповіді</h2>
            <p className="text-base-content/80 mx-auto mb-12 max-w-2xl text-lg">
              Ми цінуємо ваш час і відповідаємо якомога швидше
            </p>

            <div className="grid gap-8 2xl:grid-cols-3">
              <div className="bg-base-100 border-base-300 rounded-lg border p-8">
                <div className="text-primary mb-4 text-5xl font-bold">2-4 год</div>
                <h3 className="mb-2 text-lg font-semibold">Email запити</h3>
                <p className="text-base-content/70 text-sm">
                  Відповідаємо на технічні питання протягом робочого дня
                </p>
              </div>

              <div className="bg-base-100 border-base-300 rounded-lg border p-8">
                <div className="text-primary mb-4 text-5xl font-bold">24 год</div>
                <h3 className="mb-2 text-lg font-semibold">Комерційна пропозиція</h3>
                <p className="text-base-content/70 text-sm">
                  Детальний розрахунок вартості з усіма специфікаціями
                </p>
              </div>

              <div className="bg-base-100 border-base-300 rounded-lg border p-8">
                <div className="text-primary mb-4 text-5xl font-bold">Миттєво</div>
                <h3 className="mb-2 text-lg font-semibold">Телефонні дзвінки</h3>
                <p className="text-base-content/70 text-sm">
                  Прямий контакт з інженером в робочі години
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
