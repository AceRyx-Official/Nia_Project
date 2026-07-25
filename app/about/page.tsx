'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Award, Heart, Users, Leaf, HandHeart, Building2 } from 'lucide-react';
import { initializeGSAP } from '@/lib/gsap-utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import leaders from './leaders.json';

type Leader = {
  name: string;
  role: string;
  image: string;
  content: string[];
};

/* ================= CLOSE ICON ================= */
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

/* ================= PAGE ================= */
export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);
  const missionVisionRef = useRef<HTMLDivElement>(null);
  const image3DRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const csrRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<(typeof leaders)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  /* 🔒 Single unified close handler */
  const closeCard = () => {
    setActive(null);
  };

  /* Outside click always collapses back to the card */
  useOutsideClick(ref, closeCard);

  /* Escape key + scroll locking */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCard();
      }
    };

    document.body.style.overflow = active ? 'hidden' : 'auto';

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  /* ================= 3D IMAGE ================= */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = image3DRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    el.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(18px)
    `;
  };

  const handleMouseLeave = () => {
    const el = image3DRef.current;
    if (!el) return;

    el.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0px)
    `;
  };

  /* ================= GSAP ================= */
  useEffect(() => {
    const init = async () => {
      const { gsap, ScrollTrigger } = await initializeGSAP();
      if (!ScrollTrigger) return;

      const fadeUp = (el: Element) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      };

      storyRef.current && fadeUp(storyRef.current);
      leadersRef.current && fadeUp(leadersRef.current);
      missionVisionRef.current && fadeUp(missionVisionRef.current);
      clientsRef.current && fadeUp(clientsRef.current);
      certificationsRef.current && fadeUp(certificationsRef.current);
      csrRef.current && fadeUp(csrRef.current);

      gsap.utils.toArray('.leader-card-trigger').forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    };

    init();
  }, []);


 
  return (
    <main className="bg-white text-black overflow-hidden">
    <AnimatePresence>
  {active && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40"
        onClick={closeCard}
      />

      {/* Modal */}
      <motion.div
        ref={ref}
        layoutId={`card-${active.name}-${id}`}
        transition={{
          layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        }}
        className="relative w-[95vw] sm:w-[85vw] md:w-[80vw] max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.25)] flex flex-col md:grid md:grid-cols-[0.5fr_0.65fr] md:h-[80vh]"
      >
        {/* TOP/LEFT – IMAGE */}
        <motion.div
          layoutId={`image-${active.name}-${id}`}
          transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="relative h-52 sm:h-64 md:h-full overflow-hidden flex-shrink-0"
        >
          <img
            src={active.image}
            alt={active.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>

        {/* BOTTOM/RIGHT – CONTENT */}
        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="relative flex flex-col p-6 sm:p-8 md:p-12 overflow-y-auto"
        >
          <motion.h3
            layoutId={`title-${active.name}-${id}`}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
          >
            {active.name}
          </motion.h3>

          <motion.p
            layoutId={`role-${active.role}-${id}`}
            className="text-orange-500 font-semibold text-base sm:text-lg mt-2"
          >
            {active.role}
          </motion.p>

          <div className="mt-4 md:mt-8 space-y-4 md:space-y-6 text-sm md:text-base text-black/80 leading-relaxed">
            {active.content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <motion.button
            layoutId={`button-${active.name}-${id}`}
            onClick={closeCard}
            className="mt-6 md:mt-auto self-start bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600"
          >
            Close Profile
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )}
</AnimatePresence>



      {/* ================= STORY ================= */}
      <section className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div ref={storyRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Story
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Infrastructure built with intent and integrity
              </h1>
              <div className="h-px w-24 bg-orange-500 mb-8" />
              <p className="text-base sm:text-lg leading-relaxed text-black/80">
                Nia Infra Projects was founded with a clear purpose — to deliver dependable
                road and infrastructure solutions that strengthen connectivity and mobility.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-black/80">
                From road development to complex execution challenges, every project reflects
                precision, safety, and long-term performance.
              </p>
            </div>
            <div className="relative">
              <div
                ref={image3DRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 ease-out will-change-transform"
              >
                <img
                  src="/About/AI1.jpg"
                  alt="NIA Infrastructure"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* ================= LEADERS ================= */}
<section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-neutral-50">
  <div ref={leadersRef} className="max-w-6xl mx-auto">
    <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
      Leadership
    </span>
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14">
      People driving execution excellence
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 max-w-4xl mx-auto">
      {leaders.map((leader) => (
        <motion.div
          key={`card-${leader.name}-${id}`}
          layout
          layoutId={`card-${leader.name}-${id}`}
          onClick={() => setActive(leader)}
          transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="leader-card-trigger group relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.18)] transition-shadow cursor-pointer bg-black"
        >
          {/* IMAGE */}
          <motion.div
            layoutId={`image-${leader.name}-${id}`}
            transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
            className="relative h-64 sm:h-[360px] lg:h-[420px] overflow-hidden"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </motion.div>

          {/* TEXT */}
          <div className="absolute bottom-0 w-full p-4 sm:p-6 text-white">
            <motion.h3
              layoutId={`title-${leader.name}-${id}`}
              className="text-xl sm:text-2xl font-bold leading-tight"
            >
              {leader.name}
            </motion.h3>

            <motion.p
              layoutId={`role-${leader.role}-${id}`}
              className="text-orange-400 text-sm font-semibold mt-1"
            >
              {leader.role}
            </motion.p>

            <motion.button
              layoutId={`button-${leader.name}-${id}`}
              className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2 rounded-full hover:bg-white/20 transition"
            >
              View Profile <ChevronDown size={16} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div
          ref={missionVisionRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20"
        >
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-6">
              Advancing reliable infrastructure networks
            </h2>
            <p className="text-base sm:text-lg text-black/80">
              Delivering durable, safe, and future-ready road networks.
            </p>
          </div>
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-6">
              Executing roads with precision and trust
            </h2>
            <p className="text-base sm:text-lg text-black/80">
              Disciplined execution, in-house expertise, and long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-neutral-50">
        <div ref={clientsRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Our Clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto">
              We are proud to partner with government bodies and private enterprises 
              in delivering infrastructure excellence.
            </p>
          </div>

          {/* Central Circle Design with Grid */}
          <div className="relative">
            {/* Central Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#8B4F3D] flex items-center justify-center z-10 shadow-2xl">
              <div className="text-center text-white">
                <Building2 className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-2" />
                <span className="text-sm md:text-base font-semibold">NIA Infra</span>
                <span className="block text-xs md:text-sm opacity-80">Project</span>
              </div>
            </div>

            {/* Client Grid - Surrounding the center */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Placeholder clients - Replace with actual client logos */}
              {[
                { name: 'Client 1', placeholder: 'Government Body' },
                { name: 'Client 2', placeholder: 'Infrastructure Corp' },
                { name: 'Client 3', placeholder: 'Transport Authority' },
                { name: 'Client 4', placeholder: 'Development Agency' },
                { name: 'Client 5', placeholder: 'Municipal Council' },
                { name: 'Client 6', placeholder: 'Highway Authority' },
                { name: 'Client 7', placeholder: 'Urban Development' },
                { name: 'Client 8', placeholder: 'Public Works Dept' },
              ].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px] ${
                    (index === 1 || index === 2 || index === 5 || index === 6) ? 'md:mt-16' : ''
                  }`}
                >
                  {/* Placeholder for client logo */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-3">
                    <span className="text-2xl md:text-3xl font-bold text-gray-400">
                      {client.name.split(' ')[1]}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 text-center font-medium">
                    {client.placeholder}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-12 italic">
            * Client logos will be displayed upon confirmation
          </p>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div ref={certificationsRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quality & Compliance Standards
            </h2>
            <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto">
              Our certifications reflect our commitment to maintaining the highest standards 
              in construction quality, safety, and environmental responsibility.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Placeholder certificates - Replace with actual certificate images */}
            {[
              { 
                title: 'ISO 9001:2015', 
                description: 'Quality Management System',
                icon: Award,
                color: 'from-blue-500 to-blue-600'
              },
              { 
                title: 'ISO 14001:2015', 
                description: 'Environmental Management',
                icon: Leaf,
                color: 'from-green-500 to-green-600'
              },
              { 
                title: 'ISO 45001:2018', 
                description: 'Occupational Health & Safety',
                icon: Users,
                color: 'from-orange-500 to-orange-600'
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Certificate Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <cert.icon className="w-12 h-12 text-white" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-gray-200 rounded-lg opacity-30" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-gray-200 rounded-full opacity-30" />
                  
                  {/* Placeholder overlay */}
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <span className="text-xs text-gray-400 bg-white/80 px-3 py-1 rounded-full">
                      Certificate Image
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-12 italic">
            * Certificate images will be displayed upon company confirmation
          </p>
        </div>
      </section>

      {/* ================= CSR ================= */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#1e3a5f] to-[#0f1f3d] text-white">
        <div ref={csrRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Corporate Social Responsibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Building Communities, Not Just Roads
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
              At NIA Infra Project, we believe that true infrastructure development goes beyond 
              construction. We are committed to creating lasting positive impact in the 
              communities we serve.
            </p>
          </div>

          {/* CSR Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {[
              {
                icon: Heart,
                title: 'Community Welfare',
                description: 'Supporting local communities through employment opportunities, skill development programs, and educational initiatives for workers and their families.'
              },
              {
                icon: Leaf,
                title: 'Environmental Stewardship',
                description: 'Implementing sustainable construction practices, tree plantation drives, and minimizing environmental impact through responsible resource management.'
              },
              {
                icon: HandHeart,
                title: 'Social Development',
                description: 'Contributing to healthcare camps, sanitation facilities, and infrastructure support for underprivileged areas near our project sites.'
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-white/70 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent CSR Activities */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center">Recent CSR Activities</h3>
            
            {/* CSR Activity Cards - Placeholder for images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Tree Plantation Drive',
                  description: 'Planted 500+ saplings along highway corridors as part of our green initiative.',
                  date: 'December 2025'
                },
                {
                  title: 'Health Camp for Workers',
                  description: 'Organized free health check-ups and medical assistance for construction workers and their families.',
                  date: 'November 2025'
                },
                {
                  title: 'Skill Development Workshop',
                  description: 'Conducted training sessions for local youth in construction techniques and safety practices.',
                  date: 'October 2025'
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-2">
                        <Heart className="w-8 h-8 text-gray-400" />
                      </div>
                      <span className="text-xs text-gray-500 bg-white/80 px-3 py-1 rounded-full">
                        Activity Image
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs text-orange-500 font-semibold">{activity.date}</span>
                    <h4 className="text-lg font-bold text-[#1e3a5f] mt-1 mb-2">{activity.title}</h4>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-white/50 mt-8 italic">
              * Activity images will be displayed upon company confirmation
            </p>
          </div>

          {/* CSR Commitment Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-white/80 max-w-3xl mx-auto italic">
              &ldquo;We measure our success not just by the kilometers of road we build, 
              but by the lives we touch and the communities we uplift along the way.&rdquo;
            </p>
            <p className="text-orange-400 font-semibold mt-4">— NIA Infra Project Leadership Team</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
