'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import { Trophy, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigArrowRef = useRef<HTMLDivElement>(null);
  const smallArrowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= INITIAL STATE ================= */

      gsap.set(bigArrowRef.current, { x: 0, opacity: 1 });
      gsap.set(smallArrowRef.current, { x: -200, opacity: 0 });
      gsap.set(svgRef.current, { y: -550 });

  // ⬅ LEFT SIDE: Completed Projects cards
const completedCards = gsap.utils.toArray(
  '.completed-card'
);

// ➡ RIGHT SIDE: Ongoing Projects cards
const ongoingCards = gsap.utils.toArray(
  '.ongoing-card'
);

      
      const centerImage = sectionRef.current.querySelector(
        'img[alt="3D Construction Projects Visualization"]'
      );
      const ctaButtons = gsap.utils.toArray(
        'button'
      );

      // ⬅ Completed cards start outside screen (left)
gsap.set(completedCards, {
  x: -300, // 👈 increase for more slide distance
  opacity: 0,
});

// ➡ Ongoing cards start outside screen (right)
gsap.set(ongoingCards, {
  x: 300, // 👉 increase for more slide distance
  opacity: 0,
});

      // ⬆ Image starts slightly below and invisible
gsap.set(centerImage, {
  opacity: 0,
  y: 80, // 👈 adjust this for more / less upward movement
});

      gsap.set(ctaButtons, { opacity: 0 });

      /* ================= TIMELINE ================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      /* HOLD BIG ARROW */
      tl.to({}, { duration: 0.5 });

      /* BIG ARROW EXIT */
      tl.to(bigArrowRef.current, {
        x: '120vw',
        opacity: 0,
        duration: 1.4,
        ease: 'power4.inOut',
      });

      /* SMALL ARROW ENTRY */
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

      /* SVG SLIDE DOWN */
      tl.to(
        svgRef.current,
        {
          y: 0,
        
          duration: 1.3,
          ease: 'power3.out',
        },
        '-=0.4'
      );

      /* CARDS FADE IN */
     // ⬅ Completed cards slide in from left
tl.to(
  completedCards,
  {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
  },
  '-=0.2'
);

// ➡ Ongoing cards slide in from right (same time)
tl.to(
  ongoingCards,
  {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
  },
  '<' // 👈 plays simultaneously with completed cards
);

      /* IMAGE FADE UP */
tl.to(centerImage, {
  opacity: 1,
  y: 0, // ⬆ moves image back to its natural position
  duration: 1,
  ease: 'power3.out',
});

      /* CTA FADE IN */
      tl.to(ctaButtons, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 relative overflow-hidden bg-[#F4F1ED]"
    >
      
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
          PROJECTS
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
          PROJECTS
        </div>
      </div>

      {/* ================= SVG BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <rect x="0" y="0" width="1440" height="900" fill="#E0D4C3" />
          <path
            d="
           M 0 420 C 127 208 113 354 259 560 C 329 661 419 342 472 446 C 621 695 602 348 742 367 C 788 371 866 591 892 613 C 992 731 1017 357 1117 308 C 1247 251 1215 714 1440 424 L 1440 900 L 0 900 Z
            "
            fill="#F4F1ED"
          />
        </svg>
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24">
        <div className="space-y-8">
          {/* Three Column Layout: Card - Image - Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 items-center">

            {/* Left Card - Completed Projects (Desktop) */}
           <div className="completed-card hidden lg:block col-span-1 relative z-20">
              <div className="rounded-[28px] bg-transparent backdrop-blur-sm shadow-[0_18px_55px_rgba(15,23,42,0.15)] overflow-hidden">
                <div className="p-10 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 shadow-inner shadow-green-100">
                      <Trophy className="h-11 w-11" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      Completed Projects
                    </p>
                  </div>

                  <p className="text-5xl md:text-5xl font-extrabold text-green-600">
                    162 Roads
                  </p>
                </div>

                <div className="">
                  <div className="grid grid-cols-2  px-10 py-8 text-gray-900">
                    <div className="space-y-2 px-2">
                      <div className="flex items-center gap-2 text-green-600">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9h12M6 9l1-5h10l1 5M6 9v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9M8 20h8M9 14h6" />
                        </svg>
                        <span className="text-sm font-semibold">Amount</span>
                      </div>
                      <p className="text-2xl font-semibold">INR 500+ Crores</p>
                    </div>

                    <div className="space-y-2 px-2">
                      <div className="flex items-center gap-2 text-green-600">
                        <span className="rounded-md bg-transparent py-1 text-xs font-semibold">KM</span>
                        <span className="text-sm font-semibold">Distance</span>
                      </div>
                      <p className="text-2xl font-semibold">96 KM</p>
                    </div>
                  </div>

                  <div className="px-10 pb-10">
                    <div className="h-4 w-full rounded-full bg-green-100">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-green-500 to-emerald-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Image */}
            <div className="relative flex flex-col items-center justify-center order-first lg:order-none col-span-1">
              <div className="relative mb-24 w-full">
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/3D_Images/001b.png"
                    alt="3D Construction Projects Visualization"
                    className="w-full h-auto object-contain drop-shadow-2xl scale-100 lg:scale-150"
                  />
                </div>
              </div>
            </div>

            {/* Completed Projects (Mobile) */}
            <div className="completed-card lg:hidden px-2 sm:px-4 col-span-1 relative z-20">
              <div className="rounded-[20px] sm:rounded-[28px] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.15)] border border-gray-100 overflow-hidden">
                <div className="p-5 sm:p-10 space-y-4 sm:space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 shadow-inner shadow-green-100">
                      <Trophy className="h-9 sm:h-11 w-9 sm:w-11" />
                    </div>
                    <p className="text-lg sm:text-3xl font-semibold text-gray-900">
                      Completed Projects
                    </p>
                  </div>

                  <p className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-green-600">
                    162 Roads
                  </p>
                </div>

                <div className="border-t border-gray-100">
                  <div className="grid grid-cols-2 divide-x divide-gray-100 px-5 sm:px-10 py-4 sm:py-8 text-gray-900">
                    <div className="space-y-2">
                      <span className="text-xs sm:text-sm font-semibold text-green-600">Amount</span>
                      <p className="text-lg sm:text-3xl font-semibold">INR 500+ Crores</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs sm:text-sm font-semibold text-green-600">Distance</span>
                      <p className="text-lg sm:text-3xl font-semibold">96 KM</p>
                    </div>
                  </div>
                  <div className="px-5 sm:px-10 pb-5 sm:pb-10">
                    <div className="h-2.5 sm:h-4 w-full rounded-full bg-green-100">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* On Going Projects (Mobile) */}
            <div className="ongoing-card lg:hidden px-2 sm:px-4 col-span-1 relative z-20">
              <div className="rounded-[20px] sm:rounded-[28px] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.15)] border border-gray-100 overflow-hidden">
                <div className="p-5 sm:p-10 space-y-4 sm:space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner shadow-blue-100">
                      <Target className="h-9 sm:h-11 w-9 sm:w-11" />
                    </div>
                    <p className="text-lg sm:text-3xl font-semibold text-gray-900">
                      On Going Projects
                    </p>
                  </div>

                  <p className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-blue-600">
                    62 Roads
                  </p>
                </div>

                <div className="border-t border-gray-100">
                  <div className="grid grid-cols-2 divide-x divide-gray-100 px-5 sm:px-10 py-4 sm:py-8 text-gray-900">
                    <div className="space-y-2">
                      <span className="text-xs sm:text-sm font-semibold text-blue-600">Amount</span>
                      <p className="text-lg sm:text-3xl font-semibold">INR 403+ Crores</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs sm:text-sm font-semibold text-blue-600">Distance</span>
                      <p className="text-lg sm:text-3xl font-semibold">41.5 KM</p>
                    </div>
                  </div>
                  <div className="px-5 sm:px-10 pb-5 sm:pb-10">
                    <div className="h-2.5 sm:h-4 w-full rounded-full bg-blue-100">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* On Going Projects (Desktop) */}
            <div className="ongoing-card hidden lg:block col-span-1 relative z-20">
              <div className="rounded-[28px] bg-transpraent backdrop-blur-sm shadow-[0_18px_55px_rgba(15,23,42,0.15)]  overflow-hidden">
                <div className="p-10 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner shadow-blue-100">
                      <Target className="h-11 w-11" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      On Going Projects
                    </p>
                  </div>

                  <p className="text-5xl md:text-5xl font-extrabold text-blue-600">
                    62 Roads
                  </p>
                </div>

                <div className="">
                  <div className="grid grid-cols-2 px-10 py-8 text-gray-900">
                    <div className="space-y-2 px-2">
                      <div className="flex items-center gap-2 text-blue-600">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9h12M6 9l1-5h10l1 5M6 9v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9M8 20h8M9 14h6" />
                        </svg>
                        <span className="text-sm font-semibold">Amount</span>
                      </div>
                      <p className="text-2xl font-semibold">INR 403+ Crores</p>
                    </div>

                    <div className="space-y-2 px-2">
                      <div className="flex items-center gap-2 blue-600">
                        <span className="rounded-md bg-transparent text-blue-600 py-1 text-xs font-semibold">KM</span>
                        <span className="text-sm text-blue-600 font-semibold">Distance</span>
                      </div>
                      <p className="text-2xl  font-semibold">41.5 KM</p>
                    </div>
                  </div>
                  <div className="px-10 pb-10">
                    <div className="h-4 w-full rounded-full bg-blue-100">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden col-span-1 w-full px-2 sm:px-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors w-full">
                View All Projects
              </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex justify-center w-full px-4 mt-8">
            <Link href="/projects">
              <div className="w-full max-w-xs">
                <button className="bg-[#8B4F3D] hover:bg-[#a46565] text-[#ffffff] hover:text-[#ffffff] px-8 py-3 rounded-full font-semibold transition-colors w-full">
                  View All Projects
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
