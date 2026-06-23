"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  sequence: string[]
  speed?: number
  delayBetween?: number
}

export function Typewriter({ sequence, speed = 50, delayBetween = 2000 }: TypewriterProps) {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const currentString = sequence[index]

    if (!isDeleting) {
      if (text.length < currentString.length) {
        timer = setTimeout(() => {
          setText(currentString.substring(0, text.length + 1))
        }, speed)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetween)
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentString.substring(0, text.length - 1))
        }, speed / 2)
      } else {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % sequence.length)
      }
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, index, sequence, speed, delayBetween])

  return (
    <span className="inline-block relative">
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-[1.1em] bg-primary ml-1 align-middle"
      />
    </span>
  )
}
