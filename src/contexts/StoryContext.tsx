import { createContext, useContext, useState, ReactNode } from 'react';

// Story state management
interface StoryState {
  currentChapter: number;
  currentPanel: number;
  userProfile: UserProfile;
  completedPanels: Set<string>;
}

interface UserProfile {
  name?: string;
  homeType: 'apartment' | 'house' | 'townhouse';
  location: 'cape-town' | 'johannesburg' | 'durban' | 'pretoria' | 'other';
  householdSize: number;
  monthlyIncome: 'under-15k' | '15k-30k' | '30k-50k' | 'over-50k';
  primaryConcerns: ('energy' | 'security' | 'convenience' | 'cost')[];
  hasLoadShedding: boolean;
}

const StoryContext = createContext<{
  state: StoryState;
  updateState: (updates: Partial<StoryState>) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
} | null>(null);

export const StoryProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<StoryState>({
    currentChapter: 1,
    currentPanel: 1,
    userProfile: {
      homeType: 'house',
      location: 'cape-town',
      householdSize: 4,
      monthlyIncome: '15k-30k',
      primaryConcerns: ['energy', 'security'],
      hasLoadShedding: true
    },
    completedPanels: new Set()
  });

  const updateState = (updates: Partial<StoryState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setState(prev => ({
      ...prev,
      userProfile: { ...prev.userProfile, ...updates }
    }));
  };

  return (
    <StoryContext.Provider value={{ state, updateState, updateProfile }}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) throw new Error('useStory must be used within StoryProvider');
  return context;
};