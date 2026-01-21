'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, link: 'https://www.linkedin.com/company/nia-infra-project', label: 'LinkedIn' },
    { icon: Mail, link: '#', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#1B365D] to-[#0f1f3d] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B4F3D]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E0D4C3]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="pt-20 pb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-12 mb-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
              <div className=''>
                <motion.h2
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-2
             bg-gradient-to-r from-white via-[#E0D4C3] to-[#8B4F3D]
             bg-clip-text text-transparent"
                >
                  <img
                    src="/Nia Logo.svg"
                    alt="Nia Infra logo"
                    className="h-20 w-auto"
                  />
                  <span>Nia Infra Project</span>
                </motion.h2>

                <div className="h-1 w-16 bg-gradient-to-r from-[#8B4F3D] to-[#E0D4C3]" />
              </div>

              <p className="text-[#E0D4C3] leading-relaxed max-w-sm">
                Building excellence since 2009. We deliver innovative construction solutions with unwavering commitment to quality, safety, and customer satisfaction.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B4F3D] flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-[#8B4F3D] group"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="text-lg font-bold mb-6 text-[#F4F1ED]">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href={link.href} className="text-[#E0D4C3] hover:text-[#8B4F3D] text-sm font-medium transition-colors">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>



          </motion.div>


        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#E0D4C3] text-sm"
          >
            &copy; {new Date().getFullYear()} Nia Infra Project. Created By SocialVortex.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-8"
          >
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Cookie Policy', href: '#' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: '#8B4F3D' }}
                className="text-[#E0D4C3] hover:text-[#8B4F3D] text-sm font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
