'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import { Trophy, Target, Milestone, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigArrowRef = useRef<HTMLDivElement>(null);
  const smallArrowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
  const sectionEl = sectionRef.current;
  if (!sectionEl) return;

  const ctx = gsap.context(() => {
    gsap.set(bigArrowRef.current, { x: 0, opacity: 1 });
    gsap.set(smallArrowRef.current, { x: -200, opacity: 0 });
    gsap.set(svgRef.current, { y: -600 });

    const completedCards = gsap.utils.toArray('.completed-card');
    const ongoingCards = gsap.utils.toArray('.ongoing-card');

    const centerImage = sectionEl.querySelector(
      'img[alt="3D Construction Projects Visualization"]'
    );

    const ctaButtons = gsap.utils.toArray('button');

    gsap.set(completedCards, { x: -300, opacity: 0 });
    gsap.set(ongoingCards, { x: 300, opacity: 0 });

    if (centerImage) {
      gsap.set(centerImage, { opacity: 0, y: 80 });
    }

    gsap.set(ctaButtons, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 70%',
        toggleActions: 'play none none none',
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
      smallArrowRef.current,
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.7'
    );

    tl.to(
      svgRef.current,
      { y: 0, duration: 1.3, ease: 'power3.out' },
      '-=0.4'
    );

    tl.to(
      completedCards,
      { x: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out' },
      '-=0.2'
    );

    tl.to(
      ongoingCards,
      { x: 0, opacity: 1, duration: 1, stagger: 0.10, ease: 'power3.out' },
      '<'
    );

    if (centerImage) {
      tl.to(centerImage, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },'-=0.3');
    }

    tl.to(ctaButtons, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    },'-=0.5');
  }, sectionRef);

  return () => ctx.revert();
}, []);


return (
    <section
      ref={sectionRef}
      className="py-16 h-screen relative overflow-hidden bg-[#FEFEFE]"
    >
      {/* ================= BIG CENTER ARROW ================= */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          ref={bigArrowRef}
          className="bg-[#051747] text-white px-32 py-14 font-bold uppercase tracking-widest text-6xl shadow-2xl"
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
          className="bg-[#051747] text-white px-16 py-6 font-bold uppercase tracking-widest text-4xl"
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
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <rect width="1440" height="900" fill="#E7E9F0" />
          <path
            d=" M 0 420 C 127 208 113 354 259 560 C 329 661 419 342 472 446 C 621 695 602 348 742 367 C 788 371 866 591 892 613 C 992 731 1017 357 1117 308 C 1247 251 1215 714 1440 424 L 1440 900 L 0 900 Z"
            fill="#FEFEFE"
          />
          {/* d="
           M 0 420 C 127 208 113 354 259 560 C 329 661 419 342 472 446 C 621 695 602 348 742 367 C 788 371 866 591 892 613 C 992 731 1017 357 1117 308 C 1247 251 1215 714 1440 424 L 1440 900 L 0 900 Z
            " */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24">
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 items-center">

            {/* Completed Projects – Desktop */}
<div className="hidden lg:block col-span-1 relative z-20">
  <div className="rounded-[28px] bg-transparent backdrop-blur-sm shadow-[0_18px_55px_rgba(5,23,71,0.15)] overflow-hidden">
    <div className="p-10 space-y-8">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#E7E9F0] text-[#051747]">
          <Trophy className="h-11 w-11" />
        </div>
        <p className="text-xl font-semibold text-[#081F62]">
          Completed Projects
        </p>
      </div>

      <p className="text-5xl font-extrabold text-[#051747]">
        162 Roads
      </p>
    </div>

    {/* DETAILS */}
    <div className="grid grid-cols-2 px-10 py-8 text-[#081F62]">
      {/* Amount */}
      <div className="space-y-2 px-2">
        <div className="flex items-center gap-2 text-[#535F80]">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9h12M6 9l1-5h10l1 5M6 9v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9M8 20h8M9 14h6" />
          </svg>
          <span className="text-sm font-semibold">Amount</span>
        </div>
        <p className="text-2xl font-semibold">INR 500+ Crores</p>
      </div>

      {/* Distance */}
      <div className="space-y-2 px-2">
        <div className="flex items-center gap-2 text-[#535F80]">
          <Milestone className="h-5 w-5" />
          <span className="text-sm font-semibold">Distance</span>
        </div>
        <p className="text-2xl font-semibold">96 KM</p>
      </div>
    </div>

    {/* Progress */}
    <div className="px-10 pb-10">
      <div className="h-4 w-full rounded-full bg-[#E7E9F0]">
        <div className="h-full w-3/4 rounded-full bg-[#051747]" />
      </div>
    </div>
  </div>
</div>


            {/* Middle Image */}
            <div className="relative flex items-center justify-center col-span-1">
              <img
                src="/3DAssets/001Ab.png"
                alt="Projects Visualization"
                className="w-full h-auto object-contain drop-shadow-2xl scale-100 lg:scale-150"
              />
            </div>

            {/* Ongoing Projects – Desktop */}
<div className="hidden lg:block col-span-1 relative z-20">
  <div className="rounded-[28px] bg-transparent backdrop-blur-sm shadow-[0_18px_55px_rgba(5,23,71,0.15)] overflow-hidden">
    <div className="p-10 space-y-8">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#E7E9F0] text-[#081F62]">
          <Target className="h-11 w-11" />
        </div>
        <p className="text-xl font-semibold text-[#081F62]">
          On Going Projects
        </p>
      </div>

      <p className="text-5xl font-extrabold text-[#081F62]">
        62 Roads
      </p>
    </div>

    {/* DETAILS */}
    <div className="grid grid-cols-2 px-10 py-8 text-[#081F62]">
      {/* Amount */}
      <div className="space-y-2 px-2">
        <div className="flex items-center gap-2 text-[#535F80]">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9h12M6 9l1-5h10l1 5M6 9v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9M8 20h8M9 14h6" />
          </svg>
          <span className="text-sm font-semibold">Amount</span>
        </div>
        <p className="text-2xl font-semibold">INR 403+ Crores</p>
      </div>

      {/* Distance */}
      <div className="space-y-2 px-2">
        <div className="flex items-center gap-2 text-[#535F80]">
          <Milestone className="h-5 w-5" />
          <span className="text-sm font-semibold">Distance</span>
        </div>
        <p className="text-2xl font-semibold">41.5 KM</p>
      </div>
    </div>

    {/* Progress */}
    <div className="px-10 pb-10">
      <div className="h-4 w-full rounded-full bg-[#E7E9F0]">
        <div className="h-full w-2/3 rounded-full bg-[#081F62]" />
      </div>
    </div>
  </div>
</div>


            {/* Mobile CTA */}
            <div className="lg:hidden col-span-1 w-full px-2">
              <Link href="/projects">
                <button className="bg-[#051747] hover:bg-[#081F62] text-white px-6 py-3 rounded-full font-semibold w-full">
                  View All Projects
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex justify-center mt-4">
            <Link href="/projects">
              <button className="bg-[#051747] hover:bg-[#081F62] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;