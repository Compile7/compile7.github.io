import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML Single Sign-On",
  description: "Understanding SAML-based Single Sign-On (SSO) implementation",
}

export default function SingleSignOnPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Single Sign-On (SSO)</h1>
        <p className="text-lg text-muted-foreground mt-2">Understanding SAML-based Single Sign-On implementation</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What is Single Sign-On?</h2>
        <p>
          Single Sign-On (SSO) is an authentication process that allows a user to access multiple applications with one
          set of login credentials. With SSO, a user logs in once and gains access to all systems without being prompted
          to log in again at each of them.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Key Benefit</AlertTitle>
          <AlertDescription>
            SSO improves user experience by reducing password fatigue, while enhancing security by reducing the attack
            surface and enabling centralized authentication policies.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">How SAML Enables SSO</h2>
        <p>
          SAML is one of the primary protocols used to implement SSO. It enables SSO by providing a standardized way for
          identity providers to pass authentication and authorization data to service providers.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">The SAML SSO Process</h3>
        <p>The SAML SSO process typically follows these steps:</p>

        <div className="my-6 rounded-lg border bg-card p-4">
          <ol className="ml-6 list-decimal [&>li]:mt-2">
            <li>
              <strong>Initial Request:</strong> A user attempts to access a protected resource at a service provider.
            </li>
            <li>
              <strong>Redirection to IdP:</strong> The service provider generates a SAML authentication request and
              redirects the user's browser to the identity provider.
            </li>
            <li>
              <strong>Authentication:</strong> The identity provider authenticates the user (if they haven't already
              authenticated).
            </li>
            <li>
              <strong>SAML Response:</strong> The identity provider generates a SAML response containing an assertion
              about the user's identity and sends it back to the user's browser.
            </li>
            <li>
              <strong>Assertion Consumption:</strong> The user's browser forwards the SAML response to the service
              provider.
            </li>
            <li>
              <strong>Session Establishment:</strong> The service provider validates the SAML response, extracts the
              user's identity information, and establishes a local session for the user.
            </li>
            <li>
              <strong>Access Granted:</strong> The user is granted access to the requested resource.
            </li>
          </ol>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Session Management</h3>
        <p>Once a user is authenticated, both the identity provider and service provider establish sessions:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>IdP Session:</strong> The identity provider maintains a session for the user, typically using
            cookies. This session allows the IdP to remember that the user is authenticated, so they don't have to log
            in again when accessing other service providers.
          </li>
          <li>
            <strong>SP Session:</strong> Each service provider also maintains its own session for the user, independent
            of the IdP session. This allows the SP to remember the user's authentication state even if they navigate
            away from the application and return later.
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Single Logout</h3>
        <p>
          SAML also supports Single Logout (SLO), which allows a user to log out from all service providers with a
          single action. SLO can be initiated by either the identity provider or a service provider.
        </p>
        <p className="mt-2">The SLO process typically follows these steps:</p>
        <div className="my-6 rounded-lg border bg-card p-4">
          <ol className="ml-6 list-decimal [&>li]:mt-2">
            <li>
              <strong>Logout Request:</strong> The user initiates logout at either the IdP or an SP.
            </li>
            <li>
              <strong>SAML Logout Request:</strong> The initiating party generates a SAML logout request and sends it to
              all other parties involved in the user's session.
            </li>
            <li>
              <strong>Session Termination:</strong> Each party terminates the user's local session.
            </li>
            <li>
              <strong>SAML Logout Response:</strong> Each party sends a SAML logout response back to the initiating
              party.
            </li>
            <li>
              <strong>Completion:</strong> Once all parties have responded, the logout process is complete.
            </li>
          </ol>
        </div>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Implementation Note</AlertTitle>
          <AlertDescription>
            While SAML supports SLO, it can be complex to implement correctly, especially in environments with many
            service providers. Some organizations choose to implement simpler logout mechanisms, such as IdP-only logout
            or timeout-based session expiration.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          SAML SSO vs. Other SSO Methods
        </h2>
        <p>SAML is not the only protocol used for SSO. Other common methods include:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">OAuth 2.0 and OpenID Connect</h3>
        <p>
          OAuth 2.0 is an authorization framework that allows third-party applications to access resources on behalf of
          a user. OpenID Connect (OIDC) is an authentication layer built on top of OAuth 2.0 that provides user identity
          information.
        </p>
        <p className="mt-2">Compared to SAML:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>OIDC is generally simpler to implement and more modern</li>
          <li>OIDC uses JSON Web Tokens (JWT) instead of XML, making it more lightweight</li>
          <li>OIDC is better suited for mobile and single-page applications</li>
          <li>SAML has broader enterprise adoption and more mature tooling</li>
          <li>SAML provides more flexibility in the information that can be exchanged</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Kerberos</h3>
        <p>
          Kerberos is a network authentication protocol that uses tickets to allow nodes communicating over a non-secure
          network to prove their identity to one another securely.
        </p>
        <p className="mt-2">Compared to SAML:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Kerberos is primarily used in internal networks, while SAML is designed for web-based SSO</li>
          <li>Kerberos requires direct connectivity between all systems, while SAML works through browser redirects</li>
          <li>Kerberos is often used in Windows environments with Active Directory</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Best Practices for SAML SSO
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Use HTTPS:</strong> Always use HTTPS for all SAML endpoints to protect the confidentiality and
            integrity of SAML messages.
          </li>
          <li>
            <strong>Sign and Encrypt:</strong> Sign SAML assertions to ensure their integrity and encrypt them when they
            contain sensitive information.
          </li>
          <li>
            <strong>Implement Proper Session Management:</strong> Set appropriate session timeouts and implement idle
            session termination.
          </li>
          <li>
            <strong>Validate All Inputs:</strong> Thoroughly validate all SAML messages before processing them to
            prevent XML-based attacks.
          </li>
          <li>
            <strong>Use Strong Authentication:</strong> Consider implementing multi-factor authentication at the
            identity provider for an additional layer of security.
          </li>
          <li>
            <strong>Monitor and Log:</strong> Maintain comprehensive logs of SAML transactions for troubleshooting and
            security auditing.
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/fundamentals/benefits">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Benefits of SAML
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/technical/components">
            Next: SAML Components <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

