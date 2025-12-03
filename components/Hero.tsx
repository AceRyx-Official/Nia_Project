'use client';

import { ArrowRight, Building2, HardHat, Ruler, Play, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import CurtainNavLink from './CurtainNavLink';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="hero-bg absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="\videos\Drone_Shot_Of_Empty_Road.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/70 to-black/80"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 floating-element" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          {/* Badge */}
          <div className="hero-subtitle mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl">
              <Sparkles className="w-5 h-5 text-accent-red" />
              <span className="text-white font-semibold">Premium Construction Services</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Your
            <br />
            <span className="bg-gradient-to-r from-accent-red via-red-400 to-orange-400 bg-clip-text text-transparent">
              Dreams Into Reality
            </span>
          </h1>
          
          <p className="hero-description text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
            Excellence in construction with innovative solutions and unmatched quality craftsmanship
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <CurtainNavLink
              href="#contact"
              className="group bg-gradient-to-r from-accent-red to-red-600 text-white px-8 py-3 rounded-lg font-semibold text-base shadow-xl flex items-center gap-2 hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </CurtainNavLink>
            <CurtainNavLink
              href="#projects"
              className="group bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-base shadow-xl flex items-center gap-2 hover:bg-white/20 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4" />
              View Our Work
            </CurtainNavLink>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Building2, number: '500+', text: 'Projects Completed' },
              { icon: HardHat, number: '15+', text: 'Years Experience' },
              { icon: Ruler, number: '98%', text: 'Client Satisfaction' },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/20 transition-all"
              >
                <item.icon className="w-10 h-10 text-accent-red mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white mb-1">{item.number}</h3>
                <p className="text-gray-200 font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-10 h-16 border-3 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
