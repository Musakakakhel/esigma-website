import { motion } from "motion/react";
import { INDUSTRIES } from "../content";

const EASE = [0.16, 1, 0.3, 1];

export function Industries() {
  return (
    <section className="section industries-section">
      <motion.h2
        className="section-heading"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {INDUSTRIES.heading}
      </motion.h2>

      <motion.div
        className="pill-list"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      >
        {INDUSTRIES.items.map((item) => (
          <span key={item} className="chip chip-outline">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
