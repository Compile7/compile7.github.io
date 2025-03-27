import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "SAML Bindings",
  description: "Understanding SAML bindings and how they transport SAML messages",
}

export default function BindingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">SAML Bindings</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Understanding SAML bindings and how they transport SAML messages
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What are SAML Bindings?</h2>
        <p>
          SAML bindings define how SAML protocol messages are transported between SAML entities. They map SAML protocol
          messages onto standard messaging formats and/or communications protocols. Bindings are the "transport layer"
          of SAML, specifying how messages are exchanged between parties.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">Common SAML Bindings</h2>
        <p>SAML 2.0 defines several bindings for different use cases:</p>

        <Tabs defaultValue="http-redirect" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="http-redirect">HTTP Redirect</TabsTrigger>
            <TabsTrigger value="http-post">HTTP POST</TabsTrigger>
            <TabsTrigger value="http-artifact">HTTP Artifact</TabsTrigger>
            <TabsTrigger value="soap">SOAP</TabsTrigger>
          </TabsList>

          <TabsContent value="http-redirect" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">HTTP Redirect Binding</h3>
            <p>
              The HTTP Redirect binding transmits SAML messages by URL encoding them and sending them as URL query
              string parameters. This binding is typically used for sending short messages, such as authentication
              requests.
            </p>
            <p className="mt-2">Key characteristics:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Uses HTTP GET requests</li>
              <li>Limited by URL length (typically 2048 characters)</li>
              <li>Messages are deflated, base64-encoded, and URL-encoded</li>
              <li>Signatures are applied to the URL-encoded message</li>
            </ul>
            <p>Example of an HTTP Redirect binding URL:</p>
            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`https://idp.example.org/SAML2/SSO/Redirect?SAMLRequest=fZJNT%2BMwEIbvSPwHy%2Fd8tMvHympSdUGISuwS0cCBm%2BtMUwfbk%2FU4zfLvSVMQPSBOlj%2F8zDPvG%2Bq10miGF9rXjTbrJkLvWiPE31%2BZVo8sSXEJz1%2BWCSm1hEJYg0LdNrBb%2Fvw1QXQ9Zq2O2%2B1G%2Bg6wnu1wYaLnNXBXmUgaRZpUdnYyMeZOOKXRu0DZxYoYDvCjQGKE3f1c9HXLWzT8dYGWVQiMW0YX8ZRCQTFhDQV87wSiEwWBWwSE30zXxPGVA2QXRXYVzKLITYDHrJ8BWrt4L2%2Bcx5%2FNSNWWVNMfMnRXXLRZlVgDznGurZ0QKcTLSj3TNEWvMDC8sC9t6L8%2BM0LlcvR6R5wm%2FijXVVGVU5IQeooX6PTJFf5A4QfEzQV9QTccC61gJ6YDnW2XS5%2BpHmO7j%2FMRxpwGCqmiolLWkjh4wTXrxeNHmFbO9fx%2FXnrJr5WN1NJk15VSNw%2FNlbBQ8cc7MYhxxlSEgGJ4vYH7KBj%2FMg%2BF%2BfeGycGU6Kh6FQHjLN%2F5%2Fw%3D%3D&RelayState=https%3A%2F%2Fsp.example.com%2Fmyresource&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=NOTAREALSIGNATUREBUTTHEREALONEWOULDGOHERE`}
            </pre>
          </TabsContent>

          <TabsContent value="http-post" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">HTTP POST Binding</h3>
            <p>
              The HTTP POST binding transmits SAML messages via an HTML form with a base64-encoded message. This binding
              is typically used for sending larger messages, such as SAML responses with assertions.
            </p>
            <p className="mt-2">Key characteristics:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Uses HTTP POST requests</li>
              <li>Not limited by URL length</li>
              <li>Messages are base64-encoded and included in an HTML form</li>
              <li>Signatures are applied to the XML message before base64 encoding</li>
            </ul>
            <p>Example of an HTTP POST binding form:</p>
            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`<form method="post" action="https://sp.example.com/SAML2/SSO/POST" id="SAMLResponseForm">
  <input type="hidden" name="SAMLResponse" value="PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiIHhtbG5zOnNhbWw9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iIElEPSJfYWJjZGVmMTIzNDU2IiBWZXJzaW9uPSIyLjAiIElzc3VlSW5zdGFudD0iMjAyMy0wNC0wMVQxMjowNTowMFoiIERlc3RpbmF0aW9uPSJodHRwczovL3NwLmV4YW1wbGUuY29tL1NBTUwyL1NTTy9QT1NUIiBJblJlc3BvbnNlVG89Il8xMjM0NTY3ODkiPjxzYW1sOklzc3Vlcj5odHRwczovL2lkcC5leGFtcGxlLm9yZy9TQU1MMjwvc2FtbDpJc3N1ZXI+PHNhbWxwOlN0YXR1cz48c2FtbHA6U3RhdHVzQ29kZSBWYWx1ZT0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnN0YXR1czpTdWNjZXNzIi8+PC9zYW1scDpTdGF0dXM+PHNhbWw6QXNzZXJ0aW9uIHhtbG5zOnNhbWw9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iIElEPSJfYXNzZXJ0aW9uMTIzNDU2IiBWZXJzaW9uPSIyLjAiIElzc3VlSW5zdGFudD0iMjAyMy0wNC0wMVQxMjowNTowMFoiPjxzYW1sOklzc3Vlcj5odHRwczovL2lkcC5leGFtcGxlLm9yZy9TQU1MMjwvc2FtbDpJc3N1ZXI+PHNhbWw6U3ViamVjdD48c2FtbDpOYW1lSUQgRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoxLjE6bmFtZWlkLWZvcm1hdDplbWFpbEFkZHJlc3MiPnVzZXJAZXhhbXBsZS5jb208L3NhbWw6TmFtZUlEPjxzYW1sOlN1YmplY3RDb25maXJtYXRpb24gTWV0aG9kPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6Y206YmVhcm
" />
  <input type="hidden" name="RelayState" value="https://sp.example.com/myresource" />
  <noscript>
    <p>JavaScript is disabled. Click Submit to continue.</p>
    <input type="submit" value="Submit" />
  </noscript>
</form>
<script type="text/javascript">
  document.getElementById('SAMLResponseForm').submit();
</script>`}
            </pre>
          </TabsContent>

          <TabsContent value="http-artifact" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">HTTP Artifact Binding</h3>
            <p>
              The HTTP Artifact binding transmits a reference to a SAML message (an "artifact") rather than the message
              itself. The recipient then uses the Artifact Resolution Protocol to retrieve the actual message. This
              binding provides additional security by not exposing the SAML message to the user agent.
            </p>
            <p className="mt-2">Key characteristics:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Can use either HTTP GET or POST</li>
              <li>Transmits a small, fixed-length artifact instead of the actual message</li>
              <li>Requires a back-channel communication for artifact resolution</li>
              <li>Provides additional security by not exposing the SAML message to the user agent</li>
            </ul>
            <p>Example of an HTTP Artifact binding URL:</p>
            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`https://sp.example.com/SAML2/SSO/Artifact?SAMLart=AAQAAMh48/1oXIM%2BPMUTPIypLP9gAC3EBLS9A%2BPS6K%2B7zWZ1xZurLI1HBMRAAAAB&RelayState=https%3A%2F%2Fsp.example.com%2Fmyresource`}
            </pre>
          </TabsContent>

          <TabsContent value="soap" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">SOAP Binding</h3>
            <p>
              The SOAP binding transmits SAML messages within SOAP messages. This binding is typically used for direct
              communication between SAML entities, such as for the Artifact Resolution Protocol.
            </p>
            <p className="mt-2">Key characteristics:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Uses SOAP 1.1 over HTTP</li>
              <li>Provides a synchronous request-response pattern</li>
              <li>Typically used for back-channel communication</li>
              <li>Can leverage WS-Security for additional security features</li>
            </ul>
            <p>Example of a SOAP binding message:</p>
            <pre className="rounded-lg bg-muted p-4 overflow-auto text-sm mt-4">
              {`<SOAP-ENV:Envelope
    xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Body>
        <samlp:ArtifactResolve
            xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"
            xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
            ID="_cce4ee769ed970b501d680f697989d14"
            Version="2.0"
            IssueInstant="2023-04-01T12:00:00Z"
            Destination="https://idp.example.org/SAML2/ArtifactResolution">
            <saml:Issuer>https://sp.example.com/SAML2</saml:Issuer>
            <samlp:Artifact>
                AAQAAMh48/1oXIM+PMUTPIypLP9gAC3EBLS9A+PS6K+7zWZ1xZurLI1HBMRAAAAB
            </samlp:Artifact>
        </samlp:ArtifactResolve>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`}
            </pre>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">Other SAML Bindings</h2>
        <p>In addition to the common bindings described above, SAML 2.0 also defines several other bindings:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">SAML URI Binding</h3>
        <p>
          The SAML URI binding allows a SAML assertion to be retrieved by resolving a URI. This binding is typically
          used for retrieving assertions that are referenced by URI in other assertions.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">PAOS Binding</h3>
        <p>
          The Reverse SOAP (PAOS) binding is used in the Enhanced Client or Proxy (ECP) profile. It allows a client to
          act as a SOAP responder, which is the reverse of the usual SOAP client-server relationship.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">HTTP POST-SimpleSign Binding</h3>
        <p>
          The HTTP POST-SimpleSign binding is a variation of the HTTP POST binding that uses a simpler signature
          mechanism. It is designed for environments where XML Digital Signature is not available.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Choosing the Right Binding
        </h2>
        <p>The choice of binding depends on several factors:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Message size</strong> - HTTP Redirect is suitable for small messages, while HTTP POST can handle
            larger messages
          </li>
          <li>
            <strong>Security requirements</strong> - HTTP Artifact provides additional security by not exposing the SAML
            message to the user agent
          </li>
          <li>
            <strong>Implementation complexity</strong> - HTTP Redirect and HTTP POST are simpler to implement than HTTP
            Artifact or SOAP
          </li>
          <li>
            <strong>Browser compatibility</strong> - All modern browsers support HTTP Redirect and HTTP POST
          </li>
          <li>
            <strong>Firewall considerations</strong> - SOAP may require additional firewall configuration
          </li>
        </ul>
        <p>In practice, most SAML implementations use:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>HTTP Redirect for sending authentication requests (from SP to IdP)</li>
          <li>HTTP POST for sending responses with assertions (from IdP to SP)</li>
          <li>SOAP for back-channel communication (e.g., artifact resolution)</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/technical/protocols">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: SAML Protocols
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/technical/xml-structure">
            Next: XML Structure <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

