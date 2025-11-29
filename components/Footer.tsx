'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, link: '#', label: 'Facebook' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Instagram, link: '#', label: 'Instagram' },
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-royal-blue-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="font-bold text-2xl mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              NIA Construction
            </motion.h3>
            <p className="text-blue-200 mb-6 leading-relaxed text-sm">
              Building excellence since 2009. Your trusted partner for all construction needs with commitment to quality and innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/10 p-3 rounded-lg hover:bg-accent-red transition-all shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-200 hover:text-accent-red transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-red rounded-full"></span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4 text-sm">
              Subscribe to get updates on our latest projects
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 rounded-lg bg-white/10 border-2 border-white/20 focus:outline-none focus:border-accent-red text-white placeholder-blue-200 transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-accent-red text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all text-sm"
              >
                Subscribe <Mail size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-center md:text-left">
              &copy; {new Date().getFullYear()} NIA Construction. All rights reserved.
            </p>
            <div className="flex gap-8 text-blue-200">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-accent-red transition-colors font-semibold"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-accent-red transition-colors font-semibold"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
