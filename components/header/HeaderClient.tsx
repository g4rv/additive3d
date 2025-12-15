'use client';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SCREEN_BREAKPOINTS } from '@/lib/constants';
import { NavItem } from '@/lib/types';
import { HeaderUser } from '@/lib/types/user';
import { useRef, useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import type { MobileNavigationRef } from './MobileNavigation';
import MobileNavigation from './MobileNavigation';

interface HeaderClientProps {
  navItems: NavItem[];
  user: HeaderUser;
}

const HeaderClient = ({ navItems, user }: HeaderClientProps) => {
  const isDesktop = useMediaQuery('above', SCREEN_BREAKPOINTS['2xl']);
  const [isMounted, setIsMounted] = useState(false);
  const mobileNavRef = useRef<MobileNavigationRef>(null);

  useIsomorphicLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isDesktop && isMounted && <DesktopNavigation navItems={navItems} user={user} />}
      {!isDesktop && isMounted && (
        <MobileNavigation ref={mobileNavRef} navItems={navItems} user={user} />
      )}
    </>
  );
};

export default HeaderClient;
