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
  const author = post.frontmatter.author
  const githubUrl = author.github
    ? `https://github.com/${author.github}.png?size=100`
    : `https://ui-avatars.com/api/?name=${author.jsonId}&size=100`
  return (
    <Layout location={location}>
      <SEO
        title={`${post.frontmatter.title} | C7 Blog`}
        description={post.frontmatter.description}
        image={
          img ? img.childImageSharp.gatsbyImageData.images.fallback.src : ""
        }
        pathname={location.pathname}
        article
      />
      <article className={styles.postContainer}>
        <header className={styles.header}>
          <div className={`${styles.headerContainer} container`}>
            <div className={styles.headerContent}>
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
              <h1 className={styles.title}>{post.frontmatter.title}</h1>
              <div className={styles.meta}>
                <time datetime={post.frontmatter.date}>
                  {post.frontmatter.date}
                </time>
                <span className={styles.readingTime}>
                  {post.timeToRead} min read
                </span>
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
        <div className={`d-flex flex-wrap`}>
          <div className={styles.canvas}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className={`${styles.detailAuthor} d-flex`}>
              <div className={styles.authorImage}>
                <Link to={`${BLOG_PATH}/author/${kebabCase(author.jsonId)}/`}>
                  {author.image ? (
                    <GatsbyImage
                      image={author.image.childImageSharp.gatsbyImageData}
                      alt={author.jsonId}
                      className={`circle extra-large p-2`}
                      loading="lazy"
                    />
                  ) : (
                    <img
                      className={`circle extra-large`}
                      src={githubUrl}
                      alt={author.jsonId}
                    />
                  )}
                </Link>
              </div>
              <div className={`${styles.aboutAuthor} pt-5`}>
                <div className={styles.aboutAuthorInner}>
                  <h3>
                    Written by&nbsp;
                    <Link
                      to={`${BLOG_PATH}/author/${kebabCase(author.jsonId)}/`}
                    >
                      <i>{author.jsonId}</i>
                    </Link>
                  </h3>
                  <p>{author.bio}</p>
                </div>
              </div>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", paddingTop: "3em" }}
            >
              {post.frontmatter.previous && (
                <Link to={BLOG_PATH + "/" + post.frontmatter.previous}>
                  <p>{"Previous"}</p>
                </Link>
              )}
              {post.frontmatter.next && (
                <Link to={BLOG_PATH + "/" + post.frontmatter.next}>
                  <p>{"Next"}</p>
                </Link>
              )}
            </div>
          </div>

          {post.relatedPosts.length ? (
            <div className={styles.relatedPost}>
              <h3>Related Posts</h3>
              <ul>
                {post.relatedPosts.map((p, i) => (
                  <li>
                    <Link to={BLOG_PATH + p.fields.slug} rel="prev">
                      {p.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      relatedPosts {
        frontmatter {
          title
        }
        fields {
          slug
        }
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
              gatsbyImageData(width: 100, height: 100, layout: FIXED)
            }
          }
          github
        }
        tags
        previous
        next
      }
    }
  }
`
