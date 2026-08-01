import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const SERVICE_ID = 'service_16dletq'
  const TEMPLATE_ID = 'template_rg8jxdl'
  const PUBLIC_KEY = '8qe9EHWgnmI1Oepuj'

  function update(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus('Message sent successfully ✅')
        setForm({ name: '', email: '', message: '' })
      })
      .catch((error) => {
  console.log("Error:", error);
  alert(JSON.stringify(error));
  setStatus("Failed to send ❌");
});
  }

  return (
    <section id="contact" className="section">
      <h2>Contact <span style={{ color: '#9aa7b2' }}>•</span></h2>
      <div style={{ marginTop: 12 }} className="contact-grid">
        <div className="card">
          <h3>Send a message</h3>
          <form className="form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
            <input name="email" placeholder="Your email" value={form.email} onChange={update} required />
            <textarea name="message" placeholder="Message" value={form.message} onChange={update} required />
            <button className="send" type="submit">Send</button>
            {status && <div style={{ marginTop: 8, color: '#9aa7b2' }}>{status}</div>}
          </form>
        </div>

        <aside>
          <div className="card">
            <h3>Find me on</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
              <a href="https://www.instagram.com/ayush_girulkar/" target="_blank" rel="noreferrer" className="icon-btn">Instagram</a>
              <a href="https://www.linkedin.com/in/ayush-girulkar-bb3161219/" target="_blank" rel="noreferrer" className="icon-btn">LinkedIn</a>
              <a href="https://github.com/ayushgirulkar?tab=repositories" target="_blank" rel="noreferrer" className="icon-btn">GitHub</a>
            </div>

            <div style={{ marginTop: 12, color: '#9aa7b2' }}>
              <div>
  Prefer direct email?{" "}
  <a
    href="mailto:girulkarayush@gmail.com"
    style={{
      color: "#e63946",
      textDecoration: "none",
    }}
  >
    girulkarayush@gmail.com
  </a>
</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
