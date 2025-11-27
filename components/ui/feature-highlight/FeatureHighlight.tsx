'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * FeatureHighlight - A visually striking component that highlights key features or benefits
 * with icons, animated backgrounds, and call-to-action elements.
 *
 * @example
 * <FeatureHighlight
 *   icon={<Zap className="h-12 w-12" />}
 *   title="Lightning Fast"
 *   description="Get your parts printed in record time with our advanced technology"
 * />
 */
export default function FeatureHighlight({
  icon,
  title,
  description,
  className
}: FeatureHighlightProps) {
  return (
    <motion.div
      className={cn(
        'relative group cursor-pointer overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-base-200 to-base-300',
        'border border-base-300 hover:border-primary/50 transition-all duration-500',
        'p-8 md:p-10',
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i * 120) * 10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 30}%`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut"
          }}
          whileHover={{ rotate: 360 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-xl md:text-2xl font-bold text-base-content text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-base-content/80 text-center leading-relaxed text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          {description}
        </motion.p>

        {/* Call-to-Action Arrow */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.3
          }}
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary"
            whileHover={{ scale: 1.2, backgroundColor: 'rgb(var(--primary))' }}
          >
            <svg
              className="w-4 h-4"
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
        </motion.div>
      </div>

      {/* Hover Overlay Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Border Animation on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}