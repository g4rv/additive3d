import { NavItem } from './Header.types';

const headerNav: NavItem[] = [
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

export default headerNav;
