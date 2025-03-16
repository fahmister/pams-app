'use client';

import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

// Type definitions
type Project = {
  title: string;
  description: string;
  tech: string[];
  details?: string; // Tambahan field untuk detail project
  image: string; // URL gambar untuk preview
};

// Data projects
const projects: Project[] = [
  {
    title: "Core Banking Enhancement",
    description: "Core banking system integration using BASE24",
    tech: ["Base24", "ISO8583", "Java", "Cobol"],
    details: "Designed and implemented a middleware solution for core banking systems, ensuring seamless integration with BASE24 and ISO8583 standards.",
    image: "/core.jpg", // Contoh URL gambar
  },
  {
    title: "ATM Enhancement",
    description: "Developed, debugged, and enhanced banking middleware transactions (ATM, POS, e-Channel) using Base24 following ISO 8583 messaging standards.",
    tech: ["Base24", "ISO8583", "Java", "Cobol"],
    details: "Improved ATM transaction processing by debugging and enhancing middleware functionalities, ensuring compliance with ISO 8583 standards.",
    image: "/bni.jpeg", // Contoh URL gambar
  },
  {
    title: "E-Channel Enhancement",
    description: "Created and designed ISO Specification message e-banking platform transaction (IBank, MBank, SMSBanking)",
    tech: ["Base24", "ISO8583", "Java", "Cobol"],
    details: "Enhanced e-banking platforms by designing ISO message specifications, improving transaction reliability and user experience.",
    image: "/wondr.jpeg", // Contoh URL gambar
  },
  {
    title: "New Prepaid Enhancement",
    description: "Integrated new payment channels EDC, improving transaction processes and system efficiency.",
    tech: ["Base24", "ISO8583", "Java", "Cobol"],
    details: "Developed a prepaid system integrating EDC payment channels, streamlining transaction processes and enhancing system efficiency.",
    image: "/tapcash.png", // Contoh URL gambar
  },
  {
    title: "Smart Mobility Android Application",
    description: "Designed and developed an Android-based public transportation app for Surabaya City .",
    tech: ["Flutter","Firebase"],
    details: "Designed and developed an Android-based public transportation app for Surabaya City as part of academic research (thesis project).",
    image: "/sby.jpeg", // Contoh URL gambar
  },
  {
    title: "GPS Integration for Employee Presence System",
    description: "Implemented GPS functionality for an Android-based employee attendance system Enabling real-time tracking and reporting for PT Saraswanti Utama.",
    tech: ["Flutter","Firebase"],
    details: "Designed and developed an Android-based public transportation app for Surabaya City as part of academic research (thesis project).",
    image: "/absen.png", // Contoh URL gambar
  },
];

// Animasi untuk container project (stagger effect)
const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay antara animasi anak-anak (project card)
    },
  },
};

// Animasi untuk project card
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

// Animasi untuk popup modal
const modalAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Featured Projects</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation} // Menggunakan animasi container
        >
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardAnimation} // Menggunakan animasi card
                whileHover={{ scale: 1.05 }} // Efek hover pada card
                onClick={() => openModal(project)} // Buka modal saat card di-klik
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                {/* Preview Gambar */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popup Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={modalAnimation} // Menggunakan animasi modal
              className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Gambar di Modal */}
              <div className="w-full h-48 overflow-hidden mb-6 rounded-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-700">{selectedProject.details}</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}