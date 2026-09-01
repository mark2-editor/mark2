import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mark2',
  description: 'A calm, capable Markdown editor for focused work.',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/mark2-icon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Mark2 — Write in your own orbit',
      description: 'Mark2 is a focused Markdown editor for ideas that deserve more than a text box.',
      head: [
        ['meta', { property: 'og:title', content: 'Mark2 — Write in your own orbit' }],
        ['meta', { property: 'og:description', content: 'A calm, capable Markdown editor for focused work, with built-in AI, Git versioning, and rich PDF export.' }]
      ],
      themeConfig: {
        nav: [
          { text: 'Features', link: '/#features' },
          { text: 'Help docs', link: '/docs/' }
        ],

        sidebar: [
          {
            text: 'Help docs',
            items: [
              { text: 'Overview', link: '/docs/' },
              { text: 'Editor basics', link: '/docs/editor' },
              { text: 'AI assistant', link: '/docs/ai' },
              { text: 'Export', link: '/docs/export' },
              { text: 'Local history', link: '/docs/history' },
              { text: 'Git workflow', link: '/docs/git' },
              { text: 'Appearance', link: '/docs/appearance' }
            ]
          }
        ],

        footer: {
          message: 'Markdown, with intent.',
          copyright: 'Copyright © 2026 Mark2'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Mark2 — 按自己的节奏写作',
      description: 'Mark2 是一款专注于写作的 Markdown 编辑器，内置 AI、Git 版本管理和高质量 PDF 导出。',
      head: [
        ['meta', { property: 'og:title', content: 'Mark2 — 按自己的节奏写作' }],
        ['meta', { property: 'og:description', content: '一款安静而强大的 Markdown 编辑器，帮助你专注于真正重要的内容。' }]
      ],
      markdown: {
        container: {
          infoLabel: '信息',
          tipLabel: '提示',
          warningLabel: '警告',
          dangerLabel: '危险',
          detailsLabel: '详细信息'
        },
        codeCopyButton: {
          tooltipText: '复制代码',
          copiedText: '已复制'
        }
      },
      themeConfig: {
        nav: [
          { text: '功能', link: '/zh/#features' },
          { text: '帮助文档', link: '/zh/docs/' }
        ],

        sidebar: [
          {
            text: '帮助文档',
            items: [
              { text: '概览', link: '/zh/docs/' },
              { text: '编辑器基础', link: '/zh/docs/editor' },
              { text: 'AI 助手', link: '/zh/docs/ai' },
              { text: '导出文档', link: '/zh/docs/export' },
              { text: '本地历史', link: '/zh/docs/history' },
              { text: 'Git 工作流', link: '/zh/docs/git' },
              { text: '外观设置', link: '/zh/docs/appearance' }
            ]
          }
        ],

        footer: {
          message: 'Markdown，专注表达。',
          copyright: 'Copyright © 2026 Mark2'
        }
      }
    }
  },
  themeConfig: {
    siteTitle: 'Mark2',
    logo: {
      src: '/mark2-icon.png',
      alt: 'Mark2'
    },
    i18nRouting: true
  }
})
