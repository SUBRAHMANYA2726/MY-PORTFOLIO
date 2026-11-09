"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socialLinks";

function WorkspaceBackground() {
  // Decorative CHITRALAYA AI workspace — pure CSS/HTML, never blocks interaction.
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-[8%] left-[2%] w-[62%] max-w-2xl rounded-2xl border border-[#28221E] bg-[#FBF9F5] p-4 blur-[0.4px]">
          {/* Preview canvas + settings */}
          <div className="flex gap-4">
            <div className="hero-parallax relative aspect-video flex-[1.6] overflow-hidden rounded-xl border border-[#28221E] bg-[#EEE8E0]">
              <div className="absolute inset-3 rounded-lg border border-dashed border-[#756B62]" />
              <div className="absolute top-3 left-3 h-1.5 w-16 rounded-full bg-[#28221E]/40" />
              <div className="absolute right-3 bottom-3 h-1.5 w-10 rounded-full bg-[#B64A32]/60" />
              <div className="hero-progress absolute right-3 bottom-8 h-1 w-24 overflow-hidden rounded-full bg-[#28221E]/15">
                <div className="h-full w-2/3 rounded-full bg-[#B64A32]/70" />
              </div>
            </div>
            <div className="hidden w-36 flex-col gap-2 sm:flex">
              <div className="h-7 rounded-full border border-[#756B62] bg-[#F4EFE7]" />
              <div className="h-7 rounded-full border border-[#756B62] bg-[#F4EFE7]" />
              <div className="flex gap-1.5">
                <span className="rounded-full border border-[#756B62] px-2 py-0.5 text-[9px] text-[#28221E]">16:9</span>
                <span className="rounded-full border border-[#28221E] bg-[#28221E]/10 px-2 py-0.5 text-[9px] text-[#28221E]">9:16</span>
              </div>
            </div>
          </div>
          {/* Scene strip */}
          <div className="mt-3 hidden gap-2 sm:flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-9 flex-1 rounded-md border border-[#28221E] bg-[#F4EFE7]" />
            ))}
          </div>
        </div>
        {/* Timeline */}
        <div className="absolute right-[2%] bottom-[6%] hidden w-[58%] max-w-xl rounded-2xl border border-[#28221E] bg-[#FBF9F5] p-4 md:block">
          <div className="flex justify-between text-[8px] tracking-[0.2em] text-[#756B62]">
            <span>PROMPT</span>
            <span>RENDER 62%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-[#EEE8E0]" />
          <div className="mt-3 space-y-2">
            <div className="h-5 rounded-md border border-[#28221E] bg-[#F1E2DA]" />
            <div className="h-5 w-3/4 rounded-md border border-[#28221E] bg-[#EEE8E0]" />
            <div className="h-3 w-1/2 rounded-full bg-[#756B62]/40" />
          </div>
          <div className="hero-playhead absolute top-8 bottom-3 left-[30%] w-px bg-[#B64A32]/80" />
        </div>
        <div className="hero-status absolute top-[16%] left-[62%] hidden items-center gap-1.5 text-[9px] tracking-[0.18em] text-[#28221E] lg:flex">
          <span className="size-1.5 rounded-full bg-[#B64A32]" />
          GENERATING
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36">
      <WorkspaceBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="max-w-3xl sm:pr-32">
            {/* Top-right corner avatar (desktop absolute; mobile above name) */}
            <Image
              src="/image-of-mine.jpg"
              alt="Portrait of Subrahmanya Manjunatha Bhat"
              width={128}
              height={128}
              priority
              className="size-[104px] rounded-full border-[3px] border-[#FBF9F5] object-cover shadow-[0_2px_8px_rgba(40,34,30,0.12)] sm:absolute sm:top-0 sm:right-0 sm:size-[128px]"
            />
            <p className="eyebrow mt-5">AI / ML · Software · Research</p>
            <h1 className="font-display mt-4 text-5xl leading-[0.98] font-medium tracking-tight text-balance text-[#28221E] uppercase sm:text-6xl lg:text-7xl">
              Subrahmanya Manjunatha Bhat
            </h1>
            <p className="font-display mt-6 max-w-prose border-l-2 border-[#B64A32] pl-4 text-xl leading-snug text-[#28221E] sm:text-2xl">
              Building ideas into meaningful technology.
            </p>
            <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-[#756B62] sm:text-base">
              AI/ML and software developer — Information Science &amp; Engineering student at Presidency University,
              Bengaluru. I build practical software and intelligent tools across machine learning and full-stack
              development.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}>
                Explore My Work
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                About Me
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2.5">
              <Button variant="icon" size="icon" href={socialLinks.github.href} external aria-label="GitHub profile">
                <Github className="size-4.5" />
              </Button>
              <Button variant="icon" size="icon" href={socialLinks.linkedin.href} external aria-label="LinkedIn profile">
                <Linkedin className="size-4.5" />
              </Button>
              <Button variant="icon" size="icon" href={socialLinks.email.href} aria-label="Email Subrahmanya Bhat">
                <Mail className="size-4.5" />
              </Button>
              <span className="ml-2 hidden text-xs text-[#756B62] sm:inline">Bengaluru, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
