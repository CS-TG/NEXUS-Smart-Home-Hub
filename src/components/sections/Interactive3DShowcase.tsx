import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InteractiveTablet from '../ui/InteractiveTablet';
import { Wifi, Battery, Cpu, Router } from 'lucide-react';

const Interactive3DShowcase = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [connectionStatus] = useState('connected');
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [powerStatus, setPowerStatus] = useState('grid');
  const [devicesConnected, setDevicesConnected] = useState(47);
  const [tabletScreen, setTabletScreen] = useState('dashboard');

  // Simulate dynamic features - Reduced frequency for performance
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate battery level changes
      setBatteryLevel(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(20, Math.min(100, prev + change));
      });

      // Simulate load shedding scenarios
      if (Math.random() < 0.1) { // 10% chance of power event
        setPowerStatus(prev => prev === 'grid' ? 'backup' : 'grid');
      }

      // Simulate device connections
      setDevicesConnected(prev => {
        const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(30, Math.min(50, prev + change));
      });
    }, 5000); // Increased from 2000ms to 5000ms for better performance

    return () => clearInterval(interval);
  }, []);

  const features = [
    { 
      id: 'tablet-interface', 
      name: 'Smart Tablet Control', 
      description: 'Wall-mounted 10" AI-powered touchscreen',
      icon: Wifi,
      simulation: {
        status: connectionStatus,
        value: '99.8% uptime',
        color: connectionStatus === 'connected' ? 'text-green-400' : 'text-yellow-400'
      }
    },
    { 
      id: 'connectivity', 
      name: 'Multi-Protocol Hub', 
      description: 'WiFi 6E, Zigbee 3.0, Z-Wave Plus, Matter',
      icon: Router,
      simulation: {
        status: 'active',
        value: `${devicesConnected} devices`,
        color: 'text-blue-400'
      }
    },
    { 
      id: 'backup-power', 
      name: 'Load Shedding Ready', 
      description: '12-hour lithium backup with solar charging',
      icon: Battery,
      simulation: {
        status: powerStatus,
        value: `${batteryLevel}% charged`,
        color: batteryLevel > 50 ? 'text-green-400' : 'text-yellow-400'
      }
    },
    { 
      id: 'local-processing', 
      name: 'Edge AI Computing', 
      description: 'Local processing with neural acceleration',
      icon: Cpu,
      simulation: {
        status: 'processing',
        value: '2.3ms response',
        color: 'text-nexus-400'
      }
    }
  ];

  return (
    <section id="interactive-showcase" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Control Your Home with
            <span className="block bg-gradient-to-r from-nexus-400 to-nexus-600 bg-clip-text text-transparent">
              Smart Tablet Interface
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience our intuitive tablet control system designed for South African homes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Interactive Tablet Container */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <InteractiveTablet 
                className="mx-auto max-w-lg" 
                externalScreen={tabletScreen}
                onScreenChange={(screen) => {
                  // Update selected feature based on screen
                  const reverseScreenMap = {
                    'dashboard': 'tablet-interface',
                    'energy': 'backup-power',
                    'security': 'local-processing',
                    'lights': 'tablet-interface'
                  };
                  const matchingFeature = reverseScreenMap[screen as keyof typeof reverseScreenMap];
                  if (matchingFeature) {
                    setSelectedFeature(matchingFeature);
                  }
                }}
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-nexus-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>

          {/* Feature List */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-display font-bold text-white mb-6"
            >
              Key Features
            </motion.h3>

            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  selectedFeature === feature.id
                    ? 'bg-nexus-500/20 border-nexus-500/50 shadow-lg shadow-nexus-500/20'
                    : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 hover:border-slate-600'
                }`}
                onClick={() => {
                  setSelectedFeature(selectedFeature === feature.id ? null : feature.id);
                  // Switch tablet screen based on feature
                  const screenMap = {
                    'tablet-interface': 'dashboard',
                    'connectivity': 'dashboard', 
                    'backup-power': 'energy',
                    'local-processing': 'security'
                  };
                  const newScreen = screenMap[feature.id as keyof typeof screenMap] || 'dashboard';
                  setTabletScreen(newScreen);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <feature.icon className="w-6 h-6 text-nexus-400 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold">{feature.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${feature.simulation.color.replace('text-', 'bg-')} animate-pulse`}></div>
                        <span className={`text-xs font-mono ${feature.simulation.color}`}>
                          {feature.simulation.value}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                    <div className="mt-2 text-xs text-slate-500">
                      Status: <span className={`font-medium ${feature.simulation.color}`}>
                        {feature.simulation.status.charAt(0).toUpperCase() + feature.simulation.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Real-time System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-nexus-500/20 to-nexus-600/20 border border-nexus-500/30 rounded-xl p-6 mt-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Live System Status</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">OPERATIONAL</span>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Power Source:</span>
                  <div className="flex items-center space-x-2">
                    <Battery className="w-4 h-4 text-green-400" />
                    <span className={`font-medium ${powerStatus === 'grid' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {powerStatus === 'grid' ? 'Eskom Grid' : 'Battery Backup'} ({batteryLevel}%)
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Connected Devices:</span>
                  <div className="flex items-center space-x-2">
                    <Router className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-medium">{devicesConnected} Active</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Network Status:</span>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium">Fiber + LTE Backup</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Processing Load:</span>
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-nexus-400" />
                    <span className="text-nexus-400 font-medium">12% Edge AI</span>
                  </div>
                </div>
              </div>
              
              {/* Mini Performance Graph */}
              <div className="mt-4 pt-4 border-t border-nexus-500/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400 text-xs">Response Time (24h)</span>
                  <span className="text-nexus-400 text-xs">2.3ms avg</span>
                </div>
                <div className="h-8 bg-slate-800/50 rounded flex items-end space-x-1 p-1">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-nexus-600 to-nexus-400 rounded-sm"
                      style={{ height: `${Math.random() * 60 + 20}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">
            Click on the tablet screen to explore different control panels
          </p>
          <div className="flex justify-center space-x-4 text-xs text-slate-500">
            <span>• Dashboard Overview</span>
            <span>• Smart Lighting</span>
            <span>• Security System</span>
            <span>• Energy Monitor</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interactive3DShowcase;