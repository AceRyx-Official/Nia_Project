'use client';

import { CurtainTransitionProvider } from '@/contexts/CurtainTransitionContext';
import { ReactNode } from 'react';

interface PageTransitionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransitionWrapper({ 
  children, 
  className = "" 
}: PageTransitionWrapperProps) {
  return (
    <CurtainTransitionProvider>
      <div className={`page-container ${className}`} style={{ perspective: '1000px' }}>
        {children}
      </div>
    </CurtainTransitionProvider>
  );
}