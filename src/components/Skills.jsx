import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "JAVA",
  "Git",
  "Spring Boot",
  "Figma",
  "SQL",
  "C",
  "C++",
  "Python",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills <span style={{ color: "#9aa7b2" }}>•</span>
      </motion.h2>

      <div className="skills-wrapper">
        {/* Looping scroll animation */}
        <motion.div
          className="skills-scroll"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((s, i) => (
            <motion.div
              key={i}
              className="skill-pill"
              whileHover={{ scale: 1.1, backgroundColor: "#1f2937" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {s}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
