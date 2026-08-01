import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Ayush Girulkar</div>
      <div>
        <a href="https://github.com/ayushgirulkar" target="_blank" rel="noreferrer">GitHub</a> ·
        <a href="https://www.linkedin.com/in/ayush-girulkar-bb3161219/" target="_blank" rel="noreferrer"> LinkedIn</a> ·
        <a href="ttps://www.instagram.com/ayush_girulkar/" target="_blank" rel="noreferrer"> Instagram</a>
      </div>
    </footer>
  )
}
