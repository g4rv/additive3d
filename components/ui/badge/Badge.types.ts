import type { ReactNode } from 'react';

export interface BadgeProps {
  /** Badge variant style */
  variant?: 'primary' | 'secondary' | 'outlined';
  /** Badge size */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Badge content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}