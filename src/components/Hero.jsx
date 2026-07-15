import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { HERO } from "../content";

const EASE = [0.16, 1, 0.3, 1];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4";

function BackgroundVideo() {
  return (
    <motion.div
      className="video-layer"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.8, ease: EASE }}
    >
      <div className="video-wrapper">
        <video className="bg-video" src={VIDEO_URL} autoPlay muted loop playsInline />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <BackgroundVideo />

      <div className="hero-content">
        <motion.h1
          className="hero-heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        >
          {HERO.heading}
        </motion.h1>

        <motion.p
          className="hero-intro"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        >
          {HERO.intro}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
        >
          <Link to="/contact" className="btn-primary">
            {HERO.ctaPrimary}
          </Link>
          <Link to="/contact" className="btn-secondary">
            {HERO.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          className="hero-highlights"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
        >
          {HERO.highlights.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
