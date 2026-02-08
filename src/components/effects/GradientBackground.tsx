import { useEffect, useState } from 'react';

interface GradientBackgroundProps {
  intensity?: number;
  className?: string;
}

const GradientBackground = ({ intensity = 0.3, className = '' }: GradientBackgroundProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity: intensity }}>
      {/* Multi-layer Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Animated Floating Orbs */}
      <div 
        className={`floating-orb orb-1 ${mounted ? 'animate-float-1' : ''}`}
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          width: '600px',
          height: '600px',
          position: 'absolute',
          top: '10%',
          left: '20%',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      
      <div 
        className={`floating-orb orb-2 ${mounted ? 'animate-float-2' : ''}`}
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          width: '500px',
          height: '500px',
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      
      <div 
        className={`floating-orb orb-3 ${mounted ? 'animate-float-3' : ''}`}
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          width: '450px',
          height: '450px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      
      <div 
        className={`floating-orb orb-4 ${mounted ? 'animate-float-4' : ''}`}
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)',
          width: '400px',
          height: '400px',
          position: 'absolute',
          bottom: '30%',
          left: '10%',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default GradientBackground;
