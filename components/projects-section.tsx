"use client"

import Link from "next/link"
import { ShieldCheck, Key, CheckSquare, Boxes, Building2, KeyRound, FileCheck, Shield, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import type { JSX } from "react"

// Define a type for project data
interface Project {
  title: string
  description: string
  link: string
  icon?: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

// Map project titles to icons
const getIconForProject = (title: string) => {
  const iconMap: Record<string, JSX.Element> = {
    "SAML Tester": <ShieldCheck className="h-8 w-8" />,
    "JWT Validator": <Key className="h-8 w-8" />,
    "JWT Checklist": <CheckSquare className="h-8 w-8" />,
    "Kode Jungle": <Boxes className="h-8 w-8" />,
    "Enterprise Ready": <Building2 className="h-8 w-8" />,
    "Enterprise SSO Examples": <KeyRound className="h-8 w-8" />,
    "Consent Management": <FileCheck className="h-8 w-8" />,
    "SAML Toolset": <Shield className="h-8 w-8" />,
    "OIDC Playground": <Terminal className="h-8 w-8" />,
  }

  return iconMap[title] || <Boxes className="h-8 w-8" />
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 z-0"></div>
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 inline-block">
            Our Developer Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful, open tools built by developers, for developers
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              variants={itemVariants}
            >
              {/* Card top accent color */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-400"></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-500">{getIconForProject(project.title)}</div>

                  {/* Featured badge for first 3 projects */}
                  {index < 3 && (
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 min-h-[60px]">{project.description}</p>

                <Link
                  href={project.link}
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-blue-500 hover:text-white transition-colors group-hover:bg-blue-500 group-hover:text-white"
                >
                  Use Now
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

