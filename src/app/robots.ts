import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://cadsystemps.com.pe/sitemap.xml",
    host: "https://cadsystemps.com.pe",
  };
}
