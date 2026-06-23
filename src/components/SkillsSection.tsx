"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", progress: 85 },
      { name: "Artificial Intelligence", progress: 80 },
      { name: "Deep Learning", progress: 75 },
      { name: "Generative AI", progress: 70 },
      { name: "Data Preprocessing", progress: 90 },
      { name: "Feature Engineering", progress: 85 },
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", progress: 90 },
      { name: "JavaScript", progress: 85 },
      { name: "Java", progress: 80 },
      { name: "SQL", progress: 85 },
      { name: "C", progress: 75 },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML / CSS", progress: 95 },
      { name: "React / Next.js", progress: 85 },
      { name: "Node.js / Express.js", progress: 80 },
      { name: "MongoDB", progress: 80 },
      { name: "Tailwind CSS", progress: 90 },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", progress: 90 },
      { name: "Google Colab / Jupyter", progress: 85 },
      { name: "VS Code", progress: 95 },
      { name: "Android Studio", progress: 70 },
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Skills Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="bg-card/30 backdrop-blur-md rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-border/50 pb-2 inline-block">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
