require("dotenv").config({ path: `${__dirname}/.env` })

module.exports = {
  siteMetadata: {
    title: `Compile7 Blog`,
    description: `Compile7 is a developer platform by developers.`,
    siteUrl: `https://www.compile7.com`,
    keywords: `Compile7, Decompile, Developers, Blog for developers, Learn, Contribute, Opensource, Community, Programming, Technology, Free learning, Engineering, Free for developers, Learn to code, Learn for free, Learn new things, Find,Connect, Build, Join a developer community today, software development, rails, javascript, ruby`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: `/decompile/blog`,
}
