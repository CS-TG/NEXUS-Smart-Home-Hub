import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FuturisticParticles from '../3d/FuturisticParticles';
import FloatingRings from '../3d/FloatingRings';

interface FloatingBackground3DProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const FloatingBackground3D = ({ intensity = 'medium', className = '' }: FloatingBackground3DProps) => {
  const getParticleCount = () => {
    switch (intensity) {
      case 'low': return 0.3;
      case 'medium': return 0.6;
      case 'high': return 1.0;
      default: return 0.6;
    }
  };

  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity: getParticleCount() }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        gl={{ 
          antialias: false, // Disabled for performance
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false
        }}
        dpr={[1, 1]} // Fixed at 1x for better performance
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#0ea5e9" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#8b5cf6" />
          
          <Environment preset="night" />
          
          {intensity !== 'low' && <FuturisticParticles />}
          <FloatingRings />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={intensity === 'high' ? 0.5 : 0.2}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingBackground3D;