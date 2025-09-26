import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 border-4 border-nexus-500/30 rounded-full"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-nexus-500 rounded-full"></div>
      </motion.div>
      <motion.span 
        className="ml-4 text-nexus-400 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading NEXUS Experience...
      </motion.span>
    </div>
  );
};

export default LoadingSpinner;