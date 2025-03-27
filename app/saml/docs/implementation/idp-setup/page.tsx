import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Identity Provider Setup",
  description: "Setting up and configuring a SAML Identity Provider",
}

export default function IdpSetupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Identity Provider Setup</h1>
        <p className="text-lg text-muted-foreground mt-2">Setting up and configuring a SAML Identity Provider</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Identity Provider Overview</h2>
        <p>
          An Identity Provider (IdP) is responsible for authenticating users and issuing SAML assertions. Setting up an
          IdP involves configuring it to authenticate users and communicate with service providers.
        </p>

        <p className="mt-2">There are several options for setting up an Identity Provider:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Use a cloud-based IdP service (e.g., Okta, Auth0, OneLogin)</li>
          <li>Set up an on-premises IdP solution (e.g., Microsoft ADFS, Shibboleth)</li>
          <li>Implement your own custom IdP using a SAML library</li>
        </ul>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Choosing an IdP</AlertTitle>
          <AlertDescription>
            For most organizations, using a cloud-based IdP service is the simplest and most cost-effective option.
            These services provide user-friendly interfaces, robust security features, and are maintained by security
            experts. Building your own IdP should only be considered if you have specific requirements that cannot be
            met by existing solutions.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Common Identity Providers
        </h2>
        <p>Let's explore some popular Identity Provider solutions and how to set them up:</p>

        <Tabs defaultValue="okta" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="okta">Okta</TabsTrigger>
            <TabsTrigger value="auth0">Auth0</TabsTrigger>
            <TabsTrigger value="adfs">ADFS</TabsTrigger>
            <TabsTrigger value="keycloak">Keycloak</TabsTrigger>
          </TabsList>

          <TabsContent value="okta" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Okta</h3>
            <p>Okta is a cloud-based identity and access management service that provides SAML IdP functionality.</p>
            <p className="mt-2">To set up Okta as a SAML IdP:</p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>Sign up for an Okta account and log in to the Okta Admin Console</li>
              <li>Navigate to Applications {"->"} Applications</li>
              <li>Click "Add Application" and select "Create New App"</li>
              <li>Select "SAML 2.0" as the Sign-on method and click "Create"</li>
              <li>
                Configure the application settings:
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>App name: Enter a name for your application</li>
                  <li>SAML Settings: Configure the SAML settings for your application</li>
                  <li>Single Sign-On URL: Enter the ACS URL of your service provider</li>
                  <li>Audience URI (SP Entity ID): Enter the Entity ID of your service provider</li>
                  <li>Name ID Format: Select the appropriate format (typically Email)</li>
                  <li>Attribute Statements: Configure the attributes to include in the SAML assertion</li>
                </ul>
              </li>
              <li>Click "Next" and configure any additional settings</li>
              <li>Click "Finish" to create the application</li>
              <li>Assign users or groups to the application</li>
              <li>Download the IdP metadata or certificate for use in your service provider configuration</li>
            </ol>
          </TabsContent>

          <TabsContent value="auth0" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Auth0</h3>
            <p>
              Auth0 is a flexible, drop-in solution for adding authentication and authorization services to your
              applications.
            </p>
            <p className="mt-2">To set up Auth0 as a SAML IdP:</p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>Sign up for an Auth0 account and log in to the Auth0 Dashboard</li>
              <li>Navigate to Applications {"->"} Applications</li>
              <li>Click "Create Application" and select "Regular Web Applications"</li>
              <li>Go to the "Addons" tab and enable the "SAML2 Web App" addon</li>
              <li>
                Configure the SAML settings:
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>Application Callback URL: Enter the ACS URL of your service provider</li>
                  <li>Settings: Configure additional SAML settings in JSON format</li>
                  <li>nameIdentifierFormat: Set the Name ID format</li>
                  <li>mappings: Configure attribute mappings</li>
                </ul>
              </li>
              <li>Save the settings</li>
              <li>Download the IdP metadata or certificate for use in your service provider configuration</li>
            </ol>
          </TabsContent>

          <TabsContent value="adfs" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Active Directory Federation Services (ADFS)
            </h3>
            <p>ADFS is a Microsoft service that provides single sign-on functionality for Windows environments.</p>
            <p className="mt-2">To set up ADFS as a SAML IdP:</p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>Install and configure ADFS on a Windows Server</li>
              <li>Open the ADFS Management Console</li>
              <li>Navigate to Trust Relationships {"->"} Relying Party Trusts</li>
              <li>Click "Add Relying Party Trust" to start the wizard</li>
              <li>
                Select "Import data about the relying party from a file" if you have the SP metadata, or "Enter data
                about the relying party manually"
              </li>
              <li>
                Configure the relying party settings:
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>Display name: Enter a name for the relying party</li>
                  <li>Certificate: Configure the certificate settings</li>
                  <li>URL: Enter the ACS URL of your service provider</li>
                  <li>Identifier: Enter the Entity ID of your service provider</li>
                </ul>
              </li>
              <li>Configure the claim rules to specify which attributes to include in the SAML assertion</li>
              <li>
                Complete the wizard and export the IdP metadata or certificate for use in your service provider
                configuration
              </li>
            </ol>
          </TabsContent>

          <TabsContent value="keycloak" className="mt-4 space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Keycloak</h3>
            <p>Keycloak is an open-source identity and access management solution that supports SAML.</p>
            <p className="mt-2">To set up Keycloak as a SAML IdP:</p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>Download and install Keycloak</li>
              <li>Log in to the Keycloak Admin Console</li>
              <li>Create or select a realm</li>
              <li>Navigate to Clients and click "Create"</li>
              <li>
                Configure the client settings:
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>Client ID: Enter the Entity ID of your service provider</li>
                  <li>Client Protocol: Select "saml"</li>
                  <li>Client SAML Endpoint: Enter the ACS URL of your service provider</li>
                </ul>
              </li>
              <li>
                Configure additional settings in the client configuration:
                <ul className="ml-6 list-disc [&>li]:mt-1">
                  <li>Name ID Format: Select the appropriate format</li>
                  <li>Valid Redirect URIs: Enter the valid redirect URIs</li>
                  <li>Mappers: Configure attribute mappers to include in the SAML assertion</li>
                </ul>
              </li>
              <li>Save the settings</li>
              <li>
                Navigate to the "Installation" tab and select "SAML Metadata IDPSSODescriptor" to download the IdP
                metadata
              </li>
            </ol>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          IdP Configuration Best Practices
        </h2>
        <p>When configuring an Identity Provider, follow these best practices:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Security</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Use strong authentication methods (e.g., multi-factor authentication)</li>
          <li>Implement appropriate password policies</li>
          <li>Use secure communication channels (HTTPS)</li>
          <li>Regularly rotate certificates and keys</li>
          <li>Implement IP-based access restrictions where appropriate</li>
          <li>Enable audit logging for security events</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">User Management</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Implement a clear user provisioning and deprovisioning process</li>
          <li>Use groups or roles to manage access to applications</li>
          <li>Regularly review user access and remove unnecessary privileges</li>
          <li>Implement self-service password reset where appropriate</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Attribute Mapping</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Only include necessary attributes in SAML assertions</li>
          <li>Use consistent attribute naming conventions</li>
          <li>Document attribute mappings for each service provider</li>
          <li>Consider privacy implications when sharing user attributes</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">
          Testing Your IdP Configuration
        </h2>
        <p>After configuring your Identity Provider, it's important to test it thoroughly:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Verify that users can authenticate successfully</li>
          <li>Check that the correct attributes are included in SAML assertions</li>
          <li>Test single logout functionality if implemented</li>
          <li>Verify that error handling works correctly</li>
          <li>Test with multiple browsers and devices</li>
        </ul>

        <p>Many IdP solutions provide built-in testing tools or debug modes that can help you troubleshoot issues.</p>

        <Alert className="my-6">
          <Info className="h-4 w-4" />
          <AlertTitle>SAML Tracer</AlertTitle>
          <AlertDescription>
            SAML Tracer is a browser extension for Firefox and Chrome that allows you to view SAML messages exchanged
            between the browser and the server. It's a valuable tool for debugging SAML issues.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/implementation/getting-started">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Getting Started
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/implementation/sp-setup">
            Next: Service Provider Setup <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

