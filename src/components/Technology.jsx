import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGY } from "../content";
import { ICONS } from "../icon-map";
import { slugify } from "../utils";

const EASE = [0.16, 1, 0.3, 1];
const PREVIEW_COUNT = 4;

export function Technology() {
  return (
    <section className="section technology-section">
      <div className="card-grid card-grid-2">
        {TECHNOLOGY.map((tech, i) => {
          const Icon = ICONS[tech.icon];
          const remaining = tech.items.length - PREVIEW_COUNT;
          return (
            <motion.div
              key={tech.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: EASE }}
            >
              <Link to={`/technology/${slugify(tech.title)}`} className="info-card info-card-dark info-card-link">
                <div className="info-card-icon info-card-icon-dark">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="info-card-title">{tech.title}</h3>
                <p className="info-card-description">{tech.description}</p>
                <div className="capability-label">Key capabilities</div>
                <ul className="info-card-list info-card-list-dark">
                  {tech.items.slice(0, PREVIEW_COUNT).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {remaining > 0 && <li className="info-card-more">+{remaining} more</li>}
                </ul>
                <span className="info-card-link-label info-card-link-label-dark">
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
