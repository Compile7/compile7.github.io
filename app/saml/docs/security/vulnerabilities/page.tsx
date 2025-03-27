import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "SAML Common Vulnerabilities",
  description: "Understanding common security vulnerabilities in SAML implementations",
}

export default function VulnerabilitiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Common Vulnerabilities</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Understanding common security vulnerabilities in SAML implementations
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Introduction</h2>
        <p>
          While SAML is designed to be secure, implementation flaws can introduce vulnerabilities. Understanding these
          common vulnerabilities is essential for securing your SAML implementation.
        </p>

        <Alert variant="destructive" className="my-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Security Warning</AlertTitle>
          <AlertDescription>
            SAML vulnerabilities can lead to serious security breaches, including authentication bypass, identity
            spoofing, and unauthorized access to protected resources. Always follow security best practices and keep
            your SAML libraries up to date.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="signature" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="signature">Signature Vulnerabilities</TabsTrigger>
            <TabsTrigger value="xml">XML Vulnerabilities</TabsTrigger>
            <TabsTrigger value="implementation">Implementation Flaws</TabsTrigger>
            <TabsTrigger value="protocol">Protocol Weaknesses</TabsTrigger>
          </TabsList>

          <TabsContent value="signature" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Signature Vulnerabilities</h3>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">Signature Verification Bypass</h4>
            <p>
              One of the most critical vulnerabilities in SAML implementations is the failure to properly verify
              signatures on SAML messages.
            </p>
            <p className="mt-2">Common issues include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Not verifying signatures at all</li>
              <li>Improper validation of the signature&apos;s scope (what parts of the message are signed)</li>
              <li>Accepting unsigned messages when signatures are required</li>
              <li>Using weak signature algorithms (e.g., SHA-1)</li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">XML Signature Wrapping (XSW)</h4>
            <p>
              XML Signature Wrapping attacks exploit the fact that the signature verification process and the actual
              processing of the assertion may focus on different parts of the XML document.
            </p>
            <p className="mt-2">In an XSW attack, an attacker:</p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>Obtains a valid SAML assertion (e.g., by logging in legitimately)</li>
              <li>
                Modifies the assertion to change the subject or attributes while preserving the original signature
              </li>
              <li>Restructures the XML document so that the signature verification succeeds on the original data</li>
              <li>But the application processes the modified data</li>
            </ol>

            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`<!-- Original signed assertion -->
<samlp:Response>
  <saml:Assertion ID="original">
    <saml:Subject>
      <saml:NameID>user@example.com</saml:NameID>
    </saml:Subject>
    <ds:Signature>...</ds:Signature>
  </saml:Assertion>
</samlp:Response>

<!-- Modified with XSW attack -->
<samlp:Response>
  <saml:Assertion ID="modified">
    <saml:Subject>
      <saml:NameID>admin@example.com</saml:NameID>
    </saml:Subject>
  </saml:Assertion>
  <saml:Assertion ID="original">
    <saml:Subject>
      <saml:NameID>user@example.com</saml:NameID>
    </saml:Subject>
    <ds:Signature>...</ds:Signature>
  </saml:Assertion>
</samlp:Response>`}
            </pre>

            <p className="mt-4">
              In this example, if the application verifies the signature on the assertion with ID=&quot;original&quot;
              but processes the assertion with ID=&quot;modified&quot;, the attacker can impersonate an administrator.
            </p>
          </TabsContent>

          <TabsContent value="xml" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">XML Vulnerabilities</h3>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">XML External Entity (XXE) Attacks</h4>
            <p>
              XXE attacks exploit XML parsers that process external entity references within XML documents. If a SAML
              implementation uses a vulnerable XML parser, an attacker can include malicious external entities in a SAML
              message.
            </p>
            <p className="mt-2">This can lead to:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Server-side file disclosure</li>
              <li>Server-side request forgery (SSRF)</li>
              <li>Denial of service</li>
              <li>Remote code execution in extreme cases</li>
            </ul>

            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`<!-- Example of a malicious SAML request with XXE -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<samlp:AuthnRequest xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
  <saml:Issuer>&xxe;</saml:Issuer>
  <!-- Rest of the request -->
</samlp:AuthnRequest>`}
            </pre>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">
              XML Entity Expansion (Billion Laughs)
            </h4>
            <p>
              This attack involves creating a deeply nested structure of XML entities that expands exponentially when
              parsed, potentially causing a denial of service.
            </p>

            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`<!-- Example of a Billion Laughs attack -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol1 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol2 "&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
  <!ENTITY lol4 "&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;">
]>
<samlp:AuthnRequest xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
  <saml:Issuer>&lol4;</saml:Issuer>
  <!-- Rest of the request -->
</samlp:AuthnRequest>`}
            </pre>
          </TabsContent>

          <TabsContent value="implementation" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Implementation Flaws</h3>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">
              Improper Validation of SAML Attributes
            </h4>
            <p>
              Many SAML implementations fail to properly validate the attributes in SAML assertions, which can lead to
              security issues.
            </p>
            <p className="mt-2">Common validation issues include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Not validating the format of attributes (e.g., email addresses, roles)</li>
              <li>Not checking for malicious content in attributes</li>
              <li>Improper handling of unexpected or duplicate attributes</li>
              <li>SQL injection or XSS vulnerabilities when processing attributes</li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">
              Insecure Handling of SAML Responses
            </h4>
            <p>
              Some implementations have flaws in how they process SAML responses, which can lead to security
              vulnerabilities.
            </p>
            <p className="mt-2">Examples include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Not checking the Destination attribute to ensure the response was intended for the SP</li>
              <li>Not validating the InResponseTo attribute to prevent replay attacks</li>
              <li>Not checking the Audience restriction to ensure the assertion was intended for the SP</li>
              <li>Not validating the NotBefore and NotOnOrAfter conditions</li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">Insecure Default Configurations</h4>
            <p>
              Many SAML libraries and products have insecure default configurations that can lead to vulnerabilities if
              not properly configured.
            </p>
            <p className="mt-2">Examples include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Not requiring signatures on SAML messages by default</li>
              <li>Using weak signature algorithms by default</li>
              <li>Not enabling proper XML security features by default</li>
              <li>Not enforcing TLS for SAML endpoints by default</li>
            </ul>
          </TabsContent>

          <TabsContent value="protocol" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Protocol Weaknesses</h3>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">Replay Attacks</h4>
            <p>
              SAML assertions can be captured and replayed if proper protections are not in place. This allows an
              attacker to reuse a valid assertion to gain unauthorized access.
            </p>
            <p className="mt-2">Protections against replay attacks include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Enforcing the NotOnOrAfter condition with a short validity period</li>
              <li>Tracking and rejecting previously processed assertion IDs</li>
              <li>Using the InResponseTo attribute to bind responses to specific requests</li>
              <li>Using TLS to prevent interception of assertions</li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">Man-in-the-Middle Attacks</h4>
            <p>
              If SAML messages are transmitted over insecure channels, they can be intercepted and modified by an
              attacker.
            </p>
            <p className="mt-2">Protections against MitM attacks include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Using TLS for all SAML endpoints</li>
              <li>Signing SAML messages to prevent tampering</li>
              <li>Encrypting SAML assertions to protect sensitive information</li>
              <li>Validating certificates used for TLS and XML signatures</li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">Session Fixation</h4>
            <p>
              In some implementations, an attacker can establish a session with a service provider and then trick a
              victim into authenticating to that session.
            </p>
            <p className="mt-2">Protections against session fixation include:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Regenerating session IDs after authentication</li>
              <li>Binding sessions to client characteristics (e.g., IP address, user agent)</li>
              <li>Using secure, HTTP-only cookies with appropriate SameSite settings</li>
              <li>Implementing proper session management</li>
            </ul>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Real-World SAML Vulnerabilities
        </h2>
        <p>Several significant SAML vulnerabilities have been discovered in real-world implementations:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">SAML Signature Wrapping (2012-2021)</h3>
        <p>
          Multiple variants of XML Signature Wrapping attacks have been discovered in various SAML implementations over
          the years. These vulnerabilities allowed attackers to bypass signature verification and forge SAML assertions.
        </p>
        <p className="mt-2">
          Affected implementations included major identity providers and service providers, as well as popular SAML
          libraries.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
          SAML Authentication Bypass (CVE-2017-11427)
        </h3>
        <p>
          A vulnerability in a popular SAML library allowed attackers to bypass authentication by manipulating the
          NameID element in SAML responses. The library failed to properly validate the format of the NameID, allowing
          attackers to inject malicious content.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">SAML Response Injection (2018)</h3>
        <p>
          A vulnerability in several SAML implementations allowed attackers to inject malicious content into SAML
          responses by exploiting improper handling of XML comments and CDATA sections.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Mitigating SAML Vulnerabilities
        </h2>
        <p>To mitigate SAML vulnerabilities, follow these best practices:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Use established SAML libraries</strong> - Don&apos;t implement SAML from scratch; use
            well-maintained libraries with good security track records
          </li>
          <li>
            <strong>Keep libraries updated</strong> - Regularly update your SAML libraries to get the latest security
            patches
          </li>
          <li>
            <strong>Implement proper signature validation</strong> - Ensure signatures are required and properly
            validated
          </li>
          <li>
            <strong>Use secure XML parsing</strong> - Configure XML parsers to disable external entities and limit
            entity expansion
          </li>
          <li>
            <strong>Validate all SAML attributes</strong> - Implement proper validation of all attributes in SAML
            assertions
          </li>
          <li>
            <strong>Use TLS for all SAML endpoints</strong> - Ensure all SAML communication occurs over secure channels
          </li>
          <li>
            <strong>Implement proper session management</strong> - Use secure session handling practices after
            authentication
          </li>
          <li>
            <strong>Conduct security testing</strong> - Regularly test your SAML implementation for vulnerabilities
          </li>
        </ul>

        <Alert className="my-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Stay Informed</AlertTitle>
          <AlertDescription>
            Stay informed about new SAML vulnerabilities by subscribing to security advisories and following updates
            from your SAML library maintainers. Promptly apply security patches when they become available.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/security/best-practices">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Security Best Practices
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/security/replay-attacks">
            Next: Replay Attacks <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

