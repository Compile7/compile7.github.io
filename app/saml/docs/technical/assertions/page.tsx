import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "SAML Assertions",
  description: "Understanding SAML assertions and their structure",
}

export default function AssertionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">SAML Assertions</h1>
        <p className="text-lg text-muted-foreground mt-2">Understanding SAML assertions and their structure</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What are SAML Assertions?</h2>
        <p>
          A SAML assertion is an XML document exchanged between the identity provider and service provider. It contains
          statements about a subject (typically a user) that the identity provider claims to be true.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Types of Assertions</h3>
        <p>SAML assertions can contain three types of statements:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Authentication statements</strong> - Declare that the subject was authenticated by a particular
            means at a particular time
          </li>
          <li>
            <strong>Attribute statements</strong> - Contain specific attributes about the subject (e.g., email, name,
            role)
          </li>
          <li>
            <strong>Authorization decision statements</strong> - Declare what the subject is authorized to do
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Assertion Structure</h3>
        <p>A SAML assertion has the following key components:</p>

        <div className="my-6 rounded-lg border bg-card p-4">
          <ul className="ml-6 list-disc [&>li]:mt-2">
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
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Example SAML Assertion</h3>

        <Tabs defaultValue="xml" className="w-full">
          <TabsList>
            <TabsTrigger value="xml">XML</TabsTrigger>
            <TabsTrigger value="explained">Explained</TabsTrigger>
          </TabsList>
          <TabsContent value="xml" className="mt-4">
            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm">
              {`<saml:Assertion
  xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
  ID="_assertion123456"
  Version="2.0"
  IssueInstant="2023-04-01T12:05:00Z">
  <saml:Issuer>https://idp.example.org/SAML2</saml:Issuer>
  <saml:Subject>
    <saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">
      user@example.com
    </saml:NameID>
    <saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
      <saml:SubjectConfirmationData
        InResponseTo="_123456789"
        Recipient="https://sp.example.com/SAML2/SSO/POST"
        NotOnOrAfter="2023-04-01T12:10:00Z"/>
    </saml:SubjectConfirmation>
  </saml:Subject>
  <saml:Conditions
    NotBefore="2023-04-01T12:00:00Z"
    NotOnOrAfter="2023-04-01T12:10:00Z">
    <saml:AudienceRestriction>
      <saml:Audience>https://sp.example.com/SAML2</saml:Audience>
    </saml:AudienceRestriction>
  </saml:Conditions>
  <saml:AuthnStatement
    AuthnInstant="2023-04-01T12:04:00Z"
    SessionIndex="_session12345">
    <saml:AuthnContext>
      <saml:AuthnContextClassRef>
        urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
      </saml:AuthnContextClassRef>
    </saml:AuthnContext>
  </saml:AuthnStatement>
  <saml:AttributeStatement>
    <saml:Attribute Name="mail" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
      <saml:AttributeValue xsi:type="xs:string">
        user@example.com
      </saml:AttributeValue>
    </saml:Attribute>
    <saml:Attribute Name="givenName" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
      <saml:AttributeValue xsi:type="xs:string">
        Jane Doe
      </saml:AttributeValue>
    </saml:Attribute>
  </saml:AttributeStatement>
</saml:Assertion>`}
            </pre>
          </TabsContent>
          <TabsContent value="explained" className="mt-4">
            <div className="rounded-lg border p-4 space-y-4">
              <p>
                <strong>Assertion ID and Metadata</strong>: The assertion has a unique ID, version, and timestamp.
              </p>
              <p>
                <strong>Issuer</strong>: The identity provider that issued this assertion (idp.example.org).
              </p>
              <p>
                <strong>Subject</strong>: The user being authenticated, identified by email address.
              </p>
              <p>
                <strong>Subject Confirmation</strong>: Specifies how the subject can be confirmed (bearer method).
              </p>
              <p>
                <strong>Conditions</strong>: Time constraints for when the assertion is valid and audience restrictions.
              </p>
              <p>
                <strong>Authentication Statement</strong>: Declares that the user was authenticated at a specific time
                using password-protected transport.
              </p>
              <p>
                <strong>Attribute Statement</strong>: Contains user attributes like email and name.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Attribute Mapping</h3>
        <p>
          Attribute mapping is the process of recognizing user attributes in SAML assertions and mapping them to your
          application's database. This allows you to extract and use information about users that is provided by the
          identity provider.
        </p>

        <p>For example, with Supabase Auth, you can configure attribute mapping using a JSON structure:</p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`{
  "keys": {
    "email": {
      "name": "mail"
    },
    "first_name": {
      "name": "givenName"
    }
  }
}`}
        </pre>

        <p className="mt-4">
          This maps the SAML attribute <code>mail</code> to the <code>email</code> field and <code>givenName</code> to
          the <code>first_name</code> field in your application.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/technical/components">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: SAML Components
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/technical/protocols">
            Next: SAML Protocols <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

