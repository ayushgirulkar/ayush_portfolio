import React from "react";
import { motion } from "framer-motion";

const education = [
  { level: "10th (SSC)", school: "Manibai Gujrati High School, Amravati", year: "2021", grade: "97.60%" },
  { level: "Diploma", school: "Government Polytechnic Amravati", year: "2024", grade: "84.16%" },
  { level: "B.E CSE (In progress)", school: "Sipna College Of Engineering And Technology", year: "2027", grade: "8.6 CGPA" },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>
        Education <span style={{ color: "#9aa7b2" }}>•</span>
      </h2>
      <div className="edu-list" style={{ marginTop: 12 }}>
        {education.map((e, i) => (
          <motion.div
            key={i}
            className="edu-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>{e.level}</div>
              <div style={{ fontSize: 13, color: "#9aa7b2" }}>{e.school}</div>
            </div>
            <div style={{ textAlign: "right", color: "#9aa7b2" }}>
              <div>{e.year}</div>
              <div style={{ fontWeight: 700, color: "#fff" }}>{e.grade}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
