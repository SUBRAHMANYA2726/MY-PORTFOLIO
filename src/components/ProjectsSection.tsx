"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

const projects = [
  {
    title: "SceneSense AI",
    description: "Intelligent Scene Classification and Travel Recommendation System using Explainable AI.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com/SUBRAHMANYA2726",
    live: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Job Recommendation System",
    description: "Machine Learning system recommending jobs according to user skills.",
    tech: ["Python", "Scikit-Learn", "Flask", "React"],
    github: "https://github.com/SUBRAHMANYA2726",
    live: "#",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Trekgoo",
    description: "Travel and trekking planning application with rich UI/UX.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    github: "https://github.com/SUBRAHMANYA2726",
    live: "#",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "PCOS/PCOD Prediction System",
    description: "AI-powered healthcare prediction platform.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/SUBRAHMANYA2726",
    live: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?q=80&w=800&auto=format&fit=crop"
  }
]

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  image: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
}

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-[400px] w-full rounded-2xl bg-card border border-border/50 overflow-hidden cursor-pointer group shadow-xl"
    >
      <div className="absolute inset-0 z-0">
        <Image src={project.image} alt={project.title} fill className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/SUBRAHMANYA2726/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setGithubRepos(data)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24" style={{ perspective: 1000 }}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            GitHub Repositories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automatically fetched from my GitHub profile.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-colors group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Github size={24} />
                  </div>
                  <div className="flex gap-3">
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {repo.name.replace(/-/g, " ")}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {repo.description || "No description provided."}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span>{repo.language || "Multiple"}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
