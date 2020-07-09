// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')

require('core-js')
require('regenerator-runtime')

const postcssPlugins = [tailwind(), autoprefixer()]

module.exports = {
  siteName: 'Futuro da Educação',
  siteUrl: 'https://distracted-goldwasser-bb0034.netlify.app',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  plugins: [
    {
      use: 'gridsome-plugin-modal'
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000 // default
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'AAA-123', //TODO: change
        enabled: false, //TODO: change
        debug: true //TODO: change
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
