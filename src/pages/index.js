import React, { useEffect } from "react"
import { navigate, Script } from "gatsby"
import { BLOG_PATH } from "../utils/typography"

export default () => {
  useEffect(() => {
    navigate(BLOG_PATH)
  }, [])
  return null
}
