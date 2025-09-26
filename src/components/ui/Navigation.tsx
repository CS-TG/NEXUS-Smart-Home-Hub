import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search, Plus, Minus } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  // Search functionality data
  const searchData = [
    'Smart Home Dashboard', 'Voice Control', 'Energy Monitoring', 
    'Security System', 'Lighting Control', 'Temperature Control',
    'Load Shedding Protection', '3D Visualization', 'Mobile App',
    'AI Automation', 'Smart Devices', 'Remote Access'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Keyboard shortcuts
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
        setTimeout(() => {
          const searchInput = document.querySelector('[data-search-input]') as HTMLInputElement;
          if (searchInput) searchInput.focus();
        }, 100);
      }
      if (e.key === 'Escape') {
        setShowSearch(false);
        setShowCart(false);
        setShowGetStarted(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchData.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: "${searchQuery}"`);
      alert(`Found ${searchResults.length} results for "${searchQuery}"`);
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    if (navigator.vibrate) navigator.vibrate(25);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(prev => prev - 1);
      if (navigator.vibrate) navigator.vibrate(10);
    }
  };

  const handleGetStarted = () => {
    setShowGetStarted(true);
    setTimeout(() => {
      alert('🎉 Welcome to NEXUS! Your smart home journey begins now.');
      setShowGetStarted(false);
    }, 1500);
  };

  const navItems = [
    { label: 'Features', href: 'interactive-showcase' },
    { label: 'Analytics', href: 'story' },
    { label: 'Future Tech', href: 'futuristic-features' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-nexus-500/30 shadow-2xl'
          : 'bg-slate-950/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enhanced with home functionality */}
          <motion.button
            onClick={() => scrollToSection('hero3d')}
            className="flex items-center space-x-3 z-10 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-nexus-500 via-nexus-600 to-nexus-700 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-nexus-400/20 group-hover:ring-nexus-400/40 transition-all">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-2xl tracking-tight group-hover:text-nexus-400 transition-colors">NEXUS</span>
              <span className="text-nexus-400 text-xs font-medium group-hover:text-nexus-300 transition-colors">Smart Home Hub</span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-nexus-400 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-slate-400 hover:text-nexus-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Cart Button */}
            <motion.button
              onClick={() => setShowCart(!showCart)}
              className="relative p-2 text-slate-400 hover:text-nexus-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-nexus-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Get Started Button */}
            <motion.button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-nexus-500 to-nexus-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-nexus-600 hover:to-nexus-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              disabled={showGetStarted}
            >
              {showGetStarted ? 'Processing...' : 'Get Started'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-nexus-500/30 p-4"
            >
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    data-search-input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search NEXUS features... (Ctrl+K)"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-nexus-500"
                    autoFocus
                  />
                  <Search className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                </div>
                {searchResults.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {searchResults.slice(0, 6).map((result, index) => (
                      <div key={index} className="bg-slate-800 p-2 rounded text-sm text-slate-300 hover:text-nexus-400 cursor-pointer">
                        {result}
                      </div>
                    ))}
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cart Overlay */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-0 bg-slate-900/95 backdrop-blur-xl border border-nexus-500/30 rounded-lg p-4 m-4 w-80"
            >
              <h3 className="text-white font-semibold mb-4">Cart Simulation</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-800 p-3 rounded">
                  <span className="text-slate-300">NEXUS Hub</span>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={removeFromCart}
                      className="p-1 text-slate-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>
                    <span className="text-white font-medium w-8 text-center">{cartCount}</span>
                    <motion.button
                      onClick={addToCart}
                      className="p-1 text-slate-400 hover:text-nexus-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-semibold text-white">
                  <span>Total: </span>
                  <span className="text-nexus-400">R{(cartCount * 12499).toLocaleString()}</span>
                </div>
                <motion.button
                  onClick={() => alert('Checkout simulation activated!')}
                  className="w-full bg-gradient-to-r from-nexus-500 to-nexus-600 text-white py-2 rounded font-medium hover:from-nexus-600 hover:to-nexus-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Checkout Simulation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-nexus-500/30"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-slate-300 hover:text-nexus-400 transition-colors font-medium py-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
                  <motion.button
                    onClick={() => setShowSearch(!showSearch)}
                    className="flex-1 bg-slate-800 text-slate-300 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    Search
                  </motion.button>
                  <motion.button
                    onClick={handleGetStarted}
                    className="flex-1 bg-gradient-to-r from-nexus-500 to-nexus-600 text-white py-3 rounded-lg font-medium hover:from-nexus-600 hover:to-nexus-700 transition-all"
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;