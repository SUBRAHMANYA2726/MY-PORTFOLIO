"use client";

import { motion } from "framer-motion";

const skillGroups: Array<{ title: string; skills: string[] }> = [
  { title: "Programming", skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI"] },
  { title: "AI / ML", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Machine Learning", "Deep Learning"] },
  { title: "Databases", skills: ["MongoDB", "Firebase"] },
  { title: "Tools", skills: ["Git", "GitHub", "Google Colab", "Docker"] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Skills</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            Tools I use, in context.
          </h2>
          <div className="editorial-rule mt-5 w-16" />
          <p className="mt-4 text-sm leading-relaxed text-[#756B62] sm:text-[15px]">
            Technologies exercised in shipped projects and coursework. Listed without percentages —
            depth is best judged from the work itself.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] p-6"
            >
              <h3 className="text-sm font-semibold tracking-[0.12em] text-[#28221E] uppercase">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#E3D9CF] bg-[#F4EFE7] px-3.5 py-1.5 text-sm font-medium text-[#28221E]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
