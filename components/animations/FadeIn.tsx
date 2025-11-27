/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { DirectionalAnimationProps } from './types';

/**
 * FadeIn - Smooth fade-in animation with optional slide direction
 * Respects prefers-reduced-motion for accessibility
 *
 * @example
 * <FadeIn direction="up" delay={0.2}>
 *   <div>Animated content</div>
 * </FadeIn>
 *
 * @example
 * <FadeIn as="section" direction="none">
 *   <h1>Animated section</h1>
 * </FadeIn>
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  className = '',
  as = 'div',
  firstVisitOnly = false,
}: DirectionalAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const [shouldAnimate, setShouldAnimate] = useState(!firstVisitOnly);

  // Check for first visit only
  useEffect(() => {
    if (firstVisitOnly && typeof window !== 'undefined') {
      const hasVisited = sessionStorage.getItem('has-visited-site');

      if (hasVisited) {
        setShouldAnimate(false);
      } else {
        sessionStorage.setItem('has-visited-site', 'true');
        setShouldAnimate(true);
      }
    }
  }, [firstVisitOnly]);

  // Define initial and animate states based on direction
  const getAnimationVariants = () => {
    const transition = {
      duration: shouldReduceMotion || !shouldAnimate ? 0 : duration,
      delay: shouldReduceMotion || !shouldAnimate ? 0 : delay,
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number], // Material Design ease
    };

    switch (direction) {
      case 'up':
        return {
          initial: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            y: shouldReduceMotion || !shouldAnimate ? 0 : distance
          },
          animate: {
            opacity: 1,
            y: 0,
            transition
          },
        };
      case 'down':
        return {
          initial: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            y: shouldReduceMotion || !shouldAnimate ? 0 : -distance
          },
          animate: {
            opacity: 1,
            y: 0,
            transition
          },
        };
      case 'left':
        return {
          initial: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            x: shouldReduceMotion || !shouldAnimate ? 0 : distance
          },
          animate: {
            opacity: 1,
            x: 0,
            transition
          },
        };
      case 'right':
        return {
          initial: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            x: shouldReduceMotion || !shouldAnimate ? 0 : -distance
          },
          animate: {
            opacity: 1,
            x: 0,
            transition
          },
        };
      case 'none':
      default:
        return {
          initial: { opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0 },
          animate: {
            opacity: 1,
            transition
          },
        };
    }
  };

  const variants = getAnimationVariants();
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      className={className}
      initial={shouldReduceMotion || !shouldAnimate ? false : variants.initial}
      animate={shouldReduceMotion || !shouldAnimate ? false : variants.animate}
    >
      {children}
    </MotionComponent>
  );
}
