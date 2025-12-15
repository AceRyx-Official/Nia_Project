'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  /* ================= ANIMATION GATE ================= */

  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    // If navbar already animated in this session, start immediately
    if (sessionStorage.getItem('navShown') === 'true') {
      setCanAnimate(true);
      return;
    }

    // Otherwise wait for navbar animation to finish
    const handleNavReady = () => setCanAnimate(true);

    window.addEventListener('nav:ready', handleNavReady);
    return () => window.removeEventListener('nav:ready', handleNavReady);
  }, []);

  /* ================= VARIANTS ================= */

  const mainContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.26,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/HERO_BACKGROUND1.mp4" type="video/mp4" />
        </video>
        {/* Black tint overlay */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate={canAnimate ? 'visible' : 'hidden'}
        className="relative z-10 w-full max-w-8xl mx-auto px-32"
      >
        <div className=" lg:flex-row items-center gap-20">

          {/* ================= LEFT — TEXT ================= */}
          <motion.div
            variants={textContainer}
            className="w-full lg:w-1/2"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm tracking-widest uppercase text-orange-400 mb-4"
            >
              
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-7xl text-[#ffff] leading-tight mb-6 font-bold"
            >
              Inspired by Nature,
              <br />
              <span className="text-orange-400">Perfected by Vision</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white max-w-xl mb-10"
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-orange-400 text-black font-medium hover:bg-slate-800 transition"
              >
                View Our Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex bg-white items-center justify-center gap-3 px-8 py-4 rounded-full border border-slate-300 text-slate-800 font-medium hover:bg-white transition"
              >
                <Play className="w-4 h-4" />
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT — IMAGE ================= */}
          <motion.div
            variants={imageVariant}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="relative w-full max-w-xl"
            >
              {/* <img
                src="/3D_Images/001b.png"
                alt="3D Construction Visualization"
                className="w-full h-auto object-contain drop-shadow-2xl"
              /> */}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
