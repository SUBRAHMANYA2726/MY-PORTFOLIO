import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://my-portfolio-jn1z.vercel.app/sitemap.xml",
  };
}
