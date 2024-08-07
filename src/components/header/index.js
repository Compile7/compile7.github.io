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
                <div className="logo">
                  <a className="head-logo" href="/">
                    Compile7
                  </a>
                  <span>|</span>
                  <Link to={BLOG_PATH} className="head-blog-name">
                    Blog
                  </Link>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      {" "}
                      <Link to={`${BLOG_PATH}/memes/`}>Memes</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="https://gracker.ai/">
                        Organic Growth for Cybersecurity Companies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Search searchIndex={data.siteSearchIndex.index} />
            </div>
          </nav>
        )}
      />
    </header>
  )
}

export default Header
