'use client';
import Link from 'next/link';
import { Lightbulb, Eye } from 'lucide-react';

const About = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                ACQUIRING
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bid smarter and acquire land faster
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Spectra helps infrastructure developers use aerial maps and 3-D models to classify land use for time-sensitive land acquisition, enhance detailed project reports and estimate costs/timelines of construction with greater accuracy.
            </p>
            <Link href="/about">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Learn More
            </button>
            </Link>
          </div>

          {/* Right Content - 3D Illustration and Cards */}
          <div className="relative">
            {/* 3D Illustration */}
            <div className="relative mb-8">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/3D_Images/001b.png" 
                    alt="3D Construction Visualization"
                    className="w-full h-auto object-contain drop-shadow-2xl scale-125"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Land Acquisition Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">LAND ACQUISITION</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-orange-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">Built-up Area</span>
                    </div>
                    <span className="font-bold text-lg">5%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-orange-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">No. of trees</span>
                    </div>
                    <span className="font-bold text-lg">3408</span>
                  </div>
                </div>
              </div>

              {/* Overview Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Eye className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">OVERVIEW</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Total Length</span>
                    </div>
                    <span className="font-bold text-lg">260 km</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Corridor Width</span>
                    </div>
                    <span className="font-bold text-lg">50 m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;