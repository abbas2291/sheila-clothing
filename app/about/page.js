import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us — SHEILA Alteration Clothing',
  description: 'Learn about SHEILA Alteration Clothing — over 15 years of expert tailoring and clothing alterations in Chinatown Complex, Singapore.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/images/tools-flatlay.png"
          alt="Tailoring tools"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <span className="text-overline animate-fade-in-up delay-1">Our Story</span>
          <h1 className="heading-display animate-fade-in-up delay-2">About <span className="text-gold">SHEILA</span></h1>
          <p className={`${styles.heroSub} animate-fade-in-up delay-3`}>
            Where tradition meets precision. Crafting confidence through expert tailoring.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <ScrollReveal direction="left" className={styles.storyContent}>
              <span className="text-overline">Who We Are</span>
              <h2 className="heading-section">A Legacy of <span className="text-gold">Craftsmanship</span></h2>
              <div className="gold-line-left"></div>
              <p>
                SHEILA Alteration Clothing was born from a simple belief: every person deserves 
                clothes that fit them perfectly. What started as a small alteration corner in 
                Singapore&apos;s beloved Chinatown Complex has grown into one of the most trusted 
                names in clothing alterations.
              </p>
              <p>
                For over 15 years, our skilled hands have transformed thousands of garments — 
                from everyday casual wear to the most delicate wedding gowns. We understand that 
                when clothes fit right, confidence follows.
              </p>
              <p>
                Located at #01-154 in the iconic Chinatown Complex, we&apos;re more than just a 
                tailor — we&apos;re your partner in looking and feeling your absolute best.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className={styles.storyImageWrapper}>
              <div className={styles.storyImageContainer}>
                <Image
                  src="/images/hero-seamstress.png"
                  alt="SHEILA at work"
                  width={600}
                  height={500}
                  className={styles.storyImage}
                />
                <div className={styles.storyImageBorder}></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="text-overline">Our Values</span>
              <h2 className="heading-section">What Sets Us <span className="text-gold">Apart</span></h2>
              <div className="gold-line"></div>
            </div>
          </ScrollReveal>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: '✂️',
                title: 'Precision',
                desc: 'Every measurement is exact, every stitch is deliberate. We don\'t cut corners — we cut perfectly.',
              },
              {
                icon: '❤️',
                title: 'Passion',
                desc: 'We love what we do. That passion shows in every garment we touch and every client we serve.',
              },
              {
                icon: '🤝',
                title: 'Personal Touch',
                desc: 'We take the time to understand your vision. No cookie-cutter solutions — just personalized care.',
              },
              {
                icon: '⭐',
                title: 'Excellence',
                desc: 'Good enough isn\'t in our vocabulary. We strive for perfection in every alteration, big or small.',
              },
              {
                icon: '⚡',
                title: 'Efficiency',
                desc: 'We respect your time. Fast turnaround without compromising quality — including same-day services.',
              },
              {
                icon: '💎',
                title: 'Integrity',
                desc: 'Honest pricing, transparent timelines, and genuine care for your garments. Trust is our foundation.',
              },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.valueCard}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className={styles.numbersSection}>
        <div className="container">
          <div className={styles.numbersGrid}>
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '5000+', label: 'Garments Altered' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.numberCard}>
                  <span className={styles.numberValue}>{stat.number}</span>
                  <span className={styles.numberLabel}>{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className={styles.promiseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.promiseCard}>
              <span className="text-overline">Our Promise</span>
              <h2 className="heading-section">The <span className="text-gold">SHEILA</span> Guarantee</h2>
              <div className="gold-line"></div>
              <p className={styles.promiseText}>
                Every garment that leaves our hands has been crafted with precision, care, 
                and a commitment to your satisfaction. If it&apos;s not perfect, we&apos;ll make it right — 
                that&apos;s not just a promise, it&apos;s who we are.
              </p>
              <Link href="/contact" className="btn btn-primary" id="promise-cta">
                Experience the SHEILA Difference
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
