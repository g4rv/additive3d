import { CardList } from '@/components/ui/card-list';
import { MATERIALS_DATA } from '@/lib/constants';

/**
 * MaterialsShowcase - Showcase of 3D printing materials
 * Displays available materials with their properties and applications
 */
export default function MaterialsShowcase() {
  return (
    <CardList
      title="Матеріали для 3D друку"
      description="Оберіть відповідний матеріал для вашого проєкту з нашої колекції інженерних термопластиків"
      cards={MATERIALS_DATA}
      ctaText="Допомога з вибором матеріалу"
      cardLinkPrefix="/materials/"
      cardButtonText="Деталі матеріалу"
      backgroundPattern={{
        pattern: 'dots',
        size: 30,
        color: 'rgb(59, 130, 246)',
        opacity: 0.05,
      }}
    />
  );
}
