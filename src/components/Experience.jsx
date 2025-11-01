import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

export default function Experience() {
  const experiences = [
    {
      company: 'Skolliq',
      role: 'Software Developer Intern',
      duration: 'Aug 2025 - Sep 2025',
      description:
        'During my internship, I worked on building the backend and database for a school event management system. I created database tables and APIs to manage various events, including sports and cultural activities. Additionally, I contributed to designing the event section interface using Figma, ensuring a user-friendly and visually appealing layout.',
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.8, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, boxShadow: '0px 8px 20px rgba(0,0,0,0.3)' },
  };

  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience <span style={{ color: '#9aa7b2' }}>•</span>
      </motion.h2>

      <motion.div
        className="experience-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            className="exp-card"
            key={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {exp.company}
            </motion.h3>

            <motion.h4
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {exp.role}
            </motion.h4>

            <motion.p
              className="duration"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {exp.duration}
            </motion.p>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {exp.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
