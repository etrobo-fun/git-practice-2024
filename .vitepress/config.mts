import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Git Practice 2024",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Members',
        link: '/members',
        items: [
          { text: 'あずらた', link: '/members/azurata' },
          // { text: '名前', link: '/members/<作成したファイル名>' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/etrobo-fun' }
    ]
  },
  head: [
    ['meta', {'name': 'robots', 'content': 'noindex'}]
  ],
  base: '/git-practice-2024'
})
