import { CardList } from '@/components/ui/card-list';
import { EQUIPMENT_DATA } from '@/lib/constants';

/**
 * EquipmentShowcase - Showcase of 3D printing equipment
 * Displays available printers and manufacturing equipment
 */
export default function EquipmentShowcase() {
  return (
    <CardList
      title="Наше обладнання"
      description="Сучасне промислове обладнання для точного та швидкого виробництва ваших деталей"
      cards={EQUIPMENT_DATA}
      ctaText="Дізнатися про обладнання"
      cardLinkPrefix="/equipment/"
      cardButtonText="Технічні характеристики"
      backgroundPattern={{
        pattern: 'grid',
        size: 40,
        color: 'rgb(168, 85, 247)',
        opacity: 0.06,
      }}
    />
  );
}
