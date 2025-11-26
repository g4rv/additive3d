import CTA from '@/components/cta';
import EquipmentShowcase from '@/components/equipment-showcase';
import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';

export default function EquipmentPage() {
  const equipmentData = [
    {
      name: 'HERON 300 HV',
      technology: 'LFAM',
      description:
        'Великоформатний адитивний принтер для виготовлення великих деталей, корпусів і форм — ідеальний для масштабного виробництва без потреби у литті.',
      href: '/equipment/heron-300-hv',
      image: '/Technology/LFAM/HERON 300 HV/heron-300-hv-no-bg.png',
      specs: [
        "Об'єм побудови: 3000 x 2000 x 1000 мм",
        'Швидкість: до 50 кг/год',
        'Матеріали: композитні гранули',
      ],
    },
    {
      name: 'HP Jet Fusion 5200',
      technology: 'MJF',
      description:
        'Швидкісний промисловий 3D-принтер для серійного виробництва функціональних деталей з точною геометрією і якісною поверхнею — без потреби у формах.',
      href: '/equipment/hp-jet-fusion-5200',
      image: '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-with-build-unit.png',
      specs: [
        'Швидкість друку: до 4000 см³/год',
        'Точність: ±0.1 мм',
        'Матеріали: PA12, TPU',
        "Об'єм побудови: 380 x 284 x 380 мм",
      ],
    },
    {
      name: 'Fortus 400mc',
      technology: 'FDM',
      description:
        'Надійний FDM-принтер для міцних термопластичних деталей: корпусів, конструкцій, інструментів та «end-use» компонентів із інженерних матеріалів.',
      href: '/equipment/fortus-400mc',
      image: '/Technology/FDM/Fortus 400mc/fortus-400mc.png',
      specs: [
        'Точність: ±0.127 мм',
        'Матеріали: ABS, PC, Ultem',
        "Об'єм побудови: 406 x 355 x 406 мм",
      ],
    },
    {
      name: 'Fortus 250',
      technology: 'FDM',
      description:
        'Компактний FDM-принтер для швидкого прототипування або виготовлення дрібних/середніх деталей.',
      href: '/equipment/fortus-250',
      image: '/Technology/FDM/Fortus 250/fortus-250.png',
      specs: [
        'Точність: ±0.127 мм',
        'Матеріали: ABS, PC, ASA',
        "Об'єм побудови: 254 x 254 x 305 мм",
        'Ідеально для прототипів',
      ],
    },
  ];

  return (
    <>
      <HeroFancy
        title="Наше обладнання"
        description="Професійні 3D принтери для промислового виробництва та прототипування"
      />
      <EquipmentShowcase
        title="Наше обладнання"
        description="Професійні 3D принтери для промислового виробництва та прототипування"
        equipment={equipmentData}
      />
      <CTA />
    </>
  );
}
