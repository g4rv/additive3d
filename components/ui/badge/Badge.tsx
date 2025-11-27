import { cn } from '@/utils/cn';

interface BadgeProps {
  /** Badge variant style */
  variant?: 'primary' | 'secondary' | 'outlined';
  /** Badge size */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Badge content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional click handler - makes badge clickable */
  onClick?: () => void;
}

/**
 * Badge - Flexible badge component with optional interactivity
 *
 * @example
 * <Badge variant="primary">Static Badge</Badge>
 * <Badge variant="outlined" onClick={() => console.log('clicked')}>Clickable Badge</Badge>
 */
export default function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
}: BadgeProps) {
  const baseClasses = cn(
    // Base styles
    'inline-flex items-center justify-center rounded-full font-medium',

    // Size variants
    {
      'px-2 py-1 text-xs': size === 'xs',
      'px-3 py-1 text-sm': size === 'sm',
      'px-3 py-1.5 text-sm': size === 'md',
      'px-4 py-2 text-base': size === 'lg',
    },

    // Variant styles
    {
      'bg-primary text-primary-content': variant === 'primary',
      'bg-secondary text-secondary-content': variant === 'secondary',
      'bg-base-200 text-base-content border border-base-300': variant === 'outlined',
    },

    className
  );

  // Render as button if clickable, otherwise as span
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={baseClasses}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
}
