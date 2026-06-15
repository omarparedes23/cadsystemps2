import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

interface Project {
  name: string;
  type: string;
  location: string;
  description: string;
  url: string;
  tags: string[];
  accent: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: "Uniks Salón & Spa",
    type: "Salón de Belleza & Spa",
    location: "San Borja, Lima",
    description:
      "Landing page profesional para salón especializado en transformaciones capilares. Diseño elegante, galería de servicios y formulario de contacto optimizado para conversión.",
    url: "https://unikssalonspa.pe/",
    tags: ["Diseño Web", "Landing Page", "SEO"],
    accent: "from-pink-500/20 to-rose-500/20",
    image: "/images/uniks-salon-spa.jpg",
  },
  {
    name: "Kushpa Importaciones",
    type: "Tienda Online de Importaciones",
    location: "Lima, Perú",
    description:
      "E-commerce completo para importadora peruana con más de 1,000 productos. Carrito de compras, pasarela de pagos (Yape, Plin, tarjeta), gestión de inventario y envío express a todo el Perú.",
    url: "https://kushpaimportaciones.vercel.app/",
    tags: ["E-commerce", "Tienda Online", "Pasarela de Pagos"],
    accent: "from-indigo-500/20 to-blue-500/20",
    image: "/images/kushpa-importaciones.jpg",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group glass-card overflow-hidden h-full flex flex-col">
      {/* Preview header — screenshot */}
      <div className="relative h-[200px] flex-shrink-0 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Captura de pantalla de ${project.name}`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex flex-col justify-between p-4`}>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="flex-1 mx-3 bg-white/10 rounded px-3 py-1">
                <span className="text-[10px] text-white/50 font-mono">
                  {project.url.replace("https://", "")}
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white/90">{project.name}</p>
              <p className="text-xs text-white/50 mt-1">{project.location}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-secondary/60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">
          {project.type}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
        >
          Ver proyecto
          <ExternalLink size={14} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block eyebrow mb-4">Portafolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display text-text-primary">
            Proyectos que hablan
            <br />
            por sí solos.
          </h2>
          <p className="mt-6 text-lg max-w-xl mx-auto font-body text-text-secondary">
            Cada proyecto entregado es una prueba de nuestro compromiso con la
            calidad y los resultados reales.
          </p>
        </AnimatedSection>

        {/* Grid — crece conforme se agregan proyectos */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
