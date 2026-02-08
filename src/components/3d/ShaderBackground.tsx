import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Fragment shader for futuristic particle effect
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  
  // Noise function for organic movement
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    vec2 p = uv * 3.0;
    
    // Create flowing particle effect
    float n1 = smoothNoise(p + uTime * 0.1);
    float n2 = smoothNoise(p * 2.0 - uTime * 0.15);
    float n3 = smoothNoise(p * 4.0 + uTime * 0.05);
    
    // Combine noise layers
    float pattern = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
    
    // Create glowing particles - Reduced from 8 to 4 for performance
    float particles = 0.0;
    for(int i = 0; i < 4; i++) {
      float fi = float(i);
      vec2 particlePos = vec2(
        sin(uTime * 0.3 + fi * 0.5) * 0.5,
        cos(uTime * 0.2 + fi * 0.7) * 0.5
      );
      float dist = length(uv - 0.5 - particlePos * 0.3);
      particles += 0.02 / (dist * dist + 0.01);
    }
    
    // Color gradient (cyan to purple)
    vec3 color1 = vec3(0.055, 0.647, 0.914); // #0ea5e9 (cyan)
    vec3 color2 = vec3(0.545, 0.361, 0.965); // #8b5cf6 (purple)
    vec3 color3 = vec3(0.063, 0.725, 0.506); // #10b981 (green)
    
    vec3 finalColor = mix(color1, color2, pattern);
    finalColor = mix(finalColor, color3, n3);
    
    // Add particle glow
    finalColor += particles * vec3(0.3, 0.6, 1.0);
    
    // Fade edges
    float vignette = 1.0 - length(uv - 0.5) * 0.8;
    finalColor *= vignette;
    
    // Output with transparency
    gl_FragColor = vec4(finalColor, 0.3 + particles * 0.2);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ShaderPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  // Update resolution on window resize
  useMemo(() => {
    const handleResize = () => {
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [uniforms]);

  return (
    <mesh ref={meshRef} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

interface ShaderBackgroundProps {
  className?: string;
  intensity?: number;
}

const ShaderBackground = ({ className = '', intensity = 0.3 }: ShaderBackgroundProps) => {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ opacity: intensity }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false
        }}
        dpr={[1, 1]} // Fixed at 1x for better performance
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
};

export default ShaderBackground;
