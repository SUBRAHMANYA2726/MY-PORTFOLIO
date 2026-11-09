"use client";

import { motion } from "framer-motion";
import { partnershipProjects } from "@/data/projects";

export function PartnershipSection() {
  return (
    <section id="partnership" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Partnership</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            Partnership Projects
          </h2>
          <div className="editorial-rule mt-5 w-16" />
          <p className="mt-4 text-sm leading-relaxed text-[#756B62] sm:text-[15px]">
            Collaborative work, presented separately from my solo projects. Partner names and individual
            responsibilities are not stated here until confirmed.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {partnershipProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5]"
            >
              <div className="flex items-center justify-between border-b border-[#E3D9CF] bg-[#FBF9F5]/50 px-6 py-4">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[#28221E] uppercase">
                  {project.statusNote}
                </span>
                <span className="text-[11px] tracking-[0.12em] text-[#756B62] uppercase">{project.tagline}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium tracking-tight text-[#28221E]">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#756B62]">{project.description}</p>

                <div className="mt-5 rounded-2xl border border-dashed border-[#EEE8E0] bg-[#F4EFE7] p-4">
                  <p className="text-xs font-semibold tracking-[0.12em] text-[#28221E] uppercase">Screenshot — TODO</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#756B62]">
                    Genuine screenshot to be added from the partner repository or product build.
                  </p>
                </div>

                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E3D9CF] pb-2.5">
                    <dt className="text-[#756B62]">Technology</dt>
                    <dd className="font-medium text-[#28221E]">{project.tech.join(", ")}</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E3D9CF] pb-2.5">
                    <dt className="text-[#756B62]">Repository</dt>
                    <dd className="text-xs font-medium text-[#B64A32]">TODO — genuine URL to be configured</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <dt className="text-[#756B62]">Live URL</dt>
                    <dd className="text-xs font-medium text-[#B64A32]">TODO — genuine URL to be configured</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
