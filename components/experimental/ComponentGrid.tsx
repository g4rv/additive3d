'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GridComponent {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  interactive: boolean;
}

interface ComponentGridProps {
  components: GridComponent[];
  className?: string;
}

/**
 * ComponentGrid - A responsive grid layout showcasing components with
 * filtering capabilities and interactive hover states.
 *
 * @example
 * <ComponentGrid
 *   components={[
 *     {
 *       title: "Animated Cards",
 *       description: "Interactive cards with smooth transitions",
 *       icon: <Layers className="h-6 w-6" />,
 *       category: "UI Components",
 *       interactive: true
 *     }
 *   ]}
 * />
 */
export default function ComponentGrid({
  components,
  className
}: ComponentGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(components.map(c => c.category)))];

  // Filter components by category
  const filteredComponents = selectedCategory === 'all'
    ? components
    : components.filter(c => c.category === selectedCategory);

  return (
    <div className={cn('space-y-8', className)}>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              'border-2 cursor-pointer',
              selectedCategory === category
                ? 'bg-purple-500 text-white border-purple-500 shadow-lg'
                : 'bg-base-100 text-base-content border-base-300 hover:border-purple-300 hover:bg-purple-50'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === 'all' ? 'Всі компоненти' : category}
            {category !== 'all' && (
              <span className="ml-2 text-xs opacity-70">
                ({components.filter(c => c.category === category).length})
              </span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Component Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {filteredComponents.map((component, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                layout: { duration: 0.3 }
              }}
              className="relative group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <motion.div
                className={cn(
                  'bg-base-100 rounded-xl p-6 h-full border-2 transition-all duration-300',
                  'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
                  component.interactive && 'ring-2 ring-purple-500/20',
                  hoveredIndex === index && 'shadow-xl -translate-y-1'
                )}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Interactive Badge */}
                {component.interactive && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-4"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{
                    rotate: { duration: 0.6, ease: "easeInOut" },
                    scale: { duration: 0.2 }
                  }}
                >
                  {component.icon}
                </motion.div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-base-content">
                    {component.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {component.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-purple-500 font-medium">
                      {component.category}
                    </span>
                    {component.interactive && (
                      <motion.div
                        className="text-xs text-green-500 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        ✓ Інтерактивний
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredComponents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-base-content mb-2">
            Компонентів не знайдено
          </h3>
          <p className="text-base-content/70">
            Спробуйте іншу категорію або фільтр
          </p>
        </motion.div>
      )}

      {/* Stats */}
      <motion.div
        className="text-center text-sm text-base-content/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Показано {filteredComponents.length} з {components.length} компонентів
      </motion.div>
    </div>
  );
}