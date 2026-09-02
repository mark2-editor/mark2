---
title: Mark2 — A Markdown editor for focused work
description: Mark2 is a desktop Markdown editor with visual editing, AI assistance, Git versioning, local history, and PDF export.
titleTemplate: false
layout: page
sidebar: false
outline: false
---

<script setup lang="ts">
import { ref } from 'vue'
import { useData, withBase } from 'vitepress'
import Mark2ImageLightbox from './.vitepress/components/Mark2ImageLightbox.vue'
import Mark2ThemeImage from './.vitepress/components/Mark2ThemeImage.vue'
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
      <p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> Markdown editor for focused work</p>
      <h1 id="hero-title">A Markdown editor<br /><em>for focused work.</em></h1>
      <p class="mark2-hero-lede">Mark2 combines visual editing, source mode, AI assistance, Git versioning, local history, and PDF export in one focused desktop app.</p>
      <div class="mark2-hero-actions">
        <a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer">Download Mark2 <Download :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
        <a class="mark2-button mark2-button-quiet" :href="withBase('/docs/')">Read the docs <ArrowRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
      </div>
      <div class="mark2-platform-line"><span class="mark2-status-dot" aria-hidden="true"></span> Currently available for macOS only</div>
    </div>
    <div class="mark2-hero-preview" aria-label="Mark2 editor preview">
      <div class="mark2-orbit orbit-one" aria-hidden="true"></div>
      <div class="mark2-orbit orbit-two" aria-hidden="true"></div>
      <div class="mark2-orbit-node" aria-hidden="true"></div>
      <div class="mark2-shot-frame">
        <Mark2ThemeImage class="mark2-product-shot" dark-src="/mark2-editor-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 editor showing a rendered Markdown article." />
      </div>
    </div>
  </section>
  <section class="mark2-section mark2-features-section" id="features" aria-labelledby="features-title">
    <h2 class="mark2-visually-hidden" id="features-title">Core features</h2>
    <div class="mark2-feature-grid">
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-focus">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">01 / 04</span><span class="mark2-feature-symbol mark2-symbol-focus" aria-hidden="true"><Focus :size="15" :stroke-width="1.6" /></span></div>
        <h3>Visual and source editing.</h3>
        <p>Write on a rendered page, or switch to source mode when you need to edit the underlying Markdown.</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-editor" aria-label="Open the Mark2 editor screenshot" @click="openImage(themeImage('/mark2-editor-basics-dark.png', '/mark2-editor-light.png'), 'Mark2 editor showing a rendered Markdown document.')"><Mark2ThemeImage dark-src="/mark2-editor-basics-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 editor showing a rendered Markdown document." /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-accent">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">02 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><Sparkles :size="15" :stroke-width="1.6" /></span></div>
        <h3>AI assistance in the editor.</h3>
        <p>Use Agent for rewrites, summaries, translations, and document questions. Inline completion can suggest the next sentence while you write.</p>
        <button type="button" class="mark2-feature-shot" aria-label="Open the Mark2 Agent screenshot" @click="openImage(themeImage('/mark2-agent-dark.png', '/mark2-agent-light.png'), 'Mark2 Agent reviewing a Markdown draft.')"><Mark2ThemeImage dark-src="/mark2-agent-dark.png" light-src="/mark2-agent-light.png" alt="Mark2 Agent reviewing a Markdown draft." /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-dark">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">03 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><GitBranch :size="15" :stroke-width="1.6" /></span></div>
        <h3>Git versioning in one panel.</h3>
        <p>Review diffs, stage files, create commits, and work with branches and remotes without leaving Mark2.</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-git" aria-label="Open the Mark2 Git panel screenshot" @click="openImage(themeImage('/mark2-git-dark.png', '/mark2-git-light.png'), 'Mark2 Git panel showing changes and recent commits.')"><Mark2ThemeImage dark-src="/mark2-git-dark.png" light-src="/mark2-git-light.png" alt="Mark2 Git panel showing changes and recent commits." /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-export">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">04 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><ArrowUpRight :size="15" :stroke-width="1.6" /></span></div>
        <div class="mark2-export-copy"><h3>Export documents in four formats.</h3><p>Export PDF, PNG, HTML, or Markdown. PDF keeps headings, tables, code, math, and Mermaid diagrams with the document.</p></div>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-export" aria-label="Open the exported PDF screenshot" @click="openImage(themeImage('/mark2-export-pdf.png', '/mark2-export-pdf.png'), 'A PDF exported from Mark2 and opened in Preview.')"><Mark2ThemeImage dark-src="/mark2-export-pdf.png" light-src="/mark2-export-pdf.png" alt="A PDF exported from Mark2 and opened in Preview." /></button>
      </article>
    </div>
  </section>
  <section class="mark2-section mark2-philosophy-section" id="philosophy" aria-labelledby="philosophy-title">
    <div class="mark2-philosophy-card">
      <div class="mark2-philosophy-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="mark2-philosophy-copy"><p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> A document workflow</p><h2 id="philosophy-title">From first draft<br /><em>to finished file.</em></h2><p class="mark2-philosophy-compact-copy">Keep the document, its history, and its final export in the same workspace.</p></div>
      <ol class="mark2-workflow-list" aria-label="Mark2 document workflow">
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">01</span><strong>Write</strong><span>Visual editor and source mode</span></li>
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">02</span><strong>Refine</strong><span>Agent and inline completion</span></li>
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">03</span><strong>Review</strong><span>Local history and Git</span></li>
        <li class="mark2-workflow-item"><span class="mark2-workflow-index">04</span><strong>Export</strong><span>PDF, PNG, HTML, or Markdown</span></li>
      </ol>
    </div>
  </section>
  <section class="mark2-section mark2-final-section" id="download" aria-labelledby="download-title">
    <h2 id="download-title">Start with your next<br /><em>Markdown document.</em></h2>
    <div class="mark2-final-actions"><a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer">Download Mark2 <Download :size="16" :stroke-width="1.8" aria-hidden="true" /></a><a class="mark2-button mark2-button-quiet" :href="withBase('/docs/')">Read the help docs <ArrowRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a></div>
  </section>
  <Mark2ImageLightbox ref="lightbox" close-label="Close image" />
  <footer class="mark2-home-footer"><div class="mark2-footer-brand"><span class="mark2-brand-glyph mark2-brand-image" aria-hidden="true"><img :src="withBase('/mark2-icon.png')" alt="" /></span><span>mark2</span></div><div class="mark2-footer-meta"><span>Markdown editor for focused work.</span><span>© 2026 Mark2</span></div></footer>
</div>
