import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Thermometer, 
  Shield, 
  Battery, 
  Lightbulb, 
  Home, 
  ArrowLeft,
  Wifi,
  Camera,
  Settings,
  Clock,
  Sun,
  Moon
} from 'lucide-react';

interface InteractiveTabletProps {
  className?: string;
  externalScreen?: string;
  onScreenChange?: (screen: string) => void;
}

const InteractiveTablet = ({ className = '', externalScreen, onScreenChange }: InteractiveTabletProps) => {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [lightsState, setLightsState] = useState<Record<string, { on: boolean; brightness: number }>>({
    'Living Room': { on: true, brightness: 85 },
    'Kitchen': { on: false, brightness: 0 },
    'Bedroom': { on: true, brightness: 60 },
    'Garden': { on: false, brightness: 0 },
  });

  // Handle external screen changes
  useEffect(() => {
    if (externalScreen && externalScreen !== activeScreen) {
      setActiveScreen(externalScreen);
    }
  }, [externalScreen, activeScreen]);

  // Notify parent of screen changes
  const handleScreenChange = (screen: string) => {
    // Enhanced feedback - simplified for compatibility
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
    
    setActiveScreen(screen);
    if (onScreenChange) {
      onScreenChange(screen);
    }
  };

  // Update all screen navigation to use handleScreenChange

  const TabletFrame = ({ children }: { children: React.ReactNode }) => (
    <div className={`relative ${className}`}>
      {/* Tablet Hardware */}
      <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-600">
        <div className="bg-black rounded-2xl overflow-hidden relative h-96 sm:h-[500px]">
          {/* Status Bar */}
          <div className="bg-slate-900 px-4 py-2 flex justify-between items-center text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              <span>NEXUS Hub</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-3 h-3" />
              <Battery className="w-3 h-3" />
              <span>92%</span>
              <span>14:25</span>
            </div>
          </div>
          
          {/* Screen Content */}
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black h-full overflow-hidden">
            {children}
          </div>
        </div>
        
        {/* Physical Controls */}
        <div className="flex justify-center mt-4 space-x-3">
          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
          <div className="w-8 h-3 bg-slate-600 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
        </div>
      </div>
      
      {/* Power LED */}
      <div className="absolute top-2 right-8 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-green-400/50 shadow-lg"></div>
    </div>
  );

  const DashboardScreen = () => (
    <div className="p-6 h-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-nexus-400">Home Control</h3>
          <div className="flex items-center space-x-2 text-green-400 text-sm">
            <Battery className="w-4 h-4" />
            <span>92% Backup</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <motion.button 
            className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 hover:bg-blue-500/30 transition-all duration-300 text-left group"
            onClick={() => handleScreenChange('lights')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Lightbulb className="w-6 h-6 mb-2 text-blue-400 group-hover:text-blue-300" />
            <div className="text-white font-medium">Lighting</div>
            <div className="text-xs text-slate-400">
              {Object.values(lightsState).filter(light => light.on).length} of {Object.keys(lightsState).length} on
            </div>
          </motion.button>
          
          <motion.button 
            className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 hover:bg-red-500/30 transition-all duration-300 text-left group"
            onClick={() => handleScreenChange('security')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Shield className="w-6 h-6 mb-2 text-red-400 group-hover:text-red-300" />
            <div className="text-white font-medium">Security</div>
            <div className="text-xs text-slate-400">Armed</div>
          </motion.button>
          
          <motion.button 
            className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 hover:bg-green-500/30 transition-all duration-300 text-left group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Thermometer className="w-6 h-6 mb-2 text-green-400 group-hover:text-green-300" />
            <div className="text-white font-medium">Climate</div>
            <div className="text-xs text-slate-400">22°C</div>
          </motion.button>
          
          <motion.button 
            className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-4 hover:bg-yellow-500/30 transition-all duration-300 text-left group"
            onClick={() => handleScreenChange('energy')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-6 h-6 mb-2 text-yellow-400 group-hover:text-yellow-300" />
            <div className="text-white font-medium">Energy</div>
            <div className="text-xs text-slate-400">2.1kW</div>
          </motion.button>
        </div>
        
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-orange-400 font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Load Shedding Status
            </span>
            <span className="text-green-400 text-sm font-medium">Stage 2 - Ready</span>
          </div>
          <div className="text-slate-300 text-sm">Next: Today 18:00 - 20:30</div>
          <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
            <div className="bg-orange-400 h-2 rounded-full transition-all duration-300" style={{ width: '75%' }}></div>
          </div>
          <div className="text-xs text-slate-400 mt-1">Battery ready: 11h 40m remaining</div>
        </div>
      </div>
    </div>
  );

  const LightsScreen = () => (
    <div className="p-6 h-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <motion.button 
              className="text-slate-400 hover:text-white transition-colors"
              onClick={() => handleScreenChange('dashboard')}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <h3 className="text-xl font-bold text-blue-400">Smart Lighting</h3>
          </div>
          <div className="flex space-x-2">
            <Sun className="w-4 h-4 text-yellow-400" />
            <Moon className="w-4 h-4 text-slate-500" />
          </div>
        </div>
        
        <div className="space-y-3">
          {Object.entries(lightsState).map(([room, state]) => (
            <motion.div 
              key={room} 
              className="bg-slate-800/50 rounded-xl p-4 flex justify-between items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <Lightbulb className={`w-5 h-5 ${state.on ? 'text-yellow-400' : 'text-slate-500'}`} />
                <div>
                  <div className="text-white font-medium">{room}</div>
                  <div className="text-xs text-slate-400">
                    {state.on ? `On • ${state.brightness}%` : 'Off'}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {state.on && (
                  <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${state.brightness}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
                <motion.button
                  className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                    state.on ? 'bg-blue-500' : 'bg-slate-600'
                  }`}
                  onClick={() => setLightsState(prev => ({
                    ...prev,
                    [room]: { 
                      ...prev[room], 
                      on: !prev[room].on,
                      brightness: !prev[room].on ? 80 : 0
                    }
                  }))}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-lg"
                    animate={{ left: state.on ? '26px' : '2px' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-nexus-500/10 border border-nexus-500/30 rounded-xl p-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-nexus-400 font-medium mb-2">Energy Saving Mode</div>
          <div className="text-slate-300 text-sm mb-2">
            Automatically dims lights during load shedding to preserve battery
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>Estimated savings: 40% battery</span>
            <span className="text-green-400">✓ Active</span>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const SecurityScreen = () => (
    <div className="p-6 h-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <motion.button 
              className="text-slate-400 hover:text-white transition-colors"
              onClick={() => handleScreenChange('dashboard')}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <h3 className="text-xl font-bold text-red-400">Security System</h3>
          </div>
          <Settings className="w-5 h-5 text-slate-400" />
        </div>
        
        <motion.div 
          className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
          <div className="text-lg text-green-400 font-semibold">System Armed</div>
          <div className="text-slate-300 text-sm">All sensors active and monitoring</div>
          <div className="text-xs text-slate-400 mt-2">Last armed: Today 22:30</div>
        </motion.div>
        
        <div className="space-y-2">
          <h4 className="text-white font-medium mb-3">Sensor Status</h4>
          {[
            { name: 'Front Door', status: 'Secure', icon: Home },
            { name: 'Back Door', status: 'Secure', icon: Home },
            { name: 'Windows (4)', status: 'Secure', icon: Home },
            { name: 'Motion Sensors', status: 'Active', icon: Camera }
          ].map((sensor, index) => (
            <motion.div 
              key={sensor.name}
              className="flex justify-between items-center py-2 px-3 bg-slate-800/30 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                <sensor.icon className="w-4 h-4 text-slate-400" />
                <span className="text-white text-sm">{sensor.name}</span>
              </div>
              <span className="text-green-400 text-sm flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                {sensor.status}
              </span>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-nexus-500/10 border border-nexus-500/30 rounded-xl p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-nexus-400 font-medium">Camera System</div>
              <div className="text-slate-300 text-sm">4 cameras online • Recording</div>
            </div>
            <Camera className="w-5 h-5 text-nexus-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );

  const EnergyScreen = () => (
    <div className="p-6 h-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <motion.button 
              className="text-slate-400 hover:text-white transition-colors"
              onClick={() => handleScreenChange('dashboard')}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <h3 className="text-xl font-bold text-yellow-400">Energy Monitor</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            className="bg-slate-800/50 rounded-xl p-4 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-slate-400 text-sm mb-1">Current Usage</div>
            <div className="text-2xl font-bold text-yellow-400">2.1kW</div>
            <div className="text-xs text-slate-500">Normal</div>
          </motion.div>
          <motion.div 
            className="bg-slate-800/50 rounded-xl p-4 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-slate-400 text-sm mb-1">Today</div>
            <div className="text-2xl font-bold text-green-400">18.5kWh</div>
            <div className="text-xs text-slate-500">-12% vs yesterday</div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-orange-400 font-medium">Load Shedding Prep</div>
            <Battery className="w-5 h-5 text-orange-400" />
          </div>
          <div className="text-slate-300 text-sm mb-2">Battery: 92% • Est. 11h 40m</div>
          <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
            <motion.div 
              className="bg-green-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '92%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="text-xs text-slate-400">Next scheduled: 18:00 - 20:30</div>
        </motion.div>
        
        <div className="space-y-2">
          <h4 className="text-white font-medium">Top Energy Consumers</h4>
          {[
            { name: 'Air Conditioning', usage: '850W', percentage: 40 },
            { name: 'Water Heater', usage: '620W', percentage: 30 },
            { name: 'Lighting', usage: '340W', percentage: 16 },
            { name: 'Entertainment', usage: '290W', percentage: 14 }
          ].map((item, index) => (
            <motion.div 
              key={item.name}
              className="flex justify-between items-center py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: `hsl(${60 - index * 20}, 70%, 50%)` }}
                ></div>
                <span className="text-white text-sm">{item.name}</span>
              </div>
              <div className="text-right">
                <span className="text-yellow-400 text-sm font-medium">{item.usage}</span>
                <div className="text-xs text-slate-400">{item.percentage}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <TabletFrame>
      <AnimatePresence mode="wait">
        {activeScreen === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DashboardScreen />
          </motion.div>
        )}
        {activeScreen === 'lights' && (
          <motion.div
            key="lights"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LightsScreen />
          </motion.div>
        )}
        {activeScreen === 'security' && (
          <motion.div
            key="security"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SecurityScreen />
          </motion.div>
        )}
        {activeScreen === 'energy' && (
          <motion.div
            key="energy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <EnergyScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </TabletFrame>
  );
};

export default InteractiveTablet;