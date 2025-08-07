import { useEffect, useRef, useCallback } from 'react';

/**
 * Performance optimization hooks for the Auracle application
 * These hooks help reduce jitter and improve scroll/interaction performance
 */

/**
 * Hook to debounce scroll events and reduce performance impact
 */
export const useScrollPerformance = (callback: () => void, delay: number = 16) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
  }, [delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};

/**
 * Hook to reduce animation frequency for users who prefer reduced motion
 */
export const useReducedMotion = () => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  return prefersReducedMotion;
};

/**
 * Hook to optimize heavy animations by reducing their frequency
 */
export const useOptimizedAnimation = (callback: () => void) => {
  const rafRef = useRef<number>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const animateCallback = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      callbackRef.current();
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return animateCallback;
};

/**
 * Hook to prevent unnecessary re-renders when scrolling
 */
export const useScrollOptimization = () => {
  useEffect(() => {
    // Add scroll optimization class to body
    document.body.classList.add('scroll-smooth');
    
    return () => {
      document.body.classList.remove('scroll-smooth');
    };
  }, []);
};
