'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Settings, Truck, HardHat, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigArrowRef = useRef<HTMLDivElement>(null);
  const svgTopRef = useRef<SVGGElement>(null);
  const svgBottomRef = useRef<SVGGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(bigArrowRef.current, { x: 0, opacity: 1 });
      gsap.set(svgTopRef.current, { opacity: 0, x: 140, y: -140 });
      gsap.set(svgBottomRef.current, { opacity: 0, x: -140, y: 140 });
      gsap.set(contentRef.current?.children || [], { opacity: 0, y: 40 });
      gsap.set(imageRef.current, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      tl.to({}, { duration: 0.5 });

      tl.to(bigArrowRef.current, {
        x: '120vw',
        opacity: 0,
        duration: 1.4,
        ease: 'power4.inOut',
      });

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
      className="relative min-h-screen overflow-hidden bg-[#FEFEFE]"
    >
      {/* BIG CENTER ARROW */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          ref={bigArrowRef}
          className="bg-[#051747] text-white font-bold uppercase tracking-widest shadow-2xl
                     px-12 py-6 text-2xl
                     sm:px-20 sm:py-10 sm:text-4xl
                     lg:px-32 lg:py-14 lg:text-6xl"
          style={{
            clipPath:
              'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)',
            transform: 'scale(1.2)',
            transformOrigin: 'center',
          }}
        >
          ABOUT US
        </div>
      </div>

      {/* SVG BACKGROUND */}
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
            fill="#E7E9F0"
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
            fill="#E7E9F0"
          />
        </g>
      </svg>

      {/* CONTENT GRID */}
      <div className="relative z-30 grid lg:grid-cols-2 min-h-screen">
        {/* LEFT */}
        <div className="px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-12 pb-8 lg:pb-12 flex items-center">
          <div ref={contentRef} className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#081F62] leading-tight">
              Reliable Technical
              <br />
              Expertise
            </h2>

            <p className="text-[#535F80] font-bold leading-relaxed max-w-sm">
              Nia Infra Projects is a public infrastructure specialist dedicated
              to the execution of urban roads, highways, and large-scale
              development.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-8">
              {[Settings, Truck, HardHat].map((Icon, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center rounded-[20px] bg-transparent shadow-[0_10px_45px_rgba(5,23,71,0.15)] p-3 sm:p-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FEFEFE] border-4 border-[#535F80] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                    <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-[#081F62]" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#081F62]">
                    {['Structured Planning', 'Phased Execution', 'On-Site Safety'][i]}
                  </h4>
                </div>
              ))}
            </div>

            <div className="pt-4 sm:pt-8">
              <Link href="/about">
                <button className="bg-[#051747] hover:bg-[#081F62] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg transition-colors inline-flex items-center gap-2 text-sm sm:text-base">
                  LEARN MORE ABOUT NIA INFRA PROJECTS
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={imageRef}
          className="flex items-center justify-center px-6 sm:px-8 pt-4 lg:pt-12 pb-8 lg:pb-12"
        >
          <div className="relative w-full max-w-md lg:max-w-4xl lg:scale-90">
            <img
              src="/3DAssets/002Ab.png"
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
