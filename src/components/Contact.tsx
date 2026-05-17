"use client";

import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const WHATSAPP_NUMBER = "51982057635";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer más sobre sus servicios de consultoría tecnológica."
);

const contactItems = [
  {
    icon: Mail,
    label: "caddsystemps@gmail.com",
    href: "mailto:caddsystemps@gmail.com",
  },
  {
    icon: Phone,
    label: "+51 982 057 635",
    href: "tel:+51982057635",
  },
  {
    icon: MapPin,
    label: "Calle Tobias Meyer 124, San Martín de Porres, Lima, Perú",
    href: "https://maps.google.com/?q=Calle+Tobias+Meyer+124+San+Martin+de+Porres+Lima",
  },
  {
    icon: Clock,
    label: "Lun - Vie: 9:00 - 18:00",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="section-padding bg-bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="inline-block eyebrow mb-4">
            Contacto
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display text-text-primary">
            ¿Listo para transformar
            <br />
            tu infraestructura?
          </h2>

          {/* Subtext */}
          <p className="text-lg mb-12 font-body text-text-secondary">
            Respondemos en menos de 24 horas. Sin formularios, sin esperas.
          </p>

          {/* WhatsApp CTA */}
          <div className="mb-12">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 font-body bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] backdrop-blur-sm hover:bg-[#25d366]/20 hover:border-[#25d366]/50 hover:scale-105"
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
                    className="flex items-center gap-2 transition-colors duration-200 font-body text-sm text-text-secondary hover:text-text-primary no-underline"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                    {item.label}
                  </a>
                  {i < contactItems.length - 1 && (
                    <div className="hidden md:block h-4 w-px bg-white/10" />
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Google Maps */}
        <AnimatedSection className="mt-16">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/[0.05]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.0!2d-77.08!3d-11.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU4JzQ4LjAiUyA3N8KwMDQnNDguMCJX!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de CAD SYSTEMPS"
              className="absolute inset-0"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
