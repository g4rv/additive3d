import { cn } from '@/utils/cn';
import { BookOpen, HelpCircle, MessageCircle } from 'lucide-react';
import FAQItem from './FAQItem';
import type { FAQProps } from './FAQ.types';

/**
 * FAQ - Frequently Asked Questions component with categorized items
 *
 * @example
 * <FAQ
 *   title="Часті запитання"
 *   items={[
 *     { id: '1', question: 'Що таке 3D-друк?', answer: 'Це процес створення фізичних обєктів...' }
 *   ]}
 *   variant="default"
 * />
 */
export default function FAQ({
  items,
  categories,
  title = 'Часті запитання',
  subtitle,
  variant = 'default',
  showCategories = false,
  className,
}: FAQProps) {
  // Use categories if provided and enabled, otherwise use flat items
  const displayItems = showCategories && categories
    ? categories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name })))
    : items;

  const headerIcons = {
    default: <HelpCircle className="size-6 text-primary" />,
    compact: <MessageCircle className="size-5 text-primary" />,
    expanded: <BookOpen className="size-7 text-primary" />,
  };

  const layoutClasses = {
    default: 'space-y-3',
    compact: 'divide-y divide-base-300',
    expanded: 'space-y-4',
  };

  return (
    <section className={cn('custom-container py-8 lg:py-12', className)}>
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          {headerIcons[variant]}
          <h2 className={cn(
            'text-base-content font-bold',
            variant === 'compact' && 'text-2xl',
            variant === 'default' && 'text-3xl lg:text-4xl',
            variant === 'expanded' && 'text-4xl lg:text-5xl'
          )}>
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Categories (if enabled) */}
      {showCategories && categories && (
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <span
              key={category.id}
              className="badge badge-primary badge-outline px-3 py-1 text-sm font-medium"
            >
              {category.name}
            </span>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <div className={cn(
        'max-w-4xl mx-auto',
        layoutClasses[variant]
      )}>
        {displayItems.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            variant={variant}
            className={variant === 'compact' && index === 0 ? 'border-t-0' : ''}
          />
        ))}
      </div>

      {/* Footer */}
      {displayItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-base-content/50 text-lg">
            На жаль, відповіді на запитання ще не додано.
          </p>
        </div>
      )}
    </section>
  );
}