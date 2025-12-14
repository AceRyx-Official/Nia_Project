'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { initializeGSAP } from '@/lib/gsap-utils';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  /* ================= GSAP INTRO ================= */
  useEffect(() => {
    const initIntro = async () => {
      const { gsap } = await initializeGSAP();

      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.25,
            ease: 'power2.out'
          }
        );
      }
    };

    initIntro();
  }, []);

  /* ================= SCROLL LOGIC ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsAtTop(currentY < 60);

      if (currentY < lastScrollY || currentY < 80) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <motion.nav
      ref={navRef}
      animate={{ y: show ? 0 : -90 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 w-full z-50 transition-colors duration-300',

        isAtTop
          ? 'bg-white/30 backdrop-blur-md border-b border-white/10'
          : 'bg-white/70 backdrop-blur-2xl border-b border-white/10'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            NIA
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-semibold text-sm text-black hover:text-accent-red transition"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-accent-red text-white px-5 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-royal-blue" />
            ) : (
              <Menu size={28} className="text-royal-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-black/5">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-4 text-lg font-semibold text-royal-blue hover:bg-gray-100 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
