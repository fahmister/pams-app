'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// Type definitions
type Testimonial = {
  name: string;
  role: string;
  comment: string;
  image: string;
};

// Data testimonials
const testimonials: Testimonial[] = [
  {
    name: "Maimunah Cantik",
    role: "PT Bumbu Rujak Manis",
    comment: "Aku sudah kerja selama 2 tahun bareng fahmi dan dia orang yang sangat detail dalam pekerjaan!",
    image: "/kungfu.jpeg",
  },
  {
    name: "Zayn Malink",
    role: "PT Sunat Online Digital",
    comment: "Selama menjadi mentor intership fahmi di JKT48, Saya belajar banyak, eh maksutnya fahmi belajar banyak tentang bagaimana menjadi profesional dalam pekerjaan di situasi apapun",
    image: "/zayn.jpg",
  },
];

// Animasi untuk container testimonial (stagger effect)
const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay antara animasi anak-anak (testimonial card)
    },
  },
};

// Animasi untuk testimonial card
const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          What People Say
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation} // Menggunakan animasi container
        >
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardAnimation} // Menggunakan animasi card
                whileHover={{ scale: 1.02 }} // Efek hover pada card
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-purple-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}