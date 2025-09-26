import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

interface Particle {
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
  speed: number;
}

const FuturisticParticles = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.5 + 0.1,
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        speed: Math.random() * 0.02 + 0.01
      });
    }
    return temp;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.y = clock.elapsedTime * 0.1;
    meshRef.current.children.forEach((child, index) => {
      const particle = particles[index];
      if (child && particle) {
        child.rotation.x += particle.speed;
        child.rotation.y += particle.speed * 0.5;
        child.position.y = particle.position[1] + Math.sin(clock.elapsedTime + index) * 2;
      }
    });
  });

  return (
    <group ref={meshRef}>
      {particles.map((particle, index) => (
        <group key={index} position={particle.position}>
          {index % 3 === 0 ? (
            <Sphere args={[particle.scale, 8, 8]}>
              <meshStandardMaterial 
                color="#0ea5e9" 
                transparent 
                opacity={0.6}
                emissive="#0ea5e9"
                emissiveIntensity={0.2}
              />
            </Sphere>
          ) : index % 3 === 1 ? (
            <Box args={[particle.scale, particle.scale, particle.scale]}>
              <meshStandardMaterial 
                color="#8b5cf6" 
                transparent 
                opacity={0.4}
                emissive="#8b5cf6"
                emissiveIntensity={0.1}
              />
            </Box>
          ) : (
            <Sphere args={[particle.scale * 0.5, 4, 4]}>
              <meshStandardMaterial 
                color="#10b981" 
                transparent 
                opacity={0.8}
                emissive="#10b981"
                emissiveIntensity={0.3}
              />
            </Sphere>
          )}
        </group>
      ))}
    </group>
  );
};

export default FuturisticParticles;