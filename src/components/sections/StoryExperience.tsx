import StoryPanel from '../ui/StoryPanel';
import SADataDashboard from '../ui/SADataDashboard';
import { Users, Home, Zap, Shield } from 'lucide-react';

const StoryExperience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">{/* Chapter 1: The Chaos - Current Problems */}
        {/* Chapter 1: The Chaos - Current Problems */}
        <StoryPanel
          id="ch1-p1"
          chapterNumber={1}
          panelNumber={1}
          type="hybrid"
          title="Meet the Mthembu Family"
          backgroundImage="/sa-home-exterior.jpg"
          content={
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-nexus-400" />
                <span className="text-white font-semibold">Cape Town • 4-bedroom home</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                Like most South African families, the Mthembus are frustrated with their smart home setup. 
                23 different apps, constant load shedding disruptions, and skyrocketing electricity bills 
                are making their "smart" home feel anything but intelligent.
              </p>
              <div className="bg-red-500/10 border-l-4 border-red-500 p-3 rounded">
                <p className="text-red-300 text-sm font-medium">
                  "Every time Eskom cuts the power, we have to reset everything. 
                  It's exhausting!" - Sarah Mthembu
                </p>
              </div>
            </div>
          }
          dataVisualization={<SADataDashboard type="problems" />}
        />

        <StoryPanel
          id="ch1-p2"
          chapterNumber={1}
          panelNumber={2}
          type="data"
          title="The Hidden Costs of Chaos"
          content={
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-red-400" />
                <span className="text-white font-semibold">Energy Waste Analysis</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                Without proper automation, South African households waste an average of R1,200 
                per month on unnecessary energy consumption - especially during peak Eskom tariff periods.
              </p>
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-3 rounded">
                <p className="text-yellow-300 text-sm font-medium">
                  Stage 4 load shedding costs families an additional R800/month in backup power and spoiled food.
                </p>
              </div>
            </div>
          }
          dataVisualization={<SADataDashboard type="problems" />}
        />

        {/* Chapter 2: The Discovery - NEXUS Introduction */}
        <StoryPanel
          id="ch2-p1"
          chapterNumber={2}
          panelNumber={1}
          type="hybrid"
          title="Discovering NEXUS"
          backgroundImage="/nexus-hero-reveal.jpg"
          content={
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="w-6 h-6 text-nexus-400" />
                <span className="text-white font-semibold">The All-in-One Solution</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                After months of frustration, the Mthembus discovered NEXUS Hub - a single device 
                that promises to solve all their smart home challenges while being designed 
                specifically for South African conditions.
              </p>
              <div className="bg-nexus-500/10 border-l-4 border-nexus-500 p-3 rounded">
                <p className="text-nexus-300 text-sm font-medium">
                  "Finally, a smart home system that understands load shedding!" - David Mthembu
                </p>
              </div>
            </div>
          }
          dataVisualization={<SADataDashboard type="solutions" />}
        />

        <StoryPanel
          id="ch2-p2"
          chapterNumber={2}
          panelNumber={2}
          type="data"
          title="Built for South Africa"
          content={
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Local Engineering Excellence</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                Unlike international products, NEXUS Hub is engineered for South African power grids, 
                supports local ISPs, integrates with Eskom smart meters, and includes backup power management 
                for extended load shedding periods.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>✓ Works with Eskom prepaid meters</li>
                <li>✓ Supports MTN, Vodacom, Telkom, Rain networks</li>
                <li>✓ Automatic UPS and generator integration</li>
                <li>✓ Local support in all 11 official languages</li>
              </ul>
            </div>
          }
          dataVisualization={<SADataDashboard type="solutions" />}
        />

        {/* Chapter 3: The Transformation */}
        <StoryPanel
          id="ch3-p1"
          chapterNumber={3}
          panelNumber={1}
          type="hybrid"
          title="Life After NEXUS"
          backgroundImage="/sa-smart-home-interior.jpg"
          content={
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">6 Months Later</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                The Mthembu family's life has been transformed. Their home now automatically prepares 
                for load shedding, optimizes energy usage during peak hours, and manages security 
                seamlessly - all through one simple app.
              </p>
              <div className="bg-green-500/10 border-l-4 border-green-500 p-3 rounded">
                <p className="text-green-300 text-sm font-medium">
                  "We're saving R1,100 per month and haven't lost power during load shedding once!" - Sarah
                </p>
              </div>
            </div>
          }
          dataVisualization={<SADataDashboard type="savings" />}
        />

        {/* Chapter 4: Your Future */}
        <StoryPanel
          id="ch4-p1"
          chapterNumber={4}
          panelNumber={1}
          type="data"
          title="Your NEXUS Journey"
          content={
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-nexus-400" />
                <span className="text-white font-semibold">Personalized for You</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                Based on your location, home type, and energy concerns, here's how NEXUS 
                can transform your specific situation. Every South African home is unique, 
                and NEXUS adapts to your exact needs.
              </p>
              <div className="bg-nexus-500/10 border-l-4 border-nexus-500 p-3 rounded">
                <p className="text-nexus-300 text-sm font-medium">
                  Ready to join thousands of satisfied South African families?
                </p>
              </div>
            </div>
          }
          dataVisualization={<SADataDashboard type="personal" />}
        />
      </div>
  );
};

export default StoryExperience;