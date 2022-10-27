import { graphql, Link } from "gatsby"
import React from "react"

import kebabCase from "lodash/kebabCase"
import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BLOG_PATH } from "../../utils/typography"

import { GatsbyImage } from "gatsby-plugin-image"
import { DefaultImg } from "../../components/defaultImg"
import * as styles from "../../templates/templates.module.scss"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const img = post.frontmatter.coverImage
  return (
    <Layout location={location}>
      <SEO
        title={`${post.frontmatter.title} | Decompile`}
        description={post.frontmatter.description}
        image={
          img ? img.childImageSharp.gatsbyImageData.images.fallback.src : ""
        }
        pathname={post.fields.slug}
        article
      />
      <article className={styles.postContainer}>
        <header className={styles.header}>
          <div class={`${styles.headerContainer} container`}>
            <div class={styles.headerContent}>
              {post.frontmatter.tags && (
                <ul>
                  {post.frontmatter.tags.map(t => (
                    <li>
                      <Link
                        to={`${BLOG_PATH}/tags/${kebabCase(t)}/#posts`}
                        className="badge badge-analytics"
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <h1 class={styles.title}>{post.frontmatter.title}</h1>
              <div className={styles.meta}>
                <time datetime={post.frontmatter.date}>
                  {post.frontmatter.date}
                </time>
                <span className={styles.readingTime}>{2} min read</span>
              </div>
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
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
