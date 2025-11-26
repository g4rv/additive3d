import BgPattern from '@/components/ui/bg-pattern';
import { cn } from '@/utils/cn';
import EquipmentCard from './EquipmentCard';
import type { EquipmentItem, EquipmentShowcaseProps } from './EquipmentShowcase.types';

/**
 * EquipmentShowcase - Display 3D printing equipment with sequential side-by-side layout
 *
 * @example
 * <EquipmentShowcase
 *   title="Наше обладнання"
 *   description="Професійні 3D принтери для промислового виробництва"
 *   equipment={[
 *     {
 *       name: "HP Jet Fusion 5200",
 *       technology: "MJF",
 *       description: "Високошвидкісний 3D принтер для серійного виробництва",
 *       href: "/equipment/hp-jet-fusion-5200",
 *       image: "/hp-jet-fusion-5200.jpg"
 *     }
 *   ]}
 * />
 */
export default function EquipmentShowcase({
  title,
  description,
  equipment,
  className,
}: EquipmentShowcaseProps) {
  // Generate unique keys using name + technology combination
  const getEquipmentKey = (item: EquipmentItem) =>
    `${item.name}-${item.technology}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');

  return (
    <section className={cn('bg-base-100 relative isolate py-8 lg:py-16', className)}>
      <BgPattern pattern="dots" opacity={0.1} className="absolute inset-0" />

      <div className="custom-container relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-primary text-3xl font-bold lg:text-4xl">{title}</h2>
          {description && (
            <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
              {description}
            </p>
          )}
        </div>

        {/* Equipment Cards - Sequential Layout */}
        <ul className="4xl:grid-cols-1 4xl:gap-16 grid auto-rows-fr grid-cols-1 gap-10 xl:grid-cols-2">
          {equipment.map((item, index) => (
            <EquipmentCard key={getEquipmentKey(item)} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
