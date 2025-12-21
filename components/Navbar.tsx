'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home as HomeIcon, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { initializeGSAP } from '@/lib/gsap-utils';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
        const sections = ['hero', 'about', 'services', 'projects', 'machinery', 'contact'];
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



  /* ================= SMOOTH SCROLL ================= */
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Machinery', id: 'machinery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        ref={navRef}
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isHomePage
            ? 'bg-transparent'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <AnimatePresence>
                {isAtTop && (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src="/Nia Logo.svg"
                    alt="NIA Logo"
                    className="w-16 h-16"
                  />
                )}
              </AnimatePresence>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3">
              {isHomePage ? (
                // Full navigation on home page
                <>
                  <div className="flex items-center gap-2">
                    {navItems.slice(0, -1).map((item) => (
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
                            transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 rounded-full font-medium transition-all duration-200 bg-[#8B4F3D] text-white hover:bg-[#1B365D] shadow-md"
                    >
                      Contact
                    </motion.button>
                  </Link>
                </>
              ) : (
                // Home and Contact buttons on other pages
                <>
                  <Link href="/">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-200 bg-[#8B4F3D] text-white hover:bg-[#8B4F3D]/90 shadow-md"
                    >
                      <HomeIcon size={18} />
                      <span>Home</span>
                    </motion.button>
                  </Link>
                  {pathname !== '/contact' && (
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 rounded-full font-medium transition-all duration-200 bg-[#1B365D] text-white hover:bg-[#1B365D]/90 shadow-md"
                      >
                        Contact
                      </motion.button>
                    </Link>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
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
                    <X size={28} className={isHomePage ? (isAtTop ? 'text-white' : 'text-black') : 'text-[#8B4F3D]'} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} className={isHomePage ? (isAtTop ? 'text-white' : 'text-black') : 'text-[#8B4F3D]'} />
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
                // Home and Contact buttons on other pages
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
                  {pathname !== '/contact' && (
                    <Link href="/contact">
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 }}
                        className="flex items-center gap-3 w-full text-left px-6 py-4 text-base font-medium text-[#1B365D] hover:bg-gray-100 transition-colors"
                      >
                        <Mail size={20} />
                        <span>Contact</span>
                      </motion.button>
                    </Link>
                  )}
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
