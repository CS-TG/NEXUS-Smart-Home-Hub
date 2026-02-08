// Performance optimization utilities for NEXUS

/**
 * Debounce function to limit expensive operations
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll and resize events
 */
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Lazy load images with intersection observer
 */
export const lazyLoadImage = (img: HTMLImageElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    },
    { rootMargin: '50px' }
  );

  observer.observe(img);
  return observer;
};

/**
 * Check if device is low-end based on hardware concurrency
 */
export const isLowEndDevice = (): boolean => {
  // Check CPU cores (less than 4 cores = low-end)
  const cores = navigator.hardwareConcurrency || 2;
  
  // Check device memory (less than 4GB = low-end)
  const memory = (navigator as any).deviceMemory || 4;
  
  return cores < 4 || memory < 4;
};

/**
 * Reduce motion based on user preference or device capability
 */
export const shouldReduceMotion = (): boolean => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches || isLowEndDevice();
};
