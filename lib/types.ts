export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SlugPageProps {
  params: Promise<{ slug: string }>;
}
