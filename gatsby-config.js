console.log(__dirname);

module.exports = {
  siteMetadata: {
    title: `Christian Valdez`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@unchartedzone`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'yelp',
        fieldName: 'yelp',
        url: 'https://api.yelp.com/v3/graphql',
        headers: {
          Authorization:
            'Bearer HWWQejjo7oR39quvor1S88OxzSiwMrtkrHU5NRwtirE7UXTgG8o-2jl7vml6B1gW16nngi6UbNQ67U-A5dkDz2l9UhUxPVEYkID86U1ppqf4_p-I3JUGTzBRdPN3X3Yx',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
