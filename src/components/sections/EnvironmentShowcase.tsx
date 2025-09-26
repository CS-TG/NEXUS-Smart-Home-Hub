import { motion } from 'framer-motion';

const EnvironmentShowcase = () => {
  return (
    <section id="environment" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Virtual Environment Showcase
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            See NEXUS in action across different home environments
          </p>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-nexus-500 rounded-full animate-pulse mx-auto mb-4"></div>
              <p className="text-slate-400">3D Environment Loading...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnvironmentShowcase;