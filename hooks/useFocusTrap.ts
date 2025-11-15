'use client';

import { useEffect, useRef } from 'react';

interface FocusTrapOptions {
  container: React.RefObject<HTMLElement | null>;
  isEnabled: boolean;
  restoreFocus?: React.RefObject<HTMLElement | null>;
}

function useFocusTrap({ container, isEnabled, restoreFocus }: FocusTrapOptions) {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Client-side only
    if (typeof window === 'undefined') return;
    if (!container.current || !isEnabled) return;

    // Store previous focus on mount
    previousFocusRef.current = restoreFocus?.current || (document.activeElement as HTMLElement);

    const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = Array.from(container.current.querySelectorAll(focusableSelector)) as HTMLElement[];
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus first element after a small delay to ensure DOM is ready
    const focusTimeout = setTimeout(() => {
      const firstFocusable = container.current.querySelector(focusableSelector) as HTMLElement;
      firstFocusable?.focus();
    }, 0);

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimeout);
      document.removeEventListener('keydown', handleKeyDown);

      // Restore focus when trap is disabled
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [container, isEnabled, restoreFocus]);
}

export default useFocusTrap;