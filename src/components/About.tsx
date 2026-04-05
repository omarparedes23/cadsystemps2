"use client";

import Image from "next/image";
import { BookOpen, Target, Eye } from "lucide-react";
import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const cards = [
  {
    label: "Historia",
    icon: BookOpen,
    title: "Nuestra Historia",
    text: "Somos una empresa dedicada a brindar soluciones tecnológicas innovadoras y de alta calidad. Con vasta experiencia en la industria y un equipo de profesionales altamente capacitados, optimizamos procesos empresariales y promovemos el crecimiento sostenible.",
  },
  {
    label: "Misión",
    icon: Target,
    title: "Nuestra Misión",
    text: "Proporcionar soluciones tecnológicas que impulsen el crecimiento y la eficiencia de nuestros clientes. Nos adaptamos a las necesidades específicas de cada empresa utilizando las últimas tecnologías para asegurar el éxito en cada proyecto.",
  },
  {
    label: "Visión",
    icon: Eye,
    title: "Nuestra Visión",
    text: "Ser líderes en tecnología, reconocidos por transformar ideas en realidad mediante soluciones avanzadas. Aspiramos a ser el socio de confianza para empresas peruanas, con innovación constante y un enfoque centrado en el cliente.",
  },
];

function AboutCard({
  card,
}: {
  card: (typeof cards)[0];
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(12px)",
        border: hovered
          ? "1px solid rgba(34,211,238,0.3)"
          : "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 0 30px -10px rgba(34,211,238,0.15), 0 0 0 1px rgba(255,255,255,0.06)"
          : "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px -4px rgba(0,0,0,0.5)",
        transition: "transform 300ms ease-out, border-color 300ms, box-shadow 300ms",
      }}
    >
      {/* Label eyebrow */}
      <span
        style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#22d3ee",
          fontFamily: "var(--font-inter)",
          marginBottom: "1rem",
          display: "block",
        }}
      >
        {card.label}
      </span>

      {/* Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(34,211,238,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
          flexShrink: 0,
        }}
      >
        <Icon size={20} strokeWidth={1.5} color="#22d3ee" />
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold mb-3"
        style={{ color: "#f8fafc", fontFamily: "var(--font-syne)" }}
      >
        {card.title}
      </h3>

      {/* Body */}
      <p
        className="leading-relaxed flex-1"
        style={{ color: "#94a3b8", fontFamily: "var(--font-inter)", fontSize: "0.9375rem" }}
      >
        {card.text}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="nosotros"
      style={{ padding: "8rem 0", background: "#030712" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — centered */}
        <AnimatedSection className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#22d3ee", fontFamily: "var(--font-inter)" }}
          >
            Acerca de nosotros
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto"
            style={{ color: "#f8fafc", fontFamily: "var(--font-syne)" }}
          >
            Tecnología innovadora
            <br />
            para tu empresa.
          </h2>
          <p
            className="mt-5 text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8", fontFamily: "var(--font-inter)" }}
          >
            Equipo de profesionales altamente capacitados comprometidos con la
            excelencia tecnológica y el crecimiento de nuestros clientes.
          </p>
        </AnimatedSection>

        {/* Banner image */}
        <AnimatedSection className="mb-12">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "320px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src="/images/servicios4.jpg"
              alt="CAD SYSTEMPS — soluciones tecnológicas"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(3,7,18,0.65) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                padding: "3rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#22d3ee",
                    fontFamily: "var(--font-inter)",
                    marginBottom: "0.75rem",
                  }}
                >
                  CAD SYSTEMPS
                </p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#f8fafc",
                    fontFamily: "var(--font-syne)",
                    maxWidth: "420px",
                    lineHeight: 1.3,
                  }}
                >
                  Soluciones informáticas para empresas y particulares en Lima, Perú.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <AboutCard card={card} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
