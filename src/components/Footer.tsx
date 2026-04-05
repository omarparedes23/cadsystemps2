'use client';

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer({ onTabChange }: { onTabChange?: (tab: string) => void }) {
  return (
    <footer
      style={{
        padding: "3rem 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#030712",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <button
            onClick={() => onTabChange?.("inicio")}
            className="flex items-center gap-3"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#22d3ee",
                fontSize: "12px",
                fontWeight: 700,
                fontFamily: "var(--font-syne)",
              }}
            >
              C
            </div>
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#f8fafc",
                letterSpacing: "-0.01em",
              }}
            >
              CAD SYSTEMPS
            </span>
          </button>

          {/* Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => onTabChange?.(link.href.replace("#", ""))}
                className="text-sm transition-colors duration-200"
                style={{
                  color: "#64748b",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter)",
                  padding: 0,
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f8fafc")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#64748b")}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            paddingTop: "1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "#64748b",
              fontFamily: "var(--font-inter)",
            }}
          >
            © 2025 CAD SYSTEMPS. Consultoría informática — Lima, Perú.
          </p>
        </div>
      </div>
    </footer>
  );
}
