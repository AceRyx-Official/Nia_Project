'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigArrowRef = useRef<HTMLDivElement>(null);
  const smallArrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  /* ================= GSAP ANIMATION ================= */
 useEffect(() => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    /* ================= INITIAL STATES ================= */

    gsap.set(bigArrowRef.current, {
      x: 0,
      opacity: 1,
      scale: 2.4,
      transformOrigin: 'center',
    });

    gsap.set(smallArrowRef.current, {
      x: -200,
      opacity: 0,
    });

    gsap.set(titleRef.current, {
      y: 40,
      opacity: 0,
    });

    gsap.set(imageRef.current, {
      y: 60,
      opacity: 0,
    });

    gsap.set(cardsRef.current?.children || [], {
      opacity: 0, // 👈 subtle scale-in for smoothness
    });

    /* ================= TIMELINE ================= */

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });

    // small buffer
    tl.to({}, { duration: 0.4 });

    // BIG ARROW EXIT
    tl.to(bigArrowRef.current, {
      x: '120vw',
      opacity: 0,
      duration: 1.4,
      ease: 'power4.inOut',
    });

    // SMALL ARROW ENTER
    tl.to(
      smallArrowRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.7'
    );

    // TITLE
    tl.to(
      titleRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    // IMAGE
    tl.to(
      imageRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    // CARDS — ROW BY ROW (2 AT A TIME, SMOOTH)
    tl.to(
  cardsRef.current?.children || [],
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,          // 👈 one after the other
    ease: 'power4.out',
  },
  '-=0.3'
);

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className="relative bg-[#E0D4C3] overflow-hidden">

      {/* ================= BIG CENTER ARROW ================= */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          ref={bigArrowRef}
          className="bg-[#5b3428] text-white px-32 py-14 font-bold uppercase tracking-widest text-6xl shadow-2xl"
          style={{
            clipPath:
              'polygon(0 0, calc(100% - 80px) 0, 100% 50%, calc(100% - 80px) 100%, 0 100%)',
          }}
        >
          SERVICES
        </div>
      </div>

      {/* ================= SMALL ARROW ================= */}
      <div ref={smallArrowRef} className="absolute top-0 left-0 z-10">
        <div
          className="bg-[#5b3428] text-white px-16 py-6 font-bold uppercase tracking-widest text-4xl"
          style={{
            clipPath:
              'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)',
          }}
        >
          SERVICES
        </div>
      </div>

      <div className="max-w-screen-6xl mx-auto px-16 sm:px-6 lg:px-36 py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col justify-start lg:order-1 max-w-4xl">
            <div className="mb-6">
              <h2
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-[#1B365D] leading-tight"
              >
                Expert construction services for every need
              </h2>
            </div>

            {/* IMAGE */}
            <div ref={imageRef} className="w-full max-w-3xl mx-auto mt-6">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/3DAssets/003Ab.png"
                  alt="3D Construction Services Visualization"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — CARDS */}
          <div className="lg:flex lg:flex-col lg:justify-center lg:order-2">
            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-7"
            >

              {/* === ALL 6 CARDS — UNCHANGED === */}

              {/* 1 */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-36 top-1/2 -translate-y-1/2 z-0">
                  <Image src="/Services/wrench.png" alt="Road Construction" width={384} height={384} className="w-90 h-90 object-contain opacity-60" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl text-[#1B365D] text-center group-hover:text-left">
                    Road Construction & Development
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Durable road networks and high-strength concrete road works.
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage:'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}} />
              </div>

              {/* 2 */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-40 top-1/2 -translate-y-1/2 z-0">
                  <Image src="/Services/Tetra.png" alt="RMC" width={384} height={384} className="w-[28rem] h-[28rem] object-contain opacity-60" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl text-[#1B365D] text-center group-hover:text-left">
                    RMC (Ready Mix Concrete)
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    High-performance concrete with in-house batching and on-site delivery.
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage:'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}} />
              </div>

              {/* 3 */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-0">
                  <Image src="/Services/swirl.png" alt="Excavation" width={384} height={384} className="w-60 h-60 object-contain opacity-60" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl text-[#1B365D] text-center group-hover:text-left">
                    Excavation Services
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Foundation, site and utility excavation with expert handling.
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage:'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}} />
              </div>

              {/* 4 */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-0">
                  <Image src="/Services/Gear.png" alt="Infrastructure" width={384} height={384} className="w-80 h-80 object-contain opacity-60" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl text-[#1B365D] text-center group-hover:text-left">
                    Infrastructure & Civil Works
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Drainage, culverts, retaining walls, footpaths, medians and ducting work.
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage:'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}} />
              </div>

              {/* 5 */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-0">
                  <Image src="/Services/hammer.png" alt="Machinery" width={384} height={384} className="w-72 h-72 object-contain opacity-60" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl text-[#1B365D] text-center group-hover:text-left">
                    Machinery & Equipment Support
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Fleet of excavators, rollers, pavers, graders and on-site mechanical support.
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage:'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}} />
              </div>

              {/* 6 */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-0">
                  <Image src="/Services/helmet.png" alt="Project Management" width={384} height={384} className="w-80 h-80 object-contain opacity-60" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl text-[#1B365D] text-center group-hover:text-left">
                    Project Management & Turnkey
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    End-to-end turnkey execution with safety, quality and planned delivery.
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage:'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}