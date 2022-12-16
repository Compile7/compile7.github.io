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
        <div className={styles.canvasWrap}>
          <div className={styles.canvas}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="page__nav-wrap">
              {post.frontmatter.previous && (
                <Link
                  className="page__nav page__nav_prev"
                  to={BLOG_PATH + "/" + post.frontmatter.previous + "/"}
                  title={post.frontmatter.prevLabel || "Previous"}
                >
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#757a7e"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              )}
              {post.frontmatter.next && (
                <Link
                  className="page__nav page__nav_next"
                  to={BLOG_PATH + "/" + post.frontmatter.next + "/"}
                  title={post.frontmatter.nextLabel || "Next"}
                >
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18.5L15 12.5L9 6.5"
                      stroke="#757a7e"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
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
      <div
        className={
          post.relatedPosts.length == 1
            ? `${styles.footerTop} grid-33`
            : `${styles.footerTop} grid-33 no-sidebar`
        }
      >
        {/* <div className={styles.block}>
                <h4>Did this doc help you?</h4>
                <ul>
                  <li className="{styles.up}">
                    <Link target="_blank" to="/" title="Yes">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 131 115.2"
                      >
                        <title>Yes</title>
                        <path
                          className={styles.st0}
                          d="M3.1,76.8c0-7.8,0.1-15.6,0-23.4c0-2.6,0.8-3.5,3.4-3.4c6.5,0.2,13-0.1,19.5,0.1c7.1,0.2,12.9-2.4,17.9-7.3
                                c12-12,24.1-23.9,36.1-35.9c3.3-3.3,6.7-4.8,11.1-2.9c4.4,1.9,5.8,5.5,5.8,10.1c0,6.8-2.6,12.9-5.2,19.1c-3.7,9-3.6,9,6.1,9
                                c6,0,12,0,18,0c8.5,0.1,14.3,7,11.8,15c-5,16-10.5,31.9-15.9,47.8c-1.4,4.1-4.7,7-8.9,7c-14.8-0.1-29.6,1.4-44.3-0.9
                                c-7.5-1.2-14.3-5.3-22-6.1c-9.6-1.1-19.3-0.5-28.9-0.5c-3.6,0-4.5-1.1-4.4-4.5C3.2,92.1,3.1,84.4,3.1,76.8z"
                        ></path>
                      </svg>{" "}
                    </Link>
                  </li>
                  <li className="{styles.down}">
                    <Link target="_blank" to="/" title="No">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 131 115.2"
                      >
                        <title>No</title>
                        <path
                          className={styles.st1}
                          d="M127.9,38.4c0,7.8-0.1,15.6,0,23.4c0,2.6-0.8,3.5-3.4,3.4c-6.5-0.2-13,0.1-19.5-0.1c-7.1-0.2-12.9,2.4-17.9,7.3
                                c-12,12-24.1,23.9-36.1,35.9c-3.3,3.3-6.7,4.8-11.1,2.9c-4.4-1.9-5.8-5.5-5.8-10.1c0-6.8,2.6-12.9,5.2-19.1c3.7-9,3.6-9-6.1-9
                                c-6,0-12,0-18,0c-8.5-0.1-14.3-7-11.8-15c5-16,10.5-31.9,15.9-47.8c1.4-4.1,4.7-7,8.9-7C43.2,3.5,58,2,72.7,4.3
                                c7.5,1.2,14.3,5.3,22,6.1c9.6,1.1,19.3,0.5,28.9,0.5c3.6,0,4.5,1.1,4.4,4.5C127.7,23.1,127.9,30.8,127.9,38.4z"
                        ></path>
                      </svg>{" "}
                    </Link>
                  </li>
                </ul>
              </div> */}
        <div className={styles.block}>
          <h4>Need help?</h4>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSdiveXRxd5EfESvqCizKrKv1Qr01YuhEL_FdBOSWOZD1B0SUQ/viewform"
            target="_blank"
          >
            Contact us
          </Link>
        </div>
        <div className={styles.block}>
          <h4>Help us make these docs great!</h4>
          <p>
            All Compile7 docs are open source. See something that's wrong or
            unclear? Submit a pull request
          </p>
          <Link
            target="_blank"
            to={`https://github.com/Compile7/compile7.github.io/blob/main/content${post.fields.slug}/index.md`}
          >
            Make a Contribution
          </Link>
        </div>
      </div>
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
        prevLabel
        nextLabel
      }
    }
  }
`
