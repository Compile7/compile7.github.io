const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Utilities
const kebabCase = require("lodash/kebabCase")
const BLOG_PATH = "/decompile/"

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          totalCount
          edges {
            node {
              id
            }
          }
          group(field: frontmatter___tags) {
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
  // const postsPerPage = 9
  // const total = result.data.allMarkdownRemark.totalCount
  // const numPages = Math.ceil(total / postsPerPage)
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `${BLOG_PATH}` : `${BLOG_PATH}${i + 1}`,
  //     component: path.resolve(`./src/templates/post-list.js`),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       currentPage: i + 1,
  //       numPages: numPages,
  //     },
  //   })
  // })

  // Create blog posts pages.
  // const total = result.data.allMarkdownRemark.totalCount
  // createPage({
  //   path: BLOG_PATH,
  //   component: path.resolve(`./src/templates/post-list.js`),
  // })

  // Extract tag data from query
  const categories = result.data.allMarkdownRemark.group
  // Make tag pages
  categories.forEach(category => {
    createPage({
      path: `${BLOG_PATH}tags/${kebabCase(category.fieldValue)}/`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        category: category.fieldValue,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      coverImage: File @fileByRelativePath
      author: AuthorJson @link(by: "jsonId")
    }
  `
  createTypes(typeDefs)
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
  }
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    MarkdownRemark: {
      relatedPosts: {
        type: ["MarkdownRemark"],
        resolve: (source, args, context, info) => {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                id: {
                  ne: source.id,
                },
                frontmatter: {
                  tags: {
                    in: source.frontmatter.tags,
                  },
                },
              },
            },
            type: "MarkdownRemark",
          })
        },
      },
    },
  }

  createResolvers(resolvers)
}
