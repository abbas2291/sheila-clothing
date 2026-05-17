import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './components/ScrollReveal';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero} id="hero-section">
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroParticles}>
          {[...Array(20)].map((_, i) => (
            <span key={i} className={styles.particle} style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}></span>
          ))}
        </div>
        <Image
          src="/images/hero-seamstress.png"
          alt="Expert seamstress at work"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <span className={`${styles.heroOverline} animate-fade-in-up delay-1`}>
            ✦ Expert Tailoring Since Day One
          </span>
          <h1 className={`${styles.heroTitle} animate-fade-in-up delay-2`}>
            Perfection in <br />
            <span className={styles.heroTitleAccent}>Every Stitch</span>
          </h1>
          <p className={`${styles.heroSubtitle} animate-fade-in-up delay-3`}>
            Where precision meets passion. Expert clothing alterations in the heart of Singapore&apos;s 
            Chinatown — making every garment tell your story.
          </p>
          <div className={`${styles.heroCtas} animate-fade-in-up delay-4`}>
            <Link href="/contact" className="btn btn-primary" id="hero-cta-book">
              Book Appointment
            </Link>
            <Link href="/services" className="btn btn-outline" id="hero-cta-services">
              Our Services
            </Link>
          </div>
          <div className={`${styles.heroStats} animate-fade-in-up delay-5`}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Satisfaction</span>
            </div>
          </div>
        </div>
        <div className={styles.heroScrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* ===== TRUST BANNER ===== */}
      <section className={styles.trustBanner} id="trust-banner">
        <div className={styles.trustContent}>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Quality Guaranteed</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Same Day Service</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            <span>Made with Love</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            <span>Personal Touch</span>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className={styles.aboutPreview} id="about-preview">
        <div className="container">
          <div className={styles.aboutGrid}>
            <ScrollReveal direction="left" className={styles.aboutImageWrapper}>
              <div className={styles.aboutImageContainer}>
                <Image
                  src="/images/tools-flatlay.png"
                  alt="Premium tailoring tools"
                  width={600}
                  height={500}
                  className={styles.aboutImage}
                />
                <div className={styles.aboutImageDecor}></div>
                <div className={styles.experienceBadge}>
                  <span className={styles.badgeNumber}>15+</span>
                  <span className={styles.badgeLabel}>Years of<br/>Excellence</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className={styles.aboutContent}>
              <span className="text-overline">Our Story</span>
              <h2 className="heading-section">Crafting Confidence,<br/><span className="text-gold">One Garment at a Time</span></h2>
              <div className="gold-line-left"></div>
              <p className={styles.aboutText}>
                At SHEILA Alteration Clothing, we believe every garment deserves to fit like it was 
                made just for you. Nestled in the vibrant Chinatown Complex, we&apos;ve been transforming 
                off-the-rack into custom-fit perfection for over 15 years.
              </p>
              <p className={styles.aboutText}>
                From delicate wedding gowns to sharp business suits, our skilled hands bring 
                precision and care to every stitch. We don&apos;t just alter clothes — we craft confidence.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✦</span>
                  <div>
                    <strong>Expert Craftsmanship</strong>
                    <p>Meticulous attention to detail in every alteration</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✦</span>
                  <div>
                    <strong>Fast Turnaround</strong>
                    <p>Same-day and express services available</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn btn-outline" id="about-preview-cta">
                Learn More About Us
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className={styles.services} id="services-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">What We Do</span>
              <h2 className="heading-section">Our <span className="text-gold">Services</span></h2>
              <div className="gold-line"></div>
              <p>Every garment tells a story. We make sure yours fits perfectly.</p>
            </div>
          </ScrollReveal>
          <div className={styles.servicesGrid}>
            {[
              { icon: '👗', title: 'Dress Alterations', desc: 'From casual dresses to formal gowns, we ensure every dress fits your unique silhouette perfectly.', delay: 0 },
              { icon: '🤵', title: 'Suit Tailoring', desc: 'Sharp, professional fits for blazers, trousers, and complete suits tailored to your measurements.', delay: 0.1 },
              { icon: '💍', title: 'Wedding Attire', desc: 'Your special day deserves a perfect fit. Expert alterations for wedding dresses and suits.', delay: 0.2 },
              { icon: '📏', title: 'Hem & Resize', desc: 'Professional hemming, taking in, and letting out — precision adjustments for any garment.', delay: 0.3 },
              { icon: '👔', title: 'Custom Fitting', desc: 'Personalized fitting sessions to achieve the ideal silhouette for your body type.', delay: 0.4 },
              { icon: '🧵', title: 'Repairs & Mending', desc: 'Invisible repairs, zipper replacements, and button fixes to extend your wardrobe\'s life.', delay: 0.5 },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={service.delay}>
                <div className={styles.serviceCard} id={`service-card-${i}`}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <Link href="/services" className={styles.serviceLink}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOWCASE SECTION ===== */}
      <section className={styles.showcase} id="showcase-section">
        <div className="container-wide">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">Our Craft</span>
              <h2 className="heading-section">The Art of <span className="text-gold">Perfect Fit</span></h2>
              <div className="gold-line"></div>
              <p>See the transformation — where off-the-rack becomes one-of-a-kind.</p>
            </div>
          </ScrollReveal>
          <div className={styles.showcaseGrid}>
            <ScrollReveal direction="left" className={styles.showcaseMain}>
              <div className={styles.showcaseCard}>
                <Image
                  src="/images/perfect-fit.png"
                  alt="Perfectly fitted dress"
                  width={700}
                  height={500}
                  className={styles.showcaseImage}
                />
                <div className={styles.showcaseOverlay}>
                  <span className={styles.showcaseTag}>Featured</span>
                  <h3>Precision Dress Fitting</h3>
                  <p>Every curve, every line — tailored to perfection</p>
                </div>
              </div>
            </ScrollReveal>
            <div className={styles.showcaseSide}>
              <ScrollReveal delay={0.1} className={styles.showcaseSmall}>
                <div className={styles.showcaseCard}>
                  <Image
                    src="/images/services-wedding.png"
                    alt="Wedding dress alteration"
                    width={400}
                    height={300}
                    className={styles.showcaseImage}
                  />
                  <div className={styles.showcaseOverlay}>
                    <span className={styles.showcaseTag}>Bridal</span>
                    <h3>Wedding Gown Magic</h3>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} className={styles.showcaseSmall}>
                <div className={styles.showcaseCard}>
                  <Image
                    src="/images/services-suit.png"
                    alt="Suit tailoring"
                    width={400}
                    height={300}
                    className={styles.showcaseImage}
                  />
                  <div className={styles.showcaseOverlay}>
                    <span className={styles.showcaseTag}>Menswear</span>
                    <h3>Suit Perfection</h3>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal>
            <div className={styles.showcaseCta}>
              <Link href="/gallery" className="btn btn-outline" id="showcase-cta">
                View Full Gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className={styles.process} id="process-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">How It Works</span>
              <h2 className="heading-section">Your Journey to <span className="text-gold">Perfect Fit</span></h2>
              <div className="gold-line"></div>
            </div>
          </ScrollReveal>
          <div className={styles.processSteps}>
            {[
              { step: '01', title: 'Consultation', desc: 'Bring your garment in. We\'ll discuss your vision and take precise measurements.', icon: '💬' },
              { step: '02', title: 'Expert Assessment', desc: 'Our skilled tailors evaluate the best approach for your alteration needs.', icon: '🔍' },
              { step: '03', title: 'Precision Work', desc: 'Using premium techniques, we craft each alteration with meticulous care.', icon: '✂️' },
              { step: '04', title: 'Perfect Fit', desc: 'Try on your garment. We ensure everything fits exactly right before you go.', icon: '✨' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={styles.processCard} id={`process-step-${i}`}>
                  <div className={styles.processNumber}>{item.step}</div>
                  <span className={styles.processIcon}>{item.icon}</span>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processDesc}>{item.desc}</p>
                  {i < 3 && <div className={styles.processConnector}></div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={styles.testimonials} id="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">Testimonials</span>
              <h2 className="heading-section">What Our <span className="text-gold">Clients Say</span></h2>
              <div className="gold-line"></div>
            </div>
          </ScrollReveal>
          <div className={styles.testimonialsGrid}>
            {[
              { name: 'Sarah L.', role: 'Bride', text: 'SHEILA made my wedding dress fit like a dream. The attention to detail was extraordinary — every bead, every seam was perfect. I felt like a princess on my special day!', rating: 5 },
              { name: 'Marcus T.', role: 'Business Executive', text: 'I\'ve been bringing all my suits here for years. The precision and speed are unmatched. My colleagues always ask where I get my suits tailored. It\'s always SHEILA.', rating: 5 },
              { name: 'Wei Lin C.', role: 'Fashion Enthusiast', text: 'Found this gem in Chinatown Complex and never looked back. They transformed an ill-fitting vintage dress into something that looks couture. Absolutely recommend!', rating: 5 },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={styles.testimonialCard} id={`testimonial-${i}`}>
                  <div className={styles.testimonialStars}>
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <span key={j} className={styles.star}>★</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>&ldquo;{testimonial.text}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <strong className={styles.authorName}>{testimonial.name}</strong>
                      <span className={styles.authorRole}>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section className={styles.location} id="location-section">
        <div className="container">
          <div className={styles.locationGrid}>
            <ScrollReveal direction="left" className={styles.locationContent}>
              <span className="text-overline">Find Us</span>
              <h2 className="heading-section">Visit Our <span className="text-gold">Atelier</span></h2>
              <div className="gold-line-left"></div>
              <p className={styles.locationText}>
                Conveniently located in the heart of Singapore&apos;s vibrant Chinatown Complex, 
                we&apos;re easy to find and always ready to welcome you.
              </p>
              <div className={styles.locationDetails}>
                <div className={styles.locationItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <strong>Address</strong>
                    <p>#01-154 Chinatown Complex<br/>Singapore 050335</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <strong>Opening Hours</strong>
                    <p>Monday – Saturday: 10am – 7pm<br/>Sunday: Closed</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <strong>Phone</strong>
                    <p>+65 8501 9131</p>
                  </div>
                </div>
              </div>
              <div className={styles.locationCtas}>
                <a href="https://wa.me/6585019131" target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="location-whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a href="https://www.google.com/maps/search/Chinatown+Complex+Singapore+050335" target="_blank" rel="noopener noreferrer" className="btn btn-outline" id="location-directions">
                  Get Directions
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className={styles.locationImageWrapper}>
              <div className={styles.locationImageContainer}>
                <Image
                  src="/images/chinatown-complex.png"
                  alt="Chinatown Complex, Singapore"
                  width={600}
                  height={500}
                  className={styles.locationImage}
                />
                <div className={styles.locationImageFrame}></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
