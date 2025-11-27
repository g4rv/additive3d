'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface InfoCardProps {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
}

/**
 * InfoCard - A reusable information card component that displays key data points,
 * statistics, or important information in a visually appealing way with support
 * for icons, progress indicators, and different visual styles.
 *
 * @example
 * <InfoCard
 *   title="Print Accuracy"
 *   value="±0.02mm"
 *   description="Industry-leading precision"
 * />
 */
export default function InfoCard({
  title,
  value,
  description,
  className
}: InfoCardProps) {
  return (
    <motion.div
      className={cn(
        'card bg-base-200 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300',
        'hover:border-primary/30 hover:-translate-y-1',
        className
      )}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <div className="card-body p-6">
        {/* Title */}
        <h3 className="card-title text-base-content/80 text-sm font-medium mb-2">
          {title}
        </h3>

        {/* Value */}
        <motion.div
          className="text-3xl font-bold text-primary mb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          {value}
        </motion.div>

        {/* Description */}
        {description && (
          <p className="text-base-content/60 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* Hover indicator */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0"
          whileHover={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}