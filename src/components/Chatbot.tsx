"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Send, Bot } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! I'm Subbu AI. Ask me anything about my skills, projects, or experience." }])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { sender: "user", text: input }])
    setInput("")
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: "I'm still learning! My backend AI integration is coming soon. For now, feel free to browse the portfolio!" }])
    }, 1000)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="h-16 w-16 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] bg-primary hover:bg-primary/90 flex items-center justify-center transition-transform hover:scale-110"
              >
                <Bot size={32} className="text-primary-foreground" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 w-[350px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
            >
              <div className="p-4 bg-primary/10 border-b border-border/50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    <Bot size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Subbu AI</h3>
                    <p className="text-xs text-primary font-medium">Online</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === "user" ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted text-foreground rounded-tl-sm"}`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border/50 bg-background/50">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button onClick={handleSend} size="icon" className="rounded-full bg-primary hover:bg-primary/90 h-10 w-10">
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
