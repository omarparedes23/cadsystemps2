'use client';

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-display bg-accent/10 border border-accent/20 text-accent">
              C
            </div>
            <span className="font-display font-bold text-sm text-text-primary tracking-tight">
              CAD SYSTEMPS
            </span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/4 pt-6 text-center">
          <p className="text-xs font-body text-text-muted">
            &copy; {currentYear} CAD SYSTEMPS. Consultoría informática — Lima, Perú.
          </p>
        </div>
      </div>
    </footer>
  );
}
