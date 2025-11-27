import { cva, type VariantProps } from 'class-variance-authority';

export const buttonLinkVariants = cva(
  'focus-visible:ring focus-visible:ring-offset-2 focus-visible:outline-none duration-300 transition-colors font-medium inline-block text-center',
  {
    variants: {
      variant: {
        primary: 'text-base-content hover:bg-base-200',
        secondary: 'text-primary-content bg-primary hover:bg-primary/85',
        outlined: 'border border-primary text-primary hover:bg-primary hover:text-primary-content',
        string: 'text-base-content hover:text-primary',
        subtle: 'text-base-content/50 hover:text-primary',
      },
      size: {
        small: 'text-xs px-3 py-1.5',
        base: 'text-sm px-5 py-2.5',
        large: 'text-base px-6 py-3',
      },
      // Remove padding for text-only variants
      noPadding: {
        true: 'px-0 py-0',
      },
      active: {
        true: 'text-primary',
      },
      disabled: {
        true: 'opacity-70 cursor-default pointer-events-none grayscale-100',
      },
    },
    compoundVariants: [
      {
        variant: ['primary', 'secondary', 'outlined'],
        class: 'rounded-lg',
      },
      // Remove padding for text-only variants
      {
        variant: ['string', 'subtle'],
        class: 'px-0 py-0',
      },
      // Disabled variants
      {
        variant: 'primary',
        disabled: true,
        class: 'bg-base-200',
      },
      // Active variants
      {
        variant: 'primary',
        active: true,
        class: 'text-primary bg-primary/10 hover:bg-primary/20',
      },
      {
        variant: 'secondary',
        active: true,
        class: 'text-base-content bg-primary/20 hover:bg-primary/40',
      },
      {
        variant: 'outlined',
        active: true,
        class: 'bg-primary text-primary-content hover:bg-primary/80',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  }
);

export type ButtonLinkVariants = VariantProps<typeof buttonLinkVariants>;
