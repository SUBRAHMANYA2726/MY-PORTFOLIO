"use client";

import { motion } from "framer-motion";

const focusAreas = [
  "AI and Machine Learning",
  "Full-stack software development",
  "Public policy",
  "Archaeology and Indian history",
  "Psychology",
  "Geopolitics",
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">About Me</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            An engineer with a historian&apos;s curiosity.
          </h2>
          <div className="editorial-rule mt-5 w-16" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="space-y-4 text-[15px] leading-relaxed text-[#756B62] sm:text-base"
          >
            <p>
              I&apos;m <strong className="font-semibold text-[#28221E]">Subrahmanya Manjunatha Bhat</strong>,
              an Information Science and Engineering student at{" "}
              <strong className="font-semibold text-[#28221E]">Presidency University, Bengaluru</strong>.
              My work sits at the intersection of <strong className="font-semibold text-[#28221E]">AI and machine learning</strong>{" "}
              and <strong className="font-semibold text-[#28221E]">full-stack software development</strong> — building
              prototypes that are useful, legible and maintainable, from agricultural intelligence for farmers to
              accessibility-minded tools for students.
            </p>
            <p>
              Alongside code, I read and write about public policy, archaeology and Indian history, psychology and
              geopolitics. Those interests shape the questions I ask and the problems I choose — technology in service
              of people, with context.
            </p>
            <p>
              I&apos;m currently deepening my skills in deep learning, applied ML engineering and modern web development,
              and I&apos;m open to collaboration, research and internship opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] p-6 sm:p-7"
          >
            <h3 className="text-sm font-semibold tracking-[0.12em] text-[#28221E] uppercase">Focus areas</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#756B62]">
              Areas I study, build in and keep returning to.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex min-h-[44px] items-center rounded-full border border-[#E3D9CF] bg-[#F4EFE7] px-4 text-sm font-medium text-[#28221E]"
                >
                  {area}
                </li>
              ))}
            </ul>
            <div className="editorial-rule my-6" />
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-xs tracking-[0.12em] text-[#756B62] uppercase">Degree</dt>
                <dd className="mt-1 font-medium text-[#28221E]">Information Science &amp; Engineering</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.12em] text-[#756B62] uppercase">University</dt>
                <dd className="mt-1 font-medium text-[#28221E]">Presidency University, Bengaluru</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.12em] text-[#756B62] uppercase">Based in</dt>
                <dd className="mt-1 font-medium text-[#28221E]">Bengaluru, India</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.12em] text-[#756B62] uppercase">Open to</dt>
                <dd className="mt-1 font-medium text-[#28221E]">Internships · Collaboration</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
