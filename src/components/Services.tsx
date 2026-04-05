"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Code2, GraduationCap, LineChart } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    badge: "Capacitación",
    icon: GraduationCap,
    image: "/images/servicios1.png",
    title: "Capacitación en Sistemas",
    desc: "Programas de formación personalizados para empresas y particulares. Integramos sistemas y aplicaciones para crear una infraestructura tecnológica coherente que mejora la productividad y reduce costos operativos.",
  },
  {
    badge: "Software",
    icon: Code2,
    image: "/images/servicios2.png",
    title: "Desarrollo de Sistemas a Medida",
    desc: "Nos especializamos en el desarrollo de sistemas adaptados a las necesidades específicas de tu empresa. Cada negocio es único y requiere soluciones personalizadas para optimizar procesos y alcanzar objetivos estratégicos.",
  },
  {
    badge: "Consultoría",
    icon: LineChart,
    image: "/images/servicios3.jpg",
    title: "Consultoría Estratégica IT",
    desc: "Auditamos tu infraestructura IT, identificamos cuellos de botella y trazamos hojas de ruta de modernización con ROI proyectado desde el día uno.",
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
      className="spotlight-card"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.02)",
        border: hovered
          ? "1px solid rgba(34,211,238,0.25)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hovered
          ? "0 0 30px -10px rgba(34,211,238,0.12)"
          : "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px -4px rgba(0,0,0,0.5)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 300ms ease-out, border-color 300ms, box-shadow 300ms",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", height: "180px", flexShrink: 0 }}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(11,15,25,0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "3px 10px",
            borderRadius: "9999px",
            background: "rgba(34,211,238,0.1)",
            border: "1px solid rgba(34,211,238,0.2)",
            marginBottom: "1rem",
            width: "fit-content",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#22d3ee",
              fontFamily: "var(--font-inter)",
            }}
          >
            {service.badge}
          </span>
        </div>

        {/* Icon */}
        <Icon
          size={28}
          strokeWidth={1.5}
          color="#f8fafc"
          style={{ marginBottom: "0.75rem" }}
        />

        {/* Title */}
        <h3
          className="text-xl font-semibold mb-3"
          style={{ color: "#f8fafc", fontFamily: "var(--font-syne)" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed flex-1"
          style={{ color: "#94a3b8", fontFamily: "var(--font-inter)", fontSize: "0.9375rem" }}
        >
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      style={{ padding: "8rem 0", background: "#0b0f19" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — centered */}
        <AnimatedSection className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#22d3ee", fontFamily: "var(--font-inter)" }}
          >
            Servicios
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#f8fafc", fontFamily: "var(--font-syne)" }}
          >
            Soluciones diseñadas
            <br />
            para escalar.
          </h2>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8", fontFamily: "var(--font-inter)" }}
          >
            Cada servicio genera valor medible en tu operación desde el primer día.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
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
