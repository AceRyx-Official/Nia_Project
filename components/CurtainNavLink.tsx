'use client';

import { useCurtainNavigation } from '@/contexts/CurtainTransitionContext';
import { ReactNode } from 'react';

interface CurtainNavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CurtainNavLink({ 
  href, 
  children, 
  className = "",
  onClick 
}: CurtainNavLinkProps) {
  const { navigateToSection } = useCurtainNavigation();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) onClick();
    
    // Extract section id from href (remove #)
    const sectionId = href.replace('#', '');
    
    // Navigate with curtain transition
    await navigateToSection(sectionId);
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </a>
  );
}