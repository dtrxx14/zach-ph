"use client"

import Image from "next/image"
import { useState } from "react"

interface Skill {
name: string
image: string
}

const skills: Skill[] = [
{ "name": "Git", "image": "/images/skills/git.webp?height=65&width=100" },
{ "name": "GitHub", "image": "/images/skills/github.webp?height=65&width=100" },
{ "name": "GitLab", "image": "/images/skills/gitlab.webp?height=65&width=100" },
{ "name": "Bitbucket", "image": "/images/skills/bitbucket.webp?height=65&width=100" },
{ "name": "JIRA", "image": "/images/skills/jira.webp?height=65&width=100" },
{ "name": "Open Project", "image": "/images/skills/openproject.webp?height=65&width=100" },
{ "name": "Cloudflare", "image": "/images/skills/cloudflare.webp?height=65&width=100" },
{ "name": "CPanel", "image": "/images/skills/cpanel.webp?height=65&width=100" },
{ "name": "Laravel Forge", "image": "/images/skills/laravelforge.webp?height=65&width=100" },
{ "name": "Digital Ocean", "image": "/images/skills/digitalocean.webp?height=65&width=100" },
{ "name": "AWS", "image": "/images/skills/aws.webp?height=65&width=100" },
{ "name": "Apache Web Server", "image": "/images/skills/apache.webp?height=65&width=100" },
{ "name": "NGINX Web Server", "image": "/images/skills/nginx.webp?height=65&width=100" },
{ "name": "Redis", "image": "/images/skills/redis.webp?height=65&width=100" },
{ "name": "Linux Server", "image": "/images/skills/linux.webp?height=65&width=100" },
{ "name": "Ubuntu Server", "image": "/images/skills/ubuntu.webp?height=65&width=100" },
{ "name": "Postman", "image": "/images/skills/postman.webp?height=65&width=100" },
{ "name": "VS Code", "image": "/images/skills/vscode.webp?height=65&width=100" }
]


export function ToolsAndPlatform() {
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
  
  