'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Building2, HardHat, Ruler, Play, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { initializeGSAP } from '@/lib/gsap-utils';
import CurtainNavLink from './CurtainNavLink';

const Hero = () => {
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const { gsap, ScrollTrigger } = await initializeGSAP();
      
      if (ScrollTrigger && carRef.current) {
        // Initial position for the car (off-screen left)
        gsap.set(carRef.current, { x: -200, opacity: 0 });

        // Create scroll-triggered animation
        ScrollTrigger.create({
          trigger: "body", // Use body as trigger for global scroll
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const screenWidth = window.innerWidth;
            const startPos = -150; // Start from off-screen left
            const endPos = screenWidth + 150; // End off-screen right
            const xPosition = startPos + (progress * (endPos - startPos));
            const opacity = progress > 0.05 ? 1 : 0; // Fade in after 5% scroll
            
            gsap.set(carRef.current, { 
              x: xPosition,
              opacity: opacity
            });
          }
        });
      }
    };

    initAnimation();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 w-full h-full">
        <Image
          src="/Nia_BG.png"
          alt="Nia Construction Background"
          fill
          className="object-cover"
          priority
        />
        {/* Video Background (Optional overlay) */}
        <div className="absolute inset-0 opacity-30">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="\videos\Drone_Shot_Of_Empty_Road.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/70 to-black/80"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 floating-element" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Animated Car */}
      <div
        ref={carRef}
        className="absolute bottom-20 z-20 pointer-events-none"
      >
        <Image
          src="/BeloCar.png"
          alt="Car Animation"
          width={100}
          height={75}
          className="drop-shadow-2xl filter brightness-110"
        />
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
