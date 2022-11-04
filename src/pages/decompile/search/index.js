import { graphql, Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { Index } from "elasticlunr"
import Layout from "../../../components/layout"
import * as styles from "./searchpage.module.scss"
import { BLOG_PATH } from "../../../utils/typography"
import SEO from "../../../components/seo"

const SearchPage = ({ data, location }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const dataIndex = data.siteSearchIndex.index

  useEffect(() => {
    const query = location.href.split("?")[1]
    if (query) {
      const index = Index.load(dataIndex)
      let searchParams = new URLSearchParams(query)
      const queryString = searchParams.get("query")
      setQuery(queryString)
      setResults(
        index
          .search(queryString, { expand: true })
          .map(({ ref }) => index.documentStore.getDoc(ref))
      )
    } else {
      navigate("/decompile")
    }
  }, [])
  useEffect(() => {
    const query = location.href.split("?")[1]
    const index = Index.load(dataIndex)
    let searchParams = new URLSearchParams(query)
    const queryString = searchParams.get("query")
    setQuery(queryString)
    setResults(
      index
        .search(queryString, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref))
    )
  }, location.href)

  return (
    <Layout>
      <SEO
        title={`Search Results for - ${query} | Decompile`}
        description={`Search Results for - ${query}`}
        pathname={location.pathname}
      />
      {results.length ? (
        <section className="py-96">
          <div className={styles.searchContent}>
            <h2>Search results for: "{query}"</h2>

            {results.map(page => (
              <div key={page.id}>
                <h3>
                  <Link to={BLOG_PATH + page.slug}>{page.title}</Link>
                </h3>
                <p>{page.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-96">
          <div className={styles.searchContent}>
            <h2>Search results for: "{query}"</h2>

            <div>
              <h3>There are no matches for your search, please try again.</h3>
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

export default SearchPage

export const pageQuery = graphql`
  query SearchIndex {
    siteSearchIndex {
      index
    }
  }
`
