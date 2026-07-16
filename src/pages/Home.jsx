import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { ABOUT, SERVICES_SECTION, TECHNOLOGY_SECTION, WHY_US_SECTION, CTA, IMAGES } from "../content";

const EASE = [0.16, 1, 0.3, 1];

const TEASERS = [
  { title: SERVICES_SECTION.heading, image: IMAGES.homeServicesTeaser, to: "/services" },
  { title: TECHNOLOGY_SECTION.heading, image: IMAGES.homeTechnologyTeaser, to: "/technology" },
  { title: WHY_US_SECTION.heading, image: IMAGES.homeWhyUsTeaser, to: "/why-us" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="section about-teaser-section">
        <motion.div
          className="about-teaser"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <img src={IMAGES.aboutBanner} alt="" loading="lazy" />
          <div className="about-teaser-content">
            <span className="section-eyebrow">{ABOUT.eyebrow}</span>
            <h2 className="section-heading">{ABOUT.heading}</h2>
            <p className="body-text">{ABOUT.paragraphs[0]}</p>
            <Link to="/about" className="btn-secondary">
              {ABOUT.eyebrow}
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="section teaser-section">
        <div className="teaser-grid">
          {TEASERS.map((teaser, i) => (
            <motion.div
              key={teaser.to}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            >
              <Link to={teaser.to} className="teaser-card">
                <img src={teaser.image} alt="" loading="lazy" />
                <div className="teaser-card-overlay" />
                <div className="teaser-card-content">
                  <span>{teaser.title}</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <motion.h2
          className="cta-strip-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {CTA.heading}
        </motion.h2>
        <motion.p
          className="cta-strip-text"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          {CTA.paragraph}
        </motion.p>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <Link to="/contact" className="btn-primary btn-on-dark">
            {CTA.buttons[0]}
          </Link>
        </motion.div>
      </section>
    </>
  );
}
