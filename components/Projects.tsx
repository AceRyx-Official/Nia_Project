'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Skyline Tower',
      category: 'Commercial',
      location: 'Downtown District',
      year: '2024',
      gradient: 'from-blue-600 via-blue-500 to-purple-600',
    },
    {
      title: 'Luxury Villa Estate',
      category: 'Residential',
      location: 'Hillside Avenue',
      year: '2023',
      gradient: 'from-pink-500 via-red-500 to-orange-500',
    },
    {
      title: 'Tech Hub Complex',
      category: 'Commercial',
      location: 'Innovation Park',
      year: '2024',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    },
    {
      title: 'Green Valley Homes',
      category: 'Residential',
      location: 'Suburban Area',
      year: '2023',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
    },
    {
      title: 'Metro Bridge Project',
      category: 'Infrastructure',
      location: 'City Center',
      year: '2024',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
    },
    {
      title: 'Riverside Mall',
      category: 'Commercial',
      location: 'Waterfront',
      year: '2023',
      gradient: 'from-teal-500 via-cyan-600 to-blue-700',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-royal-blue">Featured</span>{' '}
            <span className="bg-gradient-to-r from-accent-red to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-royal-blue via-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through completed masterpieces
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Project Image with Gradient */}
              <div className={cn(
                "relative h-56 overflow-hidden bg-gradient-to-br",
                project.gradient
              )}>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-white text-6xl font-bold opacity-20">NIA</div>
                </motion.div>
                
                {/* Overlay on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="bg-accent-red text-white p-4 rounded-full shadow-xl"
                  >
                    <ArrowUpRight size={20} />
                  </motion.button>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-red text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-royal-blue mb-3 group-hover:text-accent-red transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent-red" />
                    <span className="font-medium text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent-red" />
                    <span className="font-medium text-sm">{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
