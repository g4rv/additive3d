'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ButtonLink from '@/components/ui/button-link';
import { ChevronDown } from 'lucide-react';
import type { FAQProps } from './FAQ.types';

/**
 * FAQ - Frequently Asked Questions component with expandable items
 *
 * @example
 * <FAQ
 *   title="Часті запитання"
 *   description="Відповіді на популярні питання про 3D друк"
 *   items={[
 *     { id: "1", question: "Які матеріали ви використовуєте?", answer: "Ми працюємо з широким спектром інженерних пластиків..." },
 *     { id: "2", question: "Який максимальний розмір друку?", answer: "Максимальний розмір залежить від технології..." }
 *   ]}
 * />
 */
export default function FAQ({ title, description, items, className }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className={cn('py-8 lg:py-12', className)}>
      <div className="custom-container">
        {/* Header */}
        <div className="mb-8 text-center px-4">
          <h2 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold">{title}</h2>
          {description && <p className="text-base-content/80 mt-2 text-sm sm:text-base lg:text-lg">{description}</p>}
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4 px-4">
          {items.map((item) => (
            <div key={item.id} className="card bg-base-200 border-base-300 border shadow-sm">
              <div className="card-body p-0">
                <ButtonLink
                  onClick={() => toggleItem(item.id)}
                  className="hover:text-primary focus-visible:ring-offset-base-200 focus:text-primary flex w-full items-start justify-between rounded-lg p-4 sm:p-6 text-left transition-colors duration-300 focus-visible:ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-expanded={openItems.has(item.id)}
                  aria-controls={`faq-answer-${item.id}`}
                  endAdornment={
                    <ChevronDown
                      size={24}
                      className={cn(
                        'text-primary shrink-0 transition-transform duration-200',
                        openItems.has(item.id) && 'rotate-180'
                      )}
                    />
                  }
                >
                  <h3 className="text-base-content pr-4 text-base sm:text-lg leading-snug font-medium">
                    {item.question}
                  </h3>
                </ButtonLink>

                <AnimatePresence initial={false}>
                  {openItems.has(item.id) && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <p className="text-base-content/90 text-sm sm:text-base leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
