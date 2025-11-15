'use client';

import { useEffect, useRef, useCallback } from 'react';

interface FocusTrapOptions {
  container: React.RefObject<HTMLElement | null>;
  isEnabled: boolean;
  restoreFocus?: React.RefObject<HTMLElement | null>;
}

function useFocusTrap({ container, isEnabled, restoreFocus }: FocusTrapOptions) {
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const wasEnabledRef = useRef(false);

  const restorePreviousFocus = useCallback(() => {
    if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
      previousFocusRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Client-side only
    if (typeof window === 'undefined') return;

    const currentContainer = container.current;

    // Enable focus trap
    if (currentContainer && isEnabled) {
      // Store previous focus only when enabling
      if (!wasEnabledRef.current) {
        previousFocusRef.current = restoreFocus?.current || (document.activeElement as HTMLElement);
        wasEnabledRef.current = true;
      }

      const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') return;
        if (!container.current) return;

        const focusableElements = Array.from(container.current.querySelectorAll(focusableSelector)) as HTMLElement[];
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;

        if (event.shiftKey) {
          if (activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      };

      // Focus first element after a small delay to ensure DOM is ready
      const focusTimeout = setTimeout(() => {
        if (container.current) {
          const firstFocusable = container.current.querySelector(focusableSelector) as HTMLElement;
          firstFocusable?.focus();
        }
      }, 0);

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(focusTimeout);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }

    // Disable focus trap - restore focus
    else if (wasEnabledRef.current && !isEnabled) {
      restorePreviousFocus();
      wasEnabledRef.current = false;
    }
  }, [container, isEnabled, restoreFocus, restorePreviousFocus]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (wasEnabledRef.current) {
        restorePreviousFocus();
      }
    };
  }, [restorePreviousFocus]);
}

export default useFocusTrap;