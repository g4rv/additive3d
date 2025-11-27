import { FadeIn, StaggerChildren } from '@/components/animations';
import BgPattern from '@/components/ui/bg-pattern';
import ButtonLink from '@/components/ui/button-link';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

/**
 * Contact - Professional contact page for Additive3D manufacturing services
 * Features comprehensive contact information, office locations, and inquiry forms
 *
 * Key Features:
 * - Multiple contact methods (phone, email, form)
 * - Office locations with working hours
 * - Service-specific inquiry options
 * - Professional manufacturing business focus
 * - Quick response guarantee
 *
 * @example
 * <Contact />
 */
export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Телефон',
      content: '+38 (044) 123-45-67',
      subcontent: 'Пн-Пт: 9:00 - 18:00',
      action: {
        label: 'Подзвонити',
        href: 'tel:+380441234567',
      },
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'info@additive3d.com.ua',
      subcontent: 'Відповідь протягом 2 годин',
      action: {
        label: 'Написати лист',
        href: 'mailto:info@additive3d.com.ua',
      },
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Адреса',
      content: 'м. Київ, вул. Промислова, 15',
      subcontent: 'Офіс та виробничий цех',
      action: {
        label: 'На картах',
        href: 'https://maps.google.com',
      },
    },
  ];

  const offices = [
    {
      city: 'Київ (Головний офіс)',
      address: 'вул. Промислова, 15',
      phone: '+38 (044) 123-45-67',
      email: 'kiev@additive3d.com.ua',
      hours: 'Пн-Пт: 9:00 - 18:00',
      services: ['3D друк', '3D сканування', 'Консультації'],
    },
    {
      city: 'Львів (Західний регіон)',
      address: 'вул. Технологічна, 8',
      phone: '+38 (032) 123-45-67',
      email: 'lviv@additive3d.com.ua',
      hours: 'Пн-Пт: 10:00 - 17:00',
      services: ['3D друк FDM', 'Консультації'],
    },
  ];

  const inquiryTypes = [
    {
      title: 'Нове замовлення',
      description: 'Розрахунок вартості та консультація по виробництву',
      icon: '🏭',
      link: '/services/3d-printing/calculator',
    },
    {
      title: 'Технічна підтримка',
      description: 'Допомога з існуючими замовленнями та технічні питання',
      icon: '🔧',
      link: 'mailto:support@additive3d.com.ua',
    },
    {
      title: 'Партнерство',
      description: 'Співпраця, дилерські умови та корпоративні клієнти',
      icon: '🤝',
      link: 'mailto:partners@additive3d.com.ua',
    },
    {
      title: "Кар'єра",
      description: 'Вакансії та приєднання до нашої команди',
      icon: '👥',
      link: 'mailto:hr@additive3d.com.ua',
    },
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
                Зв&apos;яжіться з <span className="text-primary">Additive3D</span>
              </h1>
              <p className="text-base-content/90 text-xl leading-relaxed md:text-2xl">
                Професійні адитивні рішення для вашого бізнесу. Наша команда готова відповісти на
                всі ваші питання та запропонувати оптимальні рішення для 3D друку.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="bg-base-100 py-16">
        <div className="custom-container">
          <StaggerChildren
            staggerDelay={0.1}
            childDelay={0.2}
            direction="up"
            className="grid gap-8 md:grid-cols-3"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-base-200 border-primary/20 rounded-xl border-2 p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="text-primary mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-base-content mb-2 text-xl font-bold">{info.title}</h3>
                <p className="text-base-content mb-1 text-lg font-semibold">{info.content}</p>
                <p className="text-base-content/70 mb-4">{info.subcontent}</p>
                <ButtonLink href={info.action.href} variant="secondary" className="w-full">
                  {info.action.label}
                </ButtonLink>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-base-200 py-16">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Наші <span className="text-primary">офіси</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Ми маємо представництва у ключових регіонах України для зручного обслуговування
                клієнтів
              </p>
            </header>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            {offices.map((office, index) => (
              <FadeIn key={index} direction="up" delay={0.2 * index}>
                <div className="bg-base-100 rounded-xl p-8 shadow-lg">
                  <h3 className="text-base-content text-primary mb-4 text-2xl font-bold">
                    {office.city}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="text-base-content font-medium">{office.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="text-base-content font-medium">{office.phone}</p>
                        <p className="text-base-content/70 text-sm">{office.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="text-base-content font-medium">{office.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="text-base-content mb-2 font-medium">Послуги:</p>
                        <div className="flex flex-wrap gap-2">
                          {office.services.map((service, i) => (
                            <span
                              key={i}
                              className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="bg-base-100 py-16">
        <div className="custom-container">
          <FadeIn direction="up">
            <header className="mb-12 text-center">
              <h2 className="text-base-content mb-4 text-3xl font-bold md:text-4xl">
                Чим ми можемо <span className="text-primary">допомогти?</span>
              </h2>
              <p className="text-base-content/80 mx-auto max-w-2xl text-lg">
                Оберіть тип звернення для швидкого отримання відповіді
              </p>
            </header>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            childDelay={0.3}
            direction="up"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {inquiryTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-base-200 cursor-pointer rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{type.icon}</div>
                <h3 className="text-base-content group-hover:text-primary mb-2 text-lg font-bold transition-colors">
                  {type.title}
                </h3>
                <p className="text-base-content/70 mb-4">{type.description}</p>
                <ButtonLink
                  href={type.link}
                  variant="secondary"
                  className="group-hover:bg-primary group-hover:text-primary-content w-full transition-colors"
                >
                  {type.title.includes('замовлення') ? 'Розрахувати' : 'Звернутись'}
                </ButtonLink>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Quick Response CTA */}
      <section className="bg-hero-gradient relative py-16">
        <BgPattern pattern="dots" size={30} color="rgb(255, 210, 49)" opacity={0.15} />

        <div className="custom-container">
          <FadeIn direction="up">
            <div className="bg-base-100/95 border-primary/20 mx-auto max-w-4xl rounded-2xl border-2 p-12 text-center backdrop-blur-sm">
              <div className="text-primary mb-6 flex justify-center">
                <Send className="h-12 w-12" />
              </div>
              <h2 className="text-base-content mb-4 text-3xl font-bold">
                Швидка відповідь гарантована
              </h2>
              <p className="text-base-content/80 mb-8 text-lg">
                Ми відповідаємо на всі звернення протягом 2 робочих годин. Для термінових замовлень
                телефонуйте безпосередньо.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="tel:+380441234567" variant="secondary" className="btn-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Терміновий дзвінок
                </ButtonLink>
                <ButtonLink
                  href="/services/3d-printing/calculator"
                  variant="outlined"
                  className="btn-lg border-2"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Онлайн розрахунок
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
