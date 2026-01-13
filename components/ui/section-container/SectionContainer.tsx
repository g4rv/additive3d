import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  noPadding?: boolean;
}

const sizeClasses = {
  sm: 'py-8 md:py-12 lg:py-16',
  md: 'py-12 md:py-16 lg:py-24',
  lg: 'py-16 md:py-20 lg:py-32',
  xl: 'py-20 md:py-24 lg:py-40',
};

export default function SectionContainer({
  children,
  className = '',
  size = 'md',
  noPadding = false,
}: SectionContainerProps) {
  const paddingClass = noPadding ? '' : sizeClasses[size];

  return (
    <section className={`px-4 md:px-6 lg:px-8 ${paddingClass} ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
