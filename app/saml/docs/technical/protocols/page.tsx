import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML Protocols",
  description: "Understanding SAML protocols and how they facilitate secure communication",
}

export default function ProtocolsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">SAML Protocols</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Understanding SAML protocols and how they facilitate secure communication
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What are SAML Protocols?</h2>
        <p>
          SAML protocols define how SAML assertions are packaged within request and response elements, and provide the
          processing rules that SAML entities must follow when producing or consuming these elements. They specify the
          structure and content of the messages exchanged between identity providers and service providers.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Key Point</AlertTitle>
          <AlertDescription>
            SAML protocols are independent of the underlying communication protocols (such as HTTP or SOAP). The mapping
            of SAML protocol messages to these communication protocols is defined by SAML bindings.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">Core SAML Protocols</h2>
        <p>SAML 2.0 defines several protocols for different use cases:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Authentication Request Protocol</h3>
        <p>
          The Authentication Request Protocol is the most commonly used SAML protocol. It allows a service provider to
          request that an identity provider authenticate a user and return a corresponding assertion.
        </p>
        <p className="mt-2">The protocol involves the following messages:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>AuthnRequest</strong> - Sent from the service provider to the identity provider to request
            authentication of a user
          </li>
          <li>
            <strong>Response</strong> - Sent from the identity provider to the service provider, containing an
            authentication assertion or an error
          </li>
        </ul>
        <p>Example of an AuthnRequest message:</p>
        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<samlp:AuthnRequest
    xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"
    xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    ID="_123456789"
    Version="2.0"
    IssueInstant="2023-04-01T12:00:00Z"
    Destination="https://idp.example.org/SAML2/SSO/POST"
    AssertionConsumerServiceURL="https://sp.example.com/SAML2/SSO/POST"
    ProtocolBinding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST">
    <saml:Issuer>https://sp.example.com/SAML2</saml:Issuer>
    <samlp:NameIDPolicy
        Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
        AllowCreate="true"/>
</samlp:AuthnRequest>`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Single Logout Protocol</h3>
        <p>
          The Single Logout Protocol allows a user to log out from all service providers with a single action. It can be
          initiated by either the identity provider or a service provider.
        </p>
        <p className="mt-2">The protocol involves the following messages:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>LogoutRequest</strong> - Sent from the initiating party to request logout
          </li>
          <li>
            <strong>LogoutResponse</strong> - Sent in response to a LogoutRequest, indicating success or failure
          </li>
        </ul>
        <p>Example of a LogoutRequest message:</p>
        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<samlp:LogoutRequest
    xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"
    xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    ID="_654321"
    Version="2.0"
    IssueInstant="2023-04-01T13:00:00Z"
    Destination="https://idp.example.org/SAML2/SLO/POST">
    <saml:Issuer>https://sp.example.com/SAML2</saml:Issuer>
    <saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">
        user@example.com
    </saml:NameID>
    <samlp:SessionIndex>_session12345</samlp:SessionIndex>
</samlp:LogoutRequest>`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Assertion Query and Request Protocol</h3>
        <p>
          The Assertion Query and Request Protocol allows a service provider to request a specific assertion from an
          identity provider. It is less commonly used than the Authentication Request Protocol.
        </p>
        <p className="mt-2">The protocol defines several types of queries:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>AssertionIDRequest</strong> - Requests an assertion with a specific ID
          </li>
          <li>
            <strong>AttributeQuery</strong> - Requests attributes for a specific subject
          </li>
          <li>
            <strong>AuthnQuery</strong> - Requests authentication information for a specific subject
          </li>
          <li>
            <strong>AuthzDecisionQuery</strong> - Requests an authorization decision for a specific subject and resource
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Artifact Resolution Protocol</h3>
        <p>
          The Artifact Resolution Protocol is used to retrieve a SAML message by reference using a small, fixed-length
          value called an artifact. This is useful when the SAML message is too large to be transmitted directly or when
          additional security is required.
        </p>
        <p className="mt-2">The protocol involves the following messages:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>ArtifactResolve</strong> - Sent to request resolution of an artifact into the corresponding SAML
            message
          </li>
          <li>
            <strong>ArtifactResponse</strong> - Contains the SAML message corresponding to the artifact
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Name Identifier Management Protocol</h3>
        <p>
          The Name Identifier Management Protocol allows for the creation and management of pseudonyms for users. It
          enables an identity provider or service provider to notify the other of changes to the identifier used to
          refer to a principal.
        </p>
        <p className="mt-2">The protocol involves the following messages:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>ManageNameIDRequest</strong> - Sent to request a change to a name identifier
          </li>
          <li>
            <strong>ManageNameIDResponse</strong> - Sent in response to a ManageNameIDRequest
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Protocol Message Structure
        </h2>
        <p>SAML protocol messages share a common structure:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>ID</strong> - A unique identifier for the message
          </li>
          <li>
            <strong>Version</strong> - The SAML version (typically "2.0")
          </li>
          <li>
            <strong>IssueInstant</strong> - The time the message was issued
          </li>
          <li>
            <strong>Destination</strong> - The intended recipient of the message
          </li>
          <li>
            <strong>Issuer</strong> - The entity that issued the message
          </li>
          <li>
            <strong>Signature</strong> - An optional XML digital signature
          </li>
          <li>
            <strong>Extensions</strong> - Optional extensions to the protocol
          </li>
          <li>
            <strong>Protocol-specific elements</strong> - Elements specific to the particular protocol
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Protocol Processing Rules
        </h2>
        <p>
          SAML protocols define specific processing rules that SAML entities must follow when producing or consuming
          protocol messages. These rules cover:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Message validation</li>
          <li>Error handling</li>
          <li>Security requirements</li>
          <li>State management</li>
        </ul>
        <p>For example, when processing an AuthnRequest, an identity provider must:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Verify that the request is well-formed</li>
          <li>Verify that the issuer is recognized and trusted</li>
          <li>Verify any signatures on the request</li>
          <li>Authenticate the user (if not already authenticated)</li>
          <li>Generate a Response message containing an appropriate assertion</li>
          <li>Sign the Response message</li>
          <li>Return the Response message to the service provider</li>
        </ul>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Implementation Note</AlertTitle>
          <AlertDescription>
            Most SAML implementations handle these processing rules automatically, but it's important to understand them
            when troubleshooting issues or implementing custom SAML functionality.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/technical/assertions">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: SAML Assertions
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/technical/bindings">
            Next: SAML Bindings <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

