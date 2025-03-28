import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Code, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            SAML Documentation
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Your comprehensive guide to Security Assertion Markup Language (SAML)
          </p>
        </div>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/saml/docs/introduction">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 py-12">
        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>Learn the basic concepts of SAML</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Understand what SAML is, its purpose, benefits, and common use cases like Single Sign-On (SSO).
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" asChild className="w-full">
              <Link href="/saml/docs/fundamentals/key-concepts">
                Learn Fundamentals <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Code className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Technical Details</CardTitle>
            <CardDescription>Explore SAML's technical aspects</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Dive into assertions, protocols, bindings, and the XML structure used in SAML messages.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" asChild className="w-full">
              <Link href="/saml/docs/technical/components">
                Explore Technical Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Implementation</CardTitle>
            <CardDescription>Implement SAML in your applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Learn how to implement SAML in various environments with step-by-step guides and examples.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" asChild className="w-full">
              <Link href="/saml/docs/implementation/getting-started">
                View Implementation Guides <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Security</CardTitle>
            <CardDescription>Security best practices for SAML</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Understand security considerations, potential vulnerabilities, and best practices for secure SAML
              implementation.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" asChild className="w-full">
              <Link href="/saml/docs/security/best-practices">
                Learn Security Practices <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

