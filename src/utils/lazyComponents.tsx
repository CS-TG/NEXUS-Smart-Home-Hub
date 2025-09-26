import { lazy, Suspense, ComponentType } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Enhanced lazy loading with error boundary and performance monitoring
function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallbackElement?: React.ReactNode
) {
  const LazyComponent = lazy(importFn);

  return function LazyWrapper(props: React.ComponentProps<T>) {
    const defaultFallback = (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );

    return (
      <Suspense fallback={fallbackElement || defaultFallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Lazy load all 3D components for better performance
export const LazyHero3DSection = createLazyComponent(
  () => import('../components/sections/Hero3DSection'),
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-nexus-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-nexus-400 text-lg">Loading 3D Experience...</p>
    </div>
  </div>
);

export const LazyInteractive3DShowcase = createLazyComponent(
  () => import('../components/sections/Interactive3DShowcase'),
  <div className="flex items-center justify-center min-h-[600px] bg-slate-950">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-nexus-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-nexus-400">Loading Interactive Features...</p>
    </div>
  </div>
);

export const LazyFuturisticFeaturesSection = createLazyComponent(
  () => import('../components/sections/FuturisticFeaturesSection'),
  <div className="flex items-center justify-center min-h-[500px] bg-slate-950">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-nexus-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-nexus-400">Loading Future Tech...</p>
    </div>
  </div>
);

export const LazyFloatingBackground3D = createLazyComponent(
  () => import('../components/3d/FloatingBackground3D'),
  <div className="absolute inset-0 bg-gradient-to-b from-nexus-500/5 to-purple-500/5 blur-3xl"></div>
);