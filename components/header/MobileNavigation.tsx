'use client';

import { cn } from '@/utils/cn';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';
import type { NavItem } from './Header.types';

interface MobileNavigationProps {
  navItems: NavItem[];
}

const MobileNavigation = ({ navItems }: MobileNavigationProps) => {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const isTablet = useMediaQuery('above', 640);

  const onClose = () => setIsBurgerOpen(false);

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.clear();
        newSet.add(label);
      }
      return newSet;
    });
  };

  const renderMobileNavItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openDropdowns.has(item.label);

    return (
      <div key={item.label} className="mb-2">
        <div className="border-base-300 flex w-full rounded-lg border">
          <Link
            href={item.href}
            className={cn(
              'block grow rounded-l-lg p-3.5 text-base font-medium transition-all duration-200',
              isActive(item.href)
                ? 'text-warning bg-warning/10'
                : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
            )}
            onClick={onClose}
          >
            {item.label}
          </Link>

          {hasChildren && (
            <button
              onClick={() => toggleDropdown(item.label)}
              className={cn(
                'border-base-300 flex cursor-pointer items-center justify-center rounded-r-lg border-l p-3.5 text-left text-base font-medium transition-all duration-200',
                isOpen
                  ? 'bg-base-200'
                  : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <ChevronDownIcon size={20} className={cn('duration-200', !isOpen && '-rotate-90')} />
            </button>
          )}
        </div>

        {isOpen && (
          <div className="border-base-300 my-4 ml-4 border-l-2 pl-4">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'mb-2 block rounded-lg p-3 text-sm font-medium transition-all duration-150',
                  isActive(child.href)
                    ? 'text-warning bg-warning/10'
                    : 'text-base-content/50 hover:text-base-content hover:bg-base-200'
                )}
                onClick={onClose}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button
        className="border-base-300 text-base-content hover:bg-base-200 hover:border-base-content/70 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-transparent transition-all duration-200"
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        aria-expanded={isBurgerOpen}
        aria-label="Toggle navigation menu"
      >
        <span
          className={cn(
            'bg-base-content absolute top-[30%] right-0 left-0 m-auto h-0.5 w-[50%] duration-100',
            isBurgerOpen && 'opacity-0'
          )}
        />
        <span
          className={cn(
            'bg-base-content absolute top-0 right-0 bottom-0 left-0 m-auto h-0.5 w-[50%] duration-200',
            isBurgerOpen && 'rotate-45'
          )}
        />
        <span
          className={cn(
            'bg-base-content absolute top-0 right-0 bottom-0 left-0 m-auto h-0.5 w-[50%] duration-200',
            isBurgerOpen && 'rotate-135'
          )}
        />
        <span
          className={cn(
            'bg-base-content absolute right-0 bottom-[30%] left-0 m-auto h-0.5 w-[50%] duration-100',
            isBurgerOpen && 'opacity-0'
          )}
        />
      </button>

      <div
        className={cn(
          'bg-base-100 animate-in fade-in absolute top-full right-0 left-0 duration-300',
          isTablet &&
            'border-base-300 left-auto w-full max-w-[50vw] rounded-bl-2xl border border-r-0',
          isBurgerOpen ? 'block' : 'hidden'
        )}
      >
        <div className={cn('px-4 py-4 lg:px-8', isTablet && 'pb-6')}>
          {navItems.map((item) => renderMobileNavItem(item))}

          <div className="border-base-300 mt-6 border-t pt-6">
            <Link
              href="/login"
              className="bg-warning text-warning-content hover:bg-warning/90 flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-200"
              onClick={onClose}
            >
              Вхід
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
