import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const skills = [
  { name: "JAVA", icon: "/assets/j.png" },
  { name: "C", icon: "/assets/c.png" },
  { name: "C++", icon: "/assets/cppp.png" },
  { name: "Python", icon: "/assets/p.png" },
  { name: "Springboot", icon: "/assets/s.png" },
  { name: "React", icon: "/assets/r.png" },
  { name: "SQL", icon: "/assets/sq.png" },
  { name: "JavaScript", icon: "/assets/js.png" },
  { name: "HTML", icon: "/assets/h.png" },
  { name: "CSS", icon: "/assets/css.png" },
  { name: "Figma", icon: "/assets/f.png" },
  { name: "Git", icon: "/assets/git.png" },
  { name: "PostMan", icon: "/assets/postman.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>
        Skills <span style={{ color: "#9aa7b2" }}>•</span>
      </h2>

      <div className="skills-grid-box">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
