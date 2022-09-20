import { Link } from "gatsby"
import React from "react"
import { BLOG_PATH } from "../../utils/typography"
import "./header.scss"

export interface HeaderProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <header id="topnav" className={"head"}>
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
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
