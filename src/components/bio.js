/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import Image from "gatsby-image"
import React from "react"


import { BLOG_PATH } from "../utils/typography"

import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Bio = ({ author }) => {
  return (
    <Link class="card-author" to={`${BLOG_PATH}/author/${kebabCase(author.id)}/`}>
      <div class="card-author-image-wrap">
        <Image
          fixed={author.image.childImageSharp.fixed}
          alt={author.id}
          className="card-author-image"
          loading="lazy"
        />
      </div>
      <div class="card-author-content">
        <strong>{author.id}</strong>
      </div>
    </Link>
  )
}

export default Bio
