module.exports = {
  siteMetadata: {
    title: `Welldone Software`,
    description: `Your fullstack secret sauce. Get your team to build amazing front-ends and rock-solid backends.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-144193631-1',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/welldone-favicon.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    // {
    //   resolve: "gatsby-source-prismic",
    //   options: {
    //     repositoryName: "welldone",
    //     accessToken:
    //       "MC5YRkE2N0JVQUFDWUFqal9v.77-977-977-9BwPvv71wS0hpCe-_vTkSKFI077-9KEzvv73vv71Hfu-_vS_vv73vv710Iu-_ve-_vQ",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
