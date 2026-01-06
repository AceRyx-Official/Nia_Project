'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Route, Ruler, Clock, IndianRupee } from 'lucide-react';
import { useState } from 'react';

/* ================= BACKGROUND ================= */
const ModernBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Animated gradient orbs */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1B365D]/8 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B4F3D]/8 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, -50, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#E0D4C3]/6 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #1B365D 1px, transparent 1px),
          linear-gradient(to bottom, #1B365D 1px, transparent 1px)
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
      src: '/Projects/Achalpur1.jpeg',
      metadata: { cost: '127.59 Cr', roadsCompleted: 26, length: '16 km', duration: '20 months' },
    },
    {
      title: 'Ambernath Highway',
      src: '/Projects/Ambernath.jpeg',
      metadata: { cost: '51.82 Cr', roadsCompleted: 1, length: '5 km', duration: '16 months' },
    },
    {
      title: 'Hingoli Road Phase 1',
      src: '/Projects/Hingoli2.jpeg',
      metadata: { cost: '106.44 Cr', roadsCompleted: 51, length: '14 km', duration: '18 months' },
    },
    {
      title: 'Hingoli Road Phase 2',
      src: '/Projects/Hingoli.jpeg',
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
      src: '/Projects/Basmat.jpeg',
      metadata: { cost: '90.72 Cr', roadsCompleted: 23, length: '12.5 km', duration: '18 months', target: '12 months' },
    },
    {
      title: 'Achalpur Road Phase 2',
      src: '/Projects/Achalpur2.jpeg',
      metadata: { cost: '90.72 Cr', roadsCompleted: 24, length: '12.5 km', duration: '18 months', target: '12 months' },
    },
    {
      title: 'Dhamangaon Road',
      src: '/Projects/Dhamangaon.jpeg',
      metadata: { cost: '60 Cr', roadsCompleted: 5, length: '5 km', duration: '18 months', target: '11 months' },
    },
    {
      title: 'Amravati Road Phase 1',
      src: '/Projects/Amravati1.jpg',
      metadata: { cost: '60 Cr', roadsCompleted: 4, length: '3.5 km', duration: '18 months', target: '10 months' },
    },
    {
      title: 'Amravati Road Phase 2',
      src: '/Projects/Amravati2.jpg',
      metadata: { cost: '102.5 Cr', roadsCompleted: 6, length: '8 km', duration: '18 months', target: '15 months' },
    },
  ];

  /* ================= SECTION HEADER ================= */
  const SectionHeader = ({ title, subtitle, color }: any) => {
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
      <motion.div
        ref={headerRef}
        initial={{ opacity: 1, y: 0 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mb-12 relative"
      >
        <div className="flex items-center gap-4">
          {/* Bold vertical accent bar */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={headerInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className={`w-2 h-16 rounded-full ${
              color === 'blue' ? 'bg-[#1B365D]' : 'bg-[#8B4F3D]'
            }`}
            style={{ transformOrigin: 'top' }}
          />

          <div>
            <motion.h3
              initial={{ opacity: 1, x: 0 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-3xl md:text-4xl font-bold ${color === 'blue' ? 'text-[#1B365D]' : 'text-[#8B4F3D]'} uppercase tracking-tight`}
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 1, x: 0 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#8B4F3D]/70 mt-2 text-base font-medium"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </motion.div>
    );
  };

  /* ================= METADATA ITEM ================= */
  const MetadataItem = ({ icon: Icon, label, value, delay, isOngoing }: any) => (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] }}
      className="flex items-center gap-3"
    >
      <div className={`${isOngoing ? 'bg-[#8B4F3D]/10' : 'bg-[#1B365D]/10'} p-2 rounded-lg`}>
        <Icon className={`w-4 h-4 ${isOngoing ? 'text-[#8B4F3D]' : 'text-[#1B365D]'}`} />
      </div>
      <div>
        <p className="text-xs text-[#8B4F3D]/60">{label}</p>
        <p className="text-sm font-semibold text-[#8B4F3D]">{value}</p>
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
        className="relative bg-white rounded-3xl overflow-hidden h-[500px] cursor-pointer shadow-lg group"
        animate={{
          filter: dim ? 'blur(4px)' : 'blur(0px)',
          opacity: dim ? 0.6 : 1,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img src={card.src} alt={card.title} className="w-full h-full object-cover" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.35 }}
          />
        </div>

        {/* Accent */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 ${isOngoing ? 'bg-gradient-to-r from-[#8B4F3D] to-[#E0D4C3]' : 'bg-gradient-to-r from-[#1B365D] to-[#E0D4C3]'}`}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8">
          <div className="flex-1 flex items-end justify-center">
            <motion.h3
              animate={{
                y: isHovered ? -12 : 0,
                color: isHovered ? '#ffffff' : '#ffffffff',
              }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              className="text-4xl text-white text-center drop-shadow-lg font-extrabold"
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
                className="grid grid-cols-2 gap-4 bg-[#F4F1ED]/95 backdrop-blur-xl p-6 rounded-2xl border border-[#8B4F3D]/10 shadow-xl"
              >
                <MetadataItem icon={IndianRupee} label="Project Cost" value={card.metadata.cost} delay={0.05} isOngoing={isOngoing} />
                <MetadataItem icon={Route} label="Roads Completed" value={card.metadata.roadsCompleted} delay={0.1} isOngoing={isOngoing} />
                <MetadataItem icon={Ruler} label="Total Length" value={card.metadata.length} delay={0.15} isOngoing={isOngoing} />
                <MetadataItem icon={Clock} label="Duration" value={card.metadata.duration} delay={0.2} isOngoing={isOngoing} />
                {isOngoing && 'target' in card.metadata && (
                  <MetadataItem icon={Clock} label="Our Target" value={card.metadata.target} delay={0.25} isOngoing={isOngoing} />
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
    <section id="projects" className="relative py-32 bg-[#F4F1ED] overflow-hidden">
      <ModernBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >

          <h2 className="text-6xl font-bold mb-6">
            <span className="text-[#1B365D]">Our </span>
            <span className="text-[#8B4F3D]">Projects</span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-[#1B365D] via-[#8B4F3D] to-[#1B365D] mx-auto mb-6"
          />
          
          <p className="text-[#8B4F3D]/70 mt-6 max-w-2xl mx-auto text-lg">
            Building infrastructure that connects communities and drives progress
          </p>
        </motion.div>

        {/* Completed Projects Section */}
        <SectionHeader 
          title="Completed Projects" 
          subtitle="Successfully delivered infrastructure that stands the test of time"
          color="blue"
        />
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((card, i) => (
            <ProjectCard
              key={card.title}
              card={card}
              index={i}
              hovered={hoveredCompleted}
              setHovered={setHoveredCompleted}
              isOngoing={false}
            />
          ))}
        </div>

        {/* Ongoing Projects Section */}
        <SectionHeader 
          title="Ongoing Projects" 
          subtitle="Building tomorrow's infrastructure today"
          color="brown"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map((card, i) => (
            <ProjectCard
              key={card.title}
              card={card}
              index={i}
              hovered={hoveredOngoing}
              setHovered={setHoveredOngoing}
              isOngoing={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;