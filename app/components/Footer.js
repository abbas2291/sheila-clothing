import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      {/* Top CTA Band */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaOverline}>Ready for a Perfect Fit?</span>
            <h3 className={styles.ctaHeading}>Transform Your Wardrobe Today</h3>
          </div>
          <Link href="/contact" className={styles.ctaButton} id="footer-cta-button">
            Book Appointment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.footerMain}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <span className={styles.logoIcon}>✦</span>
              <div>
                <span className={styles.logoName}>SHEILA</span>
                <span className={styles.logoSub}>Alteration Clothing</span>
              </div>
            </Link>
            <p className={styles.footerDesc}>
              Expert clothing alterations in the heart of Singapore&apos;s Chinatown. 
              Precision tailoring with a personal touch, making every garment fit perfectly.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://wa.me/6585019131" target="_blank" rel="noopener noreferrer" className={styles.socialLink} id="footer-whatsapp" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+6585019131" className={styles.socialLink} id="footer-phone-link" aria-label="Call us">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Navigate</h4>
            <div className={styles.footerLinks}>
              <Link href="/" id="footer-link-home">Home</Link>
              <Link href="/about" id="footer-link-about">About Us</Link>
              <Link href="/services" id="footer-link-services">Services</Link>
              <Link href="/gallery" id="footer-link-gallery">Gallery</Link>
              <Link href="/contact" id="footer-link-contact">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Services</h4>
            <div className={styles.footerLinks}>
              <Link href="/services">Dress Alterations</Link>
              <Link href="/services">Suit Tailoring</Link>
              <Link href="/services">Wedding Gowns</Link>
              <Link href="/services">Hem & Resize</Link>
              <Link href="/services">Custom Fitting</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Visit Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p>#01-154 Chinatown Complex</p>
                  <p>Singapore 050335</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <p>+65 8501 9131</p>
              </div>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <p>Mon – Sat: 10am – 7pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomContent}>
          <p>&copy; {new Date().getFullYear()} SHEILA Alteration Clothing. All rights reserved.</p>
          <p className={styles.credit}>
            Crafted with care in Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
