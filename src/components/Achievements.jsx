// Achievements.jsx
import React, { useState } from "react";
import "../styles.css";

const certs = [
  { title: "JAVA", thumb: "/assets/java.png", url: "https://..." },
  { title: "C++", thumb: "/assets/cpp.png", url: "https://..." },
  { title: "Generative AI", thumb: "/assets/ai.png", url: "https://..." },
  { title: "AI Tools", thumb: "/assets/tool.png", url: "https://..." },
  { title: "Devthon Competition", thumb: "/assets/devthon.png", url: "https://..." },
  { title: "Techno-Vision Competition", thumb: "/assets/techno.png", url: "https://..." },
];

export default function Achievements() {
  const [open, setOpen] = useState(null);

  return (
    <section id="achievements" className="section">
      <h2>
        Achievements & Certificates <span style={{ color: "#9aa7b2" }}>•</span>
      </h2>

      {/* Grid layout */}
      <div className="achievements-grid">
        {certs.map((c, i) => (
          <div
            className="achievement-card"
            key={i}
            onClick={() => setOpen(i)}
          >
            <img src={c.thumb} alt={c.title} className="achievement-img" />
            <p>{c.title}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open !== null && (
        <div className="modal-backdrop" onClick={() => setOpen(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
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
          </div>
        </div>
      )}
    </section>
  );
}
