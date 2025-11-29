'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Award, value: 500, label: 'Projects Completed', gradient: 'from-red-500 to-orange-500' },
    { icon: Users, value: 200, label: 'Happy Clients', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Clock, value: 15, label: 'Years Experience', gradient: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, value: 98, label: 'Success Rate %', gradient: 'from-purple-500 to-pink-500' },
  ];

  const skills = [
    { name: 'Commercial Construction', value: 95 },
    { name: 'Residential Building', value: 90 },
    { name: 'Project Management', value: 98 },
    { name: 'Quality Assurance', value: 100 },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-royal-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-red rounded-full blur-3xl"></div>
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
            <span className="text-royal-blue">About</span>{' '}
            <span className="bg-gradient-to-r from-accent-red to-orange-500 bg-clip-text text-transparent">
              NIA Construction
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-royal-blue via-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming visions into architectural masterpieces with over 15 years of excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={cn(
                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br",
                stat.gradient
              )}></div>
              <div className="relative">
                <stat.icon className="w-12 h-12 text-royal-blue mx-auto mb-3" />
              </div>
              <h3 className="text-3xl font-bold text-royal-blue mb-1">{stat.value}+</h3>
              <p className="text-gray-600 font-semibold text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl font-bold text-royal-blue mb-6">Why Choose Us?</h3>
            <div className="space-y-4">
              {[
                'Industry-leading expertise and certified professionals',
                'State-of-the-art equipment and modern techniques',
                'Commitment to safety and environmental standards',
                'Transparent pricing and timely project delivery',
                'Comprehensive warranty and after-service support',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all group"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-royal-blue to-royal-blue-light rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white text-sm">{skill.name}</span>
                      <span className="font-bold text-white text-sm">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.value}%` } : {}}
                        transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-accent-red to-orange-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
