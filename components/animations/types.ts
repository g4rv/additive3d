import { JSX, ReactNode } from 'react';

/**
 * Common interface for all animation components
 * Provides consistent props across FadeIn, ScaleIn, and StaggerChildren
 */
export interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  firstVisitOnly?: boolean;
}

/**
 * Props specific to components that support directional animations
 */
export interface DirectionalAnimationProps extends AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

/**
 * Props specific to ScaleIn component
 */
export interface ScaleAnimationProps extends AnimationProps {
  initialScale?: number;
}

/**
 * Props specific to StaggerChildren component
 */
export interface StaggerAnimationProps extends DirectionalAnimationProps {
  staggerDelay?: number;
  childDelay?: number;
  childAs?: keyof JSX.IntrinsicElements;
}