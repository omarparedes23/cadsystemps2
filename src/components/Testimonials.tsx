"use client";

import { Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    name: "Mariluz Rodriguez",
    role: "Propietaria",
    company: "Uniks Salón & Spa",
    text: "CAD SYSTEMPS desarrolló la página web de mi salón y los resultados fueron increíbles. Desde que la lanzamos recibimos más consultas y mis clientas pueden ver todos nuestros servicios antes de visitarnos. Muy profesionales y atentos durante todo el proceso.",
  },
  {
    name: "Carlos Mendoza",
    role: "Gerente de Operaciones",
    company: "Grupo Logístico del Norte",
    text: "CAD SYSTEMPS transformó completamente nuestra gestión de inventario. El sistema a medida que desarrollaron redujo nuestros tiempos de proceso en un 60%. Su equipo entendió nuestras necesidades desde el primer día.",
  },
  {
    name: "Roberto Huamán",
    role: "CEO",
    company: "Inversiones Andinas SAC",
    text: "Contratamos su consultoría estratégica para modernizar nuestra infraestructura. El análisis fue profundo y las recomendaciones nos ahorraron miles de soles en costos operativos el primer año.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="glass-card p-8 flex flex-col h-full">
      <Quote size={24} strokeWidth={1.5} className="text-accent/50 mb-4" />
      <p className="leading-relaxed flex-1 font-body text-text-secondary text-[0.9375rem] mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold font-display text-accent">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold font-display text-text-primary">
            {testimonial.name}
          </p>
          <p className="text-xs font-body text-text-muted">
            {testimonial.role} — {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block eyebrow mb-4">Testimonios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display text-text-primary">
            Lo que dicen nuestros
            <br />
            clientes.
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto font-body text-text-secondary">
            Resultados medibles y relaciones de confianza construidas proyecto tras proyecto.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
