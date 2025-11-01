import React from 'react'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="brand">
        <div className="logo">AG</div>
        <div>
          <div style={{fontWeight:700}}>Ayush Girulkar</div>
          <div style={{fontSize:12,color:'#9aa7b2'}}>Portfolio</div>
        </div>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
