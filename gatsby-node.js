const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Utilities
const kebabCase = require("lodash/kebabCase")
const BLOG_PATH = "/decompile"

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Templates
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const categoryTmpl = path.resolve(`./src/templates/category.js`)
  const authorTmpl = path.resolve(`./src/templates/author.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                authorId
              }
              frontmatter {
                title
              }
            }
          }
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `${BLOG_PATH}${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Extract tag data from query
  const categories = result.data.allMarkdownRemark.group
  // Make tag pages
  categories.forEach(category => {
    createPage({
      path: `${BLOG_PATH}/category/${kebabCase(category.fieldValue)}/`,
      component: categoryTmpl,
      context: {
        category: category.fieldValue,
      },
    })
  })

  // resolves from the query from 👆
  const authorSet = new Set()
  result.data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.fields.authorId) {
      authorSet.add(edge.node.fields.authorId)
    }
  })

  // create author's pages inside export.createPages:
  const authorList = Array.from(authorSet)
  authorList.forEach(author => {
    createPage({
      path: `${BLOG_PATH}/author/${kebabCase(author)}/`,
      component: authorTmpl,
      context: {
        authorId: author,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
      createNodeField({
        node,
        name: "authorId",
        value: node.frontmatter.author,
      })
    }
  }
}
