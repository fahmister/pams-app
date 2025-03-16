'use client';

import { motion, Variants } from "framer-motion";
import { useState } from "react";

export default function About() {
  const skills = ['BASE24', 'ISO8583', 'Java', 'React', 'Node.js', 'AWS'];
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null); // State untuk menyimpan skill yang dipilih

  // Variants untuk animasi fade-in dan slide-in
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Menambahkan delay antara animasi anak-anak
      },
    },
  };

  const skillItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Handler untuk saat skill di-klik
  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill); // Set skill yang dipilih
    console.log(`You clicked on: ${skill}`); // Contoh aksi: log ke console
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bagian Teks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Experienced Full Stack Developer specializing in banking systems integration. 
              Currently working as Application Developer at PT Bank Negara Indonesia, 
              focused on transaction systems development and integration testing.
            </p>
          </motion.div>

          {/* Bagian Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-purple-600">Core Skills</h3>
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={staggerVariants}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={skillItemVariants}
                  whileHover={{ scale: 1.05 }} // Animasi saat hover
                  whileTap={{ scale: 0.95 }} // Animasi saat di-klik
                  // onClick={() => handleSkillClick(skill)} // Handler saat di-klik
                  className={`flex items-center p-6 bg-gray-50 rounded-lg cursor-pointer transition-colors ${
                    selectedSkill === skill ? "bg-purple-100 border border-purple-500" : ""
                  }`}
                >
                  <span className="text-purple-600 mr-2">▹</span>
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}