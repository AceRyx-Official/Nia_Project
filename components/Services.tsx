'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative bg-[#ecddc9]">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              <div className="relative min-h-[200px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div
                  className="absolute inset-0 scale-[1.4]"
                  style={{
                    backgroundImage: "url('/Services/wrench.png')",
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full text-[#482b01]">
                  <h4 className="font-bold text-xl leading-tight mb-3">
                    Road Construction & Development
                  </h4>
                  <p className="text-sm flex-grow" />
                  <div className="mt-3">
                    <span className="text-xs font-bold">
                      Durable road networks and high-strength concrete road works.
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. RMC */}
              <div className="relative min-h-[200px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div
                  className="absolute inset-0 scale-[1.4]"
                  style={{
                    backgroundImage: "url('/Services/rings.png')",
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full text-[#482b01]">
                  <h4 className="font-bold text-xl leading-tight mb-3">
                    RMC (Ready Mix Concrete)
                  </h4>
                  <p className="text-sm flex-grow" />
                  <div className="mt-3">
                    <span className="text-xs font-bold">
                      High-performance concrete with in-house batching and on-site delivery.
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Excavation Services */}
              <div className="relative min-h-[200px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div
                  className="absolute inset-0 scale-[1.4]"
                  style={{
                    backgroundImage: "url('/Services/swirl.png')",
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full text-[#482b01]">
                  <h4 className="font-bold text-xl leading-tight mb-3">
                    Excavation Services
                  </h4>
                  <p className="text-sm flex-grow" />
                  <div className="mt-3">
                    <span className="text-xs font-bold">
                      Foundation, site and utility excavation with expert handling.
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Infrastructure & Civil Works */}
              <div className="relative min-h-[200px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div
                  className="absolute inset-0 scale-[1.4]"
                  style={{
                    backgroundImage: "url('/Services/Gear.png')",
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full text-[#482b01]">
                  <h4 className="font-bold text-xl leading-tight mb-3">
                    Infrastructure & Civil Works
                  </h4>
                  <p className="text-sm flex-grow" />
                  <div className="mt-3">
                    <span className="text-xs font-bold">
                      Drainage, culverts, retaining walls, footpaths, medians and ducting work.
                    </span>
                  </div>
                </div>
              </div>

              {/* 5. Machinery & Equipment Support */}
              <div className="relative min-h-[200px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div
                  className="absolute inset-0 scale-[1.4]"
                  style={{
                    backgroundImage: "url('/Services/hammer.png')",
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full text-[#482b01]">
                  <h4 className="font-bold text-xl leading-tight mb-3">
                    Machinery & Equipment Support
                  </h4>
                  <p className="text-sm flex-grow" />
                  <div className="mt-3">
                    <span className="text-xs font-bold">
                      Fleet of excavators, rollers, pavers, graders and on-site mechanical support.
                    </span>
                  </div>
                </div>
              </div>

              {/* 6. Project Management & Turnkey */}
              <div className="relative min-h-[200px] p-6 rounded-xl shadow-2xl drop-shadow-lg bg-[#F4F1ED] overflow-hidden transform hover:scale-[1.07] transition duration-300">
                <div
                  className="absolute inset-0 scale-[1.4]"
                  style={{
                    backgroundImage: "url('/Services/helmet.png')",
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full text-[#482b01]">
                  <h4 className="font-bold text-xl leading-tight mb-3">
                    Project Management & Turnkey
                  </h4>
                  <p className="text-sm flex-grow" />
                  <div className="mt-3">
                    <span className="text-xs font-bold">
                      End-to-end turnkey execution with safety, quality and planned delivery.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
  