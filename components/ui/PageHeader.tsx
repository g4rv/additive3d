'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

const PageHeader = ({ title, description, breadcrumbs, className }: PageHeaderProps) => {
  return (
    <div className={cn('bg-base-200 py-12 md:py-20', className)}>
      <div className="custom-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center text-sm text-base-content/60">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Головна
                </Link>
              </li>
              {breadcrumbs.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  <span className="mx-2">/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary font-medium" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-4">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
