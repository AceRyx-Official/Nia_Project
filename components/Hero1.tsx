'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero1 = () => {
  /* ================= ANIMATION GATE ================= */

  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('navShown') === 'true') {
      setCanAnimate(true);
      return;
    }

    const handleNavReady = () => setCanAnimate(true);
    window.addEventListener('nav:ready', handleNavReady);
    return () => window.removeEventListener('nav:ready', handleNavReady);
  }, []);

  /* ================= VARIANTS ================= */

  const mainContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const textContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.26,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariant: Variants = {
    hidden: {
      opacity: 0,
      x: 150,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      x: -100,
      scale: 1,
      transition: {
        duration: 3,
        ease: [0.3, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/videos/HERO_BACKGROUND1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate={canAnimate ? 'visible' : 'hidden'}
        className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-12 lg:px-32"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT - Text Content */}
          <motion.div
            variants={textContainer}
            className="w-full lg:w-1/2"
          >
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-7xl text-white leading-tight mb-3 font-bold"
            >
              Inspired by Nature,
            </motion.h1>

            <motion.h1 variants={fadeUp}>
              <span className="text-orange-400 text-6xl md:text-7xl leading-tight font-bold">
                Perfected by Vision
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white max-w-xl mb-10 mt-10"
            >
              NIA Construction delivers thoughtful, reliable construction solutions
              with a focus on quality execution, safety, and long-term value.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-orange-400 text-black font-medium hover:bg-orange-500 transition"
              >
                View Our Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex bg-white items-center justify-center gap-3 px-8 py-4 rounded-full border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition"
              >
                <Play className="w-4 h-4" />
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT - Excavator Image */}
          <motion.div
            variants={imageVariant}
            className="w-full lg:w-[50%] flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="relative w-full"
            >
              <img
                src="/excavator.png"
                alt="Excavator"
                className="w-full h-auto object-contain"
                style={{
                  filter:
                    'drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 30px rgba(251,146,60,0.2))',
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero1;
