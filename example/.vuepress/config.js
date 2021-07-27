const path = require('path');

module.exports = {
  title: 'example blog',
  description: 'a great blog template',

  // 使用本地主题
  theme: require.resolve('../../theme/'),

  // 主题配置
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tag', link: '/tag' },
      { text: 'Archive', link: '/archives' },
      { text: 'About', link: '/about' },
      {
        text: '🔥 Github',
        link: 'https://github.com/FrankFan/vuepress-theme-quiet',
      },
    ],
    copyright: `© vuepress-theme-quiet ${new Date().getFullYear()} ❤️🧡💚💛💜💙`,
    additionalPages: [
      {
        path: '/about/',
        filePath: path.resolve(__dirname, '../about/README.md'),
        frontmatter: {
          layout: 'Post',
        },
      },
    ],
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './assets'),
      },
    },
  },
};
