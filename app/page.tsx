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
      title: "KodeJungle",
      description: "All in one handy tools for developers",
      link: "https://kodejungle.org/",
      icon: "Code",
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
      category: "EnterpriseReady"
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
    {
      title: "Markdown to WordPress",
      description: "Convert Markdown to WordPress posts",
      link: "https://md-to-wp.compile7.org/",
      icon: "Wordpress",
      category: "Other"
    },
  ]

  const categoryOrder = ["All", "SAML", "OIDC", "JWT", "EnterpriseReady", "Other"]

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-24 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <Code className="w-10 h-10 text-primary mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-3 tracking-tight">
              Developer <span className="inline-block px-2 rounded-sm" style={{ backgroundColor: "rgb(253, 224, 71)" }}>Community</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-10">For developers, by developers</p>

            <Button asChild variant="outline" className="rounded-md px-6 py-2 transition-colors border-zinc-300 group hover:border-zinc-400" 
                   style={{ ":hover": { backgroundColor: "rgba(253, 224, 71, 0.2)" } }}>
              <Link href="/decompile" className="flex items-center gap-2">
                Read Blogs
                <span aria-hidden="true" className="group-hover:text-zinc-700">→</span>
              </Link>
            </Button>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white border-t border-b border-zinc-200">
          <div className="container mx-auto px-4 max-w-5xl">
            
            <ProjectsSection projects={projects} categoryOrder={categoryOrder} />
          </div>
        </section>

        {/* Dino Game Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            
            <DinoGame />
          </div>
        </section>
      </main>
    </div>
  )
}

