import React from "react"

import { graphql, Link, StaticQuery } from "gatsby"

import kebabCase from "lodash/kebabCase"

import * as styles from "./pinnedcard.module.scss"

import { GatsbyImage } from "gatsby-plugin-image"
import { BLOG_PATH } from "../../utils/typography"
import Bio from "../bio"
import { DefaultImg } from "../defaultImg"

const PinnedCard = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1
          ) {
            edges {
              node {
                frontmatter {
                  title
                  tags
                  description
                  date(formatString: "MMM DD, YYYY")
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
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const node = data.allMarkdownRemark.edges[0].node
        return (
          <section className={`${styles.pinnedwrap} py-80`}>
            <div className={styles.blogContentPinned}>
              <Link
                to={BLOG_PATH + node.fields.slug.toLowerCase()}
                className="bs-md"
              >
                {node.frontmatter.coverImage ? (
                  <GatsbyImage
                    image={
                      node.frontmatter.coverImage.childImageSharp
                        .gatsbyImageData
                    }
                    alt={node.frontmatter.title}
                    loading="lazy"
                  />
                ) : (
                  <DefaultImg />
                )}
              </Link>

              <div className={styles.descriptionPinned}>
                <div className={styles.breadcrumb}>
                  <Link className="gh-breadcrumb-link" to="/">
                    Products
                  </Link>

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
                      node.frontmatter.category
                    )}`}
                  >
                    <strong>{node.frontmatter.category}</strong>{" "}
                  </Link>
                </div>
                <h1>
                  <Link to={BLOG_PATH + node.fields.slug.toLowerCase()}>
                    {node.frontmatter.title || node.fields.slug}
                  </Link>
                </h1>
                <p
                  className={`${styles.descriptiontext} ${styles.pinned}`}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <div className={styles.meta}>
                  <time datetime={node.frontmatter.date}>
                    {node.frontmatter.date}
                  </time>
                  <span>
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
                    {5}
                  </span>
                  <Link to="#" className="badge badge-analytics">
                    {node.frontmatter.tags[0]}
                  </Link>
                </div>
                {node.frontmatter.author && (
                  <Bio
                    date={node.frontmatter.date}
                    author={node.frontmatter.author}
                  />
                )}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default PinnedCard
