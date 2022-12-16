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
  const img = data.allMarkdownRemark.edges[0].node.frontmatter.coverImage

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={`${category} - Tag | C7 Blog`}
        description={`Posts related to ${category}`}
        image={img ? img.childImageSharp.gatsbyImageData.images.fallback.src : ""}
        pathname={location.pathname}
        meta={{
          name: "googlebot",
          content: "noindex"
        }}
      />
      <TagMenu group={data.allMarkdownRemark.group} />
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
      filter: { frontmatter: { tags: { in: [$category] } } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
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
              github
            }
            tags
          }
        }
      }
    }
  }
`
