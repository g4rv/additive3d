import { NAVIGATION } from '@/lib/constants';
import {
  Anvil,
  ChevronRight,
  FileBox,
  PaintBucket,
  Scale3d,
  ScanEye,
  Settings,
  View,
} from 'lucide-react';
import Link from 'next/link';

/**
 * ServicesList - Displays a grid of service cards with icons, titles, descriptions and CTAs.
 * Automatically pulls service data from lib/constants.ts navigation structure.
 *
 * @example
 * <ServicesList />
 */
export default function ServicesList() {
  // Icon mapping for services
  const iconMap = {
    '3d-printing': <Scale3d className="h-12 w-12" />,
    '3d-scanning': <ScanEye className="h-12 w-12" />,
    painting: <PaintBucket className="h-12 w-12" />,
    steamIroning: <Anvil className="h-12 w-12" />,
    '3d-modeling': <FileBox className="h-12 w-12" />,
    reverseEngineering: <Settings className="h-12 w-12" />,
    geometryInspection: <View className="h-12 w-12" />,
  };

  // Extract services from navigation
  const services = Object.entries(NAVIGATION)
    .filter(([_key, nav]) => nav.parent === 'services')
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key, nav]) => ({
      key,
      title: nav.label,
      description: getServiceDescription(key),
      href: nav.href,
      icon: iconMap[key as keyof typeof iconMap],
    }));

  return (
    <section className="bg-base-100 relative isolate py-16" aria-labelledby="services-list-heading">
      <div className="custom-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            className="text-base-content mb-4 text-3xl font-bold md:text-4xl"
            id="services-list-heading"
          >
            Наші послуги
          </h2>

          <p className="text-base-content/80 text-lg">
            Комплексні рішення для адитивного виробництва — від ідеї до готової деталі
          </p>
        </div>

        <ul className="grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.key}
              className="card bg-base-200 border-base-300 hover:border-primary/50 relative border transition-all duration-300 hover:shadow-lg"
            >
              <Link href={service.href} className="absolute inset-0 rounded-lg" />

              <div className="card-body">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="card-title mb-2 text-xl">{service.title}</h3>
                <p className="text-base-content/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="card-actions text-primary hover:text-primary/80 flex items-center gap-2">
                  Дізнатися більше
                  <ChevronRight size={16} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Returns a description for each service based on its key
 */
function getServiceDescription(key: string): string {
  const descriptions: Record<string, string> = {
    '3d-printing':
      'Промисловий 3D друк технологіями MJF та FDM для прототипів та серійного виробництва',
    '3d-scanning':
      'Точне 3D сканування обєктів будь-якої складності для створення цифрових моделей',
    '3d-modelling': 'Створення та оптимізація 3D моделей для адитивного виробництва',
    painting:
      'Професійне фарбування 3D надрукованих деталей у будь-який колір з довготривалим покриттям',
    steamIroning: 'Парова обробка поверхні для покращення зовнішнього вигляду та міцності деталей',
    reverseEngineering: 'Реверс-інжиніринг для відтворення та вдосконалення існуючих деталей',
    geometryInspection: 'Контроль якості та перевірка геометричних параметрів виробів',
  };

  return descriptions[key] || 'Професійна послуга для вашого бізнесу';
}
