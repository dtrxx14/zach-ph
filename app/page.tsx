import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Linkedin, MapPin, MoreHorizontal } from "lucide-react"
import { StarsBackground } from "@/components/stars-background"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skills } from "@/components/skills"
import TypingEffect from "@/components/cover-background";
import { ProjectsGrid } from "@/components/project-grid"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Cover Photo & Profile Section */}
      <div className="relative">
        <div className="h-[250px] md:h-[400px] w-full relative overflow-hidden bg-gray-200">
          <TypingEffect />
        </div>
      </div>
      <StarsBackground />

      <div className="relative max-w-7xl mx-auto px-4 py-8 -mt-8">
        {/* Profile Info Container */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="-mt-8 pb-4 flex items-end justify-between">
            {/* Profile Picture & Name */}
            <div className="flex items-end gap-4">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-4 border-[#0d1117] overflow-hidden">
                  <Image
                    src="/images/profile_zach.jpg?height=160&width=160"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl font-bold">Zach Yamio</h1>
                <p className="text-gray-300">1.5K followers · 705 following</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mb-4 cursor-pointer">
              <Link href="/resume" className="cursor-pointer">
                <Button variant="default" className="cursor-pointer">
                  View Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start h-12 bg-transparent border-b border-gray-800">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-8"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-8"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-8"
              >
                Contact
              </TabsTrigger>
            </TabsList>

            {/* About Tab Content */}
            <TabsContent value="about" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column - Info */}
                <div className="space-y-6">
                  {/* Intro Card */}
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">Intro</h2>
                    <p className="text-gray-300 mb-4 text-justify">
                    <strong>7+ years of experience in Systems Development</strong>, specializing in backend technologies and
                    database management. I work with Laravel PHP to build scalable web applications
                    and have a solid foundation in native PHP development. My database expertise includes
                    designing efficient schemas and writing optimized queries in MySQL. On the frontend,
                    I have strong proficiency in JQuery, VueJS, JavaScript, HTML5, CSS3, Bootstrap 5 or
                    Tailwind CSS, allowing me to build responsive and user-friendly interfaces. I focus
                    on delivering seamless user experiences by implementing modern frontend frameworks and
                    best practices in UI/UX design. As a team leader, I have successfully managed developers
                    and facilitated smooth collaboration. I`m passionate about delivering high-quality web
                    solutions and staying current with the latest technologies.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-start items-center gap-2 text-gray-300">
                        <MapPin className="w-5 h-5" />
                        <a target="_blank" href="https://www.google.com/maps/place/0091+Andres+Bijasa+Road,+San+Jose+del+Monte+City,+3023+Bulacan/data=!4m2!3m1!1s0x3397afbdc9896883:0xca2c0195da072d0d?sa=X&ved=1t:242&ictx=111">
                          Brgy Gaya-Gaya, SJDM, Bulacan, 3023
                        </a>
                      </div>
                      <div className="flex justify-start items-center gap-2 text-gray-300">
                        <Mail className="w-5 h-5" />
                        <a target="_blank" href="mailto:d14yamio@gmail.com">d14yamio@gmail.com</a>
                      </div>
                      <div className="flex justify-start items-center gap-2 text-gray-300">
                        <Phone className="w-5 h-5" />
                        <a target="_blank" href="tel:+639562548459">(639) 56 254 8459</a>
                      </div>
                      <div className="flex justify-start items-center gap-2 text-gray-300">
                        <Linkedin className="w-5 h-5" />
                        <a target="_blank" href="https://www.linkedin.com/in/zach-yamio-855139171/">linkedin.com/in/zachyamio</a>
                      </div>
                    </div>
                  </div>

                  {/* Skills Card */}
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                    <h2 className="text-xl font-semibold p-4 pb-2">Skills</h2>
                    <Skills />
                  </div>
                </div>

                {/* Right Column - Latest Projects */}
                <div className="md:col-span-2 space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Latest Projects</h2>
                  {[1, 2, 3].map((project) => (
                    <div key={project} className="bg-gray-900/50 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <Image
                                src="/images/profile_zach.jpg?height=40&width=40"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">Project {project}</h3>
                              <p className="text-sm text-gray-400">2 days ago</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-5 h-5" />
                          </Button>
                        </div>
                        <p className="text-gray-300 mb-4">
                          A responsive web application built with Vue.js and Tailwind CSS.
                        </p>
                      </div>
                      <div className="relative h-[300px]">
                        <Image
                          src="/images/placeholder.webp?height=300&width=600"
                          alt={`Project ${project}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Projects Tab Content */}
            
            <TabsContent value="projects" className="mt-8">
              <ProjectsGrid />
              {/* <div className="grid grid-cols-1 gap-6">
                {[1, 2, 3, 4].map((project) => (
                  <div key={project} className="bg-gray-900/50 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src="/images/profile_zach.jpg?height=40&width=40"
                              alt="Profile"
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">Project {project}</h3>
                            <p className="text-sm text-gray-400">2 days ago</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-5 h-5" />
                        </Button>
                      </div>
                      <p className="text-gray-300 mb-4">
                        A responsive web application built with Vue.js and Tailwind CSS.
                      </p>
                    </div>
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/placeholder.webp?height=400&width=800"
                        alt={`Project ${project}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div> */}
            </TabsContent>

            {/* Contact Tab Content */}
            <TabsContent value="contact" className="mt-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <p className="text-gray-300 mb-6">
                    Feel free to reach out if you would like to collaborate on a project or just want to connect.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

