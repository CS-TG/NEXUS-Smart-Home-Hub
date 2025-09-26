import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import NexusHub3D from '@/components/3d/NexusHub3D';
import ParticleSystem from '@/components/3d/ParticleSystem';

const HeroSection = () => {
  const canvasRef = useRef(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          ref={canvasRef}
          camera={{ position: [0, 0, 5], fov: 75 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            {/* Environment */}
            <Environment preset="night" />
            
            {/* 3D Hub Model */}
            <NexusHub3D />
            
            {/* Particle System */}
            <ParticleSystem />
            
            {/* Ground Shadow */}
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -1.4, 0]}
              opacity={0.75}
              width={10}
              height={10}
              blur={2.6}
              far={2}
            />
            
            {/* Camera Controls */}
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-nexus-500/10 border border-nexus-500/20 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-nexus-400" />
              <span className="text-sm text-nexus-400 font-medium">
                AI-Powered Smart Home Revolution
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                <span className="bg-gradient-to-r from-white via-nexus-300 to-nexus-500 bg-clip-text text-transparent">
                  NEXUS
                </span>
                <br />
                <span className="text-white">Smart Home</span>
                <br />
                <span className="bg-gradient-to-r from-nexus-400 to-nexus-600 bg-clip-text text-transparent">
                  Hub
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform your living space with the world's most advanced smart home hub. 
              Experience seamless automation, AI-powered insights, and stunning 3D control.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-nexus-400">50K+</div>
                <div className="text-sm text-slate-400">Happy Homes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-nexus-400">99.9%</div>
                <div className="text-sm text-slate-400">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-nexus-400">24/7</div>
                <div className="text-sm text-slate-400">AI Support</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="group bg-gradient-to-r from-nexus-500 to-nexus-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:from-nexus-600 hover:to-nexus-700 transition-all shadow-lg shadow-nexus-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Product</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-8 border-t border-white/10"
            >
              <p className="text-sm text-slate-400 mb-4">Trusted by leading smart home enthusiasts</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="text-white font-semibold">TechCrunch</div>
                <div className="text-white font-semibold">Wired</div>
                <div className="text-white font-semibold">CES Winner</div>
                <div className="text-white font-semibold">IoT Award</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D Showcase placeholder */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10"
            >
              {/* Interactive hints */}
              <div className="absolute top-4 right-4 z-20">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-nexus-500/20 backdrop-blur-sm border border-nexus-500/30 rounded-full p-3"
                >
                  <span className="text-xs text-nexus-300 font-medium">Drag to rotate</span>
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-4 z-20">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-gradient-to-r from-nexus-500/20 to-nexus-600/20 backdrop-blur-sm border border-nexus-500/30 rounded-lg p-3"
                >
                  <span className="text-sm text-nexus-300 font-medium">Live 3D Model</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-nexus-500 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;