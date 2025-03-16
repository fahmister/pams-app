'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

// Type definitions
type SkillCategory = {
  title: string;
  skills: string[];
  color: string;
};

type SkillCardProps = {
  title: string;
  skills: string[];
  color: string;
};

// Data skills dan warna yang sesuai
const skillsData: SkillCategory[] = [
  { title: 'Frontend Development', skills: ['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'], color: 'teal' },
  { title: 'Backend Development', skills: ['Node.js', 'PostgreSQL', 'REST API'], color: 'indigo' },
  { title: 'Tools & DevOps', skills: ['Git', 'Docker', 'Postman', 'Figma'], color: 'rose' },
  { title: 'Banking Application', skills: ['BASE24', 'Card Management System (CMS)', 'Java', 'SQL', 'TAL Programming'], color: 'amber' },
];

// Animasi untuk card
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

// Animasi untuk container kartu (stagger effect)
const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay antara animasi anak-anak (kartu)
    },
  },
};

// Animasi untuk skill tags
const skillAnimation: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

// Komponen SkillCard
const SkillCard: React.FC<SkillCardProps> = ({ title, skills, color }) => (
  <motion.div
    variants={cardAnimation} // Menggunakan animasi card
    whileHover={{ scale: 1.05 }} // Efek hover pada kartu
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
  >
    <h3 className={`text-xl font-semibold mb-4 text-${color}-600`}>{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
             <motion.span
             key={index}
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
           >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

// Komponen utama Skills
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation} // Menggunakan animasi container
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-800">My</span> <span className="text-teal-500">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((data, index) => (
              <SkillCard
                key={index}
                title={data.title}
                skills={data.skills}
                color={data.color}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;