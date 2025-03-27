import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "What is SAML?",
  description: "A detailed explanation of Security Assertion Markup Language (SAML)",
}

export default function WhatIsSamlPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">What is SAML?</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A detailed explanation of Security Assertion Markup Language (SAML)
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Definition and Purpose</h2>
        <p>
          Security Assertion Markup Language (SAML) is an XML-based open standard for exchanging authentication and
          authorization data between parties, specifically between an identity provider (IdP) and a service provider
          (SP).
        </p>

        <p>
          SAML was developed by the Security Services Technical Committee of OASIS (Organization for the Advancement of
          Structured Information Standards) and has become the de facto standard for enterprise single sign-on.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Historical Context</h3>
        <p>
          SAML was developed in the early 2000s and is based on XML technology. The first version, SAML 1.0, was adopted
          as an OASIS standard in November 2002. SAML 2.0, which is the most widely used version today, became an OASIS
          standard in March 2005.
        </p>

        <p>
          SAML 2.0 consolidated the work of previous versions of SAML, as well as the Liberty Alliance's Identity
          Federation Framework (ID-FF) and Shibboleth, another open-source single sign-on solution.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Core Components</h3>
        <p>
          SAML consists of several core components that work together to enable secure authentication and authorization:
        </p>

        <div className="my-6 rounded-lg border bg-card p-4">
          <ul className="ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Assertions</strong>: XML documents that contain statements about a subject (typically a user) that
              an identity provider claims to be true
            </li>
            <li>
              <strong>Protocols</strong>: Define how SAML assertions are packaged within request and response elements,
              and the processing rules that SAML entities must follow
            </li>
            <li>
              <strong>Bindings</strong>: Detail how SAML messages map to standard communication protocols like HTTP or
              SOAP
            </li>
            <li>
              <strong>Profiles</strong>: Define how SAML assertions, protocols, and bindings combine to support a
              defined use case
            </li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
          SAML vs. Other Authentication Protocols
        </h3>
        <p>
          While SAML is a widely used standard for enterprise SSO, there are other authentication protocols that serve
          similar purposes:
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Protocol</th>
                <th className="px-4 py-2 text-left">Primary Use Case</th>
                <th className="px-4 py-2 text-left">Advantages</th>
                <th className="px-4 py-2 text-left">Disadvantages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">SAML</td>
                <td className="px-4 py-2">Enterprise SSO</td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Mature and widely adopted</li>
                    <li>Strong security features</li>
                    <li>Comprehensive</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Complex to implement</li>
                    <li>XML-based (verbose)</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">OAuth 2.0</td>
                <td className="px-4 py-2">API authorization</td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Simpler than SAML</li>
                    <li>Good for mobile apps</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Not designed for authentication</li>
                    <li>Less comprehensive</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">OpenID Connect</td>
                <td className="px-4 py-2">Consumer SSO</td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Built on OAuth 2.0</li>
                    <li>JSON-based (lightweight)</li>
                    <li>Mobile-friendly</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Less mature than SAML</li>
                    <li>Fewer enterprise features</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">When to Use SAML</h3>
        <p>SAML is particularly well-suited for the following scenarios:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Enterprise environments with complex security requirements</li>
          <li>Organizations that need to integrate with legacy systems</li>
          <li>Situations where detailed user attributes need to be exchanged</li>
          <li>When strong security and compliance are top priorities</li>
          <li>
            When integrating with enterprise identity providers like Active Directory Federation Services (ADFS), Okta,
            or OneLogin
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/introduction">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Introduction
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/fundamentals/key-concepts">
            Next: Key Concepts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

