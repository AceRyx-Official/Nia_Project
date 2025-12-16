'use client';
import Link from "next/link";
import { Trophy, Target } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#48484b]">
<div className="absolute top-0 left-0 w-[1600px] h-[600px] z-0 pointer-events-none">
  <svg viewBox="0 0 1600 600" className="w-full h-full">
    <defs>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E0D4C3" />
        <stop offset="40%" stopColor="#F4F1ED" />
        <stop offset="70%" stopColor="#E0D4C3" />
        <stop offset="100%" stopColor="#F4F1ED" />
      </linearGradient>

      <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>

    {/* Main ribbon */}
    <path
      d="
M 0 0 L 1063 1 C 400 1 0 100 -2 397 L -2 393 ZM 0 0
L 1063 1
C 630 260 325 330 -2 360
L -2 350
Z

      "
      fill="url(#ribbonGrad)"
    />
   
  </svg>
</div>

<div className="absolute bottom-0 right-0 w-[1600px] h-[600px] z-0 pointer-events-none">
  <svg viewBox="0 0 1600 600" className="w-full h-full">
    <defs>
      <linearGradient id="ribbonGradBottom" x1="100%" y1="0%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#E0D4C3" />
        <stop offset="30%" stopColor="#F4F1ED" />
        <stop offset="50%" stopColor="#E0D4C3" />
        <stop offset="70%" stopColor="#F4F1ED" />
        <stop offset="100%" stopColor="#E0D4C3" />
      </linearGradient>

      <linearGradient id="highlightGradBottom" x1="100%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>

    {/* Main ribbon */}
    <path
      d="
       M 1600 600 L 209 611 C 950 611 1450 450 1602 -4 Z

      "
      fill="url(#ribbonGradBottom)"
    />

  

    {/* White road dashes */}
    <path
      d="M 200 570 L 255 535
M 340 490 L 395 455
M 480 410 L 535 375
M 620 330 L 675 295
M 760 250 L 815 215
M 900 170 L 955 135
M 1040 90 L 1095 55
M 1180 10 L 1235 -25

"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="0"
      opacity="0.9"
    />
  </svg>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-8">
          <div>
            <h3 className="text-blue text-3xl font-semibold uppercase tracking-wider mb-4">
              PROJECTS
            </h3>
          </div>

          {/* Three Column Layout: Card - Image - Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 items-center">

            {/* Left Card - Completed Projects (Desktop) */}
            <div className="hidden lg:block  col-span-1 relative z-20">
              <div className="rounded-[28px] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.15)] border border-gray-100 overflow-hidden">
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

                <div className="border-t border-gray-100">
                  <div className="grid grid-cols-2 divide-x divide-gray-100 px-10 py-8 text-gray-900">
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
                        <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-semibold">KM</span>
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
            <div className="lg:hidden px-2 sm:px-4 col-span-1 relative z-20">
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
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-green-500 to-emerald-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* On Going Projects (Mobile) */}
            <div className="lg:hidden px-2 sm:px-4 col-span-1 relative z-20">
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
            <div className="hidden lg:block col-span-1 relative z-20">
              <div className="rounded-[28px] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.15)] border border-gray-100 overflow-hidden">
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

                <div className="border-t border-gray-100">
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
                        <span className="rounded-md bg-[#ecf5fe] px-2 py-1 text-xs font-semibold">KM</span>
                        <span className="text-sm font-semibold">Distance</span>
                      </div>
                      <p className="text-2xl font-semibold">41.5 KM</p>
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
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors w-full">
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
