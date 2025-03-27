import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, FileText, Globe, Video } from "lucide-react"

export const metadata: Metadata = {
  title: "SAML Resources",
  description: "Helpful resources for learning about SAML",
}

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SAML Resources</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Helpful resources for learning about Security Assertion Markup Language (SAML)
          </p>
        </div>

        <Tabs defaultValue="documentation" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger disabled value="tutorials">Tutorials<sup>coming soon</sup></TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="documentation" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>OASIS SAML Specifications</CardTitle>
                  <CardDescription>Official SAML 2.0 specifications from OASIS</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The authoritative source for SAML 2.0 standards, including core specifications, bindings, profiles,
                    and security considerations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://wiki.oasis-open.org/security/FrontPage"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Specifications
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Technical Overview</CardTitle>
                  <CardDescription>Comprehensive technical overview of SAML</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A detailed technical overview of SAML 2.0, including its architecture, components, and use cases.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Overview
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML 2.0 Profiles</CardTitle>
                  <CardDescription>Detailed information about SAML profiles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Specifications for the various SAML 2.0 profiles, including Web Browser SSO, Enhanced Client or
                    Proxy, and Single Logout.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profiles
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML 2.0 Bindings</CardTitle>
                  <CardDescription>Specifications for SAML protocol bindings</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed specifications for the various SAML 2.0 protocol bindings, including HTTP Redirect, HTTP
                    POST, and SOAP.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://docs.oasis-open.org/security/saml/v2.0/saml-bindings-2.0-os.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Bindings
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Video className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML 2.0 Tutorial</CardTitle>
                  <CardDescription>Video tutorial series on SAML 2.0</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive video tutorial series covering SAML 2.0 concepts, implementation, and best
                    practices.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Watch Tutorials
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Implementing SAML with Node.js</CardTitle>
                  <CardDescription>Step-by-step guide for Node.js developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn how to implement SAML authentication in a Node.js application using popular libraries.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      View Guide
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML with Java Spring Boot</CardTitle>
                  <CardDescription>Tutorial for Java developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive guide to implementing SAML authentication in a Java Spring Boot application.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      View Tutorial
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML with .NET Core</CardTitle>
                  <CardDescription>Guide for .NET developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn how to implement SAML authentication in a .NET Core application using popular libraries.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      View Guide
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Tester</CardTitle>
                  <CardDescription>SAML testing tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                  A developer-friendly tool for testing SAML and SCIM integrations. Simulate an Identity Provider (IdP) and validate your SSO implementation with ease.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://saml-tester.compile7.org/" target="_blank" rel="noopener noreferrer">
                      Use Tester
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hidden">
                <CardHeader>
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Libraries</CardTitle>
                  <CardDescription>Popular SAML libraries for various languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A curated list of popular SAML libraries for various programming languages, including Node.js, Java,
                    Python, and .NET.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      View Libraries
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hidden">
                <CardHeader>
                  <Globe className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Metadata Explorer</CardTitle>
                  <CardDescription>Tool for exploring SAML metadata</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A tool for exploring and validating SAML metadata, helping you understand the structure and content
                    of SAML metadata files.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Explore Tool
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hidden">
                <CardHeader>
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Debugger</CardTitle>
                  <CardDescription>Tool for debugging SAML messages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A tool for debugging SAML messages, allowing you to decode, validate, and inspect SAML requests and
                    responses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Use Debugger
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hidden">
                <CardHeader>
                  <Globe className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Forums</CardTitle>
                  <CardDescription>Community forums for SAML discussions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join community forums dedicated to SAML discussions, where you can ask questions, share knowledge,
                    and connect with other SAML practitioners.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Join Forums
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Stack Overflow</CardTitle>
                  <CardDescription>SAML questions and answers on Stack Overflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Browse SAML-related questions and answers on Stack Overflow, a popular Q&A platform for developers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://stackoverflow.com/questions/tagged/saml"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Questions
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML GitHub Projects</CardTitle>
                  <CardDescription>Open-source SAML projects on GitHub</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore open-source SAML projects on GitHub, including libraries, tools, and example
                    implementations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://github.com/topics/saml" target="_blank" rel="noopener noreferrer">
                      Explore Projects
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hidden">
                <CardHeader>
                  <Globe className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>SAML Conferences</CardTitle>
                  <CardDescription>Conferences and events focused on SAML</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Stay informed about upcoming conferences, webinars, and events focused on SAML and identity
                    management.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      View Events
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

