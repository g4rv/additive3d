'use client';

import { FadeIn } from '@/components/animations';
import Image from 'next/image';
import Link from 'next/link';

interface WorkImage {
  src: string;
  title: string;
  description: string;
  href: string;
}

const WORK_IMAGES: WorkImage[] = [
  {
    src: '/3d-scanning/engineer-using-structured-light-scanner.jpg',
    title: '3D Сканування',
    description: 'Професійне обладнання для точних вимірювань',
    href: '/services/3d-scanning',
  },
  {
    src: '/geometry-inspection/3d-geometry-inspection-color-map.png',
    title: 'Контроль якості',
    description: 'Інспекція геометрії з точністю до 0.01мм',
    href: '/services/geometry-inspection',
  },
  {
    src: '/3d-scanning/3d-surface-scan-model-detail.png',
    title: 'Цифрова точність',
    description: 'Високодеталізовані 3D моделі',
    href: '/services/3d-modeling',
  },
  {
    src: '/reverse-engineering/3d-surface-reconstruction-mesh-to-cad.png',
    title: 'Реверс-інжиніринг',
    description: 'Від фізичної деталі до CAD моделі',
    href: '/services/reverse-engineering',
  },
];

/**
 * WorkShowcase - Displays real project photos showcasing technical capabilities
 * Provides visual proof of manufacturing quality and precision
 */
export default function WorkShowcase() {
  return (
    <section className="bg-base-200 relative isolate py-16 lg:py-24" aria-labelledby="work-showcase-heading">
      <div className="custom-container">
        <FadeIn direction="up" className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            className="text-base-content mb-4 text-3xl font-bold md:text-4xl"
            id="work-showcase-heading"
          >
            Наша робота в деталях
          </h2>
          <p className="text-base-content/80 text-lg">
            Висока точність, професійне обладнання та увага до деталей у кожному проєкті
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WORK_IMAGES.map((img, index) => (
            <FadeIn key={img.src} direction="up" delay={0.1 * index}>
              <Link
                href={img.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={img.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{img.title}</h3>
                  <p className="text-sm text-white/90">{img.description}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
