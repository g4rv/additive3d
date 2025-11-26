'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItemProps } from './FAQ.types';

/**
 * FAQItem - Individual FAQ question and answer with expand/collapse animation
 *
 * @example
 * <FAQItem
 *   item={{ id: '1', question: 'Що таке 3D-друк?', answer: 'Це процес створення...' }}
 *   variant="default"
 * />
 */
export default function FAQItem({ item, variant = 'default', className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const variants = {
    default: 'bg-base-100 border border-base-300 rounded-lg shadow-sm hover:shadow-md transition-shadow',
    compact: 'bg-base-200 border-0 rounded-none hover:bg-base-300 transition-colors',
    expanded: 'bg-base-100 border-2 border-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow'
  };

  const textVariants = {
    default: 'text-base-content',
    compact: 'text-base-content/90',
    expanded: 'text-primary font-medium'
  };

  return (
    <div className={cn('overflow-hidden', variants[variant], className)}>
      <button
        type="button"
        onClick={handleToggle}
        className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {variant === 'expanded' && (
            <HelpCircle
              className="size-5 text-primary flex-shrink-0"
              aria-hidden="true"
            />
          )}
          <span className={cn(
            'font-medium line-clamp-2',
            textVariants[variant],
            variant === 'compact' && 'text-sm',
            variant === 'expanded' && 'text-lg'
          )}>
            {item.question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={cn(
              'size-5 transition-colors',
              isOpen ? 'text-primary' : 'text-base-content/60'
            )}
            aria-hidden="true"
          />
        </motion.div>
      </button>

      <motion.div
        id={`faq-answer-${item.id}`}
        className="overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="px-4 pb-4">
          {variant === 'expanded' && <div className="h-2" />}
          <div className={cn(
            'text-base-content/80 leading-relaxed',
            variant === 'compact' && 'text-sm',
            variant === 'expanded' && 'text-base'
          )}>
            {item.answer}
          </div>
          {variant === 'expanded' && <div className="h-2" />}
        </div>
      </motion.div>
    </div>
  );
}