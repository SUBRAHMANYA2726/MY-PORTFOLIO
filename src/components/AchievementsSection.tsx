"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react";

const achievements = [
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
    title: "RC Rally Event",
    role: "Competitor",
    organization: "Tech Fest",
    date: "2023",
  },
  {
    title: "Software-Based Job Prediction Hackathon",
    role: "Participant",
    organization: "AI India",
    date: "2023",
  }
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                <div className="h-2 w-2 bg-background rounded-full" />
              </div>
              
              <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground">
                  <span className="font-medium text-foreground">{item.role}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{item.organization}</span>
                  <span className="hidden md:inline">•</span>
                  <span className="text-primary">{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
