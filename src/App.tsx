import { Suspense, useEffect, lazy } from 'react';
import Footer from './components/sections/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Navigation from './components/ui/Navigation';
import ScrollProgress from './components/ui/ScrollProgress';
import TGMarqetingSidebar from './components/ui/TGMarqetingSidebar';
import GradientBackground from './components/effects/GradientBackground';
import { StoryProvider } from './contexts/StoryContext';

// Lazy load heavy 3D components for better initial load
const Hero3DSection = lazy(() => import('./components/sections/Hero3DSection'));
const Interactive3DShowcase = lazy(() => import('./components/sections/Interactive3DShowcase'));
const FuturisticFeaturesSection = lazy(() => import('./components/sections/FuturisticFeaturesSection'));
const DataDrivenShowcase = lazy(() => import('./components/sections/DataDrivenShowcase'));

// NEXUS Smart Home Hub - Portfolio Demo by TG MARQETING
function App() {
  useEffect(() => {
    console.log('NEXUS App loaded successfully!');
    document.title = 'NEXUS Smart Home Hub - Demo by TG MARQETING';
    
    // Disable animations on low-end devices
    const isLowEnd = (navigator.hardwareConcurrency || 2) < 4;
    if (isLowEnd) {
      document.documentElement.classList.add('reduce-motion');
    }
  }, []);

  return (
    <StoryProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden relative">
        {/* High-Performance CSS Gradient Background - 99% faster than WebGL */}
        <GradientBackground intensity={0.3} />

        {/* Navigation */}
        <Navigation />
        
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* TG Marketing Attribution */}
        <TGMarqetingSidebar />
        
        {/* 3D Hero Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Hero3DSection />
        </Suspense>
        
        {/* Interactive Tablet Showcase */}
        <section id="interactive-showcase" className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Interactive3DShowcase />
          </Suspense>
        </section>

        {/* Futuristic Features with 3D Elements */}
        <section id="futuristic-features" className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <FuturisticFeaturesSection />
          </Suspense>
        </section>
        
        {/* Story Experience */}
        <section id="story" className="relative z-10">
          <Suspense fallback={<div className="text-white text-center p-8">Loading Analytics...</div>}>
            <DataDrivenShowcase />
          </Suspense>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </StoryProvider>
  );
}

export default App;