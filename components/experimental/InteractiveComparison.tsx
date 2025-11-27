'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { CheckCircle, X, ArrowRightLeft } from 'lucide-react';

interface ComparisonSide {
  title: string;
  features: string[];
  color: string;
}

interface ComparisonData {
  left: ComparisonSide;
  right: ComparisonSide;
}

interface InteractiveComparisonProps {
  data: ComparisonData;
  className?: string;
}

/**
 * InteractiveComparison - A side-by-side comparison component with
 * interactive features, animated transitions, and visual feedback.
 *
 * @example
 * <InteractiveComparison
 *   data={{
 *     left: {
 *       title: "Traditional",
 *       features: ["Basic features"],
 *       color: "from-gray-500 to-gray-700"
 *     },
 *     right: {
 *       title: "Modern",
 *       features: ["Advanced features"],
 *       color: "from-purple-500 to-pink-500"
 *     }
 *   }}
 * />
 */
export default function InteractiveComparison({
  data,
  className
}: InteractiveComparisonProps) {
  const [isSwapped, setIsSwapped] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);

  const handleFeatureClick = (index: number) => {
    setSelectedFeatures(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const swapSides = () => {
    setIsSwapped(!isSwapped);
    setSelectedFeatures([]);
  };

  const leftSide = isSwapped ? data.right : data.left;
  const rightSide = isSwapped ? data.left : data.right;

  return (
    <div className={cn('max-w-6xl mx-auto', className)}>
      {/* Swap Button */}
      <div className="flex justify-center mb-8">
        <motion.button
          onClick={swapSides}
          className={cn(
            'px-6 py-3 rounded-full border-2 font-medium',
            'bg-base-100 border-base-300 text-base-content',
            'hover:border-purple-300 hover:bg-purple-50 transition-all duration-200',
            'flex items-center gap-2'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRightLeft className="h-4 w-4" />
          Перемкнути позиції
        </motion.button>
      </div>

      {/* Comparison Container */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <motion.div
          key={leftSide.title}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Header */}
          <motion.div
            className={cn(
              'bg-gradient-to-r text-white rounded-t-2xl p-6 text-center',
              leftSide.color
            )}
            layoutId={`header-${isSwapped ? 'right' : 'left'}`}
          >
            <h3 className="text-2xl font-bold mb-2">{leftSide.title}</h3>
            <div className="w-16 h-1 bg-white/30 rounded-full mx-auto" />
          </motion.div>

          {/* Features List */}
          <div className="bg-base-100 rounded-b-2xl p-6 border-2 border-t-0 border-base-200">
            <div className="space-y-3">
              {leftSide.features.map((feature, index) => {
                const isSelected = selectedFeatures.includes(index);
                const isBetter = !isSwapped && index < 2 || isSwapped && index >= 2;

                return (
                  <motion.div
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer',
                      isSelected
                        ? 'bg-purple-50 border-purple-300'
                        : 'bg-base-200 border-base-300 hover:border-purple-200'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={cn(
                        'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
                        isBetter ? 'bg-green-500' : 'bg-gray-400'
                      )}
                      animate={{
                        scale: isSelected ? 1.2 : 1,
                        rotate: isSelected ? 360 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {isBetter ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <X className="w-4 h-4 text-white" />
                      )}
                    </motion.div>

                    <span className={cn(
                      'text-sm font-medium',
                      isSelected ? 'text-purple-700' : 'text-base-content'
                    )}>
                      {feature}
                    </span>

                    {/* Selection Indicator */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-purple-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-6 p-4 bg-base-200 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-base-content">
                  {selectedFeatures.length}
                </div>
                <div className="text-sm text-base-content/70">
                  обраних функцій
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          key={rightSide.title}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Header */}
          <motion.div
            className={cn(
              'bg-gradient-to-r text-white rounded-t-2xl p-6 text-center',
              rightSide.color
            )}
            layoutId={`header-${isSwapped ? 'left' : 'right'}`}
          >
            <h3 className="text-2xl font-bold mb-2">{rightSide.title}</h3>
            <div className="w-16 h-1 bg-white/30 rounded-full mx-auto" />
          </motion.div>

          {/* Features List */}
          <div className="bg-base-100 rounded-b-2xl p-6 border-2 border-t-0 border-base-200">
            <div className="space-y-3">
              {rightSide.features.map((feature, index) => {
                const isSelected = selectedFeatures.includes(index);
                const isBetter = !isSwapped && index >= 2 || isSwapped && index < 2;

                return (
                  <motion.div
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer',
                      isSelected
                        ? 'bg-purple-50 border-purple-300'
                        : 'bg-base-200 border-base-300 hover:border-purple-200'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.05 }}
                  >
                    <motion.div
                      className={cn(
                        'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
                        isBetter ? 'bg-green-500' : 'bg-gray-400'
                      )}
                      animate={{
                        scale: isSelected ? 1.2 : 1,
                        rotate: isSelected ? 360 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {isBetter ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <X className="w-4 h-4 text-white" />
                      )}
                    </motion.div>

                    <span className={cn(
                      'text-sm font-medium',
                      isSelected ? 'text-purple-700' : 'text-base-content'
                    )}>
                      {feature}
                    </span>

                    {/* Selection Indicator */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-purple-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-6 p-4 bg-base-200 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-base-content">
                  {selectedFeatures.length}
                </div>
                <div className="text-sm text-base-content/70">
                  обраних функцій
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Comparison Result */}
      <AnimatePresence>
        {selectedFeatures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200"
          >
            <div className="text-center">
              <h4 className="text-lg font-bold text-base-content mb-2">
                Результат порівняння
              </h4>
              <p className="text-base-content/70">
                Ви обрали <span className="font-bold text-purple-600">{selectedFeatures.length}</span> функцій для порівняння.
                {selectedFeatures.length >= 3 && (
                  <span className="block mt-2 text-green-600 font-medium">
                    Рекомендуємо експериментальний підхід для максимальної ефективності!
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}