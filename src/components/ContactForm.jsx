import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, CalendarDays } from "lucide-react";
import { GOOGLE_SHEET_ENDPOINT } from "../content";

const EASE = [0.16, 1, 0.3, 1];

const INQUIRY_TYPES = ["General Inquiry", "Request a Consultation", "Schedule a Demonstration"];
const TODAY = new Date().toISOString().split("T")[0];

const FORM_COPY = {
  "General Inquiry": {
    title: "Service Inquiry Form",
    note: "All fields are required. We'll get back to you as soon as possible.",
  },
  "Request a Consultation": {
    title: "Request a Consultation",
    note: "Tell us about your project and one of our specialists will reach out to schedule time.",
  },
  "Schedule a Demonstration": {
    title: "Schedule a Demonstration",
    note: "Pick a date and time that works for you and we'll confirm your demo.",
  },
};

export function ContactForm({ reason, onReasonChange }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const isDemo = reason === "Schedule a Demonstration";
  const copy = FORM_COPY[reason] ?? FORM_COPY["General Inquiry"];

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const payload = Object.fromEntries(new FormData(e.target).entries());

    if (!GOOGLE_SHEET_ENDPOINT) {
      console.warn("GOOGLE_SHEET_ENDPOINT is not configured yet — see GOOGLE_SHEETS_SETUP.md.");
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.result === "success" ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="inquiry-form" className="contact-form-wrap">
      {status === "success" ? (
        <motion.div
          className="contact-form-success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <CheckCircle2 size={28} strokeWidth={1.75} />
          <h3>Thanks for reaching out</h3>
          <p>Your inquiry has been received. Our team will be in touch shortly.</p>
        </motion.div>
      ) : (
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h3 className="contact-form-heading">{copy.title}</h3>
          <p className="contact-form-note">{copy.note}</p>

          <div className="contact-form-row">
            <label className="contact-form-field">
              Full Name *
              <input type="text" name="name" required />
            </label>
            <label className="contact-form-field">
              Company Name *
              <input type="text" name="company" required />
            </label>
          </div>

          <div className="contact-form-row">
            <label className="contact-form-field">
              Email Address *
              <input type="email" name="email" required />
            </label>
            <label className="contact-form-field">
              Phone Number *
              <input type="tel" name="phone" required />
            </label>
          </div>

          <label className="contact-form-field">
            Reason for Inquiry *
            <select
              name="inquiryType"
              value={reason}
              onChange={(e) => onReasonChange(e.target.value)}
              required
            >
              {INQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <AnimatePresence>
            {isDemo && (
              <motion.div
                className="contact-form-row contact-form-schedule"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 0 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <label className="contact-form-field">
                  <span className="contact-form-field-label">
                    <CalendarDays size={14} strokeWidth={2} />
                    Preferred Date *
                  </span>
                  <input type="date" name="preferredDate" min={TODAY} required={isDemo} />
                </label>
                <label className="contact-form-field">
                  Preferred Time *
                  <input type="time" name="preferredTime" required={isDemo} />
                </label>
              </motion.div>
            )}
          </AnimatePresence>

          <label className="contact-form-field">
            Inquiry Details / Message *
            <textarea name="message" rows={5} required />
          </label>

          {status === "error" && (
            <div className="contact-form-error">
              <AlertCircle size={16} strokeWidth={2} />
              <span>Something went wrong sending your inquiry. Please try again.</span>
            </div>
          )}

          <button type="submit" className="btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit Inquiry"}
          </button>
        </motion.form>
      )}
    </div>
  );
}
