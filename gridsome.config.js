// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind(),
]

module.exports = {
  siteName: 'Privacy Dynamics',
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    },
    { use: 'gridsome-plugin-netlify-cms-paths'},
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'site/pages/*.md',
        typeName: 'Pages',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'site/settings.md',
        typeName: 'Settings',
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  css: {
      loaderOptions: {
          postcss: {
              plugins: postcssPlugins,
          },
      },
  },
}