import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cadsystemps.com.pe/#organization",
        name: "CAD SYSTEMPS",
        url: "https://cadsystemps.com.pe",
        logo: {
          "@type": "ImageObject",
          url: "https://cadsystemps.com.pe/og-image.jpg",
        },
        sameAs: [
          "https://wa.me/51982057635",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+51-982-057-635",
          contactType: "customer service",
          email: "caddsystemps@gmail.com",
          areaServed: "PE",
          availableLanguage: ["Spanish"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://cadsystemps.com.pe/#localbusiness",
        name: "CAD SYSTEMPS",
        image: "https://cadsystemps.com.pe/og-image.jpg",
        url: "https://cadsystemps.com.pe",
        telephone: "+51 982 057 635",
        email: "caddsystemps@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle Tobias Meyer 124",
          addressLocality: "San Martín de Porres",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-11.98",
          longitude: "-77.08",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": "https://cadsystemps.com.pe/#website",
        url: "https://cadsystemps.com.pe",
        name: "CAD SYSTEMPS",
        publisher: {
          "@id": "https://cadsystemps.com.pe/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://cadsystemps.com.pe/#webpage",
        url: "https://cadsystemps.com.pe",
        name: "CAD SYSTEMPS | Consultoría Informática y Desarrollo de Software en Lima",
        isPartOf: {
          "@id": "https://cadsystemps.com.pe/#website",
        },
        about: {
          "@id": "https://cadsystemps.com.pe/#organization",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-bg-primary">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
