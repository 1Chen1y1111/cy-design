import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cy-Design',
  description: 'A Vue3+TS UI Library',
  base: '/cy-design-docs/',
  outDir: './docs',
  head: [
    ['link', { rel: 'icon', href: '/cy-design-docs/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Component', link: '/component/', activeMatch: '/component/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/',
            },
          ],
        },
      ],
      '/component/': [
        {
          text: 'Base Component',
          items: [
            {
              text: 'Icon',
              link: '/component/icon',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1Chen1y1111/cy-design' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present 1Chen1y1111',
    },
  },
  markdown: {
    lineNumbers: true,
  },
})
