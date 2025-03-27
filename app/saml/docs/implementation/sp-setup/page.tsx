import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Provider Setup",
  description: "Setting up and configuring a SAML Service Provider",
}

export default function SpSetupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Service Provider Setup</h1>
        <p className="text-lg text-muted-foreground mt-2">Setting up and configuring a SAML Service Provider</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Service Provider Overview</h2>
        <p>
          A Service Provider (SP) in SAML is an application or system that relies on an Identity Provider (IdP) for
          authentication and user information. Setting up a Service Provider involves configuring it to communicate with
          the IdP and process SAML assertions.
        </p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Key Components</AlertTitle>
          <AlertDescription>
            A SAML Service Provider implementation typically includes:
            <ul className="mt-2 ml-6 list-disc [&>li]:mt-1">
              <li>Assertion Consumer Service (ACS) - Receives and processes SAML responses</li>
              <li>Single Logout Service (SLS) - Handles logout requests and responses</li>
              <li>Metadata - Describes the SP&apos;s capabilities and configuration</li>
              <li>Certificate management - For signing requests and verifying responses</li>
            </ul>
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Implementing a Service Provider
        </h2>
        <p>There are several approaches to implementing a SAML Service Provider:</p>

        <Tabs defaultValue="library" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="library">Using a SAML Library</TabsTrigger>
            <TabsTrigger value="framework">Framework Integration</TabsTrigger>
            <TabsTrigger value="middleware">Middleware/Proxy</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Using a SAML Library</h3>
            <p>
              The most common approach is to use a SAML library for your programming language. This gives you
              flexibility while handling the complex parts of SAML for you.
            </p>

            <p className="mt-2">Here&apos;s a basic example using the Next.js API routes with a SAML library:</p>
            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`// pages/api/auth/saml.js
import { SAMLClient } from 'saml-library'; // Example library
import fs from 'fs';

// NOTE: This is an example configuration. In a real application,
// you would use environment variables for these values.
const samlClient = new SAMLClient({
  callbackUrl: 'https://your-app.com/api/auth/saml/callback', // Example value
  entryPoint: 'https://idp.example.org/SAML2/SSO/POST', // Example value
  issuer: 'https://your-app.com', // Example value
  cert: fs.readFileSync('./path/to/idp-certificate.pem', 'utf-8'), // Example path
  privateKey: fs.readFileSync('./path/to/sp-private-key.pem', 'utf-8'), // Example path
  identifierFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Generate SAML request and redirect to IdP
    const url = await samlClient.getAuthorizeUrl();
    res.redirect(url);
  } else if (req.method === 'POST') {
    // Process SAML response
    try {
      const user = await samlClient.validateResponse(req.body);
      
      // Set session or JWT token
      // ...
      
      res.redirect('/dashboard');
    } catch (error) {
      console.error('SAML validation error:', error);
      res.status(401).send('Authentication failed');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}`}
            </pre>
          </TabsContent>

          <TabsContent value="framework" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Framework Integration</h3>
            <p>Many web frameworks have built-in support or extensions for SAML authentication.</p>
            <p className="mt-2">Here&apos;s an example using Next.js with NextAuth.js:</p>
            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import fs from 'fs';

export default NextAuth({
providers: [
  Providers.SAML({
    name: 'SAML IdP',
    options: {
      // NOTE: These are example values. In a real application,
      // you would use environment variables for these values.
      callbackUrl: 'https://your-app.com/api/auth/callback/saml',
      entryPoint: 'https://idp.example.org/SAML2/SSO/POST',
      issuer: 'https://your-app.com',
      cert: fs.readFileSync('./path/to/idp-certificate.pem', 'utf-8'),
      privateKey: fs.readFileSync('./path/to/sp-private-key.pem', 'utf-8'),
      identifierFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
    },
  }),
],
  callbacks: {
    async jwt(token, user, account) {
      // Add custom claims to the JWT
      if (user?.profile) {
        token.role = user.profile.role;
        token.email = user.profile.email;
      }
      return token;
    },
    async session(session, token) {
      // Add custom session properties
      session.user.role = token.role;
      return session;
    },
  },
});`}
            </pre>
          </TabsContent>

          <TabsContent value="middleware" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Middleware/Proxy</h3>
            <p>
              Another approach is to use a middleware or proxy that handles SAML authentication before requests reach
              your application.
            </p>
            <p className="mt-2">Example using Auth0 as a SAML proxy with Next.js:</p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>Set up an Auth0 account and configure it as a SAML Service Provider</li>
              <li>Configure your Next.js application to use Auth0 for authentication</li>
              <li>Auth0 handles the SAML communication with the Identity Provider</li>
              <li>
                Your application receives user information from Auth0 via a simpler protocol like OAuth 2.0 or OpenID
                Connect
              </li>
            </ol>
            <p>
              This approach simplifies your application code but adds an additional dependency on the middleware
              provider.
            </p>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Service Provider Configuration
        </h2>
        <p>
          Regardless of the implementation approach, you&apos;ll need to configure several key aspects of your Service
          Provider:
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Entity ID</h3>
        <p>
          The Entity ID is a unique identifier for your Service Provider. It&apos;s typically a URI (often your
          application&apos;s base URL), but it doesn&apos;t have to be a resolvable URL. For example:
        </p>
        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`https://your-app.com
urn:your-company:your-app
https://your-app.com/saml/metadata`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Assertion Consumer Service (ACS)</h3>
        <p>
          The ACS is the endpoint that receives and processes SAML responses from the Identity Provider. You need to
          configure:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>ACS URL - The URL where SAML responses should be sent</li>
          <li>Binding - The SAML binding to use (typically HTTP-POST)</li>
          <li>Index - If you have multiple ACS endpoints, each needs a unique index</li>
        </ul>
        <p>Example ACS configuration:</p>
        <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
          {`<md:AssertionConsumerService 
    Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" 
    Location="https://your-app.com/api/auth/saml/callback" 
    index="0" 
    isDefault="true"/>`}
        </pre>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Name ID Format</h3>
        <p>
          The Name ID Format specifies the format of the user identifier in SAML assertions. Common formats include:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Email Address: <code>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</code>
          </li>
          <li>
            Persistent: <code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code>
          </li>
          <li>
            Transient: <code>urn:oasis:names:tc:SAML:2.0:nameid-format:transient</code>
          </li>
          <li>
            Unspecified: <code>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</code>
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Certificates</h3>
        <p>You&apos;ll need to configure certificates for:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Signing SAML requests (optional but recommended)</li>
          <li>Decrypting SAML assertions (if encryption is used)</li>
          <li>Verifying signatures on SAML responses from the IdP</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Metadata</h3>
        <p>
          Your Service Provider should generate SAML metadata that can be shared with Identity Providers. The metadata
          includes:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Entity ID</li>
          <li>ACS endpoints</li>
          <li>Certificate information</li>
          <li>Supported bindings and protocols</li>
          <li>Organization and contact information (optional)</li>
        </ul>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Metadata Exchange</AlertTitle>
          <AlertDescription>
            Most SAML libraries provide a way to generate SP metadata. This metadata should be shared with the Identity
            Provider during configuration. Similarly, you&apos;ll need to obtain and configure the IdP&apos;s metadata
            in your Service Provider.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Service Provider Best Practices
        </h2>
        <p>Follow these best practices when implementing a SAML Service Provider:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Security</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Always use HTTPS for all SAML endpoints</li>
          <li>Validate all SAML responses thoroughly</li>
          <li>Verify signatures on SAML responses</li>
          <li>Check that the response is intended for your Service Provider (Audience restriction)</li>
          <li>Validate the response&apos;s timestamp to prevent replay attacks</li>
          <li>Securely store private keys and restrict access to them</li>
          <li>Implement proper session management after authentication</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">User Experience</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Provide clear error messages when SAML authentication fails</li>
          <li>Implement a fallback authentication method if possible</li>
          <li>Consider implementing IdP discovery if your application supports multiple Identity Providers</li>
          <li>Handle session timeout gracefully</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Maintenance</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Keep your SAML library up to date</li>
          <li>Have a process for certificate rotation</li>
          <li>Monitor SAML authentication failures</li>
          <li>Document your SAML configuration for future reference</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Testing Your Service Provider
        </h2>
        <p>After configuring your Service Provider, test it thoroughly:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Test SP-initiated login flow</li>
          <li>Test IdP-initiated login flow (if supported)</li>
          <li>Test single logout (if implemented)</li>
          <li>Verify that user attributes are correctly extracted from SAML assertions</li>
          <li>Test error handling (e.g., expired assertions, invalid signatures)</li>
          <li>Test with multiple browsers and devices</li>
        </ul>

        <p>
          Many Identity Providers offer test environments or simulators that can help you test your Service Provider
          implementation without affecting production systems.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/implementation/idp-setup">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Identity Provider Setup
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/implementation/attribute-mapping">
            Next: Attribute Mapping <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

