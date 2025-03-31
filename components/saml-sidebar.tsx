"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Export sidebarItems so it can be imported by sitemap.ts
export const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/saml/docs/introduction",
      },
      {
        title: "What is SAML?",
        href: "/saml/docs/what-is-saml",
      },
    ],
  },
  {
    title: "Fundamentals",
    items: [
      {
        title: "Key Concepts",
        href: "/saml/docs/fundamentals/key-concepts",
      },
      {
        title: "Benefits of SAML",
        href: "/saml/docs/fundamentals/benefits",
      },
      {
        title: "Single Sign-On",
        href: "/saml/docs/fundamentals/single-sign-on",
      },
    ],
  },
  {
    title: "Technical Details",
    items: [
      {
        title: "SAML Components",
        href: "/saml/docs/technical/components",
      },
      {
        title: "Assertions",
        href: "/saml/docs/technical/assertions",
      },
      {
        title: "Protocols",
        href: "/saml/docs/technical/protocols",
      },
      {
        title: "Bindings",
        href: "/saml/docs/technical/bindings",
      },
      {
        title: "XML Structure",
        href: "/saml/docs/technical/xml-structure",
      },
      {
        title: "SAML Flows",
        href: "/saml/docs/technical/saml-flows",
      },
    ],
  },
  {
    title: "Implementation",
    items: [
      {
        title: "Getting Started",
        href: "/saml/docs/implementation/getting-started",
      },
      {
        title: "Identity Provider Setup",
        href: "/saml/docs/implementation/idp-setup",
      },
      {
        title: "Service Provider Setup",
        href: "/saml/docs/implementation/sp-setup",
      },
      {
        title: "Attribute Mapping",
        href: "/saml/docs/implementation/attribute-mapping",
      },
    ],
  },
  {
    title: "Security",
    items: [
      {
        title: "Best Practices",
        href: "/saml/docs/security/best-practices",
      },
      {
        title: "Common Vulnerabilities",
        href: "/saml/docs/security/vulnerabilities",
      },
      {
        title: "Replay Attacks",
        href: "/saml/docs/security/replay-attacks",
      },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {sidebarItems.map((section, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{section.title}</h4>
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-2 py-1 text-sm hover:bg-accent",
                pathname === item.href ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

