'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Route, Ruler, Clock, IndianRupee } from 'lucide-react';
import { useState } from 'react';

// Modern Grid Background Component
const ModernBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient Orbs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
    
    {/* Grid Pattern */}
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

interface OngoingProjectMetadata {
  cost: string;
  roadsCompleted: number;
  length: string;
  duration: string;
  target: string;
}

interface CompletedProjectMetadata {
  cost: string;
  roadsCompleted: number;
  length: string;
  duration: string;
}

interface CompletedProjectCard {
  title: string;
  src: string;
  metadata: CompletedProjectMetadata;
}

interface OngoingProjectCard {
  title: string;
  src: string;
  metadata: OngoingProjectMetadata;
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCompleted, setHoveredCompleted] = useState<number | null>(null);
  const [hoveredOngoing, setHoveredOngoing] = useState<number | null>(null);

  const completedProjects: CompletedProjectCard[] = [
    {
      title: 'Achalpur Road Phase 1',
      src: 'https://images.unsplash.com/photo-1621544402532-1f1e1c6e4e5e?w=800&q=80',
      metadata: {
        cost: '127.59 Cr',
        roadsCompleted: 26,
        length: '16 km',
        duration: '20 months',
      },
    },
    {
      title: 'Ambernath Highway',
      src: 'https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=800&q=80',
      metadata: {
        cost: '51.82 Cr',
        roadsCompleted: 1,
        length: '5 km',
        duration: '16 months',
      },
    },
    {
      title: 'Hingoli Road Phase 1',
      src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
      metadata: {
        cost: '106.44 Cr',
        roadsCompleted: 51,
        length: '14 km',
        duration: '18 months',
      },
    },
    {
      title: 'Hingoli Road Phase 2',
      src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
      metadata: {
        cost: '110.45 Cr',
        roadsCompleted: 39,
        length: '16 km',
        duration: '19 months',
      },
    },
    {
      title: 'Washim Project',
      src: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
      metadata: {
        cost: '100 Cr',
        roadsCompleted: 648,
        length: '45 km',
        duration: '24 months',
      },
    },
  ];

  const ongoingProjects: OngoingProjectCard[] = [
    {
      title: 'Basmat Road',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      metadata: {
        cost: '90.72 Cr',
        roadsCompleted: 23,
        length: '12.5 km',
        duration: '18 months',
        target: '12 months',
      },
    },
    {
      title: 'Achalpur Road Phase 2',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: {
        cost: '90.72 Cr',
        roadsCompleted: 24,
        length: '12.5 km',
        duration: '18 months',
        target: '12 months',
      },
    },
    {
      title: 'Dhamangaon Road',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: {
        cost: '60 Cr',
        roadsCompleted: 5,
        length: '5 km',
        duration: '18 months',
        target: '11 months',
      },
    },
    {
      title: 'Amravati Road Phase 1',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: {
        cost: '60 Cr',
        roadsCompleted: 4,
        length: '3.5 km',
        duration: '18 months',
        target: '10 months',
      },
    },
    {
      title: 'Amravati Road Phase 2',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      metadata: {
        cost: '102.5 Cr',
        roadsCompleted: 6,
        length: '8 km',
        duration: '18 months',
        target: '15 months',
      },
    },
  ];

  const MetadataItem = ({
    icon: Icon,
    label,
    value,
    delay,
  }: {
    icon: any;
    label: string;
    value: string | number;
    delay: number;
  }) => (
    <motion.div
      className="flex items-center gap-3 text-gray-700"
      initial={{ opacity: 1, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="bg-orange-500/10 p-2 rounded-lg backdrop-blur-sm">
        <Icon className="w-4 h-4 text-orange-600" />
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </motion.div>
  );

  const ProjectCard = ({
    card,
    index,
    hovered,
    setHovered,
    isOngoing = false,
  }: {
    card: CompletedProjectCard | OngoingProjectCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    isOngoing?: boolean;
  }) => {
    const isHovered = hovered === index;
    const isAnyHovered = hovered !== null;

    return (
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px'}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="relative bg-white rounded-3xl overflow-hidden h-[500px] cursor-pointer shadow-lg hover:shadow-2xl will-change-[filter,opacity]"
        style={{
          filter: isAnyHovered && !isHovered ? 'blur(4px)' : 'blur(0px)',
          opacity: isAnyHovered && !isHovered ? 0.6 : 1,
          transition: 'filter 0.3s ease-out, opacity 0.3s ease-out, box-shadow 0.3s ease-out',
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/92 to-white/95" />
        </div>

        {/* Orange Accent Bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 origin-left"
          style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8">
          {/* Title */}
          <div className="flex-1 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-gray-900 text-center leading-tight transition-transform duration-300"
                style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0)' }}>
              {card.title}
            </h3>
          </div>

          {/* Metadata */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-4 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-orange-100 shadow-xl"
            >
              <MetadataItem
                icon={IndianRupee}
                label="Project Cost"
                value={card.metadata.cost}
                delay={0.05}
              />
              <MetadataItem
                icon={Route}
                label="Roads Completed"
                value={card.metadata.roadsCompleted}
                delay={0.1}
              />
              <MetadataItem
                icon={Ruler}
                label="Total Length"
                value={card.metadata.length}
                delay={0.15}
              />
              <MetadataItem
                icon={Clock}
                label="Duration"
                value={card.metadata.duration}
                delay={0.2}
              />
              {isOngoing && 'target' in card.metadata && (
                <MetadataItem
                  icon={Clock}
                  label="Our Target"
                  value={card.metadata.target}
                  delay={0.25}
                />
              )}
            </motion.div>
          )}
        </div>

        {/* Hover Border */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none border-2 transition-colors duration-300"
          style={{ 
            borderColor: isHovered ? 'rgba(249, 115, 22, 0.3)' : 'rgba(229, 231, 235, 0.5)' 
          }}
        />
      </motion.div>
    );
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-white">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <ModernBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-orange-600">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building infrastructure that connects communities and drives progress
          </motion.p>
        </motion.div>

        {/* Completed Projects */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-block relative">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Completed Projects
              </h3>
              <motion.div
                className="h-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8}}
              />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((card, index) => (
              <ProjectCard
                key={card.title}
                card={card}
                index={index}
                hovered={hoveredCompleted}
                setHovered={setHoveredCompleted}
                isOngoing={false}
              />
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-block relative">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Ongoing Projects
              </h3>
              <motion.div
                className="h-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((card, index) => (
              <ProjectCard
                key={card.title}
                card={card}
                index={index}
                hovered={hoveredOngoing}
                setHovered={setHoveredOngoing}
                isOngoing={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

)};

export default Projects; 