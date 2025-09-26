import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStory } from '../../contexts/StoryContext';

interface StoryPanelProps {
  id: string;
  chapterNumber: number;
  panelNumber: number;
  type: 'comic' | 'data' | 'hybrid';
  title: string;
  content: React.ReactNode;
  dataVisualization?: React.ReactNode;
  backgroundImage?: string;
}

const StoryPanel = ({
  id,
  chapterNumber,
  panelNumber,
  type,
  title,
  content,
  dataVisualization,
  backgroundImage
}: StoryPanelProps) => {
  const { state, updateState } = useStory();
  const isActive = state.currentChapter === chapterNumber && state.currentPanel === panelNumber;

  const nextPanel = () => {
    updateState({
      currentPanel: panelNumber + 1,
      completedPanels: new Set([...state.completedPanels, id])
    });
  };

  const prevPanel = () => {
    updateState({
      currentPanel: Math.max(1, panelNumber - 1)
    });
  };

  if (!isActive) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="min-h-screen flex flex-col relative overflow-hidden"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* South African Context Header */}
        <div className="absolute top-4 left-4 right-4 z-20">
          <div className="flex justify-between items-center">
            <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-white font-medium">
                {state.userProfile.location.replace('-', ' ').toUpperCase()}
              </span>
            </div>
            <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-xs text-white font-medium">
                Chapter {chapterNumber} • Panel {panelNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center p-6 pt-16">
          {/* Comic Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-shadow-lg">
              {title}
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              {content}
            </div>
          </motion.div>

          {/* Data Visualization Overlay */}
          {(type === 'data' || type === 'hybrid') && dataVisualization && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-nexus-500/30"
            >
              {dataVisualization}
            </motion.div>
          )}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <motion.button
            onClick={prevPanel}
            disabled={panelNumber === 1}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Previous</span>
          </motion.button>

          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i + 1 <= panelNumber ? 'bg-nexus-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextPanel}
            className="flex items-center space-x-2 bg-nexus-500 hover:bg-nexus-600 rounded-full px-4 py-2 transition-colors"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-white font-medium">Next</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </motion.button>
        </div>

        {/* Load Shedding Indicator (if applicable) */}
        {state.userProfile.hasLoadShedding && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-20 right-4 bg-red-500/20 backdrop-blur-sm border border-red-500/40 rounded-lg p-2"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs text-red-300 font-medium">Stage 4</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryPanel;