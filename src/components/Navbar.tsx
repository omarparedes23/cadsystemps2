"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* IntersectionObserver for active section */
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={cn(
          "transition-all duration-300",
          scrolled && "backdrop-blur-xl bg-bg-primary/80 border-b border-white/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, "#inicio")}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display bg-accent/10 border border-accent/20 text-accent transition-all duration-300">
                C
              </div>
              <span className="font-bold text-base tracking-wider text-white font-display">
                CAD SYSTEMPS
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 relative font-body",
                      isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accent" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA desktop */}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, "#contacto")}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium font-body transition-all duration-200 border border-white/20 text-text-primary hover:border-accent/60 hover:text-accent"
            >
              Contactar
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mx-4 mt-2 rounded-2xl overflow-hidden bg-bg-primary border border-white/10"
          >
            <nav className="flex flex-col p-4 gap-1" role="navigation" aria-label="Navegación móvil">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 font-body",
                      isActive
                        ? "text-accent bg-accent/6"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-2 pt-2 border-t border-white/6">
                <a
                  href="#contacto"
                  onClick={(e) => handleLinkClick(e, "#contacto")}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-center font-body border border-white/20 text-text-primary hover:border-accent/60 hover:text-accent transition-all duration-200"
                >
                  Contactar
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* cn utility */
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
