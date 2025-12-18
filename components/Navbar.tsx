'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { initializeGSAP } from '@/lib/gsap-utils';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  /* ================= GSAP INTRO ================= */
  useEffect(() => {
    const initIntro = async () => {
      const { gsap } = await initializeGSAP();

      const navAlreadyShown = sessionStorage.getItem('navShown') === 'true';
      const delay = navAlreadyShown ? 0.25 : 5;

      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay,
            ease: 'power3.out',
            onComplete: () => {
              sessionStorage.setItem('navShown', 'true');
              window.dispatchEvent(new Event('nav:ready'));
            },
          }
        );
      }
    };

    initIntro();
  }, []);

  /* ================= SCROLL LOGIC ================= */
  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 40;
      setIsAtTop(atTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ================= VISIBILITY RULE ================= */
  useEffect(() => {
    if (isAtTop || isHoveringTop || isHoveringNav) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isAtTop, isHoveringTop, isHoveringNav]);

  /* ================= SMOOTH SCROLL ================= */
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <>
      {/* ================= TOP HOVER TRIGGER ================= */}
      <div
        className="fixed top-0 left-0 w-full h-24 z-40"
        onMouseEnter={() => setIsHoveringTop(true)}
        onMouseLeave={() => setIsHoveringTop(false)}
      />

      <motion.nav
        ref={navRef}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{
          duration: 0.2, // quick slide
          ease: 'easeOut',
        }}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => setIsHoveringNav(false)}
        className={cn(
          'fixed top-0 w-full z-50',
          isAtTop
            ? 'bg-transparent'
            : 'bg-white/75 backdrop-blur-2xl border-b border-black/5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/Nia Logo.svg"
                alt="NIA Logo"
                className="w-16 h-16"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase())}
                  className={cn(
                    'text-sm font-semibold transition-colors',
                    isAtTop
                      ? 'text-white hover:text-accent-red'
                      : 'text-black hover:text-accent-red'
                  )}
                >
                  {item}
                </button>
              ))}

            
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} className={isAtTop ? 'text-white' : 'text-black'} />
              ) : (
                <Menu size={28} className={isAtTop ? 'text-white' : 'text-black'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item.toLowerCase())}
                className="block w-full text-left px-6 py-4 text-lg font-semibold text-black hover:bg-gray-100 transition"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
