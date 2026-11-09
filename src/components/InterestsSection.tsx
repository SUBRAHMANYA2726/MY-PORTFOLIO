"use client";

import { motion } from "framer-motion";

const interests = [
  { title: "Public Policy", note: "How policy shapes everyday life — and how technology can serve it better." },
  { title: "Archaeology", note: "Material traces of the past: sites, inscriptions and the stories they carry." },
  { title: "Indian History", note: "Long-view thinking about civilisations, regions and change over centuries." },
  { title: "Psychology", note: "Behaviour, perception and the human factors behind good product design." },
  { title: "Politics and Geopolitics", note: "Power, institutions and the world students of engineering inherit." },
  { title: "Kannada Language and Culture", note: "Language, literature, cinema and the living culture of Karnataka." },
  { title: "Technology and Cinema", note: "How films imagine the future — and how we build toward it." },
];

export function InterestsSection() {
  return (
    <section id="interests" className="border-t border-[#E3D9CF] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="eyebrow">Interests</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-balance text-[#28221E] sm:text-4xl">
            Beyond the build.
          </h2>
          <div className="editorial-rule mt-5 w-16" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, idx) => (
            <motion.article
              key={interest.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] p-6 ${
                idx === interests.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#B64A32]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2.5 text-lg leading-snug font-semibold tracking-tight text-[#28221E]">
                {interest.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#756B62]">{interest.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
