import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { SERVICES } from "../content";
import { ICONS } from "../icon-map";
import { slugify } from "../utils";

const EASE = [0.16, 1, 0.3, 1];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => slugify(s.title) === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = ICONS[service.icon];
  const related = SERVICES.filter((s) => s.title !== service.title).slice(0, 3);

  return (
    <>
      <PageBanner image={service.image} title={service.title} subtitle={service.description} />

      <section className="section detail-section">
        <motion.div
          className="detail-icon"
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
          Services include
        </motion.h2>

        <div className="detail-grid">
          {service.items.map((item, i) => (
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
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </section>

      <section className="section related-section">
        <span className="section-eyebrow">Explore More</span>
        <h3 className="section-heading">Other Services</h3>
        <div className="related-grid">
          {related.map((s) => {
            const RelatedIcon = ICONS[s.icon];
            return (
              <Link key={s.title} to={`/services/${slugify(s.title)}`} className="related-card">
                <RelatedIcon size={16} strokeWidth={1.75} />
                <span>{s.title}</span>
                <ArrowRight size={14} strokeWidth={2} className="related-card-arrow" />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
