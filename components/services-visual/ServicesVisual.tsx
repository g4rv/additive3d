'use client';

import { FadeIn } from '@/components/animations';
import { NAVIGATION } from '@/lib/constants';
import { ChevronRight, FileBox, PaintBucket, Scale3d, ScanEye, Settings, View } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceVisual {
  key: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const SERVICES_VISUAL: ServiceVisual[] = [
  {
    key: '3d-printing',
    title: '3D-друк',
    description:
      'Промисловий 3D друк технологіями MJF та FDM для прототипів та серійного виробництва',
    href: NAVIGATION['3d-printing'].href,
    icon: <Scale3d className="h-8 w-8" />,
    imageSrc: '/equipment/hp-jet-fusion-5200.png',
    imageAlt: 'HP Jet Fusion 3D принтер',
  },
  {
    key: '3d-scanning',
    title: '3D-сканування',
    description: "Точне 3D сканування об'єктів будь-якої складності для створення цифрових моделей",
    href: NAVIGATION['3d-scanning'].href,
    icon: <ScanEye className="h-8 w-8" />,
    imageSrc: '/3d-scanning/engineer-using-structured-light-scanner.jpg',
    imageAlt: 'Інженер використовує 3D сканер',
  },
  {
    key: '3d-modeling',
    title: '3D-моделювання',
    description: 'Створення та оптимізація 3D моделей для адитивного виробництва',
    href: NAVIGATION['3d-modeling'].href,
    icon: <FileBox className="h-8 w-8" />,
    imageSrc: '/modeling/modeling.png',
    imageAlt: '3D моделювання',
  },
  {
    key: 'geometry-inspection',
    title: 'Інспекція геометрії',
    description: 'Контроль якості та перевірка геометричних параметрів виробів',
    href: NAVIGATION.geometryInspection.href,
    icon: <View className="h-8 w-8" />,
    imageSrc: '/geometry-inspection/3d-geometry-inspection-color-map.png',
    imageAlt: 'Інспекція геометрії з кольоровою картою',
  },
  {
    key: 'reverse-engineering',
    title: 'Реверс-інжиніринг',
    description: 'Реверс-інжиніринг для відтворення та вдосконалення існуючих деталей',
    href: NAVIGATION.reverseEngineering.href,
    icon: <Settings className="h-8 w-8" />,
    imageSrc: '/reverse-engineering/3d-surface-reconstruction-mesh-to-cad.png',
    imageAlt: 'Реконструкція 3D поверхні',
  },
  {
    key: 'dyeing',
    title: 'Фарбування',
    description: 'Професійне фарбування 3D надрукованих деталей у будь-який колір',
    href: NAVIGATION.dyeing.href,
    icon: <PaintBucket className="h-8 w-8" />,
    imageSrc: '/dyeing.jpg',
    imageAlt: 'Фарбування деталей',
  },
];

/**
 * ServicesVisual - Enhanced visual service cards with background images
 * Provides more engaging presentation than plain text cards
 */
export default function ServicesVisual() {
  return (
    <section
      className="bg-base-100 relative isolate py-16 lg:py-24"
      aria-labelledby="services-visual-heading"
    >
      <div className="custom-container">
        <FadeIn direction="up" className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            className="text-base-content mb-4 text-3xl font-bold md:text-4xl"
            id="services-visual-heading"
          >
            Наші послуги
          </h2>
          <p className="text-base-content/80 text-lg">
            Комплексні рішення для адитивного виробництва — від ідеї до готової деталі
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_VISUAL.map((service, index) => (
            <FadeIn key={service.key} direction="up" delay={0.1 * index}>
              <Link
                href={service.href}
                className="group relative block aspect-4/3 overflow-hidden rounded-lg"
              >
                {/* Background Image */}
                <Image
                  src={service.imageSrc}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={service.imageAlt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/30 transition-opacity group-hover:from-black group-hover:via-black/80" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-primary mb-3">{service.icon}</div>
                  <h3 className="mb-2 text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mb-4 text-sm text-white/80">{service.description}</p>

                  <div className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm font-semibold">
                    Дізнатися більше
                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
