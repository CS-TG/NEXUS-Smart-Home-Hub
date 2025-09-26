import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-nexus-500/30 z-50"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: '0%' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-nexus-500 to-nexus-600"
        style={{ scaleX: scrollProgress, transformOrigin: '0%' }}
      />
    </motion.div>
  );
};

export default ScrollProgress;