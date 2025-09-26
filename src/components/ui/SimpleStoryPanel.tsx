impinterface SimpleStoryPanelProps {
  chapterNumber?: number;
  panelNumber?: number;
  title: string;
  content: React.ReactNode;
  backgroundImage?: string;
  dataVisualization?: React.ReactNode;
}

const SimpleStoryPanel = ({
  chapterNumber,
  panelNumber,
  title,
  content,
  backgroundImage,
  dataVisualization
}: SimpleStoryPanelProps) => { 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SimpleStoryPanelProps {
  id: string;
  chapterNumber: number;
  panelNumber: number;
  title: string;
  content: React.ReactNode;
  backgroundImage?: string;
  dataVisualization?: React.ReactNode;
}

const SimpleStoryPanel = ({
  id,
  chapterNumber,
  panelNumber,
  title,
  content,
  backgroundImage,
  dataVisualization
}: SimpleStoryPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen flex flex-col relative overflow-hidden p-6"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="bg-nexus-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
          Chapter {chapterNumber} • Panel {panelNumber}
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4 text-shadow-lg">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          {content}
        </div>

        {/* Data Visualization */}
        {dataVisualization && (
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-nexus-500/30">
            {dataVisualization}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/70 hover:bg-slate-800 rounded-lg transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>
        
        <span className="text-slate-400 text-sm">
          Panel {panelNumber}
        </span>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-nexus-500 hover:bg-nexus-600 rounded-lg transition-colors">
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default SimpleStoryPanel;