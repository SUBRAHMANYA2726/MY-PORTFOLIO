"use client"

import { motion } from "framer-motion"
import { Typewriter } from "@/components/Typewriter"
import { Button } from "@/components/ui/button"
import { Mail, Download } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 relative inline-block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl mx-auto">
            {/* We will add an image later. For now, a placeholder gradient */}
            <div className="w-full h-full bg-gradient-to-br from-primary/40 to-blue-500/40 flex items-center justify-center text-4xl">
              🚀
            </div>
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-500">
          Subrahmanya Manjunatha Bhat
        </h1>
        
        <div className="h-12 mb-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-primary font-medium"
          >
            <Typewriter
              sequence={[
                'AI & Machine Learning Enthusiast',
                'Full Stack Developer',
                'Generative AI Developer',
                'Future AI Engineer',
                'UI/UX Enthusiast'
              ]}
              speed={50}
              delayBetween={2000}
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button variant="default" size="lg" className="rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all">
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
          <Button variant="outline" size="lg" className="rounded-full border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all">
            Hire Me
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-8"
        >
          <a href="https://github.com/SUBRAHMANYA2726" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/subrahmanya-m-bhat-97a58b347" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:subbumb06@gmail.com" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Mail className="h-8 w-8" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
