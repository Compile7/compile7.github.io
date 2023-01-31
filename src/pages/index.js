import React, { useEffect } from "react"
import { navigate, Script } from "gatsby"
import { BLOG_PATH } from "../utils/typography"

export default () => {
  useEffect(() => {
    navigate(BLOG_PATH)
  }, [])
  return (
    <Script
      type="text/javascript"
      src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-63689e864b6ef172"
    />
  )
}
