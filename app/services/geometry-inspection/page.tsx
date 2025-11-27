import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Геометрична інспекція | Additive3D',
  description: 'Контроль точності у цифровому виробництві. Порівняння 3D сканів з CAD-моделями, карта відхилень, звіти якості.',
};

export default function InspectionPage() {
  return (
    <>
      <PageHeader
        title="Геометрична інспекція"
        description="Контроль точності та якості. Порівняння фізичних виробів з еталонними CAD-моделями."
        breadcrumbs={[
          { label: 'Послуги', href: '/services' },
          { label: 'Інспекція', href: '/services/geometry-inspection' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 relative bg-base-200 rounded-2xl aspect-square overflow-hidden border border-base-300">
            <Image
              src="/geometry-inspection/3d-geometry-inspection-color-map.png"
              alt="Кольорова карта геометричних відхилень 3D інспекції"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-primary">Контроль точності</h2>
            <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
              Інспекція відсканованих деталей — це процес порівняння отриманої 3D моделі з еталонною CAD-моделлю. Головна мета — перевірка геометричної відповідності та виявлення відхилень.
            </p>
            <div className="bg-base-200 p-6 rounded-xl border border-base-300">
              <h3 className="font-bold mb-3 text-lg">Zeiss GOM Inspect</h3>
              <p className="text-base-content/80 mb-4">
                Ми використовуємо спеціалізоване ПЗ для аналізу відхилень. Результати відображаються у вигляді кольорової карти, що дозволяє миттєво оцінити якість виробу.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-success"></span> Зелений: В межах допуску</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-error"></span> Червоний: Понад допуск (зайвий матеріал)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-info"></span> Синій: Понад допуск (нестача матеріалу)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Процес інспекції</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Оцифрування', desc: 'Сканування деталі з високою роздільною здатністю.' },
              { step: '02', title: 'Вирівнювання', desc: 'Суміщення скану з CAD-моделлю за базами.' },
              { step: '03', title: 'Порівняння', desc: 'Аналіз відхилень поверхонь.' },
              { step: '04', title: 'Звіт', desc: 'Генерація PDF звіту з картою відхилень.' },
            ].map((item, i) => (
              <div key={i} className="bg-base-100 p-6 rounded-xl border border-base-300 relative overflow-hidden group hover:border-primary transition-colors">
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-base-200 group-hover:text-base-200/50 transition-colors select-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-base-content/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-base-200 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Параметризація та автоматизація</h2>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto mb-8">
            Важливою перевагою є можливість створення автоматизованих шаблонів контролю для серійних партій. Це значно прискорює повторну перевірку й забезпечує стабільну якість виробництва.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-primary-content">Замовити інспекцію</a>
          </div>
        </div>
      </Section>
    </>
  );
}