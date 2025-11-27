import { FadeIn, StaggerChildren } from '@/components/animations';
import { Hero2 } from '@/components/hero';
import Section from '@/components/ui/Section';
import ButtonLink from '@/components/ui/button-link';
import { Award, CheckCircle, Gauge, Layers, Star, Zap } from 'lucide-react';
import { notFound } from 'next/navigation';

interface EquipmentData {
  slug: string;
  name: string;
  technology: string;
  description: string;
  fullDescription: string;
  image: string;
  specifications: Record<string, string>;
  applications: string[];
  advantages: string[];
  keyFeatures: string[];
  industryCertifications?: string[];
}

const equipmentData: Record<string, EquipmentData> = {
  'hp-jet-fusion-5200': {
    slug: 'hp-jet-fusion-5200',
    name: 'HP Jet Fusion 5200',
    technology: 'MJF (Multi Jet Fusion)',
    description:
      'Високопродуктивна система для серійного виробництва деталей зі складною геометрією, високою точністю та однорідними механічними властивостями.',
    fullDescription:
      'HP Jet Fusion 5200 — це провідне рішення для промислового адитивного виробництва, що забезпечує виняткову швидкість, якість та економічну ефективність. Система використовує інноваційну технологію Multi Jet Fusion для створення функціональних деталей з властивостями, порівнянними з литими пластиком. Ідеально підходить для серійного виробництва від сотень до тисяч одиниць з консистентною якістю.',
    image: '/hp-jet-fusion-5200.png',
    specifications: {
      'Робоча камера': '380 × 284 × 380 мм',
      'Товщина шару': '80 мкм',
      Матеріали: 'PA12, PA11, TPU, PP',
      'Швидкість друку': 'До 5058 см³/год',
      Точність: '±0.2 мм або ±0.3%',
      Побудова: '11300 см³ за 8 годин',
      Охолодження: 'Вбудована система охолодження',
      'Пост-обробка': 'Автоматизовані модулі',
      Температура: 'Керована термостабілізація',
      'Програмне забезпечення': 'HP 3D Center',
    },
    applications: [
      'Серійне виробництво функціональних деталей',
      'Прототипи з високою точністю',
      'Медичні пристрої та імпланти',
      'Автомобільні компоненти',
      'Корпуси електроніки',
      'Технологічна оснастка',
      'Споживчі товари',
      'Аерокосмічні компоненти',
    ],
    advantages: [
      'Найвища швидкість друку в своєму класі',
      'Відмінна механічна однорідність деталей',
      'Не потребує підтримок',
      'Масове виробництво за один цикл',
      'Стабільна якість та повторюваність',
      'Низька вартість деталі при серійному виробництві',
    ],
    keyFeatures: [
      '3D-друк зі швидкістю до 10 разів швидше за FDM',
      'Висока щільність деталей без порожнин',
      'Оптимальні механічні властивості у всіх напрямках',
      'Широкий спектр інженерних матеріалів',
      'Автоматизований робочий процес',
    ],
    industryCertifications: ['ISO 9001', 'ISO 13485', 'AS9100'],
  },
  'stratasys-fortus-250mc': {
    slug: 'stratasys-fortus-250mc',
    name: 'Stratasys Fortus 250mc',
    technology: 'FDM (Fused Deposition Modeling)',
    description:
      'Професійна система для виготовлення точних і міцних пластикових деталей зі стабільною якістю.',
    fullDescription:
      'Stratasys Fortus 250mc — це надійна промислова 3D-принтер, розроблений для виробництва функціональних прототипів та кінцевих деталей з високою точністю. Система забезпечує стабільну якість друку завдяки керованій температурі виробництва та використанню інженерних матеріалів. Ідеально підходить для машинобудування, автомобільної промисловості та виробництва технологічної оснастки.',
    image: '/stratasys-fortus-250mc.png',
    specifications: {
      'Робоча камера': '254 × 254 × 305 мм',
      'Мін. товщина шару': '0.178 мм',
      'Макс. товщина шару': '0.254 мм',
      Матеріали: 'ABS-M30, ABS-M30i',
      'Точність друку': '±0.1 – 0.2 мм',
      'Підігрів платформи': 'Так (до 100°C)',
      'Камера з підігрівом': 'Так (до 70°C)',
      Підтримки: 'Розчинні (S support)',
      'Розмір сопла': '0.254 мм',
      'Програмне забезпечення': 'Insight',
      "З'єднання": 'USB, Ethernet',
    },
    applications: [
      'Функціональні прототипи',
      'Виробничі компоненти',
      'Технологічна оснастка',
      'Машинобудування',
      'Автомобільна промисловість',
      'Електротехнічні компоненти',
      'Корпуси приладів',
      'Інструменти та приспосіблення',
    ],
    advantages: [
      'Висока точність та стабільність',
      'Надійні інженерні матеріали',
      'Розчинні підтримки для складних геометрій',
      'Керована температура виробництва',
      'Професійна якість поверхні',
      'Стабільні механічні властивості',
    ],
    keyFeatures: [
      'Керована температура виробництва для мінімізації деформації',
      'Високоміцний матеріал ABS-M30 з покращеними властивостями',
      'Автоматична калібровка системи',
      'Система рециркуляції матеріалу',
      'Інтеграція з CAD системами',
    ],
    industryCertifications: ['CE', 'UL'],
  },
  'stratasys-fortus-400mc': {
    slug: 'stratasys-fortus-400mc',
    name: 'Stratasys Fortus 400mc',
    technology: 'FDM (Fused Deposition Modeling)',
    description:
      'Потужна система адитивного виробництва, призначена для створення функціональних прототипів, складних технічних деталей та малосерійного виробництва.',
    fullDescription:
      'Stratasys Fortus 400mc — це промисловий 3D-принтер високого класу, що поєднує виняткову точність, широкий вибір інженерних матеріалів та велику робочу камеру. Система розроблена для виробництва складних деталей з вимогливими характеристиками, включаючи авіаційні та медичні компоненти. Забезпечує стабільну якість та повторюваність результатів.',
    image: '/stratasys-fortus-400mc.jpg',
    specifications: {
      'Робоча камера': '406 × 355 × 406 мм',
      'Точність друку': '±0.089 мм або ±0.0015 мм/мм',
      'Товщина шару': '0.127 – 0.330 мм',
      Матеріали: 'ABS-M30, PC, PC-ABS, ULTEM 9085, ULTEM 1010, PPSF, ASA, Nylon 12',
      'Система підтримок': 'Розчинні підтримки SR-30 / SR-100',
      'Програмне забезпечення': 'GrabCAD Print / Insight',
      "З'єднання": 'Ethernet, USB',
      'Розмір сопла': '0.178 - 0.406 мм',
      'Температура екструдера': 'до 280°C',
      'Підігрів платформи': 'до 120°C',
      Вага: '816 кг',
    },
    applications: [
      'Прототипування',
      'Функціональні випробування',
      'Виробництво оснастки та кінцевих деталей',
      'Авіаційна промисловість',
      'Автомобільна промисловість',
      'Медична галузь',
      'Виробництво інструментів',
      'Електроніка та телекомунікації',
    ],
    advantages: [
      'Висока точність та повторюваність',
      'Промислові матеріали з сертифікацією',
      'Гнучкість у виробництві',
      'Автоматизація процесів',
      'Сумісність із корпоративними CAD-системами',
      'Велика робоча камера',
      'Широкий спектр високотемпературних матеріалів',
    ],
    keyFeatures: [
      'Підтримка сертифікованих авіаційних матеріалів ULTEM 9085',
      'Висока продуктивність для великих деталей',
      'Автоматизоване керування процесом друку',
      'Система контролю якості в реальному часі',
      'Можливість друку з термопластичних композитів',
      'Оптимізоване використання матеріалу',
    ],
    industryCertifications: ['ISO 9001', 'AS9100', 'ISO 13485', 'FAR 25.853'],
  },
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const equipment = equipmentData[slug];

  if (!equipment) {
    notFound();
  }

  return (
    <main className="min-h-no-header-screen">
      {/* Hero Section */}
      <Hero2
        title={equipment.name}
        subtitle={equipment.technology}
        description={equipment.description}
        image={equipment.image}
        imageAlt={`${equipment.name} - ${equipment.technology}`}
        features={equipment.keyFeatures.slice(0, 4)}
        cta={{ text: 'Отримати консультацію', href: '/contact' }}
      />

      {/* Full Description */}
      <Section>
        <FadeIn direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base-content/80 text-lg leading-relaxed">
              {equipment.fullDescription}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Specifications */}
      <Section className="bg-base-200">
        <FadeIn direction="up">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 flex items-center justify-center gap-3 text-center text-3xl font-bold">
              <Gauge className="text-primary h-8 w-8" />
              Технічні характеристики
            </h2>
            <p className="text-base-content/70 mb-12 text-center">
              Детальні специфікації обладнання для вашого проєкту
            </p>
            <div className="bg-base-100 border-base-content/10 rounded-2xl border p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(equipment.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="border-base-content/10 flex items-center justify-between border-b py-3 last:border-0"
                  >
                    <span className="text-base-content/70 font-semibold">{key}</span>
                    <span className="text-base-content text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Applications */}
      <Section>
        <FadeIn direction="up">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-center text-3xl font-bold">Застосування</h2>
            <p className="text-base-content/70 mx-auto mb-12 max-w-2xl text-center">
              Широкий спектр промислових застосувань для різних галузей
            </p>
            <StaggerChildren staggerDelay={0.05}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {equipment.applications.map((application, index) => (
                  <FadeIn key={index} direction="up">
                    <div className="bg-base-200 border-base-content/10 hover:border-primary/30 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex-shrink-0 rounded-lg p-2">
                          <CheckCircle className="text-primary h-5 w-5" />
                        </div>
                        <span className="font-medium">{application}</span>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </FadeIn>
      </Section>

      {/* Key Features */}
      <Section className="bg-base-200">
        <FadeIn direction="up">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 flex items-center justify-center gap-3 text-center text-3xl font-bold">
              <Zap className="text-primary h-8 w-8" />
              Ключові можливості
            </h2>
            <p className="text-base-content/70 mb-12 text-center">
              Унікальні технологічні переваги обладнання
            </p>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {equipment.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-base-100 border-base-content/10 hover:border-primary/30 rounded-xl border p-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 flex-shrink-0 rounded-lg p-3">
                      <Layers className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Можливість {index + 1}</h3>
                      <p className="text-base-content/80">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Industry Certifications */}
      {equipment.industryCertifications && equipment.industryCertifications.length > 0 && (
        <Section>
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-3 flex items-center justify-center gap-3 text-center text-3xl font-bold">
                <Award className="text-primary h-8 w-8" />
                Галузеві сертифікати
              </h2>
              <p className="text-base-content/70 mb-12 text-center">
                Відповідність міжнародним стандартам якості
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {equipment.industryCertifications.map((certification, index) => (
                  <div
                    key={index}
                    className="bg-primary/10 border-primary/20 hover:border-primary/40 rounded-xl border-2 px-8 py-4 transition-all duration-300"
                  >
                    <span className="text-primary text-lg font-bold">{certification}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* Advantages */}
      <Section className="bg-base-200">
        <FadeIn direction="up">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 flex items-center justify-center gap-3 text-center text-3xl font-bold">
              <Star className="text-primary h-8 w-8" />
              Переваги обладнання
            </h2>
            <p className="text-base-content/70 mb-12 text-center">
              Чому саме це обладнання оптимальне для вашого виробництва
            </p>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {equipment.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 flex-shrink-0 rounded-lg p-3">
                    <Star className="text-primary fill-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Перевага {index + 1}</h3>
                    <p className="text-base-content/70">{advantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-content">
        <FadeIn direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Готові використати {equipment.name}?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Отримайте консультацію від наших інженерів та розрахуйте вартість вашого проєкту
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink
                href="/services/3d-printing/calculator"
                variant="secondary"
                className="bg-base-100 text-base-content hover:bg-base-200 border-none"
              >
                Розрахувати вартість
              </ButtonLink>
              <ButtonLink
                href="/contact"
                className="border-primary-content/30 hover:border-primary-content hover:bg-primary-content/10 border-2"
              >
                Консультація
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}
