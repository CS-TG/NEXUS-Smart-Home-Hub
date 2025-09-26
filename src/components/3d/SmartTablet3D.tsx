import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Html } from '@react-three/drei';
import { Mesh } from 'three';
import { motion } from 'framer-motion';
import { Zap, Thermometer, Shield, Battery, Lightbulb } from 'lucide-react';

interface SmartTablet3DProps {
  interactive?: boolean;
}

const SmartTablet3D = ({ interactive = false }: SmartTablet3DProps) => {
  const tabletRef = useRef<Mesh>(null);
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    if (tabletRef.current && !interactive) {
      // Gentle floating animation when not interactive
      tabletRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      tabletRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const TabletScreen = () => (
    <Html
      transform
      distanceFactor={3}
      position={[0, 0, 0.051]}
      style={{
        width: '320px',
        height: '240px',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <motion.div 
        className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {activeScreen === 'dashboard' && <DashboardScreen />}
        {activeScreen === 'lights' && <LightsScreen />}
        {activeScreen === 'security' && <SecurityScreen />}
        {activeScreen === 'energy' && <EnergyScreen />}
      </motion.div>
    </Html>
  );

  const DashboardScreen = () => (
    <div className="text-white space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-nexus-400">NEXUS Hub</h3>
        <div className="flex items-center space-x-1 text-green-400 text-xs">
          <Battery className="w-3 h-3" />
          <span>92% Backup</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <button 
          className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 hover:bg-blue-500/30 transition-colors"
          onClick={() => setActiveScreen('lights')}
        >
          <Lightbulb className="w-4 h-4 mb-1 text-blue-400" />
          <div className="text-xs">12 Lights</div>
          <div className="text-xs text-slate-400">8 On</div>
        </button>
        
        <button 
          className="bg-red-500/20 border border-red-500/30 rounded-lg p-2 hover:bg-red-500/30 transition-colors"
          onClick={() => setActiveScreen('security')}
        >
          <Shield className="w-4 h-4 mb-1 text-red-400" />
          <div className="text-xs">Security</div>
          <div className="text-xs text-slate-400">Armed</div>
        </button>
        
        <button className="bg-green-500/20 border border-green-500/30 rounded-lg p-2 hover:bg-green-500/30 transition-colors">
          <Thermometer className="w-4 h-4 mb-1 text-green-400" />
          <div className="text-xs">Climate</div>
          <div className="text-xs text-slate-400">22°C</div>
        </button>
        
        <button 
          className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-2 hover:bg-yellow-500/30 transition-colors"
          onClick={() => setActiveScreen('energy')}
        >
          <Zap className="w-4 h-4 mb-1 text-yellow-400" />
          <div className="text-xs">Energy</div>
          <div className="text-xs text-slate-400">2.1kW</div>
        </button>
      </div>
      
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-orange-400">Load Shedding Status</span>
          <span className="text-xs text-green-400">Stage 2 - Ready</span>
        </div>
        <div className="text-xs text-slate-400 mt-1">Next: 18:00 - 20:30</div>
      </div>
    </div>
  );

  const LightsScreen = () => (
    <div className="text-white space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-blue-400">Smart Lighting</h3>
        <button 
          className="text-xs text-slate-400 hover:text-white"
          onClick={() => setActiveScreen('dashboard')}
        >
          Back
        </button>
      </div>
      
      <div className="space-y-2">
        {['Living Room', 'Kitchen', 'Bedroom', 'Garden'].map((room, i) => (
          <div key={room} className="bg-slate-800/50 rounded-lg p-2 flex justify-between items-center">
            <div>
              <div className="text-sm">{room}</div>
              <div className="text-xs text-slate-400">{i % 2 === 0 ? 'On' : 'Off'} • {Math.floor(Math.random() * 100)}%</div>
            </div>
            <div className={`w-8 h-4 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-slate-600'} relative`}>
              <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${i % 2 === 0 ? 'right-0.5' : 'left-0.5'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SecurityScreen = () => (
    <div className="text-white space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-red-400">Security</h3>
        <button 
          className="text-xs text-slate-400 hover:text-white"
          onClick={() => setActiveScreen('dashboard')}
        >
          Back
        </button>
      </div>
      
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
        <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
        <div className="text-sm text-green-400 font-semibold">System Armed</div>
        <div className="text-xs text-slate-400">All sensors active</div>
      </div>
      
      <div className="space-y-2">
        {['Front Door', 'Back Door', 'Windows', 'Motion'].map((sensor) => (
          <div key={sensor} className="flex justify-between items-center text-xs">
            <span>{sensor}</span>
            <span className="text-green-400">✓ Secure</span>
          </div>
        ))}
      </div>
      
      <div className="bg-nexus-500/10 border border-nexus-500/30 rounded-lg p-2">
        <div className="text-xs text-nexus-400">Camera System</div>
        <div className="text-xs text-slate-400">4 cameras online • Recording</div>
      </div>
    </div>
  );

  const EnergyScreen = () => (
    <div className="text-white space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-yellow-400">Energy Monitor</h3>
        <button 
          className="text-xs text-slate-400 hover:text-white"
          onClick={() => setActiveScreen('dashboard')}
        >
          Back
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-800/50 rounded-lg p-2 text-center">
          <div className="text-xs text-slate-400">Current Usage</div>
          <div className="text-lg font-bold text-yellow-400">2.1kW</div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-2 text-center">
          <div className="text-xs text-slate-400">Today</div>
          <div className="text-lg font-bold text-green-400">18.5kWh</div>
        </div>
      </div>
      
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2">
        <div className="text-xs text-orange-400 font-semibold">Load Shedding Prep</div>
        <div className="text-xs text-slate-400">Battery: 92% • Est. 11h 40m</div>
        <div className="w-full bg-slate-700 rounded-full h-1 mt-1">
          <div className="bg-green-400 h-1 rounded-full" style={{ width: '92%' }} />
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="text-xs text-slate-400">Top Consumers</div>
        {[
          { name: 'AC Unit', usage: '850W' },
          { name: 'Geyser', usage: '620W' },
          { name: 'Lights', usage: '340W' }
        ].map((item) => (
          <div key={item.name} className="flex justify-between items-center text-xs">
            <span>{item.name}</span>
            <span className="text-yellow-400">{item.usage}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <group 
      ref={tabletRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      {/* Tablet Body */}
      <RoundedBox
        args={[2, 1.5, 0.1]}
        radius={0.1}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.2}
          emissive="#0f172a"
          emissiveIntensity={0.1}
        />
      </RoundedBox>

      {/* Screen Bezel */}
      <RoundedBox
        args={[1.8, 1.3, 0.05]}
        radius={0.05}
        smoothness={4}
        position={[0, 0, 0.052]}
      >
        <meshStandardMaterial
          color="#000000"
          metalness={0.9}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Screen Content */}
      <TabletScreen />

      {/* Power Button */}
      <mesh position={[1.1, 0.6, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.12]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Volume Buttons */}
      <mesh position={[1.1, 0.3, 0]}>
        <boxGeometry args={[0.02, 0.1, 0.12]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Status LEDs */}
      <mesh position={[-0.8, 0.6, 0.052]}>
        <sphereGeometry args={[0.01]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh position={[-0.6, 0.6, 0.052]}>
        <sphereGeometry args={[0.01]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Floating UI Elements for non-interactive mode */}
      {!interactive && (
        <>
          {/* Connection indicators */}
          <Text
            position={[-1.5, 1, 0.5]}
            fontSize={0.1}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
          >
            WiFi Connected
          </Text>
          
          <Text
            position={[1.5, 1, 0.5]}
            fontSize={0.1}
            color="#f59e0b"
            anchorX="center"
            anchorY="middle"
          >
            Battery: 92%
          </Text>
          
          <Text
            position={[0, -1, 0.5]}
            fontSize={0.08}
            color="#6366f1"
            anchorX="center"
            anchorY="middle"
          >
            25 Devices Connected
          </Text>
        </>
      )}
    </group>
  );
};

export default SmartTablet3D;