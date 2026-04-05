"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export type Tab = "inicio" | "nosotros" | "servicios" | "contacto";

export default function PageContent() {
  const [activeTab, setActiveTab] = useState<Tab>("inicio");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as Tab);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      <main style={{ minHeight: "100vh", background: "#030712" }}>
        {activeTab === "inicio" && <Hero onTabChange={handleTabChange} />}
        {activeTab === "nosotros" && <About />}
        {activeTab === "servicios" && <Services />}
        {activeTab === "contacto" && <Contact />}
      </main>
      <Footer onTabChange={handleTabChange} />
    </>
  );
}
