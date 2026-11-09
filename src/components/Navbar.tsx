"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#featured" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled ? "border-[#E3D9CF] bg-[#F4EFE7]/95" : "border-transparent bg-[#F4EFE7]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          <a href="#home" className="flex min-h-[44px] items-center gap-3" aria-label="Subrahmanya Bhat — home">
            <span className="font-display flex size-10 items-center justify-center rounded-full border border-[#28221E] bg-[#28221E] text-sm font-semibold tracking-tight text-[#FBF9F5]">
              SB.
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-tight text-[#28221E]">Subrahmanya Bhat</span>
              <span className="text-[11px] tracking-[0.14em] text-[#756B62] uppercase">AI · ML · Software</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex min-h-[44px] items-center rounded-full px-3.5 text-sm font-medium text-[#756B62] transition-colors hover:bg-[#28221E]/[0.06] hover:text-[#28221E] focus-visible:ring-2 focus-visible:ring-[#B64A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE7] focus-visible:outline-none"
              >
                {link.name}
              </a>
            ))}
            <Button
              size="sm"
              className="ml-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Go to contact section"
            >
              Let&apos;s Talk
              <ArrowUpRight className="size-4" />
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="icon"
              size="icon"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#E3D9CF] bg-[#F4EFE7] md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-[#28221E] transition-colors hover:bg-[#28221E]/[0.06] focus-visible:ring-2 focus-visible:ring-[#B64A32] focus-visible:outline-none"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 pt-2 pb-1">
                <Button
                  className="w-full"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label="Go to contact section"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
