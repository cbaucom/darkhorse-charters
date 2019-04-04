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
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: `crbaucom`,
        apiKey: `767281128683257`,
        apiSecret: `8q_EqT3Tgn3patdXxKrSHJLUNOo`,
        maxResults: `500`,
        type: `upload`,
        resourceType: `image`,
        prefix: `crbaucom-images/`,
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
