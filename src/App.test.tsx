
import Navigation from './components/ui/Navigation';
import ScrollProgress from './components/ui/ScrollProgress';
import { StoryProvider } from './contexts/StoryContext';

// Simple test component to isolate issues
function TestApp() {
  return (
    <StoryProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
        {/* Navigation */}
        <Navigation />
        
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Simple test content */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">NEXUS Smart Home Hub</h1>
            <p className="text-xl text-slate-300">Testing page load...</p>
          </div>
        </div>
      </div>
    </StoryProvider>
  );
}

export default TestApp;