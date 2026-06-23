"use client"
import { Heart } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-heading font-bold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 mb-2">
            Subbu.ai
          </span>
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Crafting intelligent solutions for the future.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/SUBRAHMANYA2726" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/subrahmanya-m-bhat-97a58b347" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
          <span>by Subrahmanya</span>
        </div>
      </div>
    </footer>
  )
}
