import { Link } from "gatsby"
import React from "react"
import Bio from "../bio"
import * as styles from "./postlist.module.scss"

import { GatsbyImage } from "gatsby-plugin-image"
import kebabCase from "lodash/kebabCase"
import { BLOG_PATH } from "../../utils/typography"
import { DefaultImg } from "../defaultImg"

const PostList = ({ posts, hideBio }) => {
  return (
    <div className={styles.postList}>
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug
        const author = node.frontmatter.author
        return (
          <article class="card post">
            <div className={styles.cardLink}>
              <Link
                to={BLOG_PATH + node.fields.slug.toLowerCase()}
                class="bf-post-link"
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

              <div className={styles.cardContent}>
                {node.frontmatter.tags && (
                  <ul class={styles.badgeWrap}>
                    <li>
                      <Link class={styles.bfBadge} to="#">
                        {node.frontmatter.tags[0]}
                      </Link>
                    </li>
                  </ul>
                )}
                <Link
                  to={BLOG_PATH + node.fields.slug.toLowerCase()}
                  class="bf-post-link"
                >
                  <h3 class="card-title">{title}</h3>
                </Link>
                <Link to={BLOG_PATH + node.fields.slug} class="bf-post-link">
                  <p>{node.frontmatter.description || node.excerpt}</p>
                </Link>

                <div className={styles.cardMeta}>
                  <time datetime={node.frontmatter.date}>
                    {node.frontmatter.date}
                  </time>
                  <span className={styles.readingTime}>{5} min read</span>
                </div>
              </div>
            </div>

            {!hideBio && <Bio author={author} />}
          </article>
        )
      })}
    </div>
  )
}

export default PostList
