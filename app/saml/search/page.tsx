"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SearchIcon } from "lucide-react"

// Mock search results for demonstration
const mockSearchIndex = [
  {
    title: "Introduction to SAML",
    description: "Learn about Security Assertion Markup Language (SAML) and its applications",
    url: "/saml/docs/introduction",
    keywords: ["saml", "introduction", "overview", "security assertion markup language"],
  },
  {
    title: "What is SAML?",
    description: "A detailed explanation of Security Assertion Markup Language (SAML)",
    url: "/saml/docs/what-is-saml",
    keywords: ["saml", "definition", "purpose", "xml", "standard"],
  },
  {
    title: "SAML Assertions",
    description: "Understanding SAML assertions and their structure",
    url: "/saml/docs/technical/assertions",
    keywords: ["saml", "assertions", "xml", "structure", "attributes"],
  },
  {
    title: "Attribute Mapping",
    description: "Learn how to map SAML attributes to your application",
    url: "/saml/docs/implementation/attribute-mapping",
    keywords: ["saml", "attribute", "mapping", "implementation", "identity"],
  },
  {
    title: "SAML Replay Attacks",
    description: "Understanding and preventing SAML replay attacks",
    url: "/saml/docs/security/replay-attacks",
    keywords: ["saml", "security", "replay", "attacks", "prevention"],
  },
  {
    title: "Complete SAML Flows",
    description: "Complete SAML authentication flow examples",
    url: "/saml/docs/examples/flows",
    keywords: ["saml", "flows", "authentication", "examples", "sp-initiated", "idp-initiated"],
  },
]

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof mockSearchIndex>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    setIsSearching(true)

    // Simple search implementation for demonstration
    const searchTerms = query.toLowerCase().split(" ")

    const filteredResults = mockSearchIndex.filter((item) => {
      const allText = [item.title.toLowerCase(), item.description.toLowerCase(), ...item.keywords].join(" ")

      return searchTerms.some((term) => allText.includes(term))
    })

    // Sort by relevance (number of matching terms)
    filteredResults.sort((a, b) => {
      const aMatches = searchTerms.filter(
        (term) =>
          a.title.toLowerCase().includes(term) ||
          a.description.toLowerCase().includes(term) ||
          a.keywords.some((k) => k.includes(term)),
      ).length

      const bMatches = searchTerms.filter(
        (term) =>
          b.title.toLowerCase().includes(term) ||
          b.description.toLowerCase().includes(term) ||
          b.keywords.some((k) => k.includes(term)),
      ).length

      return bMatches - aMatches
    })

    setResults(filteredResults)
    setIsSearching(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Search Documentation</h1>

        <div className="flex gap-2 mb-8">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for SAML topics..."
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} disabled={isSearching}>
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>

        {results.length > 0 ? (
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>

            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-accent transition-colors">
                  <Link href={result.url} className="block space-y-1">
                    <h2 className="text-lg font-medium">{result.title}</h2>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{result.url}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : query && !isSearching ? (
          <div className="text-center py-8">
            <p className="text-lg font-medium">No results found</p>
            <p className="text-muted-foreground mt-1">Try different keywords or check the spelling</p>
          </div>
        ) : null}

        {!query && !results.length && (
          <div className="text-center py-8">
            <p className="text-lg font-medium">Enter a search term to find documentation</p>
            <p className="text-muted-foreground mt-1">
              Try searching for "assertions", "attribute mapping", or "replay attacks"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

