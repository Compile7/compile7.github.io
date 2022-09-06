import React from "react"
import { Link } from "gatsby"

import styles from "./layout.module.scss"
import Header from "../header"
import PinnedCard from "../pinnedCard"

const Layout = ({ location, title, children, showPinned }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <>
      <Header />
      {showPinned && <PinnedCard />}
      <div className={styles.container} id="posts">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
