"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { type Project, soloProjects } from "@/data/projects";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] transition-shadow hover:shadow-[0_2px_8px_rgba(40,34,30,0.06),0_16px_36px_rgba(40,34,30,0.10)]"
    >
      {/* Editorial cover — typographic, not a fake screenshot */}
      <div className="relative bg-[#FBF9F5] px-6 pt-7 pb-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#28221E] uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[11px] font-semibold tracking-[0.14em] text-[#756B62] uppercase">{project.tagline}</span>
        </div>
        <h3 className="font-display mt-3 text-2xl leading-tight font-medium tracking-tight text-[#28221E]">{project.title}</h3>
        <p className="mt-1.5 text-xs tracking-[0.1em] text-[#756B62] uppercase">
          {project.screenshot ? "Project screenshot" : "Screenshot to be added — TODO"}
        </p>
        {project.screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.screenshot} alt={`${project.title} screenshot`} className="mt-4 w-full rounded-2xl border border-[#E3D9CF] object-cover" />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className={`text-sm leading-relaxed text-[#756B62] ${expanded ? "" : "line-clamp-3"}`}>{project.description}</p>
        {project.statusNote ? (
          <p className="mt-2 text-xs font-medium text-[#B64A32]">{project.statusNote}</p>
        ) : null}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-[#E3D9CF] bg-[#F4EFE7] px-2.5 py-1 text-xs font-medium text-[#756B62]">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          {project.github ? (
            <Button variant="secondary" size="sm" onClick={() => window.open(project.github!, "_blank", "noreferrer")}>
              <Github className="size-4" />
              GitHub
            </Button>
          ) : null}
          {project.live ? (
            <Button variant="tertiary" size="sm" onClick={() => window.open(project.live!, "_blank", "noreferrer")}>
              Live
              <ExternalLink className="size-3.5" />
            </Button>
          ) : null}
          <Button variant="tertiary" size="sm" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
            {expanded ? "Show less" : "Details"}
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/SUBRAHMANYA2726/repos?sort=created&direction=desc&per_page=100")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setGithubRepos(data.filter((r: GitHubRepo) => r.name !== "MY-PORTFOLIO" && !r.name.startsWith(".")));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Selected work</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            Solo Projects
          </h2>
          <div className="editorial-rule mt-5 w-16" />
          <p className="mt-4 text-sm leading-relaxed text-[#756B62] sm:text-[15px]">
            Verified projects from my GitHub. Each card links to its real repository; live deployments appear
            only where the repository records one.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {soloProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[#756B62]">
          Review note: Trekgoo (only an image-assets repository), FARMAURA and a standalone PCOS/PCOD repository
          were not located in the public profile, so they are not listed as live projects.
        </p>

        {/* GitHub repositories — live integration preserved, editorial restyle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-16 mb-8"
        >
          <p className="eyebrow">Open source</p>
          <h3 className="font-display mt-3 text-2xl font-medium tracking-tight text-[#28221E] sm:text-3xl">
            GitHub Repositories
          </h3>
          <div className="editorial-rule mt-4 w-16" />
          <p className="mt-3 text-sm text-[#756B62]">Automatically fetched from my GitHub profile.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-10" role="status" aria-label="Loading repositories">
            <div className="size-8 animate-spin rounded-full border-2 border-[#EEE8E0] border-t-[#28221E]" />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {githubRepos.map((repo) => (
              <motion.article
                key={repo.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35 }}
                className="flex flex-col rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] p-5"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#FBF9F5] text-[#28221E]">
                    <Github className="size-4.5" />
                  </span>
                  <span className="flex gap-1">
                    {repo.homepage ? (
                      <Button variant="icon" size="icon" onClick={() => window.open(repo.homepage!, "_blank", "noreferrer")} aria-label={`Live site for ${repo.name}`}>
                        <ExternalLink className="size-4" />
                      </Button>
                    ) : null}
                    <Button variant="icon" size="icon" onClick={() => window.open(repo.html_url, "_blank", "noreferrer")} aria-label={`GitHub repository for ${repo.name}`}>
                      <Github className="size-4" />
                    </Button>
                  </span>
                </div>
                <h4 className="text-base font-semibold tracking-tight text-[#28221E]">{repo.name.replace(/-/g, " ").replace(/_/g, " ")}</h4>
                <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-[#756B62]">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-[#E3D9CF] pt-3 text-xs text-[#756B62]">
                  <span>{repo.language || "Multiple"}</span>
                  <span aria-label={`${repo.stargazers_count} stars, ${repo.forks_count} forks`}>
                    ★ {repo.stargazers_count} &nbsp;·&nbsp; ⑂ {repo.forks_count}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Button
            variant="secondary"
            onClick={() => window.open("https://github.com/SUBRAHMANYA2726?tab=repositories", "_blank", "noreferrer")}
          >
            <Github className="size-4" />
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
}
