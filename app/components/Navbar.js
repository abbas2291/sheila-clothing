'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="main-navigation">
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <span className={styles.logoIcon}>✦</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>SHEILA</span>
            <span className={styles.logoTagline}>Alteration Clothing</span>
          </div>
        </Link>

        <div className={styles.navLinks} id="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
              <span className={styles.linkUnderline}></span>
            </Link>
          ))}
        </div>

        <Link href="/contact" className={styles.navCta} id="nav-cta-book">
          Book Now
        </Link>

        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} id="mobile-menu">
        <div className={styles.mobileMenuContent}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              id={`mobile-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.mobileCta} id="mobile-cta-book">
            Book an Appointment
          </Link>
          <div className={styles.mobileContact}>
            <a href="tel:+6585019131">+65 8501 9131</a>
            <a href="https://www.google.com/maps/search/Chinatown+Complex+01-154+Singapore+050335" target="_blank" rel="noopener noreferrer">#01-154 Chinatown Complex</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
