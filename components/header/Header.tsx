import { MAIN_NAVIGATION_LIST } from '@/lib/constants';
import { getCurrentUserWithProfile } from '@/lib/supabase/queries';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import HeaderClient from './HeaderClient';

interface HeaderProps {
  className?: string;
}

const Header = async ({ className }: HeaderProps) => {
  // Fetch current user data
  const userData = await getCurrentUserWithProfile();

  return (
    <header className={cn('bg-base-100 border-base-300 sticky top-0 z-50 border-b', className)}>
      <nav
        className="custom-container h-header flex items-center justify-between gap-4"
        role="navigation"
        aria-label="Головна навігація"
      >
        <Link href="/" aria-label="Additive3D - Головна" className="w-fit">
          <Image priority src="/logo.png" alt="Additive3D Логотип" width={140} height={44} />
        </Link>

        <HeaderClient navItems={MAIN_NAVIGATION_LIST} user={userData} />
      </nav>
    </header>
  );
};

export default Header;
