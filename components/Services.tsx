'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative bg-[#E0D4C3]">
      {/* Arrow-shaped SERVICES text - top left */}
      <div className="absolute top-0 left-0 z-10">
        <div className="relative">
          <div className="bg-[#5b3428] text-white px-16 py-6 font-bold uppercase tracking-widest text-4xl"
               style={{
                 clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)'
               }}>
            SERVICES
          </div>
        </div>
      </div>

      <div className="max-w-screen-6xl mx-auto px-16 sm:px-6 lg:px-36 py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT SIDE — Title -> Image */}
          <div className="flex flex-col justify-start lg:order-1 max-w-4xl">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] leading-tight">
                Expert construction services for every need
              </h2>
            </div>

            {/* 3D Illustration */}
            <div className="w-full max-w-3xl mx-auto mt-6">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/3D_Images/004b.png"
                  alt="3D Construction Services Visualization"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Cards */}
          <div className="lg:flex lg:flex-col lg:justify-center lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

              {/* 1. Road Construction & Development */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-36 top-1/2 -translate-y-1/2 z-0 transition-all duration-300 group-hover:-right-36">
                  <Image
                    src="/Services/wrench.png"
                    alt="Road Construction"
                    width={384}
                    height={384}
                    className="w-90 h-90 object-contain opacity-60"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full text-[#482b01] justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl leading-tight text-[#1B365D] text-center group-hover:text-left group-hover:mb-4 transition-all duration-300">
                    Road Construction & Development
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Durable road networks and high-strength concrete road works.
                  </span>
                </div>
                {/* Striped strip at base */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-black via-white to-black" style={{backgroundImage: 'repeating-linear-gradient(90deg, black 0px, black 10px, white 10px, white 20px)'}}></div>
              </div>

              {/* 2. RMC */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-44 top-2/3 -translate-y-1/2 z-0 transition-all duration-300 group-hover:-right-44">
                  <Image
                    src="/Services/rings.png"
                    alt="RMC"
                    width={384}
                    height={384}
                    className="w-[28rem] h-[28rem] object-contain opacity-60"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full text-[#482b01] justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl leading-tight text-[#1B365D] text-center group-hover:text-left group-hover:mb-4 transition-all duration-300">
                    RMC (Ready Mix Concrete)
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    High-performance concrete with in-house batching and on-site delivery.
                  </span>
                </div>
                {/* Striped strip at base */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-black via-white to-black" style={{backgroundImage: 'repeating-linear-gradient(90deg, black 0px, black 10px, white 10px, white 20px)'}}></div>
              </div>

              {/* 3. Excavation Services */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-0 transition-all duration-300 group-hover:-right-16">
                  <Image
                    src="/Services/swirl.png"
                    alt="Excavation"
                    width={384}
                    height={384}
                    className="w-60 h-60 object-contain opacity-60"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full text-[#482b01] justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl leading-tight text-[#1B365D] text-center group-hover:text-left group-hover:mb-4 transition-all duration-300">
                    Excavation Services
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Foundation, site and utility excavation with expert handling.
                  </span>
                </div>
                {/* Striped strip at base */}
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage: 'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}}></div>
              </div>

              {/* 4. Infrastructure & Civil Works */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-20 top-2/4 -translate-y-1/2 z-0 transition-all duration-300 group-hover:-right-20">
                  <Image
                    src="/Services/Gear.png"
                    alt="Infrastructure"
                    width={384}
                    height={384}
                    className="w-80 h-80 object-contain opacity-60"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full text-[#482b01] justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl leading-tight text-[#1B365D] text-center group-hover:text-left group-hover:mb-4 transition-all duration-300">
                    Infrastructure & Civil Works
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Drainage, culverts, retaining walls, footpaths, medians and ducting work.
                  </span>
                </div>
                {/* Striped strip at base */}
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage: 'repeating-linear-gradient(90deg, #FFC107 0px, #FFC107 10px, black 10px, black 20px)'}}></div>
              </div>

              {/* 5. Machinery & Equipment Support */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-0 transition-all duration-300 group-hover:-right-20">
                  <Image
                    src="/Services/hammer.png"
                    alt="Machinery"
                    width={384}
                    height={384}
                    className="w-72 h-72 object-contain opacity-60"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full text-[#482b01] justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl leading-tight text-[#1B365D] text-center group-hover:text-left group-hover:mb-4 transition-all duration-300">
                    Machinery & Equipment Support
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Fleet of excavators, rollers, pavers, graders and on-site mechanical support.
                  </span>
                </div>
                {/* Striped strip at base */}
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage: 'repeating-linear-gradient(90deg, #1B365D 0px, #1B365D 10px, white 10px, white 20px)'}}></div>
              </div>

              {/* 6. Project Management & Turnkey */}
              <div className="group relative min-h-[160px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-0 transition-all duration-300 group-hover:-right-12">
                  <Image
                    src="/Services/helmet.png"
                    alt="Project Management"
                    width={384}
                    height={384}
                    className="w-80 h-80 object-contain opacity-60"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full text-[#482b01] justify-center items-center group-hover:justify-between group-hover:items-start transition-all duration-300">
                  <h4 className="font-bold text-xl leading-tight text-[#1B365D] text-center group-hover:text-left group-hover:mb-4 transition-all duration-300">
                    Project Management & Turnkey
                  </h4>
                  <span className="text-sm font-bold max-w-[70%] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    End-to-end turnkey execution with safety, quality and planned delivery.
                  </span>
                </div>
                {/* Striped strip at base */}
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{backgroundImage: 'repeating-linear-gradient(90deg, #1B365D 0px, #1B365D 10px, white 10px, white 20px)'}}></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
  