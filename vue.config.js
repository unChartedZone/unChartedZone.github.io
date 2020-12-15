const path = require('path')

module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
				@import "@/scss/main.scss";
			  `,
      },
    },
  },
}
