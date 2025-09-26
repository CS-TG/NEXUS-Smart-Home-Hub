import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { OrbitControls, Environment } from '@react-three/drei';
import FuturisticParticles from '../3d/FuturisticParticles';
import FloatingRings from '../3d/FloatingRings';
import { Cpu, Zap, Shield, Wifi, Brain, Home } from 'lucide-react';

const FuturisticFeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [processingLoad, setProcessingLoad] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setProcessingLoad(prev => Math.max(5, Math.min(95, prev + (Math.random() - 0.5) * 10)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Neural Edge Computing",
      description: "Local AI processing with quantum-inspired algorithms",
      stats: { value: `${processingLoad}%`, label: "Processing Load" },
      color: "from-purple-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Fusion Power Management",
      description: "Advanced battery with solar integration and grid-tie",
      stats: { value: "156h", label: "Max Runtime" },
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Military-grade encryption with biometric authentication",
      stats: { value: "AES-512", label: "Encryption" },
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Wifi,
      title: "Mesh Network Protocol",
      description: "Self-healing wireless mesh with satellite backup",
      stats: { value: "99.9%", label: "Uptime" },
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Holographic Interface",
      description: "AR/VR ready with gesture and voice control",
      stats: { value: "< 1ms", label: "Response" },
      color: "from-nexus-500 to-purple-600"
    },
    {
      icon: Cpu,
      title: "Adaptive Intelligence",
      description: "Self-learning system that evolves with your habits",
      stats: { value: "24/7", label: "Learning" },
      color: "from-orange-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 opacity-40">
        <Canvas
          camera={{ position: [0, 0, 20], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#0ea5e9" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
            
            <Environment preset="night" />
            
            <FuturisticParticles />
            <FloatingRings />
            
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            Future-Tech
            <span className="block bg-gradient-to-r from-nexus-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience tomorrow's smart home technology, designed for today's South African challenges
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activeFeature === index
                  ? 'bg-slate-800/70 border-nexus-500/50 shadow-2xl shadow-nexus-500/20 scale-105'
                  : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: activeFeature === index ? 'perspective(1000px) rotateY(5deg)' : 'none'
              }}
              onClick={() => setActiveFeature(index)}
              whileHover={{ scale: 1.02, rotateY: 2 }}
            >
              {/* Feature Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 relative`}>
                <feature.icon className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Feature Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                
                {/* Live Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="text-left">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.stats.value}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{feature.stats.label}</div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border-2 border-nexus-500/30 relative">
                    <div 
                      className="absolute inset-1 rounded-full bg-gradient-to-r from-nexus-500 to-purple-500"
                      style={{
                        transform: `rotate(${activeFeature === index ? 360 : 0}deg)`,
                        transition: 'transform 2s ease-in-out'
                      }}
                    ></div>
                    <div className="absolute inset-2 rounded-full bg-slate-800"></div>
                  </div>
                </div>
              </div>

              {/* Holographic Effect */}
              {activeFeature === index && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-nexus-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nexus-400 to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Central Processing Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-slate-900/80 backdrop-blur-sm border border-nexus-500/30 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-nexus-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Neural Network Processing</span>
            <div className="text-nexus-400 font-mono">{processingLoad.toFixed(1)}%</div>
            <Cpu className="w-5 h-5 text-nexus-400 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticFeaturesSection;