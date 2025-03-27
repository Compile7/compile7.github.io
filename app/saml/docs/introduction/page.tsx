import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Introduction to SAML",
  description: "Learn about Security Assertion Markup Language (SAML) and its applications",
}

export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction to SAML</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Learn about Security Assertion Markup Language (SAML) and its applications
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What is SAML?</h2>
        <p>
          Security Assertion Markup Language (SAML) is a protocol that enables single-sign on for enterprises. Developed
          in the early 2000s and based on XML technology, SAML has become the de facto standard for enterprise single
          sign-on, though OpenID Connect (OIDC) is gaining popularity as well.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Why SAML Matters</h3>
        <p>
          SAML solves a critical problem in enterprise environments: how to securely authenticate users across multiple
          applications without requiring them to remember and enter credentials for each system. By providing a
          standardized way for identity providers and service providers to communicate authentication and authorization
          information, SAML enables seamless and secure user experiences.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Key Benefits</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Improved user experience through single sign-on</li>
          <li>Enhanced security by reducing password fatigue</li>
          <li>Centralized user management</li>
          <li>Standardized integration between systems</li>
          <li>Reduced administrative overhead</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">How SAML Works</h3>
        <p>
          At its core, SAML works by exchanging XML documents (assertions) between an identity provider (IdP) and a
          service provider (SP). These assertions contain statements about a user's identity, attributes, and
          authentication status.
        </p>

        <div className="my-6 rounded-lg border bg-card p-4">
          <h4 className="font-medium">Basic SAML Flow:</h4>
          <ol className="my-4 ml-6 list-decimal [&>li]:mt-2">
            <li>User attempts to access a protected resource at the service provider</li>
            <li>Service provider generates a SAML request</li>
            <li>User is redirected to the identity provider with the SAML request</li>
            <li>Identity provider authenticates the user</li>
            <li>Identity provider generates a SAML response with an assertion</li>
            <li>User is redirected back to the service provider with the SAML response</li>
            <li>Service provider validates the assertion and grants access</li>
          </ol>
        </div>
      </div>

      <div className="flex justify-end">
        <Button asChild>
          <Link href="/saml/docs/what-is-saml">
            Next: What is SAML <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

