import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAD SYSTEMPS | Consultoría Informática y Desarrollo de Software en Lima",
  description:
    "Desarrollamos sistemas a medida, capacitamos equipos y modernizamos infraestructura IT para empresas peruanas. Resultados desde el primer mes.",
  keywords: [
    "consultoría informática Lima",
    "desarrollo de software Perú",
    "capacitación corporativa TI",
    "transformación digital",
    "sistemas a medida",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
