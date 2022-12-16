require("dotenv").config({ path: `${__dirname}/.env` })

module.exports = {
  siteMetadata: {
    title: `C7 Blog | A Place for Developers to Learn and Contribute`,
    description: `Compile7 Blog is a place for developers to learn and contribute. We publish interesting dev blogs and tutorials. Compile7 is an open source project on GitHub and is maintained by developers.`,
    siteUrl: `https://compile7.org`,
    keywords: `Compile7, Decompile, Developers, Blog for Developers, Coding, Contribute, Open Source, Dev Community, Programming, Engineering, Join a developer community today, Node, Git, JavaScript, React`,
    image: `/default-image.png`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    { resolve: `gatsby-plugin-feed`, options: { feeds: [] } },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A Decompile Blog`,
        short_name: `Decompile`,
        start_url: `/decompile`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `text`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug.toLowerCase(),
            text: node => node.frontmatter.description,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:300,400,400i,700`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ["/decompile/tags/**"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://compile7.org",
        sitemap: "https://compile7.org/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "Googlebot", allow: "/" }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
