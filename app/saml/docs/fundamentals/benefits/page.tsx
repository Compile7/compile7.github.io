import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Benefits of SAML",
  description: "Understanding the advantages and benefits of implementing SAML",
}

export default function BenefitsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Benefits of SAML</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Understanding the advantages of implementing SAML in your organization
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Key Benefits</h2>
        <p>
          SAML provides numerous benefits for both users and organizations. Here are the key advantages of implementing
          SAML:
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Improved User Experience</CardTitle>
              <CardDescription>Single sign-on simplifies access</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                With SAML-based SSO, users only need to authenticate once to access multiple applications. This
                eliminates the need to remember and enter credentials for each system, significantly improving the user
                experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Enhanced Security</CardTitle>
              <CardDescription>Centralized authentication strengthens security</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                SAML reduces the attack surface by centralizing authentication. Users authenticate directly with the
                identity provider, not with individual service providers, which means credentials are only exchanged
                with a single trusted entity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Reduced Password Fatigue</CardTitle>
              <CardDescription>Fewer passwords to remember and manage</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Users no longer need to create and remember multiple passwords for different applications. This reduces
                password fatigue and the likelihood of users adopting insecure password practices like reusing passwords
                or writing them down.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Centralized User Management</CardTitle>
              <CardDescription>Streamlined administration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                SAML enables centralized user management. Administrators can create, update, and delete user accounts in
                one place, and these changes are automatically reflected across all connected service providers.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Reduced Administrative Overhead</CardTitle>
              <CardDescription>Lower IT support costs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                With fewer passwords to manage, there are fewer password reset requests and account lockouts. This
                reduces the administrative burden on IT support staff and lowers support costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Improved Compliance</CardTitle>
              <CardDescription>Better audit trails and access controls</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                SAML helps organizations meet compliance requirements by providing detailed audit trails of
                authentication events and enabling fine-grained access controls based on user attributes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Standardized Integration</CardTitle>
              <CardDescription>Simplified application onboarding</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                SAML is a widely adopted standard, making it easier to integrate new applications into your
                organization's authentication framework. Many SaaS applications support SAML out of the box.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Increased Productivity</CardTitle>
              <CardDescription>Less time spent on authentication</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Users spend less time logging in to different applications and dealing with password issues, which
                increases productivity. The seamless authentication experience allows users to focus on their work
                rather than managing access.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-10">Business Value</h2>
        <p>Beyond the technical benefits, SAML provides significant business value:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Cost Savings</h3>
        <p>SAML can lead to significant cost savings through:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Reduced help desk calls for password resets</li>
          <li>Lower administrative overhead for user management</li>
          <li>Decreased time spent by users on authentication processes</li>
          <li>Simplified onboarding and offboarding of employees</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Security Risk Reduction</h3>
        <p>SAML helps reduce security risks by:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Eliminating the need to store and manage credentials at multiple service providers</li>
          <li>Reducing the likelihood of credential theft through phishing</li>
          <li>Enabling rapid deprovisioning of access when users leave the organization</li>
          <li>Providing strong authentication options like multi-factor authentication</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Improved User Adoption</h3>
        <p>
          The simplified login experience provided by SAML can lead to higher user adoption of enterprise applications.
          When users can easily access the tools they need, they're more likely to use them effectively, maximizing the
          return on investment for these applications.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/saml/docs/fundamentals/key-concepts">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Key Concepts
          </Link>
        </Button>
        <Button asChild>
          <Link href="/saml/docs/fundamentals/single-sign-on">
            Next: Single Sign-On <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

