'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MAIN_NAVIGATION_LIST } from '@/lib/constants';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import type { MobileNavigationRef } from './MobileNavigation';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  className?: string;
}
const Header = ({ className }: HeaderProps) => {
  const isDesktop = useMediaQuery('above', 1060);
  const [isMounted, setIsMounted] = useState(false);
  const mobileNavRef = useRef<MobileNavigationRef>(null);

  useIsomorphicLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={cn('bg-base-100 border-base-300 sticky top-0 z-50 border-b', className)}>
      <nav
        className="custom-container h-header flex items-center justify-between"
        role="navigation"
        aria-label="Головна навігація"
      >
        <Link href="/" aria-label="Additive3D - Головна" className='w-fit'>
          <Image priority src="/logo.png" alt="Additive3D Логотип" width={140} height={44} />
        </Link>

        {isDesktop && isMounted && <DesktopNavigation navItems={MAIN_NAVIGATION_LIST} />}
        {!isDesktop && isMounted && (
          <MobileNavigation ref={mobileNavRef} navItems={MAIN_NAVIGATION_LIST} />
        )}
      </nav>
    </header>
  );
};

export default Header;
