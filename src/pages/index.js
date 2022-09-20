import { useEffect } from "react"
import { navigate } from "gatsby"
import { BLOG_PATH } from "../utils/typography"

export default () => {
  useEffect(() => {
    navigate(BLOG_PATH)
  }, [])
  return null
}
