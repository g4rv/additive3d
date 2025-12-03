'use client';

import BgPattern from '@/components/ui/bg-pattern';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import Badge from '../ui/badge';
import MaterialCard from './MaterialCard';
import type { MaterialItem, MaterialsShowcaseProps } from './MaterialsShowcase.types';

/**
 * MaterialsShowcase - Display 3D printing materials with comprehensive technical data
 */
export default function MaterialsShowcase({ className }: MaterialsShowcaseProps) {
  // Materials data
  const materials: MaterialItem[] = [
    // LFAM Materials
    {
      name: 'PP',
      fullname: 'Поліпропілен',
      description:
        'Високостійкий до розчинників та хімічних речовин, легкий полімер, з добрими механічними властивостями та ударостійкістю. Може витримувати температури до 80°C (176°F) та замінити скловолокно та алюміній. Кваліфікований для виробництва функціональних деталей та інструментів у кількох секторах.',
      technology: 'LFAM',
      variants: ['PP + 35% склофібри'],
    },
    {
      name: 'ABS',
      fullname: 'Акрилонітрилбутадієнстирол',
      description:
        'Рекомендується, коли потрібно наносити клеї, покриття або інші хімічні речовини, має хороші механічні властивості та стабільний під час друку. Підходить для низькотемпературного застосування до 80°C, такого як прототипування, вакуумні форми та ложементи для обрізки та захвату, а також готові функціональні деталі, що не піддаються механічному тиску.',
      technology: 'LFAM',
      variants: ['ABS + 30% склофібри', 'ABS + 20% карбонофої фібри'],
    },
    {
      name: 'ASA',
      fullname: 'Акрилонітрилстирол акрилат',
      description:
        'Рекомендується, коли потрібна хімічна стійкість та захист від ультрафіолетового випромінювання, а також хороші механічні властивості, такі як еластичність та міцність. Цей матеріал кваліфікований та використовується для зовнішнього застосування, дизайну та виготовлення меблевих виробів.',
      technology: 'LFAM',
      variants: ['ASA + 20% склофібри', 'ASA чистий'],
    },
    {
      name: 'PETG',
      fullname: 'Поліетилентерефталат гліколь',
      description:
        'Полімер на основі поліестеру доступний у переробленому, прозорому або армованому вуглецевим волокном варіантах, і має чудові вогнестійкі та стійкі до ультрафіолетового випромінювання властивості. Він витримує температури до 80°C. Ідеально підходить для ПВХ-подібних, зовнішніх та внутрішніх оздоблених деталей, дизайнерських та меблевих застосувань, для архітектури та залізничного сектору (рекомендовано PIPG).',
      technology: 'LFAM',
      variants: ['PET-G + 20% склофібри (повторно перероблений)'],
    },
    {
      name: 'TPE',
      fullname: 'Термопластичний еластомер',
      description:
        'Цей високоміцний та гнучкий еластомер на основі ТПЕ ідеально підходить для оптимізованих гнучких конструкцій. Він витримує твердість до 90 за Шором А та робочу температуру 80°C і широко використовується для друку великомасштабних гумоподібних деталей для меблів, сидінь та дизайнерських компонентів.',
      technology: 'LFAM',
      variants: [],
    },
    {
      name: 'PLA',
      fullname: 'Полілактид',
      description:
        'Біоматеріал, легкий в обробці. Широкий вибір кольорів. Його використовують для виготовлення меблів для дому, предметів мистецтва та дизайну, його легко подрібнити та переробити.',
      technology: 'LFAM',
      variants: [],
    },
    {
      name: 'PEI',
      fullname: 'Поліефірімід',
      description:
        'Відмінна вогнестійкість згідно зі стандартом UL94 V0, видатна термостійкість, стабільні фізичні та механічні властивості, висока міцність та жорсткість до 200°C, а також чудова хімічна стійкість до рідин, таких як вуглеводні та спирти. Ідеально підходить для високотемпературних автоклавних інструментів та конструкційних кінцевих деталей у таких галузях, як аерокосмічна, автомобільна та залізнична.',
      technology: 'LFAM',
      variants: ['PEI + 20% карбонофої фібри'],
    },
    {
      name: 'PC',
      fullname: 'Полікарбонат',
      description:
        'Рекомендовано завдяки своїй хімічній стійкості, чудовим механічним та термічним властивостям. Композит, армований вуглецевим волокном, може витримувати середньотемпературні автоклавні процеси, до 130°C та тиск 3–6 бар. Він ідеально підходить для функціонального та інженерного застосування, включаючи автоклавні форми та термостійкі інструменти для затвердіння, а також інструменти для ламінування.',
      technology: 'LFAM',
      variants: ['PC + 20% карбонофої фібри'],
    },
    // FDM Materials
    {
      name: 'ABS',
      fullname: 'ABS-M30',
      description:
        'Міцний промисловий ABS-матеріал для Stratasys Fortus та Dimension. Забезпечує стабільну якість та точність, підходить для функціональних деталей.',
      technology: 'FDM',
      variants: ['ABS-M30 – стандартний', 'ABSplus – для Stratasys Dimension'],
    },
    {
      name: 'ASA',
      fullname: 'Акрилонітрилстирол акрилат',
      description:
        'Ідеальний для зовнішніх застосувань. Має високу стійкість до ультрафіолету, вологи та атмосферних впливів. UV-стійкий. Гарна механічна міцність. Плавне матове покриття.',
      technology: 'FDM',
      variants: ['ASA – натуральний / білий / чорний', 'ASA – шліфування, ґрунтування, фарбування'],
    },
    {
      name: 'PC-ABS',
      fullname: 'Полікарбонат + Акрилонітрилбутадієнстирол',
      description:
        'Комбінація двох полімерів, яка забезпечує відмінну ударну міцність та термостійкість. Висока ударостійкість та добра термостійкість. Використовується в автомобільній та електронній промисловості.',
      technology: 'FDM',
      variants: ['PC-ABS – натуральний', 'PC-ABS – чорний'],
    },
    {
      name: 'Nylon-12',
      fullname: 'Поліамід',
      description:
        'Міцний та стабільний інженерний матеріал, що підходить для функціональних технічних деталей. Сумісний із Fortus 400mc.',
      technology: 'FDM',
      variants: [],
    },
    {
      name: 'Ultem 9085 (PEI)',
      fullname: 'Поліефірімід',
      description:
        'Високопродуктивний авіаційний матеріал із сертифікацією FST (вогонь, дим, токсичність). Легкий, надзвичайно міцний, хімічно та термічно стійкий. Використовується в авіації та транспорті.',
      technology: 'FDM',
      variants: ['Ultem 9085 – бурштиновий напівпрозорий', 'Ultem 9085 – чорний'],
    },
    // MJF Materials
    {
      name: 'Nylon-12',
      fullname: 'Поліамід',
      description:
        'Інженерний термопластик із високою міцністю, зносостійкістю та хімічною стійкістю. Ідеальний для серійного виробництва, корпусів, кріплень та функціональних прототипів.',
      technology: 'MJF',
      variants: [
        'PA12 – сірий',
        'PA12 – чорний (після обробки)',
        'PA12 – фарбований у будь-який колір',
      ],
    },
  ];

  // Get available technologies
  const availableTechnologies = ['LFAM', 'FDM', 'MJF'];

  // Set initial selected technology
  const [selectedTechnology, setSelectedTechnology] = useState<string>('LFAM');

  // Get materials for selected technology
  const getMaterialsForTechnology = (tech: string) => {
    switch (tech) {
      case 'LFAM':
        return materials.filter((m) => m.technology === 'LFAM');
      case 'FDM':
        return materials.filter((m) => m.technology === 'FDM');
      case 'MJF':
        return materials.filter((m) => m.technology === 'MJF');
      default:
        return [];
    }
  };

  const filteredMaterials = getMaterialsForTechnology(selectedTechnology);

  // Generate unique keys using name + technology combination
  const getMaterialKey = (item: MaterialItem) =>
    `${item.name}-${item.technology}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');

  return (
    <section className={cn('bg-base-100 relative isolate py-8 lg:py-16', className)}>
      <BgPattern pattern="dots" opacity={0.1} className="absolute inset-0" />

      <div className="custom-container relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-primary text-3xl font-bold lg:text-4xl">Наші матеріали</h2>
          <p className="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
            Комплексний вибір інженерних термопластиків для адитивного виробництва для різних
            застосувань - від функціональних прототипів до серійного виробництва.
          </p>
        </div>

        {/* Technology Filter Pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {availableTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTechnology === tech ? 'primary' : 'outlined'}
              size="lg"
              className="hover:bg-primary hover:text-primary-content cursor-pointer transition-colors duration-[var(--duration-fast)]"
              onClick={() => setSelectedTechnology(tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Materials Grid - 3 columns on desktop */}
        <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {filteredMaterials.map((item, index) => (
            <MaterialCard key={getMaterialKey(item)} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
