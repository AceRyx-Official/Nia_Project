'use client';

import { Building, Home, Hammer, Wrench } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-32 bg-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Right Content - 3D Illustration and Cards */}
          <div className="relative order-2 lg:order-1">
            {/* 3D Illustration */}
            <div className="relative mb-8">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/3D_Images/004b.png" 
                    alt="3D Construction Services Visualization"
                    className="w-full h-auto object-contain drop-shadow-2xl scale-125"
                  />
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Commercial Construction Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Building className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">COMMERCIAL</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-blue-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">Projects Done</span>
                    </div>
                    <span className="font-bold text-lg">250+</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-blue-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">Sq. Meters</span>
                    </div>
                    <span className="font-bold text-lg">50K+</span>
                  </div>
                </div>
              </div>

              {/* Residential Building Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Home className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">RESIDENTIAL</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Homes Built</span>
                    </div>
                    <span className="font-bold text-lg">180+</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Avg. Value</span>
                    </div>
                    <span className="font-bold text-lg">$420K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                SERVICES
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Expert construction services for every need
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              From commercial buildings to residential homes, we deliver exceptional construction services with precision, quality, and innovation. Our experienced team ensures every project meets the highest standards of excellence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Licensed professionals with 15+ years experience</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Quality materials and modern construction techniques</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">On-time delivery and budget-conscious approach</span>
              </div>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;