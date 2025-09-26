import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Enthusiast',
      content: 'NEXUS transformed my home into a smart sanctuary. The AI learns my routines perfectly.',
      rating: 5,
      image: '/testimonial1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Smart Home Expert',
      content: 'The 3D visualization is revolutionary. I can see and control everything intuitively.',
      rating: 5,
      image: '/testimonial2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      content: 'My clients love how NEXUS seamlessly integrates with any home aesthetic.',
      rating: 5,
      image: '/testimonial3.jpg'
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Trusted by 50,000+ Happy Homes
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the smart home revolution and discover why NEXUS is the preferred choice
            for intelligent automation worldwide.
          </p>
        </motion.div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="text-4xl font-bold text-nexus-400">12,453</div>
            <div className="text-slate-400">Active Users</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <div className="text-4xl font-bold text-nexus-400">4.9/5</div>
            <div className="text-slate-400">User Rating</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <div className="text-4xl font-bold text-nexus-400">340%</div>
            <div className="text-slate-400">Inquiry Increase</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <div className="text-4xl font-bold text-nexus-400">99.9%</div>
            <div className="text-slate-400">Satisfaction Rate</div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-nexus-400 mb-4" />
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-nexus-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;