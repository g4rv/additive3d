import { NavItem } from './types';

export const MAIN_NAVIGATION_LIST: NavItem[] = [
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
        href: '/services/dying',
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
    ],
  },
];

export const CONTACT_INFO = {
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

export const COMPANY_NAME = 'Additive';