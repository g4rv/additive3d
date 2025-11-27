import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Матеріали FDM | Additive3D',
  description: 'Інженерні пластики для 3D друку: ASA, ABS-PC, Ultem 9085, Polycarbonate. Технічні характеристики та застосування.',
};

export default function MaterialsFDMPage() {
  const materials = [
    {
      name: 'ASA',
      fullName: 'Acrylonitrile Styrene Acrylate',
      desc: 'Ідеальний для зовнішніх застосувань. Стійкий до UV та атмосфери.',
      specs: [
        { label: 'Міцність на розтяг', value: '~45–50 МПа' },
        { label: 'Теплостійкість', value: '95–105°C' },
        { label: 'Ударна в\'язкість', value: '3.5–5.0 кДж/м²' },
      ],
      features: ['UV-стійкий', 'Матове покриття', 'Атмосферостійкість'],
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      name: 'ABS-PC',
      fullName: 'ABS + Polycarbonate',
      desc: 'Комбінація міцності PC та оброблюваності ABS. Висока ударна в\'язкість.',
      specs: [
        { label: 'Міцність на розтяг', value: '~45–55 МПа' },
        { label: 'Теплостійкість', value: '110–125°C' },
        { label: 'Ударна в\'язкість', value: '8–12 кДж/м²' },
      ],
      features: ['Ударна міцність', 'Термостійкість', 'Для автопрому'],
      color: 'bg-orange-500/10 text-orange-500',
    },
    {
      name: 'Ultem™ 9085',
      fullName: 'PEI – Polyetherimide',
      desc: 'Авіаційний клас. Сертифікація FST (вогонь, дим, токсичність).',
      specs: [
        { label: 'Міцність на розтяг', value: '~70–80 МПа' },
        { label: 'Теплостійкість', value: '153°C' },
        { label: 'Вогнестійкість', value: 'UL 94 V-0' },
      ],
      features: ['Аерокосмічний стандарт', 'Хімічна стійкість', 'Легкість'],
      color: 'bg-yellow-500/10 text-yellow-500',
    },
    {
      name: 'Polycarbonate',
      fullName: 'PC',
      desc: 'Надзвичайно міцний матеріал для функціональних навантажених деталей.',
      specs: [
        { label: 'Міцність на розтяг', value: '~60–70 МПа' },
        { label: 'Теплостійкість', value: '135–145°C' },
        { label: 'Ударна в\'язкість', value: '> 12 кДж/м²' },
      ],
      features: ['Екстремальна міцність', 'Прозорість', 'Термостійкість'],
      color: 'bg-purple-500/10 text-purple-500',
    },
  ];

  return (
    <>
      <PageHeader
        title="Матеріали FDM"
        description="Широкий вибір інженерних термопластиків для вирішення будь-яких завдань: від прототипів до серійних деталей."
        breadcrumbs={[
          { label: 'Матеріали', href: '/materials' },
          { label: 'FDM', href: '/materials/fdm' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-12">
          {materials.map((material, index) => (
            <div key={index} id={material.name.toLowerCase().replace(/\s+/g, '-')} className="bg-base-200 rounded-2xl p-8 border border-base-300 scroll-mt-24">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-3xl font-bold">{material.name}</h2>
                    <span className={`badge badge-lg border-none ${material.color}`}>{material.fullName}</span>
                  </div>
                  <p className="text-lg text-base-content/80 mb-6">{material.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {material.specs.map((spec, i) => (
                      <div key={i} className="bg-base-100 p-4 rounded-xl border border-base-300">
                        <div className="text-xs text-base-content/60 mb-1">{spec.label}</div>
                        <div className="font-bold text-lg">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature, i) => (
                      <span key={i} className="badge badge-outline p-3">{feature}</span>
                    ))}
                  </div>
                </div>
                
                {/* Placeholder for material image/chart */}
                <div className="w-full md:w-1/3 aspect-square bg-base-100 rounded-xl flex items-center justify-center text-base-content/20 font-bold border border-base-300">
                  {material.name} Sample
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}