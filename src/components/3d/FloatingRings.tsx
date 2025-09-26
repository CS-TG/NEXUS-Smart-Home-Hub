import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingRings = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const rings = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 30] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.01 + 0.005,
      color: ['#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'][i]
    }));
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    groupRef.current.children.forEach((ring, index) => {
      const ringData = rings[index];
      if (ring && ringData) {
        ring.rotation.x += ringData.speed;
        ring.rotation.y += ringData.speed * 0.7;
        ring.rotation.z += ringData.speed * 0.3;
        
        ring.position.x = ringData.position[0] + Math.sin(clock.elapsedTime * 0.5 + index) * 3;
        ring.position.y = ringData.position[1] + Math.cos(clock.elapsedTime * 0.3 + index) * 2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, index) => (
        <Torus
          key={index}
          args={[ring.scale, ring.scale * 0.2, 16, 32]}
          position={ring.position}
          rotation={ring.rotation}
        >
          <meshStandardMaterial 
            color={ring.color} 
            transparent 
            opacity={0.3}
            emissive={ring.color}
            emissiveIntensity={0.1}
            wireframe
          />
        </Torus>
      ))}
    </group>
  );
};

export default FloatingRings;