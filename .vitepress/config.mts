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
  description: 'A calm, capable Markdown editor for focused work.',
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
      title: 'Mark2 — A Markdown editor for focused work',
      description: defaultDescriptionEn,
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
      title: 'Mark2 — 专注写作的 Markdown 编辑器',
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
