import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import copylink from "../../../assets/img/copylink.svg"
import email from "../../../assets/img/email.svg"
import embed from "../../../assets/img/embed.svg"
import facebook from "../../../assets/img/facebook.svg"
import twitter from "../../../assets/img/twitter.svg"
import whatsapp from "../../../assets/img/whatsapp.svg"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import * as styles from "./memepage.module.scss"
const AboutUs = ({ data, location }) => {
  const edges = data.allImageSharp.edges || []
  return (
    <Layout>
      <SEO title="Memes" pathname={location.pathname} />
      <div className={styles.memePage}>
        <div className={styles.pageHeader}>
          <h2>Memes page</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={styles.container}>
          {edges.map(edge => {
            const memeImg = edge.node.gatsbyImageData
            return (
              <div className={styles.item}>
                <div className={styles.shareWidget}>
                  <input type="checkbox" />
                  <div className={styles.button}>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2.63L18.66 9L13 15.37V12V11H12C8.04 11 4.86 12 2.25 14.09C4.09 10.02 7.36 7.69 12.14 6.99L13 6.86V6V2.63ZM12 0V6C4.22 7.13 1.11 12.33 0 18C2.78 14.03 6.44 12 12 12V18L20 9L12 0Z"
                        fill="#465A69"
                      />
                    </svg>

                    <span>Share</span>
                  </div>
                  <ul>
                    <li>Share</li>
                    <li>
                      <a href="#">
                        <div className={styles.icon}>
                          <img src={whatsapp} />
                        </div>
                        <div className={styles.text}>Whatsapp</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className={styles.icon}>
                          <img src={facebook} />
                        </div>
                        <div className={styles.text}>Facebook</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className={styles.icon}>
                          <img src={twitter} />
                        </div>
                        <div className={styles.text}>Twitter</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className={styles.icon}>
                          <img src={email} />
                        </div>
                        <div className={styles.text}>Email</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className={styles.icon}>
                          <img src={copylink} />
                        </div>
                        <div className={styles.text}>Copy Link</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className={styles.icon}>
                          <img src={embed} />
                        </div>
                        <div className={styles.text}>Embed</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <GatsbyImage image={memeImg} alt={"meme1"} />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs

export const pageQuery = graphql`
  query {
    allImageSharp(filter: { fixed: { src: { regex: "/(meme).+/" } } }) {
      edges {
        node {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
