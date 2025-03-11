import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { StarsBackground } from "@/components/stars-background"
import { ProgrammingLanguage } from "@/components/technical-skills/language"
import { Framework } from "@/components/technical-skills/framework"
import { ToolsAndPlatform } from "@/components/technical-skills/tool"


export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <StarsBackground />
      <div className="relative max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2" size={16} />
          Back to Portfolio
        </Link>

        <h1 className="text-3xl font-bold mb-8">Resume</h1>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray-800 pb-2 mb-6">Professional Experience</h2>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">FULL – STACK SYSTEMS DEVELOPER</h3>
              <div className="text-gray-400 text-sm">Jan 2017 - Present</div>
            </div>
            <div className="text-primary mb-2">Freelance</div>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Spearheaded full-stack web development for diverse client projects.</li>
              <li>Developed a website with donation capabilities for a local church.</li>
              <li>Created an integrated website and Android Emergency Application for a local barangay to enhance community communication.</li>
              <li>Designed an online job-hunting platform for Malaysian clients.</li>
              <li>Hosted and maintained web applications for various clients.</li>
              <li>Crafted websites for distinguished clients, including a web application for Real Estate: Metro Sky Development Corporation.</li>
              <li>Designed a Payroll System for a corporate client.</li>
              <li>Developed responsive e-commerce websites for businesses.</li>
              <li>Created a responsive website for a new courier service company.</li>
              <li>Crafted a responsive Tourist Spot Website for Daguioman, Abra Municipality.</li>
              <li>Developed a complete responsive online jewelry store named ``PNGB Precious Ashers.``</li>
              <li>HRIS for a local government.</li>
              <li>HRIS for the BPO company Spillway Workforce Solutions.</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">SR. SYSTEMS DEVELOPER / IT SUPERVISOR</h3>
              <div className="text-gray-400 text-sm">Jun 2024 - Dec 2024</div>
            </div>
            <div className="text-primary mb-2">Nephila Web Technology Inc.</div>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Provide technical expertise and leadership to the development team, guiding the design and architecture of software systems while ensuring adherence to best practices.</li>
              <li>Lead the development of project modules and milestones, leveraging strong programming skills and extensive knowledge of programming languages and frameworks.</li>
              <li>Design scalable and efficient software architectures that meet business requirements, considering performance, security, and maintainability.</li>
              <li>Conduct thorough code reviews to ensure high-quality code standards are met, and mentor junior developers to improve their coding skills.</li>
              <li>Collaborate with project managers to define project scope, timelines, and resource allocation, ensuring successful and timely project delivery.</li>
              <li>Tackle complex technical challenges and provide effective solutions for system issues and performance bottlenecks.</li>
              <li>Collaborate with internal and external cross-functional teams, stakeholders, and management to gather requirements, present solutions, and provide project updates.</li>
              <li>Ensure comprehensive and accurate documentation of software systems, architectures, and implementation details for future reference and knowledge sharing.</li>
              <li>Mentor junior developers, fostering their growth and development within the team. Share knowledge and experiences to cultivate a collaborative learning environment.</li>
              <li>Stay up to date with the latest trends and technologies in software development, engaging in continuous learning to enhance technical skills and understanding of best practices.</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">IT OPERATIONS SUPERVISOR</h3>
              <div className="text-gray-400 text-sm">Sep 2022 - Jun 2024</div>
            </div>
            <div className="text-primary mb-2">FSI Skyward Logistics Inc.</div>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Led and directed the IT operations team, providing guidance and support throughout web development projects and operations.</li>
              <li>Managed the day-to-day activities of the team, effectively assigning tasks and ensuring the punctual completion of web development projects.</li>
              <li>Fostered collaboration with cross-functional teams to comprehensively grasp web development requirements and deliver effective solutions.</li>
              <li>Enforced best practices and maintained coding standards to guarantee the delivery of high-quality web development results.</li>
              <li>Monitored and optimized web systems and servers, enhancing performance and uptime.</li>
              <li>Proactively identified and resolved technical issues related to web development, minimizing downtime and disruptions.</li>
              <li>Implemented robust security measures and adhered to industry best practices to safeguard web applications and user data.</li>
              <li>Conducted thorough code reviews, offering technical guidance, and mentoring junior web developers to facilitate skill development.</li>
              <li>Played an integral role in strategic planning by aligning web development initiatives with the organization`s overarching goals and objectives.</li>
              <li>Managed the deployment process, orchestrating the seamless transition of projects from Bitbucket to Laravel Forge, ensuring efficient and reliable web application delivery.</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">WEB DEVELOPER</h3>
              <div className="text-gray-400 text-sm">Sep 2021 - Jun 2022</div>
            </div>
            <div className="text-primary mb-2">FSI Enterprise Systems Solution Inc.</div>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Collaborate with cross-functional teams to understand project requirements and translate them into technical specifications.</li>
              <li>Develop and maintain web applications using Laravel, adhering to best coding practices and delivering high-quality code.</li>
              <li>Implement responsive design using Bootstrap and/or Tailwind CSS to ensure a consistent user experience across different devices.</li>
              <li>Work with databases, particularly MySQL, to design and optimize data models and queries for efficient performance.</li>
              <li>Create and consume APIs to integrate with external services and data sources.</li>
              <li>Troubleshoot and debug issues, ensuring applications are fully functional and bug-free.</li>
              <li>Stay up-to-date with the latest industry trends and technologies, incorporating best practices.</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">WEB DEVELOPER</h3>
              <div className="text-gray-400 text-sm">Oct 2018 - Oct 2020</div>
            </div>
            <div className="text-primary mb-2">GFCO Enterprise</div>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Proficient full-stack web developer responsible for end-to-end development.</li>
              <li>Managed the company website`s maintenance.</li>
              <li>Developed a locally hosted system tailored to the company`s needs.</li>
              <li>Designed and resolved bugs on the company`s website, resulting in improved user experience.</li>
              <li>Provided valuable assistance to clients in resolving their system-related issues.</li>
              <li>Significantly enhanced customer satisfaction by 35% through website improvements.</li>
              <li>Conducted troubleshooting and utilized SEO tools to enhance website performance and visibility.</li>
              <li>ERP on HR Module, Payroll, CRM, Inventory, and Payment Integrations support.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray-800 pb-2 mb-6">Education</h2>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">Bachelor of Science in Information Technology</h3>
              <div className="text-gray-400 text-sm">2014 - 2018</div>
            </div>
            <div className="text-primary">University of Perpetual Help System Dalta - Molino Campus</div>
          </div>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">High School Diploma</h3>
              <div className="text-gray-400 text-sm">2009 - 2013</div>
            </div>
            <div className="text-primary">Governor Ferrer Memorial National High School - Annex</div>
          </div>

          <div className="mb-8">
            <div className="md:flex md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-medium">Primary Education</h3>
              <div className="text-gray-400 text-sm">2003 - 2009</div>
            </div>
            <div className="text-primary">Imus Pilot Elementary School</div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray-800 pb-2 mb-6">Technical Skills</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <ProgrammingLanguage />
            </div>

            <div>
              <h3 className="font-medium mb-2">Frameworks & Libraries</h3>
              <Framework />
            </div>

            <div>
              <h3 className="font-medium mb-2">Tools & Platforms</h3>
              <ToolsAndPlatform />
            </div>

            <div>
              <h3 className="font-medium mb-2">Other Skills</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Responsive Design</li>
                <li>Coding Best Practices</li>
                <li>RESTful APIs</li>
                <li>Performance Optimization</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seminars and Certifications */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray-800 pb-2 mb-6">Seminars and Certifications</h2>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>16th Youth Congress on Information Technology</li>
            <li>Micro Focus Software University: Application Life Cycle Management Advance Course and LoadRunner 12.0</li>
            <li>TOEIC: Certified Elementary Proficiency in English</li>
            <li>SAP Business One: Basic</li>
          </ul>
        </section>

        {/* Download Button */}
        <div className="flex justify-center mt-12">
        <a 
          href="/pdf/zach032025.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

