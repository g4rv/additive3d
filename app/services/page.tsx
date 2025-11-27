import CapabilitiesGrid from '@/components/services/CapabilitiesGrid';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ServiceGrid from '@/components/services/ServiceGrid';
import ServicesHero from '@/components/services/ServicesHero';
import TechnologyShowcase from '@/components/services/TechnologyShowcase';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Послуги | Additive3D',
  description: 'Комплексні рішення адитивного виробництва: 3D друк, моделювання, сканування, реверс-інжиніринг, інспекція, фарбування.',
};

export default function ServicesPage() {
  const digitalServices = [
    {
      title: '3D Моделювання',
      tagline: 'Від концепції до CAD-моделі',
      description: 'Професійне 3D моделювання для виробництва. CAD дизайн, параметризація та інженерне проєктування.',
      benefits: [
        'Параметричне моделювання',
        'Технічна документація',
        'Оптимізація під виробництво',
      ],
      href: '/services/3d-modeling',
      icon: '🎨',
    },
    {
      title: '3D Сканування',
      tagline: 'Високоточна оцифровка',
      description: 'Перетворення фізичних об\'єктів у цифрові моделі з точністю до 0.02мм. Zeiss GOM Scan та T-SCAN Hawk.',
      benefits: [
        'Точність до 0.02 мм',
        'Фотограмметрія та лазер',
        'Контроль якості',
      ],
      href: '/services/3d-scanning',
      icon: '📸',
    },
    {
      title: 'Реверс-інжиніринг',
      tagline: 'Від об\'єкта до CAD',
      description: 'Відтворення технічної документації на основі фізичних виробів. Створення параметричних моделей.',
      benefits: [
        'Відновлення креслень',
        'Модернізація деталей',
        'Створення запчастин',
      ],
      href: '/services/reverse-engineering',
      icon: '🔄',
    },
    {
      title: 'Геометрична інспекція',
      tagline: 'Контроль точності',
      description: 'Порівняння виготовлених деталей з CAD-моделями. Звіти з картою відхилень у Zeiss GOM Inspect.',
      benefits: [
        'Карта відхилень',
        'Звіти якості',
        'Параметризований аналіз',
      ],
      href: '/services/geometry-inspection',
      icon: '📐',
    },
  ];

  const productionServices = [
    {
      title: '3D Друк FDM',
      tagline: 'Міцні функціональні деталі',
      description: 'Промислові термопластики на Stratasys Fortus. ABS, PC, Ultem 9085 для кінцевих виробів.',
      benefits: [
        'Інженерні матеріали',
        'Висока міцність',
        'Великі деталі до 400мм',
      ],
      href: '/materials/fdm',
      icon: '🏭',
    },
    {
      title: '3D Друк MJF',
      tagline: 'Серійне виробництво',
      description: 'HP Multi Jet Fusion для швидкого виробництва серій. PA12 з відмінними механічними властивостями.',
      benefits: [
        'Висока продуктивність',
        'Без підтримок',
        'Ізотропні властивості',
      ],
      href: '/services/3d-printing/mjf',
      icon: '⚡',
    },
    {
      title: 'Фарбування',
      tagline: 'Професійне покриття',
      description: 'Пропитка (Dyeing) та розпилення (Spray Coating). Будь-який колір RAL для презентаційних виробів.',
      benefits: [
        'Dyeing (чорний)',
        'Spray Coating (RAL)',
        'Стійке покриття',
      ],
      href: '/services/painting',
      icon: '🎨',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <ServicesHero />

      {/* Digital Services */}
      <ServiceGrid
        title="Цифрові послуги"
        description="Від фізичного об'єкта до точної CAD-моделі — повний цикл цифровізації"
        services={digitalServices}
      />

      {/* Technology Showcase */}
      <TechnologyShowcase />

      {/* Production Services */}
      <Section className="bg-base-100">
        <ServiceGrid
          title="Виробничі послуги"
          description="Промислові технології 3D друку та постобробка для готових виробів"
          services={productionServices}
        />
      </Section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Capabilities */}
      <CapabilitiesGrid />

      {/* Final CTA */}
      <Section className="bg-gradient-to-br from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Не впевнені, яка технологія підійде?
          </h2>
          <p className="text-xl text-base-content/80 mb-8">
            Наші інженери допоможуть обрати оптимальне рішення для вашого проєкту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/3d-printing/calculator"
              className="btn btn-primary btn-lg text-primary-content"
            >
              Розрахувати вартість
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg"
            >
              Отримати консультацію
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
