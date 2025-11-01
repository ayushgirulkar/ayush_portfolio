import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import './styles.css'; // Ensure this is imported for your global styles

export default function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <motion.div
            className="hero-inner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1>
              Hello, I'm{' '}
              <motion.span
                className="accent"
                initial={{ backgroundPosition: '200% center' }}
                animate={{ backgroundPosition: '0% center' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              >
                Ayush Girulkar
              </motion.span>
            </h1>

            <motion.p
              className="lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              I'm a passionate full-stack developer with hands-on experience in building web applications using Java, Spring Boot, React, and modern database technologies. I enjoy developing complete end-to-end solutions — from backend APIs to responsive frontends. I love exploring new technologies, solving real-world problems, and continuously improving my coding skills through practical projects.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                  className="btn"
                  href="/assets/Ayush_Girulkar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Download Resume
              </a>
              <a className="btn btn-outline" href="#projects">
                See Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Floating animated background */}
          <motion.div
            className="hero-decor"
            aria-hidden
            animate={{
              y: [0, -10, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </section>

        {/* SECTION COMPONENTS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
