import Link from "next/link"
import { ArrowLeft, Code, Users, Lightbulb, Heart, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & Lead Developer",
      image: "/placeholder.svg?height=200&width=200",
      github: "janedoe",
      twitter: "janedoe",
    },
    {
      name: "John Smith",
      role: "Security Researcher",
      image: "/placeholder.svg?height=200&width=200",
      github: "johnsmith",
      twitter: "johnsmith",
    },
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "/placeholder.svg?height=200&width=200",
      github: "alexj",
      twitter: "alexj",
    },
    {
      name: "Sam Wilson",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=200&width=200",
      github: "samw",
      twitter: "samw",
    },
  ]

  // Core values data
  const coreValues = [
    {
      title: "Open Source First",
      description: "We believe in the power of open source to drive innovation and collaboration.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Developer Experience",
      description: "We're obsessed with creating tools that developers actually enjoy using.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Security as Priority",
      description: "We build security into everything we do, not as an afterthought.",
      icon: <Lightbulb className="h-8 w-8" />,
    },
    {
      title: "Community Driven",
      description: "Our roadmap is shaped by the needs of our community.",
      icon: <Heart className="h-8 w-8" />,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">About Compile7</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A non-profit organization dedicated to creating open-source tools that simplify complex tasks for
              developers.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="https://github.com/compile7" className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Compile7, we believe that developers should be able to focus on building great software without
                  wrestling with infrastructure. That's why we create open-source tools that simplify complex tasks,
                  particularly in the areas of authentication, security, and enterprise integration.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2018, our organization has grown from a small group of security enthusiasts to a thriving
                  community of developers who contribute to and use our tools every day. We're committed to maintaining
                  the highest standards of code quality, security, and usability in everything we build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-500 inline-block mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              We're always looking for contributors, whether you're a developer, designer, or documentation writer. Join
              us in building the future of developer tools!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" className="rounded-full px-6">
                <Link href="https://github.com/compile7" className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  Contribute on GitHub
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
              >
                <Link href="#" className="flex items-center gap-2">
                  Join Discord Community
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

