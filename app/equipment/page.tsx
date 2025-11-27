import { FadeIn, StaggerChildren } from '@/components/animations';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import ButtonLink from '@/components/ui/button-link';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Gauge, Layers, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Наше обладнання | Additive3D',
  description:
    'Промислове 3D-друкарське обладнання Stratasys та HP для серійного виробництва та прототипування.',
};

const equipment = [
  {
    id: 'hp-jet-fusion-5200',
    name: 'HP Jet Fusion 5200',
    technology: 'MJF Technology',
    tagline: 'Серійне виробництво',
    description:
      'Високопродуктивна промислова система для серійного виробництва деталей зі складною геометрією. До 800 деталей на тиждень.',
    image: '/equipment/hp-jet-fusion-5200.png',
    specs: {
      buildVolume: '380 × 284 × 380 мм',
      layerThickness: '80 мкм',
      materials: 'PA12',
      speed: '5058 мм/сек',
    },
    features: [
      '2 повні збірки за 24 години',
      'До 800 деталей на тиждень',
      'Cpk 1.33 для IT13/IT14',
      'Автоматизоване охолодження',
    ],
    badge: 'Висока продуктивність',
    href: '/equipment/hp-jet-fusion-5200',
  },
  {
    id: 'fortus-400mc',
    name: 'Stratasys Fortus 400mc',
    technology: 'FDM Technology',
    tagline: 'Універсальне рішення',
    description:
      'Потужна FDM-система з найширшим вибором матеріалів. Підтримує високопродуктивні матеріали, включаючи ULTEM та PPSF.',
    image: '/equipment/stratasys-fortus-400mc.png',
    specs: {
      buildVolume: '406 × 355 × 406 мм',
      layerThickness: '0.127 мм (мін)',
      materials: '12+ варіантів',
      accuracy: '±0.127 мм',
    },
    features: [
      'Найширший вибір матеріалів',
      'Подвійні екструдери',
      'Шар до 0.127 мм',
      'Розчинні підтримки',
    ],
    badge: 'Максимальна гнучкість',
    href: '/equipment/stratasys-fortus-400mc',
  },
  {
    id: 'fortus-250mc',
    name: 'Stratasys Fortus 250mc',
    technology: 'FDM Technology',
    tagline: 'Професійна якість',
    description:
      'Надійна система для виробництва точних і міцних пластикових деталей зі стабільною якістю та повторюваністю.',
    image: '/equipment/stratasys-fortus-250mc.png',
    specs: {
      buildVolume: '254 × 254 × 305 мм',
      layerThickness: '0.178 мм',
      materials: 'ABS P430',
      accuracy: '±0.241 мм',
    },
    features: [
      'Розчинні підтримки SR-30',
      'Виробничий ABS P430',
      '9 кольорових опцій',
      'Точність ±0.241 мм',
    ],
    badge: 'Стабільність',
    href: '/equipment/stratasys-fortus-250mc',
  },
];

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        title="Наше обладнання"
        description="Ми використовуємо промислове 3D-друкарське обладнання світового класу, яке забезпечує стабільну якість, точність та повторюваність друку."
        breadcrumbs={[{ label: 'Обладнання', href: '/equipment' }]}
      />

      {/* Equipment Showcase */}
      <Section>
        <StaggerChildren staggerDelay={0.1} className="space-y-24">
          {equipment.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={item.id} direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                      <div className="relative bg-base-200 rounded-2xl p-8 border border-base-content/10 group-hover:border-primary/30 transition-colors duration-300">
                        <div className="relative aspect-video">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                      <Layers className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-semibold">{item.technology}</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-3">{item.name}</h2>

                    <p className="text-primary text-lg font-semibold mb-4">{item.tagline}</p>

                    <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Quick specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(item.specs).map(([key, value]) => (
                        <div key={key} className="bg-base-200 rounded-lg p-3 border border-base-content/10">
                          <p className="text-xs text-base-content/60 mb-1">
                            {key === 'buildVolume' && 'Робоча камера'}
                            {key === 'layerThickness' && 'Товщина шару'}
                            {key === 'materials' && 'Матеріали'}
                            {key === 'speed' && 'Швидкість'}
                            {key === 'accuracy' && 'Точність'}
                          </p>
                          <p className="text-sm font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-base-content/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <ButtonLink
                      href={item.href}
                      variant="primary"
                      className="group inline-flex items-center gap-2"
                    >
                      Детальніше
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </ButtonLink>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Comparison Section */}
      <Section className="bg-base-200">
        <FadeIn direction="up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Порівняння обладнання</h2>
            <p className="text-base-content/70 text-center mb-12 max-w-2xl mx-auto">
              Оберіть оптимальне рішення для вашого проєкту
            </p>

            <div className="overflow-x-auto bg-base-100 rounded-2xl border border-base-content/10">
              <table className="table w-full">
                <thead>
                  <tr className="bg-base-200 border-b border-base-content/10">
                    <th className="text-left font-bold">Характеристика</th>
                    <th className="text-center font-bold">Fortus 250mc</th>
                    <th className="text-center font-bold">HP 5200</th>
                    <th className="text-center font-bold">Fortus 400mc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-primary" />
                        Технологія
                      </div>
                    </td>
                    <td className="text-center">FDM</td>
                    <td className="text-center">MJF</td>
                    <td className="text-center">FDM</td>
                  </tr>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-primary" />
                        Макс. розмір деталі
                      </div>
                    </td>
                    <td className="text-center text-sm">254×254×305 мм</td>
                    <td className="text-center text-sm">380×284×380 мм</td>
                    <td className="text-center text-sm">406×355×406 мм</td>
                  </tr>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">Мін. товщина шару</td>
                    <td className="text-center">0.178 мм</td>
                    <td className="text-center">0.08 мм</td>
                    <td className="text-center">0.127 мм</td>
                  </tr>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Продуктивність
                      </div>
                    </td>
                    <td className="text-center">Середня</td>
                    <td className="text-center">
                      <span className="badge badge-primary badge-sm">Висока</span>
                    </td>
                    <td className="text-center">Середня-висока</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Кількість матеріалів</td>
                    <td className="text-center">1 (ABS)</td>
                    <td className="text-center">1 (PA12)</td>
                    <td className="text-center">
                      <span className="badge badge-primary badge-sm">12+</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Technology Categories */}
      <Section>
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Технології друку</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Дізнайтеся більше про наші технології адитивного виробництва
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/equipment/fdm"
              className="group bg-base-200 rounded-2xl p-8 border border-base-content/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-base-content/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-2xl font-bold mb-3">FDM обладнання</h3>
              <p className="text-base-content/70 mb-4">
                Stratasys Fortus 250mc та 400mc для виробництва міцних функціональних деталей
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-sm badge-outline">ABS</span>
                <span className="badge badge-sm badge-outline">PC</span>
                <span className="badge badge-sm badge-outline">ULTEM</span>
                <span className="badge badge-sm badge-outline">PPSF</span>
              </div>
            </Link>

            <Link
              href="/equipment/mjf"
              className="group bg-base-200 rounded-2xl p-8 border border-base-content/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-base-content/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-2xl font-bold mb-3">MJF обладнання</h3>
              <p className="text-base-content/70 mb-4">
                HP Jet Fusion 5200 для високопродуктивного серійного виробництва
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-sm badge-outline">PA12</span>
                <span className="badge badge-sm badge-outline">PA11</span>
                <span className="badge badge-sm badge-outline">TPU</span>
              </div>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-content">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Маєте запит на серійне виробництво?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Наше обладнання дозволяє реалізувати технічно складні завдання з максимальною
              ефективністю. Від прототипів до серійних деталей — ми підберемо оптимальне рішення.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="bg-base-100 text-base-content hover:bg-base-200 border-none"
              >
                Отримати консультацію
              </ButtonLink>
              <ButtonLink
                href="/services/3d-printing/calculator"
                className="border-2 border-primary-content/30 hover:border-primary-content hover:bg-primary-content/10"
              >
                Розрахувати вартість
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
