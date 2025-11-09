'use client';
import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

type MediaQueryDirection = 'above' | 'below';

const IS_SERVER = typeof window === 'undefined';

// Convert direction + screenSize to CSS media query
const buildMediaQuery = (direction: MediaQueryDirection, screenSize: number): string => {
  return direction === 'above'
    ? `(min-width: ${screenSize}px)`
    : `(max-width: ${screenSize - 1}px)`;
};

export default function useMediaQuery(
  direction: MediaQueryDirection,
  screenSize: number,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {}
): boolean {
  const query = buildMediaQuery(direction, screenSize);

  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query));
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    // Triggered at the first client-side load and if query changes
    handleChange();
    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}

export type { MediaQueryDirection, UseMediaQueryOptions };
