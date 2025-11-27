import { cn } from '@/utils/cn';

interface BgPatternProps {
  pattern?: 'dots' | 'grid' | 'diagonal';
  size?: string | number;
  color?: string;
  opacity?: number;
  className?: string;
}

/**
 * BgPattern - Reusable background pattern component
 * Supports different pattern types with customizable styling
 * @component
 * Add isolate & relative to parent element
 */
export default function BgPattern({
  pattern = 'dots',
  size = 40,
  color = 'rgb(255, 210, 49)',
  opacity = 0.1,
  className = '-z-1',
}: BgPatternProps) {
  const getBackgroundImage = () => {
    switch (pattern) {
      case 'dots':
        return `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 1px)`;
      case 'grid':
        return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;
      case 'diagonal':
        return `linear-gradient(45deg, ${color} 25%, transparent 25%), linear-gradient(-45deg, ${color} 25%, transparent 25%)`;
      default:
        return `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 1px)`;
    }
  };

  const getBackgroundSize = () => {
    switch (pattern) {
      case 'dots':
        return `${size}px ${size}px`;
      case 'grid':
        return `${size}px ${size}px, ${size}px ${size}px`;
      case 'diagonal':
        return `${size}px ${size}px`;
      default:
        return `${size}px ${size}px`;
    }
  };

  return (
    <div
      className={cn('absolute inset-0', className)}
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize: getBackgroundSize(),
        opacity,
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
