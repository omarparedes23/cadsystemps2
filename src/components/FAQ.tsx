"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sistema a medida?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Un sistema básico puede estar listo en 4-6 semanas, mientras que proyectos empresariales complejos pueden requerir 3-6 meses. Durante la primera reunión, te entregamos un cronograma detallado con hitos claros.",
  },
  {
    question: "¿Ofrecen soporte técnico después de la entrega?",
    answer:
      "Sí, todos nuestros proyectos incluyen un período de garantía de 3 meses con soporte técnico prioritario. Además, ofrecemos planes de mantenimiento mensuales que incluyen actualizaciones, respaldos, monitoreo y atención de incidencias con tiempos de respuesta garantizados.",
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer:
      "Trabajamos con tecnologías modernas y escalables según las necesidades de cada proyecto: React, Next.js, Node.js, Python, bases de datos SQL y NoSQL, y servicios cloud (AWS, Azure, Google Cloud). Elegimos la stack tecnológica más adecuada para tu caso de uso específico.",
  },
  {
    question: "¿Las capacitaciones son presenciales o virtuales?",
    answer:
      "Ofrecemos ambas modalidades. Las sesiones presenciales están disponibles en Lima y Callao, mientras que las virtuales se realizan mediante plataformas colaborativas con material didáctico interactivo. Adaptamos el formato según las preferencias y ubicación de tu equipo.",
  },
  {
    question: "¿Cómo se calcula el costo de una consultoría IT?",
    answer:
      "Realizamos una auditoría inicial gratuita para entender tu infraestructura actual. A partir de ahí, elaboramos una propuesta técnica y económica detallada con alternativas según tu presupuesto. No hay costos ocultos: todo se define por escrito antes de iniciar.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="glass-card overflow-hidden"
      style={{ transform: "none", boxShadow: undefined }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-white/[0.02]"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold font-display text-text-primary pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} strokeWidth={1.5} className="text-text-muted" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6">
              <p className="font-body text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block eyebrow mb-4">Preguntas frecuentes</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-display text-text-primary">
            Resolvemos tus dudas.
          </h2>
          <p className="mt-6 text-lg font-body text-text-secondary">
            Todo lo que necesitas saber antes de empezar tu proyecto.
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.question}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
