'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home as HomeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { initializeGSAP } from '@/lib/gsap-utils';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

      // Track active section on home page
      if (isHomePage) {
        const sections = ['hero', 'about', 'services', 'projects', 'contact'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

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
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => setIsHoveringNav(false)}
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isAtTop
            ? 'bg-transparent'
            : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src="/Nia Logo.svg"
                alt="NIA Logo"
                className="w-16 h-16 transition-transform"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              {isHomePage ? (
                // Full navigation on home page
                <div className="flex items-center gap-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleScrollTo(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                        activeSection === item.id
                          ? isAtTop
                            ? 'text-white'
                            : 'text-[#8B4F3D]'
                          : isAtTop
                          ? 'text-white/80 hover:text-white'
                          : 'text-gray-700 hover:text-[#8B4F3D]'
                      )}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeSection"
                          className={cn(
                            'absolute inset-0 rounded-lg -z-10',
                            isAtTop
                              ? 'bg-white/10'
                              : 'bg-[#8B4F3D]/10'
                          )}
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              ) : (
                // Only Home button on other pages
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-200',
                      isAtTop
                        ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                        : 'bg-[#8B4F3D] text-white hover:bg-[#8B4F3D]/90 shadow-md'
                    )}
                  >
                    <HomeIcon size={18} />
                    <span>Home</span>
                  </motion.button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} className={isAtTop ? 'text-white' : 'text-black'} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} className={isAtTop ? 'text-white' : 'text-black'} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 overflow-hidden"
            >
              {isHomePage ? (
                // Full navigation on home page
                <div className="py-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleScrollTo(item.id)}
                      className={cn(
                        'block w-full text-left px-6 py-4 text-base font-medium transition-colors',
                        activeSection === item.id
                          ? 'text-[#8B4F3D] bg-[#8B4F3D]/5'
                          : 'text-gray-700 hover:bg-gray-100'
                      )}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              ) : (
                // Only Home button on other pages
                <div className="py-2">
                  <Link href="/">
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 w-full text-left px-6 py-4 text-base font-medium text-[#8B4F3D] hover:bg-gray-100 transition-colors"
                    >
                      <HomeIcon size={20} />
                      <span>Home</span>
                    </motion.button>
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
