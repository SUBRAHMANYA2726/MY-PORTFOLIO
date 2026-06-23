"use client"

import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function ParticleBackground() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 bg-background/80">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1.5} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
