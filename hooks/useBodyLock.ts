'use client';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useBodyLock(isLocked: boolean) {
  useIsomorphicLayoutEffect(() => {
    if (typeof document === 'undefined') return;
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLocked]);
}

export default useBodyLock;
