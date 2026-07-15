import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { CTA, HERO, IMAGES, ADDRESS } from "../content";

const EASE = [0.16, 1, 0.3, 1];

export default function ContactPage() {
  return (
    <>
      <PageBanner image={IMAGES.contactBanner} title={CTA.heading} subtitle={CTA.paragraph} />

      <section className="section contact-section">
        <motion.div
          className="contact-buttons"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {CTA.buttons.map((label, i) => (
            <a key={label} href="#" className={i === 0 ? "btn-primary" : "btn-secondary"}>
              {label}
            </a>
          ))}
        </motion.div>

        <motion.div
          className="contact-address"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
        >
          <MapPin size={16} strokeWidth={2} />
          <span>{ADDRESS}</span>
        </motion.div>

        <motion.div
          className="contact-highlights"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          {HERO.highlights.map((item) => (
            <span key={item} className="chip chip-outline">
              {item}
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
}
