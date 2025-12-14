'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Route, Ruler, Clock, IndianRupee } from 'lucide-react';
import { useState } from 'react';

// Custom TailWind CSS for a better overlay on images
// NOTE: Ensure your Tailwind config includes custom classes if you want to use colors not in the default palette, but for this, we'll stick to utility classes for simplicity.

/* ================= BACKGROUND ================= */
const ModernBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Swapping orange-500/10 with an orange/pink hue for more depth */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #f97316 1px, transparent 1px),
          linear-gradient(to bottom, #f97316 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

/* ================= TYPES ================= */
interface BaseMetadata {
  cost: string;
  roadsCompleted: number;
  length: string;
  duration: string;
}

interface OngoingMetadata extends BaseMetadata {
  target: string;
}

interface ProjectCardData {
  title: string;
  src: string;
  metadata: BaseMetadata | OngoingMetadata;
}

/* ================= MAIN COMPONENT ================= */
const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCompleted, setHoveredCompleted] = useState<number | null>(null);
  const [hoveredOngoing, setHoveredOngoing] = useState<number | null>(null);

  /* ================= DATA ================= */
  const completedProjects: ProjectCardData[] = [
    {
      title: 'Achalpur Road Phase 1',
      src: 'https://images.unsplash.com/photo-1621544402532-1f1e1c6e4e5e?w=800&q=80',
      metadata: { cost: '127.59 Cr', roadsCompleted: 26, length: '16 km', duration: '20 months' },
    },
    {
      title: 'Ambernath Highway',
      src: 'https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=800&q=80',
      metadata: { cost: '51.82 Cr', roadsCompleted: 1, length: '5 km', duration: '16 months' },
    },
    {
      title: 'Hingoli Road Phase 1',
      src: '/Projects/Hingoli.jpeg',
      metadata: { cost: '106.44 Cr', roadsCompleted: 51, length: '14 km', duration: '18 months' },
    },
    {
      title: 'Hingoli Road Phase 2',
      src: '',
      metadata: { cost: '110.45 Cr', roadsCompleted: 39, length: '16 km', duration: '19 months' },
    },
    {
      title: 'Washim Project',
      src: '/Projects/washim.jpg',
      metadata: { cost: '100 Cr', roadsCompleted: 648, length: '45 km', duration: '24 months' },
    },
  ];

  const ongoingProjects: ProjectCardData[] = [
    {
      title: 'Basmat Road',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      metadata: { cost: '90.72 Cr', roadsCompleted: 23, length: '12.5 km', duration: '18 months', target: '12 months' },
    },
    {
      title: 'Achalpur Road Phase 2',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: { cost: '90.72 Cr', roadsCompleted: 24, length: '12.5 km', duration: '18 months', target: '12 months' },
    },
    {
      title: 'Dhamangaon Road',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: { cost: '60 Cr', roadsCompleted: 5, length: '5 km', duration: '18 months', target: '11 months' },
    },
    {
      title: 'Amravati Road Phase 1',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: { cost: '60 Cr', roadsCompleted: 4, length: '3.5 km', duration: '18 months', target: '10 months' },
    },
    {
      title: 'Amravati Road Phase 2',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: { cost: '102.5 Cr', roadsCompleted: 6, length: '8 km', duration: '18 months', target: '15 months' },
    },
  ];

  /* ================= METADATA ITEM ================= */
  const MetadataItem = ({ icon: Icon, label, value, delay }: any) => (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] }}
      className="flex items-center gap-3"
    >
      <div className="bg-orange-500/10 p-2 rounded-lg">
        <Icon className="w-4 h-4 text-orange-600" />
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </motion.div>
  );

  /* ================= CARD ================= */
  const ProjectCard = ({ card, index, hovered, setHovered, isOngoing }: any) => {
    const isHovered = hovered === index;
    const dim = hovered !== null && !isHovered;

    return (
      <motion.div
        layout
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="relative bg-white rounded-3xl overflow-hidden h-[500px] cursor-pointer shadow-lg group" // Added group for potential future styling
        animate={{
          filter: dim ? 'blur(4px)' : 'blur(0px)',
          opacity: dim ? 0.6 : 1,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img src={card.src} alt={card.title} className="w-full h-full object-cover" />
          {/* UPDATED: Darker, subtle overlay for better text contrast against light road images */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.35 }}
          />
        </div>

        {/* Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8">
          <div className="flex-1 flex items-end justify-center"> {/* Aligned content to bottom for non-hovered state */}
            <motion.h3
              animate={{
                y: isHovered ? -12 : 0,
                // On hover, title moves up and color switches to black to sit against the white metadata box/faded image.
                color: isHovered ? '#ffffff' : '#ffffffff', // text-gray-900 or white
              }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              className="text-4xl text-white text-center drop-shadow-lg font-extrabold" // ADDED: text-white and drop-shadow-lg for visibility
            >
              {card.title}
            </motion.h3>
          </div>

          <AnimatePresence mode="wait">
            {isHovered && (
              <motion.div
                key="meta"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                // Kept metadata box styling as it provides excellent contrast
                className="grid grid-cols-2 gap-4 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-orange-100 shadow-xl"
              >
                <MetadataItem icon={IndianRupee} label="Project Cost" value={card.metadata.cost} delay={0.05} />
                <MetadataItem icon={Route} label="Roads Completed" value={card.metadata.roadsCompleted} delay={0.1} />
                <MetadataItem icon={Ruler} label="Total Length" value={card.metadata.length} delay={0.15} />
                <MetadataItem icon={Clock} label="Duration" value={card.metadata.duration} delay={0.2} />
                {isOngoing && 'target' in card.metadata && (
                  <MetadataItem icon={Clock} label="Our Target" value={card.metadata.target} delay={0.25} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  /* ================= RENDER ================= */
  return (
    <section id="projects" className="relative py-32 bg-white overflow-hidden">
      <ModernBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold text-gray-900">
            Our <span className="text-orange-600">Projects</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Building infrastructure that connects communities and drives progress
          </p>
        </motion.div>

        {/* Completed Projects Section */}
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-orange-500 inline-block pb-1"
        >
          Completed Projects
        </motion.h3>
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((card, i) => (
            <ProjectCard
              key={card.title}
              card={card}
              index={i}
              hovered={hoveredCompleted}
              setHovered={setHoveredCompleted}
            />
          ))}
        </div>

        {/* Ongoing Projects Section */}
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-orange-500 inline-block pb-1"
        >
          Ongoing Projects
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map((card, i) => (
            <ProjectCard
              key={card.title}
              card={card}
              index={i}
              hovered={hoveredOngoing}
              setHovered={setHoveredOngoing}
              isOngoing
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;