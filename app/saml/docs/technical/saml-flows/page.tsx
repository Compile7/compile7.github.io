import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML Flows",
  description: "Understanding SP-initiated and IdP-initiated SAML flows",
}

export default function SamlFlowsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">SAML Flows</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Understanding SP-initiated and IdP-initiated authentication flows
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Introduction to SAML Flows</h2>
        <p>
          SAML authentication flows define the sequence of interactions between a user, a Service Provider (SP), and an
          Identity Provider (IdP) during the authentication process. There are two primary SAML flows:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>SP-initiated flow</strong> - The authentication process begins at the Service Provider
          </li>
          <li>
            <strong>IdP-initiated flow</strong> - The authentication process begins at the Identity Provider
          </li>
        </ul>
        <p>
          Understanding these flows is crucial for implementing SAML correctly and choosing the right approach for your
          specific use case.
        </p>

        <Tabs defaultValue="sp-initiated" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sp-initiated">SP-Initiated Flow</TabsTrigger>
            <TabsTrigger value="idp-initiated">IdP-Initiated Flow</TabsTrigger>
          </TabsList>

          <TabsContent value="sp-initiated" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">SP-Initiated Flow</h3>
            <p>
              In an SP-initiated flow, the user starts at the Service Provider and is redirected to the Identity
              Provider for authentication. This is the most common SAML flow and is widely supported by SAML
              implementations.
            </p>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Flow Sequence</h4>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>
                <strong>Access Request:</strong> The user attempts to access a protected resource at the Service
                Provider
              </li>
              <li>
                <strong>Authentication Check:</strong> The SP checks if the user is already authenticated
              </li>
              <li>
                <strong>SAML Request Generation:</strong> If the user is not authenticated, the SP generates a SAML
                authentication request
              </li>
              <li>
                <strong>Redirect to IdP:</strong> The SP redirects the user's browser to the IdP's SSO endpoint with the
                SAML request
              </li>
              <li>
                <strong>Authentication at IdP:</strong> The IdP authenticates the user (if not already authenticated)
              </li>
              <li>
                <strong>SAML Response Generation:</strong> The IdP generates a SAML response containing an assertion
                about the user's identity
              </li>
              <li>
                <strong>Redirect to SP:</strong> The IdP redirects the user's browser back to the SP's Assertion
                Consumer Service (ACS) with the SAML response
              </li>
              <li>
                <strong>Response Processing:</strong> The SP validates the SAML response and extracts the user's
                identity information
              </li>
              <li>
                <strong>Session Establishment:</strong> The SP establishes a local session for the user
              </li>
              <li>
                <strong>Access Granted:</strong> The SP grants access to the requested resource
              </li>
            </ol>

            <div className="my-6 rounded-lg border bg-card p-4">
              <h5 className="font-medium mb-2">SP-Initiated Flow Diagram</h5>
              <pre className="text-xs overflow-auto">
                {`User                      Service Provider                 Identity Provider
  |                               |                               |
  | 1. Access resource            |                               |
  |------------------------------>|                               |
  |                               |                               |
  |                               | 2. Check authentication       |
  |                               |------------------------       |
  |                               |                      |        |
  |                               |<-----------------------       |
  |                               |                               |
  |                               | 3. Generate SAML request      |
  |                               |------------------------       |
  |                               |                      |        |
  |                               |<-----------------------       |
  |                               |                               |
  | 4. Redirect with SAML request |                               |
  |<------------------------------|                               |
  |                               |                               |
  | 5. Forward SAML request       |                               |
  |-------------------------------------------------------------->|
  |                               |                               |
  |                               |                               | 6. Authenticate user
  |                               |                               |----------------
  |                               |                               |              |
  |                               |                               |<---------------
  |                               |                               |
  |                               |                               | 7. Generate SAML response
  |                               |                               |----------------
  |                               |                               |              |
  |                               |                               |<---------------
  |                               |                               |
  | 8. Redirect with SAML response|                               |
  |<--------------------------------------------------------------|
  |                               |                               |
  | 9. Forward SAML response      |                               |
  |------------------------------>|                               |
  |                               |                               |
  |                               | 10. Validate SAML response    |
  |                               |------------------------       |
  |                               |                      |        |
  |                               |<-----------------------       |
  |                               |                               |
  |                               | 11. Establish session         |
  |                               |------------------------       |
  |                               |                      |        |
  |                               |<-----------------------       |
  |                               |                               |
  | 12. Access granted            |                               |
  |<------------------------------|                               |
  |                               |                               |`}
              </pre>
            </div>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Bindings Used</h4>
            <p>SP-initiated flows typically use the following SAML bindings:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>HTTP-Redirect Binding:</strong> For sending the SAML authentication request from the SP to the
                IdP
              </li>
              <li>
                <strong>HTTP-POST Binding:</strong> For sending the SAML response from the IdP to the SP
              </li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Advantages</h4>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Widely supported:</strong> SP-initiated flow is supported by virtually all SAML implementations
              </li>
              <li>
                <strong>Better security:</strong> The SAML request contains parameters that the IdP can validate
              </li>
              <li>
                <strong>Deep linking:</strong> Users can bookmark specific resources at the SP
              </li>
              <li>
                <strong>RelayState:</strong> The SP can include a RelayState parameter to return the user to the
                specific resource they requested
              </li>
              <li>
                <strong>Request signing:</strong> The SP can sign the SAML request for additional security
              </li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Limitations</h4>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>More complex:</strong> Requires more configuration and implementation steps
              </li>
              <li>
                <strong>Multiple redirects:</strong> The user experiences more redirects during the authentication
                process
              </li>
              <li>
                <strong>Browser limitations:</strong> URL length limitations can affect the size of SAML requests when
                using HTTP-Redirect binding
              </li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Use Cases</h4>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Enterprise applications:</strong> Where users directly access the application and need to be
                authenticated
              </li>
              <li>
                <strong>Resource-specific access:</strong> When users need to access specific resources within an
                application
              </li>
              <li>
                <strong>Bookmarked resources:</strong> When users bookmark specific pages or resources within an
                application
              </li>
              <li>
                <strong>Multi-tenant applications:</strong> Where the application needs to know which IdP to use for
                authentication
              </li>
            </ul>
          </TabsContent>

          <TabsContent value="idp-initiated" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">IdP-Initiated Flow</h3>
            <p>
              In an IdP-initiated flow, the user starts at the Identity Provider and selects a Service Provider to
              access. The IdP then sends a SAML response to the SP without first receiving a SAML request.
            </p>

            <Alert variant="destructive" className="my-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Security Consideration</AlertTitle>
              <AlertDescription>
                IdP-initiated flows are generally considered less secure than SP-initiated flows because they lack the
                request-response pattern that helps prevent certain types of attacks, such as replay attacks. Use
                IdP-initiated flows only when necessary and implement additional security measures.
              </AlertDescription>
            </Alert>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Flow Sequence</h4>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>
                <strong>User Authentication:</strong> The user authenticates at the Identity Provider
              </li>
              <li>
                <strong>SP Selection:</strong> The user selects a Service Provider to access from a list of available
                SPs
              </li>
              <li>
                <strong>SAML Response Generation:</strong> The IdP generates a SAML response containing an assertion
                about the user's identity
              </li>
              <li>
                <strong>POST to SP:</strong> The IdP sends the SAML response to the SP's Assertion Consumer Service
                (ACS) via the user's browser
              </li>
              <li>
                <strong>Response Processing:</strong> The SP validates the SAML response and extracts the user's
                identity information
              </li>
              <li>
                <strong>Session Establishment:</strong> The SP establishes a local session for the user
              </li>
              <li>
                <strong>Access Granted:</strong> The SP grants access to the default resource or landing page
              </li>
            </ol>

            <div className="my-6 rounded-lg border bg-card p-4">
              <h5 className="font-medium mb-2">IdP-Initiated Flow Diagram</h5>
              <pre className="text-xs overflow-auto">
                {`User                      Identity Provider                Service Provider
  |                               |                               |
  | 1. Access IdP                 |                               |
  |------------------------------>|                               |
  |                               |                               |
  |                               | 2. Authenticate user          |
  |                               |------------------------       |
  |                               |                      |        |
  |                               |<-----------------------       |
  |                               |                               |
  | 3. Select SP                  |                               |
  |------------------------------>|                               |
  |                               |                               |
  |                               | 4. Generate SAML response     |
  |                               |------------------------       |
  |                               |                      |        |
  |                               |<-----------------------       |
  |                               |                               |
  | 5. POST SAML response         |                               |
  |<------------------------------|                               |
  |                               |                               |
  | 6. Forward SAML response      |                               |
  |-------------------------------------------------------------->|
  |                               |                               |
  |                               |                               | 7. Validate SAML response
  |                               |                               |----------------
  |                               |                               |              |
  |                               |                               |<---------------
  |                               |                               |
  |                               |                               | 8. Establish session
  |                               |                               |----------------
  |                               |                               |              |
  |                               |                               |<---------------
  |                               |                               |
  | 9. Access granted             |                               |
  |<--------------------------------------------------------------|
  |                               |                               |`}
              </pre>
            </div>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Bindings Used</h4>
            <p>IdP-initiated flows typically use the following SAML binding:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>HTTP-POST Binding:</strong> For sending the SAML response from the IdP to the SP
              </li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Advantages</h4>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Simpler implementation:</strong> Fewer steps and less configuration required
              </li>
              <li>
                <strong>Fewer redirects:</strong> The user experiences fewer redirects during the authentication process
              </li>
              <li>
                <strong>Portal integration:</strong> Easy to integrate with IdP portals or dashboards
              </li>
              <li>
                <strong>No SP discovery needed:</strong> The IdP already knows which SP the user wants to access
              </li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Limitations</h4>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Less secure:</strong> No SAML request to validate, making it more vulnerable to replay attacks
              </li>
              <li>
                <strong>Limited deep linking:</strong> Users typically land on a default page rather than a specific
                resource
              </li>
              <li>
                <strong>Not universally supported:</strong> Some SAML implementations do not support IdP-initiated flows
              </li>
              <li>
                <strong>RelayState limitations:</strong> The IdP must know in advance what RelayState to include
              </li>
            </ul>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-6">Use Cases</h4>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>IdP portals or dashboards:</strong> Where users select applications from a central portal
              </li>
              <li>
                <strong>Simple applications:</strong> Where deep linking is not required
              </li>
              <li>
                <strong>Legacy systems:</strong> That cannot be modified to support SP-initiated flows
              </li>
              <li>
                <strong>Controlled environments:</strong> Where the security limitations are acceptable
              </li>
            </ul>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Comparing SP-Initiated and IdP-Initiated Flows
        </h2>
        <p>Here's a comparison of the key differences between SP-initiated and IdP-initiated SAML flows:</p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Feature</th>
                <th className="px-4 py-2 text-left">SP-Initiated Flow</th>
                <th className="px-4 py-2 text-left">IdP-Initiated Flow</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Starting Point</td>
                <td className="px-4 py-2">Service Provider</td>
                <td className="px-4 py-2">Identity Provider</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">SAML Request</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Deep Linking</td>
                <td className="px-4 py-2">Supported</td>
                <td className="px-4 py-2">Limited</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Security</td>
                <td className="px-4 py-2">Higher</td>
                <td className="px-4 py-2">Lower</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Implementation Complexity</td>
                <td className="px-4 py-2">Higher</td>
                <td className="px-4 py-2">Lower</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">User Experience</td>
                <td className="px-4 py-2">More redirects</td>
                <td className="px-4 py-2">Fewer redirects</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Support in SAML Implementations</td>
                <td className="px-4 py-2">Universal</td>
                <td className="px-4 py-2">Common but not universal</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Replay Attack Protection</td>
                <td className="px-4 py-2">Better (InResponseTo attribute)</td>
                <td className="px-4 py-2">Limited</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Bookmarking</td>
                <td className="px-4 py-2">Specific resources can be bookmarked</td>
                <td className="px-4 py-2">Typically only the IdP portal can be bookmarked</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Choosing the Right Flow
        </h2>
        <p>When deciding which SAML flow to implement, consider the following factors:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Security Requirements</h3>
        <p>
          If security is a top priority, SP-initiated flows provide better protection against replay attacks and other
          security threats. The request-response pattern allows for better validation and tracking of the authentication
          process.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">User Experience</h3>
        <p>Consider how users will access your application:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            If users will primarily access your application directly (e.g., by typing the URL or clicking a bookmark),
            SP-initiated flow is more appropriate.
          </li>
          <li>
            If users will primarily access your application from an IdP portal or dashboard, IdP-initiated flow may
            provide a smoother experience.
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Deep Linking Requirements</h3>
        <p>
          If your application requires deep linking (allowing users to bookmark or directly access specific resources
          within your application), SP-initiated flow is generally better suited.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Implementation Complexity</h3>
        <p>
          IdP-initiated flows are simpler to implement, requiring fewer steps and less configuration. If you have
          limited resources or need to implement SAML quickly, IdP-initiated flow might be easier.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            When possible, implement support for both SP-initiated and IdP-initiated flows to provide maximum
            flexibility. This allows you to accommodate different use cases and integration scenarios while giving users
            multiple ways to access your application.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Implementation Considerations
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">SP-Initiated Flow Implementation</h3>
        <p>When implementing SP-initiated flow, consider the following:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>SAML Request Generation:</strong> Your SP needs to generate valid SAML authentication requests
          </li>
          <li>
            <strong>Request Signing:</strong> Consider signing SAML requests for additional security
          </li>
          <li>
            <strong>RelayState:</strong> Use RelayState to return users to the specific resource they requested
          </li>
          <li>
            <strong>IdP Discovery:</strong> If your application supports multiple IdPs, implement a mechanism for IdP
            discovery
          </li>
          <li>
            <strong>Error Handling:</strong> Implement proper error handling for failed authentication attempts
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">IdP-Initiated Flow Implementation</h3>
        <p>When implementing IdP-initiated flow, consider the following:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Response Validation:</strong> Implement thorough validation of SAML responses
          </li>
          <li>
            <strong>Replay Attack Prevention:</strong> Implement additional measures to prevent replay attacks, such as
            tracking assertion IDs and implementing short assertion validity periods
          </li>
          <li>
            <strong>Default Landing Page:</strong> Design a user-friendly default landing page for users arriving via
            IdP-initiated flow
          </li>
          <li>
            <strong>RelayState Handling:</strong> If the IdP includes a RelayState parameter, honor it to direct users
            to specific resources
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Testing SAML Flows</h3>
        <p>Thoroughly test your SAML implementation with both flows:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Test with real IdPs:</strong> Test with the actual IdPs your application will integrate with
          </li>
          <li>
            <strong>Test error scenarios:</strong> Test how your application handles various error conditions
          </li>
          <li>
            <strong>Test with different browsers:</strong> Ensure your implementation works across different browsers
            and devices
          </li>
          <li>
            <strong>Test security measures:</strong> Verify that your security measures are effective
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/technical/xml-structure">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: XML Structure
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/implementation/getting-started">
            Next: Implementation - Getting Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

