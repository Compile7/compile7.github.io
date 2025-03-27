import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML Key Concepts",
  description: "Understanding the key concepts of Security Assertion Markup Language (SAML)",
}

export default function KeyConceptsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Key Concepts</h1>
        <p className="text-lg text-muted-foreground mt-2">Understanding the fundamental concepts of SAML</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Core SAML Concepts</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Identity Provider (IdP)</h3>
        <p>
          An Identity Provider is a system that creates, maintains, and manages identity information for principals
          (users, services, or systems) and provides authentication services to relying applications. In SAML, the IdP
          is responsible for authenticating users and issuing SAML assertions.
        </p>
        <p className="mt-2">Examples of Identity Providers include:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Microsoft Active Directory Federation Services (ADFS)</li>
          <li>Okta</li>
          <li>OneLogin</li>
          <li>Ping Identity</li>
          <li>Auth0</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Service Provider (SP)</h3>
        <p>
          A Service Provider is a system that receives and accepts authentication assertions from an Identity Provider.
          The SP relies on the IdP to identify the user and provide information about the user's identity and
          attributes. The SP then makes access control decisions based on this information.
        </p>
        <p className="mt-2">Examples of Service Providers include:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Web applications</li>
          <li>Cloud services</li>
          <li>SaaS applications</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Principal</h3>
        <p>
          A Principal is the entity that is being authenticated. In most cases, this is a user, but it could also be a
          system or service. The principal is represented in SAML assertions by a subject.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Assertion</h3>
        <p>
          An Assertion is a package of information that contains one or more statements made by an identity provider
          about a subject. SAML defines three kinds of assertions:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Authentication assertions</strong> - State that the subject was authenticated by a particular means
            at a particular time
          </li>
          <li>
            <strong>Attribute assertions</strong> - Contain specific attributes about the subject
          </li>
          <li>
            <strong>Authorization decision assertions</strong> - State whether the subject is permitted to access a
            particular resource
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Protocol</h3>
        <p>
          SAML protocols describe how SAML elements (including assertions) are packaged within SAML request and response
          elements, and give the processing rules that SAML entities must follow when producing or consuming these
          elements.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Binding</h3>
        <p>
          A SAML binding is a mapping of a SAML protocol message onto standard messaging formats and/or communications
          protocols. For example, the SAML SOAP binding specifies how SAML protocol messages are carried within SOAP
          messages, while the HTTP Redirect binding specifies how SAML protocol messages are carried within URL query
          strings.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Profile</h3>
        <p>
          A SAML profile describes how SAML assertions, protocols, and bindings combine to support a defined use case.
          The most widely used profile is the Web Browser SSO Profile, which defines how SAML authentication should work
          in a web browser environment.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">SAML Flows</h2>
        <p>SAML supports several different flows, but the two most common are:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">SP-Initiated Flow</h3>
        <p>
          In an SP-initiated flow, the user starts at the service provider and is redirected to the identity provider
          for authentication. This is the most common flow in web applications.
        </p>
        <div className="my-6 rounded-lg border bg-card p-4">
          <ol className="ml-6 list-decimal [&>li]:mt-2">
            <li>User attempts to access a protected resource at the service provider</li>
            <li>
              Service provider determines the user's identity provider and generates a SAML authentication request
            </li>
            <li>Service provider redirects the user's browser to the identity provider with the SAML request</li>
            <li>Identity provider authenticates the user (if not already authenticated)</li>
            <li>Identity provider generates a SAML response containing an assertion</li>
            <li>Identity provider returns the SAML response to the user's browser</li>
            <li>User's browser posts the SAML response to the service provider</li>
            <li>Service provider validates the SAML response and grants access to the protected resource</li>
          </ol>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">IdP-Initiated Flow</h3>
        <p>
          In an IdP-initiated flow, the user starts at the identity provider and selects a service provider to access.
          This flow is less common but can be useful in certain scenarios.
        </p>
        <div className="my-6 rounded-lg border bg-card p-4">
          <ol className="ml-6 list-decimal [&>li]:mt-2">
            <li>User authenticates at the identity provider</li>
            <li>User selects a service provider to access</li>
            <li>Identity provider generates a SAML response containing an assertion</li>
            <li>Identity provider returns the SAML response to the user's browser</li>
            <li>User's browser posts the SAML response to the service provider</li>
            <li>Service provider validates the SAML response and grants access to the appropriate resource</li>
          </ol>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/what-is-saml">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: What is SAML?
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/fundamentals/benefits">
            Next: Benefits of SAML <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

