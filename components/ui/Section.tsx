import { cn } from '@/utils/cn';
import { ElementType, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
  container?: boolean;
}

const Section = ({ 
  children, 
  className, 
  id, 
  as: Component = 'section',
  container = true 
}: SectionProps) => {
  return (
    <Component 
      id={id} 
      className={cn('py-16 md:py-24', className)}
    >
      {container ? (
        <div className="custom-container">
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
};

export default Section;
