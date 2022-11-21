import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Link } from "gatsby"
const AboutUs = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Us" pathname={location.pathname} />
      <h1>About Us</h1>
      <p>
        Compile7 Blog is a place for developers to learn and contribute. We also
        call it Decompile for the simple reason that it helps developers learn
        and enables them to help others with their contributions.
      </p>

      <p>
        At Compile7 Blog, anyone — irrespective of their experience and skills —
        can contribute: your contribution could be as simple as fixing a typo or
        writing a detailed blog on how to write efficient and secure code — no
        matter what, we accept contributions as long as they add positive value
        for everyone.
      </p>
      <h2>How to Run This Project Locally?</h2>
      <p>
        You need to have Node.js and npm installed to run the project locally.
      </p>
      <ol>
        <li>Install the Project Dependencies</li>
        <div class="gatsby-highlight" data-language="text">
          <pre class="language-text">
            <code class="language-text">$ npm i</code>
          </pre>
        </div>
        <li>Run Gatsby Server</li>
        <div class="gatsby-highlight" data-language="text">
          <pre class="language-text">
            <code class="language-text">$ npm run develop</code>
          </pre>
        </div>
        <li>This will run the server on the port:8000 by default</li>
        <div class="gatsby-highlight" data-language="text">
          <pre class="language-text">
            <code class="language-text">localhost:8000</code>
          </pre>
        </div>
      </ol>
      <h2>How to Contribute?</h2>
      <p>
        We appreciate all kinds of contributions from anyone, be it finding an
        issue or writing a blog.
      </p>
      <p>
        Refer to the{" "}
        <Link
          to="https://github.com/Compile7/compile7.github.io/blob/dev/CONTRIBUTING.md"
          target={"_blank"}
        >
          CONTRIBUTING GUIDE
        </Link>{" "}
        to become a contributor.
      </p>
      <h2>License</h2>
      <p>
        For more information on licensing, please refer to{" "}
        <Link to="https://github.com/Compile7/compile7.github.io/blob/main/LICENSE">
          License
        </Link>
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
