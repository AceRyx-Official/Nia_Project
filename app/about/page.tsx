'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { initializeGSAP } from '@/lib/gsap-utils';

/* ================= LEADER CARD ================= */
const LeaderCard = ({
  leader,
  isOpen,
  onToggle,
}: {
  leader: any;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="leader-card bg-white rounded-xl overflow-hidden border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.08)] transition-shadow">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="h-1 w-12 bg-orange-500 mb-6" />

        <h3 className="text-2xl font-semibold">{leader.name}</h3>

        <p className="text-orange-500 font-medium mt-1">{leader.role}</p>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="mt-6 flex items-center gap-2 text-sm font-semibold text-black hover:text-orange-500 transition-colors px-4 py-2 rounded-full"
        >
          {isOpen ? (
            <>
              Show Less <ChevronUp size={18} />
            </>
          ) : (
            <>
              Read More <ChevronDown size={18} />
            </>
          )}
        </button>

        {/* Expandable Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          {leader.content.map((text: string, i: number) => (
            <p key={i} className="mt-4 text-black/80 leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ================= PAGE ================= */
export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);
  const missionVisionRef = useRef<HTMLDivElement>(null);

  const image3DRef = useRef<HTMLDivElement>(null);

  const [openLeaders, setOpenLeaders] = useState<string[]>([]);

  const toggleLeader = (name: string) => {
    setOpenLeaders((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = image3DRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

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

      gsap.utils.toArray('.leader-card').forEach((card: any) => {
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

  const leaders = [
    {
      name: 'Jawaharlal Purohit',
      role: 'Managing Director',
      image: '/About/Biden.jpg',
      content: [
        'With over three decades of experience in infrastructure and road development, Mr. Jawaharlal Purohit has been the guiding force behind Nia Infra Projects.',
        'His leadership spans large-scale road works and public infrastructure projects, establishing the company as a reliable execution partner.',
      ],
    },
    {
      name: 'Ruchit Purohit',
      role: 'Chief Executive Officer',
      image: '/About/Biden.jpg',
      content: [
        'Mr. Ruchit Purohit brings a modern, performance-driven approach to infrastructure execution.',
        'He focuses on process optimization, technology adoption, and delivering projects aligned with national quality and safety standards.',
      ],
    },
    {
      name: 'Shilpan Joshi',
      role: 'Vice President - Finance',
      image: '/About/Biden.jpg',
      content: [
        'With over two decades at Nia Infra, Mr. Shilpan Joshi exemplifies consistency and financial discipline.',
        'He oversees financial planning and controls with clarity and foresight, ensuring stability across long-term infrastructure projects.',
      ],
    },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">

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

          <div className="grid md:grid-cols-3 gap-10">
            {leaders.map((leader) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                isOpen={openLeaders.includes(leader.name)}
                onToggle={() => toggleLeader(leader.name)}
              />
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
