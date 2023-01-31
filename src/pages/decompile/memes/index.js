import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import * as styles from "./memepage.module.scss"
const AboutUs = ({ data, location }) => {
  const edges = data.allFile.edges || []
  return (
    <Layout>
      <SEO title="Memes" pathname={location.pathname} />
      <div className={styles.memePage}>
        <div className={styles.pageHeader}>
          <h2>Memes</h2>
          <p>
            Memes created, shared, and enjoyed by developers. Hotlinking is
            fine..!
          </p>
        </div>
        <div className={styles.container}>
          {edges.map(edge => {
            const memeImg = edge.node.childImageSharp.gatsbyImageData
            return (
              <div className={styles.item}>
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
    allFile(filter: { sourceInstanceName: { eq: "memes" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
