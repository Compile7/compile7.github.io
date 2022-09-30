import { StaticImage } from "gatsby-plugin-image"
import React from "react"

// const random = Math.floor(Math.random()*100)
export function DefaultImg() {
  return <StaticImage src={`https://picsum.photos/600/400`} alt="Default Img" />
}
