import { graphql } from "gatsby"
import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
const AboutUs = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Us" pathname={location.pathname} />
      <h1>What is Compile7 Blog?</h1>
      <p>
        Compile7 Blog is a place for developers to learn from and contribute to.
        In other words, if you’re a developer who wants to make a positive
        impact, Compile7 Blog is the place for you; however small your
        contributions may be, they all count :)
      </p>

      <h2>How can I make a positive impact?</h2>
      <p>
        Write a blog post; make content edits; improve our blog’s code or
        develop a new functionality; or just fix a typo. You can contribute in
        any way you want that adds value :) To make collaborations and
        contributions easier, we manage Compile7 Blog on GitHub as an open
        source project. Ready to contribute? Have a look at{" "}
        <a href="https://github.com/Compile7/compile7.github.io/blob/main/CONTRIBUTING.md">
          our contributing guidelines
        </a>
        .
      </p>

      <h2>Why should I write a blog post for Compile7 Blog?</h2>
      <p>
        We understand you. It’s a fair question! You may ask, “there are many
        platforms like Medium and Dev.to — or even my personal blog — where I
        can publish my blog posts. Why Compile7 Blog?” At the core, developers
        develop and build things. While some developers are regular writers,
        some maybe just start out or need some editorial help to get going. This
        is where we come in. When you want to write for Compile7 Blog, we help
        you and collaborate with you all the way through choosing your topic,
        outlining, drafting, and editing the content — so you can rest assured
        that you’ll get guidance and support all the way :)
      </p>

      <h2>Any Questions?</h2>

      <p>
        Or, want to discuss your contributions or something else? Start a new
        discussion on GitHub:
        https://github.com/Compile7/compile7.github.io/discussions
      </p>
    </Layout>
  )
}

export default AboutUs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
