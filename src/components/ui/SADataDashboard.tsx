import { motion } from 'framer-motion';
import { TrendingUp, Zap, Shield, DollarSign } from 'lucide-react';
import { useStory } from '../../contexts/StoryContext';

// South African specific data utilities
const formatZAR = (amount: number): string => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const getLocalizedData = (location: string, metric: string) => {
  const locationData = {
    'cape-town': {
      avgElectricity: 2800,
      crimeRate: 42.3,
      fiberCoverage: 78,
      loadSheddingHours: 6.2
    },
    'johannesburg': {
      avgElectricity: 3200,
      crimeRate: 76.1,
      fiberCoverage: 82,
      loadSheddingHours: 8.4
    },
    'durban': {
      avgElectricity: 2600,
      crimeRate: 56.7,
      fiberCoverage: 65,
      loadSheddingHours: 7.1
    },
    'pretoria': {
      avgElectricity: 3100,
      crimeRate: 68.2,
      fiberCoverage: 74,
      loadSheddingHours: 7.8
    }
  };

  return locationData[location as keyof typeof locationData]?.[metric as keyof typeof locationData['cape-town']] || 0;
};

interface DataCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ComponentType<any>;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'green' | 'red' | 'blue' | 'yellow';
}

const DataCard = ({ title, value, subtitle, icon: Icon, trend = 'neutral', color = 'blue' }: DataCardProps) => {
  const colorClasses = {
    green: 'from-green-500/20 to-green-600/20 border-green-500/40 text-green-400',
    red: 'from-red-500/20 to-red-600/20 border-red-500/40 text-red-400',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/40 text-blue-400',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/40 text-yellow-400'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm border rounded-xl p-4`}
    >
      <div className="flex items-start justify-between mb-3">
        <Icon className="w-6 h-6" />
        {trend !== 'neutral' && (
          <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            <TrendingUp className={`w-4 h-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-white mb-1">
        {typeof value === 'number' ? formatZAR(value) : value}
      </div>
      <div className="text-sm opacity-80">{title}</div>
      <div className="text-xs opacity-60 mt-1">{subtitle}</div>
    </motion.div>
  );
};

interface SADataDashboardProps {
  type: 'problems' | 'solutions' | 'savings' | 'personal';
}

const SADataDashboard = ({ type }: SADataDashboardProps) => {
  const { state } = useStory();
  const location = state.userProfile.location;

  const renderProblemsDashboard = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">Current Home Automation Problems in SA</h3>
      <div className="grid grid-cols-2 gap-4">
        <DataCard
          title="Monthly Electricity"
          value={getLocalizedData(location, 'avgElectricity')}
          subtitle="Average household cost"
          icon={Zap}
          color="red"
          trend="up"
        />
        <DataCard
          title="Load Shedding"
          value={`${getLocalizedData(location, 'loadSheddingHours')}h`}
          subtitle="Daily outages"
          icon={Zap}
          color="red"
          trend="up"
        />
        <DataCard
          title="Crime Rate"
          value={`${getLocalizedData(location, 'crimeRate')}/100k`}
          subtitle="Annual incidents"
          icon={Shield}
          color="red"
          trend="up"
        />
        <DataCard
          title="Device Apps"
          value="23"
          subtitle="Average per home"
          icon={DollarSign}
          color="yellow"
          trend="up"
        />
      </div>
      
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mt-6">
        <p className="text-white text-sm leading-relaxed">
          <strong>The Reality:</strong> South African families are paying an average of{' '}
          <span className="text-red-400 font-semibold">
            {formatZAR(getLocalizedData(location, 'avgElectricity') * 12)}
          </span>{' '}
          per year on electricity alone, while managing dozens of disconnected smart devices during frequent load shedding.
        </p>
      </div>
    </div>
  );

  const renderSolutionsDashboard = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">NEXUS Hub Technical Specifications</h3>
      <div className="grid grid-cols-2 gap-4">
        <DataCard
          title="Devices Supported"
          value="10,000+"
          subtitle="Compatible brands"
          icon={Zap}
          color="green"
        />
        <DataCard
          title="Response Time"
          value="<1ms"
          subtitle="Command processing"
          icon={TrendingUp}
          color="green"
        />
        <DataCard
          title="Uptime Guarantee"
          value="99.9%"
          subtitle="Service availability"
          icon={Shield}
          color="green"
        />
        <DataCard
          title="SA Support"
          value="24/7"
          subtitle="Local assistance"
          icon={DollarSign}
          color="blue"
        />
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-6">
        <p className="text-white text-sm leading-relaxed">
          <strong>Built for South Africa:</strong> NEXUS Hub includes load shedding protection, 
          works with Eskom smart meters, supports MTN/Vodacom/Telkom networks, and includes 
          backup power management for Stage 6 scenarios.
        </p>
      </div>
    </div>
  );

  const renderSavingsDashboard = () => {
    const currentCost = getLocalizedData(location, 'avgElectricity');
    const nexusSavings = Math.round(currentCost * 0.4);
    const annualSavings = nexusSavings * 12;

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white mb-4">Your Potential Savings in {location.replace('-', ' ')}</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/40 rounded-xl p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {formatZAR(annualSavings)}
              </div>
              <div className="text-white font-semibold mb-1">Annual Energy Savings</div>
              <div className="text-sm text-green-300">40% reduction in electricity costs</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <DataCard
              title="Monthly Savings"
              value={nexusSavings}
              subtitle="After NEXUS installation"
              icon={TrendingUp}
              color="green"
              trend="down"
            />
            <DataCard
              title="ROI Period"
              value="8 months"
              subtitle="Break-even point"
              icon={DollarSign}
              color="blue"
            />
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <p className="text-white text-sm leading-relaxed">
            <strong>Local Context:</strong> Based on current Eskom tariffs in {location.replace('-', ' ')}, 
            NEXUS Hub pays for itself in less than 8 months through energy optimization and 
            load shedding protection alone.
          </p>
        </div>
      </div>
    );
  };

  const renderPersonalDashboard = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-4">Your Personalized NEXUS Configuration</h3>
      
      <div className="bg-nexus-500/10 border border-nexus-500/20 rounded-xl p-4 mb-4">
        <div className="text-sm text-nexus-300 mb-2">Profile Summary</div>
        <div className="text-white font-medium">
          {state.userProfile.householdSize}-person household in {location.replace('-', ' ')}
        </div>
        <div className="text-sm text-white/70">
          {state.userProfile.homeType} • {state.userProfile.monthlyIncome} income bracket
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <DataCard
          title="Recommended Plan"
          value={state.userProfile.monthlyIncome === 'over-50k' ? 'Pro' : 'Starter'}
          subtitle="Best fit for your needs"
          icon={TrendingUp}
          color="blue"
        />
        <DataCard
          title="Setup Cost"
          value={state.userProfile.monthlyIncome === 'over-50k' ? 4599 : 2299}
          subtitle="One-time investment"
          icon={DollarSign}
          color="green"
        />
        <DataCard
          title="Monthly Savings"
          value={Math.round(getLocalizedData(location, 'avgElectricity') * 0.35)}
          subtitle="Estimated reduction"
          icon={Zap}
          color="green"
          trend="down"
        />
        <DataCard
          title="Payback Period"
          value="7 months"
          subtitle="Return on investment"
          icon={Shield}
          color="blue"
        />
      </div>
    </div>
  );

  const dashboards = {
    problems: renderProblemsDashboard,
    solutions: renderSolutionsDashboard,
    savings: renderSavingsDashboard,
    personal: renderPersonalDashboard
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {dashboards[type]()}
    </motion.div>
  );
};

export default SADataDashboard;