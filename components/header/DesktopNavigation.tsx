'use client';

import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import type { NavItem } from './Header.types';

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  return (
    <>
      <ul className="flex items-center gap-2">
        {navItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;

          return (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-300',
                  isActive(item.href)
                    ? 'text-warning bg-warning/10'
                    : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                )}
                aria-haspopup="true"
              >
                {item.label}

                {hasChildren && (
                  <ChevronDownIcon
                    size={16}
                    className="text-base-content/70 transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
                  />
                )}
              </Link>

              {hasChildren && (
                <ul className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <li
                    className={cn(
                      'bg-base-100 border-base-300 min-w-72 rounded-xl border shadow-2xl backdrop-blur-md'
                    )}
                    role="menu"
                  >
                    <div className="p-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'mb-1 block rounded-lg p-3 text-sm font-medium transition-all duration-300',
                            isActive(child.href)
                              ? 'text-warning bg-warning/10'
                              : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                          )}
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <Link
        href="/login"
        className="bg-warning text-warning-content hover:bg-warning/90 inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200"
      >
        Вхід
      </Link>
    </>
  );
};

export default DesktopNavigation;
