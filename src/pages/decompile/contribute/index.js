import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import * as styles from "./contribute.module.scss"
import * as pinnedcard from "../../../components/pinnedCard/pinnedcard.module.scss"
import Hero from "../../../assets/img/hero.png"
import ContributeKnowledge from "../../../assets/img/contribute-knowledge.png"
import WhyC7 from "../../../assets/img/why-compile7.png"
import HowToStart from "../../../assets/img/how-to-start.png"
import React from "react"

const Contribute = () => {
  return (
    <Layout>
      <SEO title="Contribute" pathname={location.pathname} />
      <div className={styles.contributePage}>
        <section className={`${pinnedcard.pinnedwrap} py-80`}>
          <div>
            <div className={styles.pinnedImage}>
              <img src={Hero} />
            </div>
            <div className={pinnedcard.blogContentPinned}>
              <div className={pinnedcard.descriptionPinned}>
                <h1>Contribute to Open Source and Make a Difference</h1>
                <p>
                  Make Anything Open Source, Not Just Code
                  <br />
                  Why Not Open Source Your Technical and Coding Knowledge?
                  <br />
                  And Help Developers Globally..?
                </p>
                <a href="#" className={styles.btnWithIcon}>
                  Write Your Blog Post
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
              <div className={styles.ghostBtn}>
                <a
                  href="https://github.com/Compile7/compile7.github.io/blob/main/GUIDELINES.md"
                  target="_blank"
                >
                  Guidelines
                </a>
                <a
                  href="https://github.com/Compile7/compile7.github.io/blob/main/CONTRIBUTING.md"
                  target="_blank"
                >
                  Contribute
                </a>
              </div>
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
                <li>Get started with our contributing guidelines</li>
                <li>
                  You can contribute anything — including originally-written
                  articles, improving existing content, and writing code for our
                  projects — as long as you add positive value.
                </li>
                <li>
                  Any questions or need help getting started? Start a new
                  discussion or an issue. One of our maintainers will help you
                  out. We're a friendly bunch fostering a collaborative global
                  community.
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="py-80">
          <div>
            <div className={styles.cta}>
              <div>
                <h2>What are you waiting for?</h2>
                <p>You're one step closer to sharing your knowledge</p>
              </div>
              <a href="#" className={styles.btnWithIcon}>
                Contribute Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Contribute
