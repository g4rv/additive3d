import { FadeIn, StaggerChildren } from '@/components/animations';
import { Hero2 } from '@/components/hero';
import Section from '@/components/ui/Section';
import ButtonLink from '@/components/ui/button-link';
import { ArrowRight, CheckCircle, Gauge, Layers } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FDM обладнання | Additive3D',
  description:
    'Промислові FDM принтери Stratasys Fortus 400mc та 250mc. Виробничі термопластики для стабільного виробництва.',
};

const fdmEquipment = [
  {
    id: 'fortus-400mc',
    name: 'Stratasys Fortus 400mc',
    tagline: 'Максимальна гнучкість у виборі матеріалів',
    description:
      'Потужна FDM-система для створення функціональних прототипів та малосерійного виробництва. Підтримує високопродуктивні матеріали, включаючи ULTEM та PPSF. Незамінна в машинобудуванні, авіації та медицині.',
    image: '/stratasys-fortus-400mc.jpg',
    specs: {
      'Робоча камера (базова)': '355 × 254 × 254 мм',
      'Робоча камера (опція)': '406 × 355 × 406 мм',
      'Товщина шару': '0.127 / 0.178 / 0.254 / 0.330 мм',
      Матеріали: 'ABS-M30, PC, PC-ABS, ASA, ULTEM, PPSF, Nylon 12',
      Точність: '±0.127 мм або ±0.0015 мм/мм',
    },
    features: [
      'Найширший вибір матеріалів (12+ варіантів)',
      'Подвійні екструдери для безперервного виробництва',
      'Шар до 0.127 мм для гладкої поверхні',
      'Розчинні та відривні підтримки',
      'Високотемпературні матеріали для авіації',
      'Сертифіковані матеріали для медицини',
    ],
    href: '/equipment/stratasys-fortus-400mc',
  },
  {
    id: 'fortus-250mc',
    name: 'Stratasys Fortus 250mc',
    tagline: 'Професійна якість та стабільність',
    description:
      'Професійна FDM-система для виготовлення точних і міцних пластикових деталей зі стабільною якістю. Ідеально підходить для функціональних прототипів та виробничих компонентів з відмінною повторюваністю.',
    image: '/stratasys-fortus-250mc.png',
    specs: {
      'Робоча камера': '254 × 254 × 305 мм (10 × 10 × 12")',
      'Товщина шару': '0.178 / 0.254 / 0.330 мм',
      'Матеріали моделі': 'ABS P430 (ABSplus)',
      'Матеріал підтримки': 'SR-30 (розчинний)',
      Точність: '±0.241 мм (95% вихід)',
    },
    features: [
      'Розчинні підтримки SR-30 для складних геометрій',
      'Виробничий термопластик ABS P430 (ABSplus)',
      '9 кольорових опцій матеріалу',
      'Точність ±0.241 мм (95% вихід)',
      'Керована температура виробництва',
      'Стабільні механічні властивості',
    ],
    href: '/equipment/stratasys-fortus-250mc',
  },
];

export default function FDMEquipmentPage() {
  return (
    <>
      <Hero2
        title="FDM обладнання"
        subtitle="Fused Deposition Modeling"
        description="Професійні системи Stratasys Fortus для виробництва міцних функціональних деталей з широким вибором інженерних термопластиків"
 
      />

      {/* Equipment Details */}
      <Section>
        <StaggerChildren staggerDelay={0.15} className="space-y-24">
          {fdmEquipment.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={item.id} direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={isEven ? 'order-2 lg:order-1' : 'order-1'}>
                    <Link href={item.href} className="block group">
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                        <div className="relative bg-base-200 rounded-2xl p-8 border border-base-content/10 group-hover:border-primary/30 transition-all duration-300">
                          <div className="relative aspect-video">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain"
                              priority={index === 0}
                            />
                          </div>
                        </div>

                        {/* Corner accents */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'order-1 lg:order-2' : 'order-2'}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{item.name}</h2>
                    <p className="text-primary text-lg font-semibold mb-6">{item.tagline}</p>

                    <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Features */}
                    <div className="bg-base-200 rounded-xl p-6 border border-base-content/10 mb-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" />
                        Ключові переваги
                      </h3>
                      <ul className="space-y-3">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-base-content/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs */}
                    <div className="bg-base-200 rounded-xl p-6 border border-base-content/10 mb-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-primary" />
                        Технічні характеристики
                      </h3>
                      <div className="space-y-3 text-sm">
                        {Object.entries(item.specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b border-base-content/10 last:border-0"
                          >
                            <span className="font-semibold text-base-content/70">{key}</span>
                            <span className="text-base-content">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <ButtonLink
                      href={item.href}
                      variant="primary"
                      className="group inline-flex items-center gap-2"
                    >
                      Детальна інформація
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </ButtonLink>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-base-200">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Порівняння моделей</h2>
            <p className="text-base-content/70 text-center mb-12">
              Оберіть оптимальну FDM-систему для вашого проєкту
            </p>

            <div className="overflow-x-auto bg-base-100 rounded-2xl border border-base-content/10">
              <table className="table w-full">
                <thead>
                  <tr className="bg-base-200 border-b border-base-content/10">
                    <th className="text-left font-bold">Характеристика</th>
                    <th className="text-center font-bold">Fortus 250mc</th>
                    <th className="text-center font-bold">Fortus 400mc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">Макс. розмір деталі</td>
                    <td className="text-center text-sm">254×254×305 мм</td>
                    <td className="text-center text-sm">406×355×406 мм</td>
                  </tr>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">Мін. товщина шару</td>
                    <td className="text-center">0.178 мм</td>
                    <td className="text-center">
                      <span className="badge badge-primary badge-sm">0.127 мм</span>
                    </td>
                  </tr>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">Кількість матеріалів</td>
                    <td className="text-center">1 (ABS)</td>
                    <td className="text-center">
                      <span className="badge badge-primary badge-sm">12+</span>
                    </td>
                  </tr>
                  <tr className="border-b border-base-content/5">
                    <td className="font-semibold">Точність</td>
                    <td className="text-center">±0.241 мм</td>
                    <td className="text-center">
                      <span className="badge badge-primary badge-sm">±0.127 мм</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Застосування</td>
                    <td className="text-center text-sm">Прототипи, серійні деталі</td>
                    <td className="text-center text-sm">Авіація, медицина, складні деталі</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn direction="up">
          <div className="bg-primary/10 rounded-2xl p-12 border border-primary/20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Потрібні міцні функціональні деталі?</h2>
            <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
              Наші FDM системи Stratasys забезпечують виробничу якість та надійність для
              найскладніших проєктів
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/contact" variant="primary">
                Отримати консультацію
              </ButtonLink>
              <ButtonLink href="/services/3d-printing/calculator" variant="secondary">
                Розрахувати вартість
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
