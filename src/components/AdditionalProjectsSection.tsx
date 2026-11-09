"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { additionalProjects } from "@/data/projects";

export function AdditionalProjectsSection() {
  return (
    <section id="additional" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Additional Projects</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            Further work.
          </h2>
          <div className="editorial-rule mt-5 w-16" />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {additionalProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#B64A32] uppercase">
                  {project.title === "KRISHICONNECT" ? "Additional" : "Additional"}
                </span>
                <span className="text-[11px] tracking-[0.12em] text-[#756B62] uppercase">{project.tagline}</span>
              </div>
              <h3 className="font-display mt-3 text-2xl font-medium tracking-tight text-[#28221E]">{project.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#756B62]">{project.description}</p>
              {project.title === "KRISHICONNECT" ? (
                <p className="mt-3 text-xs leading-relaxed text-[#B64A32]">
                  Mandi prices use the repository’s clearly labelled sample dataset — not a live market feed.
                </p>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full border border-[#E3D9CF] bg-[#F4EFE7] px-2.5 py-1 text-xs font-medium text-[#756B62]">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.github ? (
                  <Button variant="secondary" size="sm" href={project.github} external aria-label={`View ${project.title} on GitHub`}>
                    <Github className="size-4" />
                    GitHub
                  </Button>
                ) : null}
                {project.live ? (
                  <Button variant="tertiary" size="sm" href={project.live} external aria-label={`Open live demo of ${project.title}`}>
                    Live
                    <ExternalLink className="size-3.5" />
                  </Button>
                ) : null}
                <Button variant="tertiary" size="sm" href="#contact" aria-label="Contact me about this project">
                  Details
                  <ArrowUpRight className="size-3.5" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
