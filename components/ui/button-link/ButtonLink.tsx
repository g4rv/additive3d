'use client';

import { cn } from '@/utils/cn';
import NextLink from 'next/link';
import { forwardRef, useCallback, useMemo } from 'react';
import {
  ButtonAsButtonProps,
  ButtonAsLinkProps,
  buttonLinkVariants,
  type ButtonLinkProps,
} from '.';

const ButtonLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonLinkProps>(
  (props, ref) => {
    const {
      href,
      external = false,
      variant,
      size,
      active,
      className,
      disabled,
      startAdornment,
      endAdornment,
      children,
      ...rest
    } = props;

    const classes = cn(
      buttonLinkVariants({
        variant: variant || 'primary',
        size: size || 'base',
        active,
        disabled,
      }),
      (endAdornment || startAdornment) && 'inline-flex items-center gap-2',
      className
    );

    // Render button content with adornments
    const renderContent = () => (
      <>
        {startAdornment && startAdornment}
        {children}
        {endAdornment && endAdornment}
      </>
    );

    // Memoize link type calculation for performance
    const linkType = useMemo(() => {
      if (!href) return 'button';

      // Special protocols (excluding # which should be internal anchors)
      if (/^(tel:|mailto:|sms:)/.test(href)) return 'special';

      // External URLs (safe check that works on both server and client)
      if (href.startsWith('http')) return 'external';

      return 'internal';
    }, [href]);

    // Determine if we should use native <a> tag vs NextLink
    const useNativeLink = external || linkType === 'special' || linkType === 'external';

    // Handle keyboard events for disabled links
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (disabled && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      [disabled]
    );

    if (href) {
      const {
        external: _external,
        active: _active,
        disabled: _disabled,
        startAdornment: _startAdornment,
        endAdornment: _endAdornment,
        ...linkProps
      } = props as ButtonAsLinkProps;

      if (useNativeLink) {
        return (
          <a
            {...linkProps}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={classes}
            target={external || linkType === 'external' ? '_blank' : undefined}
            rel={external || linkType === 'external' ? 'noopener noreferrer' : undefined}
            aria-disabled={disabled}
            onKeyDown={disabled ? handleKeyDown : linkProps.onKeyDown}
            role={disabled ? 'link' : undefined}
            tabIndex={disabled ? -1 : linkProps.tabIndex}
          >
            {renderContent()}
          </a>
        );
      }

      return (
        <NextLink
          {...linkProps}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          aria-disabled={disabled}
          onKeyDown={disabled ? handleKeyDown : linkProps.onKeyDown}
          role={disabled ? 'link' : undefined}
          tabIndex={disabled ? -1 : linkProps.tabIndex}
        >
          {renderContent()}
        </NextLink>
      );
    }

    const buttonProps = rest as ButtonAsButtonProps;
    return (
      <button
        {...buttonProps}
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={disabled}
      >
        {renderContent()}
      </button>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
