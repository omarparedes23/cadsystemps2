"use client";

import Image from "next/image";
import { BookOpen, Target, Eye } from "lucide-react";
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
  const Icon = card.icon;

  return (
    <div className="glass-card p-8 flex flex-col h-full group">
      {/* Label eyebrow */}
      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent font-body mb-4 block">
        {card.label}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-5 flex-shrink-0">
        <Icon size={20} strokeWidth={1.5} className="text-accent" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-3 font-display text-text-primary">
        {card.title}
      </h3>

      {/* Body */}
      <p className="leading-relaxed flex-1 font-body text-text-secondary text-[0.9375rem]">
        {card.text}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="nosotros"
      className="section-padding bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — centered */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block eyebrow mb-4">
            Acerca de nosotros
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto font-display text-text-primary">
            Tecnología innovadora
            <br />
            para tu empresa.
          </h2>
          <p className="mt-5 text-lg max-w-2xl mx-auto font-body text-text-secondary">
            Equipo de profesionales altamente capacitados comprometidos con la
            excelencia tecnológica y el crecimiento de nuestros clientes.
          </p>
        </AnimatedSection>

        {/* Banner image */}
        <AnimatedSection className="mb-12">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/[0.05]">
            <Image
              src="/images/servicios4.jpg"
              alt="CAD SYSTEMPS — soluciones tecnológicas"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/65 to-transparent" />
            <div className="absolute inset-0 flex items-center p-12">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent font-body mb-3">
                  CAD SYSTEMPS
                </p>
                <p className="text-2xl font-bold text-text-primary font-display max-w-md leading-tight">
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
