import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фарбування пластику | Additive3D',
  description: 'Професійне фарбування пластикових деталей. Метод пропитки (Dyeing) та розпилення (Spray Coating). Будь-який колір RAL.',
};

export default function PaintingPage() {
  return (
    <>
      <PageHeader
        title="Фарбування пластику"
        description="Високоякісне фарбування пластикових деталей. Індивідуальний підхід, стійкість та естетика."
        breadcrumbs={[
          { label: 'Послуги', href: '/services' },
          { label: 'Фарбування', href: '/services/painting' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Наші технології</h2>
            <p className="text-lg text-base-content/80 mb-6 leading-relaxed">
              Ми спеціалізуємося на високоякісному фарбуванні пластикових деталей із використанням двох сучасних технологій: методу пропитки та розпилення.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Обидва методи гарантують високу якість покриття, довговічність та точну відповідність технічним вимогам.
            </p>
          </div>
          <div className="bg-base-200 rounded-2xl aspect-video flex items-center justify-center text-base-content/20 text-4xl font-bold border border-base-300">
            Painting Process
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Dyeing */}
          <div className="bg-base-200 p-8 rounded-2xl border border-base-300 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-2xl font-bold">Метод пропитки (Dyeing)</h3>
            </div>
            <p className="text-base-content/80 mb-6 min-h-[3rem]">
              Глибоке просочення пластика барвником, що забезпечує рівномірне фарбування матеріалу зсередини.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>Доступний у класичному чорному кольорі</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>Стійкість до зношування (колір не стирається)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>Ідеально для технічних деталей</span>
              </li>
            </ul>
          </div>

          {/* Spray Coating */}
          <div className="bg-base-200 p-8 rounded-2xl border border-base-300 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">2</div>
              <h3 className="text-2xl font-bold">Метод розпилення</h3>
            </div>
            <p className="text-base-content/80 mb-6 min-h-[3rem]">
              Нанесення фарби методом розпилення для досягнення естетичного вигляду та точної відповідності кольору.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>Будь-який відтінок по палітрі RAL</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>Для зовнішніх та декоративних елементів</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>Можливість різних фактур (мат, глянець)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Потрібне якісне покриття?</h2>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto mb-8">
            Ми забезпечуємо індивідуальний підхід до кожного замовлення та готові реалізувати навіть найскладніші завдання з фарбування.
          </p>
          <a href="/contact" className="btn btn-primary text-primary-content">Замовити фарбування</a>
        </div>
      </Section>
    </>
  );
}
