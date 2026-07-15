import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { TECHNOLOGY } from "../content";
import { ICONS } from "../icon-map";
import { slugify } from "../utils";

const EASE = [0.16, 1, 0.3, 1];

export default function TechnologyDetailPage() {
  const { slug } = useParams();
  const tech = TECHNOLOGY.find((t) => slugify(t.title) === slug);

  if (!tech) return <Navigate to="/technology" replace />;

  const Icon = ICONS[tech.icon];
  const related = TECHNOLOGY.filter((t) => t.title !== tech.title);

  return (
    <>
      <PageBanner image={tech.image} title={tech.title} subtitle={tech.description} />

      <section className="section detail-section detail-section-dark">
        <motion.div
          className="detail-icon detail-icon-dark"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Icon size={22} strokeWidth={1.75} />
        </motion.div>

        <motion.h2
          className="section-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Key capabilities
        </motion.h2>

        <div className="detail-grid">
          {tech.items.map((item, i) => (
            <motion.div
              key={item}
              className="detail-item"
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: EASE }}
            >
              <CheckCircle2 size={18} strokeWidth={1.75} />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="detail-cta">
          <Link to="/contact" className="btn-primary btn-on-dark">
            Contact Us
          </Link>
          <Link to="/technology" className="btn-secondary btn-on-dark-outline">
            View All Technology
          </Link>
        </div>
      </section>

      <section className="section related-section">
        <span className="section-eyebrow">Explore More</span>
        <h3 className="section-heading">Other Technology Solutions</h3>
        <div className="related-grid">
          {related.map((t) => {
            const RelatedIcon = ICONS[t.icon];
            return (
              <Link key={t.title} to={`/technology/${slugify(t.title)}`} className="related-card">
                <RelatedIcon size={16} strokeWidth={1.75} />
                <span>{t.title}</span>
                <ArrowRight size={14} strokeWidth={2} className="related-card-arrow" />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
