import { motion } from "motion/react";
import { STATS } from "../content";

const EASE = [0.16, 1, 0.3, 1];

export function Stats() {
  return (
    <section className="section stats-section">
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
          >
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
