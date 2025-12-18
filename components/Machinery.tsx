'use client';

import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import machines from './Machines.json';

const Machinery = () => {
  const [showMachines, setShowMachines] = useState(false);

  return (
    <section className="py-12 relative overflow-hidden bg-[#F4F1ED]">
      
      {/* ================= SVG BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
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

      {/* ================= SMALL ARROW TITLE ================= */}
      <div className="absolute top-0 left-0 z-10">
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

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] leading-tight">
              Advanced Machinery for Superior Construction
            </h2>

            <p className="text-gray-700 font-bold leading-relaxed max-w-lg">
              Our state-of-the-art machinery fleet represents a significant investment in quality construction equipment.
              Each machine is meticulously maintained and operated by trained professionals to ensure optimal performance
              and safety standards on every project.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-xl">
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
                  <p className="mt-2 text-sm font-extrabold text-[#8B4F3D] uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[32rem] lg:h-[36rem] flex items-center justify-center">
            <img
              src="/3D_Images/005b.png"
              alt="Construction Machinery Fleet 3D"
              className="w-full h-auto object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-2">
          <button
            onClick={() => setShowMachines(!showMachines)}
            className="bg-[#8B4F3D] hover:bg-[#2d5080] text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
          >
            {showMachines ? 'Hide Fleet' : 'See our Fleet'}
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* FLEET GRID */}
        {showMachines && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
        )}
      </div>
    </section>
  );
};

export default Machinery;
