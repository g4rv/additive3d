'use client';

import { cn } from '@/utils/cn';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  stats: string[];
  delay?: number;
  className?: string;
}

/**
 * AnimatedFeatureCard - A feature card with sophisticated animations
 * including gradient backgrounds, animated stats, and entrance effects.
 *
 * @example
 * <AnimatedFeatureCard
 *   title="Innovation"
 *   description="Cutting edge solutions"
 *   icon={<Sparkles className="h-12 w-12" />}
 *   gradient="from-purple-500 to-pink-500"
 *   stats={["60fps", "GPU Accelerated"]}
 * />
 */
export default function AnimatedFeatureCard({
  title,
  description,
  icon,
  gradient,
  stats,
  delay = 0,
  className
}: AnimatedFeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const _containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const _itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: delay + 0.3
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={cn('relative group', className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Main Card */}
      <motion.div
        className={cn(
          'relative bg-base-100 rounded-2xl p-8 h-full border-2 border-base-200',
          'overflow-hidden transition-all duration-300',
          'hover:shadow-2xl hover:border-purple-200'
        )}
      >
        {/* Gradient Background */}
        <motion.div
          className={cn(
            'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500',
            gradient
          )}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at ${isHovered ? '80% 20%' : '50% 50%'}, currentColor 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
          animate={{
            backgroundPosition: isHovered ? '100% 100%' : '50% 50%'
          }}
          transition={{ duration: 2, ease: "linear" }}
        />

        {/* Icon Container */}
        <motion.div
          className={cn(
            'relative w-20 h-20 mx-auto mb-6 rounded-2xl',
            'bg-gradient-to-br text-white flex items-center justify-center',
            gradient,
            'shadow-lg'
          )}
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{
            rotate: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 0.2 }
          }}
        >
          <motion.div
            animate={{
              rotate: isHovered ? -360 : 0
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            className={cn(
              'absolute inset-0 rounded-2xl blur-xl',
              'bg-gradient-to-br',
              gradient
            )}
            animate={{
              opacity: isHovered ? 0.4 : 0.2,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content */}
        <motion.div   className="relative z-10">
          <h3 className="text-xl font-bold text-base-content text-center mb-4">
            {title}
          </h3>
          <p className="text-base-content/70 text-center leading-relaxed mb-6">
            {description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-2">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                className={cn(
                  'bg-base-200 rounded-lg px-4 py-2 text-center',
                  'border border-base-300 transition-all duration-300',
                  isHovered && 'bg-gradient-to-r ' + gradient + ' bg-opacity-10 border-purple-300'
                )}
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  className={cn(
                    'text-sm font-medium',
                    isHovered ? 'text-purple-600' : 'text-base-content'
                  )}
                  animate={{
                    color: isHovered ? 'rgb(var(--purple-600))' : 'rgb(var(--base-content))'
                  }}
                >
                  {stat}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`float-${i}`}
                className="absolute w-2 h-2 bg-purple-500 rounded-full"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: '50%',
                  y: '50%'
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: ['50%', `${50 + Math.cos((i * 120) * Math.PI / 180) * 100}%`],
                  y: ['50%', `${50 + Math.sin((i * 120) * Math.PI / 180) * 100}%`]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-purple-500 pointer-events-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}