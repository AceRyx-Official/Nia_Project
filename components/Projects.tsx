'use client';

import { MapPin, Calendar, Trophy, Target } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative">
      {/* Geometric separator */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white">
        <svg className="w-full h-full" viewBox="0 0 1200 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1200 0L1200 32L600 64L0 32V0Z" fill="white"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                PROJECTS
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Delivering excellence in every construction project
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our portfolio showcases diverse construction projects from residential complexes to commercial buildings. Each project reflects our commitment to quality, innovation, and client satisfaction with proven results across various sectors.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">500+ completed projects across multiple sectors</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Award-winning designs and sustainable construction</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">98% client satisfaction with on-time delivery</span>
              </div>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View Portfolio
            </button>
          </div>

          {/* Right Content - 3D Illustration and Cards */}
          <div className="relative">
            {/* 3D Illustration */}
            <div className="relative mb-8">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/3D_Images/003b.png" 
                    alt="3D Construction Projects Visualization"
                    className="w-full h-auto object-contain drop-shadow-2xl scale-125"
                  />
                </div>
              </div>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Completed Projects Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <Trophy className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">COMPLETED</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-green-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">This Year</span>
                    </div>
                    <span className="font-bold text-lg">85</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-green-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">Total Projects</span>
                    </div>
                    <span className="font-bold text-lg">500+</span>
                  </div>
                </div>
              </div>

              {/* Active Projects Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">ACTIVE</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">In Progress</span>
                    </div>
                    <span className="font-bold text-lg">24</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">Avg. Timeline</span>
                    </div>
                    <span className="font-bold text-lg">8mo</span>
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

export default Projects;