---
title: Mark2 — 按自己的节奏写作
description: Mark2 是一款专注于写作的 Markdown 编辑器，内置 AI、Git 版本管理和高质量 PDF 导出。
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
      <p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> Markdown，专注表达</p>
      <h1 id="hero-title">写出<br /><em>自己的轨迹。</em></h1>
      <p class="mark2-hero-lede">Mark2 是一款专注于写作的 Markdown 编辑器，为值得认真对待的想法而生。自然地组织思绪，让工具触手可及，也让最终的作品始终属于你。</p>
      <div class="mark2-hero-actions">
        <a class="mark2-button mark2-button-primary" href="https://github.com/hzjjg/mark2-editor-release/releases" target="_blank" rel="noopener noreferrer">下载 Mark2 <Download :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
        <a class="mark2-button mark2-button-quiet" href="/zh/docs/">阅读帮助文档 <ArrowRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
      </div>
      <div class="mark2-platform-line"><span class="mark2-status-dot" aria-hidden="true"></span> 暂时仅支持 macOS <span class="mark2-divider" aria-hidden="true"></span> 为专注写作而生</div>
    </div>
    <div class="mark2-hero-preview" aria-label="Mark2 编辑器预览">
      <div class="mark2-orbit orbit-one" aria-hidden="true"></div>
      <div class="mark2-orbit orbit-two" aria-hidden="true"></div>
      <div class="mark2-orbit-node" aria-hidden="true"></div>
      <div class="mark2-shot-frame">
        <Mark2ThemeImage class="mark2-product-shot" dark-src="/mark2-editor-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 编辑器展示渲染后的 Markdown 文章。" />
      </div>
      <div class="mark2-preview-caption"><span class="mark2-caption-line" aria-hidden="true"></span><span>一处安静的空间，完成整个写作循环</span></div>
    </div>
  </section>
  <section class="mark2-section mark2-features-section" id="features" aria-labelledby="features-title">
    <div class="mark2-section-heading-row">
      <div><p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> 安静而强大</p><h2 id="features-title">让工具退后。<br /><em>让内容向前。</em></h2></div>
      <p class="mark2-heading-aside">为在意文字、工作方式，以及两者最终归属的人，打造一款灵活的编辑器。</p>
    </div>
    <div class="mark2-feature-grid">
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-focus">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">01 / 04</span><span class="mark2-feature-symbol mark2-symbol-focus" aria-hidden="true"><Focus :size="15" :stroke-width="1.6" /></span></div>
        <h3>专注本身就是功能。</h3>
        <p>经过思考的界面、快捷命令和清晰的画布，让操作始终在手边，却不会抢走注意力。</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-editor" aria-label="打开 Mark2 编辑器截图" @click="openImage(themeImage('/mark2-editor-basics-dark.png', '/mark2-editor-light.png'), 'Mark2 编辑器展示渲染后的 Markdown 文档。')"><Mark2ThemeImage dark-src="/mark2-editor-basics-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 编辑器展示渲染后的 Markdown 文档。" /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-accent">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">02 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><Sparkles :size="15" :stroke-width="1.6" /></span></div>
        <h3>用你的声音与 AI 协作。</h3>
        <p>接入自己的模型，不离开当前页面，就能获得提示、更利落的句子，或另一个思考角度。</p>
        <button type="button" class="mark2-feature-shot" aria-label="打开 Mark2 Agent 截图" @click="openImage(themeImage('/mark2-agent-dark.png', '/mark2-agent-light.png'), 'Mark2 Agent 审阅 Markdown 草稿。')"><Mark2ThemeImage dark-src="/mark2-agent-dark.png" light-src="/mark2-agent-light.png" alt="Mark2 Agent 审阅 Markdown 草稿。" /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-dark">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">03 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><GitBranch :size="15" :stroke-width="1.6" /></span></div>
        <h3>让 Git 融入你的工作流。</h3>
        <p>查看变化、完成提交，让写作历史始终触手可及，不必切换到另一套复杂流程。</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-git" aria-label="打开 Mark2 Git 面板截图" @click="openImage(themeImage('/mark2-git-dark.png', '/mark2-git-light.png'), 'Mark2 Git 面板展示变更和最近提交。')"><Mark2ThemeImage dark-src="/mark2-git-dark.png" light-src="/mark2-git-light.png" alt="Mark2 Git 面板展示变更和最近提交。" /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-export">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">04 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><ArrowUpRight :size="15" :stroke-width="1.6" /></span></div>
        <div class="mark2-export-copy"><h3>从 Markdown 到完整作品。</h3><p>导出精致的 PDF，支持表格、代码、数学公式、图表，以及让文档真正完整的细节。</p></div>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-export" aria-label="打开 PDF 导出截图" @click="openImage(themeImage('/mark2-export-pdf.png', '/mark2-export-pdf.png'), '从 Mark2 导出的 PDF 在 Preview 中打开。')"><Mark2ThemeImage dark-src="/mark2-export-pdf.png" light-src="/mark2-export-pdf.png" alt="从 Mark2 导出的 PDF 在 Preview 中打开。" /></button>
      </article>
    </div>
  </section>
  <section class="mark2-section mark2-philosophy-section" id="philosophy" aria-labelledby="philosophy-title">
    <div class="mark2-philosophy-card">
      <div class="mark2-philosophy-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="mark2-philosophy-copy"><p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> Mark2 的理念</p><h2 id="philosophy-title">好工具会留下<br /><em>思考的空间。</em></h2></div>
      <p class="mark2-philosophy-compact-copy">强大到足以承载严肃工作，也安静到让作品始终保留你的痕迹。</p>
    </div>
  </section>
  <section class="mark2-section mark2-final-section" id="download" aria-labelledby="download-title">
    <p class="mark2-final-kicker">更从容的创作方式</p>
    <h2 id="download-title">从一张空白页面开始。<br /><em>看看它会带你走向哪里。</em></h2>
    <div class="mark2-final-actions"><a class="mark2-button mark2-button-primary" href="/zh/docs/">阅读帮助文档 <ArrowUpRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a></div>
    <p class="mark2-final-note">暂时仅支持 macOS · 为写作者、创作者和深度工作而生。</p>
  </section>
  <Mark2ImageLightbox ref="lightbox" close-label="关闭图片" />
  <footer class="mark2-home-footer"><div class="mark2-footer-brand"><span class="mark2-brand-glyph mark2-brand-image" aria-hidden="true"><img src="/mark2-icon.png" alt="" /></span><span>mark2</span></div><div class="mark2-footer-meta"><span>Markdown，专注表达。</span><span>© 2026 Mark2</span></div></footer>
</div>
