import { Hero2 } from '@/components/hero';
import ButtonLink from '@/components/ui/button-link';
import { Award, CheckCircle, Factory, Gauge, Layers, Package, Zap } from 'lucide-react';
import type { Metadata } from 'next';

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
      <section>
        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">Ключові переваги MJF технології</h2>
            <p className="text-base-content/70 mx-auto max-w-2xl">
              Революційна технологія Multi Jet Fusion для промислового виробництва
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                description: 'Ізотропні механічні властивості. Однакова міцність у всіх напрямках.',
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
                className="bg-base-200 border-base-content/10 hover:border-primary/30 rounded-xl border p-6 transition-all duration-300"
              >
                <div className="bg-primary/10 mb-4 w-fit rounded-lg p-3">
                  <item.icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-base-200">
        <div>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Технічні характеристики</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Print Parameters */}
              <div className="bg-base-100 border-base-content/10 rounded-xl border p-8">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <Layers className="text-primary h-6 w-6" />
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
                      className="border-base-content/10 flex items-center justify-between border-b py-3 last:border-0"
                    >
                      <span className="text-base-content/70 font-semibold">{spec.label}</span>
                      <span className="text-base-content">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Accuracy */}
              <div className="bg-base-100 border-base-content/10 rounded-xl border p-8">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <Gauge className="text-primary h-6 w-6" />
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
                      className="border-base-content/10 flex items-center justify-between border-b py-3 last:border-0"
                    >
                      <span className="text-base-content/70 font-semibold">{spec.label}</span>
                      <span className="text-base-content">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section>
        <div>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-center text-3xl font-bold">Застосування</h2>
            <p className="text-base-content/70 mx-auto mb-12 max-w-2xl text-center">
              HP Jet Fusion 5200 ідеально підходить для різноманітних галузей промисловості
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: '🚗',
                  title: 'Автомобільна промисловість',
                  items: [
                    'Корпуси приладів панелі',
                    "Кріплення та з'єднувачі",
                    'Функціональні компоненти',
                    'Прототипи та випробування',
                  ],
                },
                {
                  icon: '🔌',
                  title: 'Електроніка',
                  items: [
                    'Корпуси електронних пристроїв',
                    "Конектори та роз'єми",
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
                  className="bg-base-200 border-base-content/10 hover:border-primary/30 rounded-xl border p-8 transition-all duration-300"
                >
                  <div className="mb-4 text-5xl">{app.icon}</div>
                  <h3 className="mb-4 text-xl font-bold">{app.title}</h3>
                  <ul className="space-y-2">
                    {app.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
                        <span className="text-base-content/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-content">
        <div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Потрібне серійне виробництво високої якості?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              HP Jet Fusion 5200 — оптимальне рішення для промислового адитивного виробництва з
              неперевершеною продуктивністю та якістю
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="bg-base-100 text-base-content hover:bg-base-200 border-none"
              >
                Отримати консультацію
              </ButtonLink>
              <ButtonLink
                href="/services/3d-printing/calculator"
                className="border-primary-content/30 hover:border-primary-content hover:bg-primary-content/10 border-2"
              >
                Розрахувати вартість
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
