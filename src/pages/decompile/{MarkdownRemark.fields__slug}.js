import { graphql, Link } from "gatsby"
import React from "react"

import kebabCase from "lodash/kebabCase"
import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BLOG_PATH, rhythm } from "../../utils/typography"

import { GatsbyImage } from "gatsby-plugin-image"
import { DefaultImg } from "../../components/defaultImg"
import * as styles from "../../templates/templates.module.scss"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className={styles.postContainer}>
        <header className={styles.header}>
          <div class={`${styles.headerContainer} container`}>
            <div class={styles.headerContent}>
              <ul>
                <li>
                  <Link
                    to="/resources/reports/"
                    className="badge badge-analytics"
                  >
                    {post.frontmatter.tags[0]}
                  </Link>
                </li>
              </ul>
              <h1 class={styles.title}>{post.frontmatter.title}</h1>
              <div className={styles.meta}>
                <time datetime={post.frontmatter.date}>
                  {post.frontmatter.date}
                </time>
                <span className={styles.readingTime}>{2} min read</span>
              </div>
              {/* <div class={styles.headerMeta}>
                <time datetime="2020-08-13">{post.frontmatter.date}</time>
                <span className={styles.readingTime}>{2} min read</span>
              </div> */}

              <Bio author={post.frontmatter.author} />
            </div>

            <div className={`${styles.headerImage} br-8`}>
              {post.frontmatter.coverImage ? (
                <GatsbyImage
                  image={
                    post.frontmatter.coverImage.childImageSharp.gatsbyImageData
                  }
                  alt={post.frontmatter.title}
                  loading="lazy"
                />
              ) : (
                <DefaultImg />
              )}
            </div>
          </div>
        </header>
        <div
          className={styles.canvas}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 600, placeholder: BLURRED)
          }
        }
        author {
          jsonId
          bio
          image {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50, layout: FIXED)
            }
          }
        }
        tags
      }
    }
  }
`
