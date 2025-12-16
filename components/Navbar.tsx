'use client';
import Link from 'next/link';
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

      const navAlreadyShown = sessionStorage.getItem('navShown') === 'true';
      const delay = navAlreadyShown ? 0.25 : 5;

      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay,
            ease: 'power2.out',
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
        'fixed top-0 w-full z-50 transition-all duration-300',
        isAtTop
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/70 backdrop-blur-2xl border-b border-black/5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
{/* Logo */}
<div
  className={cn(
    'flex items-center transition-colors duration-300',
    isAtTop ? 'text-white' : 'text-black'
  )}
>
<Link href="/">
  <img
    src="/Nia Logo.svg"
    alt="NIA Logo"
    className="w-16 h-16"
  />
</Link>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  'font-semibold text-sm transition-colors duration-300',
                  isAtTop
                    ? 'text-white hover:text-accent-red'
                    : 'text-black hover:text-accent-red'
                )}
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
              <X
                size={28}
                className={cn(isAtTop ? 'text-white' : 'text-black')}
              />
            ) : (
              <Menu
                size={28}
                className={cn(isAtTop ? 'text-white' : 'text-black')}
              />
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
              className="block px-6 py-4 text-lg font-semibold text-black hover:bg-gray-100 transition"
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
