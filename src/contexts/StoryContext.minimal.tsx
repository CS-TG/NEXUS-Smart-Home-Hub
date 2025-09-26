import { createContext, useContext, ReactNode } from 'react';

// Minimal Story Context for testing
interface StoryContextType {
  currentPanel: string;
  navigateToPanel: (direction: 'next' | 'previous' | string) => void;
  userProfile: {
    location: string;
    currentLoadShedding?: number;
  };
}

const StoryContext = createContext<StoryContextType>({
  currentPanel: 'ch1-p1',
  navigateToPanel: () => {},
  userProfile: {
    location: 'Cape Town',
    currentLoadShedding: undefined
  }
});

export const StoryProvider = ({ children }: { children: ReactNode }) => {
  const value: StoryContextType = {
    currentPanel: 'ch1-p1',
    navigateToPanel: () => {
      console.log('Navigate to panel');
    },
    userProfile: {
      location: 'Cape Town',
      currentLoadShedding: undefined
    }
  };

  return (
    <StoryContext.Provider value={value}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error('useStory must be used within a StoryProvider');
  }
  return context;
};