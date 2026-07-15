import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

export function PageBanner({ image, title, subtitle }) {
  return (
    <section className="page-banner">
      <img src={image} alt="" className="page-banner-img" loading="eager" />
      <div className="page-banner-overlay" />
      <div className="page-banner-content">
        <motion.h1
          className="page-banner-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="page-banner-subtitle"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
