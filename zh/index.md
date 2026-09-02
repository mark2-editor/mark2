---
title: Mark2 — 专注写作的 Markdown 编辑器
description: Mark2 是一款桌面 Markdown 编辑器，支持可视化编辑、AI 辅助、Git 版本管理、本地历史和 PDF 导出。
titleTemplate: false
layout: page
sidebar: false
outline: false
---

<script setup lang="ts">
import { ref } from 'vue'
import { useData, withBase } from 'vitepress'
import Mark2ImageLightbox from '../.vitepress/components/Mark2ImageLightbox.vue'
import Mark2ThemeImage from '../.vitepress/components/Mark2ThemeImage.vue'
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Focus,
  GitBranch,
  Sparkles
} from 'lucide-vue-next'

const lightbox = ref<{ open: (src: string, alt: string) => void } | null>(null)
const { isDark } = useData()

function openImage(src: string, alt: string) {
  lightbox.value?.open(src, alt)
}

function themeImage(darkSrc: string, lightSrc: string) {
  return withBase(isDark.value ? darkSrc : lightSrc)
}
</script>

<div class="mark2-home" id="top">
  <section class="mark2-hero" aria-labelledby="hero-title">
    <div class="mark2-hero-glow mark2-hero-glow-one" aria-hidden="true"></div>
    <div class="mark2-hero-glow mark2-hero-glow-two" aria-hidden="true"></div>
    <div class="mark2-hero-grid" aria-hidden="true"></div>
    <div class="mark2-hero-copy">
      <p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> Mark2 Markdown 编辑器</p>
      <h1 id="hero-title">专注写作的<br />Markdown 编辑器。</h1>
      <p class="mark2-hero-lede">在一个桌面应用中完成 Markdown 文档的编辑、审阅、版本管理和导出，并在需要时使用 AI 辅助写作。</p>
      <div class="mark2-hero-actions">
        <a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer">下载 Mark2 <Download :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
        <a class="mark2-button mark2-button-quiet" :href="withBase('/zh/docs/')">阅读帮助文档 <ArrowRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
      </div>
      <div class="mark2-platform-line"><span class="mark2-status-dot" aria-hidden="true"></span> 暂时仅支持 macOS</div>
    </div>
    <div class="mark2-hero-preview" aria-label="Mark2 编辑器预览">
      <div class="mark2-orbit orbit-one" aria-hidden="true"></div>
      <div class="mark2-orbit orbit-two" aria-hidden="true"></div>
      <div class="mark2-orbit-node" aria-hidden="true"></div>
      <div class="mark2-shot-frame">
        <Mark2ThemeImage class="mark2-product-shot" dark-src="/mark2-editor-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 编辑器展示渲染后的 Markdown 文章。" />
      </div>
    </div>
  </section>
  <section class="mark2-section mark2-features-section" id="features" aria-labelledby="features-title">
    <h2 class="mark2-visually-hidden" id="features-title">核心功能</h2>
    <div class="mark2-feature-grid">
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-focus">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">01 / 04</span><span class="mark2-feature-symbol mark2-symbol-focus" aria-hidden="true"><Focus :size="15" :stroke-width="1.6" /></span></div>
        <h3>可视化编辑，随时切换源码。</h3>
        <p>在渲染后的页面上写作，需要精确修改时切换到源码模式；标题、列表和表格等格式可使用工具栏完成。</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-editor" aria-label="打开 Mark2 编辑器截图" @click="openImage(themeImage('/mark2-editor-basics-dark.png', '/mark2-editor-light.png'), 'Mark2 编辑器展示渲染后的 Markdown 文档。')"><Mark2ThemeImage dark-src="/mark2-editor-basics-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 编辑器展示渲染后的 Markdown 文档。" /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-accent">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">02 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><Sparkles :size="15" :stroke-width="1.6" /></span></div>
        <h3>在编辑器中使用 AI。</h3>
        <p>用 Agent 改写、总结、翻译和回答文档问题；行内补全则在写作时提供下一句建议。</p>
        <button type="button" class="mark2-feature-shot" aria-label="打开 Mark2 Agent 截图" @click="openImage(themeImage('/mark2-agent-dark.png', '/mark2-agent-light.png'), 'Mark2 Agent 审阅 Markdown 草稿。')"><Mark2ThemeImage dark-src="/mark2-agent-dark.png" light-src="/mark2-agent-light.png" alt="Mark2 Agent 审阅 Markdown 草稿。" /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-dark">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">03 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><GitBranch :size="15" :stroke-width="1.6" /></span></div>
        <h3>在一个面板中管理 Git。</h3>
        <p>查看 diff、暂存文件、创建提交，并处理分支和远端，不必切换到终端。</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-git" aria-label="打开 Mark2 Git 面板截图" @click="openImage(themeImage('/mark2-git-dark.png', '/mark2-git-light.png'), 'Mark2 Git 面板展示变更和最近提交。')"><Mark2ThemeImage dark-src="/mark2-git-dark.png" light-src="/mark2-git-light.png" alt="Mark2 Git 面板展示变更和最近提交。" /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-export">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">04 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><ArrowUpRight :size="15" :stroke-width="1.6" /></span></div>
        <div class="mark2-export-copy"><h3>导出 PDF、PNG、HTML 或 Markdown。</h3><p>PDF 会保留标题、表格、代码、数学公式和 Mermaid 图表等内容。</p></div>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-export" aria-label="打开 PDF 导出截图" @click="openImage(themeImage('/mark2-export-pdf.png', '/mark2-export-pdf.png'), '从 Mark2 导出的 PDF 在 Preview 中打开。')"><Mark2ThemeImage dark-src="/mark2-export-pdf.png" light-src="/mark2-export-pdf.png" alt="从 Mark2 导出的 PDF 在 Preview 中打开。" /></button>
      </article>
    </div>
  </section>
  <section class="mark2-section mark2-philosophy-section" id="philosophy" aria-labelledby="philosophy-title">
    <div class="mark2-philosophy-card">
      <div class="mark2-philosophy-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="mark2-philosophy-copy"><p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> 文档工作流</p><h2 id="philosophy-title">从草稿<br />到最终文件。</h2><p class="mark2-philosophy-compact-copy">在同一个工作区中编写文档、查看历史，并导出可以直接使用的文件。</p></div>
      <ol class="mark2-workflow-list" aria-label="Mark2 文档工作流">
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">01</span><strong>编辑</strong><span>可视化编辑与源码模式</span></li>
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">02</span><strong>修改</strong><span>Agent 与行内补全</span></li>
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">03</span><strong>审阅</strong><span>本地历史与 Git</span></li>
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">04</span><strong>导出</strong><span>PDF、PNG、HTML 或 Markdown</span></li>
      </ol>
    </div>
  </section>
  <section class="mark2-section mark2-final-section" id="download" aria-labelledby="download-title">
    <h2 id="download-title">从你的下一篇<br /><em>Markdown 文档开始。</em></h2>
    <div class="mark2-final-actions"><a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer">下载 Mark2 <Download :size="16" :stroke-width="1.8" aria-hidden="true" /></a><a class="mark2-button mark2-button-quiet" :href="withBase('/zh/docs/')">阅读帮助文档 <ArrowRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a></div>
  </section>
  <Mark2ImageLightbox ref="lightbox" close-label="关闭图片" />
  <footer class="mark2-home-footer"><div class="mark2-footer-brand"><span class="mark2-brand-glyph mark2-brand-image" aria-hidden="true"><img :src="withBase('/mark2-icon.png')" alt="" /></span><span>mark2</span></div><div class="mark2-footer-meta"><span>专注写作的 Markdown 编辑器。</span><span>© 2026 Mark2</span></div></footer>
</div>
