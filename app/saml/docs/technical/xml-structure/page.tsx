import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML XML Structure",
  description: "Understanding the XML structure of SAML messages and assertions",
}

export default function XmlStructurePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">XML Structure</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Understanding the XML structure of SAML messages and assertions
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">SAML and XML</h2>
        <p>
          SAML is built on XML (eXtensible Markup Language), which provides a flexible, extensible format for
          representing structured data. Understanding the XML structure of SAML messages is essential for implementing,
          troubleshooting, and extending SAML functionality.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>XML Namespaces in SAML</AlertTitle>
          <AlertDescription>
            SAML uses XML namespaces to avoid naming conflicts and to organize related elements. The main SAML
            namespaces are:
            <ul className="mt-2 ml-6 list-disc [&>li]:mt-1">
              <li>
                <code>urn:oasis:names:tc:SAML:2.0:assertion</code> - For assertion elements
              </li>
              <li>
                <code>urn:oasis:names:tc:SAML:2.0:protocol</code> - For protocol elements
              </li>
              <li>
                <code>urn:oasis:names:tc:SAML:2.0:metadata</code> - For metadata elements
              </li>
              <li>
                <code>http://www.w3.org/2000/09/xmldsig#</code> - For XML Digital Signature elements
              </li>
              <li>
                <code>http://www.w3.org/2001/04/xmlenc#</code> - For XML Encryption elements
              </li>
            </ul>
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          SAML Assertion Structure
        </h2>
        <p>
          A SAML assertion is an XML document that contains statements about a subject. Here's the basic structure of a
          SAML assertion:
        </p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<saml:Assertion
    xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    ID="_assertion123456"
    Version="2.0"
    IssueInstant="2023-04-01T12:05:00Z">
    <saml:Issuer>https://idp.example.org/SAML2</saml:Issuer>
    <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <!-- XML Digital Signature elements -->
    </ds:Signature>
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

        <p className="mt-4">Let's break down the key components of a SAML assertion:</p>

        <Tabs defaultValue="root" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="root">Root Element</TabsTrigger>
            <TabsTrigger value="subject">Subject</TabsTrigger>
            <TabsTrigger value="conditions">Conditions</TabsTrigger>
            <TabsTrigger value="statements">Statements</TabsTrigger>
            <TabsTrigger value="signature">Signature</TabsTrigger>
          </TabsList>

          <TabsContent value="root" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Root Element</h3>
            <p>
              The root element of a SAML assertion is <code>&lt;saml:Assertion&gt;</code>. It includes several
              attributes:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>ID</strong> - A unique identifier for the assertion
              </li>
              <li>
                <strong>Version</strong> - The SAML version (typically "2.0")
              </li>
              <li>
                <strong>IssueInstant</strong> - The time the assertion was issued
              </li>
            </ul>
            <p>
              The <code>&lt;saml:Issuer&gt;</code> element identifies the entity that issued the assertion, typically
              the identity provider.
            </p>
          </TabsContent>

          <TabsContent value="subject" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Subject</h3>
            <p>
              The <code>&lt;saml:Subject&gt;</code> element identifies the principal that is the subject of the
              assertion, typically a user. It includes:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>NameID</strong> - An identifier for the subject, with a Format attribute specifying the format
                of the identifier
              </li>
              <li>
                <strong>SubjectConfirmation</strong> - Information about how the subject can be confirmed, including a
                Method attribute
              </li>
              <li>
                <strong>SubjectConfirmationData</strong> - Additional data for subject confirmation, such as the
                recipient and validity period
              </li>
            </ul>
          </TabsContent>

          <TabsContent value="conditions" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Conditions</h3>
            <p>
              The <code>&lt;saml:Conditions&gt;</code> element specifies conditions that must be satisfied for the
              assertion to be valid. It includes:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>NotBefore</strong> - The time before which the assertion is not valid
              </li>
              <li>
                <strong>NotOnOrAfter</strong> - The time at or after which the assertion is not valid
              </li>
              <li>
                <strong>AudienceRestriction</strong> - Restricts the assertion to specific recipients (audiences)
              </li>
            </ul>
            <p>
              Other condition types include <code>&lt;saml:OneTimeUse&gt;</code> and{" "}
              <code>&lt;saml:ProxyRestriction&gt;</code>.
            </p>
          </TabsContent>

          <TabsContent value="statements" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Statements</h3>
            <p>SAML assertions can contain three types of statements:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>AuthnStatement</strong> - Declares that the subject was authenticated by a particular means at a
                particular time
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>
                    <strong>AuthnInstant</strong> - The time of authentication
                  </li>
                  <li>
                    <strong>SessionIndex</strong> - An identifier for the session
                  </li>
                  <li>
                    <strong>AuthnContext</strong> - Information about the authentication context, including the
                    authentication method
                  </li>
                </ul>
              </li>
              <li>
                <strong>AttributeStatement</strong> - Contains specific attributes about the subject
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>
                    <strong>Attribute</strong> - A specific attribute, with a Name and optional NameFormat
                  </li>
                  <li>
                    <strong>AttributeValue</strong> - The value of the attribute
                  </li>
                </ul>
              </li>
              <li>
                <strong>AuthzDecisionStatement</strong> - Declares what the subject is authorized to do
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>
                    <strong>Resource</strong> - The resource for which authorization is being declared
                  </li>
                  <li>
                    <strong>Decision</strong> - The authorization decision (Permit, Deny, or Indeterminate)
                  </li>
                  <li>
                    <strong>Action</strong> - The action(s) for which authorization is being declared
                  </li>
                </ul>
              </li>
            </ul>
          </TabsContent>

          <TabsContent value="signature" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Signature</h3>
            <p>
              The <code>&lt;ds:Signature&gt;</code> element contains an XML Digital Signature that ensures the integrity
              and authenticity of the assertion. It includes:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>SignedInfo</strong> - Information about what is being signed and how
              </li>
              <li>
                <strong>SignatureValue</strong> - The actual signature value
              </li>
              <li>
                <strong>KeyInfo</strong> - Information about the key used to create the signature
              </li>
            </ul>
            <p>
              XML Digital Signatures are complex and follow the W3C XML Signature standard. Most SAML implementations
              handle signatures automatically, but it's important to understand their structure for troubleshooting.
            </p>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          SAML Protocol Message Structure
        </h2>
        <p>
          SAML protocol messages are XML documents that contain requests and responses for SAML operations. Let's look
          at the structure of two common SAML protocol messages: AuthnRequest and Response.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">AuthnRequest</h3>
        <p>
          An AuthnRequest is sent from a service provider to an identity provider to request authentication of a user.
        </p>

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
    <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <!-- XML Digital Signature elements -->
    </ds:Signature>
    <samlp:NameIDPolicy
        Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
        AllowCreate="true"/>
    <samlp:RequestedAuthnContext Comparison="exact">
        <saml:AuthnContextClassRef>
            urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
        </saml:AuthnContextClassRef>
    </samlp:RequestedAuthnContext>
</samlp:AuthnRequest>`}
        </pre>

        <p className="mt-4">Key components of an AuthnRequest:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>ID</strong> - A unique identifier for the request
          </li>
          <li>
            <strong>Version</strong> - The SAML version (typically "2.0")
          </li>
          <li>
            <strong>IssueInstant</strong> - The time the request was issued
          </li>
          <li>
            <strong>Destination</strong> - The intended recipient of the request (the identity provider)
          </li>
          <li>
            <strong>AssertionConsumerServiceURL</strong> - The URL to which the identity provider should send the
            response
          </li>
          <li>
            <strong>ProtocolBinding</strong> - The binding to use for the response
          </li>
          <li>
            <strong>Issuer</strong> - The entity that issued the request (the service provider)
          </li>
          <li>
            <strong>Signature</strong> - An optional XML Digital Signature
          </li>
          <li>
            <strong>NameIDPolicy</strong> - Specifies constraints on the name identifier to be used
          </li>
          <li>
            <strong>RequestedAuthnContext</strong> - Specifies the authentication context requirements
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Response</h3>
        <p>A Response is sent from an identity provider to a service provider in response to an AuthnRequest.</p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<samlp:Response
    xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"
    xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    ID="_abcdef123456"
    Version="2.0"
    IssueInstant="2023-04-01T12:05:00Z"
    Destination="https://sp.example.com/SAML2/SSO/POST"
    InResponseTo="_123456789">
    <saml:Issuer>https://idp.example.org/SAML2</saml:Issuer>
    <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <!-- XML Digital Signature elements -->
    </ds:Signature>
    <samlp:Status>
        <samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/>
    </samlp:Status>
    <saml:Assertion
        xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
        ID="_assertion123456"
        Version="2.0"
        IssueInstant="2023-04-01T12:05:00Z">
        <!-- Assertion elements as described earlier -->
    </saml:Assertion>
</samlp:Response>`}
        </pre>

        <p className="mt-4">Key components of a Response:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>ID</strong> - A unique identifier for the response
          </li>
          <li>
            <strong>Version</strong> - The SAML version (typically "2.0")
          </li>
          <li>
            <strong>IssueInstant</strong> - The time the response was issued
          </li>
          <li>
            <strong>Destination</strong> - The intended recipient of the response (the service provider)
          </li>
          <li>
            <strong>InResponseTo</strong> - The ID of the request that this response is for
          </li>
          <li>
            <strong>Issuer</strong> - The entity that issued the response (the identity provider)
          </li>
          <li>
            <strong>Signature</strong> - An optional XML Digital Signature
          </li>
          <li>
            <strong>Status</strong> - The status of the request processing, including a StatusCode
          </li>
          <li>
            <strong>Assertion</strong> - One or more SAML assertions
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          SAML Metadata Structure
        </h2>
        <p>
          SAML metadata is an XML document that contains configuration information for SAML entities. It is used to
          establish trust between SAML entities and to configure them to communicate with each other.
        </p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<md:EntityDescriptor
    xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"
    entityID="https://idp.example.org/SAML2">
    <md:IDPSSODescriptor
        WantAuthnRequestsSigned="true"
        protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
        <md:KeyDescriptor use="signing">
            <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                <ds:X509Data>
                    <ds:X509Certificate>
                        <!-- Base64-encoded X.509 certificate -->
                    </ds:X509Certificate>
                </ds:X509Data>
            </ds:KeyInfo>
        </md:KeyDescriptor>
        <md:KeyDescriptor use="encryption">
            <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                <ds:X509Data>
                    <ds:X509Certificate>
                        <!-- Base64-encoded X.509 certificate -->
                    </ds:X509Certificate>
                </ds:X509Data>
            </ds:KeyInfo>
        </md:KeyDescriptor>
        <md:SingleLogoutService
            Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
            Location="https://idp.example.org/SAML2/SLO/Redirect"/>
        <md:SingleLogoutService
            Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
            Location="https://idp.example.org/SAML2/SLO/POST"/>
        <md:NameIDFormat>
            urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
        </md:NameIDFormat>
        <md:SingleSignOnService
            Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
            Location="https://idp.example.org/SAML2/SSO/Redirect"/>
        <md:SingleSignOnService
            Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
            Location="https://idp.example.org/SAML2/SSO/POST"/>
    </md:IDPSSODescriptor>
    <md:Organization>
        <md:OrganizationName xmlLang="en">Example Organization</md:OrganizationName>
        <md:OrganizationDisplayName xmlLang="en">Example</md:OrganizationDisplayName>
        <md:OrganizationURL xmlLang="en">https://www.example.org</md:OrganizationURL>
    </md:Organization>
    <md:ContactPerson contactType="technical">
        <md:GivenName>John</md:GivenName>
        <md:SurName>Doe</md:SurName>
        <md:EmailAddress>john.doe@example.org</md:EmailAddress>
    </md:ContactPerson>
</md:EntityDescriptor>`}
        </pre>

        <p className="mt-4">Key components of SAML metadata:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>EntityDescriptor</strong> - The root element, with an entityID attribute identifying the entity
          </li>
          <li>
            <strong>IDPSSODescriptor</strong> - Describes an identity provider's SSO capabilities
          </li>

          <li>
            <strong>SPSSODescriptor</strong> - Describes a service provider's SSO capabilities
          </li>
          <li>
            <strong>KeyDescriptor</strong> - Contains key information for signing and encryption
          </li>
          <li>
            <strong>SingleLogoutService</strong> - Describes a single logout service endpoint
          </li>
          <li>
            <strong>SingleSignOnService</strong> - Describes a single sign-on service endpoint
          </li>
          <li>
            <strong>AssertionConsumerService</strong> - Describes an assertion consumer service endpoint
          </li>
          <li>
            <strong>Organization</strong> - Contains information about the organization
          </li>
          <li>
            <strong>ContactPerson</strong> - Contains contact information
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/technical/bindings">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: SAML Bindings
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/technical/saml-flows">
            Next: SAML Flows <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

