import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import * as styles from "./tagmenu.module.scss"

// Utilities
import kebabCase from "lodash/kebabCase"
import { BLOG_PATH } from "../../utils/typography"

const TagMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            group(field: frontmatter___tags) {
              category: fieldValue
              totalCount
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { group } }) => {
        group.sort((t1, t2) => {
          return t2.totalCount - t1.totalCount
        })
        return (
          <div className={styles.navWrapper}>
            <nav class={styles.navWrapperScroll}>
              <Link to={`${BLOG_PATH}/#posts`} getProps={props => setActive(props, "")}>
                {"Latest Updates"}
              </Link>
              {group.slice(0, 10).map((item, index) => (
                <Link
                  key={`cat_${index}`}
                  to={`${BLOG_PATH}/tags/${kebabCase(item.category)}/#posts`}
                  getProps={props => setActive(props, item.category)}
                >
                  {item.category}
                </Link>
              ))}
            </nav>
          </div>
        )
      }}
    />
  )
}

const setActive = ({ location: { pathname } }, catg) => {
  if (catg) {
    return {
      className: pathname.includes(kebabCase(catg)) ? styles.active : "",
    }
  } else if (pathname === "/") {
    return { className: styles.active }
  }
}

export default TagMenu
