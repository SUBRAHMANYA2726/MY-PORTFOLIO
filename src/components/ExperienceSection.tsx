"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

type Entry = {
  title: string;
  role: string;
  organization: string;
  date: string;
  url?: string;
};

// Verified from prior portfolio records and repository evidence. Dates are
// limited to what was already recorded — no results or awards are invented.
const entries: Entry[] = [
  {
    title: "CodeAlpha Machine Learning Internship",
    role: "ML Intern — Tasks",
    organization: "CODEALPHA_ML_TASKS",
    date: "Internship",
    url: "https://github.com/SUBRAHMANYA2726/CODEALPHA_ML_TASKS",
  },
  {
    title: "CodeAlpha Full-Stack Internship",
    role: "Full-Stack Intern — Tasks",
    organization: "CODEALPHA_FULLSTACK_TASKS",
    date: "Internship",
    url: "https://github.com/SUBRAHMANYA2726/CODEALPHA_FULLSTACK_TASKS",
  },
  {
    title: "Google Cloud Arcade Facilitator",
    role: "Facilitator — as recorded",
    organization: "Google Cloud Arcade",
    date: "Recorded achievement",
  },
  {
    title: "24-Hour Sludge Removal Hackathon",
    role: "Participant",
    organization: "Presidency University",
    date: "2024",
  },
  {
    title: "Bangalore Skill Summit",
    role: "Participant",
    organization: "Bangalore Tech Hub",
    date: "2024",
  },
  {
    title: "Software-Based Job Prediction Hackathon",
    role: "Participant",
    organization: "AI India",
    date: "2023",
  },
  {
    title: "RC Rally Event",
    role: "Competitor",
    organization: "Tech Fest",
    date: "2023",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Experience</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            Experience &amp; Achievements
          </h2>
          <div className="editorial-rule mt-5 w-16" />
          <p className="mt-4 text-sm leading-relaxed text-[#756B62] sm:text-[15px]">
            Internships, programs and events from my existing records — with repository evidence where available.
          </p>
        </motion.div>

        <div className="relative max-w-3xl border-l border-[#E3D9CF] pl-8 sm:pl-10">
          {entries.map((item, idx) => (
            <motion.div
              key={`${item.title}-${item.date}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative mb-6 last:mb-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[37px] flex size-4 items-center justify-center rounded-full border-2 border-[#FBF9F5] bg-[#28221E] sm:-left-[45px]"
              />
              <div className="rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FBF9F5] text-[#28221E]">
                    <Award className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base leading-snug font-semibold tracking-tight text-[#28221E]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#756B62]">
                      {item.role} · {item.organization} · <span className="font-medium text-[#28221E]">{item.date}</span>
                    </p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex min-h-[44px] items-center text-sm font-medium text-[#28221E] underline decoration-[#B64A32]/50 decoration-1 underline-offset-4 hover:decoration-[#B64A32]"
                      >
                        View repository
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Keep the legacy name importable for any existing references.
export const AchievementsSection = ExperienceSection;
