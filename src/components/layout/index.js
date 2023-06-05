import { Link } from "gatsby"
import React, { useEffect } from "react"

import { BLOG_PATH } from "../../utils/typography"
import Header from "../header"
import PinnedCard from "../pinnedCard"
import * as styles from "./layout.module.scss"
const Layout = ({ children, showPinned }) => {
  useEffect(() => {
    const existingScript = document.getElementById("addthisScript")
    if (!existingScript) {
      const addThisScript = document.createElement("script")
      addThisScript.id = "addthisScript"
      addThisScript.src =
        "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-63689e864b6ef172"
      addThisScript.type = "text/javascript"
      document.body.appendChild(addThisScript)
    }
  }, [])
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
                  <Link to={`${BLOG_PATH}/about-us/`}>About Compile7</Link>
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
                    to="https://compile7.org/decompile/join-our-open-source-community-and-empower-developers-worldwide/"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://docs.google.com/forms/d/e/1FAIpQLSdiveXRxd5EfESvqCizKrKv1Qr01YuhEL_FdBOSWOZD1B0SUQ/viewform"
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
