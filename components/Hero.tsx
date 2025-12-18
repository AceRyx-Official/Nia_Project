'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
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

  const svgVariant: Variants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/excavator_bg.png"
          alt="Construction Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Decorative SVG Shape - Left (Behind) - Slides in from left */}
      <motion.div
        variants={svgVariant}
        initial="hidden"
        animate={canAnimate ? 'visible' : 'hidden'}
        className="absolute inset-0"
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 3 }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 0 L 1117 0 C 1129 90 1105 205 1032 269 C 977 327 888 380 900 552 C 918 753 763 857 689 903 L 0 900 Z"
            fill="#471c1cff"
          />
        </svg>
      </motion.div>

      {/* Decorative SVG Shape - Right (Front)
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 30 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 1466 901 L 1060 907 C 1103 822 1184 859 1200 784 C 1208 718 1283 731 1266 654 C 1273 591 1338 640 1357 537 C 1370 454 1305 486 1440 317 L 1455 899"
          fill="#471c1cff"
        />
      </svg> */}

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
              className="text-6xl md:text-7xl text-white leading-tight mb-3 font-bold line"
            >
              Inspired by Nature,
            </motion.h1>
            <motion.h1
              variants={fadeUp}
            >
              <span className="text-orange-400 text-6xl md:text-7xl leading-tight font-bold line">Perfected by Vision</span>
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
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 30px rgba(251,146,60,0.2))',
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>


    </section>
  );
};

export default Hero;


//M 0 0 L 1117 0 C 1129 90 1145 234 1003 244 C 862 238 731 348 775 532 C 843 730 763 857 581 900 L 0 900 Z M 1440 900 L 937 899 C 1103 822 1247 866 1269 820 C 1357 759 1271 731 1297 714 C 1272 672 1354 665 1361 587 C 1358 450 1397 480 1440 387 L 1440 898