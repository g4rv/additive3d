import { FadeIn } from '@/components/animations';
import { Hero2 } from '@/components/hero';
import Section from '@/components/ui/Section';
import ButtonLink from '@/components/ui/button-link';
import type { Metadata } from 'next';
import { Award, CheckCircle, Factory, Gauge, Layers, Package, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HP Jet Fusion 5200 | Additive3D',
  description:
    'Промислова MJF система HP Jet Fusion 5200 для серійного виробництва. PA12, висока продуктивність, точність.',
};

export default function MJFEquipmentPage() {
  return (
    <>
      <Hero2
        title="HP Jet Fusion 5200"
        subtitle="Multi Jet Fusion Technology"
        description="Високопродуктивна промислова система для серійного виробництва деталей зі складною геометрією. Індустріальне рішення для виготовлення сотень деталей за день."
        image="/hp-jet-fusion-5200.png"
        imageAlt="HP Jet Fusion 5200 3D Printer"
        features={[
          '2 повні збірки за 24 години',
          'До 800 деталей на тиждень (30 см³ деталі)',
          'Процесний Cpk 1.33 для IT13 (XY) і IT14 (Z)',
          'Знімні робочі блоки + автоматизоване охолодження',
        ]}
        cta={{ text: 'Request Quote', href: '/contact' }}
      />

      {/* Key Advantages */}
      <Section>
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Ключові переваги MJF технології</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Революційна технологія Multi Jet Fusion для промислового виробництва
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Висока швидкість',
                description:
                  'До 10 разів швидше за традиційні FDM технології. 2 повні збірки за 24 години.',
              },
              {
                icon: Gauge,
                title: 'Стабільна точність',
                description:
                  'Процесний Cpk 1.33 для IT13 (XY) і IT14 (Z). Повторюваність результатів.',
              },
              {
                icon: Factory,
                title: 'Серійне виробництво',
                description:
                  'До 800 деталей на тиждень при розмірі 30 см³. Масштабування виробництва.',
              },
              {
                icon: Layers,
                title: 'Без підтримок',
                description:
                  'Самопідтримуюча конструкція. Економія матеріалу та часу на пост-обробку.',
              },
              {
                icon: Package,
                title: 'Однорідність деталей',
                description:
                  'Ізотропні механічні властивості. Однакова міцність у всіх напрямках.',
              },
              {
                icon: Award,
                title: 'Виробнича якість',
                description:
                  'Деталі з властивостями литого пластику. Підходить для кінцевого використання.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-base-200 rounded-xl p-6 border border-base-content/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Technical Specifications */}
      <Section className="bg-base-200">
        <FadeIn direction="up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Технічні характеристики</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Print Parameters */}
              <div className="bg-base-100 rounded-xl p-8 border border-base-content/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-primary" />
                  Параметри друку
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Робоча камера', value: '380 × 284 × 380 мм' },
                    { label: 'Товщина шару', value: '80 мкм (0.08 мм)' },
                    { label: 'Швидкість друку', value: '5058 мм/сек (8.45 сек/шар)' },
                    { label: 'Час збірки', value: '<12 годин на повну камеру' },
                    { label: 'Охолодження', value: 'Вбудована автоматизована система' },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-3 border-b border-base-content/10 last:border-0"
                    >
                      <span className="font-semibold text-base-content/70">{spec.label}</span>
                      <span className="text-base-content">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Accuracy */}
              <div className="bg-base-100 rounded-xl p-8 border border-base-content/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Gauge className="w-6 h-6 text-primary" />
                  Матеріали та точність
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Матеріал', value: 'HP 3D High Reusability PA12' },
                    { label: 'Точність XY', value: 'IT12.5 при Cpk=1.0' },
                    { label: 'Точність Z', value: 'IT13.5 при Cpk=1.0' },
                    { label: 'Повторюваність', value: 'Cpk 1.33 для IT13/IT14' },
                    { label: 'Міцність (MJF PA12)', value: '48 MPa (Tensile Strength)' },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-3 border-b border-base-content/10 last:border-0"
                    >
                      <span className="font-semibold text-base-content/70">{spec.label}</span>
                      <span className="text-base-content">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Applications */}
      <Section>
        <FadeIn direction="up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Застосування</h2>
            <p className="text-base-content/70 text-center mb-12 max-w-2xl mx-auto">
              HP Jet Fusion 5200 ідеально підходить для різноманітних галузей промисловості
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚗',
                  title: 'Автомобільна промисловість',
                  items: [
                    'Корпуси приладів панелі',
                    'Кріплення та з\'єднувачі',
                    'Функціональні компоненти',
                    'Прототипи та випробування',
                  ],
                },
                {
                  icon: '🔌',
                  title: 'Електроніка',
                  items: [
                    'Корпуси електронних пристроїв',
                    'Конектори та роз\'єми',
                    'Захисні кожухи',
                    'Малі серії споживчих товарів',
                  ],
                },
                {
                  icon: '⚙️',
                  title: 'Машинобудування',
                  items: [
                    'Серійні виробничі деталі',
                    'Запасні частини',
                    'Малі та середні серії',
                    'Технологічна оснастка',
                  ],
                },
              ].map((app, i) => (
                <div
                  key={i}
                  className="bg-base-200 rounded-xl p-8 border border-base-content/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{app.title}</h3>
                  <ul className="space-y-2">
                    {app.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-base-content/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-content">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Потрібне серійне виробництво високої якості?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              HP Jet Fusion 5200 — оптимальне рішення для промислового адитивного виробництва з
              неперевершеною продуктивністю та якістю
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
