import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SimpleStoryPanel from '../ui/SimpleStoryPanel';
import { Users, Home, Zap, Wifi, Battery, AlertTriangle, CheckCircle, Timer, TrendingUp, Shield } from 'lucide-react';

const SimpleStoryExperience = () => {
  const [loadSheddingStage, setLoadSheddingStage] = useState(2);
  const [timeWithoutPower, setTimeWithoutPower] = useState(0);
  const [devicesFailed, setDevicesFailed] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate escalating load shedding crisis
      if (Math.random() < 0.4) {
        setLoadSheddingStage(prev => Math.min(6, Math.max(2, prev + (Math.random() > 0.6 ? 1 : -1))));
      }
      
      // Simulate cumulative time without power
      if (loadSheddingStage > 3) {
        setTimeWithoutPower(prev => prev + 1);
        setDevicesFailed(prev => Math.min(15, prev + (Math.random() > 0.7 ? 1 : 0)));
      } else {
        setTimeWithoutPower(0);
        setDevicesFailed(Math.max(3, devicesFailed - 1));
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [loadSheddingStage, devicesFailed]);

  const getStageColor = (stage: number) => {
    if (stage <= 2) return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    if (stage <= 4) return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
    return 'text-red-400 bg-red-400/10 border-red-400/30';
  };

  const stageDescriptions = {
    2: "Lights flickering, WiFi unstable",
    3: "Smart devices disconnecting",
    4: "Security system failing",
    5: "Complete home automation failure",
    6: "Emergency backup systems only"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nexus-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Live Crisis Simulator */}
      <motion.div
        className="fixed top-20 right-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4 min-w-64"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-semibold text-sm">Live Load Shedding</h4>
          <div className={`px-2 py-1 rounded text-xs font-bold border ${getStageColor(loadSheddingStage).split(' ').slice(0, 3).join(' ')}`}>
            STAGE {loadSheddingStage}
          </div>
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Timer className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Outage Duration:</span>
            </div>
            <span className="text-red-400 font-mono">{Math.floor(timeWithoutPower/60)}h {timeWithoutPower%60}m</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">Failed Devices:</span>
            </div>
            <span className="text-red-400 font-mono">{devicesFailed}/20</span>
          </div>
          
          <div className="text-slate-400 text-xs mt-2 p-2 bg-slate-900/50 rounded">
            {stageDescriptions[loadSheddingStage as keyof typeof stageDescriptions]}
          </div>
        </div>
      </motion.div>

      <div className="relative z-10">
        {/* Chapter 1: The Crisis - Enhanced with live data */}
        <SimpleStoryPanel
          id="ch1-p1"
          chapterNumber={1}
          panelNumber={1}
          title="The Load Shedding Crisis"
          content={
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-nexus-400" />
                <span className="text-white font-semibold">The Mthembu Family • Constantia, Cape Town</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <p className="text-white/90 leading-relaxed">
                    Sarah and David Mthembu spent R45,000 on smart home devices. Phillips Hue lights, 
                    Nest cameras, Samsung appliances, Ring doorbells - all from different apps, 
                    all failing every time Eskom cuts power.
                  </p>
                  
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="text-red-300 font-medium mb-1">Current Crisis:</p>
                        <p className="text-red-200 text-sm">
                          "We're on Stage {loadSheddingStage} load shedding. {devicesFailed} devices offline. 
                          I can't even check if our security system is working!" - Sarah
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-red-400" />
                    Monthly Smart Home Failures
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Security System:</span>
                      <span className="text-red-400">23 outages</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Smart Lights:</span>
                      <span className="text-red-400">67 disconnects</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Climate Control:</span>
                      <span className="text-red-400">89 failures</span>
                    </div>
                    <div className="flex justify-between items-center font-semibold pt-2 border-t border-slate-700">
                      <span className="text-white">Total Cost Impact:</span>
                      <span className="text-red-400">R3,240/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Chapter 2: The Discovery - More engaging */}
        <SimpleStoryPanel
          id="ch2-p1"
          chapterNumber={2}
          panelNumber={1}
          title="Discovering NEXUS"
          content={
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="w-6 h-6 text-nexus-400" />
                <span className="text-white font-semibold">The Game-Changing Solution</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-white/90 leading-relaxed">
                    After 8 months of smart home chaos, David discovered NEXUS Hub at a Cape Town 
                    tech expo. A single elegant tablet controlling everything, with 12-hour backup 
                    power and local AI processing designed for South African conditions.
                  </p>
                  
                  <div className="bg-nexus-500/10 border-l-4 border-nexus-500 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-nexus-400 mt-0.5" />
                      <div>
                        <p className="text-nexus-300 font-medium mb-1">The Breakthrough Moment:</p>
                        <p className="text-nexus-200 text-sm">
                          "The demo tablet kept working during a Stage 4 outage. Everything stayed 
                          connected, responsive, intelligent. This changes everything!" - David
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-nexus-500/5 border border-nexus-500/20 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-nexus-400" />
                    NEXUS vs Traditional Setup
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Control Apps:</span>
                      <div className="text-right">
                        <div className="text-red-400 line-through text-sm">23 apps</div>
                        <div className="text-nexus-400 font-semibold">1 tablet</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Load Shedding Impact:</span>
                      <div className="text-right">
                        <div className="text-red-400 line-through text-sm">Total failure</div>
                        <div className="text-nexus-400 font-semibold">Seamless operation</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Monthly Reliability:</span>
                      <div className="text-right">
                        <div className="text-red-400 line-through text-sm">23%</div>
                        <div className="text-nexus-400 font-semibold">99.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Chapter 3: The Transformation */}
        <SimpleStoryPanel
          id="ch3-p1"
          chapterNumber={3}
          panelNumber={1}
          title="The NEXUS Transformation"
          content={
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">6 Months Later: Complete Home Intelligence</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <Battery className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h6 className="text-white font-semibold mb-1">Always Powered</h6>
                  <p className="text-green-300 text-sm">156 hours of load shedding survived without interruption</p>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
                  <Wifi className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h6 className="text-white font-semibold mb-1">Always Connected</h6>
                  <p className="text-blue-300 text-sm">Fiber + LTE failover ensures 99.9% uptime</p>
                </div>
                
                <div className="bg-nexus-500/10 border border-nexus-500/30 rounded-lg p-4 text-center">
                  <Home className="w-8 h-8 text-nexus-400 mx-auto mb-2" />
                  <h6 className="text-white font-semibold mb-1">Always Intelligent</h6>
                  <p className="text-nexus-300 text-sm">Local AI learns patterns, optimizes automatically</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-nexus-500/10 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h5 className="text-white font-semibold mb-2">The Family's New Reality:</h5>
                    <p className="text-white/90 mb-3">
                      "NEXUS didn't just solve our smart home problems - it transformed our entire 
                      relationship with technology. One beautiful tablet controls everything, 
                      works flawlessly during outages, and actually saves us money."
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Monthly Savings:</span>
                        <span className="text-green-400 font-semibold ml-2">R2,890</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Stress Reduction:</span>
                        <span className="text-green-400 font-semibold ml-2">Immeasurable</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm mt-3 italic">
                      - Sarah & David Mthembu, NEXUS users since March 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SimpleStoryExperience;