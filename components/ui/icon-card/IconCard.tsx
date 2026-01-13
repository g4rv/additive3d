import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconClassName?: string;
  layout?: 'vertical' | 'horizontal';
}

export default function IconCard({
  icon: Icon,
  title,
  description,
  iconClassName = 'text-primary',
  layout = 'vertical',
}: IconCardProps) {
  if (layout === 'horizontal') {
    return (
      <div className="flex gap-4 items-start">
        <div className="flex-shrink-0">
          <Icon className={`size-6 md:size-8 ${iconClassName}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm md:text-base text-base-content/70">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center gap-3 md:gap-4 p-4 md:p-6">
      <div className="flex items-center justify-center size-12 md:size-16 rounded-2xl bg-primary/10">
        <Icon className={`size-6 md:size-8 ${iconClassName}`} />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-balance">{title}</h3>
      <p className="text-sm md:text-base text-base-content/70 max-w-prose">{description}</p>
    </div>
  );
}
