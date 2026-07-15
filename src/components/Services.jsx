import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../content";
import { ICONS } from "../icon-map";
import { slugify } from "../utils";

const EASE = [0.16, 1, 0.3, 1];
const PREVIEW_COUNT = 4;

export function Services() {
  return (
    <section className="section services-section">
      <div className="card-grid">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          const remaining = service.items.length - PREVIEW_COUNT;
          return (
            <motion.div
              key={service.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <Link to={`/services/${slugify(service.title)}`} className="info-card info-card-link">
                <div className="info-card-icon">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="info-card-title">{service.title}</h3>
                <p className="info-card-description">{service.description}</p>
                <ul className="info-card-list">
                  {service.items.slice(0, PREVIEW_COUNT).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {remaining > 0 && <li className="info-card-more">+{remaining} more</li>}
                </ul>
                <span className="info-card-link-label">
                  View details <ArrowRight size={13} strokeWidth={2} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
