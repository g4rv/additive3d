import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '3D Моделювання | Additive3D',
  description: 'Створення точних цифрових 3D-моделей для виробництва, дизайну та інженерії. CAD, реверс-інжиніринг, параметризація.',
};

export default function ModelingPage() {
  return (
    <>
      <PageHeader
        title="3D Моделювання"
        description="Цифрове відтворення реальності. Створення точних тривимірних об’єктів для сучасного виробництва."
        breadcrumbs={[
          { label: 'Послуги', href: '/services' },
          { label: '3D Моделювання', href: '/services/3d-modeling' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Процес моделювання</h2>
            <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
              3D моделювання — це процес створення тривимірних об’єктів у віртуальному просторі. Воно дозволяє візуалізувати форму, розміри та пропорції реальних або вигаданих предметів.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Після етапу 3D сканування, коли об’єкт оцифровується, розпочинається моделювання. На цьому етапі здійснюється редагування геометрії — видаляються зайві елементи, згладжуються поверхні, заповнюються отвори. У результаті формується точна цифрова копія виробу.
            </p>
          </div>
          <div className="relative bg-base-200 rounded-2xl aspect-video overflow-hidden border border-base-300">
            <Image
              src="/modeling/modeling.png"
              alt="CAD процес 3D моделювання"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 relative bg-base-200 rounded-2xl aspect-video overflow-hidden border border-base-300">
            <Image
              src="/3d-scanning/3d-mesh-wireframe-model.png"
              alt="Параметричний дизайн 3D моделі з каркасом"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-primary">Параметризація</h2>
            <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
              Важливим аспектом сучасного 3D моделювання є параметризація — можливість задавати геометричні характеристики об’єкта через змінні параметри.
            </p>
            <div className="bg-base-200 p-6 rounded-xl border border-base-300">
              <h3 className="font-bold mb-3 text-lg">Переваги параметризації:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Швидка зміна розмірів та форм без переробки моделі</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Адаптація конструкцій під різні вимоги</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✦</span>
                  <span>Підвищення ефективності розробки</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Основні напрямки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Інженерне моделювання (CAD)', desc: 'Створення точних моделей деталей і вузлів для конструкторських розробок.' },
              { title: 'Дизайнерське моделювання', desc: 'Формування концептуальних моделей для візуалізації ідей.' },
              { title: 'Реверс-інжиніринг', desc: 'Відновлення технічної документації на основі фізичних об’єктів.' },
              { title: 'Віртуальна реальність', desc: 'Використання 3D-моделей для інтерактивного відображення.' },
            ].map((item, i) => (
              <div key={i} className="bg-base-100 p-8 rounded-xl border border-base-300 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-base-content/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-base-200 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Програмне забезпечення</h2>
          <p className="text-lg text-base-content/80 mb-8 max-w-3xl">
            Для роботи ми застосовуємо професійні інструменти: SolidWorks, Autodesk Fusion 360, Blender, ZBrush, Geomagic Design X. Вибір інструменту залежить від завдання: від високоточної інженерії до творчої візуалізації.
          </p>
          <div className="flex flex-wrap gap-4">
            {['SolidWorks', 'Fusion 360', 'Blender', 'ZBrush', 'Geomagic Design X'].map((tool) => (
              <span key={tool} className="badge badge-lg badge-outline p-4">{tool}</span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}