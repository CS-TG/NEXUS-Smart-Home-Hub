import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, TrendingUp, Award, Users, Zap, CheckCircle } from 'lucide-react';

const DataDrivenShowcase = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    {
      id: 'energy-savings',
      title: 'Energy Efficiency Impact',
      value: 'R2,890',
      change: '+23%',
      description: 'Average monthly savings per household',
      details: 'NEXUS reduces energy consumption through intelligent load management, predictive cooling/heating, and optimal device scheduling during peak tariff periods.',
      visualization: 'savings-chart'
    },
    {
      id: 'reliability',
      title: 'System Reliability',
      value: '99.8%',
      change: '+45%',
      description: 'Uptime during load shedding events',
      details: 'Our battery backup and mesh networking ensure continuous operation even during Stage 6 load shedding, compared to 54.3% for traditional smart homes.',
      visualization: 'reliability-graph'
    },
    {
      id: 'response-time',
      title: 'Response Performance',
      value: '2.3ms',
      change: '-67%',
      description: 'Average command execution time',
      details: 'Local edge computing eliminates cloud delays. Commands execute locally on our neural processing unit, delivering instant responses.',
      visualization: 'performance-bars'
    },
    {
      id: 'user-satisfaction',
      title: 'Customer Satisfaction',
      value: '4.9/5',
      change: '+34%',
      description: 'Net Promoter Score from SA users',
      details: 'Based on 1,247 South African households using NEXUS for 6+ months. 94% report they would never go back to traditional smart home systems.',
      visualization: 'satisfaction-stars'
    }
  ];

  const successStories = [
    {
      name: 'Cape Town Medical Practice',
      location: 'Constantia, Cape Town',
      challenge: 'Power outages disrupting patient data systems',
      solution: 'NEXUS backup power + cloud sync',
      result: '100% uptime achieved, R15,000 monthly savings',
      impact: 'Critical',
      testimonial: 'NEXUS saved our practice. Zero downtime in 8 months.'
    },
    {
      name: 'Johannesburg Family Home',
      location: 'Sandton, Johannesburg',
      challenge: '23 different apps, constant failures',
      solution: 'Single tablet interface + local processing',
      result: 'From 23 apps to 1 tablet, 99.8% reliability',
      impact: 'Life-changing',
      testimonial: 'Our teenagers actually help manage the house now!'
    },
    {
      name: 'Durban Security Complex',
      location: 'Umhlanga, KZN',
      challenge: 'Security system failures during outages',
      solution: 'NEXUS mesh network + battery backup',
      result: 'Zero security breaches, 12-hour backup power',
      impact: 'Essential',
      testimonial: 'Residents sleep peacefully knowing NEXUS has their back.'
    }
  ];

  const competitionData = [
    { name: 'Traditional Setup', reliability: 23, cost: 4200, satisfaction: 2.1 },
    { name: 'NEXUS Hub', reliability: 99.8, cost: 1310, satisfaction: 4.9 },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, metrics.length]);

  const renderVisualization = (type: string) => {
    switch (type) {
      case 'savings-chart':
        return (
          <div className="h-32 flex items-end space-x-2">
            {[65, 78, 85, 92, 89, 94].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-green-600 to-green-400 rounded-t" style={{ height: `${height}%` }}></div>
            ))}
          </div>
        );
      case 'reliability-graph':
        return (
          <div className="h-32 relative">
            <div className="absolute bottom-0 w-full h-6 bg-red-500/20 rounded"></div>
            <div className="absolute bottom-0 w-full bg-gradient-to-r from-red-500 to-green-500 rounded" style={{ height: '98%' }}></div>
            <div className="absolute top-2 right-2 text-green-400 font-bold">99.8%</div>
          </div>
        );
      case 'performance-bars':
        return (
          <div className="h-32 flex items-center space-x-4">
            <div className="flex-1">
              <div className="text-xs text-slate-400 mb-1">Traditional</div>
              <div className="h-4 bg-red-500/20 rounded">
                <div className="h-full w-4/5 bg-red-500 rounded"></div>
              </div>
              <div className="text-xs text-red-400 mt-1">850ms</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-400 mb-1">NEXUS</div>
              <div className="h-4 bg-nexus-500/20 rounded">
                <div className="h-full w-1/10 bg-nexus-500 rounded"></div>
              </div>
              <div className="text-xs text-nexus-400 mt-1">2.3ms</div>
            </div>
          </div>
        );
      case 'satisfaction-stars':
        return (
          <div className="h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center space-x-1 text-3xl mb-2">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className={i <= 4.9 ? 'text-yellow-400' : 'text-slate-600'}>★</span>
                ))}
              </div>
              <div className="text-4xl font-bold text-yellow-400">4.9/5</div>
              <div className="text-sm text-slate-400">1,247 reviews</div>
            </div>
          </div>
        );
      default:
        return <div className="h-32 bg-slate-800/50 rounded flex items-center justify-center text-slate-400">Visualization</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/60 z-10"></div>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Proven Results
            <span className="block bg-gradient-to-r from-green-400 to-nexus-500 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Data-driven insights from 1,247+ South African homes using NEXUS
          </p>

          {/* View Controls */}
          <div className="flex justify-center items-center space-x-4">
            <div className="flex bg-slate-800/50 rounded-xl p-1">
              {['overview', 'stories', 'comparison'].map((view) => (
                <button
                  key={view}
                  onClick={() => setCurrentView(view)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentView === view
                      ? 'bg-nexus-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setCurrentMetric(0)}
              className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <AnimatePresence mode="wait">
          {currentView === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              {/* Live Metrics Display */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {metrics.map((metric, index) => (
                    currentMetric === index && (
                      <motion.div
                        key={metric.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{metric.title}</h3>
                            <div className="flex items-center space-x-4">
                              <span className="text-4xl font-bold bg-gradient-to-r from-nexus-400 to-green-400 bg-clip-text text-transparent">
                                {metric.value}
                              </span>
                              <span className="text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded-full">
                                {metric.change}
                              </span>
                            </div>
                            <p className="text-slate-400 mt-2">{metric.description}</p>
                          </div>
                          <TrendingUp className="w-8 h-8 text-green-400" />
                        </div>
                        
                        <div className="mb-6">
                          {renderVisualization(metric.visualization)}
                        </div>
                        
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {metric.details}
                        </p>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>

                {/* Metric Navigation */}
                <div className="flex justify-center space-x-2">
                  {metrics.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMetric(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentMetric === index ? 'bg-nexus-500' : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Recognition & Awards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-nexus-500/10 to-purple-500/10 border border-nexus-500/20 rounded-2xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="w-8 h-8 text-nexus-400" />
                    <h3 className="text-2xl font-bold text-white">Industry Recognition</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                      <div>
                        <div className="text-white font-semibold">Tech Innovation Award 2025</div>
                        <div className="text-nexus-400 text-sm">Cape Town Tech Summit</div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                      <div>
                        <div className="text-white font-semibold">Best Smart Home Solution</div>
                        <div className="text-nexus-400 text-sm">SA Energy Efficiency Awards</div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                      <div>
                        <div className="text-white font-semibold">Load Shedding Hero Product</div>
                        <div className="text-nexus-400 text-sm">MyBroadband Choice Awards</div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="w-8 h-8 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">Growing Community</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-400">1,247+</div>
                      <div className="text-slate-400 text-sm">Active Homes</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-400">156h</div>
                      <div className="text-slate-400 text-sm">Load Shedding Survived</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400">94%</div>
                      <div className="text-slate-400 text-sm">Would Recommend</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-400">R3.2M</div>
                      <div className="text-slate-400 text-sm">Total Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'stories' && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-nexus-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                      <p className="text-nexus-400 text-sm">{story.location}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      story.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      story.impact === 'Life-changing' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {story.impact}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Challenge:</div>
                      <div className="text-white text-sm">{story.challenge}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Solution:</div>
                      <div className="text-nexus-400 text-sm">{story.solution}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Result:</div>
                      <div className="text-green-400 text-sm font-medium">{story.result}</div>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-nexus-500 pl-4 italic text-slate-300 text-sm">
                    "{story.testimonial}"
                  </blockquote>
                </motion.div>
              ))}
            </motion.div>
          )}

          {currentView === 'comparison' && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-3xl font-bold text-white text-center mb-8">
                  NEXUS vs Traditional Smart Homes
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-white mb-4">Reliability</h4>
                    <div className="h-32 relative mb-4">
                      <div className="absolute bottom-0 w-full h-6 bg-slate-700 rounded"></div>
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-red-500 to-green-500 rounded" style={{ height: `${competitionData[1].reliability}%` }}></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold">
                        {competitionData[1].reliability}%
                      </div>
                    </div>
                    <div className="text-green-400 font-semibold">99.8% vs 23%</div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-white mb-4">Monthly Cost</h4>
                    <div className="h-32 flex items-end justify-center space-x-4 mb-4">
                      <div className="w-16 bg-red-500 rounded-t" style={{ height: '80%' }}>
                        <div className="text-white text-xs p-2">R4,200</div>
                      </div>
                      <div className="w-16 bg-green-500 rounded-t" style={{ height: '25%' }}>
                        <div className="text-white text-xs p-2">R1,310</div>
                      </div>
                    </div>
                    <div className="text-green-400 font-semibold">69% Less Cost</div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-white mb-4">User Rating</h4>
                    <div className="h-32 flex flex-col items-center justify-center space-y-4">
                      <div className="text-center">
                        <div className="flex justify-center text-red-400 text-lg mb-1">★★☆☆☆</div>
                        <div className="text-red-400 text-sm">Traditional: 2.1/5</div>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center text-yellow-400 text-lg mb-1">★★★★★</div>
                        <div className="text-green-400 text-sm">NEXUS: 4.9/5</div>
                      </div>
                    </div>
                    <div className="text-green-400 font-semibold">133% Higher Rating</div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-nexus-500/10 to-green-500/10 border border-nexus-500/20 rounded-xl">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-nexus-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">The NEXUS Advantage</h4>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                      While traditional smart homes fail during load shedding and cost a fortune to maintain, 
                      NEXUS delivers rock-solid reliability, massive cost savings, and an experience so good 
                      that 94% of users say they'd never go back.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DataDrivenShowcase;