// Skills.jsx
import React, { useEffect, useRef } from "react";
import "../styles.css";

const skills = [
  "HTML","CSS","JavaScript","React","JAVA","Git","Spring Boot","Figma","SQL","C","C++","Python",
];

export default function Skills() {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const copyCount = 3;

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const setInitial = () => {
      const totalWidth = inner.scrollWidth;
      const singleSetWidth = totalWidth / copyCount;
      container.scrollLeft = singleSetWidth;
    };

    setInitial();
    const onResize = () => setInitial();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onScroll = () => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const totalWidth = inner.scrollWidth;
    const singleSetWidth = totalWidth / copyCount;
    const maxScroll = singleSetWidth * 2;
    const cur = container.scrollLeft;
    const tolerance = 2;

    if (cur <= tolerance) {
      container.scrollLeft = cur + singleSetWidth;
    } else if (cur >= maxScroll - tolerance) {
      container.scrollLeft = cur - singleSetWidth;
    }
  };

  const items = Array.from({ length: copyCount }).flatMap(() =>
    skills.map((s) => s)
  );

  return (
    <section id="skills" className="section">
      <h2>Skills <span style={{ color: "#9aa7b2" }}>•</span></h2>

      <div
        className="skills-wrapper manual-scroll"
        ref={containerRef}
        onScroll={onScroll}
      >
        <div className="skills-scroll manual-inner" ref={innerRef}>
          {items.map((s, i) => (
            <div className="skill-pill" key={i}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
