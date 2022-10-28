import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import { BLOG_PATH } from "../../utils/typography"
import Search from "../search"
import "./header.scss"

const Header = () => {
  return (
    <header id="topnav" className={"head"}>
      <StaticQuery
        query={graphql`
          query {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          <nav>
            <div className="head-inner">
              <div className="head-brand">
                <a className="head-logo" href="/">
                  Compile7
                </a>
                <span>|</span>
                <Link to={BLOG_PATH} className="head-blog-name">
                  Blog
                </Link>
                <Search searchIndex={data.siteSearchIndex.index} />
              </div>
            </div>
          </nav>
        )}
      />
    </header>
  )
}

export default Header
