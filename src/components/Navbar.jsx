import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { BRAND, NAV_LINKS, SERVICES, TECHNOLOGY } from "../content";
import { slugify } from "../utils";

const EASE = [0.16, 1, 0.3, 1];

const DROPDOWN_ITEMS = {
  services: SERVICES,
  technology: TECHNOLOGY,
};

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-inner"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="navbar-side navbar-left">
          <Link to="/" className="logo-block" onClick={() => setMobileOpen(false)}>
            <LogoMark />
            <span className="brand-text">{BRAND}</span>
          </Link>
        </div>

        <div className="navbar-center">
          {NAV_LINKS.map((link) => {
            const items = link.dropdown ? DROPDOWN_ITEMS[link.dropdown] : null;
            return (
              <div
                key={link.to}
                className="nav-item"
                onMouseEnter={() => items && setOpenDropdown(link.dropdown)}
                onMouseLeave={() => items && setOpenDropdown(null)}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => "nav-link" + (isActive ? " nav-link-active" : "")}
                >
                  {link.label}
                  {items && (
                    <ChevronDown
                      size={13}
                      strokeWidth={2.25}
                      className={"nav-chevron" + (openDropdown === link.dropdown ? " nav-chevron-open" : "")}
                    />
                  )}
                </NavLink>

                {items && (
                  <AnimatePresence>
                    {openDropdown === link.dropdown && (
                      <motion.div
                        className="nav-dropdown"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16, ease: EASE }}
                      >
                        {items.map((item) => (
                          <Link key={item.title} to={`${link.to}/${slugify(item.title)}`} className="nav-dropdown-item">
                            {item.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        <div className="navbar-side navbar-right">
          <Link to="/contact" className="nav-cta">
            Contact Us
          </Link>
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            {NAV_LINKS.map((link) => {
              const items = link.dropdown ? DROPDOWN_ITEMS[link.dropdown] : null;
              const expanded = mobileExpanded === link.dropdown;
              return (
                <div key={link.to} className="mobile-nav-item">
                  <div className="mobile-nav-row">
                    <Link to={link.to} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                    {items && (
                      <button
                        type="button"
                        className="mobile-nav-toggle"
                        onClick={() => setMobileExpanded(expanded ? null : link.dropdown)}
                        aria-label={`Expand ${link.label}`}
                      >
                        <ChevronDown
                          size={16}
                          strokeWidth={2.25}
                          className={expanded ? "nav-chevron-open" : ""}
                        />
                      </button>
                    )}
                  </div>
                  {items && expanded && (
                    <div className="mobile-submenu">
                      {items.map((item) => (
                        <Link
                          key={item.title}
                          to={`${link.to}/${slugify(item.title)}`}
                          className="mobile-submenu-item"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/contact" className="mobile-nav-cta" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
