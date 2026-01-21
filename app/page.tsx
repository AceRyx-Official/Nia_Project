'use client';

import { useState, useEffect } from 'react';

import Hero from '@/components/Hero';
import LoaderAnimation from '@/components/LoaderAnimation';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Machinery from '@/components/Machinery';
import Footer from '@/components/Footer';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

export default function Home() {
  // Initialize state to TRUE (server default) to match server rendering and avoid hydration errors
  // We handle the "already shown" ease via the inline script in layout.tsx + useEffect
  const [showLoader, setShowLoader] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Control body overflow - prevent scrolling during loader
  useEffect(() => {
    // Check session storage on mount to sync state
    if (sessionStorage.getItem('loaderShown') === 'true') {
      setShowLoader(false);
      setHasLoaded(true);

      // Cleanup the override style tag added by layout.tsx
      const overrideStyle = document.getElementById('loader-override-style');
      if (overrideStyle) {
        overrideStyle.remove();
      }
    }

    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLoader]);

  const handleLoaderComplete = () => {
    // Mark loader as shown for this session
    sessionStorage.setItem('loaderShown', 'true');
    setShowLoader(false);
    setHasLoaded(true);
  };

  return (
    <PageTransitionWrapper>
      {/* Loader Animation - Fixed overlay, shows only once */}
      {showLoader && (
        <div id="loader-overlay" className="fixed inset-0 z-50">
          <LoaderAnimation onComplete={handleLoaderComplete} />
        </div>
      )}

      {/* Main Website Content - Hidden during loader */}
      <main id="main-content" className={`min-h-screen transition-opacity duration-500 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>

        <div className="section" id="hero">
          <Hero />
        </div>
        <div className="section" id="about">
          <About />
        </div>
        <div className="section" id="services">
          <Services />
        </div>
        <div className="section" id="projects">
          <Projects />
        </div>
        <div className="section" id="machinery">
          <Machinery />
        </div>
        <div className="section" id="contact">

        </div>
        
      </main>
    </PageTransitionWrapper>

  );
}
