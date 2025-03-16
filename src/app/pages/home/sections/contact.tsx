'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

// Animasi untuk container form (stagger effect)
const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay antara animasi anak-anak (form elements)
    },
  },
};

// Animasi untuk form elements
const formElementAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation} // Menggunakan animasi container
            className="space-y-6"
          >
            <motion.div variants={formElementAnimation}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  👤
                </span>
              </div>
            </motion.div>

            <motion.div variants={formElementAnimation}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ✉️
                </span>
              </div>
            </motion.div>

            <motion.div variants={formElementAnimation}>
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
                <span className="absolute left-4 top-4 text-gray-500">
                  💬
                </span>
              </div>
            </motion.div>

            <motion.div variants={formElementAnimation}>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}