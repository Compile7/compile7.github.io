import React from "react"
import Layout from "../../../components/layout"

import * as styles from "../../../templates/templates.module.scss"

import SEO from "../../../components/seo"

import PostList from "../../../components/postList"
import { rhythm } from "../../../utils/typography"

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default ({
  data: {
    authorJson: { jsonId, bio, image },
    allMarkdownRemark: { edges: postNodes },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <SEO title={jsonId} />
    <section>
      <div class={`${styles.authorPage} pb-80`}>
        <div class={`${styles.author} d-flex`}>
          <div class={styles.authorImage}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={jsonId}
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
            <h3>{jsonId}</h3>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
    <PostList posts={postNodes} hideBio />
  </Layout>
)

export const pageQuery = graphql`
  query PostsByAuthorId($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { author: { id: { eq: $id } } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            coverImage {
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: BLURRED)
              }
            }
            title
            description
            tags
          }
        }
      }
    }
    authorJson(id: { eq: $id }) {
      jsonId
      bio
      image {
        childImageSharp {
          gatsbyImageData(width: 100, height: 100, layout: FIXED)
        }
      }
    }
  }
`
