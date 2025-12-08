'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { initializeGSAP, optimizeForPerformance } from '@/lib/gsap-utils';

// ============= CONFIGURATION VARIABLES =============
// Road Settings
const ROAD_CONFIG = {
  width: '750px',           // Road width - wider road
  maxWidth: '60vw',         // Max road width (responsive)
  height: '1000%',          // Road height - very tall to compensate for 3D perspective compression
  positionX: '50%',         // Horizontal position (50% = center)
  positionY: '-100%',       // Vertical position - negative to push road up and reach top
  perspectiveTilt: 35,      // 3D perspective angle (0-85°) - controls vanishing point effect. Lower = less compressed
  tiltX: 0,                 // Rotation on X axis (degrees) - forward/backward tilt
  tiltY: 0,                 // Rotation on Y axis (degrees) - left/right tilt
  tiltZ: 0,                 // Rotation on Z axis (degrees) - roll
  scale: 1.5,               // Overall scale
};

// Billboard Settings
const BILLBOARD_CONFIG = {
  width: 'clamp(150px, 35vw, 250px)',   // Billboard width - smaller for modern look
  height: 'clamp(100px, 22vw, 160px)',  // Billboard height - smaller
  topPosition: '38%',                    // Distance from top (38% = center-ish)
  tiltX: 0,                              // Rotation on X axis (degrees)
  tiltY: 0,                              // Rotation on Y axis (degrees)
  tiltZ: 0,                              // Rotation on Z axis (degrees)
  scale: 1.5,                            // Overall scale
};
// ===================================================

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const billboardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const dashesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = async () => {
      const { gsap } = await initializeGSAP();
      optimizeForPerformance();

      const ctx = gsap.context(() => {
        // Initial state - Billboard and logo always OPAQUE
        gsap.set(roadRef.current, { opacity: 0 });
        gsap.set(carRef.current, { y: 150, opacity: 0, scale: 2.5 }); // Start LARGE
        gsap.set(billboardRef.current, { opacity: 1, scale: 0.8 }); // Start SMALLER but OPAQUE
        gsap.set(logoRef.current, { opacity: 1 }); // Logo always visible
        gsap.set(cameraRef.current, { scale: 1, y: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'none' } });

        tl
          .to(roadRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' })
          .to(carRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.8)
          .to(carRef.current, { y: -600, scale: 0.05, duration: 5, ease: 'power1.in' }, 1.5) // Shrink to TINY
          // Billboard gradually approaches: scales up AND moves from top to higher center position
          .to(billboardRef.current, {
            scale: 1.2,      // Grows from 0.5 to 1.2 for dramatic scale-up effect
            top: '38%',      // Moves from 5% (top) to 32% (higher position)
            duration: 5,     // Same 5 seconds as car for synchronized movement
            ease: 'power1.in'  // Same easing as car
          }, 1.5)
          .to(carRef.current, { opacity: 0, duration: 0.5, ease: 'power2.in' }, 6)
          .to(cameraRef.current, { scale: 1.8, y: -200, duration: 2, ease: 'power2.inOut' }, 6.5);
      }, containerRef);

      return () => ctx.revert();
    };

    run();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-amber-900/20 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-slate-800/50 to-transparent"></div>

      <div ref={cameraRef} className="absolute inset-0" style={{ transformOrigin: 'center 30%' }}>
        <div ref={roadRef} className="absolute inset-0 flex items-center justify-center" style={{ perspective: '600px', perspectiveOrigin: 'center 70%' }}>
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute bottom-0" style={{ left: ROAD_CONFIG.positionX, bottom: ROAD_CONFIG.positionY, width: ROAD_CONFIG.width, maxWidth: ROAD_CONFIG.maxWidth, height: ROAD_CONFIG.height, transform: `translateX(-50%) rotateX(${ROAD_CONFIG.perspectiveTilt}deg) scale(${ROAD_CONFIG.scale})`, transformOrigin: 'center bottom', transformStyle: 'preserve-3d', background: 'linear-gradient(to top, #4a4a4a 0%, #3a3a3a 20%, #2a2a2a 50%, #1a1a1a 80%, #0a0a0a 100%)', boxShadow: '0 100px 200px rgba(0,0,0,0.9), inset 0 0 80px rgba(0,0,0,0.6)' }}>
              <div className="absolute left-0 top-0 w-5 h-full bg-gradient-to-t from-gray-300/80 via-gray-400/50 to-gray-600/20"></div>
              <div className="absolute right-0 top-0 w-5 h-full bg-gradient-to-t from-gray-300/80 via-gray-400/50 to-gray-600/20"></div>

              {/* Road dashes */}
              <div ref={dashesRef} className="absolute left-1/2 top-0 w-3 h-full -translate-x-1/2">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div key={i} className="absolute left-0 w-full h-16 bg-yellow-200 rounded opacity-90" style={{ top: `${i * 2.5}%`, boxShadow: '0 2px 6px rgba(0,0,0,0.5)' }}></div>
                ))}
              </div>

              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[10%] left-[25%] w-[40%] h-[1px] bg-black/60 rotate-6"></div>
                <div className="absolute top-[30%] left-[20%] w-[50%] h-[1px] bg-black/50 -rotate-4"></div>
                <div className="absolute top-[50%] left-[30%] w-[35%] h-[1px] bg-black/60 rotate-3"></div>
                <div className="absolute top-[70%] left-[25%] w-[45%] h-[1px] bg-black/50 -rotate-5"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            </div>
            <div className="absolute left-1/2 bottom-0 w-[950px] max-w-[97vw] h-full -translate-x-1/2 bg-black/50 blur-[80px] -z-10"></div>
          </div>
        </div>

        <div ref={carRef} className="absolute z-10 pointer-events-none" style={{ bottom: '35%', left: '50%', transform: 'translateX(-50%)', filter: 'drop-shadow(0 35px 70px rgba(0,0,0,0.95))' }}>
          <Image src="/whitecarback.png" alt="Car" width={140} height={93} className="w-28 md:w-36 h-auto" priority />
        </div>

        <div ref={billboardRef} className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: '2%' }}>
          <div className="relative" style={{ transform: `rotateX(${BILLBOARD_CONFIG.tiltX}deg) rotateY(${BILLBOARD_CONFIG.tiltY}deg) rotateZ(${BILLBOARD_CONFIG.tiltZ}deg) scale(${BILLBOARD_CONFIG.scale})` }}>
            {/* Modern sleek billboard */}
            <div className="z-20 relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl overflow-hidden" style={{ width: BILLBOARD_CONFIG.width, height: BILLBOARD_CONFIG.height, boxShadow: '0 25px 50px rgba(0,0,0,0.6), 0 10px 20px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)', border: '3px solid #2d3748', borderRadius: '12px' }}>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20"></div>

              <div ref={logoRef} className="absolute inset-0 flex items-center justify-center p-2">
                <div className="text-center w-full">
                  <div className="font-black tracking-tight mb-1" style={{ fontSize: 'clamp(1.8rem, 7vw, 3.5rem)', color: '#ffffff', textShadow: '0 2px 10px rgba(196,30,58,0.5), 0 0 20px rgba(196,30,58,0.3)', fontFamily: 'Inter, Arial Black, sans-serif', letterSpacing: '0.05em', lineHeight: '1' }}>NIA</div>
                  <div className="w-[70%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full mb-1 shadow-lg shadow-red-500/50"></div>
                  <div className="font-semibold tracking-[0.25em] uppercase" style={{ fontSize: 'clamp(0.5rem, 1.3vw, 0.7rem)', color: '#e2e8f0', textShadow: '0 1px 3px rgba(0,0,0,0.5)', fontFamily: 'Inter, Arial, sans-serif', lineHeight: '1', letterSpacing: '0.2em' }}>Construction</div>
                </div>
              </div>

              {/* Modern corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-red-500/60"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-red-500/60"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-red-500/60"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-red-500/60"></div>
            </div>

            {/* Thin steel support posts - VERY WIDE spacing, positioned HIGHER */}
            <div className="absolute left-[5%] -bottom-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-2xl" style={{ width: '10px', height: '90px', borderRadius: '2px', boxShadow: '0 10px 30px rgba(0,0,0,0.7), inset 1px 0 1px rgba(255,255,255,0.2), inset -1px 0 1px rgba(0,0,0,0.3)' }}></div>
            <div className="absolute right-[5%] -bottom-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-2xl" style={{ width: '10px', height: '90px', borderRadius: '2px', boxShadow: '0 10px 30px rgba(0,0,0,0.7), inset 1px 0 1px rgba(255,255,255,0.2), inset -1px 0 1px rgba(0,0,0,0.3)' }}></div>

            {/* Top crossbar - extends across very wide support spacing */}


            {/* Bottom plates */}
            <div className="absolute left-[3%] -bottom-20 w-8 h-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded shadow-xl"></div>
            <div className="absolute right-[3%] -bottom-20 w-8 h-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded shadow-xl"></div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
