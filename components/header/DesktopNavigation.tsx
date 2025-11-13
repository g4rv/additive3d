'use client';

import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils/cn';
import type { NavItem } from './Header.types';

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  const pathname = usePathname();
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  const closeDropdown = () => {
    setOpenDropdownIndex(null);
  };

  return (
    <>
      <ul className="flex items-center gap-2">
        {navItems.map((item, index) => {
          const hasChildren = item.children && item.children.length > 0;

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => hasChildren && setOpenDropdownIndex(index)}
              onMouseLeave={closeDropdown}
            >
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-300',
                  isActive(item.href)
                    ? 'text-warning bg-warning/10'
                    : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                )}
                onClick={closeDropdown}
                aria-haspopup={hasChildren}
                aria-expanded={hasChildren ? openDropdownIndex === index : undefined}
              >
                {item.label}

                {hasChildren && (
                  <ChevronDownIcon
                    size={16}
                    className={cn(
                      'text-base-content/70 transition-transform duration-300',
                      openDropdownIndex === index && 'rotate-180'
                    )}
                  />
                )}
              </Link>

              {hasChildren && (
                <ul
                  className={cn(
                    'absolute top-full left-0 z-50 pt-2 transition-all duration-300',
                    openDropdownIndex === index ? 'visible opacity-100' : 'invisible opacity-0'
                  )}
                >
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
                          onClick={closeDropdown}
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
