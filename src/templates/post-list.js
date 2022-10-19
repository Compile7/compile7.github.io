import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PostList from "../components/postList"
import SEO from "../components/seo"
import TagMenu from "../components/tagMenu"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} showPinned>
      <SEO title="All posts" />
      <TagMenu group={data.allMarkdownRemark.group} />
      <PostList posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            tags
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
          }
        }
      }
    }
  }
`
