import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Технологія MJF (HP) | Additive3D',
  description: 'Multi Jet Fusion від HP. Серійний 3D друк поліамідом PA12. Висока точність, міцність та швидкість.',
};

export default function MJFPage() {
  return (
    <>
      <PageHeader
        title="Технологія MJF"
        description="Multi Jet Fusion — революційна технологія від HP для серійного виробництва кінцевих деталей."
        breadcrumbs={[
          { label: 'Послуги', href: '/services' },
          { label: '3D Друк', href: '/services/3d-printing' },
          { label: 'MJF', href: '/services/3d-printing/mjf' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Що таке MJF?</h2>
            <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
              MJF (Multi Jet Fusion) — це високотехнологічний метод 3D-друку, що забезпечує надзвичайну деталізацію та міцність. Процес полягає у пошаровому нанесенні порошку та його вибірковому спіканні.
            </p>
            <div className="bg-base-200 p-6 rounded-xl border border-base-300">
              <h3 className="font-bold mb-4 text-lg">Ключові переваги:</h3>
              <ul className="space-y-3">
                {['Висока точність', 'Швидке серійне виробництво', 'Без підтримок (No supports)', 'Ізотропні властивості'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-success">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-base-200 rounded-2xl aspect-video flex items-center justify-center text-base-content/20 text-4xl font-bold border border-base-300">
            HP MJF Process
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Матеріал PA12 (Nylon 12)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <p className="text-lg text-base-content/80 mb-6">
                PA12 — це інженерний термопластик, що поєднує високу міцність, зносостійкість та хімічну стійкість. Ідеально підходить для функціональних прототипів та кінцевих деталей.
              </p>
              
              <div className="overflow-x-auto bg-base-200 rounded-xl border border-base-300">
                <table className="table w-full">
                  <thead>
                    <tr className="bg-base-300">
                      <th>Параметр</th>
                      <th>Значення</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Межа міцності</td><td>~48–50 МПа</td></tr>
                    <tr><td>Модуль пружності</td><td>~1700–1900 МПа</td></tr>
                    <tr><td>Теплостійкість</td><td>~175°C</td></tr>
                    <tr><td>Точність</td><td>±0.2 мм</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-base-200 p-8 rounded-2xl border border-base-300">
              <h3 className="text-xl font-bold mb-4">Застосування</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <div className="font-bold">Автопром</div>
                    <div className="text-sm text-base-content/60">Функціональні деталі, кріплення</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🔌</span>
                  <div>
                    <div className="font-bold">Електроніка</div>
                    <div className="text-sm text-base-content/60">Корпуси, конектори</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <div className="font-bold">Медицина</div>
                    <div className="text-sm text-base-content/60">Ортези, інструменти</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-base-200 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Серійне виробництво</h2>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto mb-8">
            MJF з PA12 — це ідеальне рішення для тих, хто цінує точність, надійність та естетику. Ми пропонуємо професійний підхід від одиничного зразка до масового виробництва.
          </p>
          <a href="/contact" className="btn btn-primary text-primary-content">Розрахувати вартість</a>
        </div>
      </Section>
    </>
  );
}