import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import { BLOG_PATH } from "../utils/typography"
import * as styles from "./bio.module.scss"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Bio = ({ author }) => {
  return (
    <Link
      class="card-author"
      to={`${BLOG_PATH}/author/${kebabCase(author.jsonId)}/`}
    >
      <div class="card-author-image-wrap">
        <GatsbyImage
          image={author.image.childImageSharp.gatsbyImageData}
          alt={author.jsonId}
          className={styles.cardAuthorImage}
          loading="lazy"
        />
      </div>
      <div class="card-author-content">
        <strong>{author.jsonId}</strong>
      </div>
    </Link>
  )
}

export default Bio
