import CTA from '@/components/cta';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import MaterialsShowcase from '@/components/materials-showcase';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Матеріали для 3D-друку',
  description:
    'Інженерні термопластики для промислових застосувань. PA12, Ultem 9085, PC, ASA, ABS-M30 та інші матеріали для MJF, FDM та LFAM технологій.',
  path: '/materials',
});

export default function MaterialsPage() {
  return (
    <>
      <HeroFancy
        title="Матеріали для 3D-друку"
        description="Інженерні термопластики для промислових застосувань з детальною технічною інформацією"
      />
      <MaterialsShowcase />
      <CTA
        title="Не знаєте який матеріал обрати?"
        description="Отримайте експертну консультацію щодо вибору оптимального матеріалу для вашого проєкту"
        cta1={{ text: 'Розрахувати вартість', href: '/services/3d-printing/calculator' }}
        cta2={{ text: "Зв'язатися з нами", href: '/contact' }}
      />
    </>
  );
}
