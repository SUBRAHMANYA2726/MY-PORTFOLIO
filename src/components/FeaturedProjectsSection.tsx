"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { featuredProjects, type Project } from "@/data/projects";

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const isFirst = index === 0;
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden rounded-[2rem] border border-[#E3D9CF] bg-[#FBF9F5] ${
        isFirst ? "shadow-[0_2px_8px_rgba(40,34,30,0.06),0_20px_48px_rgba(40,34,30,0.10)]" : ""
      }`}
    >
      <div className={`grid gap-0 ${isFirst ? "lg:grid-cols-[0.92fr_1.08fr]" : "lg:grid-cols-[1.08fr_0.92fr]"}`}>
        <div className={`${isFirst ? "bg-[#28221E] text-[#FBF9F5]" : "bg-[#F4EFE7] text-[#28221E]"} px-7 py-9 sm:px-9 sm:py-11 ${isFirst ? "" : "lg:order-2"}`}>
          <p className={`text-[11px] font-semibold tracking-[0.16em] uppercase ${isFirst ? "text-[#B64A32]" : "text-[#B64A32]"}`}>
            Featured Project 0{index + 1}
          </p>
          <h3 className="font-display mt-3 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">{project.title}</h3>
          <p className={`mt-2 text-sm ${isFirst ? "text-[#FBF9F5]/70" : "text-[#756B62]"}`}>{project.tagline}</p>
          <p className={`mt-4 max-w-prose text-[15px] leading-relaxed ${isFirst ? "text-[#FBF9F5]/85" : "text-[#756B62]"}`}>{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                  isFirst ? "border-[#FBF9F5]/25 bg-[#FBF9F5]/10 text-[#FBF9F5]/85" : "border-[#E3D9CF] bg-[#FBF9F5] text-[#756B62]"
                }`}
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {project.github ? (
              <Button variant="secondary" href={project.github} external aria-label={`View ${project.title} on GitHub`}>
                <Github className="size-4" />
                View Project
              </Button>
            ) : null}
            {project.live ? (
              <Button variant="tertiary" href={project.live} external aria-label={`Open live demo of ${project.title}`}>
                Live
                <ArrowUpRight className="size-3.5" />
              </Button>
            ) : null}
          </div>
          <p className={`mt-4 text-xs ${isFirst ? "text-[#FBF9F5]/55" : "text-[#756B62]"}`}>
            {project.screenshot ? "Genuine project screenshot" : "Genuine screenshot — TODO: add from running project"}
          </p>
        </div>
        <div className={`flex items-center bg-[#FBF9F5] px-7 py-9 sm:px-9 ${isFirst ? "" : "lg:order-1"}`}>
          <div className="w-full rounded-3xl border border-dashed border-[#EEE8E0] bg-[#F4EFE7] p-8 text-center">
            <p className="font-display text-lg font-medium text-[#28221E]">No synthetic screenshots</p>
            <p className="mt-2 text-sm leading-relaxed text-[#756B62]">
              Real captures from the running app will appear here. Until then this placeholder reports the missing asset.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section id="featured" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Featured Projects</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            Two studies in intelligent software.
          </h2>
          <div className="editorial-rule mt-5 w-16" />
        </motion.div>
        <div className="space-y-6">
          {featuredProjects.map((project, idx) => (
            <FeaturedCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
