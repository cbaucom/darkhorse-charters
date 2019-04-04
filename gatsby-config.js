module.exports = {
  siteMetadata: {
    title: `Dark Horse Charters`,
    description: `Dark Horse Fishing Charters offers fishing charters in and around Newburyport, Massachusetts. Book your charter for 2019 today!`,
    author: `Chris Baucom`,
  },
  plugins: [
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
        username: `fvdarkhorse`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: `crbaucom`,
    //     apiKey: `767281128683257`,
    //     apiSecret: `8q_EqT3Tgn3patdXxKrSHJLUNOo`,
    //     maxResults: `500`,
    //     type: `upload`,
    //     resourceType: `image`,
    //     prefix: `crbaucom-images/`,
    //   },
    // },
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
          wpcom_app_clientSecret:
            "V0stgjCe8srzTXy4BLnlnJ9KEHxiWV9kJamjinLlfBhrfCkxTo8i3mvGi9PUiBYT",
          wpcom_app_clientId: "65266",
          wpcom_user: "george@abenakitimber.com",
          // wpcom_pass: process.env.WORDPRESS_PASSWORD.
          wpcom_pass: "Rebecca6242017",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `darkhorse-charters`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/darkhorse-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
