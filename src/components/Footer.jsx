import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Ayush Girulkar</div>
      <div>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> ·
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"> LinkedIn</a> ·
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"> Instagram</a>
      </div>
    </footer>
  )
}
