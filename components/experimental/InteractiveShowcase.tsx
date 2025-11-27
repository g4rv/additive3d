'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ShowcaseFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface InteractiveShowcaseProps {
  features: ShowcaseFeature[];
  className?: string;
}

/**
 * InteractiveShowcase - An interactive showcase component with animated cards
 * that respond to hover and click interactions with smooth transitions.
 *
 * @example
 * <InteractiveShowcase
 *   features={[
 *     {
 *       icon: <Beaker className="h-8 w-8" />,
 *       title: "Innovation",
 *       description: "Cutting edge solutions",
 *       color: "from-blue-500 to-purple-600"
 *     }
 *   ]}
 * />
 */
export default function InteractiveShowcase({
  features,
  className
}: InteractiveShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid md:grid-cols-3 gap-8', className)}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          layoutId={`showcase-${index}`}
        >
          {/* Card Container */}
          <motion.div
            className={cn(
              'bg-base-200 rounded-2xl p-8 transition-all duration-300',
              'hover:shadow-2xl hover:-translate-y-2',
              activeIndex === index && 'ring-2 ring-purple-500 shadow-2xl -translate-y-2'
            )}
            animate={{
              backgroundColor: activeIndex === index ? 'rgb(var(--base-300))' : 'rgb(var(--base-200))'
            }}
          >
            {/* Gradient Background */}
            <div
              className={cn(
                'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300',
                feature.color,
                activeIndex === index && 'opacity-10'
              )}
            />

            {/* Icon Container */}
            <motion.div
              className={cn(
                'w-20 h-20 rounded-2xl flex items-center justify-center mb-6',
                'bg-gradient-to-br text-white',
                feature.color,
                'group-hover:scale-110 transition-transform duration-300'
              )}
              animate={{
                rotate: activeIndex === index ? 360 : 0,
                scale: activeIndex === index ? 1.1 : 1
              }}
              transition={{
                rotate: { duration: 0.6, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
            >
              {feature.icon}
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-base-content mb-3">
                {feature.title}
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Interactive Elements */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-base-300"
                  >
                    <div className="flex items-center gap-2 text-sm text-purple-500 font-medium">
                      <span>Обрано</span>
                      <motion.div
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover Indicator */}
              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0
                }}
              >
                <svg
                  className="w-4 h-4 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Particles on Hover */}
          <AnimatePresence>
            {activeIndex === index && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-purple-500 rounded-full"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: Math.cos((i * 120) * Math.PI / 180) * 50,
                      y: Math.sin((i * 120) * Math.PI / 180) * 50
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}