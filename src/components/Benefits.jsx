import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { BENEFITS } from "../content";

const EASE = [0.16, 1, 0.3, 1];

export function Benefits() {
  return (
    <section className="section benefits-section">
      <motion.h2
        className="section-heading"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {BENEFITS.heading}
      </motion.h2>

      <motion.p
        className="body-text"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      >
        {BENEFITS.intro}
      </motion.p>

      <div className="benefits-grid">
        {BENEFITS.items.map((item, i) => (
          <motion.div
            key={item}
            className="benefit-row"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: EASE }}
          >
            <CheckCircle2 size={18} strokeWidth={1.75} className="benefit-icon" />
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
