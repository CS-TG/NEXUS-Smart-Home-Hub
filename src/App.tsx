import { Suspense, useEffect } from 'react';
import Hero3DSection from './components/sections/Hero3DSection';
import Interactive3DShowcase from './components/sections/Interactive3DShowcase';
import FuturisticFeaturesSection from './components/sections/FuturisticFeaturesSection';
import DataDrivenShowcase from './components/sections/DataDrivenShowcase';
import Footer from './components/sections/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Navigation from './components/ui/Navigation';
import ScrollProgress from './components/ui/ScrollProgress';
import TGMarqetingSidebar from './components/ui/TGMarqetingSidebar';
import { StoryProvider } from './contexts/StoryContext';

// Enhanced App with full NEXUS functionality restored
function App() {
  useEffect(() => {
    console.log('NEXUS App loaded successfully!');
  }, []);

  return (
    <StoryProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden relative">
        {/* Background 3D Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nexus-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

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