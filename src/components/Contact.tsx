"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const WHATSAPP_NUMBER = "51999999999"; // Cambiar por número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer más sobre sus servicios de consultoría tecnológica."
);

const contactItems = [
  {
    icon: Mail,
    label: "contacto@cadsystemps.com",
    href: "mailto:contacto@cadsystemps.com",
  },
  {
    icon: Phone,
    label: "+51 916 484 982",
    href: "tel:+51916484982",
  },
  {
    icon: MapPin,
    label: "Lima, Perú",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{ padding: "8rem 0", background: "#0b0f19" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#22d3ee", fontFamily: "var(--font-inter)" }}
          >
            Contacto
          </span>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "#f8fafc", fontFamily: "var(--font-syne)" }}
          >
            ¿Listo para transformar
            <br />
            tu infraestructura?
          </h2>

          {/* Subtext */}
          <p
            className="text-lg mb-12"
            style={{ color: "#94a3b8", fontFamily: "var(--font-inter)" }}
          >
            Respondemos en menos de 24 horas. Sin formularios, sin esperas.
          </p>

          {/* WhatsApp CTA */}
          <div className="mb-12">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#25d366",
                backdropFilter: "blur(8px)",
                fontFamily: "var(--font-inter)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.2)";
                e.currentTarget.style.borderColor = "rgba(37,211,102,0.5)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.1)";
                e.currentTarget.style.borderColor = "rgba(37,211,102,0.3)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <MessageCircle size={20} strokeWidth={1.5} />
              Escribirnos por WhatsApp
            </a>
          </div>

          {/* Contact info row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-6">
                  <a
                    href={item.href}
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{ color: "#94a3b8", textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#f8fafc")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94a3b8")
                    }
                  >
                    <Icon size={16} strokeWidth={1.5} />
                    {item.label}
                  </a>
                  {i < contactItems.length - 1 && (
                    <div
                      className="hidden md:block h-4"
                      style={{ width: "1px", background: "rgba(255,255,255,0.1)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
