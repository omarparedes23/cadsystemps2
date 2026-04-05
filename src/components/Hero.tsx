"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, MessageCircle, Terminal, Cpu, TrendingUp } from "lucide-react";

function MagneticButton({
  children,
  className,
  style,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
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
      style={{ x: springX, y: springY, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
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
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Main card */}
      <motion.div
        animate={mounted ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-sm"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px -4px rgba(0,0,0,0.5), 0 0 40px -10px rgba(34,211,238,0.15)",
          backdropFilter: "blur(12px)",
          padding: "1.5rem",
        }}
      >
        {/* Card header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span
            className="text-xs ml-auto"
            style={{ color: "#64748b", fontFamily: "var(--font-inter)" }}
          >
            sistema.cad — producción
          </span>
        </div>

        {/* Code lines */}
        <div
          className="text-xs leading-relaxed mb-4 font-mono"
          style={{ color: "#64748b" }}
        >
          <div>
            <span style={{ color: "#94a3b8" }}>const</span>{" "}
            <span style={{ color: "#22d3ee" }}>sistema</span>{" "}
            <span style={{ color: "#94a3b8" }}>=</span>{" "}
            <span style={{ color: "#f8fafc" }}>await</span>{" "}
          </div>
          <div className="pl-4">
            <span style={{ color: "#f8fafc" }}>CAD</span>
            <span style={{ color: "#94a3b8" }}>.</span>
            <span style={{ color: "#22d3ee" }}>build</span>
            <span style={{ color: "#94a3b8" }}>(&#123;</span>
          </div>
          <div className="pl-8">
            <span style={{ color: "#94a3b8" }}>precision:</span>{" "}
            <span style={{ color: "#86efac" }}>&quot;máxima&quot;</span>
            <span style={{ color: "#94a3b8" }}>,</span>
          </div>
          <div className="pl-8">
            <span style={{ color: "#94a3b8" }}>plazo:</span>{" "}
            <span style={{ color: "#86efac" }}>&quot;acordado&quot;</span>
            <span style={{ color: "#94a3b8" }}>,</span>
          </div>
          <div className="pl-8">
            <span style={{ color: "#94a3b8" }}>soporte:</span>{" "}
            <span style={{ color: "#fbbf24" }}>true</span>
          </div>
          <div className="pl-4">
            <span style={{ color: "#94a3b8" }}>&#125;)</span>
          </div>
        </div>

        {/* Status line */}
        <div
          className="flex items-center gap-2 py-2 px-3 rounded-lg mb-4"
          style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.12)" }}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs" style={{ color: "#22d3ee", fontFamily: "var(--font-inter)" }}>
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
                className="flex flex-col items-center p-2 rounded-lg"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Icon size={14} strokeWidth={1.5} style={{ color: "#64748b", marginBottom: "4px" }} />
                <span
                  className="text-sm font-bold"
                  style={{ color: "#f8fafc", fontFamily: "var(--font-syne)" }}
                >
                  {m.value}
                </span>
                <span
                  className="text-[9px] text-center leading-tight mt-0.5"
                  style={{ color: "#64748b", fontFamily: "var(--font-inter)" }}
                >
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
        className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 px-3 py-2 rounded-full"
        style={{
          background: "rgba(11,15,25,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px -4px rgba(0,0,0,0.5)",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-xs" style={{ color: "#94a3b8", fontFamily: "var(--font-inter)" }}>
          Entrega puntual
        </span>
      </motion.div>
    </div>
  );
}

export default function Hero({ onTabChange }: { onTabChange?: (tab: string) => void }) {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden hero-grid"
      style={{ background: "#030712" }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-radial-cyan absolute inset-0" />
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
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: "#22d3ee", fontFamily: "var(--font-inter)" }}
              >
                Consultoría Tecnológica en Lima
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span style={{ color: "#f8fafc" }}>Tu visión,</span>
              <br />
              <span style={{ color: "#f8fafc" }}>ejecutada con</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(180deg, #f8fafc 0%, rgba(248,250,252,0.6) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                precisión digital.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "#94a3b8", fontFamily: "var(--font-inter)" }}
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
              <MagneticButton
                onClick={() => onTabChange?.("servicios")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  background: "#22d3ee",
                  color: "#030712",
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                }}
              >
                Explorar soluciones
                <ArrowRight size={16} strokeWidth={1.5} />
              </MagneticButton>

              {/* Secondary CTA */}
              <button
                onClick={() => onTabChange?.("contacto")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f8fafc",
                  backdropFilter: "blur(8px)",
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Hablemos
              </button>
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
        style={{
          background: "linear-gradient(to bottom, transparent, #030712)",
        }}
      />
    </section>
  );
}
