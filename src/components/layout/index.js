import React from "react"
import { Link } from "gatsby"

import * as styles from "./layout.module.scss"
import Header from "../header"
import PinnedCard from "../pinnedCard"
import { BLOG_PATH } from "../../utils/typography"
const Layout = ({ children, showPinned }) => {
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
                  <Link to={`${BLOG_PATH}/aboutus/`}>About Compile7</Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/Compile7/compile7.github.io"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/Compile7/compile7.github.io"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://docs.google.com/forms/d/e/1FAIpQLSeqRCoeZReLJcVlbYdz0YxKRr0WKultDeZ-FXbRIm-bc5Vb-Q/viewform"
                    target="_blank"
                  >
                    Contact us
                  </Link>
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
