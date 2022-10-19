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
                className="br-8"
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
                <ul>
                  <li>
                    <Link to="#" className="badge badge-analytics">
                      {node.frontmatter.tags[0]}
                    </Link>
                  </li>
                </ul>
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
                  <span className={styles.readingTime}>{5} min read</span>
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
