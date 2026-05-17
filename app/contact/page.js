'use client';
import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi SHEILA!\n\nI'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/6585019131?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const faqs = [
    { q: 'How long do alterations take?', a: 'Most are completed within 3-5 days. Same-day express service available for urgent needs.' },
    { q: 'Do I need an appointment?', a: 'Walk-ins welcome! Appointments ensure dedicated fitting time for complex alterations.' },
    { q: 'What should I bring?', a: 'Bring your garment, the shoes/undergarments you\'ll wear with it, and any reference photos.' },
    { q: 'Do you work with delicate fabrics?', a: 'Absolutely — silk, lace, chiffon, leather. Every fabric gets specialized handling.' },
    { q: 'What are your prices?', a: 'Prices vary by complexity. Simple hems from $10. We provide honest quotes upfront.' },
    { q: 'Satisfaction guarantee?', a: 'Yes! We\'ll adjust until perfect — at no extra charge.' },
  ];

  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay}></div>
        <Image src="/images/chinatown-complex.png" alt="Visit us" fill className={styles.heroImage} priority />
        <div className={styles.heroContent}>
          <span className="text-overline animate-fade-in-up delay-1">Get in Touch</span>
          <h1 className="heading-display animate-fade-in-up delay-2">Contact <span className="text-gold">Us</span></h1>
          <p className={`${styles.heroSub} animate-fade-in-up delay-3`}>Ready for a perfect fit? We&apos;re just a message away.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <ScrollReveal direction="left" className={styles.contactInfo}>
              <span className="text-overline">Visit Our Atelier</span>
              <h2 className={styles.infoHeading}>Let&apos;s Make Your Clothes <span className="text-gold">Perfect</span></h2>
              <div className="gold-line-left"></div>
              <p className={styles.infoText}>Whether you need a simple hem or a complete bridal fitting, we&apos;re here to help.</p>
              <div className={styles.infoCards}>
                <a href="https://www.google.com/maps/search/Chinatown+Complex+01-154+Singapore+050335" target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
                  <div className={styles.infoIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                  <div><strong>Location</strong><p>#01-154 Chinatown Complex<br/>Singapore 050335</p></div>
                </a>
                <a href="tel:+6585019131" className={styles.infoCard}>
                  <div className={styles.infoIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                  <div><strong>Phone</strong><p>+65 8501 9131</p></div>
                </a>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                  <div><strong>Hours</strong><p>Mon – Sat: 10am – 7pm<br/>Sunday: Closed</p></div>
                </div>
              </div>
              <div className={styles.quickActions}>
                <a href="https://wa.me/6585019131" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn} id="contact-whatsapp-btn">💬 Chat on WhatsApp</a>
                <a href="tel:+6585019131" className={styles.callBtn} id="contact-call-btn">📞 Call Us Now</a>
              </div>
              <div className={styles.mapContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.823!2d103.8420!3d1.2830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190f8a8b1c7d%3A0x3c5783b8c3f1a9e9!2sChinatown%20Complex!5e0!3m2!1sen!2ssg" width="100%" height="250" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" title="Location map" id="contact-map"></iframe>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className={styles.formWrapper}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Book an Appointment</h3>
                <p className={styles.formSubtitle}>Fill in the form and we&apos;ll reach out via WhatsApp</p>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
                    <div className={styles.formGroup}><label htmlFor="name">Full Name</label><input type="text" id="name" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required /></div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}><label htmlFor="phone">Phone</label><input type="tel" id="phone" name="phone" placeholder="+65 XXXX XXXX" value={formData.phone} onChange={handleChange} required /></div>
                      <div className={styles.formGroup}><label htmlFor="email">Email</label><input type="email" id="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} /></div>
                    </div>
                    <div className={styles.formGroup}><label htmlFor="service">Service Needed</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Select a service</option>
                        <option value="Dress Alteration">Dress Alteration</option>
                        <option value="Suit Tailoring">Suit Tailoring</option>
                        <option value="Wedding/Bridal">Wedding / Bridal</option>
                        <option value="Hemming & Resizing">Hemming & Resizing</option>
                        <option value="Custom Fitting">Custom Fitting</option>
                        <option value="Repairs & Mending">Repairs & Mending</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}><label htmlFor="message">Tell Us More</label><textarea id="message" name="message" rows="4" placeholder="Describe your alteration needs..." value={formData.message} onChange={handleChange}></textarea></div>
                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} id="contact-submit">Send via WhatsApp</button>
                  </form>
                ) : (
                  <div className={styles.successMessage} id="contact-success">
                    <span className={styles.successIcon}>✨</span>
                    <h4>Message Sent!</h4>
                    <p>WhatsApp should have opened. Otherwise reach us at <strong>+65 8501 9131</strong>.</p>
                    <button className="btn btn-outline" onClick={() => setSubmitted(false)} id="contact-send-another">Send Another Message</button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal><div className="section-header"><span className="text-overline">FAQ</span><h2 className="heading-section">Common <span className="text-gold">Questions</span></h2><div className="gold-line"></div></div></ScrollReveal>
          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={styles.faqCard} id={`faq-${i}`}>
                  <h4 className={styles.faqQuestion}>{faq.q}</h4>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
