"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, MessageCircle, Terminal, Cpu, TrendingUp } from "lucide-react";

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * 0.3;
    const dy = (e.clientY - centerY) * 0.3;
    x.set(Math.max(-15, Math.min(15, dx)));
    y.set(Math.max(-15, Math.min(15, dy)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  );
}

function HeroVisual() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const metrics = [
    { label: "Proyectos entregados", value: "40+", icon: TrendingUp },
    { label: "Clientes activos", value: "18", icon: Cpu },
    { label: "Uptime garantizado", value: "99.9%", icon: Terminal },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Glow behind card */}
      <div
        className="absolute inset-0 rounded-2xl blur-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Main card */}
      <motion.div
        animate={mounted ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-sm rounded-2xl p-6 bg-white/[0.015] border border-white/[0.06] backdrop-blur-xl"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px -4px rgba(0,0,0,0.6), 0 0 40px -10px rgba(59,130,246,0.12)",
        }}
      >
        {/* Card header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs ml-auto font-body text-text-muted">
            sistema.cad — producción
          </span>
        </div>

        {/* Code lines */}
        <div className="text-xs leading-relaxed mb-4 font-mono text-text-muted">
          <div>
            <span className="text-text-secondary">const</span>{" "}
            <span className="text-accent">sistema</span>{" "}
            <span className="text-text-secondary">=</span>{" "}
            <span className="text-text-primary">await</span>{" "}
          </div>
          <div className="pl-4">
            <span className="text-text-primary">CAD</span>
            <span className="text-text-secondary">.</span>
            <span className="text-accent">build</span>
            <span className="text-text-secondary">(&#123;</span>
          </div>
          <div className="pl-8">
            <span className="text-text-secondary">precision:</span>{" "}
            <span className="text-green-400">&quot;máxima&quot;</span>
            <span className="text-text-secondary">,</span>
          </div>
          <div className="pl-8">
            <span className="text-text-secondary">plazo:</span>{" "}
            <span className="text-green-400">&quot;acordado&quot;</span>
            <span className="text-text-secondary">,</span>
          </div>
          <div className="pl-8">
            <span className="text-text-secondary">soporte:</span>{" "}
            <span className="text-amber-400">true</span>
          </div>
          <div className="pl-4">
            <span className="text-text-secondary">&#125;)</span>
          </div>
        </div>

        {/* Status line */}
        <div className="flex items-center gap-2 py-2 px-3 rounded-lg mb-4 bg-accent/[0.06] border border-accent/[0.12]">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-body text-accent">
            Sistema en producción — operando
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="flex flex-col items-center p-2 rounded-lg bg-white/[0.015] border border-white/[0.05]"
              >
                <Icon size={14} strokeWidth={1.5} className="text-text-muted mb-1" />
                <span className="text-sm font-bold font-display text-text-primary">
                  {m.value}
                </span>
                <span className="text-[9px] text-center leading-tight mt-0.5 font-body text-text-muted">
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        animate={mounted ? { y: [0, -6, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-bg-secondary/90 border border-white/[0.06] backdrop-blur-xl"
        style={{ boxShadow: "0 4px 20px -4px rgba(0,0,0,0.6)" }}
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-xs font-body text-text-secondary">
          Entrega puntual
        </span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden hero-grid bg-bg-primary"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-radial-accent absolute inset-0" />
        <div className="bg-radial-blue absolute inset-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text content — cols 1-7 */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block eyebrow mb-6">
                Consultoría Tecnológica en Lima
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6 font-display text-text-primary"
            >
              Tu visión,
              <br />
              ejecutada con
              <br />
              <span className="bg-gradient-to-b from-text-primary to-text-primary/60 bg-clip-text text-transparent">
                precisión digital.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-body text-text-secondary"
            >
              Desarrollamos sistemas a medida, capacitamos a tu equipo y
              modernizamos tu infraestructura. Resultados desde el primer mes.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              {/* Primary CTA — magnetic */}
              <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 bg-accent text-bg-primary font-body cursor-pointer">
                <a href="#servicios" className="flex items-center gap-2">
                  Explorar soluciones
                  <ArrowRight size={16} strokeWidth={1.5} />
                </a>
              </MagneticButton>

              {/* Secondary CTA */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 bg-white/5 border border-white/10 text-text-primary backdrop-blur-sm font-body hover:bg-white/10 hover:border-white/20"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Hablemos
              </a>
            </motion.div>
          </div>

          {/* Hero visual — cols 8-12 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />
    </section>
  );
}
