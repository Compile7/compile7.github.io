"use client"

import { useState } from "react"
import Link from "next/link"
import { Boxes, ShieldCheck, Key, CheckSquare, Building2, KeyRound, FileCheck, Shield, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import type { JSX } from "react"

// Define a type for project data
interface Project {
  title: string
  description: string
  link: string
  icon: string
  category: string
}

interface ProjectsSectionProps {
  projects: Project[]
  categoryOrder: string[]
}

export function ProjectsSection({ projects, categoryOrder }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  // Generate categories and sort them according to categoryOrder
  const categories = ["All", ...new Set(projects.map(project => project.category))]
    .sort((a, b) => {
      const indexA = categoryOrder.indexOf(a)
      const indexB = categoryOrder.indexOf(b)
      return indexA - indexB
    })

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getIconForProject = (iconName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      ShieldCheck: <ShieldCheck className="h-8 w-8" />,
      Key: <Key className="h-8 w-8" />,
      CheckSquare: <CheckSquare className="h-8 w-8" />,
      Boxes: <Boxes className="h-8 w-8" />,
      Building2: <Building2 className="h-8 w-8" />,
      KeyRound: <KeyRound className="h-8 w-8" />,
      FileCheck: <FileCheck className="h-8 w-8" />,
      Shield: <Shield className="h-8 w-8" />,
      Terminal: <Terminal className="h-8 w-8" />,
    }

    return iconMap[iconName] || <Boxes className="h-8 w-8" />
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
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
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-zinc-800 mb-10 text-center">
              <span className="inline-block px-3 py-1 rounded-md" style={{ backgroundColor: "rgb(253, 224, 71)" }}>Our Projects</span>
            </h2>
          <p className="text-gray-600 mb-6">
            Powerful, open tools built by developers, for developers
          </p>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto grid grid-cols-1 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
              variants={itemVariants}
              layout
            >
              <div className="text-blue-500">
                {getIconForProject(project.icon)}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 flex items-center text-sm font-medium"
              >
                View
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

