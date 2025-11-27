'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
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
        <div className="mb-8 text-center">
          <h2 className="text-primary text-2xl font-bold lg:text-3xl">{title}</h2>
          {description && <p className="text-base-content/80 mt-2 lg:text-lg">{description}</p>}
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-4xl space-y-4">
          {items.map((item) => (
            <div key={item.id} className="card bg-base-200 border-base-300 border p-0 shadow-sm">
              <div className="card-body p-0 lg:p-6">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="hover:text-primary focus-visible:ring-offset-base-200 focus:text-primary -m-2 flex w-full items-start justify-between rounded-lg p-6 text-left transition-colors duration-300 focus-visible:ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-expanded={openItems.has(item.id)}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <h3 className="text-base-content pr-4 text-lg leading-tight font-medium">
                    {item.question}
                  </h3>
                  <div className="shrink-0">
                    <motion.svg
                      className="text-primary size-6"
                      animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </div>
                </button>

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
                      <div className="pt-4">
                        <p className="text-base-content/90 leading-relaxed">{item.answer}</p>
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
