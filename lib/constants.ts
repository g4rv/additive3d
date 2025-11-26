import { NavItem } from './types';

// ============================================================================
// NAVIGATION
// ============================================================================

const MAIN_NAVIGATION_LIST: NavItem[] = [
  {
    label: '3D-друк',
    href: '/services/3d-printing',
    children: [
      {
        label: 'Калькулятор',
        href: '/services/3d-printing/calculator',
      },
      {
        label: 'MJF',
        href: '/services/3d-printing/mjf',
      },
      {
        label: 'FDM',
        href: '/services/3d-printing/fdm',
      },
      {
        label: 'LFAM',
        href: '/services/3d-printing/lfam',
      },
    ],
  },
  {
    label: '3D-сканування',
    href: '/services/3d-scanning',
  },
  {
    label: 'Послуги',
    href: '/services',
    children: [
      {
        label: 'Фарбування',
        href: '/services/dyeing',
      },
      {
        label: 'Парове прасування',
        href: '/services/steam-ironing',
      },
      {
        label: '3D-моделювання',
        href: '/services/3d-modeling',
      },
      {
        label: 'Реверс-інжиніринг',
        href: '/services/reverse-engineering',
      },
      {
        label: 'Інспекція геометрії',
        href: '/services/geometry-inspection',
      },
    ],
  },
  {
    label: 'Матеріали',
    href: '/materials',
    children: [
      {
        label: 'MJF',
        href: '/materials/mjf',
      },
      {
        label: 'FDM',
        href: '/materials/fdm',
      },
      {
        label: 'LFAM',
        href: '/materials/lfam',
      },
    ],
  },
  {
    label: 'Обладнання',
    href: '/equipment',
    children: [
      {
        label: 'MJF',
        href: '/equipment/mjf',
      },
      {
        label: 'FDM',
        href: '/equipment/fdm',
      },
      {
        label: 'LFAM',
        href: '/equipment/lfam',
      },
    ],
  },
];

// Flat navigation structure with path metadata
const NAVIGATION = {
  // Main categories
  services: {
    label: 'Послуги',
    href: '/services',
    parent: null,
    order: 1,
  },
  materials: {
    label: 'Матеріали',
    href: '/materials',
    parent: null,
    order: 2,
  },
  equipment: {
    label: 'Обладнання',
    href: '/equipment',
    parent: null,
    order: 3,
  },

  // Services sublinks
  '3d-printing': {
    label: '3D-друк',
    href: '/services/3d-printing',
    parent: 'services',
    order: 1,
  },
  '3d-scanning': {
    label: '3D-сканування',
    href: '/services/3d-scanning',
    parent: 'services',
    order: 2,
  },
  dyeing: {
    label: 'Фарбування',
    href: '/services/dyeing',
    parent: 'services',
    order: 4,
  },
  steamIroning: {
    label: 'Парове прасування',
    href: '/services/steam-ironing',
    parent: 'services',
    order: 5,
  },
  '3d-modeling': {
    label: '3D-моделювання',
    href: '/services/3d-modeling',
    parent: 'services',
    order: 3,
  },
  reverseEngineering: {
    label: 'Реверс-інжиніринг',
    href: '/services/reverse-engineering',
    parent: 'services',
    order: 6,
  },
  geometryInspection: {
    label: 'Інспекція геометрії',
    href: '/services/geometry-inspection',
    parent: 'services',
    order: 7,
  },

  // 3D printing sublinks
  calculator: {
    label: 'Калькулятор',
    href: '/services/3d-printing/calculator',
    parent: '3d-printing',
    order: 1,
  },
  '3d-print-mjf': {
    label: 'MJF',
    href: '/services/3d-printing/mjf',
    parent: '3d-printing',
    order: 2,
  },
  '3d-print-fdm': {
    label: 'FDM',
    href: '/services/3d-printing/fdm',
    parent: '3d-printing',
    order: 3,
  },
  '3d-print-lfam': {
    label: 'LFAM',
    href: '/services/3d-printing/lfam',
    parent: '3d-printing',
    order: 4,
  },

  // Materials sublinks
  'materials-mjf': {
    label: 'MJF',
    href: '/materials/mjf',
    parent: 'materials',
    order: 1,
  },
  'materials-fdm': {
    label: 'FDM',
    href: '/materials/fdm',
    parent: 'materials',
    order: 2,
  },
  'materials-lfam': {
    label: 'LFAM',
    href: '/materials/lfam',
    parent: 'materials',
    order: 3,
  },

  // Equipment sublinks
  'equipment-mjf': {
    label: 'MJF',
    href: '/equipment/mjf',
    parent: 'equipment',
    order: 1,
  },
  'equipment-fdm': {
    label: 'FDM',
    href: '/equipment/fdm',
    parent: 'equipment',
    order: 2,
  },
  'equipment-lfam': {
    label: 'LFAM',
    href: '/equipment/lfam',
    parent: 'equipment',
    order: 3,
  },
  contact: {
    label: 'Контакти',
    href: '/contact',
    parent: null,
    order: 1
  },
} as const;

// ============================================================================
// CONTACT & COMPANY INFO
// ============================================================================

const CONTACT_INFO = {
  phone: {
    label: '+38 (063) 886 20 47',
    link: 'tel:+380638862047',
  },
  phone2: {
    label: '+38 (063) 449 36 98',
    link: 'tel:+380634493698',
  },
  email: {
    label: 'info@additive.com.ua',
    link: 'mailto:info@additive.com.ua',
  },
  address: {
    label: 'вулиця Пшенична, 8 м. Київ, 03134',
    link: 'https://maps.app.goo.gl/WSeiuTJn2iRcH5pb6',
  },
};

const COMPANY_NAME = 'Additive';

// ============================================================================
// SCREEN BREAKPOINTS
// ============================================================================

const SCREEN_BREAKPOINTS = {
  xs: 375,
  sm: 480,
  md: 576,
  lg: 640,
  xl: 768,
  '2xl': 992,
  '3xl': 1024,
  '4xl': 1200,
  '5xl': 1400,
} as const;

// ============================================================================
// MATERIALS DATA
// ============================================================================

const MATERIALS_DATA = [
  // MJF Technology Materials
  {
    name: 'PA12',
    title: 'Polyamide 12 / Nylon 12',
    description:
      'Інженерний термопластик для MJF, що поєднує високу міцність, зносостійкість та хімічну стійкість',
    benefits: [
      'Висока механічна міцність і жорсткість',
      'Стійкість до масел, мастил, палива, хімікатів',
      'Стабільність розмірів та точність',
      'Матова, однорідна поверхня без видимих шарів',
      'Можливість подальшої обробки',
    ],
    bestFor: 'Серійне виробництво, функціональні прототипи та кінцеві деталі',
    technology: 'MJF',
  },

  // FDM Technology Materials
  {
    name: 'ASA',
    title: 'Acrylonitrile Styrene Acrylate',
    description:
      'Ідеальний для зовнішніх застосувань з високою стійкістю до ультрафіолету, вологи та атмосферних впливів',
    benefits: [
      'UV-стійкість',
      'Висока механічна міцність',
      'Атмосферостійкість',
      'Стійкість до вицвітання',
      'Матове покриття',
    ],
    bestFor: 'Зовнішні деталі та компоненти, що піддаються впливу погодних умов',
    technology: 'FDM',
  },
  {
    name: 'ABS-PC',
    title: 'Acrylonitrile Butadiene Styrene + Polycarbonate',
    description:
      'Комбінація двох полімерів, яка забезпечує відмінну ударну міцність та термостійкість',
    benefits: [
      'Висока стійкість до ударів',
      'Добра термостійкість',
      'Вогнестійкість UL 94 V-0',
      'Висока хімічна стійкість',
      'Поєднання жорсткості та оброблюваності',
    ],
    bestFor: 'Автомобільна та електронна промисловість, високонавантажені деталі',
    technology: 'FDM',
  },
  {
    name: 'Ultem™ 9085',
    title: 'PEI – Polyetherimide',
    description:
      'Високопродуктивний матеріал авіаційного класу з сертифікацією FST (вогонь, дим, токсичність)',
    benefits: [
      'Аерокосмічна сертифікація FST',
      'Висока хімічна та термічна стійкість',
      'Легкий та надзвичайно міцний',
      'Робоча температура до 160°C',
      'Відповідає стандартам безпеки',
    ],
    bestFor: 'Аерокосмічна промисловість, високонавантажені функціональні деталі',
    technology: 'FDM',
  },
  {
    name: 'PC',
    title: 'Полікарбонат',
    description:
      'Надзвичайно міцний матеріал, що витримує високі температури та механічні навантаження',
    benefits: [
      'Надзвичайна ударна міцність',
      'Висока теплостійкість (до 120°C)',
      'Стійкість до деформацій при високих температурах',
      'Висока хімічна стійкість',
      'Не тріскається при деформації',
    ],
    bestFor: 'Технічні та функціональні деталі, навантажені конструкції',
    technology: 'FDM',
  },
];

// ============================================================================
// EQUIPMENT DATA
// ============================================================================

const EQUIPMENT_DATA = [
  // MJF Technology Equipment
  {
    name: 'HP Jet Fusion 5200',
    title: 'Промисловий MJF 3D-принтер',
    description:
      'Високопродуктивна система для серійного виробництва деталей зі складною геометрією, високою точністю та однорідними механічними властивостями. Індустріальне рішення, що дозволяє виготовляти сотні деталей за день з якістю, придатною до кінцевого використання.',
    benefits: [
      'Висока швидкість друку (до 5058 см³/год)',
      'Велика робоча камера (380 × 284 × 380 мм)',
      'Висока точність (±0.2 мм або ±0.3%)',
      'Автоматизовані модулі пост-обробки',
      'Відсутність потреби у підтримках',
      'Однорідні механічні властивості',
    ],
    bestFor: 'Серійне виробництво, функціональні деталі, прототипи з високою точністю',
    technology: 'MJF',
    specifications: {
      buildChamber: '380 × 284 × 380 мм',
      layerThickness: '80 мкм',
      materials: ['PA12'],
      accuracy: '±0.2 мм або ±0.3%',
      printSpeed: 'До 5058 см³/год',
    },
    url: '/equipment/hp-jet-fusion-5200',
  },

  // FDM Technology Equipment
  {
    name: 'Stratasys Fortus 400mc',
    title: 'Професійна FDM система',
    description:
      'Потужна система адитивного виробництва, призначена для створення функціональних прототипів, складних технічних деталей та малосерійного виробництва. Поєднує високу точність, широкий вибір інженерних матеріалів та стабільну якість друку.',
    benefits: [
      'Висока точність та повторюваність',
      'Широкий вибір промислових матеріалів',
      'Розчинні підтримки для складних геометрій',
      'Велика робоча камера (до 406 × 355 × 406 мм)',
      'Автоматизація процесів',
      'Сумісність із корпоративними CAD-системами',
    ],
    bestFor: 'Машинобудування, авіаційна та автомобільна галузь, медичні застосування',
    technology: 'FDM',
    specifications: {
      buildChamber: 'до 406 × 355 × 406 мм',
      layerThickness: '0,127–0,330 мм',
      materials: ['ABS-M30', 'PC', 'PC-ABS', 'ULTEM 9085', 'PPSF', 'ASA', 'Nylon 12'],
      accuracy: '±0,09 мм або ±0,0015 мм/мм',
      supportSystem: 'Розчинні підтримки SR-30 / SR-100',
    },
    url: '/equipment/stratasys-fortus-400mc',
  },
  {
    name: 'Stratasys Fortus 250mc',
    title: 'Професійний FDM-принтер',
    description:
      'Професійна система для виготовлення точних і міцних пластикових деталей зі стабільною якістю. Ідеально підходить для функціональних прототипів та виробничих компонентів.',
    benefits: [
      'Стабільна якість друку',
      'Висока точність (±0.1 – 0.2 мм)',
      'Камера з підігрівом',
      'Розчинні підтримки (S support)',
      'Надійність та простота експлуатації',
      'Підігрів платформи',
    ],
    bestFor: 'Функціональні прототипи та виробничі компоненти',
    technology: 'FDM',
    specifications: {
      buildChamber: '254 × 254 × 305 мм',
      layerThickness: '0.178 мм',
      materials: ['ABS-M30'],
      accuracy: '±0.1 – 0.2 мм',
      heatedChamber: true,
      heatedBed: true,
    },
    url: '/equipment/stratasys-fortus-250mc',
  },
];

// ============================================================================
// EXPORTS - Single export point for all constants
// ============================================================================

export {
  COMPANY_NAME,
  // Contact & Company
  CONTACT_INFO,
  EQUIPMENT_DATA,
  // Navigation
  MAIN_NAVIGATION_LIST,
  // Data
  MATERIALS_DATA,
  NAVIGATION,
  // Screen
  SCREEN_BREAKPOINTS
};

