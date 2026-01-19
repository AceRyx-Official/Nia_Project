'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, Building2, Download } from 'lucide-react';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import { motion } from 'framer-motion';
import { initializeGSAP } from '@/lib/gsap-utils';

// Initialize EmailJS - replace YOUR_PUBLIC_KEY with your key from https://dashboard.emailjs.com
emailjs.init('YOUR_PUBLIC_KEY');

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await initializeGSAP();
      
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.contact-card');
        gsap.fromTo(
          cards,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
        );
      }
    };

    initAnimations();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        'service_YOUR_SERVICE_ID', // Replace with your Service ID
        'template_YOUR_TEMPLATE_ID', // Replace with your Template ID
        {
          to_email: 'zwar4201@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }
      );

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please check your EmailJS setup.');
      console.error('EmailJS error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <PageTransitionWrapper>
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] to-[#E7E9F0]">
      
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-[#E7E9F0] to-[#FEFEFE] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#051747] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#081F62] rounded-full blur-3xl" />
        </div>

        <div
          ref={headerRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#535F80] text-sm font-semibold uppercase tracking-wider mb-4">
                GET IN TOUCH
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#051747]">
                Let's Build Together
              </h1>
              <p className="text-xl text-[#535F80] max-w-2xl mx-auto">
                Ready to start your next construction project? Our team is here to help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact Information */}
          <div ref={cardsRef} className="lg:col-span-2 space-y-4">

            {/* Download Brochure Button */}
            <motion.a
              href="/Contact/NIA INFRA - COMPANY PROFILE.pdf"
              download="NIA_INFRA_Company_Profile.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-3 p-5 bg-gradient-to-r from-[#051747] to-[#081F62] rounded-2xl shadow-lg hover:shadow-xl transition-all text-white font-semibold"
            >
              <Download className="w-5 h-5" />
              <span>Download Our Brochure</span>
            </motion.a>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="contact-card flex items-start space-x-4 p-5 bg-[#E7E9F0] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#535F80]/20"
            >
              <div className="bg-[#051747]/10 p-3 rounded-xl">
                <Mail className="w-5 h-5 text-[#051747]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#051747] mb-1">Email Us</h3>
                <a
                  href="mailto:zwar4201@gmail.com"
                  className="text-[#535F80] hover:text-[#051747] transition-colors text-sm"
                >
                  zwar4201@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="contact-card flex items-start space-x-4 p-5 bg-[#E7E9F0] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#535F80]/20"
            >
              <div className="bg-[#081F62]/10 p-3 rounded-xl">
                <Phone className="w-5 h-5 text-[#081F62]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#051747] mb-1">Call Us</h3>
                <a
                  href="tel:+1234567890"
                  className="text-[#535F80] hover:text-[#051747] transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="contact-card flex items-start space-x-4 p-5 bg-[#E7E9F0] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#535F80]/20"
            >
              <div className="bg-[#051747]/10 p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-[#051747]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#051747] mb-1">Visit Us</h3>
                <p className="text-[#535F80] text-sm">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </p>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="contact-card flex items-start space-x-4 p-5 bg-[#E7E9F0] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#535F80]/20"
            >
              <div className="bg-[#081F62]/10 p-3 rounded-xl">
                <Clock className="w-5 h-5 text-[#081F62]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#051747] mb-1">Business Hours</h3>
                <p className="text-[#535F80] text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat - Sun: Closed
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="lg:col-span-3 bg-[#E7E9F0] rounded-2xl shadow-xl p-8 border border-[#535F80]/20"
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-red-700 text-sm">{error}</p>
              </motion.div>
            )}

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="bg-[#051747]/10 p-4 rounded-full mb-6">
                  <CheckCircle className="w-16 h-16 text-[#051747]" />
                </div>
                <h3 className="text-2xl font-bold text-[#051747] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#535F80]">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#535F80]/30 focus:ring-2 focus:ring-[#051747] bg-white text-[#051747]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#535F80]/30 focus:ring-2 focus:ring-[#051747] bg-white text-[#051747]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#535F80]/30 bg-white text-[#051747]"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#535F80]/30 bg-white text-[#051747]"
                  />
                </div>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#535F80]/30 focus:ring-2 focus:ring-[#051747] resize-none bg-white text-[#051747]"
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#051747] to-[#081F62] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-12 bg-[#E7E9F0] rounded-2xl shadow-xl overflow-hidden border border-[#535F80]/20"
>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30136.966023006615!2d72.80031082880544!3d19.233568450075825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0ce3cd117f7%3A0x515d558b955bf692!2sBorivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1765800409994!5m2!1sen!2sin" 
    width="100%" 
    height="400" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full"
  />
</motion.div>

      </div>
    </div>
  </PageTransitionWrapper>
);
}