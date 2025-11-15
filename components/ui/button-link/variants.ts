import { cva, type VariantProps } from 'class-variance-authority';

export const buttonLinkVariants = cva(
  'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none duration-300 transition-colors rounded-lg text-sm font-medium inline-block',
  {
    variants: {
      variant: {
        primary: 'text-base-content hover:bg-base-200',
        secondary: 'text-primary-content bg-primary hover:bg-primary/85',
        outlined:
          'border border-primary text-primary hover:bg-primary hover:text-primary-content py-2.25 px-4.75',
        string: 'text-base-content hover:text-primary',
        subtle: 'text-base-content/50 hover:text-primary',
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
        variant: ['primary', 'secondary'],
        class: 'px-5 py-2.5',
      },
      // Disabled
      {
        variant: 'primary',
        disabled: true,
        class: 'bg-base-200',
      },
      // Active
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
    },
  }
);

export type ButtonLinkVariants = VariantProps<typeof buttonLinkVariants>;
