import { NavItem } from './types';

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
  smoothing: {
    label: 'Хімічне згладжування',
    href: '/services/smoothing',
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
    order: 1,
  },
  // Authentication pages
  login: {
    label: 'Увійти',
    href: '/auth/login',
    parent: null,
    order: 8,
  },
  register: {
    label: 'Реєстрація',
    href: '/auth/register',
    parent: null,
    order: 9,
  },
  forgotPassword: {
    label: 'Забули пароль',
    href: '/auth/forgot-password',
    parent: null,
    order: 10,
  },
  resetPassword: {
    label: 'Скинути пароль',
    href: '/auth/reset-password',
    parent: null,
    order: 11,
  },
  verifyEmail: {
    label: 'Підтвердження пошти',
    href: '/auth/verify-email',
    parent: null,
    order: 12,
  },
  authRequired: {
    label: 'Потрібна авторизація',
    href: '/auth/required',
    parent: null,
    order: 12,
  },
  authCallback: {
    label: 'Зворотній виклик',
    href: '/auth/callback',
    parent: null,
    order: 13,
  },

  // User pages
  dashboard: {
    label: 'Профіль',
    href: '/user/profile',
    parent: null,
    order: 13,
  },
  profile: {
    label: 'Налаштування профілю',
    href: '/user/user-settings',
    parent: null,
    order: 14,
  },
  adminDashboard: {
    label: 'Адмін панель',
    href: '/user/admin-dashboard',
    parent: null,
    order: 15,
  },
  adminMockManage: {
    label: 'Mock: Управління',
    href: '/user/admin-dashboard/mock-manage',
    parent: null,
    order: 16,
  },
} as const;

// ============================================================================
// NAVIGATION
// ============================================================================

const MAIN_NAVIGATION_LIST: NavItem[] = [
  {
    label: '3D-друк',
    href: NAVIGATION['3d-printing'].href,
    children: [
      {
        label: 'Калькулятор',
        href: NAVIGATION.calculator.href,
      },
      {
        label: 'MJF',
        href: NAVIGATION['3d-print-mjf'].href,
      },
      {
        label: 'FDM',
        href: NAVIGATION['3d-print-fdm'].href,
      },
      {
        label: 'LFAM',
        href: NAVIGATION['3d-print-lfam'].href,
      },
    ],
  },
  {
    label: '3D-сканування',
    href: NAVIGATION['3d-scanning'].href,
  },
  {
    label: 'Послуги',
    href: NAVIGATION.services.href,
    children: [
      {
        label: 'Фарбування',
        href: NAVIGATION.dyeing.href,
      },
      {
        label: 'Хімічне згладжування',
        href: NAVIGATION.smoothing.href,
      },
      {
        label: '3D-моделювання',
        href: NAVIGATION['3d-modeling'].href,
      },
      {
        label: 'Реверс-інжиніринг',
        href: NAVIGATION.reverseEngineering.href,
      },
      {
        label: 'Інспекція геометрії',
        href: NAVIGATION.geometryInspection.href,
      },
    ],
  },
  {
    label: 'Матеріали',
    href: NAVIGATION.materials.href,
  },
  {
    label: 'Обладнання',
    href: NAVIGATION.equipment.href,
    children: [
      {
        label: 'MJF',
        href: NAVIGATION['equipment-mjf'].href,
      },
      {
        label: 'FDM',
        href: NAVIGATION['equipment-fdm'].href,
      },
      {
        label: 'LFAM',
        href: NAVIGATION['equipment-lfam'].href,
      },
    ],
  },
];

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
    label: 'м. Київ',
    link: 'https://maps.app.goo.gl/iyCgZSjzWsu1soML8',
  },
};

const COMPANY_NAME = 'Additive3D';

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
    image: '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-with-build-unit.png',
    images: [
      '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-with-build-unit.png',
      '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200.jpg',
      '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-process.jpg',
      '/Technology/MJF/HP Jet fusion 5200/hp-jet-fusion-5200-collection.png',
    ],
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
    image: '/Technology/FDM/Fortus 400mc/fortus-400mc.png',
    images: [
      '/Technology/FDM/Fortus 400mc/fortus-400mc.png',
      '/Technology/FDM/Fortus 400mc/fortus-400mc.jpg',
      '/Technology/FDM/Fortus 400mc/fortus-400mc-oven.jpg',
      '/Technology/FDM/Fortus 400mc/fortus-400mc-cartridge.jpg',
    ],
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
    image: '/Technology/FDM/Fortus 250/fortus-250.png',
    images: [
      '/Technology/FDM/Fortus 250/fortus-250.png',
      '/Technology/FDM/Fortus 250/fortus-250-printing.jpg',
      '/Technology/FDM/Fortus 250/fortus-250-cartridge.jpg',
    ],
    url: '/equipment/stratasys-fortus-250mc',
  },

  // LFAM Technology Equipment
  {
    name: 'HERON 300 HV',
    title: 'Великоформатний LFAM принтер',
    description:
      'Великоформатний адитивний принтер для виготовлення великих деталей, корпусів і форм — ідеальний для масштабного виробництва без потреби у литті. Використовує композитні гранули для створення міцних великогабаритних конструкцій.',
    benefits: [
      'Великий обсяг побудови (3000 × 2000 × 1000 мм)',
      'Висока швидкість нанесення матеріалу (до 50 кг/год)',
      'Використання композитних гранул',
      'Економічно вигідне виробництво великих деталей',
      'Підходить для форм та оснастки',
      'Швидке виробництво прототипів великого розміру',
    ],
    bestFor: 'Великоформатні корпуси, виробничі форми, будівельні компоненти, оснастка',
    technology: 'LFAM',
    specifications: {
      buildChamber: '3000 × 2000 × 1000 мм',
      printSpeed: 'До 50 кг/год',
      materials: ['PP + 35% GF', 'ABS + 30% GF', 'ABS + 20% CF', 'BioPLA'],
      layerThickness: 'Варіюється залежно від застосування',
    },
    image: '/Technology/LFAM/HERON 300 HV/heron-300-hv-no-bg.png',
    images: [
      '/Technology/LFAM/HERON 300 HV/heron-300-hv-no-bg.png',
      '/Technology/LFAM/HERON 300 HV/heron-300-hv.jpg',
      '/Technology/LFAM/HERON 300 HV/heron-300-hv-printing.jpg',
      '/Technology/LFAM/HERON 300 HV/heron-300-hv-printing-2.jpg',
      '/Technology/LFAM/HERON 300 HV/heron-300-hv-extruder.jpg',
    ],
    url: '/equipment/heron-300-hv',
  },
];

// ============================================================================
// ROUTE HELPERS - Extract just the hrefs for easy access
// ============================================================================

export const ROUTES = {
  // Services
  services: NAVIGATION.services.href,
  materials: NAVIGATION.materials.href,
  equipment: NAVIGATION.equipment.href,
  contact: NAVIGATION.contact.href,

  // Auth
  login: NAVIGATION.login.href,
  register: NAVIGATION.register.href,
  forgotPassword: NAVIGATION.forgotPassword.href,
  resetPassword: NAVIGATION.resetPassword.href,
  verifyEmail: NAVIGATION.verifyEmail.href,
  authRequired: NAVIGATION.authRequired.href,
  authCallback: NAVIGATION.authCallback.href,

  // User
  dashboard: NAVIGATION.dashboard.href,
  profile: NAVIGATION.profile.href,
  adminDashboard: NAVIGATION.adminDashboard.href,
  adminMockManage: NAVIGATION.adminMockManage.href,

  // Services - detailed
  '3dPrinting': NAVIGATION['3d-printing'].href,
  '3dScanning': NAVIGATION['3d-scanning'].href,
  '3dModeling': NAVIGATION['3d-modeling'].href,
  dyeing: NAVIGATION.dyeing.href,
  smoothing: NAVIGATION.smoothing.href,
  reverseEngineering: NAVIGATION.reverseEngineering.href,
  geometryInspection: NAVIGATION.geometryInspection.href,

  // 3D Printing sub-pages
  calculator: NAVIGATION.calculator.href,
  mjf: NAVIGATION['3d-print-mjf'].href,
  fdm: NAVIGATION['3d-print-fdm'].href,
  lfam: NAVIGATION['3d-print-lfam'].href,
} as const;

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
  SCREEN_BREAKPOINTS,
};
