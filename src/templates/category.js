import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagMenu from "../components/tagMenu"
import PostList from "../components/postList"

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
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author {
              id
              image {
                childImageSharp {
                  fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                  }
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
