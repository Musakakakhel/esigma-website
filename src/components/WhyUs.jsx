import { motion } from "motion/react";
import { WHY_US } from "../content";
import { ICONS } from "../icon-map";

const EASE = [0.16, 1, 0.3, 1];

export function WhyUs() {
  return (
    <section className="section why-us-section">
      <div className="why-us-grid">
        {WHY_US.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <motion.div
              key={item.title}
              className="why-us-card"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <div className="info-card-icon">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <h3 className="why-us-title">{item.title}</h3>
              <p className="why-us-description">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
