'use client';

import { usePathname } from 'next/navigation';
import { ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import ButtonLink from '../ui/button-link';
import { ROUTES } from '@/lib/constants';
import { signOut } from '@/app/auth/logout/actions';
import { cn } from '@/utils/cn';

interface ProfileBarProps {
  firstName: string;
  lastName: string;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

const ProfileBar = ({ firstName, lastName, variant = 'desktop', onNavigate }: ProfileBarProps) => {
  const pathname = usePathname();
  const fullName = `${firstName} ${lastName}`;

  const handleSignOut = async () => {
    if (onNavigate) onNavigate();
    await signOut();
  };

  if (variant === 'mobile') {
    // Mobile version - simplified list layout
    return (
      <div className="border-base-300 border-t pt-6">
        <div className="mb-4 px-2">
          <div className="flex items-center gap-2 text-base-content/70 mb-2">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">{fullName}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <ButtonLink
            href={ROUTES.dashboard}
            variant="secondary"
            className="w-full py-3 text-base justify-start gap-2"
            onClick={onNavigate}
          >
            <LayoutDashboard className="w-4 h-4" />
            Панель керування
          </ButtonLink>

          <form action={handleSignOut} className="w-full">
            <button
              type="submit"
              className="btn btn-outline btn-error w-full py-3 text-base justify-start gap-2"
            >
              <LogOut className="w-4 h-4" />
              Вийти
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Desktop version - dropdown menu
  const resetFocus = () => {
    if (
      typeof document !== 'undefined' &&
      document.activeElement &&
      'blur' in document.activeElement
    ) {
      (document.activeElement as HTMLElement).blur();
    }
  };

  return (
    <div className="group focus-within relative">
      <button
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
          'text-base-content font-medium',
          'hover:bg-base-200 transition-all duration-200',
          'focus-visible:ring focus-visible:ring-base-content focus-visible:ring-offset-2 focus-visible:outline-none'
        )}
        onMouseOver={resetFocus}
        onClick={resetFocus}
      >
        <User className="w-4 h-4" />
        {fullName}
        <ChevronDown
          size={16}
          className="group-hover:text-primary text-current transition-all duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
        />
      </button>

      {/* Dropdown Menu */}
      <div className="invisible absolute top-full right-0 z-50 pt-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="bg-base-100 border-base-300 flex min-w-50 flex-col gap-1 rounded-xl border p-2 shadow-2xl">
          <ButtonLink
            href={ROUTES.dashboard}
            active={pathname === ROUTES.dashboard}
            className="hover:bg-base-200 p-3 text-left transition-all duration-200 flex items-center gap-2"
            onMouseOver={resetFocus}
            onClick={resetFocus}
          >
            <LayoutDashboard className="w-4 h-4" />
            Панель керування
          </ButtonLink>

          <div className="border-base-300 border-t my-1" />

          <form action={handleSignOut} className="w-full">
            <button
              type="submit"
              className="hover:bg-error/10 text-error hover:text-error w-full p-3 text-left transition-all duration-200 rounded-lg flex items-center gap-2 font-medium"
              onMouseOver={resetFocus}
            >
              <LogOut className="w-4 h-4" />
              Вийти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
