'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { initializeGSAP, optimizeForPerformance } from '@/lib/gsap-utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const billboardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = async () => {
      const { gsap } = await initializeGSAP();
      optimizeForPerformance();

      const ctx = gsap.context(() => {
        // Initial state
        gsap.set(roadRef.current, { opacity: 0, scaleY: 0.3 });
        gsap.set(carRef.current, { y: 400, opacity: 0, scale: 0.3 });
        gsap.set(billboardRef.current, { opacity: 0, scale: 0.8, y: 100 });
        gsap.set(logoRef.current, { opacity: 0, scale: 0.5 });
        gsap.set(cameraRef.current, { scale: 1, y: 0 });

        // Main cinematic timeline
        const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

        tl
          // Act 1: Road appears (0-1s)
          .to(roadRef.current, {
            opacity: 1,
            scaleY: 1,
            duration: 1,
            ease: 'power3.out'
          })

          // Act 2: Car enters (1-1.5s)
          .to(carRef.current, {
            opacity: 1,
            duration: 0.5
          }, 1)

          // Act 3: Car drives and vanishes (1.5-5s)
          .to(carRef.current, {
            y: -600,
            scale: 3.5,
            opacity: 1,
            duration: 2.5,
            ease: 'power1.in'
          }, 1.5)
          .to(carRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in'
          }, 3.5)

          // Act 4: Camera zooms to billboard (4.5-6.5s)
          .to(cameraRef.current, {
            scale: 1.8,
            y: -120,
            duration: 2,
            ease: 'power2.inOut'
          }, 4.5)

          // Act 5: Billboard fades in (5-6.5s)
          .to(billboardRef.current, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out'
          }, 5)

          // Act 6: Logo reveals (6.5-8s)
          .to(logoRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'elastic.out(1, 0.6)'
          }, 6.5);

        // Continuous subtle billboard sway
        gsap.to(billboardRef.current, {
          rotateZ: 0.5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 8
        });

      }, containerRef);

      return () => ctx.revert();
    };

    run();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-amber-900/20 via-slate-900 to-slate-950"
    >
      {/* Sky/Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-slate-800/50 to-transparent"></div>

      {/* Camera container for zoom effect */}
      <div
        ref={cameraRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformOrigin: 'center 40%' }}
      >
        {/* 3D Road */}
        <div
          ref={roadRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: '500px', perspectiveOrigin: 'center 30%' }}
        >
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {/* Main Road Surface with realistic texture */}
            <div
              className="absolute w-[700px] h-[150vh] max-w-[95vw]"
              style={{
                transform: 'rotateX(70deg) translateZ(-250px) translateY(18%)',
                transformOrigin: 'center bottom',
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(to bottom, #4a4a4a 0%, #3a3a3a 40%, #2a2a2a 100%)',
                boxShadow: '0 80px 150px rgba(0,0,0,0.8), inset 0 -150px 150px rgba(0,0,0,0.4)'
              }}
            >
              {/* Road Edges with wear */}
              <div className="absolute left-0 top-0 w-5 h-full bg-gradient-to-b from-gray-400/70 to-gray-600/30 opacity-80"></div>
              <div className="absolute right-0 top-0 w-5 h-full bg-gradient-to-b from-gray-400/70 to-gray-600/30 opacity-80"></div>

              {/* Center Dashed Lines */}
              <div className="absolute left-1/2 top-0 w-3 h-full -translate-x-1/2">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 w-full h-20 bg-yellow-200 rounded opacity-90"
                    style={{
                      top: `${i * 5.5}%`,
                      animation: `roadDash 1.2s linear infinite`,
                      animationDelay: `${i * -0.04}s`,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
                    }}
                  ></div>
                ))}
              </div>

              {/* Road cracks and weathering */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[20%] left-[30%] w-[40%] h-[1px] bg-black/60 rotate-12"></div>
                <div className="absolute top-[45%] left-[20%] w-[50%] h-[1px] bg-black/50 -rotate-6"></div>
                <div className="absolute top-[70%] left-[40%] w-[30%] h-[1px] bg-black/60 rotate-3"></div>
              </div>

              {/* Road gradient overlay for realism */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 opacity-70"></div>
            </div>

            {/* Road Shadow */}
            <div
              className="absolute w-[750px] h-[150vh] max-w-[97vw] bg-black/50 blur-[80px] -z-10"
              style={{
                transform: 'rotateX(70deg) translateZ(-260px) translateY(18%)',
                transformOrigin: 'center bottom'
              }}
            ></div>
          </div>
        </div>

        {/* Car */}
        <div
          ref={carRef}
          className="absolute z-20 pointer-events-none"
          style={{
            bottom: '30%',
            left: '50%',
            transform: 'translateX(-50%) rotate(-90deg)',
            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.9))'
          }}
        >
          <Image
            src="/RedCar.png"
            alt="Car"
            width={140}
            height={93}
            className="w-32 md:w-40 h-auto"
            priority
          />
        </div>

        {/* Vintage Billboard */}
        <div
          ref={billboardRef}
          className="absolute top-[15%] z-30"
        >
          <div className="relative">
            {/* Billboard wooden frame */}
            <div
              className="relative bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950 rounded-lg overflow-hidden"
              style={{
                width: 'clamp(280px, 80vw, 500px)',
                height: 'clamp(200px, 50vw, 340px)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.7), inset 0 0 50px rgba(0,0,0,0.3)',
                border: '12px solid #4a3520',
                borderRadius: '8px'
              }}
            >
              {/* Wood planks texture */}
              <div className="absolute inset-0">
                {/* Horizontal planks */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-[20%] border-b border-amber-950/40"
                    style={{
                      top: `${i * 20}%`,
                      background: `linear-gradient(90deg, 
                        #8b6f47 0%, 
                        #7a5c3a ${20 + i * 5}%, 
                        #6b4d2e ${50 + i * 3}%, 
                        #7a5c3a ${80 - i * 4}%, 
                        #8b6f47 100%)`
                    }}
                  ></div>
                ))}
              </div>

              {/* Weathering and rust stains */}
              <div className="absolute inset-0 opacity-60">
                <div className="absolute top-[10%] left-[5%] w-[15%] h-[20%] bg-gradient-radial from-orange-900/40 to-transparent rounded-full blur-sm"></div>
                <div className="absolute top-[60%] right-[10%] w-[20%] h-[25%] bg-gradient-radial from-amber-950/50 to-transparent rounded-full blur-md"></div>
                <div className="absolute bottom-[15%] left-[30%] w-[25%] h-[15%] bg-gradient-radial from-stone-800/30 to-transparent rounded-full blur-sm"></div>

                {/* Scratch marks */}
                <div className="absolute top-[25%] left-[20%] w-[50%] h-[2px] bg-black/30 rotate-3"></div>
                <div className="absolute top-[55%] right-[15%] w-[40%] h-[1px] bg-black/20 -rotate-2"></div>
              </div>

              {/* Peeling paint effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/5 to-transparent opacity-30"></div>

              {/* Logo Container */}
              <div
                ref={logoRef}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center">
                  {/* NIA Text with vintage style */}
                  <div
                    className="font-black tracking-tight mb-3"
                    style={{
                      fontSize: 'clamp(4rem, 15vw, 8rem)',
                      color: '#f5f5f5',
                      textShadow: `
                        3px 3px 0px #c41e3a,
                        6px 6px 0px rgba(0,0,0,0.3),
                        0 0 20px rgba(196,30,58,0.4)
                      `,
                      fontFamily: 'Impact, Arial Black, sans-serif',
                      letterSpacing: '0.1em'
                    }}
                  >
                    NIA
                  </div>

                  {/* Decorative line */}
                  <div className="w-[80%] mx-auto h-2 bg-gradient-to-r from-transparent via-red-800 to-transparent rounded-full mb-3 shadow-lg"></div>

                  {/* Construction text */}
                  <div
                    className="font-bold tracking-[0.3em] uppercase"
                    style={{
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
                      color: '#e5e5e5',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    Construction
                  </div>
                </div>
              </div>

              {/* Corner bolts/rivets */}
              <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-inner"></div>
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-inner"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-inner"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-inner"></div>
            </div>

            {/* Billboard support posts */}
            <div className="absolute left-[15%] -bottom-40 w-6 h-40 bg-gradient-to-b from-amber-900 to-stone-900 shadow-xl"
              style={{
                clipPath: 'polygon(45% 0%, 55% 0%, 60% 100%, 40% 100%)',
                transform: 'perspective(100px) rotateY(-2deg)'
              }}
            ></div>
            <div className="absolute right-[15%] -bottom-40 w-6 h-40 bg-gradient-to-b from-amber-900 to-stone-900 shadow-xl"
              style={{
                clipPath: 'polygon(45% 0%, 55% 0%, 60% 100%, 40% 100%)',
                transform: 'perspective(100px) rotateY(2deg)'
              }}
            ></div>

            {/* Cross support beam */}
            <div className="absolute left-[10%] -bottom-32 w-[80%] h-3 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 shadow-lg"
              style={{ borderRadius: '2px' }}
            ></div>
          </div>
        </div>

        {/* Atmospheric fog/dust */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes roadDash {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0.9;
          }
          100% {
            transform: translateY(300px) scaleY(3);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
