import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML Attribute Mapping",
  description: "Learn how to map SAML attributes to your application",
}

export default function AttributeMappingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Attribute Mapping</h1>
        <p className="text-lg text-muted-foreground mt-2">Learn how to map SAML attributes to your application</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Understanding Attribute Mappings
        </h2>
        <p>
          When a user signs in using the SAML 2.0 Single Sign-On protocol, an XML document called the SAML Assertion is
          exchanged between the identity provider and your application.
        </p>

        <p>
          This assertion contains information about the user's identity and other authentication information, such as:
        </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Unique ID of the user (called <code>NameID</code> in SAML)
          </li>
          <li>Email address</li>
          <li>Name of the user</li>
          <li>Department or organization</li>
          <li>Other attributes present in the users directory managed by the identity provider</li>
        </ul>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            With exception of the unique user ID, SAML does not require any other attributes in the assertion. Identity
            providers can be configured so that only select user information is shared with your application.
          </AlertDescription>
        </Alert>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Configuring Attribute Mapping</h3>
        <p>
          Your application can be configured to recognize these attributes and map them into your database using a JSON
          structure. This process is called attribute mapping, and varies according to the configuration of the identity
          provider.
        </p>

        <p className="mt-4">
          For example, the following JSON structure configures attribute mapping for the <code>email</code> and{" "}
          <code>first_name</code> user identity properties:
        </p>

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

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
          Example SAML Assertion with Attributes
        </h3>
        <p>Given a SAML 2.0 assertion that includes these attributes:</p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<saml:AttributeStatement>
  <!-- will be mapped to the email key -->
  <saml:Attribute
    Name="mail"
    NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
    >
    <saml:AttributeValue xsi:type="xs:string">
      valid.email@example.com
    </saml:AttributeValue>
  </saml:Attribute>
  <!-- will be mapped to the first_name key -->
  <saml:Attribute
    Name="givenName"
    NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
    >
    <saml:AttributeValue xsi:type="xs:string">
      Jane Doe
    </saml:AttributeValue>
  </saml:Attribute>
</saml:AttributeStatement>`}
        </pre>

        <p className="mt-4">Will result in the following claims in the user's identity in the database and JWT:</p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`{
  "email": "valid.email@example.com",
  "custom_claims": {
    "first_name": "Jane Doe"
  }
}`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Accessing Stored Attributes</h3>
        <p>
          The stored attributes, once mapped, show up in the access token (a JWT) of the user. If you need to look these
          values up in the database, you can find them in the identity data JSON column. Identities created for SSO
          providers have the provider information in the provider column, while the ID contains the unique{" "}
          <code>NameID</code> of the user account.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Common Attribute Mapping Challenges</h3>
        <p>
          Most SAML 2.0 identity providers use Lightweight Directory Access Protocol (LDAP) attribute names. However,
          due to their variability and complexity, operators of identity providers are able to customize both the{" "}
          <code>Name</code> and attribute value that is sent to your application in an assertion.
        </p>

        <p className="mt-4">Common challenges include:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Inconsistent attribute naming across different identity providers</li>
          <li>Missing required attributes</li>
          <li>Attributes in unexpected formats</li>
          <li>Case sensitivity issues</li>
        </ul>

        <p>
          Always refer to the identity provider's documentation and contact the operator for details on what attributes
          are mapped for your application.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/implementation/sp-setup">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Service Provider Setup
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/security/best-practices">
            Next: Security Best Practices <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

