'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';

interface StatItem {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: number;
  showTrends?: boolean;
  className?: string;
}

/**
 * StatsGrid - A responsive grid layout for displaying multiple statistics or metrics
 * in an organized, visually appealing way with hover effects and animations.
 *
 * @example
 * <StatsGrid
 *   stats={[
 *     { label: "Print Accuracy", value: "±0.02mm", trend: "up" },
 *     { label: "Daily Output", value: "150", change: "+12%", trend: "up" }
 *   ]}
 *   columns={2}
 *   showTrends={true}
 * />
 */
export default function StatsGrid({
  stats,
  columns = 4,
  showTrends = true,
  className
}: StatsGridProps) {
  const getTrendIcon = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4" />;
      case 'down':
        return <TrendingDown className="w-4 h-4" />;
      case 'neutral':
        return <Minus className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getTrendColor = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      case 'neutral':
        return 'text-base-content/60';
      default:
        return 'text-base-content/60';
    }
  };

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={cn('grid gap-4', gridClasses[columns as keyof typeof gridClasses], className)}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-base-200 rounded-lg p-4 border border-base-300 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.3,
            ease: "easeOut"
          }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Label */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-base-content/80">
              {stat.label}
            </h3>

            {/* Trend Indicator */}
            {showTrends && stat.trend && (
              <motion.div
                className={cn('flex items-center gap-1', getTrendColor(stat.trend))}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
              >
                {getTrendIcon(stat.trend)}
                {stat.change && (
                  <span className="text-xs font-medium">
                    {stat.change}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          {/* Value */}
          <motion.div
            className="text-2xl font-bold text-primary mb-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.1 + 0.2,
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            {stat.value}
          </motion.div>

          {/* Hover Effect Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  );
}