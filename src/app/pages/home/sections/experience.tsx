'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// Type definitions
type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
  details?: string[]; // Tambahan field untuk detail pekerjaan
  logo: string; // URL logo perusahaan
};

// Data experiences
const experiences: Experience[] = [
  {
    company: "PT Bank Negara Indonesia",
    role: "Application Developer",
    duration: "2022 - Present",
    description: "Developed transaction systems and integration testing for banking applications.",
    details: [
      "Mastered Base24 issuer and acquirer interfaces for ATM and POS operations.",
      "Developed and enhanced banking middleware for ATM, POS, and online transactions using Base24 and ISO 8583 standards.",
      "Improved transaction flows and system capabilities for the New Prepaid System (POS/EDC Project) in BASE24.",
      "Contributed to the back-end development of the E-Channel Platform (IBANK, MBANK) using TAL (Base24) and COBOL.",
      "Integrated new payment channels across platforms, including ATM, internet banking, mobile banking, and EDC.",
      "Conducted system integration testing (SIT) for projects like the E-Channel Platform Jalin (ATM Project) and the New Prepaid System (EDC/POS).",
      "Conducted functionality tests of the Card Management System (CMS) to meet business requirements.",
      "Collaborated with team members to drive project goals and deliver results.",
    ],
    logo: "/bni.png", // Contoh URL logo BNI
  },
  {
    company: "Intership",
    role: "Android Developer",
    duration: "2021",
    description: "Built an attendance application capable of monitoring branch offices, distances, and employee positions.",
    details: [
      "Created an Android application to improve user experience in attendance and corporate marketing using Flutter.",
      "Developed an integrated attendance application with the Saraswanti server.",
      "Built an application to monitor branch offices, distances, and employee positions.",
    ],
    logo: "/saraswanti.png", // Contoh URL logo Intership
  },
];

// Animasi untuk container experience (stagger effect)
const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay antara animasi anak-anak (experience card)
    },
  },
};

// Animasi untuk experience card
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

// Animasi untuk logo perusahaan
const logoAnimation: Variants = {
  hover: { scale: 1.1, rotate: 5 }, // Efek hover pada logo
  tap: { scale: 0.9 }, // Efek saat logo di-klik
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Professional Experience
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation} // Menggunakan animasi container
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardAnimation} // Menggunakan animasi card
                whileHover={{ scale: 1.02 }} // Efek hover pada card
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    {/* Logo Perusahaan dengan Animasi */}
                    <motion.div
                      whileHover="hover"
                      whileTap="tap"
                      variants={logoAnimation}
                      className="w-16 h-16 rounded-full overflow-hidden"
                    >
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                    <p className="text-gray-600 mt-4">{exp.description}</p>
                    {/* Detail pekerjaan */}
                    {exp.details && (
                      <ul className="mt-4 space-y-2">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-gray-600 list-disc list-inside">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}