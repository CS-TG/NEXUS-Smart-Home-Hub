import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Home } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Load Shedding Protection',
      description: 'Intelligent battery backup system with 12+ hour runtime. Auto-switching ensures your home stays smart during Eskom outages.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Advanced machine learning adapts to your lifestyle, predicting and automating your home preferences while optimizing energy use.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'End-to-end encryption and biometric authentication keep your smart home data completely secure with local SA data centers.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Home,
      title: 'Solar Integration & Energy Savings',
      description: 'Seamless solar panel integration with AI-driven energy management reduces utility costs by up to 40% while maximizing comfort.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Revolutionary Smart Home Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Experience the next generation of home automation with cutting-edge AI, 
            uncompromising security, and intuitive 3D control interfaces.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-nexus-500/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-nexus-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-nexus-500/0 to-nexus-600/0 group-hover:from-nexus-500/5 group-hover:to-nexus-600/5 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nexus-400">99.9%</div>
            <div className="text-slate-400">Uptime Guarantee</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nexus-400">&lt;1ms</div>
            <div className="text-slate-400">Response Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nexus-400">10K+</div>
            <div className="text-slate-400">Compatible Devices</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-nexus-400">40%</div>
            <div className="text-slate-400">Energy Savings</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;