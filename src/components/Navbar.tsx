"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({
  activeTab = "inicio",
  onTabChange,
}: {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const tab = href.replace("#", "");
    onTabChange?.(tab);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          backgroundColor: scrolled ? "rgba(3,7,18,0.8)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#inicio");
              }}
              className="flex items-center gap-3 group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300"
                style={{
                  background: "rgba(34,211,238,0.1)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  color: "#22d3ee",
                  fontFamily: "var(--font-syne)",
                }}
              >
                C
              </div>
              <span
                className="font-bold text-sm tracking-tight text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                CAD SYSTEMPS
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => {
                const isActive = activeTab === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-sm font-medium transition-colors duration-200 relative"
                    style={{
                      color: isActive ? "#22d3ee" : "#94a3b8",
                      fontFamily: "var(--font-inter)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.target as HTMLElement).style.color = "#f8fafc";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.target as HTMLElement).style.color = "#94a3b8";
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          right: 0,
                          height: "2px",
                          borderRadius: "9999px",
                          background: "#22d3ee",
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA desktop */}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contacto");
              }}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#f8fafc",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(34,211,238,0.6)";
                el.style.color = "#22d3ee";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.2)";
                el.style.color = "#f8fafc";
              }}
            >
              Contactar
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
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
            className="md:hidden mx-4 mt-2 rounded-2xl overflow-hidden"
            style={{
              background: "#030712",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => {
                const isActive = activeTab === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                    style={{
                      color: isActive ? "#22d3ee" : "#94a3b8",
                      background: isActive ? "rgba(34,211,238,0.06)" : "transparent",
                      fontFamily: "var(--font-inter)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "#f8fafc";
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#contacto");
                  }}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-center"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#f8fafc",
                    fontFamily: "var(--font-inter)",
                  }}
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
