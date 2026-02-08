import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Home } from 'lucide-react';

const TestimonialsSection = () => {
  const techStack = [
    {
      icon: Sparkles,
      name: 'React + TypeScript',
      description: 'Modern component architecture with type safety'
    },
    {
      icon: Zap,
      name: 'WebGL Shaders',
      description: 'High-performance 3D graphics and animations'
    },
    {
      icon: Shield,
      name: 'Tailwind CSS',
      description: 'Responsive, utility-first styling system'
    },
    {
      icon: Home,
      name: 'Framer Motion',
      description: 'Smooth, production-ready animations'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-nexus-500/10 border border-nexus-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-nexus-400" />
            <span className="text-sm text-nexus-400 font-medium">Portfolio Demo Project</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Built by TG MARQETING
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of modern web development capabilities - from concept to interactive demo.
            Interested in a similar smart home platform? Let's build it together.
          </p>
        </motion.div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-nexus-500/30 transition-all"
            >
              <tech.icon className="w-8 h-8 text-nexus-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-sm text-slate-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-nexus-500/10 to-purple-500/10 border border-nexus-500/20 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Smart Home Platform?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact TG MARQETING to discuss custom AI-powered solutions, smart home automation,
            or similar innovative web applications for your business.
          </p>
          <a
            href="https://tgmarqeting.co.za/assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-nexus-500 to-nexus-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-nexus-500/30 transition-all transform hover:scale-105"
          >
            <span>Get Your Free Assessment</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;