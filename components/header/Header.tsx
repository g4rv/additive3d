'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import DesktopNavigation from './DesktopNavigation';
import headerNav from './headerNavigationList';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  className?: string;
}
const Header = ({ className }: HeaderProps) => {
  const isDesktop = useMediaQuery('above', 1060);

  return (
    <header className={cn('bg-base-100 border-base-300 sticky top-0 z-50 border-b', className)}>
      <div className="relative">
        <nav
          className="custom-container flex h-16 items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-base-content flex items-center gap-3 text-xl font-semibold transition-opacity duration-200 hover:opacity-80"
            aria-label="Additive3D - Home"
          >
            <Image src="/logo.png" alt="Additive3D Logo" width={140} height={44} />
          </Link>

          {isDesktop && <DesktopNavigation navItems={headerNav} />}
          {!isDesktop && <MobileNavigation navItems={headerNav} />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
