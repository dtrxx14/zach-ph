"use client"

import Image from "next/image"
import { useState } from "react"

interface Skill {
  name: string
  image: string
}

const skills: Skill[] = [
    { "name": "HTML5", "image": "/images/skills/html.webp?height=65&width=100" },
    { "name": "CSS3", "image": "/images/skills/css.webp?height=65&width=100" },
    { "name": "Javascript", "image": "/images/skills/javascript.webp?height=65&width=100" },
    { "name": "PHP", "image": "/images/skills/php.webp?height=65&width=100" },
    { "name": "Typescript", "image": "/images/skills/typescript.webp?height=65&width=100" },
    { "name": "MySQL", "image": "/images/skills/mysql.webp?height=65&width=100" },
    { "name": "SQL", "image": "/images/skills/sql.webp?height=65&width=100" }
  ]
  

export function ProgrammingLanguage() {
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
                rounded-lg px-1 py-1 rounded-full text-sm flex items-center justify-center
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

