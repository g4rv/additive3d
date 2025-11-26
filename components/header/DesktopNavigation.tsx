'use client';

import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { NavItem } from '@/lib/types';
import ButtonLink from '../ui/button-link';

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const resetFocus = () => {
  // Reset focus when header re-renders (e.g., on navigation)
  if (
    typeof document !== 'undefined' &&
    document.activeElement &&
    'blur' in document.activeElement
  ) {
    (document.activeElement as HTMLElement).blur();
  }
};

const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Animated Navigation Items */}
      <ul className="flex items-center gap-2">
        {navItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;

          if (hasChildren) {
            // Menu item with dropdown using Tailwind group
            return (
              <li key={item.label} className="group focus-within relative">
                <ButtonLink
                  href={item.href}
                  active={pathname === item.href}
                  className="inline-flex items-center gap-2"
                  onMouseOver={resetFocus}
                  onClick={resetFocus}
                >
                  {item.label}
                  <ChevronDownIcon
                    size={16}
                    className="group-hover:text-primary text-current transition-all duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
                  />
                </ButtonLink>

                {/* Enhanced Dropdown Menu */}
                <ul className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <li className="bg-base-100 border-base-300 flex min-w-50 flex-col gap-1 rounded-xl border p-2 shadow-2xl">
                    {item.children?.map((child) => (
                      <ButtonLink
                        key={child.href}
                        href={child.href}
                        active={pathname === child.href}
                        className="hover:bg-base-200 p-3 text-left transition-all duration-200"
                        onMouseOver={resetFocus}
                        onClick={resetFocus}
                      >
                        {child.label}
                      </ButtonLink>
                    ))}
                  </li>
                </ul>
              </li>
            );
          } else {
            // Simple menu item without dropdown
            return (
              <li key={item.label}>
                <ButtonLink href={item.href} active={pathname === item.href}>
                  {item.label}
                </ButtonLink>
              </li>
            );
          }
        })}
      </ul>

      {/* Animated Login Button */}
      <div>
        <ButtonLink
          href="/login"
          variant="secondary"
          className="transition-all duration-300 hover:shadow-lg"
        >
          Вхід
        </ButtonLink>
      </div>
    </>
  );
};

export default DesktopNavigation;
