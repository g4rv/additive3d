'use client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import useBodyLock from '@/hooks/useBodyLock';
import useFocusTrap from '@/hooks/useFocusTrap';
import useMediaQuery from '@/hooks/useMediaQuery';
import { NavItem } from '@/lib/types';
import ButtonLink from '../ui/button-link';

interface MobileNavigationProps {
  navItems: NavItem[];
}

export interface MobileNavigationRef {
  closeBurger: () => void;
}

const MobileNavigation = forwardRef<MobileNavigationRef, MobileNavigationProps>(
  ({ navItems }, ref) => {
    const pathname = usePathname();
    const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const burgerButtonRef = useRef<HTMLButtonElement>(null);

    useBodyLock(isBurgerOpen);

    // Create a container ref that includes both burger button and navigation
    const focusTrapContainerRef = useRef<HTMLDivElement | null>(null);

    // Focus trap for mobile navigation
    useFocusTrap({
      container: focusTrapContainerRef,
      isEnabled: isBurgerOpen,
      restoreFocus: burgerButtonRef,
    });

    // Click outside to close
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!isBurgerOpen) return;

        const target = event.target as Element;

        // Close if click is outside the focus trap container
        if (!focusTrapContainerRef.current?.contains(target)) {
          setIsBurgerOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isBurgerOpen]);

    const closeBurger = () => {
      setIsBurgerOpen(false);
      setOpenDropdowns(new Set()); // Clear dropdowns when closing
    };

    useImperativeHandle(
      ref,
      () => ({
        closeBurger,
      }),
      []
    );

    const isTablet = useMediaQuery('above', 640);

    const handleClose = () => {
      setIsBurgerOpen(false);
    };

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

    return (
      <div ref={focusTrapContainerRef}>
        <button
          ref={burgerButtonRef}
          className="border-base-300 text-base-content hover:bg-base-200 hover:border-base-content/70 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-transparent transition-all duration-200"
          onClick={() => setIsBurgerOpen((prev) => !prev)}
          aria-expanded={isBurgerOpen}
          aria-label={`${isBurgerOpen ? 'Закрити' : 'Відкрити'} мобільне меню`}
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

        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: isBurgerOpen ? 'calc(100dvh - var(--header-height))' : 0,
          }}
          transition={{
            type: 'tween',
            duration: 0.4,
          }}
          className={cn(
            'bg-base-100 absolute top-[calc(100%+1px)] right-0 left-0 overflow-hidden',
            isTablet && 'border-base-300 left-auto w-full max-w-[50vw] border-l'
          )}
        >
          <nav
            className={cn('flex h-full flex-col gap-4 py-4 pr-1 pl-4 lg:px-8', isTablet && 'pb-6')}
          >
            <ul className="flex flex-col overflow-y-scroll pr-3">
              {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = openDropdowns.has(item.label);

                return (
                  <li key={item.label}>
                    <div className="border-base-300 flex w-full overflow-clip rounded-lg border">
                      <Link
                        href={item.href}
                        className={cn(
                          'block grow p-3.5 text-base font-medium',
                          isActive(item.href)
                            ? 'text-warning bg-warning/10'
                            : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                        )}
                        onClick={handleClose}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <motion.button
                          onClick={() => toggleDropdown(item.label)}
                          className={cn(
                            'border-base-300 flex cursor-pointer items-center justify-center border-l p-3.5 text-left text-base font-medium',
                            isOpen
                              ? 'bg-base-200 text-base-content'
                              : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                          )}
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Відкрити список: ${item.label}`}
                        >
                          <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          >
                            <ChevronRightIcon size={20} />
                          </motion.div>
                        </motion.button>
                      )}
                    </div>

                    <motion.div
                      animate={{
                        opacity: isBurgerOpen && isOpen ? 1 : 0,
                        height: isBurgerOpen && isOpen ? 'auto' : 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                        duration: 0.3,
                      }}
                      className="my-2 overflow-hidden"
                    >
                      <ul className="border-base-300 my-2 ml-4 flex flex-col gap-1 border-l-2 pl-2">
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'block rounded-lg p-3 text-sm font-medium',
                                isActive(child.href)
                                  ? 'text-warning bg-warning/10'
                                  : 'text-base-content/50 hover:text-base-content hover:bg-base-200'
                              )}
                              onClick={handleClose}
                              tabIndex={isBurgerOpen && isOpen ? 0 : -1}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </li>
                );
              })}
            </ul>

            <div className="border-base-300 mt-auto mr-3 border-t pt-6">
              <ButtonLink
                href="/login"
                className="bg-warning text-warning-content hover:bg-warning/90 flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold"
                onClick={handleClose}
              >
                Вхід
              </ButtonLink>
            </div>
          </nav>
        </motion.div>
      </div>
    );
  }
);

MobileNavigation.displayName = 'MobileNavigation';

export default MobileNavigation;
