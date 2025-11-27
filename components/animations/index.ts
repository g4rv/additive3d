// Universal Animation Component (Recommended)

// Animation Presets and Utilities
export {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS, ANIMATION_PRESETS, ANIMATION_SEQUENCES, createStaggeredDelays, EASING, getPreset
} from './presets';

// Legacy Components (for backward compatibility)
export { default as FadeInLegacy } from './FadeIn';
export { default as ScaleInLegacy } from './ScaleIn';
export { default as StaggerChildrenLegacy } from './StaggerChildren';

// Common Interfaces
export type {
  DelayName,
  DurationName,
  EasingName, PresetName, SequenceName
} from './presets';
export type {
  AnimationProps,
  DirectionalAnimationProps,
  ScaleAnimationProps,
  StaggerAnimationProps
} from './types';


export { default as FadeIn } from './FadeIn';
export { default as ScaleIn } from './ScaleIn';
export { default as StaggerChildren } from './StaggerChildren';