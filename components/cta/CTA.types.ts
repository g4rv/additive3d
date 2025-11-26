import { ButtonLinkVariants } from '../ui/button-link/variants';

export interface CTAButton {
  text: string;
  href: string;
  variant?: ButtonLinkVariants['variant'];
}

export interface CTAProps {
  title: string;
  description?: string;
  cta1: CTAButton;
  cta2?: CTAButton;
  className?: string;
}
