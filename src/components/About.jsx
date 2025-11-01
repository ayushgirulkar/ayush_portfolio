import React from 'react';
import { motion } from 'framer-motion';
import ayushPhoto from '/assets/ayush.jpg'; // Correct asset import path

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About <span style={{ color: '#9aa7b2' }}>•</span>
      </motion.h2>

      <div className="about-grid" style={{ marginTop: 12 }}>
        {/* Main Profile Card */}
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="profile" style={{ display: 'flex', alignItems: 'center' }}>
            <motion.img
              src={ayushPhoto}
              alt="Ayush Girulkar"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #9aa7b2',
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            />

            <div className="meta" style={{ marginLeft: 12 }}>
              <motion.h3
                style={{ margin: '0 0 6px 0' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Ayush Girulkar
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Software Developer • Web Development • building creative, fast, accessible interfaces.
              </motion.p>

              <motion.div
                className="quick-links"
                style={{ marginTop: 8 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <a className="icon-btn" href="/assets/Ayush_Girulkar_Resume.pdf" download>
                  Resume
                </a>
                <a className="icon-btn" href="#projects">
                  Projects
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={{ marginTop: 12, color: '#b6c3cc' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p>
              I build enjoyable experiences on the web using modern tools (React, JS, HTML, CSS, Java, Spring Boot, MySQL).
              I focus on clean design, performance, and accessibility. Currently open to internships and job opportunities.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Aside */}
        <motion.aside
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h4 style={{ margin: '0 0 8px 0' }}>Contact</h4>
            <p style={{ margin: 0, color: '#9aa7b2' }}>
              Email: <a href="mailto:girulkarayush@gmail.com">girulkarayush@gmail.com</a>
            </p>
            <p style={{ marginTop: 6, color: '#9aa7b2' }}>Location: Amravati, Maharashtra, India</p>

            <motion.div
              style={{ marginTop: 12, display: 'flex', gap: '16px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                className="icon-btn"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="icon-btn"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

