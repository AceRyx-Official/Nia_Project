'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Home, Hammer, Wrench, PaintBucket, Lightbulb, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Large-scale commercial projects with precision and efficiency for modern businesses',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Home,
      title: 'Residential Building',
      description: 'Custom homes designed and built to your exact specifications and dreams',
      gradient: 'from-red-600 to-orange-500',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces into modern masterpieces with expert craftsmanship',
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      icon: Wrench,
      title: 'Infrastructure Development',
      description: 'Roads, bridges, and essential infrastructure projects built to last',
      gradient: 'from-green-600 to-emerald-500',
    },
    {
      icon: PaintBucket,
      title: 'Interior Design',
      description: 'Complete interior solutions with aesthetic excellence and functionality',
      gradient: 'from-yellow-600 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: 'Consultation Services',
      description: 'Expert advice and planning for all your construction and design needs',
      gradient: 'from-indigo-600 to-purple-500',
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1e40af 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-royal-blue">Our</span>{' '}
            <span className="bg-gradient-to-r from-accent-red to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-royal-blue via-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction solutions tailored to meet your unique requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br",
                service.gradient
              )}></div>
              
              <div className="relative z-10">
                <div className={cn(
                  "w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-md bg-gradient-to-br",
                  service.gradient
                )}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-royal-blue group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 mb-4 leading-relaxed text-sm transition-colors">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="text-accent-red group-hover:text-white font-semibold flex items-center gap-2 text-sm transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent-red/10 rounded-bl-full group-hover:bg-white/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
