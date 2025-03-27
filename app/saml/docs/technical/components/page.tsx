import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "SAML Components",
  description: "Understanding the core components of SAML architecture",
}

export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">SAML Components</h1>
        <p className="text-lg text-muted-foreground mt-2">Understanding the core components of SAML architecture</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Core SAML Components</h2>
        <p>
          SAML is built around several core components that work together to enable secure authentication and
          authorization. Understanding these components is essential for implementing SAML correctly.
        </p>

        <Tabs defaultValue="assertions" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="assertions">Assertions</TabsTrigger>
            <TabsTrigger value="protocols">Protocols</TabsTrigger>
            <TabsTrigger value="bindings">Bindings</TabsTrigger>
            <TabsTrigger value="profiles">Profiles</TabsTrigger>
          </TabsList>

          <TabsContent value="assertions" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Assertions</h3>
            <p>
              Assertions are the core data structure in SAML. An assertion is an XML document that contains statements
              about a subject (typically a user) that an identity provider claims to be true.
            </p>
            <p className="mt-2">SAML defines three types of assertions:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Authentication assertions</strong> - State that the subject was authenticated by a particular
                means at a particular time
              </li>
              <li>
                <strong>Attribute assertions</strong> - Contain specific attributes about the subject (e.g., email,
                name, role)
              </li>
              <li>
                <strong>Authorization decision assertions</strong> - State whether the subject is permitted to access a
                particular resource
              </li>
            </ul>
            <p>Assertions contain several key components:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Issuer</strong> - The entity that created the assertion (typically the identity provider)
              </li>
              <li>
                <strong>Subject</strong> - The principal that is the subject of the assertion (typically a user)
              </li>
              <li>
                <strong>Conditions</strong> - Conditions that must be satisfied for the assertion to be valid
              </li>
              <li>
                <strong>Statements</strong> - Authentication, attribute, or authorization decision statements
              </li>
              <li>
                <strong>Signature</strong> - Digital signature to ensure integrity and authenticity
              </li>
            </ul>
          </TabsContent>

          <TabsContent value="protocols" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Protocols</h3>
            <p>
              SAML protocols define how SAML assertions are packaged within request and response elements, and give the
              processing rules that SAML entities must follow when producing or consuming these elements.
            </p>
            <p className="mt-2">The main SAML protocols include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Authentication Request Protocol</strong> - Used by service providers to request that an identity
                provider authenticate a user and return a corresponding assertion
              </li>
              <li>
                <strong>Single Logout Protocol</strong> - Allows a user to log out from all service providers with a
                single action
              </li>
              <li>
                <strong>Assertion Query and Request Protocol</strong> - Allows a service provider to request a specific
                assertion from an identity provider
              </li>
              <li>
                <strong>Artifact Resolution Protocol</strong> - Used to retrieve a SAML message by reference using a
                small, fixed-length value called an artifact
              </li>
              <li>
                <strong>Name Identifier Management Protocol</strong> - Allows for the creation and management of
                pseudonyms for users
              </li>
            </ul>
          </TabsContent>

          <TabsContent value="bindings" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Bindings</h3>
            <p>
              SAML bindings define how SAML protocol messages are transported between SAML entities. They map SAML
              protocol messages onto standard messaging formats and/or communications protocols.
            </p>
            <p className="mt-2">Common SAML bindings include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>HTTP Redirect Binding</strong> - Transmits SAML messages by URL encoding them and sending them
                as URL query string parameters
              </li>
              <li>
                <strong>HTTP POST Binding</strong> - Transmits SAML messages via an HTML form with a base64-encoded
                message
              </li>
              <li>
                <strong>HTTP Artifact Binding</strong> - Transmits a reference to a SAML message rather than the message
                itself
              </li>
              <li>
                <strong>SOAP Binding</strong> - Transmits SAML messages within SOAP messages
              </li>
              <li>
                <strong>SAML URI Binding</strong> - Retrieves a SAML assertion by resolving a URI
              </li>
            </ul>
          </TabsContent>

          <TabsContent value="profiles" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Profiles</h3>
            <p>
              SAML profiles describe how SAML assertions, protocols, and bindings combine to support a defined use case.
              They provide a framework for implementing specific SAML functionality.
            </p>
            <p className="mt-2">Key SAML profiles include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Web Browser SSO Profile</strong> - Defines how to implement single sign-on for web browsers
              </li>
              <li>
                <strong>Enhanced Client or Proxy (ECP) Profile</strong> - Extends the Web Browser SSO Profile for
                non-browser clients
              </li>
              <li>
                <strong>Identity Provider Discovery Profile</strong> - Defines how a service provider can discover which
                identity provider a user uses
              </li>
              <li>
                <strong>Single Logout Profile</strong> - Defines how to implement single logout across multiple service
                providers
              </li>
              <li>
                <strong>Attribute Profile</strong> - Defines how to express attributes in SAML assertions
              </li>
            </ul>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">SAML Entities</h2>
        <p>SAML defines several types of entities that participate in SAML transactions:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Identity Provider (IdP)</h3>
        <p>
          An identity provider is a system entity that creates, maintains, and manages identity information for
          principals and provides authentication services to relying service providers. In SAML, the IdP is responsible
          for:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Authenticating users</li>
          <li>Maintaining user identity information</li>
          <li>Generating SAML assertions about authenticated users</li>
          <li>Communicating those assertions to service providers</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Service Provider (SP)</h3>
        <p>
          A service provider is a system entity that provides services to principals or other system entities. In SAML,
          the SP relies on the IdP to identify a user and provide information about the user's identity and attributes.
          The SP is responsible for:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Generating SAML authentication requests</li>
          <li>Consuming and validating SAML assertions</li>
          <li>Making access control decisions based on the information in SAML assertions</li>
          <li>Providing services to authenticated users</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Principal</h3>
        <p>
          A principal is the entity that is being authenticated. In most cases, this is a user, but it could also be a
          system or service. The principal is represented in SAML assertions by a subject.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">SAML Metadata</h2>
        <p>
          SAML metadata is an XML document that contains configuration information for SAML entities. It includes
          information such as:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Entity IDs and descriptors</li>
          <li>Supported protocols, bindings, and profiles</li>
          <li>Certificate information for signing and encryption</li>
          <li>Endpoint URLs for various services</li>
          <li>Organization and contact information</li>
        </ul>
        <p>
          Metadata is used to establish trust between SAML entities and to configure them to communicate with each
          other. It is typically exchanged out-of-band (e.g., through a secure file transfer or a metadata exchange
          service) before SAML transactions can take place.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/fundamentals/single-sign-on">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Single Sign-On
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/technical/assertions">
            Next: SAML Assertions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

