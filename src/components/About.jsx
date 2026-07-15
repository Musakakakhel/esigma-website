import { motion } from "motion/react";
import { ABOUT, IMAGES } from "../content";

const EASE = [0.16, 1, 0.3, 1];

export function About() {
  return (
    <section className="section about-section">
      <div className="about-body">
        <motion.div
          className="about-paragraphs"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="section-eyebrow">{ABOUT.eyebrow}</span>
          {ABOUT.paragraphs.map((p) => (
            <p key={p} className="body-text">
              {p}
            </p>
          ))}

          <div className="about-commitment">
            <h3 className="commitment-heading">{ABOUT.commitmentHeading}</h3>
            <div className="commitment-list">
              {ABOUT.commitments.map((item) => (
                <span key={item} className="chip chip-outline">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        >
          <img src={IMAGES.aboutSecondary} alt="" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}
