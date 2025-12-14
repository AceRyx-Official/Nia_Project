'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoaderAnimation from '@/components/LoaderAnimation';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Machinery from '@/components/Machinery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if the loader has already been shown in this session
    const loaderShown = sessionStorage.getItem('loaderShown');

    if (loaderShown === 'true') {
      // Skip loader if already shown
      setShowLoader(false);
      setHasLoaded(true);
    }
  }, []);

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
        <div className="fixed inset-0 z-50">
          <LoaderAnimation onComplete={handleLoaderComplete} />
        </div>
      )}

      {/* Main Website Content - Hidden during loader */}
      <main className={`min-h-screen transition-opacity duration-500 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="navbar">
          <Navbar />
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
          <Contact />
        </div>
        <div className="section">
          <Footer />
    
        </main>
      </PageTransitionWrapper>
    </>
  );
}
