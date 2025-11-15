import { ButtonLinkVariants } from './variants';

interface BaseButtonLinkProps extends ButtonLinkVariants {
  href?: string;
  external?: boolean;
  active?: boolean;
  className?: string;
  disabled?: boolean;
}

interface ButtonAsButtonProps
  extends BaseButtonLinkProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLinkProps
  extends BaseButtonLinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'disabled'> {
  href: string;
}

export type ButtonLinkProps = ButtonAsButtonProps | ButtonAsLinkProps;
export type { ButtonAsButtonProps, ButtonAsLinkProps, BaseButtonLinkProps };