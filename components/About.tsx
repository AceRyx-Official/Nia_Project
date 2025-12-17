'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Settings, Truck, HardHat } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const bigArrowRef = useRef<HTMLDivElement>(null);
  const svgTopRef = useRef<SVGGElement>(null);
  const svgBottomRef = useRef<SVGGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= INITIAL STATE ================= */

      gsap.set(bigArrowRef.current, {
        x: 0,
        opacity: 1,
      });

      gsap.set(arrowRef.current, {
        x: -200,
        opacity: 0,
      });

      gsap.set(svgTopRef.current, {
        opacity: 0,
        x: 140,
        y: -140,
      });

      gsap.set(svgBottomRef.current, {
        opacity: 0,
        x: -140,
        y: 140,
      });

      gsap.set(contentRef.current?.children || [], {
        opacity: 0,
        y: 40,
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        y: 40,
      });

      /* ================= TIMELINE ================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,

        
        },
      });

      /* ================= HOLD BIG ARROW ================= */
      tl.to({}, { duration: 0.5 });

      /* ================= BIG ARROW EXIT ================= */
      tl.to(bigArrowRef.current, {
        x: '120vw',
        opacity: 0,
        duration: 1.4,
        ease: 'power4.inOut',
      });

      /* ================= SMALL ARROW ENTRY ================= */
      tl.to(
        arrowRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.7'
      );

      /* ================= SVG BACKGROUNDS ================= */
      tl.to(
        svgTopRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
        },
        '-=0.4'
      );

      tl.to(
        svgBottomRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '<'
      );

      /* ================= CONTENT ================= */
      tl.to(
        contentRef.current?.children || [],
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.4'
      );

      tl.to(
        imageRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F1ED]"
    >
      {/* ================= SMALL ARROW ================= */}
      <div ref={arrowRef} className="absolute top-0 left-0 z-30">
        <div
          className="bg-[#5b3428] text-white px-16 py-6 font-bold uppercase tracking-widest text-4xl"
          style={{
            clipPath:
              'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)',
          }}
        >
          ABOUT US
        </div>
      </div>

      {/* ================= BIG CENTER ARROW ================= */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          ref={bigArrowRef}
          className="bg-[#5b3428] text-white px-32 py-14 font-bold uppercase tracking-widest text-6xl shadow-2xl"
          style={{
            clipPath:
              'polygon(0 0, calc(100% - 80px) 0, 100% 50%, calc(100% - 80px) 100%, 0 100%)',
            transform: 'scale(2.4)',
            transformOrigin: 'center',
          }}
        >
          ABOUT US
        </div>
      </div>

      {/* ================= SVG BACKGROUND ================= */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1396 901"
        preserveAspectRatio="xMidYMid slice"
      >
        <g ref={svgTopRef}>
          <path
            d="M 600 31 L 1396 31 L 1396 545 C 1341 573 1215 609 1226 440 
               C 1234 346 1180 339 1093 360 
               C 1006 379 845 429 996 264 
               C 1058 189 961 215 915 226 
               C 829 233 895 150 782 178 
               C 694 211 724 95 617 97 
               C 542 94 611 63 550 31 Z"
            fill="#E0D4C3"
          />
        </g>

        <g ref={svgBottomRef}>
          <path
            d="M 2 800 L 583 800 C 484 699 401 802 378 722 
               C 348 626 307 722 292 670 
               C 272 581 195 701 203 621 
               C 234 508 78 683 129 583 
               C 182 485 138 471 47 504 
               C -1 525 36 445 -3 452"
            fill="#E0D4C3"
          />
        </g>
      </svg>

      {/* ================= CONTENT GRID ================= */}
      <div className="relative z-30 grid lg:grid-cols-2 h-screen">
        {/* LEFT */}
        <div className="px-8 sm:px-12 lg:px-16 pt-8 lg:pt-12 pb-6 lg:pb-12 flex items-center">
          <div ref={contentRef} className="max-w-xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight">
              Reliable Technical
              <br />
              Expertise
            </h2>

            <p className="text-gray-700 font-bold leading-relaxed max-w-md">
              Nia Infra Projects is a public infrastructure specialist dedicated
              to the execution of urban roads, highways, and large-scale
              development.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { Icon: Settings, title: 'Structured Planning' },
                { Icon: Truck, title: 'Phased Execution' },
                { Icon: HardHat, title: 'On-Site Safety' },
              ].map(({ Icon, title }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center rounded-[20px] bg-transparent backdrop-blur-sm shadow-[0_10px_45px_rgba(15,23,42,0.15)] p-4"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#8B6F47] flex items-center justify-center mb-3 shadow-lg">
                    <Icon className="w-10 h-10 text-[#1e3a5f]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#1e3a5f]">
                    {title}
                  </h4>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href="/about">
                <button className="bg-[#8B4F3D] hover:bg-[#2d5080] text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
                  LEARN MORE ABOUT NIA INFRA PROJECTS
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={imageRef}
          className="flex items-center justify-center px-8 pt-8 lg:pt-12 pb-6 lg:pb-12"
        >
          <div className="relative w-full max-w-4xl scale-90">
            <img
              src="/3D_Images/001b.png"
              alt="Infrastructure Development Visualization"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
