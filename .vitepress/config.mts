import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE ?? '/'
const normalizedBase = base.endsWith('/') ? base : `${base}/`

// Canonical production origin. SEO tags and the generated sitemap must always
// point at the published URL, regardless of where the build is served from.
const siteUrl = process.env.VITEPRESS_SITE_URL ?? 'https://mark2-editor.github.io/mark2/'

const siteName = 'Mark2'
const ogImageUrl = `${siteUrl}og.png`
const releaseUrl = 'https://github.com/mark2-editor/mark2/releases/latest'
const defaultDescriptionEn =
  'Mark2 is a desktop Markdown editor with visual editing, AI assistance, Git versioning, local history, and PDF export.'
const defaultDescriptionZh =
  'Mark2 是一款桌面 Markdown 编辑器，支持可视化编辑、AI 辅助、Git 版本管理、本地历史和 PDF 导出。'

const localeRedirectScript = `
(() => {
  const preferenceKey = 'mark2-locale'
  const base = ${JSON.stringify(normalizedBase)}
  const rootPaths = new Set([base, base.slice(0, -1)])
  const currentPath = window.location.pathname

  try {
    if (rootPaths.has(currentPath) && !window.localStorage.getItem(preferenceKey)) {
      const language = (window.navigator.languages?.[0] ?? window.navigator.language ?? '').toLowerCase()
      if (language === 'zh' || language.startsWith('zh-')) {
        window.location.replace(base + 'zh/')
      }
    }

    document.addEventListener('click', (event) => {
      const target = event.target
      const link = target instanceof Element ? target.closest('a[href]') : null
      if (!link) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return

      if (url.pathname === base || url.pathname === base.slice(0, -1)) {
        window.localStorage.setItem(preferenceKey, 'en')
      } else if (url.pathname === base + 'zh' || url.pathname.startsWith(base + 'zh/')) {
        window.localStorage.setItem(preferenceKey, 'zh')
      }
    }, true)
  } catch {
    // Ignore browsers that block localStorage; language routing still works by URL.
  }
})()
`

// Maps a source path to its published URL path: "docs/editor.md" becomes
// "docs/editor", "docs/index.md" becomes "docs/", and "index.md" becomes "".
// This matches the clean URLs written into the built site.
function toUrlPath(relativePath: string): string {
  return relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
}

function toAbsoluteUrl(relativePath: string): string {
  return siteUrl + toUrlPath(relativePath)
}

function softwareApplicationJsonLd(isZh: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteName,
    description: isZh ? defaultDescriptionZh : defaultDescriptionEn,
    url: isZh ? `${siteUrl}zh/` : siteUrl,
    image: ogImageUrl,
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'macOS',
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    isAccessibleForFree: true,
    downloadUrl: releaseUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: 'Mark2',
  titleTemplate: ':title — Mark2',
  description: defaultDescriptionEn,
  cleanUrls: true,
  // Repo-facing documents that must not be published as website pages.
  srcExclude: ['**/README.md', '**/README.zh-CN.md', '**/AGENTS.md'],
  sitemap: {
    hostname: siteUrl
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}mark2-icon.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { property: 'og:image', content: ogImageUrl }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImageUrl }],
    ['script', {}, localeRedirectScript]
  ],
  // Per-page SEO tags: canonical URL, hreflang alternates between the English
  // and Chinese pages, Open Graph / Twitter metadata, and structured data on
  // the home pages.
  transformPageData(pageData) {
    const { relativePath } = pageData
    if (!relativePath || relativePath === '404.md') return

    const isZh = relativePath.startsWith('zh/')
    const englishPath = relativePath.replace(/^zh\//, '')
    const canonicalUrl = toAbsoluteUrl(relativePath)
    const englishUrl = toAbsoluteUrl(englishPath)
    const chineseUrl = toAbsoluteUrl(`zh/${englishPath}`)
    const title = pageData.title || siteName
    const description = pageData.description || (isZh ? defaultDescriptionZh : defaultDescriptionEn)

    const head: HeadConfig[] = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['link', { rel: 'alternate', hreflang: 'en-US', href: englishUrl }],
      ['link', { rel: 'alternate', hreflang: 'zh-CN', href: chineseUrl }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: englishUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:locale', content: isZh ? 'zh_CN' : 'en_US' }],
      ['meta', { property: 'og:locale:alternate', content: isZh ? 'en_US' : 'zh_CN' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }]
    ]

    if (relativePath === 'index.md' || relativePath === 'zh/index.md') {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(softwareApplicationJsonLd(isZh))
      ])
    }

    return {
      frontmatter: {
        ...pageData.frontmatter,
        // Page-level head entries come last so they can override the
        // generated SEO tags when a page defines its own.
        head: [...head, ...(pageData.frontmatter.head ?? [])]
      }
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Mark2 — Markdown editing and document workflows',
      description: defaultDescriptionEn,
      themeConfig: {
        nav: [
          { text: 'Features', link: '/#features' },
          { text: 'Documentation', link: '/docs/' },
          { text: 'Download', link: releaseUrl }
        ],

        sidebar: [
          {
            text: 'Documentation',
            link: '/docs/'
          },
          {
            text: 'Start here',
            items: [
              { text: 'Getting started', link: '/docs/getting-started' },
              { text: 'Files and workspaces', link: '/docs/files' }
            ]
          },
          {
            text: 'Write and edit',
            items: [
              { text: 'Editor basics', link: '/docs/editor' },
              { text: 'Markdown examples', link: '/docs/markdown' },
              { text: 'AI assistant', link: '/docs/ai' }
            ]
          },
          {
            text: 'Review and share',
            items: [
              { text: 'Local history', link: '/docs/history' },
              { text: 'Git workflow', link: '/docs/git' },
              { text: 'Export documents', link: '/docs/export' }
            ]
          },
          {
            text: 'Reference and support',
            items: [
              { text: 'Appearance and settings', link: '/docs/appearance' },
              { text: 'Keyboard shortcuts', link: '/docs/shortcuts' },
              { text: 'Privacy and AI', link: '/docs/privacy' },
              { text: 'Troubleshooting', link: '/docs/troubleshooting' }
            ]
          }
        ],

        footer: {
          message: 'Markdown editing for macOS.',
          copyright: 'Copyright © 2026 Mark2'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Mark2 — Markdown 编辑与文档工作流',
      description: defaultDescriptionZh,
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
        outline: { label: '本页内容', level: [2, 3] },
        docFooter: { prev: '上一篇', next: '下一篇' },
        sidebarMenuLabel: '文档目录',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '切换外观',
        lightModeSwitchTitle: '切换浅色模式',
        darkModeSwitchTitle: '切换深色模式',
        langMenuLabel: '切换语言',
        skipToContentLabel: '跳转到内容',
        nav: [
          { text: '功能', link: '/zh/#features' },
          { text: '使用文档', link: '/zh/docs/' },
          { text: '下载', link: releaseUrl }
        ],

        sidebar: [
          {
            text: '文档概览',
            link: '/zh/docs/'
          },
          {
            text: '开始使用',
            items: [
              { text: '快速开始', link: '/zh/docs/getting-started' },
              { text: '文件与工作区', link: '/zh/docs/files' }
            ]
          },
          {
            text: '编写与编辑',
            items: [
              { text: '编辑器基础', link: '/zh/docs/editor' },
              { text: 'Markdown 示例', link: '/zh/docs/markdown' },
              { text: 'AI 助手', link: '/zh/docs/ai' }
            ]
          },
          {
            text: '审阅与分享',
            items: [
              { text: '本地历史', link: '/zh/docs/history' },
              { text: 'Git 工作流', link: '/zh/docs/git' },
              { text: '导出文档', link: '/zh/docs/export' }
            ]
          },
          {
            text: '参考与支持',
            items: [
              { text: '外观与设置', link: '/zh/docs/appearance' },
              { text: '键盘快捷键', link: '/zh/docs/shortcuts' },
              { text: '隐私与 AI', link: '/zh/docs/privacy' },
              { text: '常见问题', link: '/zh/docs/troubleshooting' }
            ]
          }
        ],

        footer: {
          message: '面向 macOS 的 Markdown 编辑器。',
          copyright: 'Copyright © 2026 Mark2'
        }
      }
    }
  },
  themeConfig: {
    outline: { level: [2, 3] },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                displayDetails: '显示详细内容',
                resetButtonTitle: '清除搜索',
                backButtonTitle: '返回',
                noResultsText: '没有找到相关结果',
                footer: { selectText: '选择', selectKeyAriaLabel: '回车', navigateText: '切换结果', navigateUpKeyAriaLabel: '向上', navigateDownKeyAriaLabel: '向下', closeText: '关闭', closeKeyAriaLabel: 'Esc' }
              }
            }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/mark2-editor/mark2' }],
    siteTitle: 'Mark2',
    logo: {
      src: '/mark2-icon.png',
      alt: 'Mark2'
    },
    i18nRouting: true
  }
})
