import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import * as styles from "./contribute.module.scss"
import Hero from "../../../assets/img/hero.png"
import ContributeKnowledge from "../../../assets/img/contribute-knowledge.png"
import WhyC7 from "../../../assets/img/why-compile7.png"
import HowToStart from "../../../assets/img/how-to-start.png"

const Contribute = ({ location }) => {
  return (
    <Layout>
      <SEO title="Contribute" pathname={location.pathname} />
      <div className={styles.contributePage}>
        <section className={`${styles.pinnedwrap} pb-80`}>
          <div className={styles.blogContentPinned}>
            <div className={styles.pinnedImage}>
              <img src={Hero} />
            </div>
            <div className={styles.blogContentPinned}>
              <div className={styles.descriptionPinned}>
                <h1>Contribute to Open Source and Make a Difference</h1>
                <p>
                  Make Anything Open Source, Not Just Code
                  <br />
                  Why Not Open Source Your Technical and Coding Knowledge?
                  <br />
                  And Help Developers Globally..?
                </p>
                <a
                  href="https://github.com/Compile7/compile7.github.io/blob/main/GUIDELINES.md"
                  target="_blank"
                  className={styles.btnWithIcon}
                >
                  Write Your Blog Post{" "}
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3636 11.4205L11.1932 10.2557L14.6989 6.75569H0V5.06251H14.6989L11.1932 1.55683L12.3636 0.397736L17.875 5.9091L12.3636 11.4205Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.contributeSection} ${styles.odd} py-80`}>
          <div>
            <div className={styles.cardImage}>
              <img src={WhyC7} />
            </div>
            <div className={styles.cardDescription}>
              <h2>Why Contribute Knowledge and Know-How to Open Source?</h2>
              <h5>“While we teach, we learn.” — Seneca</h5>
              <p>
                When you share your knowledge, you learn better and establish
                yourself as a knowledgeable, thoughtful developer open to
                contributing and collaborating — attracting potential employers,
                founding partners, and networking opportunities.
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.contributeSection} ${styles.even} py-80`}>
          <div>
            <div className={styles.cardImage}>
              <img src={ContributeKnowledge} />
            </div>
            <div className={styles.cardDescription}>
              <h2>Why Contribute to Compile7.Org?</h2>
              <p>
                Compile7 lives on GitHub as an open source community consisting
                of numerous projects, including a Blog publication dedicated to
                serving developers worldwide with interesting tutorials and
                expert opinions, eventually helping them grow and improve.
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.contributeSection} ${styles.odd} py-80`}>
          <div>
            <div className={styles.cardImage}>
              <img src={HowToStart} />
            </div>
            <div className={styles.cardDescription}>
              <h2>How to Start?</h2>
              <ol>
                <li>
                  Get started with our contributing{" "}
                  <a
                    href="https://github.com/Compile7/compile7.github.io/blob/main/CONTRIBUTING.md"
                    target="_blank"
                  >
                    guidelines
                  </a>
                </li>
                <li>
                  You can contribute anything — including originally-written
                  articles, improving existing content, and writing code for our
                  projects — as long as you add positive value.
                </li>
                <li>
                  Any questions or need help getting started? Start a new
                  <a
                    href="https://github.com/Compile7/compile7.github.io/discussions"
                    target="_blank"
                  >
                    {" "}
                    discussion
                  </a>{" "}
                  or an{" "}
                  <a
                    href="https://github.com/Compile7/compile7.github.io/issues"
                    target="_blank"
                  >
                    issue
                  </a>
                  . One of our maintainers will help you out. We're a friendly
                  bunch fostering a collaborative global community.
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="pt-80">
          <div>
            <div className={styles.cta}>
              <div>
                <h2>What are you waiting for?</h2>
                <p>You're one step closer to sharing your knowledge</p>
              </div>
              <a
                href="https://github.com/Compile7/compile7.github.io/blob/main/CONTRIBUTING.md"
                target="_blank"
                className={styles.btnWithIcon}
              >
                Contribute Now{" "}
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3636 11.4205L11.1932 10.2557L14.6989 6.75569H0V5.06251H14.6989L11.1932 1.55683L12.3636 0.397736L17.875 5.9091L12.3636 11.4205Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Contribute
