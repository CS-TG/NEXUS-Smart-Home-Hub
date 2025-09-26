import { motion } from 'framer-motion';
import FloatingBackground3D from '../3d/FloatingBackground3D';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Zap, 
  Home, 
  Users,
  Award,
  Github,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      {/* 3D Background */}
      <FloatingBackground3D intensity="low" className="opacity-15" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-nexus-400 to-nexus-600 bg-clip-text text-transparent mb-3">
                  NEXUS
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  South Africa's first load-shedding-proof smart home hub. 
                  Engineered in Cape Town for African resilience.
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">1,247+ Homes Protected</span>
              </div>

              {/* Awards */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-nexus-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Tech Innovation Award 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-nexus-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">SA Energy Efficiency Winner</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">Quick Access</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero3d')}
                    className="text-slate-300 hover:text-nexus-400 transition-colors flex items-center space-x-2 group"
                  >
                    <Home className="w-4 h-4 group-hover:text-nexus-400" />
                    <span>Home Control Demo</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('interactive-showcase')}
                    className="text-slate-300 hover:text-nexus-400 transition-colors flex items-center space-x-2 group"
                  >
                    <Zap className="w-4 h-4 group-hover:text-nexus-400" />
                    <span>Live Features</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('story')}
                    className="text-slate-300 hover:text-nexus-400 transition-colors flex items-center space-x-2 group"
                  >
                    <Users className="w-4 h-4 group-hover:text-nexus-400" />
                    <span>Customer Results</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('futuristic-features')}
                    className="text-slate-300 hover:text-nexus-400 transition-colors flex items-center space-x-2 group"
                  >
                    <Shield className="w-4 h-4 group-hover:text-nexus-400" />
                    <span>Future Tech</span>
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-nexus-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Cape Town HQ</p>
                    <p className="text-slate-300 text-sm">V&A Waterfront, Cape Town 8001</p>
                    <p className="text-slate-300 text-sm">Western Cape, South Africa</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-nexus-400" />
                  <div>
                    <p className="text-white font-medium">+27 21 555 NEXUS</p>
                    <p className="text-slate-300 text-sm">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-nexus-400" />
                  <div>
                    <p className="text-white font-medium">hello@nexushub.co.za</p>
                    <p className="text-slate-300 text-sm">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-nexus-400" />
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-slate-300 text-sm">Mon-Fri: 8AM-6PM SAST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">Live Stats</h4>
              
              {/* Live Performance Metrics */}
              <div className="bg-slate-900/50 rounded-xl p-4 border border-nexus-500/20">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">System Uptime</span>
                    <span className="text-green-400 font-semibold">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">Homes Protected</span>
                    <span className="text-nexus-400 font-semibold">1,247+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">Energy Saved</span>
                    <span className="text-yellow-400 font-semibold">2.3 GWh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">Load Shedding Survived</span>
                    <span className="text-blue-400 font-semibold">156h</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="text-white font-medium mb-3">Follow Our Journey</h5>
                <div className="flex space-x-3">
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-nexus-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-nexus-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-nexus-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-nexus-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-slate-300 text-sm">
                <span>© {currentYear} NEXUS Smart Home Hub</span>
                <span className="hidden md:block">•</span>
                <button className="hover:text-nexus-400 transition-colors">Privacy Policy</button>
                <span className="hidden md:block">•</span>
                <button className="hover:text-nexus-400 transition-colors">Terms of Service</button>
                <span className="hidden md:block">•</span>
                <button className="hover:text-nexus-400 transition-colors">Warranty</button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Made in South Africa</span>
                </div>
                
                <motion.button
                  onClick={scrollToTop}
                  className="px-4 py-2 bg-nexus-500/20 border border-nexus-500/30 rounded-lg text-nexus-400 hover:bg-nexus-500/30 transition-all text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Top
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;