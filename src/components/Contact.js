import './Contact.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace these with your EmailJS credentials
  const SERVICE_ID = 'service_b2fja7b';
  const TEMPLATE_ID = 'template_nocu90b';
  const PUBLIC_KEY = 'Q_N3DOFV_s2JqOWL3';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS sendForm
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      alert('Thank you for your message! I\'ll get back to you soon.');
      form.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container" id="Contact">
      <section className="contact-section">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="from_name" className="form-label">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="form-input"
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="from_email" className="form-label">Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className="form-input"
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="form-textarea"
              placeholder="Tell me about your project or just say hello..."
              disabled={isSubmitting}
            />
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            <span className="button-text">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="button-icon"
              aria-hidden="true"
            >
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.896 28.896 0 003.105 2.289z" />
            </svg>
          </button>
        </form>
      </section>
    </div>
  );
}