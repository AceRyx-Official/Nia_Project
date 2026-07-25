'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Briefcase, 
  Users,
  CheckCircle,
  Send,
  Building2,
  GraduationCap,
  Gift
} from 'lucide-react';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import { initializeGSAP } from '@/lib/gsap-utils';
import jobs from '../jobs.json';

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  
  const job = jobs.find((j: Job) => j.id === jobId) as Job | undefined;

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

      if (contentRef.current) {
        const sections = contentRef.current.querySelectorAll('.content-section');
        gsap.fromTo(
          sections,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
        );
      }

      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
        );
      }
    };

    initAnimations();
  }, []);

  if (!job) {
    return (
      <PageTransitionWrapper>
        <main className="min-h-screen bg-gradient-to-b from-[#F4F1ED] to-white pt-32">
          <div className="max-w-4xl mx-auto px-6 text-center py-20">
            <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">Position Not Found</h1>
            <p className="text-gray-600 mb-8">The job position you&apos;re looking for doesn&apos;t exist or has been filled.</p>
            <Link href="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white rounded-full font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Careers
              </motion.button>
            </Link>
          </div>
        </main>
      </PageTransitionWrapper>
    );
  }

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-gradient-to-b from-[#F4F1ED] to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#1e3a5f] opacity-95" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(/About/team-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-6">
            <Link href="/careers">
              <motion.button
                whileHover={{ x: -5 }}
                className="inline-flex items-center gap-2 text-[#E0D4C3] hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Positions
              </motion.button>
            </Link>

            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-1.5 bg-white/10 text-[#E0D4C3] rounded-full text-sm font-medium backdrop-blur-sm">
                {job.department}
              </span>
              <span className="px-4 py-1.5 bg-[#8B4F3D]/30 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                {job.type}
              </span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              {job.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-6 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#E0D4C3]" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#E0D4C3]" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E0D4C3]" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#E0D4C3]" />
                <span>{job.department}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div ref={contentRef} className="lg:col-span-2 space-y-10">
                {/* About the Role */}
                <div className="content-section bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1e3a5f]">About the Role</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="content-section bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#8B4F3D] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1e3a5f]">Key Responsibilities</h2>
                  </div>
                  <ul className="space-y-4">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[#1e3a5f]">{index + 1}</span>
                        </div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="content-section bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1e3a5f]">Requirements</h2>
                  </div>
                  <ul className="space-y-4">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#8B4F3D] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="content-section bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#8B4F3D] flex items-center justify-center">
                      <Gift className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1e3a5f]">Benefits & Perks</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {job.benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#F4F1ED] to-white rounded-xl"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div ref={sidebarRef} className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Apply Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Ready to Apply?</h3>
                    <p className="text-gray-600 text-sm mb-6">
                      Take the next step in your career. Send us your resume and cover letter.
                    </p>
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#8B4F3D] hover:bg-[#6d3d2f] text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg"
                      >
                        <Send className="w-5 h-5" />
                        Apply Now
                      </motion.button>
                    </Link>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      Or email your resume to careers@niainfra.com
                    </p>
                  </div>

                  {/* Job Summary Card */}
                  <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5080] rounded-2xl p-8 text-white">
                    <h3 className="text-lg font-bold mb-6">Position Summary</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Department</span>
                        <span className="font-medium">{job.department}</span>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Location</span>
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Job Type</span>
                        <span className="font-medium">{job.type}</span>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Experience</span>
                        <span className="font-medium">{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Share Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Share This Position</h3>
                    <p className="text-gray-600 text-sm">
                      Know someone who would be perfect for this role? Share this opportunity with them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Positions CTA */}
        <section className="py-16 bg-[#F4F1ED]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
              Explore Other Opportunities
            </h2>
            <p className="text-gray-600 mb-8">
              This role not the right fit? Check out our other open positions.
            </p>
            <Link href="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2d5080] text-white font-semibold rounded-full transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                View All Positions
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
    </PageTransitionWrapper>
  );
}
