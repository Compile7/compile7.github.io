import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML Replay Attacks",
  description: "Understanding and preventing SAML replay attacks",
}

export default function ReplayAttacksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Replay Attacks</h1>
        <p className="text-lg text-muted-foreground mt-2">Understanding and preventing SAML replay attacks</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What is a Replay Attack?</h2>
        <p>
          A replay attack is when sensitive information is stolen or intercepted by attackers who then attempt to use it
          again (thus replay) in an effort to compromise a system. In the context of SAML, this typically involves
          capturing a valid SAML assertion and resubmitting it to gain unauthorized access.
        </p>

        <Alert variant="destructive" className="my-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Security Risk</AlertTitle>
          <AlertDescription>
            Replay attacks can allow attackers to impersonate legitimate users and gain unauthorized access to protected
            resources.
          </AlertDescription>
        </Alert>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">How Replay Attacks Work in SAML</h3>

        <div className="my-6 rounded-lg border bg-card p-4">
          <ol className="ml-6 list-decimal [&>li]:mt-2">
            <li>An attacker intercepts a valid SAML assertion during transmission</li>
            <li>The attacker captures the assertion before it reaches its intended destination</li>
            <li>The attacker attempts to reuse (replay) the assertion to gain unauthorized access</li>
            <li>If successful, the attacker gains access with the privileges of the legitimate user</li>
          </ol>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Preventing Replay Attacks</h3>
        <p>Commonly replay attacks can be mitigated with the proper use of nonces and other security measures:</p>

        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">1. Use of Nonces</h4>
        <p>
          A nonce (number used once) is a random or pseudo-random number that is generated for a specific use. In SAML,
          nonces can be included in requests and must be reflected in the corresponding responses, ensuring that each
          assertion can only be used once.
        </p>

        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">2. Timestamps and Validity Periods</h4>
        <p>
          SAML assertions include <code>NotBefore</code> and <code>NotOnOrAfter</code> conditions that specify the time
          period during which the assertion is valid. Service providers should strictly enforce these time constraints
          and reject assertions outside the valid time window.
        </p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<saml:Conditions
  NotBefore="2023-04-01T12:00:00Z"
  NotOnOrAfter="2023-04-01T12:10:00Z">
  <saml:AudienceRestriction>
    <saml:Audience>https://sp.example.com/SAML2</saml:Audience>
  </saml:AudienceRestriction>
</saml:Conditions>`}
        </pre>

        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">3. Assertion ID Tracking</h4>
        <p>
          Service providers should maintain a record of processed assertion IDs and reject any assertion with an ID that
          has been seen before.
        </p>

        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">4. Secure Communication Channels</h4>
        <p>
          All SAML communications should occur over secure channels (HTTPS) to prevent interception in the first place.
        </p>

        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4">5. InResponseTo Validation</h4>
        <p>
          Service providers should validate that the <code>InResponseTo</code> attribute in the SAML response matches
          the ID of a request that they recently sent.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Implementation Example</h3>
        <p>Here's a pseudocode example of how to implement replay attack prevention in a service provider:</p>

        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`// Store processed assertion IDs with expiration times
const processedAssertionIds = new Map();

function validateSamlAssertion(assertion) {
  // Check if assertion ID has been seen before
  if (processedAssertionIds.has(assertion.id)) {
    throw new Error("Potential replay attack: Assertion ID already processed");
  }
  
  // Validate timestamps
  const now = new Date();
  const notBefore = new Date(assertion.conditions.notBefore);
  const notOnOrAfter = new Date(assertion.conditions.notOnOrAfter);
  
  if (now < notBefore || now >= notOnOrAfter) {
    throw new Error("Assertion time validity check failed");
  }
  
  // Validate InResponseTo matches a request we sent
  if (!validateRequestId(assertion.inResponseTo)) {
    throw new Error("InResponseTo validation failed");
  }
  
  // Store the assertion ID to prevent replay
  processedAssertionIds.set(assertion.id, {
    expiresAt: notOnOrAfter
  });
  
  // Periodically clean up expired assertion IDs
  cleanupExpiredAssertionIds();
  
  // Continue with other validation...
  return true;
}`}
        </pre>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/security/vulnerabilities">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Common Vulnerabilities
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/examples/requests">
            Next: SAML Request Examples <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

