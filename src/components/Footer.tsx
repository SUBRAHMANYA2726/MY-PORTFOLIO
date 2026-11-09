"use client";

import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socialLinks";

const columns = [
  { title: "Explore", links: [{ name: "Home", href: "#home" }, { name: "About", href: "#about" }, { name: "Featured", href: "#featured" }, { name: "Skills", href: "#skills" }] },
  { title: "Work", links: [{ name: "Solo Projects", href: "#projects" }, { name: "Additional", href: "#additional" }, { name: "Partnerships", href: "#partnership" }, { name: "Experience", href: "#experience" }] },
  { title: "Connect", links: [{ name: "GitHub", href: socialLinks.github.href }, { name: "LinkedIn", href: socialLinks.linkedin.href }, { name: "Portfolio", href: socialLinks.portfolio.href }, { name: "GitHub Activity", href: socialLinks.contributions.href }] },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E3D9CF] bg-[#FBF9F5] text-[#28221E]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="flex min-h-[44px] items-center gap-3" aria-label="Back to top">
              <span className="font-display flex size-10 items-center justify-center rounded-full border border-[#28221E] bg-[#28221E] text-sm font-semibold text-[#FBF9F5]">
                SB
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold">Subrahmanya Bhat</span>
                <span className="block text-[11px] tracking-[0.14em] text-[#756B62] uppercase">AI · ML · Software · Data</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#756B62]">
              Building intelligent ideas into useful real-world experiences.
            </p>
            <div className="mt-5 flex gap-2.5">
              <Button variant="icon" size="icon" href={socialLinks.github.href} external aria-label="GitHub profile">
                <Github className="size-4.5" />
              </Button>
              <Button variant="icon" size="icon" href={socialLinks.linkedin.href} external aria-label="LinkedIn profile">
                <Linkedin className="size-4.5" />
              </Button>
              <Button variant="icon" size="icon" href={socialLinks.email.href} aria-label="Email Subrahmanya Bhat">
                <Mail className="size-4.5" />
              </Button>
            </div>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.14em] text-[#B64A32] uppercase">{col.title}</h3>
              <ul className="mt-4 space-y-1">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[44px] items-center rounded-lg text-sm text-[#756B62] transition-colors hover:text-[#28221E] focus-visible:ring-2 focus-visible:ring-[#B64A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F5] focus-visible:outline-none"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="flex min-h-[44px] items-center rounded-lg text-sm text-[#756B62] transition-colors hover:text-[#28221E] focus-visible:ring-2 focus-visible:ring-[#B64A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F5] focus-visible:outline-none"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-[#E3D9CF] pt-6 text-xs text-[#756B62] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Subrahmanya Manjunatha Bhat. All rights reserved.</p>
          <p>Bengaluru, India · Presidency University</p>
        </div>
      </div>
    </footer>
  );
}
