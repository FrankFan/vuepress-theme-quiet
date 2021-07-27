const path = require('path');

const blogPluginConfig = {
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      // layout: 'IndexPost', defaults to `Layout`.
      pagination: {
        lengthPerPage: 20,
      },
    },
    // {
    //   id: 'about',
    //   dirname: 'about',
    //   path: '/about/me',
    //   layout: 'Post',
    //   // itemPermalink: '/:regular',
    // },
  ],
  frontmatters: [
    {
      id: 'tag',
      keys: ['tag', 'tags'],
      path: '/tag/',
      // defaults to `FrontmatterKey`.
      layout: 'Tag',
      // FrontmatterPagination -> TagItem
      scopeLayout: 'TagItem',
      // frontmatter: { title: 'Tag' },
      pagination: {
        lengthPerPage: 10,
        // 必须指定，否则翻页时就会变成 Layout 了
        layout: 'TagItem',
      },
    },
  ],
};

const containerPlugin = [
  [
    'container',
    {
      type: 'tip',
      defaultTitle: {
        '/': 'TIP',
        '/zh/': '提示',
      },
    },
  ],
  [
    'container',
    {
      type: 'notitle',
      defaultTitle: '',
    },
  ],
  [
    'container',
    {
      type: 'warning',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '注意',
      },
    },
  ],
  [
    'container',
    {
      type: 'danger',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '警告',
      },
    },
  ],
  [
    'container',
    {
      type: 'details',
      before: (info) =>
        `<details class="custom-block details">${
          info ? `<summary>${info}</summary>` : ''
        }\n`,
      after: () => '</details>\n',
    },
  ],
];

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx;
  const { additionalPages = [] } = themeConfig;

  return {
    name: 'vuepress-theme-quiet',
    plugins: [
      ['@vuepress/blog', blogPluginConfig],

      [
        '@vuepress/medium-zoom',
        {
          selector: '.content__default img',
        },
      ],

      ...containerPlugin,

      'vuepress-plugin-smooth-scroll',
      '@vuepress/back-to-top',
      'vuepress-plugin-table-of-contents',
    ],
    additionalPages: [
      ...additionalPages,
      {
        path: '/archives/',
        frontmatter: {
          title: 'Archive',
          layout: 'Archive',
        },
      },
    ],
  };
};
