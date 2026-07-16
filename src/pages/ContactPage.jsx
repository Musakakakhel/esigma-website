import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Mail } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { ContactForm } from "../components/ContactForm";
import { CTA, HERO, IMAGES, ADDRESS, EMAIL } from "../content";

const EASE = [0.16, 1, 0.3, 1];

const REASON_BY_BUTTON = {
  "Contact Us": "General Inquiry",
  "Request a Consultation": "Request a Consultation",
  "Schedule a Demonstration": "Schedule a Demonstration",
};

export default function ContactPage() {
  const [reason, setReason] = useState("General Inquiry");

  function handleCtaClick(label) {
    setReason(REASON_BY_BUTTON[label] ?? "General Inquiry");
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  }

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
          {CTA.buttons.map((label) => {
            const isActive = REASON_BY_BUTTON[label] === reason;
            return (
              <button
                key={label}
                type="button"
                onClick={() => handleCtaClick(label)}
                className={isActive ? "btn-primary" : "btn-secondary"}
              >
                {label}
              </button>
            );
          })}
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
          <span className="contact-address-divider" />
          <a href={`mailto:${EMAIL}`} className="contact-email-link">
            <Mail size={16} strokeWidth={2} />
            {EMAIL}
          </a>
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

      <section className="section contact-form-section">
        <ContactForm reason={reason} onReasonChange={setReason} />
      </section>
    </>
  );
}
