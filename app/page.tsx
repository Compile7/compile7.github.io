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
      icon: "ShieldCheck",
      category: "SAML"
    },
    {
      title: "JWT Validator",
      description: "Validate and secure JWT tokens",
      link: "https://jwt.compile7.org/",
      icon: "Key",
      category: "JWT"
    },
    {
      title: "JWT Checklist",
      description: "Secure your JWT implementation",
      link: "https://jwt-checklist.compile7.org/",
      icon: "CheckSquare",
      category: "JWT"
    },
    {
      title: "Kode Jungle",
      description: "All in one handy tools for developers",
      link: "https://kodejungle.org/",
      icon: "Boxes",
      category: "Other"
    },
    {
      title: "Enterprise Ready",
      description: "Find the best solutions to make your SaaS enterprise ready",
      link: "https://enterpriseready.compile7.org/",
      icon: "Building2",
      category: "EnterpriseReady"
    },
    {
      title: "Enterprise SSO Examples",
      description: "Inspiration to how to add Login with SSO",
      link: "https://github.com/Compile7/enterprise-sso-examples",
      icon: "KeyRound",
      category: "Other"
    },
    {
      title: "Consent Management",
      description: "Take consent before processing data",
      link: "#",
      icon: "FileCheck",
      category: "Other"
    },
    {
      title: "SAML Toolset",
      description: "All in one SAML tools online",
      link: "http://saml-validator.compile7.org/",
      icon: "Shield",
      category: "SAML"
    },
    {
      title: "OIDC Playground",
      description: "Playground for OpenID Connect",
      link: "https://oidc-playground.compile7.org/",
      icon: "Terminal",
      category: "OIDC"
    },
    {
      title: "OIDC Tester",
      description: "Test OpenID Connect authentication without complex setup",
      link: "https://oidc-tester.compile7.org/",
      icon: "Terminal",
      category: "OIDC"
    },
  ]

  const categoryOrder = ["All", "SAML", "OIDC", "JWT", "EnterpriseReady", "Other"]

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
        <ProjectsSection projects={projects} categoryOrder={categoryOrder} />

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

