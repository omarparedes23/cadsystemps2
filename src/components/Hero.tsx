"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

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

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Glow behind browser */}
      <div
        className="absolute inset-0 rounded-3xl blur-[60px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Browser frame */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 4px 40px -8px rgba(0,0,0,0.8), 0 0 60px -20px rgba(59,130,246,0.15)",
        }}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            background: "rgba(17,17,17,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3">
            <div
              className="rounded px-3 py-1 max-w-xs"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <span className="text-xs font-mono text-text-muted">
                sistema.cliente.pe/ventas
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot */}
        <Image
          src="/images/sistema-preview.jpg"
          alt="Sistema de gestión desarrollado por CAD SYSTEMPS — módulo de ventas"
          width={800}
          height={500}
          className="w-full block"
          priority
        />
      </div>

      {/* Badge — sistema en producción */}
      <motion.div
        animate={mounted ? { y: [0, -6, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-4 hidden lg:flex items-center gap-2.5 px-4 py-3 rounded-xl backdrop-blur-xl"
        style={{
          background: "rgba(17,17,17,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 20px -4px rgba(0,0,0,0.6)",
        }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.2)" }}>
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Sistema en producción</p>
          <p className="text-xs text-text-muted">Entrega puntual</p>
        </div>
      </motion.div>

      {/* Badge — a medida */}
      <motion.div
        animate={mounted ? { y: [0, -6, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-xl"
        style={{
          background: "rgba(17,17,17,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 20px -4px rgba(0,0,0,0.6)",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <p className="text-xs font-medium text-text-secondary">100% a medida</p>
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 font-display text-text-primary"
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
