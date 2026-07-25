'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Building2,
  Target,
  Heart
} from 'lucide-react';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import { initializeGSAP } from '@/lib/gsap-utils';
import jobs from './jobs.json';

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
};

export default function CareersPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await initializeGSAP();

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
      }

      if (valuesRef.current) {
        const cards = valuesRef.current.querySelectorAll('.value-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
        );
      }

      if (jobsRef.current) {
        const jobCards = jobsRef.current.querySelectorAll('.job-card');
        gsap.fromTo(
          jobCards,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.6 }
        );
      }
    };

    initAnimations();
  }, []);

  const companyValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, setting high standards for quality and performance.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaboration is at the heart of our success. We believe in the power of working together.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency, building trust with our clients and team.'
    },
    {
      icon: Building2,
      title: 'Growth',
      description: 'We invest in our people, providing opportunities for professional development and career advancement.'
    }
  ];

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-gradient-to-b from-[#F4F1ED] to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#1e3a5f] opacity-95" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/About/team-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-[#8B4F3D]/20 text-[#E0D4C3] rounded-full text-sm font-medium mb-6"
            >
              Join Our Team
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Build Your Career with
              <span className="block text-[#E0D4C3]">NIA Infra Project</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Join a team of dedicated professionals who are passionate about building 
              infrastructure that transforms communities. We offer exciting opportunities 
              for growth and development.
            </motion.p>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Why Work With Us
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                At NIA Infra Project, we believe our people are our greatest asset. 
                We foster an environment where talent thrives and careers flourish.
              </p>
            </div>

            <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div 
                  key={index}
                  className="value-card p-6 bg-gradient-to-br from-[#F4F1ED] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-4 group-hover:bg-[#8B4F3D] transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F4F1ED]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Current Openings
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Explore our open positions and find the perfect opportunity to advance your career 
                in infrastructure development.
              </p>
            </div>

            <div ref={jobsRef} className="space-y-6">
              {jobs.map((job: Job) => (
                <Link key={job.id} href={`/careers/${job.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="job-card bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-xs font-medium">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-[#8B4F3D]/10 text-[#8B4F3D] rounded-full text-xs font-medium">
                            {job.type}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#8B4F3D] transition-colors">
                          {job.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 md:mb-0 line-clamp-2">
                          {job.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap md:flex-col gap-3 md:gap-2 md:items-end md:min-w-[180px]">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e3a5f] group-hover:bg-[#8B4F3D] transition-colors duration-300">
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* No Openings Message - Hidden when there are jobs */}
            {jobs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">No Current Openings</h3>
                <p className="text-gray-500">
                  Check back later for new opportunities or send us your resume at{' '}
                  <a href="mailto:careers@niainfra.com" className="text-[#8B4F3D] hover:underline">
                    careers@niainfra.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1e3a5f]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Don&apos;t See the Right Position?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our team. 
              Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B4F3D] hover:bg-[#6d3d2f] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
    </PageTransitionWrapper>
  );
}
