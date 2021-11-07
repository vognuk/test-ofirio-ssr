module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ofiriotest",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-sass`,
     //This plugin exists only once but can consume an array of endpoints
    // {
      // resolve: 'gatsby-source-rest-api',
      // options: {
        // endpoints: [
          // `https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}`
          // `https://api.openweathermap.org/data/2.5/forecast?q=kyiv&appid=e04d5811cb452e53253fd27c4c26cb5f`
        // ],
      // },
    // },
  ],
};
