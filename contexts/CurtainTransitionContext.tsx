'use client';

import { createContext, useContext, ReactNode } from 'react';
import { usePageTransitions } from '@/lib/usePageTransitions';

interface CurtainTransitionContextType {
  navigateToSection: (sectionId: string) => Promise<void>;
}

const CurtainTransitionContext = createContext<CurtainTransitionContextType | null>(null);

interface CurtainTransitionProviderProps {
  children: ReactNode;
}

export function CurtainTransitionProvider({ children }: CurtainTransitionProviderProps) {
  const { navigateToSection } = usePageTransitions();

  return (
    <CurtainTransitionContext.Provider value={{ navigateToSection }}>
      {children}
    </CurtainTransitionContext.Provider>
  );
}

export const useCurtainNavigation = () => {
  const context = useContext(CurtainTransitionContext);
  if (!context) {
    throw new Error('useCurtainNavigation must be used within a CurtainTransitionProvider');
  }
  return context;
};