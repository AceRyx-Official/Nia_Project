'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { initializeGSAP, optimizeForPerformance } from '@/lib/gsap-utils';

const NiaScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nRef = useRef<HTMLSpanElement>(null);
  const iRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLSpanElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = async () => {
      const { gsap, ScrollTrigger } = await initializeGSAP();
      optimizeForPerformance();

      const ctx = gsap.context(() => {
        // initial transformations
        gsap.set(iRef.current, { transformOrigin: 'center top' });
        gsap.set(roadRef.current, { opacity: 0, scaleY: 0, transformOrigin: 'center top' });
        gsap.set(carRef.current, { opacity: 0, xPercent: -50, rotate: -90 });
        gsap.set(boardRef.current, { opacity: 0, scale: 0.5 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=2000',
            scrub: 1,
            pin: true
          }
        });

        tl
          // step 1 — I stretches
          .to(iRef.current, {
            scaleY: 6,
            scaleX: 0.25,
            duration: 0.4,
            ease: 'none'
          })

          // step 2 — road fades in from I
          .to(
            roadRef.current,
            {
              opacity: 1,
              scaleY: 1,
              duration: 0.3,
              ease: 'none'
            },
            '<0.1'
          )

          // step 3 — remove original I
          .to(iRef.current, { opacity: 0, duration: 0.1 })

          // step 4 — bring car in
          .to(carRef.current, { opacity: 1, duration: 0.1 })

          // step 5 — car drives upward
          .to(carRef.current, {
            y: -400,
            duration: 0.8,
            ease: 'power1.inOut'
          })

          // step 6 — show board
          .to(
            boardRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.3
            },
            '<0.3'
          )

          // step 7 — board grows for perspective
          .to(boardRef.current, {
            scale: 1.3,
            duration: 0.3,
            ease: 'power2.out'
          });
      });

      return () => ctx.revert();
    };

    run();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden text-white"
    >
      {/* NIA text */}
      <div className="flex items-center text-[10rem] font-bold relative select-none">

        {/* N */}
        <span ref={nRef}>N</span>

        {/* I wrapper */}
        <div className="relative mx-8 w-16 h-96 flex items-start justify-center">

          {/* road behind */}
          <div
            ref={roadRef}
            className="absolute top-0 left-0 w-full h-full bg-gray-700 rounded-lg overflow-hidden"
          >
            {/* dashed line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 flex flex-col justify-evenly">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-6 w-full bg-yellow-400 rounded" />
              ))}
            </div>

            {/* edges */}
            <div className="absolute top-0 left-0 w-1 h-full bg-white/40" />
            <div className="absolute top-0 right-0 w-1 h-full bg-white/40" />
          </div>

          {/* original I */}
          <div
            ref={iRef}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            I
          </div>

          {/* car */}
          <div
            ref={carRef}
            className="absolute bottom-0 left-1/2 z-10"
          >
            <Image src="/RedCar.png" alt="car" width={60} height={40} />
          </div>
        </div>

        {/* A */}
        <span ref={aRef}>A</span>
      </div>

      {/* BOARD */}
      <div
        ref={boardRef}
        className="absolute top-20 left-1/2 -translate-x-1/2 text-black"
      >
        <div className="relative bg-amber-100 border-4 border-amber-800 rounded-lg px-6 py-8 shadow-xl">
          <div className="text-5xl font-bold text-amber-900 flex flex-col items-center">
            <div>I</div>
            <div>A</div>
          </div>

          {/* pole */}
          <div className="absolute left-1/2 -bottom-20 w-3 h-20 bg-amber-800 -translate-x-1/2 rounded" />
        </div>
      </div>
    </div>
  );
};

export default NiaScrollAnimation;
