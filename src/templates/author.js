import React from "react"
import Layout from "../components/layout"

import styles from "./templates.module.scss"

import SEO from "../components/seo"

import PostList from "../components/postList"
import { rhythm } from "../utils/typography"

import Image from "gatsby-image"

export default ({
  data: {
    authorYaml: { id, bio, image },
    allMarkdownRemark: { edges: postNodes },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <SEO title={id} />
    <main>
      <section>
        <div class={`${styles.authorPage} pb-80`}>
          <div class={`${styles.author} d-flex`}>
            <div class={styles.authorImage}>
              <Image
                fixed={image.childImageSharp.fixed}
                alt={id}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </div>
            <div class={styles.aboutAuthor}>
              <h3>{id}</h3>
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </section>
      <PostList posts={postNodes} hideBio />
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query PostsByAuthorId($authorId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { authorId: { eq: $authorId } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            tags
          }
        }
      }
    }
    authorYaml(id: { eq: $authorId }) {
      id
      bio
      image {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
