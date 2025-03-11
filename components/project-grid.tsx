import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with modern UI",
    image: "/images/placeholder.webp?height=600&width=800",
    large: true,
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Task Management App",
    description: "Collaborative task tracking application",
    image: "/images/placeholder.webp?height=400&width=600",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with dark mode",
    image: "/images/placeholder.webp?height=400&width=600",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking app",
    image: "/images/placeholder.webp?height=300&width=500",
    large: true,
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
      {projects.map((project) => (
        <div
            key={project.title}
            className={`
            group relative overflow-hidden rounded-lg bg-gray-900/50
            transition-all duration-300 hover:bg-gray-800/50
            ${project.large ? "md:col-span-2" : ""}
            `}
        >
          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image || "/images/placeholder.webp"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay with project info */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-center mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
                {/* <Button size="sm" variant="outline" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

