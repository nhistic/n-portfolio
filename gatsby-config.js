module.exports = {
  siteMetadata: {
    title: `nSite Portfolio`,
    description: `welcome to my portfolio site. situs ini berisi portfolio saya dan juga berisi tulisan, opini serta dokumentasi pribadi saya yang sedang belajar atau membagikan sesuatu.`,
    author: `@wadidin`,
    twitterUsername: "@wadidin",
    image: "./static/twitter-card.png",
    siteUrl: "https://wadidin.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `nSite Portfolio`,
        short_name: `nSite`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        icon: `src/assets/icon.svg`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-social-cards`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-215857642-1",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: process.env.API_URL || "http://localhost:1337",
        apiURL: process.env.API_URL || "https://nhistic-cms.herokuapp.com",
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`,`projects`, `blogs`],
        collectionTypes: [`jobs`,`projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
  ],
};
