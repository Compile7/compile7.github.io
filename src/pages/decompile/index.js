import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import PostList from "../../components/postList"
import SEO from "../../components/seo"
import TagMenu from "../../components/tagMenu"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} showPinned>
      <SEO title="All posts" />
      <TagMenu />
      <PostList posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            date(formatString: "MMM DD, YYYY")
            title
            description
            category
            tags
            author {
              id
              image {
                childImageSharp {
                  fixed(width: 35, height: 35) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
