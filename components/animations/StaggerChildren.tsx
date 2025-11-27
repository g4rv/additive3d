/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { StaggerAnimationProps } from './types';

/**
 * StaggerChildren - Staggered animation for child elements
 * Perfect for lists, grids, and multiple elements appearing sequentially
 * Respects prefers-reduced-motion for accessibility
 *
 * @example
 * <StaggerChildren staggerDelay={0.1} direction="up">
 *   <div>Child 1</div>
 *   <div>Child 2</div>
 *   <div>Child 3</div>
 * </StaggerChildren>
 *
 * @example
 * <StaggerChildren as="nav" childAs="li" staggerDelay={0.1} direction="down">
 *   <a href="#">Link 1</a>
 *   <a href="#">Link 2</a>
 *   <a href="#">Link 3</a>
 * </StaggerChildren>
 */
export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  childDelay = 0.2,
  direction = 'up',
  distance = 20,
  className = '',
  as = 'div',
  childAs = 'div',
  firstVisitOnly = false,
}: StaggerAnimationProps) {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion || !shouldAnimate ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion || !shouldAnimate ? 0 : childDelay,
      },
    },
  };

  const getAnimationVariants = () => {
    const transition = {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
    };

    switch (direction) {
      case 'up':
        return {
          hidden: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            y: shouldReduceMotion || !shouldAnimate ? 0 : distance
          },
          visible: {
            opacity: 1,
            y: 0,
            transition
          },
        };
      case 'down':
        return {
          hidden: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            y: shouldReduceMotion || !shouldAnimate ? 0 : -distance
          },
          visible: {
            opacity: 1,
            y: 0,
            transition
          },
        };
      case 'left':
        return {
          hidden: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            x: shouldReduceMotion || !shouldAnimate ? 0 : distance
          },
          visible: {
            opacity: 1,
            x: 0,
            transition
          },
        };
      case 'right':
        return {
          hidden: {
            opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0,
            x: shouldReduceMotion || !shouldAnimate ? 0 : -distance
          },
          visible: {
            opacity: 1,
            x: 0,
            transition
          },
        };
      case 'none':
      default:
        return {
          hidden: { opacity: shouldReduceMotion || !shouldAnimate ? 1 : 0 },
          visible: {
            opacity: 1,
            transition
          },
        };
    }
  };

  const itemVariants = getAnimationVariants();
  const MotionContainer = motion[as as keyof typeof motion] as typeof motion.div;
  const MotionChild = motion[childAs as keyof typeof motion] as typeof motion.div;

  return (
    <MotionContainer
      className={className}
      initial={shouldReduceMotion || !shouldAnimate ? false : 'hidden'}
      animate={shouldReduceMotion || !shouldAnimate ? false : 'visible'}
      variants={shouldReduceMotion || !shouldAnimate ? {} : containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild
          key={index}
          variants={shouldReduceMotion || !shouldAnimate ? {} : itemVariants}
        >
          {child}
        </MotionChild>
      ))}
    </MotionContainer>
  );
}