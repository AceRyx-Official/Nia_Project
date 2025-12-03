'use client';

import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-gray-900 text-white relative">
      {/* Diagonal separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-blue-50">
        <svg className="w-full h-full" viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1200 0L1200 80L0 40V0Z" fill="rgb(239 246 255)"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                CONTACT US
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to start your next construction project?
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Get in touch with our expert team today. We're here to discuss your construction needs, provide detailed estimates, and answer any questions about bringing your vision to life with quality craftsmanship.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Free consultation and project estimation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">24/7 customer support throughout project lifecycle</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">Licensed professionals with 15+ years experience</span>
              </div>
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Get Free Quote
            </button>
          </div>

          {/* Right Content - 3D Illustration and Cards */}
          <div className="relative">
            {/* 3D Illustration */}
            <div className="relative mb-8">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/3D_Images/002b.png" 
                    alt="3D Contact Us Visualization"
                    className="w-full h-auto object-contain drop-shadow-2xl scale-125"
                  />
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">REACH US</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-orange-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">Phone</span>
                    </div>
                    <span className="font-bold text-sm">24/7</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 border-2 border-dashed border-orange-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">Email</span>
                    </div>
                    <span className="font-bold text-sm">1hr</span>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">RESPONSE</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-sm text-gray-600">Chat Support</span>
                    </div>
                    <span className="font-bold text-lg">5min</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-sm text-gray-600">Email Quote</span>
                    </div>
                    <span className="font-bold text-lg">2hrs</span>
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

export default Contact;