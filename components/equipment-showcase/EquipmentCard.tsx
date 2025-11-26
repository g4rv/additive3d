import ButtonLink from '@/components/ui/button-link';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import type { EquipmentItem } from './EquipmentShowcase.types';

interface EquipmentCardProps {
  item: EquipmentItem;
  index: number;
  className?: string;
}

/**
 * EquipmentCard - Individual equipment card with alternating layout
 *
 * @example
 * <EquipmentCard
 *   item={equipmentItem}
 *   index={0}
 *   className="custom-class"
 * />
 */
export default function EquipmentCard({ item, index, className }: EquipmentCardProps) {
  const isEven = index % 2 === 0;

  return (
    <li
      className={cn(
        // 'bg-base-200/50 border-base-300/50 flex flex-col justify-start gap-8 rounded-2xl border p-6 shadow-xl backdrop-blur-sm lg:gap-12 lg:p-8 2xl:gap-16 2xl:p-10',
        'bg-base-200 border-base-300/50 4xl:grid-cols-2 4xl:gap-12 grid grid-rows-[auto_1fr] 4xl:grid-rows-1 gap-8 rounded-2xl border p-4 sm:p-6 xl:p-8',
        className
      )}
    >
      <div
        className={cn(
          'bg-base-100/50 border-base-300/50 4xl:grow 4xl:place-self-center relative aspect-4/3 w-full overflow-hidden rounded-xl border',
          isEven ? '4xl:-order-1' : '4xl:order-1'
        )}
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="absolute inset-0 object-contain transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        )}

        <span className="badge-primary badge text-primary-content absolute top-4 left-4 border-none text-sm shadow-lg">
          {item.technology}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-primary text-2xl font-bold lg:text-3xl">{item.name}</h3>
        <p className="text-base-content/90 text-lg leading-relaxed">{item.description}</p>

        {item.specs && item.specs.length > 0 && (
          <div className="mb-6">
            <h4 className="text-primary mb-2 text-lg font-semibold">Основні характеристики:</h4>

            <ul className="flex list-disc flex-col gap-4">
              {item.specs.map((spec, specIndex) => (
                <li key={specIndex} className="ml-5 list-item">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}

        <ButtonLink href={item.href} variant="secondary" size="large" className="mt-auto">
          Детальніше
        </ButtonLink>
      </div>
    </li>
  );
}
