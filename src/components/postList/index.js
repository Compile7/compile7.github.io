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
            <div class="card-link">
              <Link
                to={BLOG_PATH + node.fields.slug.toLowerCase()}
                class="bf-post-link"
              >
                {node.frontmatter.coverImage ? (
                  <GatsbyImage
                    image={node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                    alt={node.frontmatter.title}
                    loading="lazy"
                  />
                ) : (
                  <DefaultImg />
                )}
              </Link>

              <div class="card-breadcrumb">
                <Link class="breadcrumb-link" to="/">
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
                  class="breadcrumb-link"
                  to={`${BLOG_PATH}/category/${kebabCase(
                    node.frontmatter.category
                  )}/`}
                >
                  <strong>{node.frontmatter.category}</strong>
                </Link>
              </div>

              <div class="card-content">
                <Link
                  to={BLOG_PATH + node.fields.slug.toLowerCase()}
                  class="bf-post-link"
                >
                  <h3 class="card-title">{title}</h3>
                </Link>
                <div class="card-meta">
                  <time datetime={node.frontmatter.date}>
                    {node.frontmatter.date}
                  </time>
                  <span class="bf-readingtime">
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
                    </svg>{" "}
                    {5}
                  </span>

                  {node.frontmatter.tags && (
                    <Link class="bf-badge bf-badge-reports" to="#">
                      {node.frontmatter.tags[0]}
                    </Link>
                  )}
                </div>
                <Link to={BLOG_PATH + node.fields.slug} class="bf-post-link">
                  <p>{node.frontmatter.description || node.excerpt}</p>
                </Link>
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
