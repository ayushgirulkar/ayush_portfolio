import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const projects = [
  {
    title: "E-Voting System",
    desc: "A Django & React based e-voting system with admin panel and voter flow. (Not Deployed)",
    media: "/assets/evoting.png",
    codeLink: "https://github.com/ayushgirulkar/evoting",
    liveLink: "https://drive.google.com/file/d/1FhB6BK09RuQf2y7lWMqHlSTutuqYAdok/view?usp=drive_link",
  },
  {
    title: "Wildlife Alert",
    desc: "Flask project with YOLO model to detect fire and alert admin with map markers. (Not Deployed)",
    media: "/assets/wild.png",
    codeLink: "https://github.com/ayushgirulkar/Wildlife-Detector",
    liveLink: "https://drive.google.com/file/d/1SNn71GE3z1B3qyxmAeh_RujXknYcozUc/view?usp=sharing",
  },
  {
    title: "PassQube",
    desc: "A user-friendly website that lets you easily save, edit, and delete all your website usernames and passwords. (Deployed)",
    media: "/assets/pass.png",
    codeLink: "https://github.com/ayushgirulkar/password_manager",
    liveLink: "https://passqube.vercel.app/",
  },
  {
    title: "Todo List",
    desc: "A user-friendly task management app with add, edit, delete, and filter features for completed/incomplete tasks. (Deployed)",
    media: "/assets/task.png",
    codeLink: "https://github.com/ayushgirulkar/ToDoList",
    liveLink: "https://taskpilot-ayush-ayush-girulkars-projects.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects <span style={{ color: "#9aa7b2" }}>•</span>
      </motion.h2>

      <div className="projects-grid" style={{ marginTop: 12 }}>
        {projects.map((p, i) => (
          <motion.article
            className="project"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className="project-media">
              {p.media.endsWith(".mp4") ? (
                <video
                  src={p.media}
                  controls
                  style={{
                    maxHeight: 180,
                    width: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <img
                  src={p.media}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>

            <div className="project-body">
              <h3 style={{ margin: 0 }}>{p.title}</h3>
              <p style={{ marginTop: 8, color: "#9aa7b2" }}>{p.desc}</p>

              <div
                className="project-actions"
                style={{ display: "flex", gap: "12px", marginTop: 8 }}
              >
                <a
                  className="btn btn-outline"
                  href={p.codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
                <a
                  className="btn"
                  href={p.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live / Details
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
