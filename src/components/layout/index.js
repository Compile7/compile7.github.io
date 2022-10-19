import React from "react"
import { Link } from "gatsby"

import * as styles from "./layout.module.scss"
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
          <div>
            <div className={styles.footerLink}>
              <ul>
                <li>
                  <Link to="#">About Compile7</Link>
                </li>
                <li>
                  <Link to="https://github.com/Compile7/compile7.github.io">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/Compile7/compile7.github.io">
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCopyright}>
              © {new Date().getFullYear()}, Compile7 Blog
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
