'use client';

import { Building, Hammer, Wrench } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-32 bg-[#dbf2ff] relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use items-stretch so left and right cols match height; right col uses flex+justify-center on lg to vertically center content */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT SIDE — Title -> Paragraph -> 3D Image */}
<div className="order-1 flex flex-col justify-start">

  {/* Title */}
  <div className="mb-6">   {/* keep spacing between title and paragraph */}
    <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
      SERVICES
    </h3>

    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Expert construction services for every need
    </h2>
  </div>

  {/* Paragraph (unchanged) */}
  <p className="text-gray-600 text-lg leading-relaxed">
    Our company provides a comprehensive range of infrastructure and road-construction
    services. We deliver end-to-end solutions — from excavation and material supply to
    turnkey project execution and on-site equipment support.
  </p>

  {/* 3D Illustration */}
  <div className="w-full max-w-lg mx-auto mt-1">  {/* This reduces paragraph → image spacing */}
    <div className="relative transform hover:scale-105 transition-transform duration-500">
      <img
        src="/3D_Images/004b.png"
        alt="3D Construction Services Visualization"
        className="w-full h-auto object-contain drop-shadow-2xl"
      />
    </div>
  </div>

</div>

         {/* RIGHT SIDE — Cards (vertically centered on large screens) */}
<div className="order-2 lg:flex lg:flex-col lg:justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    {/* 1. Road Construction */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 min-h-[190px]">
      <div className="flex items-center space-x-4 mb-3">
        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
          <Hammer className="w-6 h-6 text-orange-500" />
        </div>
        <h4 className="font-semibold text-gray-900">Road Construction & Development</h4>
      </div>
      <p className="text-md text-gray-600">
        Durable road networks and high-strength concrete road works.
      </p>
    </div>

    {/* 2. RMC Concrete */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 min-h-[190px]">
      <div className="flex items-center space-x-4 mb-3">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 11h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 7v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 7v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4 className="font-semibold text-gray-900">RMC (Ready Mix Concrete)</h4>
      </div>
      <p className="text-md text-gray-600">
        High-performance RMC with in-house plant and on-site delivery.
      </p>
    </div>

    {/* 3. Excavation */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 min-h-[190px]">
      <div className="flex items-center space-x-4 mb-3">
        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 6v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4 className="font-semibold text-gray-900">Excavation Services</h4>
      </div>
      <p className="text-md text-gray-600">
        Foundation, site and utility excavation with expert handling.
      </p>
    </div>

    {/* 4. Civil Works */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 min-h-[190px]">
      <div className="flex items-center space-x-4 mb-3">
        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
          <Building className="w-6 h-6 text-purple-500" />
        </div>
        <h4 className="font-semibold text-gray-900">Infrastructure & Civil Works</h4>
      </div>
      <p className="text-md text-gray-600">
        Drainage, culverts, retaining walls, footpaths, medians and ducting work.
      </p>
    </div>

    {/* 5. Machinery Support */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 min-h-[190px]">
      <div className="flex items-center space-x-4 mb-3">
        <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 13h4l3-8 3 18 3-8 4 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4 className="font-semibold text-gray-900">Machinery & Equipment Support</h4>
      </div>
      <p className="text-md text-gray-600">
        Fleet of excavators, rollers, pavers, graders and on-site mechanical support.
      </p>
    </div>

    {/* 6. Project Management */}
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 min-h-[190px]">
      <div className="flex items-center space-x-4 mb-3">
        <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center">
          <Wrench className="w-6 h-6 text-rose-500" />
        </div>
        <h4 className="font-semibold text-gray-900">Project Management & Turnkey</h4>
      </div>
      <p className="text-md text-gray-600">
        End-to-end turnkey execution, safety compliance and planned delivery.
      </p>
    </div>

  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Services;
