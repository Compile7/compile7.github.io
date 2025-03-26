import Link from "next/link"
import { Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SimulatorContainer } from "@/components/simulator-container"
import { DinoGame } from "@/components/dino-game"
import { ProjectsSection } from "@/components/projects-section"
import { CheatCode } from "@/components/cheat-code"
import { Header } from "@/components/header"
import { constructMetadata } from '@/components/meta'

export const metadata = constructMetadata()

export default function Home() {
  // Project data
  const projects = [
    {
      title: "SAML Tester",
      description: "Test SAML authentication without complex setup",
      link: "https://saml-tester.compile7.org/",
    },
    {
      title: "JWT Validator",
      description: "Validate and secure JWT tokens",
      link: "https://jwt.compile7.org/",
    },
    {
      title: "JWT Checklist",
      description: "Secure your JWT implementation",
      link: "https://jwt-checklist.compile7.org/",
    },
    {
      title: "Kode Jungle",
      description: "All in one handy tools for developers",
      link: "https://kodejungle.org/",
    },
    {
      title: "Enterprise Ready",
      description: "Find the best solutions to make your SaaS enterprise ready",
      link: "https://enterpriseready.compile7.org/",
    },
    {
      title: "Enterprise SSO Examples",
      description: "Inspiration to how to add Login with SSO",
      link: "https://github.com/Compile7/enterprise-sso-examples",
    },
    {
      title: "Consent Management",
      description: "Take consent before processing data",
      link: "#",
    },
    {
      title: "SAML Toolset",
      description: "All in one SAML tools online",
      link: "http://saml-validator.compile7.org/",
    },
    {
      title: "OIDC Playground",
      description: "Test OIDC services without writing code",
      link: "https://oidc-playground.compile7.org/",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Developer Community</h1>
            <p className="text-xl text-gray-600 mb-8">For developer by developers!</p>

            <Button asChild className="rounded-full px-8 py-6">
              <Link href="/decompile" className="flex items-center gap-2">
                Read Blogs
                <span className="ml-1">→</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection projects={projects} />

        {/* Dino Game Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <DinoGame />
          </div>
        </section>
      </main>
    </div>
  )
}

