/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ScaleAnimationProps } from './types';

/**
 * ScaleIn - Smooth scale animation for entrance effects
 * Respects prefers-reduced-motion for accessibility
 *
 * @example
 * <ScaleIn delay={0.3} initialScale={0.8}>
 *   <div>Animated content</div>
 * </ScaleIn>
 *
 * @example
 * <ScaleIn as="article" initialScale={0.95}>
 *   <p>Animated article</p>
 * </ScaleIn>
 */
export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.9,
  className = '',
  as = 'div',
  firstVisitOnly = false,
}: ScaleAnimationProps) {
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

  const variants = {
    initial: {
      opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
      scale: shouldReduceMotion || !shouldAnimate ? 1 : initialScale,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion || !shouldAnimate ? 0 : duration,
        delay: shouldReduceMotion || !shouldAnimate ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    },
  };

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
