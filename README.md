# vuepress-theme-quiet

[![NPM](https://nodei.co/npm/vuepress-theme-quiet.png)](https://npmjs.org/package/vuepress-theme-quiet)

a vuepress blog theme, makes you feel quiet.

## preview

[https://vuepress-theme-quiet.surge.sh/]

## Install

```bash
$ npm install -D vuepress-theme-quiet
OR yarn add vuepress-theme-quiet
```

## Usage

```js
{
  // use theme
  theme: 'vuepress-theme-quiet',

  // config theme
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
}
```
