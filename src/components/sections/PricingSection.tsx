import { motion } from 'framer-motion';
import { Check, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const PricingSection = () => {

  const plans = [
    {
      id: 'starter',
      name: 'NEXUS Starter',
      price: 4999,
      originalPrice: 6499,
      description: 'Perfect for small apartments and first-time smart home users',
      badge: 'Demo Pricing',
      features: [
        'NEXUS Hub + 7" Control Tablet',
        'Up to 25 connected devices',
        '8-hour backup battery (Load Shedding)',
        'Basic Eskom outage automation',
        'Mobile app control',
        'Voice assistant (English/Afrikaans)',
        '1-year warranty + SA support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'NEXUS Pro',
      price: 9999,
      originalPrice: 12999,
      description: 'Ideal for medium to large homes with advanced automation',
      badge: 'Most Popular',
      features: [
        'NEXUS Hub + 10" HD Control Tablet',
        'Up to 100 connected devices',
        '12-hour backup battery (Load Shedding Ready)',
        'Advanced Eskom outage automation',
        'Solar panel integration & monitoring',
        'Energy cost optimization (save up to 40%)',
        'Security monitoring with cameras',
        'Multi-language voice (EN/AF/ZU/XH)',
        'Professional SA installation',
        '2-year warranty'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'NEXUS Enterprise',
      price: 19999,
      originalPrice: 24999,
      description: 'Commercial-grade solution for smart buildings and offices',
      badge: 'Business Solution',
      features: [
        'NEXUS Hub + Multiple 12" Tablets',
        'Unlimited connected devices',
        'Multi-building management',
        '24-hour backup power (Stage 8 Ready)',
        'Solar farm integration & monitoring',
        'Enterprise security & compliance',
        'Custom automation & analytics',
        'Dedicated SA support team',
        '5-year warranty + priority service'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Demo Watermark */}
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400 font-medium">Portfolio Demo - Concept Pricing</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Smart Home Packages
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Conceptual pricing for South African market. Designed for load shedding resilience and energy optimization.
          </p>

          {/* Location Indicator */}
          <div className="inline-flex items-center space-x-2 bg-nexus-500/10 border border-nexus-500/20 rounded-full px-4 py-2">
            <MapPin className="w-4 h-4 text-nexus-400" />
            <span className="text-sm text-nexus-400">Pricing for South Africa (ZAR)</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-nexus-900/50 to-nexus-950/50 border-2 border-nexus-500'
                  : 'bg-slate-900/50 border border-slate-800'
              } backdrop-blur-sm hover:border-nexus-500/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-nexus-500 to-nexus-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-4xl font-bold text-white">R{plan.price.toLocaleString()}</span>
                  <span className="text-lg text-slate-400 line-through">R{plan.originalPrice.toLocaleString()}</span>
                </div>
                <div className="text-sm text-nexus-400">One-time payment • Free installation</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-nexus-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://tgmarqeting.co.za/assessment"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all block text-center ${
                  plan.popular
                    ? 'bg-gradient-to-r from-nexus-500 to-nexus-600 text-white hover:from-nexus-600 hover:to-nexus-700'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Similar Solution
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-nexus-900/20 to-purple-900/20 border border-nexus-500/30 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Portfolio Demonstration</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Want a Custom Smart Home Solution?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            This NEXUS demo showcases TG MARQETING's ability to build modern, performant web experiences.
            Get a free consultation for your own AI-powered business platform.
          </p>
          <motion.a
            href="https://tgmarqeting.co.za/assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Your Free Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;