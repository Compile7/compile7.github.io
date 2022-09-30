import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagMenu from "../components/tagMenu"
import PostList from "../components/postList"
import { graphql } from "gatsby"

const CategoryTemplate = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { category } = pageContext

  return (
    <Layout location={location} title={siteTitle} showPinned>
      <SEO title={`Posts for ${category}`} />
      <TagMenu />
      <PostList posts={posts} />
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query($category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            coverImage {
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: BLURRED)
              }
            }
            author {
              jsonId
              image {
                childImageSharp {
                  gatsbyImageData(width: 50, height: 50, layout: FIXED)
                }
              }
            }
            category
            tags
          }
        }
      }
    }
  }
`
