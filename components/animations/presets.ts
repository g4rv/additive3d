
/**
 * Animation preset configurations for common use cases
 * These provide pre-built animation variants with consistent timing and easing
 */

export interface AnimationPreset {
  type?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  delay?: number;
  ease?: string | number[];
  stiffness?: number;
  damping?: number;
  distance?: number;
  initialScale?: number;
  staggerDelay?: number;
  childDelay?: number;
  customVariants?: unknown;
}

export const ANIMATION_PRESETS = {
  // Fade animations (using entrance easing for viewport reveals)
  fadeInUp: {
    type: 'fadeIn' as const,
    direction: 'up' as const,
    duration: 0.6,    // Slower for scroll animations
    delay: 0,
    distance: 30,
    ease: [0.2, 0.0, 0.0, 1.0], // entrance
  },

  fadeInLeft: {
    type: 'fadeIn' as const,
    direction: 'left' as const,
    duration: 0.6,
    delay: 0,
    distance: 30,
    ease: [0.2, 0.0, 0.0, 1.0], // entrance
  },

  fadeInRight: {
    type: 'fadeIn' as const,
    direction: 'right' as const,
    duration: 0.6,
    delay: 0,
    distance: 30,
    ease: [0.2, 0.0, 0.0, 1.0], // entrance
  },

  fadeInDown: {
    type: 'fadeIn' as const,
    direction: 'down' as const,
    duration: 0.6,
    delay: 0,
    distance: 30,
    ease: [0.2, 0.0, 0.0, 1.0], // entrance
  },

  fadeInSlow: {
    type: 'fadeIn' as const,
    direction: 'up' as const,
    duration: 0.8,    // slowest
    delay: 0,
    distance: 40,
    ease: [0.4, 0.0, 0.6, 1], // smooth
  },

  fadeInFast: {
    type: 'fadeIn' as const,
    direction: 'up' as const,
    duration: 0.4,    // slow
    delay: 0,
    distance: 20,
    ease: [0.4, 0.0, 0.2, 1], // standard
  },

  // Scale animations
  scaleInBounce: {
    type: 'scaleIn' as const,
    duration: 0.6,    // slower
    delay: 0,
    initialScale: 0.3,
    ease: [0.68, -0.55, 0.265, 1.55], // bounce
  },

  scaleInSmooth: {
    type: 'scaleIn' as const,
    duration: 0.3,    // moderate
    delay: 0,
    initialScale: 0.8,
    ease: [0.4, 0.0, 0.6, 1], // smooth
  },

  scaleInGrow: {
    type: 'scaleIn' as const,
    duration: 0.6,    // slower
    delay: 0,
    initialScale: 0.9,
    ease: [0.2, 0.0, 0.0, 1.0], // entrance
  },

  // Slide animations
  slideInRight: {
    type: 'slideIn' as const,
    direction: 'right' as const,
    duration: 0.6,    // slower
    delay: 0,
    distance: 50,
    stiffness: 80,
  },

  slideInLeft: {
    type: 'slideIn' as const,
    direction: 'left' as const,
    duration: 0.6,    // slower
    delay: 0,
    distance: 50,
    stiffness: 80,
  },

  slideInUp: {
    type: 'slideIn' as const,
    direction: 'up' as const,
    duration: 0.6,    // slower
    delay: 0,
    distance: 50,
    stiffness: 80,
  },

  // Bounce animations
  bounceIn: {
    type: 'bounce' as const,
    duration: 0.6,    // slower
    delay: 0,
    stiffness: 300,
    damping: 20,
  },

  bounceGentle: {
    type: 'bounce' as const,
    duration: 0.8,    // slowest
    delay: 0,
    stiffness: 200,
    damping: 25,
  },

  // Rotate animations
  rotateIn: {
    type: 'rotate' as const,
    duration: 0.6,    // slower
    delay: 0,
    ease: [0.4, 0.0, 0.2, 1], // standard
  },

  rotateScaleIn: {
    type: 'rotate' as const,
    duration: 0.8,    // slowest
    delay: 0,
    ease: [0.4, 0.0, 0.6, 1], // smooth
  },

  // Stagger animations
  staggerUp: {
    type: 'stagger' as const,
    direction: 'up' as const,
    staggerDelay: 0.1,
    childDelay: 0,
    distance: 30,
    duration: 0.3,    // moderate
  },

  staggerFast: {
    type: 'stagger' as const,
    direction: 'up' as const,
    staggerDelay: 0.05,
    childDelay: 0,
    distance: 20,
    duration: 0.2,    // normal
  },

  staggerSlow: {
    type: 'stagger' as const,
    direction: 'up' as const,
    staggerDelay: 0.2,
    childDelay: 0,
    distance: 40,
    duration: 0.6,    // slower
  },

  // Continuous animations (decorative, longer durations)
  pulseSubtle: {
    type: 'pulse' as const,
    duration: 2,
    delay: 0,
  },

  pulseStrong: {
    type: 'pulse' as const,
    duration: 1.5,
    delay: 0,
  },

  floatGentle: {
    type: 'float' as const,
    duration: 3,
    delay: 0,
  },

  floatQuick: {
    type: 'float' as const,
    duration: 2,
    delay: 0,
  },

  glowSubtle: {
    type: 'glow' as const,
    duration: 3,
    delay: 0,
  },

  glowStrong: {
    type: 'glow' as const,
    duration: 2,
    delay: 0,
  },
} as const;

/**
 * Common animation delays for consistent timing patterns
 */
export const ANIMATION_DELAYS = {
  immediate: 0,
  fast: 0.1,
  normal: 0.2,
  slow: 0.3,
  verySlow: 0.5,
  extraSlow: 0.8,
} as const;

/**
 * Common animation durations (aligned with globals.css)
 * Note: Framer Motion uses seconds, CSS uses milliseconds
 */
export const ANIMATION_DURATIONS = {
  instant: 0.1,   // 100ms - Instant feedback
  fast: 0.15,     // 150ms - Micro-interactions
  normal: 0.2,    // 200ms - Standard transitions
  moderate: 0.3,  // 300ms - Component animations
  slow: 0.4,      // 400ms - Page transitions
  slower: 0.6,    // 600ms - Complex animations
  slowest: 0.8,   // 800ms - Hero animations
} as const;

/**
 * Easing functions (aligned with globals.css)
 * Using cubic-bezier values matching CSS custom properties
 */
export const EASING = {
  standard: [0.4, 0.0, 0.2, 1],        // --ease-standard
  entrance: [0.2, 0.0, 0.0, 1.0],      // --ease-entrance
  exit: [0.0, 0.0, 0.2, 1],            // --ease-exit
  bounce: [0.68, -0.55, 0.265, 1.55],  // --ease-bounce
  smooth: [0.4, 0.0, 0.6, 1],          // --ease-smooth

  // Legacy aliases (deprecated, use above)
  material: [0.4, 0.0, 0.2, 1],
  ease: [0.25, 1, 0.5, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  sharp: [0.4, 0, 0.6, 1],
} as const;

/**
 * Get a preset by name with optional overrides
 */
export function getPreset(name: keyof typeof ANIMATION_PRESETS, overrides: Partial<AnimationPreset> = {}) {
  const preset = ANIMATION_PRESETS[name];
  return { ...preset, ...overrides };
}

/**
 * Create a staggered delay array for multiple items
 */
export function createStaggeredDelays(count: number, baseDelay: number, staggerDelay: number): number[] {
  return Array.from({ length: count }, (_, i) => baseDelay + (i * staggerDelay));
}

/**
 * Common animation sequences for specific UI patterns
 */
export const ANIMATION_SEQUENCES = {
  hero: [
    getPreset('fadeInUp', { delay: 0 }),
    getPreset('fadeInUp', { delay: 0.1 }),
    getPreset('fadeInUp', { delay: 0.2 }),
    getPreset('fadeInUp', { delay: 0.3 }),
  ],

  features: [
    getPreset('fadeInUp', { delay: 0 }),
    getPreset('fadeInUp', { delay: 0.1 }),
    getPreset('fadeInUp', { delay: 0.2 }),
  ],

  testimonials: [
    getPreset('scaleInBounce', { delay: 0 }),
    getPreset('scaleInBounce', { delay: 0.1 }),
    getPreset('scaleInBounce', { delay: 0.2 }),
  ],

  cards: [
    getPreset('staggerFast', { childDelay: 0 }),
    getPreset('staggerFast', { childDelay: 0.05 }),
    getPreset('staggerFast', { childDelay: 0.1 }),
  ],

  load: [
    getPreset('fadeInUp', { delay: 0 }),
    getPreset('fadeInUp', { delay: 0.05 }),
    getPreset('fadeInUp', { delay: 0.1 }),
  ],
} as const;

export type PresetName = keyof typeof ANIMATION_PRESETS;
export type DelayName = keyof typeof ANIMATION_DELAYS;
export type DurationName = keyof typeof ANIMATION_DURATIONS;
export type EasingName = keyof typeof EASING;
export type SequenceName = keyof typeof ANIMATION_SEQUENCES;