'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: Mail, title: 'Email', info: 'info@niaconstruction.com', link: 'mailto:info@niaconstruction.com' },
    { icon: MapPin, title: 'Address', info: '123 Construction Ave, Building City', link: '#' },
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-royal-blue-900 via-royal-blue to-royal-blue-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent-red opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        />
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
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Get In <span className="text-accent-red">Touch</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent-red mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="text-base text-blue-100 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-royal-blue mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-royal-blue focus:outline-none transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-royal-blue focus:outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-royal-blue focus:outline-none transition-colors text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-royal-blue focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                type="submit"
                className="w-full bg-gradient-to-r from-royal-blue to-royal-blue-light text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all shadow-lg"
              >
                <div className="bg-accent-red p-3 rounded-lg shadow-lg">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-blue-100 text-sm">{item.info}</p>
                </div>
              </motion.a>
            ))}

            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 h-56 flex items-center justify-center shadow-lg"
            >
              <div className="text-center text-white">
                <MapPin size={40} className="mx-auto mb-4 text-accent-red" />
                <p className="font-bold text-lg mb-1">Visit Our Office</p>
                <p className="text-blue-100 text-sm">Map integration available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
