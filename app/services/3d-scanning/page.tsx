import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '3D Сканування | Additive3D',
  description: 'Високоточне 3D сканування об’єктів. Контроль геометрії, реверс-інжиніринг, оцифрування. Точність до 0,02мм.',
};

export default function ScanningPage() {
  return (
    <>
      <PageHeader
        title="3D Сканування"
        description="Перетворення реальних об’єктів у точні цифрові 3D-моделі. Висока точність та деталізація."
        breadcrumbs={[
          { label: 'Послуги', href: '/services' },
          { label: '3D Сканування', href: '/services/3d-scanning' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Технологія та обладнання</h2>
            <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
              3D сканування — процес, що дозволяє перетворити реальні об’єкти у точні цифрові 3D-моделі. За допомогою спеціального обладнання з поверхні предмета зчитуються мільйони точок.
            </p>
            <div className="bg-base-200 p-6 rounded-xl border border-base-300 mb-6">
              <h3 className="font-bold mb-4 text-lg">Наше обладнання:</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-primary block">Zeiss GOM Scan 1</strong>
                  <span className="text-base-content/80">Технологія фотограмметрії (Blue Light Technology). Висока деталізація для малих та середніх об&apos;єктів.</span>
                </li>
                <li>
                  <strong className="text-primary block">Zeiss T-SCAN Hawk 2</strong>
                  <span className="text-base-content/80">Лазерне сканування. Портативність та точність до 0,02мм.</span>
                </li>
              </ul>
            </div>
            <div className="alert alert-warning bg-warning/10 border-warning/20 text-base-content">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span className="text-sm">Обмеження: Внутрішні пустоти та глибокі отвори, недоступні для прямої видимості камер, не скануються.</span>
            </div>
          </div>
          <div className="relative bg-base-200 rounded-2xl aspect-[4/5] overflow-hidden border border-base-300">
            <Image
              src="/3d-scanning/engineer-using-structured-light-scanner.jpg"
              alt="Інженер використовує структурований світловий сканер для 3D сканування деталі"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Сфери застосування</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Промисловість', desc: 'Контроль геометрії, порівняння з CAD-моделлю.' },
              { title: 'Дизайн', desc: 'Створення цифрових моделей для 3D-друку.' },
              { title: 'Архітектура', desc: 'Точне відтворення елементів фасаду та скульптур.' },
              { title: 'Медицина', desc: 'Виготовлення індивідуальних імплантів.' },
              { title: 'Мистецтво & VR', desc: 'Цифрове дублювання об’єктів для візуалізацій.' },
            ].map((item, i) => (
              <div key={i} className="bg-base-100 p-6 rounded-xl border border-base-300 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-base-content/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Цифрова трансформація</h2>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto mb-8">
            Результати 3D сканування можна зберігати, аналізувати, редагувати або інтегрувати у CAD/CAM системи. Це значно скорочує час розробки та підвищує точність.
          </p>
          <a href="/contact" className="btn btn-primary text-primary-content">Замовити сканування</a>
        </div>
      </Section>
    </>
  );
}