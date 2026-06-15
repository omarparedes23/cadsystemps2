"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Cloud, Code2, Globe, LineChart } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    badge: "Software",
    icon: Code2,
    image: "/images/servicios2.png",
    title: "Desarrollo de Software a Medida",
    desc: "Sistemas adaptados exactamente a los procesos de tu empresa. Desde aplicaciones web hasta ERP completos — construimos lo que necesitas, no lo que nos es fácil vender.",
  },
  {
    badge: "Web",
    icon: Globe,
    image: "/images/servicios1.png",
    title: "Páginas Web para Empresas",
    desc: "Diseño y desarrollo de sitios web profesionales optimizados para Google. Landing pages, portales corporativos y tiendas online con SEO desde el primer día.",
  },
  {
    badge: "Cloud",
    icon: Cloud,
    image: "/images/servicios3.jpg",
    title: "Migración a la Nube",
    desc: "Trasladamos tu infraestructura a AWS, Azure o Google Cloud sin interrumpir tu operación. Servidores más rápidos, costos controlados y backups automáticos garantizados.",
  },
  {
    badge: "Consultoría",
    icon: LineChart,
    image: "/images/servicios4.jpg",
    title: "Consultoría IT Empresarial",
    desc: "Auditamos tu infraestructura tecnológica, identificamos cuellos de botella y trazamos una hoja de ruta de modernización con ROI proyectado desde el primer mes.",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (cardRef.current) {
      cardRef.current.style.setProperty("--mouse-x", `${x}%`);
      cardRef.current.style.setProperty("--mouse-y", `${y}%`);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="spotlight-card h-full flex flex-col rounded-2xl bg-white/[0.015] cursor-default overflow-hidden transition-all duration-300"
      style={{
        border: hovered
          ? "1px solid rgba(59,130,246,0.2)"
          : "1px solid rgba(255,255,255,0.05)",
        boxShadow: hovered
          ? "0 0 30px -10px rgba(59,130,246,0.1)"
          : "0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px -4px rgba(0,0,0,0.6)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Image */}
      <div className="relative w-full h-[160px] flex-shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/85" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Badge */}
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 mb-4 w-fit">
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-accent font-body">
            {service.badge}
          </span>
        </div>

        {/* Icon */}
        <Icon size={24} strokeWidth={1.5} className="text-text-primary mb-3" />

        {/* Title */}
        <h3 className="text-base font-semibold mb-2 font-display text-text-primary">
          {service.title}
        </h3>

        {/* Description */}
        <p className="leading-relaxed flex-1 font-body text-text-secondary text-sm">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block eyebrow mb-4">Servicios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display text-text-primary">
            Soluciones diseñadas
            <br />
            para escalar.
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto font-body text-text-secondary">
            Cada servicio genera valor medible en tu operación desde el primer día.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
