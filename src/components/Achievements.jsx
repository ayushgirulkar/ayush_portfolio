// Achievements.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles.css"; // make sure the CSS below is included

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
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  // We'll render 3 copies: copyCount = 3
  const copyCount = 3;

  useEffect(() => {
    // On mount set scrollLeft to the middle copy
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Wait for layout (images might affect widths)
    const setInitial = () => {
      const totalWidth = inner.scrollWidth;
      const singleSetWidth = totalWidth / copyCount;
      // place scroller at the start of the middle set
      container.scrollLeft = singleSetWidth;
    };

    // images might not have loaded yet — wait a tick and set again
    setInitial();
    const onResize = () => setInitial();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // loop handler: if user scrolls too far left/right, jump across by one set
  const onScroll = () => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const totalWidth = inner.scrollWidth;
    const singleSetWidth = totalWidth / copyCount;
    const maxScroll = singleSetWidth * 2; // start of third set
    const cur = container.scrollLeft;

    // small tolerance to avoid jitter
    const tolerance = 2;

    if (cur <= tolerance) {
      // jumped to leftmost boundary — move forward by one set
      container.scrollLeft = cur + singleSetWidth;
    } else if (cur >= maxScroll - tolerance) {
      // reached rightmost boundary — move back by one set
      container.scrollLeft = cur - singleSetWidth;
    }
  };

  // Build 3 copies
  const items = Array.from({ length: copyCount }).flatMap(() =>
    certs.map((c) => c)
  );

  return (
    <section id="achievements" className="section">
      <h2>
        Achievements & Certificates <span style={{ color: "#9aa7b2" }}>•</span>
      </h2>

      <div
        className="certs-scroll manual-scroll"
        ref={containerRef}
        onScroll={onScroll}
      >
        <div className="scroll-inner manual-inner" ref={innerRef}>
          {items.map((c, i) => (
            <div
              className="cert-card"
              key={i}
              onClick={() => setOpen(i % certs.length)}
            >
              <img src={c.thumb} alt={c.title} />
              <div className="cert-info">
                <h4>{c.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP */}
      {open !== null && (
        <div
          className="modal-backdrop"
          onClick={() => setOpen(null)}
          role="presentation"
        >
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
