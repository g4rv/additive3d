import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Реверс-інжиніринг | Additive3D',
  description: 'Відтворення цифрової 3D-моделі на основі фізичного об’єкта. Відновлення технічної документації, модернізація деталей.',
};

export default function ReverseEngineeringPage() {
  return (
    <>
      <PageHeader
        title="Реверс-інжиніринг"
        description="Шлях від об’єкта до цифрової моделі. Відновлення креслень та модернізація виробів."
        breadcrumbs={[
          { label: 'Послуги', href: '/services' },
          { label: 'Реверс-інжиніринг', href: '/services/reverse-engineering' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Що таке реверс-інжиніринг?</h2>
            <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
              Реверс-інжиніринг (reverse engineering) — це процес відтворення цифрової тривимірної моделі або технічної документації на основі вже існуючого фізичного об’єкта.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Головна мета — зрозуміти конструкцію виробу, його принцип дії та геометрію, щоб відновити або вдосконалити його без початкових креслень.
            </p>
          </div>
          <div className="relative bg-base-200 rounded-2xl aspect-video overflow-hidden border border-base-300">
            <Image
              src="/reverse-engineering/3d-surface-reconstruction-mesh-to-cad.png"
              alt="Реверс-інжиніринг: реконструкція 3D поверхні від mesh до CAD"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Методи та процес</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-base-200 p-8 rounded-2xl border border-base-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Методи</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Ручні заміри</h4>
                  <p className="text-base-content/80">Використання штангеля та інших інструментів для створення моделі в CAD.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">3D Сканування (Наш метод)</h4>
                  <p className="text-base-content/80">Використання 3D-сканера та ПЗ Zeiss Reverse Engineering для створення точної CAD-моделі з математичними поверхнями.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-base-200 p-8 rounded-2xl border border-base-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Етапи роботи</h3>
              <ol className="list-decimal list-inside space-y-4 text-base-content/80">
                <li><strong className="text-base-content">Оцифрування:</strong> Створення хмари точок сканером.</li>
                <li><strong className="text-base-content">Обробка даних:</strong> Створення та очищення полігональної сітки (mesh).</li>
                <li><strong className="text-base-content">CAD-моделювання:</strong> Створення параметричної 3D моделі.</li>
                <li><strong className="text-base-content">Валідація:</strong> Порівняння моделі з вихідним сканом.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl p-8 border border-base-300">
          <h2 className="text-3xl font-bold mb-6">Можливості та застосування</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              'Модернізація застарілих деталей',
              'Адаптація під нові технології',
              'Створення запасних частин',
              'Оптимізація конструкцій'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                <span className="text-primary text-xl">✦</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-base-content/80 max-w-4xl">
            Реверс-інжиніринг широко використовується у промисловості, машинобудуванні, архітектурі та медицині. Це невід’ємна частина сучасного цифрового виробництва, що формує замкнений цикл від реального об’єкта до цифрової моделі.
          </p>
        </div>
      </Section>
    </>
  );
}