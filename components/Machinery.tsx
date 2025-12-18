'use client';

import { ArrowDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import machines from './Machines.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Machinery = () => {
  const [showMachines, setShowMachines] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const bigArrowRef = useRef<HTMLDivElement>(null);
  const smallArrowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const leftContentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (showMachines && expandedRef.current) {
      expandedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showMachines]);

  /* ================= GSAP INTRO ================= */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* INITIAL STATES */
      gsap.set(bigArrowRef.current, {
        x: 0,
        opacity: 1,
        scale: 2.4,
      });

      gsap.set(smallArrowRef.current, {
        x: -200,
        opacity: 0,
      });

      gsap.set(svgRef.current, {
        y: -700,
      });

      gsap.set(leftContentRef.current?.children || [], {
        y: 40,
        opacity: 0,
      });

      gsap.set(imageRef.current, {
        y: 80,
        opacity: 0,
      });

      /* TIMELINE */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

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

      // SVG DROP
      tl.to(
        svgRef.current,
        {
          y: 0,
          duration: 1.3,
          ease: 'power3.out',
        },
        '-=0.5'
      );

      // LEFT CONTENT (heading, text, stats, button)
      tl.to(
        leftContentRef.current?.children || [],
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.3'
      );

      // IMAGE LAST
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F4F1ED] overflow-hidden">

      {/* ================= BIG CENTER ARROW ================= */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div
  ref={bigArrowRef}
  className="bg-[#5b3428] text-white px-32 py-14 font-bold uppercase tracking-widest text-6xl shadow-2xl"
  style={{
    clipPath:
      'polygon(0 0, calc(100% - 80px) 0, 100% 50%, calc(100% - 80px) 100%, 0 100%)',
    transform: 'scale(2.4)',        // 👈 MATCHES PROJECTS
    transformOrigin: 'center',      // 👈 CRITICAL
  }}
>
  MACHINERY
</div>
      </div>

      {/* ================= HERO ================= */}
      <div className="relative h-screen overflow-hidden">

        {/* SVG BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <rect x="0" y="0" width="1440" height="900" fill="#F4F1ED" />
            <path
              d="
                M 0 900 C 104 612 236 889 337 747
                C 403 698 435 699 509 747
                C 613 804 654 622 697 537
                C 768 364 866 591 899 617
                C 990 753 1017 357 1117 308
                C 1247 251 1215 714 1440 424
                L 1440 0 L 0 0 Z
              "
              fill="#E0D4C3"
            />
          </svg>
        </div>

        {/* SMALL ARROW */}
        <div ref={smallArrowRef} className="absolute top-0 left-0 z-10">
          <div
            className="bg-[#5b3428] text-white px-16 py-6 font-bold uppercase tracking-widest text-4xl"
            style={{
              clipPath:
                'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)',
            }}
          >
            MACHINERY
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <div ref={leftContentRef} className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D]">
                  Advanced Machinery for Superior Construction
                </h2>

                <p className="text-gray-700 font-bold max-w-lg">
                  Our state-of-the-art machinery fleet represents a significant
                  investment in quality construction equipment. Each machine is
                  meticulously maintained and operated by trained professionals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
                  {[
                    { value: '30+', label: 'Machines & Equipment' },
                    { value: '₹50 Cr+', label: 'Fleet Investment' },
                    { value: '99%', label: 'Fleet Availability' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-6 text-center bg-transparent backdrop-blur-sm shadow-[0_18px_55px_rgba(15,23,42,0.15)]"
                    >
                      <p className="text-4xl font-extrabold text-[#1B365D]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-extrabold text-[#8B4F3D] uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BUTTON — UNCHANGED POSITION */}
                <div className="text-center mt-12">
                  <button
                    onClick={() => setShowMachines((prev) => !prev)}
                    className="bg-[#8B4F3D] hover:bg-[#2d5080] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2"
                  >
                    {showMachines ? 'Hide Fleet' : 'See our Fleet'}
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* IMAGE */}
              <div ref={imageRef} className="flex items-center justify-center">
                <img
                  src="/3D_Images/005b.png"
                  alt="Construction Machinery Fleet 3D"
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= EXPANDED CONTENT (UNCHANGED) ================= */}
      {showMachines && (
        <div
          ref={expandedRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="relative rounded-xl overflow-hidden h-64 group hover:shadow-lg transition-all"
                style={{
                  backgroundImage: `url('${machine.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <p className="text-6xl font-bold text-white">
                    {(machine.specs.match(/\d+/) || ['1'])[0]}
                  </p>
                  <h4 className="font-semibold text-white text-lg mt-4">
                    {machine.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
};

export default Machinery;
