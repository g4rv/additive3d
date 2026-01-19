import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import { generateServiceSchema, StructuredData } from '@/lib/structured-data';
import { createMetadata } from '@/lib/metadata';
import {
  Award,
  BarChart3,
  CheckCircle,
  Layers,
  Package,
  Settings,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata = createMetadata({
  title: '3D друк: MJF, FDM, LFAM технології',
  description:
    'Професійний 3D друк в Україні на обладнанні HP, Stratasys, HERON. MJF, FDM, LFAM технології для прототипів і серійного виробництва. Точність до ±0.1мм ⚡ Замовити 3D друк в Києві',
  path: '/services/3d-printing',
  keywords: [
    '3D друк',
    'MJF друк',
    'FDM друк',
    'LFAM друк',
    'промисловий 3D друк',
    '3D друк Київ',
    'серійний 3D друк',
    'прототипування 3D',
    'HP Multi Jet Fusion',
    'великогабаритний 3D друк',
    'замовити 3D друк',
    '3D printing Ukraine',
  ],
});

export default function ThreeDPrintingPage() {
  // Generate Service schema for 3D printing
  const serviceSchema = generateServiceSchema({
    name: 'Послуги 3D друку: MJF, FDM, LFAM',
    description:
      'Професійний 3D друк на обладнанні HP, Stratasys, HERON. MJF, FDM, LFAM технології для прототипування та серійного виробництва',
    provider: {
      name: 'Additive3D',
      url: 'https://additive3d.com.ua',
    },
    serviceType: '3D Printing Service',
    areaServed: 'Ukraine',
    url: 'https://additive3d.com.ua/services/3d-printing',
  });

  const technologies = [
    {
      title: 'MJF (Multi Jet Fusion)',
      description:
        'Високотехнологічний метод 3D-друку від HP для серійного виробництва з надзвичайною деталізацією та однорідними механічними властивостями.',
      icon: Zap,
      features: [
        'Висока швидкість друку (до 5058 см³/год)',
        'Велика робоча камера (380 × 284 × 380 мм)',
        'Висока точність (±0.2 мм або ±0.3%)',
        'Відсутність потреби у підтримках',
      ],
      image: '/Technology/MJF/mjf-printed-models.jpg',
    },
    {
      title: 'FDM (Fused Deposition Modeling)',
      description:
        'Надійна технологія адитивного виробництва для створення функціональних прототипів та складних технічних деталей.',
      icon: Settings,
      features: [
        'Висока точність та повторюваність',
        'Широкий вибір інженерних матеріалів',
        'Економічно вигідне рішення',
        'Розчинні підтримки для складних геометрій',
      ],
      image: '/Technology/FDM/Fortus 400mc/fortus-400mc.jpg',
    },
    {
      title: 'LFAM (Large Format Additive Manufacturing)',
      description:
        'Промислова платформа великоформатного адитивного виробництва для виготовлення великих та складних полімерних деталей.',
      icon: Package,
      features: [
        'Розміри робочої зони: 3000 × 1500 × 1000 мм',
        'Продуктивність: до 8 кг/год',
        'Роботизований маніпулятор KUKA',
        'EIDOS Builder програмне забезпечення',
      ],
      image: '/Technology/LFAM/HERON 300 HV/heron-300-hv-printing.jpg',
    },
  ];

  const materials = [
    {
      technology: 'MJF',
      materials: ['PA12 (Nylon 12)'],
      properties: ['Висока міцність', 'Хімічна стійкість', 'Стабільність розмірів'],
    },
    {
      technology: 'FDM',
      materials: ['ABS', 'ASA', 'PC', 'Ultem™ 9085', 'ABS-PC'],
      properties: ['Висока термостійкість', 'Ударна міцність', 'Технічна точність'],
    },
    {
      technology: 'LFAM',
      materials: ['PP +35% GF', 'ABS +30% GF', 'ASA +20% GF', 'PETG +20% GF', 'PC +20% CF'],
      properties: ['Висока жорсткість', 'Армування', 'Великий вибір'],
    },
  ];

  const advantages = [
    {
      title: 'Швидкість виготовлення',
      description: 'Оперативне виробництво від прототипів до серійних партій',
      icon: Zap,
    },
    {
      title: 'Висока точність',
      description: 'Точність виготовлення до ±0.1 мм для відповідних технологій',
      icon: Target,
    },
    {
      title: 'Широкий вибір матеріалів',
      description: 'Інженерні термопластики для будь-яких завдань',
      icon: Package,
    },
    {
      title: 'Складна геометрія',
      description: 'Виготовлення деталей неможливих традиційними методами',
      icon: Layers,
    },
    {
      title: 'Серійне виробництво',
      description: 'Ефективне виробництво партій від 10 до 1000+ одиниць',
      icon: BarChart3,
    },
    {
      title: 'Контроль якості',
      description: 'Перевірка відповідності CAD-моделям та технічним вимогам',
      icon: CheckCircle,
    },
  ];

  const applications = [
    'Автомобільна промисловість',
    'Корпуси електроніки',
    'Оснащення та кріплення',
    'Медичні пристрої',
    'Аерокосмічна галузь',
    'Промислові корпуси',
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />
      <HeroFancy
        title="3D-друк"
        description="Професійні технології адитивного виробництва для прототипування та серійного виробництва"
      />

      {/* Technologies Overview Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Технології 3D-друку</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Використовуємо сучасні технології 3D-друку для вирішення найскладніших інженерних
              завдань
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-200 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <figure className="aspect-video">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="card-body p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="bg-primary/10 text-primary rounded-lg p-3">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-primary text-xl font-semibold">{tech.title}</h3>
                    </div>
                    <p className="text-base-content/90 mb-4 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="bg-primary/20 text-primary mt-0.5 size-1.5 shrink-0 rounded-full" />
                          <span className="text-base-content/80 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">Матеріали та технології</h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Широкий вибір інженерних термопластиків для різних технологій друку
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {materials.map((material, index) => (
              <div key={index} className="card bg-base-100 border-base-300 shadow-sm">
                <div className="card-body p-6">
                  <h3 className="text-primary mb-3 text-xl font-semibold">{material.technology}</h3>
                  <div className="mb-4">
                    <h4 className="text-base-content mb-2 font-medium">Матеріали:</h4>
                    <div className="flex flex-wrap gap-2">
                      {material.materials.map((mat, matIndex) => (
                        <span
                          key={matIndex}
                          className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base-content mb-2 font-medium">Властивості:</h4>
                    <div className="space-y-1">
                      {material.properties.map((prop, propIndex) => (
                        <div key={propIndex} className="flex items-center gap-2">
                          <div className="bg-primary/20 text-primary size-1.5 rounded-full" />
                          <span className="text-base-content/80 text-sm">{prop}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Technology Showcase */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="card bg-base-200 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src="/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-with-build-unit.png"
                  alt="HP Jet Fusion 5200 з блоком побудови"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-200 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src="/Technology/LFAM/HERON 300 HV/heron-300-hv-printing-3.jpg"
                  alt="Друк на HERON 300 HV"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-200 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src="/Technology/FDM/Fortus 250/fortus-250-printing.jpg"
                  alt="Процес друку FDM"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            <div className="card bg-base-200 border-base-300 overflow-hidden shadow-sm">
              <figure className="aspect-video">
                <Image
                  src="/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-process.jpg"
                  alt="Технологічний процес MJF"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-primary text-3xl font-bold lg:text-4xl">
              Переваги адитивного виробництва
            </h2>
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
              Сучасний підхід до виробництва з високою ефективністю та гнучкістю
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="card bg-base-100 border-base-300 shadow-sm transition-all duration-[var(--duration-moderate)] hover:shadow-md"
                >
                  <div className="card-body p-6">
                    <div className='flex items-center gap-6 mb-2'>
                      <div className="bg-primary/10 text-primary   inline-flex size-12 items-center justify-center rounded-lg">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-primary   text-lg font-semibold">{advantage.title}</h3>
                    </div>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-base-100 relative isolate py-8 lg:py-16">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="card bg-base-200 border-base-300 shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-primary/10 text-primary mb-4 inline-flex size-12 items-center justify-center rounded-lg">
                      <Users className="size-6" />
                    </div>
                    <h2 className="text-primary mb-4 text-2xl font-semibold lg:text-3xl">
                      Галузі застосування
                    </h2>
                  </div>
                  <p className="text-base-content/90 text-lg leading-relaxed">
                    Наші технології 3D-друку використовуються у різних галузях промисловості
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-primary/20 text-primary size-2 rounded-full" />
                      <span className="text-base-content/80">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="bg-base-200 relative isolate py-8 lg:py-16">
        <BgPattern pattern="grid" opacity={0.03} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="card bg-primary/5 border-primary/20 border shadow-sm">
              <div className="card-body p-8 lg:p-12">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-6">
                      <div className="bg-primary/10 text-primary rounded-lg p-3">
                        <Award className="size-8" />
                      </div>
                      <h3 className="text-primary text-2xl font-bold">Гарантія якості</h3>
                    </div>
                    <div className="text-base-content/90 space-y-4 text-lg leading-relaxed">
                      <p>
                        Ми забезпечуємо точність виготовлення, підбір оптимального матеріалу під
                        ваші задачі та високу якість готових виробів. Готові до співпраці як з
                        інженерами, так і з дизайнерами — від прототипу до готової продукції.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="text-primary size-5 flex-shrink-0" />
                          <span className="text-base-content/80">
                            Контроль якості на всіх етапах
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="text-primary size-5 flex-shrink-0" />
                          <span className="text-base-content/80">
                            Відповідність технічним вимогам
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="text-primary size-5 flex-shrink-0" />
                          <span className="text-base-content/80">
                            Документовані параметри якості
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="text-primary size-5 flex-shrink-0" />
                          <span className="text-base-content/80">
                            Індивідуальний підхід до кожного проєкту
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
