import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './gallery.module.css';

export const metadata = {
  title: 'Our Work — SHEILA Alteration Clothing',
  description: 'Browse our gallery of expert clothing alterations. See the craftsmanship and precision that goes into every garment at SHEILA Alteration Clothing.',
};

export default function GalleryPage() {
  const galleryItems = [
    { src: '/images/perfect-fit.png', title: 'Elegant Dress Fitting', category: 'Dresses', span: 'large' },
    { src: '/images/services-wedding.png', title: 'Bridal Gown Alteration', category: 'Wedding', span: 'medium' },
    { src: '/images/services-suit.png', title: 'Premium Suit Tailoring', category: 'Suits', span: 'medium' },
    { src: '/images/hero-seamstress.png', title: 'Expert at Work', category: 'Behind the Scenes', span: 'medium' },
    { src: '/images/tools-flatlay.png', title: 'Our Tools of the Trade', category: 'Craftsmanship', span: 'large' },
    { src: '/images/chinatown-complex.png', title: 'Our Home in Chinatown', category: 'Location', span: 'medium' },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/images/perfect-fit.png"
          alt="Gallery of our work"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <span className="text-overline animate-fade-in-up delay-1">Portfolio</span>
          <h1 className="heading-display animate-fade-in-up delay-2">Our <span className="text-gold">Gallery</span></h1>
          <p className={`${styles.heroSub} animate-fade-in-up delay-3`}>
            A showcase of precision, passion, and perfect fits.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className="container-wide">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">Our Portfolio</span>
              <h2 className="heading-section">Craftsmanship in <span className="text-gold">Every Detail</span></h2>
              <div className="gold-line"></div>
              <p>Every garment has a story. Here are some of ours.</p>
            </div>
          </ScrollReveal>

          <div className={styles.galleryGrid}>
            {galleryItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className={`${styles.galleryItem} ${styles[item.span]}`}>
                <div className={styles.galleryCard} id={`gallery-item-${i}`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={600}
                    className={styles.galleryImage}
                  />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.galleryCategory}>{item.category}</span>
                    <h3 className={styles.galleryTitle}>{item.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Concept Section */}
      <section className={styles.transformSection}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">The Transformation</span>
              <h2 className="heading-section">From Off-the-Rack to <span className="text-gold">Custom Fit</span></h2>
              <div className="gold-line"></div>
            </div>
          </ScrollReveal>
          <div className={styles.transformGrid}>
            {[
              { step: 'Before', desc: 'Loose, ill-fitting garments that don\'t flatter your figure.', icon: '😕' },
              { step: 'The Process', desc: 'Expert measurement, cutting, and stitching with precision.', icon: '✂️' },
              { step: 'After', desc: 'A perfectly tailored garment that fits like it was made for you.', icon: '✨' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={styles.transformCard}>
                  <span className={styles.transformIcon}>{item.icon}</span>
                  <h3 className={styles.transformStep}>{item.step}</h3>
                  <p className={styles.transformDesc}>{item.desc}</p>
                  {i < 2 && <div className={styles.transformArrow}>→</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <h2 className="heading-section">Want Your Garment in Our Gallery?</h2>
              <p>Every perfect fit starts with a visit. Let us transform your wardrobe.</p>
              <Link href="/contact" className="btn btn-primary" id="gallery-cta">
                Book Your Fitting Today
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
