/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"

import styles from "./bio.module.scss"

import { rhythm } from "../utils/typography"

import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"

const Bio = ({ author }) => {
  return (
    <Link class="card-author" to={`/author/${kebabCase(author.id)}/`}>
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
