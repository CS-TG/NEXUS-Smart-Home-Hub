import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wifi, Zap, Sparkles } from 'lucide-react';
import ShaderBackground from '../3d/ShaderBackground';

const Hero3DSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loadSheddingStage, setLoadSheddingStage] = useState(2);
  const [connectedHomes, setConnectedHomes] = useState(1247);

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate dynamic data
    const dataInterval = setInterval(() => {
      setLoadSheddingStage(Math.floor(Math.random() * 5) + 1);
      setConnectedHomes(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dataInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero3d" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shader Background */}
      <ShaderBackground intensity={0.6} />

      {/* Portfolio Demo Watermark */}
      <div className="absolute top-8 right-8 z-50">
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400 font-medium">Portfolio Demo by TG MARQETING</span>
          </div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-nexus-950/40" />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nexus-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-nexus-500/5 to-transparent rounded-full"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-white text-shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Works When
              <span className="block bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 bg-clip-text text-transparent">
                Eskom Doesn't
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              South Africa's first load-shedding-proof smart home hub. 
              Control everything from our intuitive tablet interface.
            </motion.p>
          </div>
          
          {/* Location Badge - Dynamic */}
          <motion.div
            className="inline-flex items-center space-x-3 bg-nexus-500/20 backdrop-blur-sm border border-nexus-500/30 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <MapPin className="w-4 h-4 text-nexus-400" />
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Cape Town, South Africa</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Wifi className="w-3 h-3 text-green-400" />
              <span className="text-green-400">{connectedHomes} homes</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Zap className="w-3 h-3 text-yellow-400" />
              <span className="text-yellow-400">Stage {loadSheddingStage}</span>
            </div>
          </motion.div>

          {/* Live Stats */}
          <motion.div
            className="flex justify-center items-center space-x-6 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="text-center">
              <div className="text-white font-semibold">{currentTime.toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</div>
              <div className="text-xs">SAST</div>
            </div>
            <div className="w-1 h-4 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-nexus-400 font-semibold">99.8%</div>
              <div className="text-xs">Uptime</div>
            </div>
            <div className="w-1 h-4 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-green-400 font-semibold">2.3ms</div>
              <div className="text-xs">Response</div>
            </div>
          </motion.div>
          
          {/* CTA Buttons - Portfolio Links */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              onClick={() => scrollToSection('features')}
              className="px-8 py-4 bg-gradient-to-r from-nexus-500 to-nexus-600 text-white font-semibold text-lg rounded-xl shadow-2xl hover:shadow-nexus-500/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              <span>Explore Features</span>
            </motion.button>
            
            <motion.a
              href="https://tgmarqeting.co.za/assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-nexus-500/50 text-nexus-400 font-semibold text-lg rounded-xl backdrop-blur-sm hover:bg-nexus-500/10 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Similar Solution</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-nexus-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nexus-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3DSection;