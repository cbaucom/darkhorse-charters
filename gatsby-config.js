require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://darkhorsecharters.com`,
    title: `Dark Horse Fishing Charters Newburyport`,
    description: `Top Fishing Charters Newburyport, Massachusetts, offering fishing charters in and around Newburyport, Massachusetts for 1 to 6 people. FV Dark Horse fishes for giant bluefin tuna, cod, haddock, pollack, red fish, whiting, hake, ling, mackerel, herring, halibut, & dog fish.`,
    author: `Chris Baucom`,
    keywords: `darkhorse,
        fishing,
        charter,
        newburyport,
        massachusetts,
        tuna,
        bluefin tuna,
        bass,
        fish,
        newbury,
        gloucester,
        new england,
        commercial fishing,
        private charter,
        boat,
        boat charter,
        Haddock,
        Cod,
        Groundfish,
        6pack,
        Day boat,
        Local,
        big tuna`,
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1216313707`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `darkhorsecharters.wordpress.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: true,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        auth: {
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          // wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientSecret: process.env.WP_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WP_CLIENT_ID,
          wpcom_user: process.env.WP_USER,
          wpcom_pass: process.env.WP_PASS,
        },
        includedRoutes: ["**/media"],
        // Blacklisted routes using glob patterns
        excludedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `darkhorse-charters`,
        short_name: `Dark Horse Charters`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `minimal-ui`,
        icon: `src/images/darkhorse-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
