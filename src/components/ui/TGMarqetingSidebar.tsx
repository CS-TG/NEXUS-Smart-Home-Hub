import { motion } from 'framer-motion';

const TGMarqetingSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
    >
      <motion.a
        href="https://tgmarqeting.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-nexus-500 to-nexus-600 text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg border border-nexus-400/20 hover:from-nexus-600 hover:to-nexus-700 transition-all duration-300"
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="writing-vertical-rl text-xs">Designed by</span>
          <span className="font-bold">TG MARQETING</span>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default TGMarqetingSidebar;