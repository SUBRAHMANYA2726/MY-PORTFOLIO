"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Copy, Check, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { socialLinks, RESUME_REQUEST_MAILTO } from "@/data/socialLinks";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="border-t border-[#E3D9CF] bg-[#28221E] py-16 text-[#FBF9F5] sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Let&apos;s Connect</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#FBF9F5] sm:text-4xl">
            Explore my work, follow my journey, or get in touch.
          </h2>
          <div className="editorial-rule mt-5 w-16 opacity-30" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-[15px] leading-relaxed text-[#FBF9F5]/70">
              Whether you have a question, want to collaborate on a project, or simply want to say hello,
              feel free to drop a message. I read everything personally.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap gap-2.5">
                <Button variant="secondary" href={socialLinks.github.href} external aria-label="Open GitHub profile">
                  <Github className="size-4" />
                  GitHub
                </Button>
                <Button variant="secondary" href={socialLinks.linkedin.href} external aria-label="Open LinkedIn profile">
                  <Linkedin className="size-4" />
                  LinkedIn
                </Button>
                <Button variant="secondary" href={socialLinks.email.href} aria-label="Email Subrahmanya Bhat">
                  <Mail className="size-4" />
                  Email
                </Button>
                <Button variant="secondary" href={socialLinks.portfolio.href} aria-label="Open live portfolio">
                  <Globe className="size-4" />
                  Portfolio
                </Button>
                <Button variant="tertiary" href={socialLinks.contributions.href} external aria-label="View GitHub contribution activity">
                  <Activity className="size-4" />
                  GitHub Activity
                </Button>
              </div>
              <a
                href={socialLinks.email.href}
                className="flex min-h-[56px] items-center gap-4 rounded-2xl border border-[#E3D9CF] bg-[#FBF9F5] px-4 transition-colors hover:border-[#B64A32]/50 focus-visible:ring-2 focus-visible:ring-[#B64A32] focus-visible:outline-none"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F4EFE7] text-[#FBF9F5]">
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs tracking-[0.12em] text-[#FBF9F5]/70 uppercase">Email</span>
                  <span className="block truncate font-medium text-[#FBF9F5]">{socialLinks.email.address}</span>
                </span>
                <Button
                  variant="tertiary"
                  size="sm"
                  aria-label="Copy email address"
                  onClick={async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    try {
                      await navigator.clipboard.writeText(socialLinks.email.address);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    } catch {}
                  }}
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </a>
              <Button variant="secondary" onClick={() => { window.location.href = RESUME_REQUEST_MAILTO; }} aria-label="Request resume by email — no PDF published yet">
                <Mail className="size-4" />
                Request Resume
              </Button>
              <p className="text-sm text-[#FBF9F5]/70">
                Full résumé available on request — no PDF is published on this site yet.
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2 min-[480px]:grid-cols-2">
                <p className="flex items-center gap-2.5 text-sm text-[#FBF9F5]/70">
                  <Phone className="size-4 shrink-0 text-[#FBF9F5]" /> +91 7619240871
                </p>
                <p className="flex items-center gap-2.5 text-sm text-[#FBF9F5]/70">
                  <MapPin className="size-4 shrink-0 text-[#FBF9F5]" /> Bengaluru, India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] p-6 sm:p-7"
              aria-label="Contact form"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#FBF9F5]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 w-full rounded-full border border-[#E3D9CF] bg-[#F4EFE7] px-5 text-[15px] text-[#28221E] placeholder:text-[#756B62]/60 focus:border-[#B64A32] focus:ring-2 focus:ring-[#B64A32]/40 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#FBF9F5]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 w-full rounded-full border border-[#E3D9CF] bg-[#F4EFE7] px-5 text-[15px] text-[#28221E] placeholder:text-[#756B62]/60 focus:border-[#B64A32] focus:ring-2 focus:ring-[#B64A32]/40 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#FBF9F5]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full resize-none rounded-3xl border border-[#E3D9CF] bg-[#F4EFE7] px-5 py-4 text-[15px] text-[#28221E] placeholder:text-[#756B62]/60 focus:border-[#B64A32] focus:ring-2 focus:ring-[#B64A32]/40 focus:outline-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <Button variant="accent" type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending…" : "Send Message"}
                  {!loading ? <Send className="size-4" /> : null}
                </Button>
                <p role="status" className="text-center text-sm text-[#FBF9F5]/70" aria-live="polite">
                  {status === "sent" ? "Message sent successfully. Thank you — I’ll get back to you shortly." : ""}
                  {status === "error" ? "Something went wrong. Please try again or email me directly." : ""}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
