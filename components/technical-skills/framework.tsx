"use client"

import Image from "next/image"
import { useState } from "react"

interface Skill {
  name: string
  image: string
}

const skills: Skill[] = [
    { "name": "Laravel", "image": "/images/skills/laravel.webp?height=65&width=100" },
    { "name": "Livewire", "image": "/images/skills/livewire.webp?height=65&width=100" },
    { "name": "Bootstrap", "image": "/images/skills/bootstrap.webp?height=65&width=100" },
    { "name": "Vue JS", "image": "/images/skills/vuejs.webp?height=65&width=100" },
    { "name": "Nuxt JS", "image": "/images/skills/nuxt.webp?height=65&width=100" },
    { "name": "Vuetify", "image": "/images/skills/vuetify.webp?height=65&width=100" },
    { "name": "Pinia", "image": "/images/skills/pinia.webp?height=65&width=100" },
    { "name": "React JS", "image": "/images/skills/react.webp?height=65&width=100" },
    { "name": "Next JS", "image": "/images/skills/nextjs.webp?height=65&width=100" },
    { "name": "Tailwind", "image": "/images/skills/tailwind.webp?height=65&width=100" },
    { "name": "Node JS", "image": "/images/skills/nodejs.webp?height=65&width=100" },
    { "name": "Express JS", "image": "/images/skills/expressjs.webp?height=65&width=100" }
  ]
  
  

export function Framework() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative"
            onMouseEnter={() => setActiveSkill(skill.name)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div
              className={`
                rounded-lg md:px-1 md:py-1 rounded-full text-sm flex items-center justify-center
                h-12 bg-transparent transition-all duration-300 text-sm font-medium tracking-wider
                hover:scale-110
            `}
            >
              <Image
                  src={skill.image}
                  alt="Profile"
                  width={100}
                  height={65}
                  className="w-full h-full object-contain"
                />
              
            </div>

            {/* Tooltip */}
            {activeSkill === skill.name && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 text-white text-xs rounded-md whitespace-nowrap z-20">
                {skill.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

