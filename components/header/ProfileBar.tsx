'use client';

import { signOut } from '@/app/auth/logout/actions';
import { ROUTES } from '@/lib/constants';
import { cn } from '@/utils/cn';
import { ChevronDown, LayoutDashboard, LogOut, Shield, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ButtonLink from '../ui/button-link';

interface ProfileBarProps {
  firstName: string;
  lastName: string;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
  isAdmin?: boolean;
}

const ProfileBar = ({
  firstName,
  lastName,
  variant = 'desktop',
  onNavigate,
  isAdmin = false,
}: ProfileBarProps) => {
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
          <div className="text-base-content/70 mb-2 flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">{fullName}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <ButtonLink
            href={ROUTES.dashboard}
            variant="secondary"
            className="w-full justify-center gap-2 py-3 text-base"
            onClick={onNavigate}
            startAdornment={<LayoutDashboard className="h-4 w-4" />}
          >
            Панель керування
          </ButtonLink>

          {isAdmin && (
            <ButtonLink
              href={ROUTES.adminDashboard}
              variant="secondary"
              className="w-full items-center justify-center gap-2 py-3 text-base"
              onClick={onNavigate}
              startAdornment={<Shield className="h-4 w-4" />}
            >
              Адмін панель
            </ButtonLink>
          )}

          <form action={handleSignOut} className="w-full">
            <ButtonLink
              type="submit"
              variant="outlined"
              className="text-error w-full justify-center gap-2 border-current py-3 text-base"
              startAdornment={<LogOut className="h-4 w-4" />}
            >
              Вийти
            </ButtonLink>
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
      <ButtonLink
        variant="primary"
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2',
          'hover:bg-base-200 transition-all duration-200'
        )}
        onMouseOver={resetFocus}
        onClick={resetFocus}
        endAdornment={
          <ChevronDown
            size={16}
            className="group-hover:text-primary text-current transition-all duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
          />
        }
      >
        <User className="h-4 w-4" />
        {fullName}
      </ButtonLink>

      {/* Dropdown Menu */}
      <div className="invisible absolute top-full right-0 z-50 pt-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="bg-base-100 border-base-300 flex min-w-50 flex-col gap-1 rounded-xl border p-2 shadow-2xl">
          <ButtonLink
            href={ROUTES.dashboard}
            active={pathname === ROUTES.dashboard}
            className="hover:bg-base-200 flex items-center gap-2 p-3 text-left transition-all duration-200"
            onMouseOver={resetFocus}
            onClick={resetFocus}
          >
            <LayoutDashboard className="h-4 w-4" />
            Панель керування
          </ButtonLink>

          {isAdmin && (
            <ButtonLink
              href={ROUTES.adminDashboard}
              active={pathname === ROUTES.adminDashboard}
              className="hover:bg-base-200 flex items-center gap-2 p-3 text-left transition-all duration-200"
              onMouseOver={resetFocus}
              onClick={resetFocus}
            >
              <Shield className="h-4 w-4" />
              Адмін панель
            </ButtonLink>
          )}

          <div className="border-base-300 my-1 border-t" />

          <form action={handleSignOut} className="w-full">
            <ButtonLink
              type="submit"
              className="hover:bg-error/10 text-error hover:text-error flex w-full items-center gap-2 rounded-lg p-3 text-left font-medium transition-all duration-200"
              onMouseOver={resetFocus}
            >
              <LogOut className="h-4 w-4" />
              Вийти
            </ButtonLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
