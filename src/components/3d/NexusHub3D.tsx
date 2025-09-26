import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const NexusHub3D = () => {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<any>(null);
  const orbitingRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (meshRef.current) {
      // Enhanced floating animation
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.15;
      meshRef.current.rotation.y = t * 0.3;
    }
    
    if (groupRef.current) {
      // Gentle rotation based on mouse position with smoother movement
      groupRef.current.rotation.x = state.mouse.y * 0.1;
      groupRef.current.rotation.y += 0.01; // Continuous slow rotation
    }
    
    if (orbitingRef.current) {
      // Orbiting elements animation
      orbitingRef.current.rotation.y = t * 0.8;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
      {/* Main Hub Body */}
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 1, 0.4, 32]} />
        <meshStandardMaterial 
          color="#0ea5e9"
          metalness={0.8}
          roughness={0.2}
          emissive="#0284c7"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Top Ring */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <torusGeometry args={[0.9, 0.05, 8, 32]} />
        <meshStandardMaterial 
          color="#38bdf8"
          metalness={0.9}
          roughness={0.1}
          emissive="#0ea5e9"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Bottom Ring */}
      <mesh position={[0, -0.3, 0]} castShadow>
        <torusGeometry args={[1.1, 0.03, 8, 32]} />
        <meshStandardMaterial 
          color="#0284c7"
          metalness={0.9}
          roughness={0.1}
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Center Orb */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial 
          color="#38bdf8"
          metalness={0.9}
          roughness={0.1}
          emissive="#38bdf8"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Orbiting Elements */}
      <group ref={orbitingRef}>
        {/* Connection nodes */}
        {Array.from({ length: 6 }, (_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 1.5,
              0,
              Math.sin((i / 6) * Math.PI * 2) * 1.5
            ]}
            castShadow
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color="#00ff88"
              emissive="#00ff88"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
        
        {/* Data streams */}
        {Array.from({ length: 3 }, (_, i) => (
          <mesh
            key={`stream-${i}`}
            position={[
              Math.cos((i / 3) * Math.PI * 2) * 2,
              0.2,
              Math.sin((i / 3) * Math.PI * 2) * 2
            ]}
            rotation={[0, (i / 3) * Math.PI * 2, 0]}
          >
            <boxGeometry args={[0.02, 0.02, 0.3]} />
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#fbbf24"
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
      </group>

      {/* Base Platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.1, 32]} />
        <meshStandardMaterial 
          color="#1e293b"
          metalness={0.5}
          roughness={0.8}
          emissive="#0f172a"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
};

export default NexusHub3D;