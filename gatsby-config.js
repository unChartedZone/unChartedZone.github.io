module.exports = {
  siteMetadata: {
    title: `Christian Valdez`,
    description: `Full Stack Developer`,
    author: `@unchartedzone`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
