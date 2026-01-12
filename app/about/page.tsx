'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
        className="relative w-[80vw] h-[80vh] bg-white rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.25)] grid grid-cols-[0.35fr_0.65fr]"
      >
        {/* LEFT – IMAGE */}
        <motion.div
          layoutId={`image-${active.name}-${id}`}
          transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="relative h-full overflow-hidden"
        >
          <img
            src={active.image}
            alt={active.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="relative flex flex-col p-12 overflow-y-auto"
        >
          <motion.h3
            layoutId={`title-${active.name}-${id}`}
            className="text-4xl font-bold text-black"
          >
            {active.name}
          </motion.h3>

          <motion.p
            layoutId={`role-${active.role}-${id}`}
            className="text-orange-500 font-semibold text-lg mt-2"
          >
            {active.role}
          </motion.p>

          <div className="mt-8 space-y-6 text-ms text-black/80 leading-relaxed">
            {active.content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <motion.button
            layoutId={`button-${active.name}-${id}`}
            onClick={closeCard}
            className="mt-auto self-start bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 "
          >
            Close Profile
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )}
</AnimatePresence>



      {/* ================= STORY ================= */}
      <section className="relative py-32 px-6">
        <div ref={storyRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Infrastructure built with intent and integrity
              </h1>
              <div className="h-px w-24 bg-orange-500 mb-8" />
              <p className="text-lg leading-relaxed text-black/80">
                Nia Infra Projects was founded with a clear purpose — to deliver dependable
                road and infrastructure solutions that strengthen connectivity and mobility.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-black/80">
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
<section className="py-32 px-6 bg-neutral-50">
  <div ref={leadersRef} className="max-w-6xl mx-auto">
    <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
      Leadership
    </span>
    <h2 className="text-4xl font-bold mb-14">
      People driving execution excellence
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
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
            className="relative h-[420px] overflow-hidden"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </motion.div>

          {/* TEXT */}
          <div className="absolute bottom-0 w-full p-6 text-white">
            <motion.h3
              layoutId={`title-${leader.name}-${id}`}
              className="text-2xl font-bold leading-tight"
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
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-white/10 backdrop-blur-md px-5 py-2 rounded-full hover:bg-white/20 transition"
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
      <section className="py-32 px-6">
        <div
          ref={missionVisionRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20"
        >
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Vision
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-6">
              Advancing reliable infrastructure networks
            </h2>
            <p className="text-lg text-black/80">
              Delivering durable, safe, and future-ready road networks.
            </p>
          </div>
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
              Mission
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-6">
              Executing roads with precision and trust
            </h2>
            <p className="text-lg text-black/80">
              Disciplined execution, in-house expertise, and long-term performance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
