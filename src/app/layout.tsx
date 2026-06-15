import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cadsystemps.com.pe"),
  title: {
    default: "CAD SYSTEMPS | Consultoría Informática y Desarrollo de Software en Lima",
    template: "%s | CAD SYSTEMPS",
  },
  description:
    "Desarrollamos sistemas a medida, capacitamos equipos y modernizamos infraestructura IT para empresas peruanas. Resultados desde el primer mes.",
  keywords: [
    "consultoría informática Lima",
    "desarrollo de software Perú",
    "capacitación corporativa TI",
    "transformación digital",
    "sistemas a medida",
    "outsourcing tecnológico",
    "soporte técnico empresas",
  ],
  authors: [{ name: "CAD SYSTEMPS" }],
  creator: "CAD SYSTEMPS",
  publisher: "CAD SYSTEMPS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://cadsystemps.com.pe",
    siteName: "CAD SYSTEMPS",
    title: "CAD SYSTEMPS | Consultoría Informática y Desarrollo de Software en Lima",
    description:
      "Desarrollamos sistemas a medida, capacitamos equipos y modernizamos infraestructura IT para empresas peruanas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CAD SYSTEMPS — Consultoría Informática en Lima, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAD SYSTEMPS | Consultoría Informática y Desarrollo de Software en Lima",
    description:
      "Desarrollamos sistemas a medida, capacitamos equipos y modernizamos infraestructura IT para empresas peruanas.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cadsystemps.com.pe",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
