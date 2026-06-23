"use client"

import { motion } from "framer-motion"
import { Code, Trophy, Cpu, Award } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: Code },
  { label: "Hackathons Participated", value: "4", icon: Trophy },
  { label: "Skills Mastered", value: "20+", icon: Cpu },
  { label: "Certifications Earned", value: "5+", icon: Award },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-lg"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate <span className="text-foreground font-semibold">B.Tech student at Presidency University, Bengaluru</span>,
              driven by a relentless curiosity for <span className="text-primary font-medium">Artificial Intelligence</span>, <span className="text-blue-400 font-medium">Machine Learning</span>, and innovative problem-solving.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              My journey in technology is defined by a commitment to building practical solutions that make a real-world impact. Whether I'm developing predictive models for healthcare or crafting engaging full-stack web applications, I thrive on turning complex challenges into elegant, efficient solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I am eager to bridge the gap between theoretical knowledge and industry practices, constantly expanding my skill set to stay ahead in the ever-evolving tech landscape. Let's build the future together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
              >
                <stat.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
