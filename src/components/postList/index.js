import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Bio from "../bio"
import * as styles from "./postlist.module.scss"

import { GatsbyImage } from "gatsby-plugin-image"
import kebabCase from "lodash/kebabCase"
import { BLOG_PATH } from "../../utils/typography"
import { DefaultImg } from "../defaultImg"

const PostList = ({ posts, hideBio }) => {
  const [list, setList] = useState([...posts.slice(0, 9)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(posts.length > 10)
  const handleLoadMore = () => {
    setLoadMore(true)
  }
  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 9)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])
  //Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list])

  return (
    <>
      <div className={styles.postList}>
        {list.map(({ node }, index) => {
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
                      {node.frontmatter.tags.map(t => (
                        <li>
                          <Link
                            to={`${BLOG_PATH}/tags/${kebabCase(t)}/#posts`}
                            class={styles.bfBadge}
                          >
                            {t}
                          </Link>
                        </li>
                      ))}
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
                    <span className={styles.readingTime}>
                      {node.timeToRead} min read
                    </span>
                  </div>
                </div>
              </div>

              {!hideBio && <Bio author={author} />}
            </article>
          )
        })}
      </div>
      <div>
        <br />
        {hasMore ? (
          <button onClick={handleLoadMore}>
            <b>Load More...</b>
          </button>
        ) : null}
      </div>
    </>
  )
}

export default PostList
