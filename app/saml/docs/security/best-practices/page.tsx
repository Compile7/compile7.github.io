import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShieldCheck, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "SAML Security Best Practices",
  description: "Best practices for securing SAML implementations",
}

export default function BestPracticesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Security Best Practices</h1>
        <p className="text-lg text-muted-foreground mt-2">Best practices for securing SAML implementations</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Introduction</h2>
        <p>
          SAML is designed to provide secure authentication and authorization, but its security depends on proper
          implementation. Following security best practices is essential to protect against various attacks and
          vulnerabilities.
        </p>

        <Alert className="my-6" variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Security Warning</AlertTitle>
          <AlertDescription>
            Improper SAML implementation can lead to serious security vulnerabilities, potentially allowing attackers to
            bypass authentication, impersonate users, or access sensitive information. Always follow security best
            practices and keep your SAML libraries up to date.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Transport Layer Security
        </h2>
        <p>Securing the transport layer is the foundation of SAML security:</p>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Use HTTPS for All SAML Endpoints</CardTitle>
              <CardDescription>Protect data in transit</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All SAML endpoints (ACS, SLO, metadata, etc.) should be accessible only over HTTPS with properly
                configured TLS. This prevents eavesdropping and man-in-the-middle attacks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Configure TLS Properly</CardTitle>
              <CardDescription>Ensure strong encryption</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use modern TLS versions (TLS 1.2 or later) and strong cipher suites. Disable outdated and insecure
                protocols like SSL 3.0 and TLS 1.0/1.1. Regularly test your TLS configuration using tools like SSL Labs.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">Message Security</h2>
        <p>
          Securing SAML messages is critical for maintaining the integrity and confidentiality of authentication data:
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Sign SAML Messages</CardTitle>
              <CardDescription>Ensure message integrity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Both SAML requests and responses should be digitally signed to ensure their integrity and authenticity.
                This prevents tampering with SAML messages during transmission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Encrypt Assertions</CardTitle>
              <CardDescription>Protect sensitive information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Consider encrypting SAML assertions, especially if they contain sensitive user attributes. This prevents
                unauthorized parties from viewing the assertion contents, even if they intercept the SAML message.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Validate Signatures</CardTitle>
              <CardDescription>Verify message authenticity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Always validate signatures on SAML messages before processing them. Verify that the signature was
                created using a trusted certificate and that the signature covers the entire message.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Use Strong Algorithms</CardTitle>
              <CardDescription>Ensure cryptographic strength</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use strong cryptographic algorithms for signing and encryption. Prefer SHA-256 or stronger for
                signatures and AES-256 for encryption. Avoid deprecated algorithms like SHA-1 and RSA with key sizes
                less than 2048 bits.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Certificate Management
        </h2>
        <p>Proper certificate management is essential for SAML security:</p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Use Strong Keys:</strong> Use RSA keys with at least 2048 bits or equivalent ECC keys
          </li>
          <li>
            <strong>Protect Private Keys:</strong> Store private keys securely and restrict access to them
          </li>
          <li>
            <strong>Certificate Rotation:</strong> Implement a process for regular certificate rotation
          </li>
          <li>
            <strong>Certificate Validation:</strong> Validate certificates used for signature verification
          </li>
          <li>
            <strong>Revocation Checking:</strong> Consider implementing certificate revocation checking
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Validation and Processing
        </h2>
        <p>Proper validation of SAML messages is critical for security:</p>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Validate Timestamps</CardTitle>
              <CardDescription>Prevent replay attacks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Validate the NotBefore and NotOnOrAfter conditions in SAML assertions to ensure they are within the
                valid time window. This helps prevent replay attacks where an attacker reuses a captured SAML assertion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Check Audience Restriction</CardTitle>
              <CardDescription>Ensure assertions are intended for you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Verify that the Audience element in the SAML assertion matches your Service Provider's entity ID. This
                ensures that the assertion was intended for your application and not for another service provider.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Validate Response Destination</CardTitle>
              <CardDescription>Prevent misdirected responses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Verify that the Destination attribute in the SAML response matches your ACS URL. This helps prevent
                attacks where a response intended for another service provider is sent to your application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Implement Assertion ID Tracking</CardTitle>
              <CardDescription>Prevent assertion reuse</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Keep track of processed assertion IDs and reject assertions with IDs that have been seen before. This
                provides additional protection against replay attacks.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">XML Security</h3>
        <p>SAML messages are XML documents, so XML security is important:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>XML Validation:</strong> Validate XML structure and content against schemas
          </li>
          <li>
            <strong>XML Canonicalization:</strong> Use proper XML canonicalization for signature verification
          </li>
          <li>
            <strong>XML Entity Expansion:</strong> Protect against XML entity expansion attacks
          </li>
          <li>
            <strong>XPath Injection:</strong> Be cautious when using XPath with user-controlled input
          </li>
          <li>
            <strong>XML External Entities (XXE):</strong> Disable external entity processing
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">Session Management</h2>
        <p>After successful SAML authentication, proper session management is important:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Secure Session Cookies:</strong> Use secure, HTTP-only cookies with appropriate SameSite settings
          </li>
          <li>
            <strong>Session Timeout:</strong> Implement appropriate session timeouts
          </li>
          <li>
            <strong>Session Invalidation:</strong> Properly invalidate sessions on logout
          </li>
          <li>
            <strong>Session Binding:</strong> Bind sessions to client characteristics (e.g., IP address, user agent)
          </li>
          <li>
            <strong>CSRF Protection:</strong> Implement CSRF protection for authenticated sessions
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Implementation Considerations
        </h2>
        <p>Additional security considerations for SAML implementations:</p>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Use Established Libraries</CardTitle>
              <CardDescription>Avoid reinventing the wheel</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use established, well-maintained SAML libraries rather than implementing SAML from scratch. These
                libraries have been tested and hardened against various security issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Keep Libraries Updated</CardTitle>
              <CardDescription>Stay protected against known vulnerabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Regularly update your SAML libraries to ensure you have the latest security patches. Subscribe to
                security advisories for the libraries you use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Implement Proper Error Handling</CardTitle>
              <CardDescription>Avoid information leakage</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Implement proper error handling that doesn't expose sensitive information. Log detailed errors for
                debugging but show generic error messages to users.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Security Testing</CardTitle>
              <CardDescription>Verify your implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Conduct security testing of your SAML implementation, including penetration testing and code reviews.
                Consider using SAML-specific testing tools.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Monitoring and Incident Response
        </h2>
        <p>Monitoring and incident response are important aspects of SAML security:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Logging:</strong> Implement comprehensive logging of SAML transactions
          </li>
          <li>
            <strong>Monitoring:</strong> Monitor for unusual authentication patterns or errors
          </li>
          <li>
            <strong>Alerting:</strong> Set up alerts for potential security issues
          </li>
          <li>
            <strong>Incident Response Plan:</strong> Have a plan for responding to security incidents
          </li>
          <li>
            <strong>Regular Reviews:</strong> Regularly review logs and security configurations
          </li>
        </ul>

        <Alert className="my-6">
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle>Security is a Process</AlertTitle>
          <AlertDescription>
            Remember that security is an ongoing process, not a one-time task. Regularly review and update your SAML
            security measures to address new threats and vulnerabilities.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/security/threat-model">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/saml/docs/security/threat-model">
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

