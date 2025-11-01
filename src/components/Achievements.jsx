import React, { useState } from "react";
import { motion } from "framer-motion";

const certs = [
  { title: "JAVA", thumb: "/assets/java.png", url: "https://www.hackerrank.com/certificates/9eeeebf83388" },
  { title: "C++", thumb: "/assets/cpp.png", url: "https://www.linkedin.com/in/ayush-girulkar-bb3161219/details/certifications/1738166813776/single-media-viewer/?profileId=ACoAADcEj3cBwTg46_YXWw0HrpO31dG2Aq8lcgc" },
  { title: "Generative AI", thumb: "/assets/ai.png", url: "https://www.linkedin.com/learning/certificates/ed3a198d92385766f1885e9ee58242492e97911e6bac8e1a97de992d91c7fc9a?trk=share_certificate" },
  { title: "AI Tools", thumb: "/assets/tool.png", url: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997431329" },
  { title: "Devthon Competition", thumb: "/assets/devthon.png", url: "https://www.linkedin.com/in/ayush-girulkar-bb3161219/recent-activity/all/" },
  { title: "Techno-Vision Competition", thumb: "/assets/techno.png", url: "https://www.linkedin.com/in/ayush-girulkar-bb3161219/recent-activity/all/" },
];

export default function Achievements() {
  const [open, setOpen] = useState(null);

  return (
    <section id="achievements" className="section">
      <h2>
        Achievements & Certificates <span style={{ color: "#9aa7b2" }}>•</span>
      </h2>

      {/* LOOPING SCROLL ANIMATION */}
      <div className="certs-scroll">
        <motion.div
          className="scroll-inner"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
        >
          {[...certs, ...certs].map((c, i) => (
            <motion.div
              className="cert-card"
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setOpen(i % certs.length)}
            >
              <img src={c.thumb} alt={c.title} />
              <div className="cert-info">
                <h4>{c.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL POPUP */}
      {open !== null && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(null)}
        >
          <motion.div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{certs[open].title}</h3>
            <img src={certs[open].thumb} alt={certs[open].title} />
            <div className="modal-actions">
              <a
                className="btn btn-outline"
                href={certs[open].url}
                target="_blank"
                rel="noreferrer"
              >
                Open Certificate
              </a>
              <button className="btn" onClick={() => setOpen(null)}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
