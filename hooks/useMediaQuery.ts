import { useEffect, useState } from 'react';

const useMediaQuery = (direction: 'above' | 'below', screenSize: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        direction === 'above' ? window.innerWidth >= screenSize : window.innerWidth < screenSize
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [direction, screenSize]);

  return isMobile;
};

export default useMediaQuery;
