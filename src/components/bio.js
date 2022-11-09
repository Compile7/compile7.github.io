import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import { BLOG_PATH } from "../utils/typography"
import * as styles from "./bio.module.scss"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Bio = ({ author }) => {
  const githubUrl = author.github
    ? `https://github.com/${author.github}.png?size=50`
    : `https://ui-avatars.com/api/?name=${author.jsonId}&size=50`
  return (
    <Link
      class="card-author"
      to={`${BLOG_PATH}/author/${kebabCase(author.jsonId)}/`}
    >
      <div class="card-author-image-wrap">
        {author.image ? (
          <GatsbyImage
            image={author.image.childImageSharp.gatsbyImageData}
            alt={author.jsonId}
            className={styles.cardAuthorImage}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.cardAuthorImage}
            src={githubUrl}
            alt={author.jsonId}
          />
        )}
      </div>
      <div class="card-author-content">
        <strong>{author.jsonId}</strong>
      </div>
    </Link>
  )
}

export default Bio
