"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react"
import Gajendra from '../../assets/Devs/Gajendra.png'
import Ankit from '../../assets/Devs/Ankit.jpeg'
import Jitesh from '../../assets/Devs/Jitesh.jpeg'
const developers = [
  {
    name: "Jitesh Varade",
    role: "Full Stack Developer",
    image: Jitesh,
    bio: "Passionate about creating seamless user experiences and scalable backend solutions. Specialized in React and Node.js ecosystems.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    github: "https://github.com/jiteshvarade",
    linkedin: "https://www.linkedin.com/in/jiteshvarade/",
    Instagram: "https://www.instagram.com/jiteshvarade/",
    email: "jiteshvarade1@gmail.com",
    // portfolio: "https://portfolio.com",
  },
  {
    name: "Gajendra Naphade",
    role: "Designer & Frontend Developer",
    image: Gajendra,
    bio: "Bridging the gap between design and development. Creating beautiful, intuitive interfaces with attention to detail.",
    skills: ["UI/UX", "React", "Figma", "TailwindCSS"],
    github: "https://github.com/gajju44",
    linkedin: "https://www.linkedin.com/in/gajendra-naphade/",
    Instagram: "https://www.instagram.com/gajendra_naphade/",
    email: "gajendra44.connect@gmail.com",
    portfolio: "https://portfolio-gajju.vercel.app/",
  },
  {
    name: "Ankit Katole",
    role: "Backend Developer",
    image: Ankit,
    bio: "Back-end developer with skills in API design, Node.js, Express.js, MongoDB, and SQL. Exploring blockchain and Web3 to enhance expertise.",
    skills: ["Postman", "Node.js", "MongoDB","Express.js"],
    github: "https://github.com/ankitkatole",
    linkedin: "https://www.linkedin.com/in/ankitkatole/",
    Instagram: "https://www.instagram.com/ank.xious/",
    email: "katoleankit06@gmail.com",
    // portfolio: "https://portfolio.com",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}



export default function DevelopersPage() {
  return (
    <div id="Devs" className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white text-transparent bg-clip-text">
            Meet Our Developers
          </h1>
          <p className="text-xl text-gray-400 capitalize">The talented team behind this platform</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {developers.map((dev, index) => (
            <motion.div key={index} variants={item} className="relative ">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br group from-gray-900 to-black border border-[#8750f7]/30 p-6 transition-all duration-500 hover:border-[#8750f7] hover:shadow-[0_0_30px_#8750f7]">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#4f24a7] shadow-[0_0_1px_#8750f7] transition-shadow duration-500 group-hover:shadow-[0_0_20px_#8750f7]">
                  <img src={dev.image || "/placeholder.svg"} alt={dev.name}  className="object-cover" />
                </div>

                <h2 className="text-2xl font-bold text-gray-300 mb-2 text-center">{dev.name}</h2>
                <p className="text-gray-400 text-center mb-4">{dev.role}</p>
                <p className="text-gray-500 text-center mb-6">{dev.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm border border-[#8750f7] text-[#8750f7] bg-[#8750f7]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex z-50 relative justify-center gap-4">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:-translate-y-1 hover:text-[#8750f7] transition duration-500"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:-translate-y-1 hover:text-[#8750f7] transition  duration-500"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={dev.Instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:-translate-y-1 hover:text-[#8750f7] transition  duration-500"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${dev.email}`} className="text-gray-400 hover:-translate-y-1 hover:text-[#8750f7] transition  duration-500">
                    <Mail className="w-5 h-5" />
                  </a>
                {dev.portfolio &&  <a
                    href={dev.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:-translate-y-1 hover:text-[#8750f7] transition  duration-500"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#8750f7]/0 via-[#8750f7]/0 to-[#8750f7]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

