import { graphql, Link } from "gatsby"
import React from "react"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { rhythm } from "../../utils/typography"

import * as styles from "../../templates/templates.module.scss"
import { DefaultImg } from "../../components/defaultImg"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

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
              <div class={styles.postBreadcrumb}>
                <a class="breadcrumb-link" href="#">
                  Products
                </a>

                <svg viewBox="0 0 18 27" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.397 25.426l13.143-11.5-13.143-11.5"
                    stroke-width="3"
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Link
                  to={`${BLOG_PATH}/category/${kebabCase(
                    post.frontmatter.category
                  )}/#posts`}
                  className={"breadcrumb-link"}
                >
                  <strong>{post.frontmatter.category}</strong>
                </Link>

                <a class="breadcrumb-link" href=""></a>
              </div>

              <h1 class={styles.title}>{post.frontmatter.title}</h1>

              <div class={styles.headerMeta}>
                <time datetime="2020-08-13">{post.frontmatter.date}</time>
                <span class="readingtime">
                  <svg
                    width="24"
                    height="10"
                    viewBox="0 0 24 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5.7998"
                      cy="5"
                      r="4"
                      stroke="#B8B8B8"
                      stroke-width="1.59999"
                      stroke-linecap="round"
                    ></circle>
                    <path
                      d="M9.65337 2.24106C9.23422 2.10134 8.78117 2.32787 8.64145 2.74702C8.50173 3.16617 8.72826 3.61922 9.14741 3.75894L9.65337 2.24106ZM14.4534 3.75894C14.8725 3.61922 15.099 3.16617 14.9593 2.74702C14.8196 2.32787 14.3666 2.10134 13.9474 2.24106L14.4534 3.75894ZM11.8004 3.8L11.5474 4.55894C11.7116 4.61368 11.8892 4.61368 12.0534 4.55894L11.8004 3.8ZM9.14741 3.75894L11.5474 4.55894L12.0534 3.04106L9.65337 2.24106L9.14741 3.75894ZM12.0534 4.55894L14.4534 3.75894L13.9474 2.24106L11.5474 3.04106L12.0534 4.55894Z"
                      fill="#B8B8B8"
                    ></path>
                    <path
                      d="M22.5996 5.79922L22.5996 4.19922"
                      stroke="#B8B8B8"
                      stroke-width="1.59999"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M1 5.79922L1 4.19922"
                      stroke="#B8B8B8"
                      stroke-width="1.59999"
                      stroke-linecap="round"
                    ></path>
                    <circle
                      cx="17.7998"
                      cy="5"
                      r="4"
                      stroke="#B8B8B8"
                      stroke-width="1.59999"
                      stroke-linecap="round"
                    ></circle>
                  </svg>
                  {"2"}
                </span>
                <a href="/resources/reports/" class="badge badge-reports">
                  {post.frontmatter.tags[0]}
                </a>
              </div>

              <Bio author={post.frontmatter.author} />
            </div>

            <div class={styles.headerImage}>
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
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
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
        category
        tags
      }
    }
  }
`
