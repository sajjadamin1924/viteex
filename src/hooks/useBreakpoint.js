// src/hooks/useBreakpoint.js
import { useMediaQuery } from 'react-responsive';

const useBreakpoint = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return { isMobile, isTablet, isDesktop };
};

export default useBreakpoint;
