'use client';

import { gsap } from 'gsap';

// Dynamically import ScrollTrigger to avoid SSR issues
export const initializeGSAP = async () => {
  if (typeof window !== 'undefined') {
    const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  }
  return { gsap, ScrollTrigger: null };
};

// Helper function to create smooth scroll animations
export const createScrollAnimation = (
  trigger: string | Element,
  animations: gsap.TweenVars,
  options?: ScrollTrigger.StaticVars
) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      ...options
    }
  }).to(animations.targets, animations);
};

// Performance optimization for GSAP animations
export const optimizeForPerformance = () => {
  if (typeof window !== 'undefined') {
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });
  }
};