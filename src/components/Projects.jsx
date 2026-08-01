import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const projects = [
  {
    title: "Civic Issue Reporting Platform ",
    desc: `Built an application for reporting and resolving local civic issues.
           Implemented JWT/OTP authentication, role-based admin workflows,
           geolocation-based issue discovery, image uploads via Cloudinary,
           voting/comments, notifications, and AI-powered issue summaries.`,
    media: "/assets/civic.png",
    codeLink: "https://github.com/ayushgirulkar/civic-issue-reporting-system",
    liveLink: "https://civic-issue-reporting-system-phi.vercel.app/",
  },
  {
    title: "Wildlife Alert",
    desc: "Flask project with YOLO model to detect fire and alert admin with map markers. (Not Deployed)",
    media: "/assets/wild.png",
    codeLink: "https://github.com/ayushgirulkar/Wildlife-Detector",
    liveLink: "https://drive.google.com/file/d/1SNn71GE3z1B3qyxmAeh_RujXknYcozUc/view?usp=sharing",
  },
  {
    title: "HomeChef_AI",
    desc: `

HomeChef_AI is a full-stack AI-powered application that helps users cook smarter, shop smarter, and eat healthier using Artificial Intelligence.

It combines AI recipe generation, ingredient detection from images, smart grocery search, personalized gym meal planning, multilingual support, and PDF export into one intelligent platform.`,
    media: "/assets/homechef.png",
    codeLink: "https://github.com/ayushgirulkar/HomeChef_AI",
    liveLink: "https://www.linkedin.com/posts/ayush-girulkar-bb3161219_ai-fullstackdevelopment-springboot-activity-7425208508910010368-R6Rd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADcEj3cBwTg46_YXWw0HrpO31dG2Aq8lcgc",
  },
  {
    title: "AI-QuizPlatform",
    desc: `AI-QuizApp is an interactive online quiz platform for educational purposes.
Automatically generates quizzes from text using the Gemini API.
Students can join quizzes with unique test codes.
Provides instant results and performance tracking.`,
    media: "/assets/quiz.png",
    codeLink: "https://github.com/ayushgirulkar/QuizProject",
    liveLink: "https://drive.google.com/file/d/1BI72_b9hWDH_nnkV5wFTvo918OwppJ6l/view?usp=sharing",
  },
  {
    title: "Extension_Simpler",
    desc: `A smart Chrome extension that enhances your browsing experience 
          using AI-powered tools like translation, synonyms, and text summarization.

`,
    media: "/assets/simpler.png",
    codeLink: "https://github.com/ayushgirulkar/Extension_Simpler",
    liveLink: "https://www.linkedin.com/posts/ayush-girulkar-bb3161219_webdevelopment-chromeextension-ai-ugcPost-7445546830077235200-NrRr/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADcEj3cBwTg46_YXWw0HrpO31dG2Aq8lcgc",
  },
   {
    title: "Evoting",
    desc: `A Django & React based e-voting system with 
           admin panel and voter flow. (Not Deployed).

`,
    media: "/assets/evote.png",
    codeLink: "https://github.com/ayushgirulkar/evoting",
    liveLink: "https://www.linkedin.com/posts/ayush-girulkar-bb3161219_voting-project-blockchain-activity-7248251152704659456-WNdz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADcEj3cBwTg46_YXWw0HrpO31dG2Aq8lcgc",
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
                  Live / Video
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
