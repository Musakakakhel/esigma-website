import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { BRAND, NAV_LINKS, ADDRESS, EMAIL } from "../content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="footer-brand-block">
          <Link to="/" className="logo-block">
            <LogoMark />
            <span className="brand-text">{BRAND}</span>
          </Link>
          <div className="footer-address">
            <MapPin size={14} strokeWidth={2} />
            <span>{ADDRESS}</span>
          </div>
          <a href={`mailto:${EMAIL}`} className="footer-address footer-email">
            <Mail size={14} strokeWidth={2} />
            <span>{EMAIL}</span>
          </a>
        </div>

        <nav className="footer-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="site-footer-bottom">
        © {new Date().getFullYear()} {BRAND}. All rights reserved.
      </div>
    </footer>
  );
}
