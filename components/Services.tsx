'use client';

import Image from 'next/image';
import {
  Wrench,
  Blend,
  Construction,
  Building2,
  Cog,
  ShieldCheck,
} from 'lucide-react';

export default function Services() {
  return (
    <section className=" relative">
    

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT SIDE — Title -> Paragraph -> 3D Image */}
          <div className="flex flex-col justify-start lg:order-1 max-w-4xl">
            <div className="mb-6">
              <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                SERVICES
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* 1. Road Construction & Development */}
              <div className="relative min-h-[220px] p-6 rounded-xl shadow-xl overflow-hidden bg-white text-gray-900 border-b-4 border-yellow-500/80 transform hover:scale-[1.02] transition duration-300">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 1px, transparent 1px, transparent 6px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-4"
                  style={{
                    background:
                      'linear-gradient(90deg, #ffd54a 0 50%, #000 50% 100%)',
                    backgroundSize: '20px 100%',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-yellow-600">
                      <Wrench className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-xl leading-tight">
                      Road Construction & Development
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow">
                    Durable road networks and high-strength concrete road works.
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-semibold py-1 px-3 rounded-md bg-yellow-500 text-gray-900">
                      UNDER DEVELOPMENT
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. RMC (Ready Mix Concrete) */}
              <div className="relative min-h-[220px] p-6 rounded-xl shadow-xl overflow-hidden bg-white text-gray-900 border-b-4 border-yellow-500/80 transform hover:scale-[1.02] transition duration-300">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 1px, transparent 1px, transparent 6px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-4"
                  style={{
                    background:
                      'linear-gradient(90deg, #ffd54a 0 50%, #000 50% 100%)',
                    backgroundSize: '20px 100%',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-yellow-600">
                      <Blend className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-xl leading-tight">
                      RMC (Ready Mix Concrete)
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow">
                    High-performance RMC with in-house plant and on-site delivery.
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-semibold py-1 px-3 rounded-md bg-blue-600 text-white">
                      ON-SITE DELIVERY
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Excavation Services */}
              <div className="relative min-h-[220px] p-6 rounded-xl shadow-xl overflow-hidden bg-white text-gray-900 border-b-4 border-yellow-500/80 transform hover:scale-[1.02] transition duration-300">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 1px, transparent 1px, transparent 6px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-4"
                  style={{
                    background:
                      'linear-gradient(90deg, #ffd54a 0 50%, #000 50% 100%)',
                    backgroundSize: '20px 100%',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-yellow-600">
                      <Construction className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-xl leading-tight">
                      Excavation Services
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow">
                    Foundation, site and utility excavation with expert handling.
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-semibold py-1 px-3 rounded-md bg-green-500 text-white">
                      NORTH APPROVED
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Infrastructure & Civil Works */}
              <div className="relative min-h-[220px] p-6 rounded-xl shadow-xl overflow-hidden bg-white text-gray-900 border-b-4 border-yellow-500/80 transform hover:scale-[1.02] transition duration-300">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 1px, transparent 1px, transparent 6px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-4"
                  style={{
                    background:
                      'linear-gradient(90deg, #ffd54a 0 50%, #000 50% 100%)',
                    backgroundSize: '20px 100%',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-yellow-600">
                      <Building2 className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-xl leading-tight">
                      Infrastructure & Civil Works
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow">
                    Drainage, culverts, retaining walls, footpaths, medians and ducting work.
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-semibold py-1 px-3 rounded-md bg-purple-600 text-white">
                      SMART CITIES
                    </span>
                  </div>
                </div>
              </div>

              {/* 5. Machinery & Equipment Support */}
              <div className="relative min-h-[220px] p-6 rounded-xl shadow-xl overflow-hidden bg-white text-gray-900 border-b-4 border-yellow-500/80 transform hover:scale-[1.02] transition duration-300">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 1px, transparent 1px, transparent 6px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-4"
                  style={{
                    background:
                      'linear-gradient(90deg, #ffd54a 0 50%, #000 50% 100%)',
                    backgroundSize: '20px 100%',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-yellow-600">
                      <Cog className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-xl leading-tight">
                      Machinery & Equipment Support
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow">
                    Fleet of excavators, rollers, pavers, graders and on-site mechanical support.
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-semibold py-1 px-3 rounded-md bg-green-500 text-white">
                      FLEET STATUS: ONLINE
                    </span>
                  </div>
                </div>
              </div>

              {/* 6. Project Management & Turnkey */}
              <div className="relative min-h-[220px] p-6 rounded-xl shadow-xl overflow-hidden bg-white text-gray-900 border-b-4 border-yellow-500/80 transform hover:scale-[1.02] transition duration-300">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 1px, transparent 1px, transparent 6px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-4"
                  style={{
                    background:
                      'linear-gradient(90deg, #ffd54a 0 50%, #000 50% 100%)',
                    backgroundSize: '20px 100%',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-yellow-600">
                      <ShieldCheck className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-xl leading-tight">
                      Project Management & Turnkey
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow">
                    End-to-end turnkey execution, safety compliance and planned delivery.
                  </p>
                  <div className="mt-3">
                    <span className="text-xs font-semibold py-1 px-3 rounded-md bg-yellow-500 text-gray-900 shadow-md">
                      COMMERCE EXCELLENCE
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
