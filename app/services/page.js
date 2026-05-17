import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './services.module.css';

export const metadata = {
  title: 'Our Services — SHEILA Alteration Clothing',
  description: 'Professional clothing alteration services including dress alterations, suit tailoring, wedding gown fitting, hemming, resizing, and custom fitting in Singapore.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: '👗',
      title: 'Dress Alterations',
      desc: 'Whether it\'s a cocktail dress, evening gown, or everyday wear, we tailor every dress to hug your unique silhouette. From taking in seams to adjusting necklines, our expert hands transform any dress into a custom-fit masterpiece.',
      features: ['Length adjustment', 'Waist & hip fitting', 'Neckline reshaping', 'Sleeve modification', 'Lining repairs'],
      image: '/images/perfect-fit.png',
      priceFrom: '$15',
    },
    {
      icon: '🤵',
      title: 'Suit Tailoring',
      desc: 'A well-fitted suit speaks volumes. We specialize in precise alterations for blazers, trousers, and complete suits — ensuring you look sharp and feel confident in every meeting, interview, or special occasion.',
      features: ['Jacket tapering', 'Trouser hemming', 'Shoulder adjustment', 'Waist suppression', 'Sleeve shortening'],
      image: '/images/services-suit.png',
      priceFrom: '$20',
    },
    {
      icon: '💍',
      title: 'Wedding & Bridal',
      desc: 'Your wedding day is once in a lifetime — your dress should be flawless. We handle the most delicate fabrics and intricate details with the care and precision your special day demands.',
      features: ['Bodice fitting', 'Train adjustment', 'Bustle creation', 'Beading & lacework', 'Veil alterations'],
      image: '/images/services-wedding.png',
      priceFrom: '$50',
    },
    {
      icon: '📏',
      title: 'Hemming & Resizing',
      desc: 'The most popular alteration service — and we do it best. Perfect hems on pants, skirts, and dresses. Expert resizing to take in or let out garments for that ideal fit.',
      features: ['Pant hemming', 'Skirt shortening', 'Taking in', 'Letting out', 'Blind hem stitch'],
      image: '/images/tools-flatlay.png',
      priceFrom: '$10',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/images/services-suit.png"
          alt="Expert tailoring"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <span className="text-overline animate-fade-in-up delay-1">What We Do</span>
          <h1 className="heading-display animate-fade-in-up delay-2">Our <span className="text-gold">Services</span></h1>
          <p className={`${styles.heroSub} animate-fade-in-up delay-3`}>
            Expert alterations for every garment, every occasion, every body.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className={styles.servicesDetail}>
        <div className="container">
          {services.map((service, i) => (
            <ScrollReveal key={i}>
              <div className={`${styles.serviceRow} ${i % 2 === 1 ? styles.reversed : ''}`} id={`service-detail-${i}`}>
                <div className={styles.serviceImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={450}
                    className={styles.serviceImage}
                  />
                  <div className={styles.priceBadge}>
                    <span className={styles.priceFrom}>From</span>
                    <span className={styles.priceValue}>{service.priceFrom}</span>
                  </div>
                </div>
                <div className={styles.serviceContent}>
                  <span className={styles.serviceEmoji}>{service.icon}</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <div className="gold-line-left"></div>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((f, j) => (
                      <li key={j}>
                        <span className={styles.checkmark}>✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn btn-outline">
                    Book This Service
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className={styles.additionalSection}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">And More</span>
              <h2 className="heading-section">Additional <span className="text-gold">Services</span></h2>
              <div className="gold-line"></div>
            </div>
          </ScrollReveal>
          <div className={styles.additionalGrid}>
            {[
              { icon: '🧵', title: 'Repairs & Mending', desc: 'Invisible repairs, patching, and structural fixes to extend garment life.' },
              { icon: '🔘', title: 'Button & Zipper', desc: 'Replacement and repair of buttons, zippers, hooks, and fasteners.' },
              { icon: '👔', title: 'Custom Fitting', desc: 'Personalized fitting sessions for the perfect silhouette on any body type.' },
              { icon: '✂️', title: 'Tapering', desc: 'Slim down oversized garments — shirts, pants, jackets — for a modern fit.' },
              { icon: '📐', title: 'Pattern Adjustment', desc: 'Complex structural alterations for garments that need a complete reshape.' },
              { icon: '⚡', title: 'Express Service', desc: 'Same-day and rush services available for urgent alteration needs.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={styles.additionalCard} id={`additional-service-${i}`}>
                  <span className={styles.additionalIcon}>{item.icon}</span>
                  <h3 className={styles.additionalTitle}>{item.title}</h3>
                  <p className={styles.additionalDesc}>{item.desc}</p>
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
              <h2 className="heading-section">Not Sure What You Need?</h2>
              <p>Bring your garment in and let us assess it. We&apos;ll recommend the best approach and give you an honest quote.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn-primary" id="services-cta-contact">Get a Free Consultation</Link>
                <a href="https://wa.me/6585019131" target="_blank" rel="noopener noreferrer" className="btn btn-outline" id="services-cta-whatsapp">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
