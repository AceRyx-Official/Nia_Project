'use client';

import { useEffect, useRef } from 'react';
import { 
  initializePageAnimations,
  navigateWithCurtain
} from '@/lib/curtain-transitions';

export const usePageTransitions = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && typeof window !== 'undefined') {
      initializePageAnimations();
      initialized.current = true;
    }
  }, []);

  const navigateToSection = async (sectionId: string) => {
    await navigateWithCurtain(sectionId);
  };

  return {
    navigateToSection
  };
};