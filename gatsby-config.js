module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "kevin-website-portfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 450
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
  ],
};
