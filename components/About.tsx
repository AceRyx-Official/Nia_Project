'use client';
import Link from 'next/link';
import { Settings, Truck, HardHat } from 'lucide-react';

const About = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Content - Beige Section */}
        <div className="bg-[#D4C4B0] relative px-8 sm:px-12 lg:px-16 py-20 lg:py-32 flex items-center">
          <div className="max-w-xl mx-auto">
            <div className="space-y-6">
              <p className="text-[#8B6F47] text-sm font-semibold uppercase tracking-wider">
                BUILDING THE FUTURE, CONNECTING COMMUNITIES
              </p>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight">
                ABOUT NIA<br />INFRA PROJECTS
              </h2>
              
              <p className="text-gray-800 text-base leading-relaxed max-w-md">
                Nia Infra Projects is a public infrastructure specialist dedicated to the execution of urban roads, highways, and large-scale development. Each project is approached with a focus on safety, quality, and long-term performance. With a reputation built on disciplined execution and consistent delivery, I Niary Nia Infra partners with public authorities to build road infrastructure that strengthens connectivity and mobility.
              </p>

              {/* Three Pillars */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {/* Structured Planning */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 border-4 border-[#8B6F47] flex items-center justify-center mb-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/60 via-transparent to-transparent"></div>
                    <div className="absolute top-2 left-4 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
                    <div className="absolute top-3 left-6 w-20 h-20 bg-gradient-to-br from-gray-200/60 via-gray-300/40 to-transparent rounded-full blur-md"></div>
                    <Settings className="w-24 h-24 text-[#1e3a5f] relative z-10" />
                  </div>
                  <p className="text-[#1e3a5f] font-bold text-sm uppercase">
                    Structured<br />Planning
                  </p>
                </div>

                {/* Phased Execution */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 border-4 border-[#8B6F47] flex items-center justify-center mb-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/60 via-transparent to-transparent"></div>
                    <div className="absolute top-2 left-4 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
                    <div className="absolute top-3 left-6 w-20 h-20 bg-gradient-to-br from-gray-200/60 via-gray-300/40 to-transparent rounded-full blur-md"></div>
                    <Truck className="w-24 h-24 text-[#1e3a5f] relative z-10" />
                  </div>
                  <p className="text-[#1e3a5f] font-bold text-sm uppercase">
                    Phased<br />Execution
                  </p>
                </div>

                {/* On-Site Safety */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 border-4 border-[#8B6F47] flex items-center justify-center mb-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/60 via-transparent to-transparent"></div>
                    <div className="absolute top-2 left-4 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
                    <div className="absolute top-3 left-6 w-20 h-20 bg-gradient-to-br from-gray-200/60 via-gray-300/40 to-transparent rounded-full blur-md"></div>
                    <HardHat className="w-24 h-24 text-[#1e3a5f] relative z-10" />
                  </div>
                  <p className="text-[#1e3a5f] font-bold text-sm uppercase">
                    On-Site<br />Safety
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/about">
                  <button className="bg-[#1e3a5f] hover:bg-[#2d5080] text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                    LEARN MORE ABOUT NIA INFRA PROJECTS
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative dots pattern - top left */}
          <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#8B6F47] rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Right Content - Dark Blue Section with Layered Elements */}
        <div className="bg-[#2d4a6b] relative flex items-center justify-center px-8 py-20 lg:py-32 overflow-hidden">
          {/* Layered Blue Background Elements */}
          <div className="absolute inset-0 flex">
    <div className="w-1/4 bg-[#e7dfd2]" />
    <div className="w-1/4 bg-[#354e67]" />
    <div className="w-1/4 bg-[#16385a]" />
    <div className="w-1/4 bg-[#102132]" />
  </div>
          
          {/* Yellowish/Orange Accent Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#D4C4B0] to-[#8B6F47] rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-[#8B6F47] rounded-full opacity-15 blur-xl"></div>
      

          

          {/* 3D Illustration */}
          <div className="relative w-full max-w-4xl z-100 scale-90  ">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/3D_Images/001b.png" 
                alt="Infrastructure Development Visualization"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Decorative curved lines with gradient */}
            <div className="absolute -top-20 -right-10 w-64 h-64 border-2 border-[#4a6fa5] rounded-full opacity-40"></div>
            <div className="absolute -top-16 -right-14 w-56 h-56 border border-[#8B6F47] rounded-full opacity-30"></div>
          </div>

          {/* Multiple sparkle decorations */}
          <div className="absolute bottom-20 right-20 z-10">
            <svg className="w-12 h-12 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-32 right-1/3 z-10">
            <svg className="w-8 h-8 text-[#D4C4B0] opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
            </svg>
          </div>
          
          {/* Additional decorative dots scattered */}
          <div className="absolute bottom-1/4 right-12 grid grid-cols-3 gap-3 opacity-30 z-10">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#D4C4B0] rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;