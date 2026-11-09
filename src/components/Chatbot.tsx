"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Subbu AI. Ask me anything about my skills, projects, or experience." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for asking! For detailed project info, please browse the sections above or use the contact form — I’ll get back to you there.",
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed right-5 bottom-5 z-50 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {!isOpen && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
            <Button variant="primary" size="icon-lg" onClick={() => setIsOpen(true)} aria-label="Open chat assistant" className="shadow-[0_8px_24px_rgba(40,34,30,0.25)]">
              <Bot className="size-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 bottom-[72px] flex h-[480px] w-[330px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl border border-[#E3D9CF] bg-[#FBF9F5] shadow-[0_16px_44px_rgba(40,34,30,0.18)]"
            role="dialog"
            aria-label="Chat assistant"
          >
            <div className="flex items-center justify-between border-b border-[#E3D9CF] bg-[#28221E] p-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#FBF9F5]/15 text-[#FBF9F5]">
                  <Bot className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-[#FBF9F5]">Subbu AI</span>
                  <span className="block text-xs text-[#EEE8E0]">Online</span>
                </span>
              </div>
              <Button variant="icon" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chat assistant" className="border-transparent bg-transparent text-[#FBF9F5] hover:bg-white/10">
                <X className="size-5" />
              </Button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-[#F4EFE7] p-4" aria-live="polite">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <p
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "rounded-br-sm bg-[#28221E] text-[#FBF9F5]"
                        : "rounded-bl-sm border border-[#E3D9CF] bg-[#FBF9F5] text-[#28221E]"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E3D9CF] bg-[#FBF9F5] p-3">
              <div className="flex items-center gap-2">
                <label htmlFor="chatbot-input" className="sr-only">Message the assistant</label>
                <input
                  id="chatbot-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message…"
                  className="h-11 min-w-0 flex-1 rounded-full border border-[#E3D9CF] bg-[#F4EFE7] px-4 text-sm text-[#28221E] placeholder:text-[#756B62]/60 focus:border-[#28221E] focus:ring-2 focus:ring-[#B64A32]/40 focus:outline-none"
                />
                <Button size="icon" onClick={handleSend} aria-label="Send message">
                  <Send className="size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
