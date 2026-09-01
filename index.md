---
title: Mark2 — Write in your own orbit
description: Mark2 is a calm, capable Markdown editor for focused work, with built-in AI, Git versioning, and rich PDF export.
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
      <p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> Markdown, with intent</p>
      <h1 id="hero-title">Write in<br /><em>your own orbit.</em></h1>
      <p class="mark2-hero-lede">Mark2 is a focused Markdown editor for ideas that deserve more than a text box. Shape thoughts naturally, keep your tools close, and let the finished work stay yours.</p>
      <div class="mark2-hero-actions">
        <a class="mark2-button mark2-button-primary" href="https://github.com/hzjjg/mark2-editor-release/releases" target="_blank" rel="noopener noreferrer">Download Mark2 <Download :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
        <a class="mark2-button mark2-button-quiet" href="/docs/">Read the docs <ArrowRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
      </div>
      <div class="mark2-platform-line"><span class="mark2-status-dot" aria-hidden="true"></span> Currently available for macOS only <span class="mark2-divider" aria-hidden="true"></span> Built for focused work</div>
    </div>
    <div class="mark2-hero-preview" aria-label="Mark2 editor preview">
      <div class="mark2-orbit orbit-one" aria-hidden="true"></div>
      <div class="mark2-orbit orbit-two" aria-hidden="true"></div>
      <div class="mark2-orbit-node" aria-hidden="true"></div>
      <div class="mark2-shot-frame">
        <Mark2ThemeImage class="mark2-product-shot" dark-src="/mark2-editor-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 editor showing a rendered Markdown article." />
      </div>
      <div class="mark2-preview-caption"><span class="mark2-caption-line" aria-hidden="true"></span><span>One calm place for the whole writing loop</span></div>
    </div>
  </section>
  <section class="mark2-section mark2-features-section" id="features" aria-labelledby="features-title">
    <div class="mark2-section-heading-row">
      <div><p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> A quiet kind of powerful</p><h2 id="features-title">The tools recede.<br /><em>The work comes forward.</em></h2></div>
      <p class="mark2-heading-aside">A flexible editor for people who care about their words, their workflow, and what happens to both.</p>
    </div>
    <div class="mark2-feature-grid">
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-focus">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">01 / 04</span><span class="mark2-feature-symbol mark2-symbol-focus" aria-hidden="true"><Focus :size="15" :stroke-width="1.6" /></span></div>
        <h3>Focus is a feature.</h3>
        <p>A considered interface, quick commands, and a clear canvas keep the mechanics close without letting them take over.</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-editor" aria-label="Open the Mark2 editor screenshot" @click="openImage(themeImage('/mark2-editor-basics-dark.png', '/mark2-editor-light.png'), 'Mark2 editor showing a rendered Markdown document.')"><Mark2ThemeImage dark-src="/mark2-editor-basics-dark.png" light-src="/mark2-editor-light.png" alt="Mark2 editor showing a rendered Markdown document." /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-accent">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">02 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><Sparkles :size="15" :stroke-width="1.6" /></span></div>
        <h3>AI, in your voice.</h3>
        <p>Bring your own models. Ask for a nudge, a sharper sentence, or a second point of view — without leaving the page.</p>
        <button type="button" class="mark2-feature-shot" aria-label="Open the Mark2 Agent screenshot" @click="openImage(themeImage('/mark2-agent-dark.png', '/mark2-agent-light.png'), 'Mark2 Agent reviewing a Markdown draft.')"><Mark2ThemeImage dark-src="/mark2-agent-dark.png" light-src="/mark2-agent-light.png" alt="Mark2 Agent reviewing a Markdown draft." /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-dark">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">03 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><GitBranch :size="15" :stroke-width="1.6" /></span></div>
        <h3>Git, in your flow.</h3>
        <p>Review changes, make commits, and keep your writing history close without turning it into a separate ceremony.</p>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-git" aria-label="Open the Mark2 Git panel screenshot" @click="openImage(themeImage('/mark2-git-dark.png', '/mark2-git-light.png'), 'Mark2 Git panel showing changes and recent commits.')"><Mark2ThemeImage dark-src="/mark2-git-dark.png" light-src="/mark2-git-light.png" alt="Mark2 Git panel showing changes and recent commits." /></button>
      </article>
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-export">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">04 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><ArrowUpRight :size="15" :stroke-width="1.6" /></span></div>
        <div class="mark2-export-copy"><h3>From Markdown to memorable.</h3><p>Export polished PDFs with support for tables, code, math, diagrams, and the details that make a document feel complete.</p></div>
        <button type="button" class="mark2-feature-shot mark2-feature-shot-export" aria-label="Open the exported PDF screenshot" @click="openImage(themeImage('/mark2-export-pdf.png', '/mark2-export-pdf.png'), 'A PDF exported from Mark2 and opened in Preview.')"><Mark2ThemeImage dark-src="/mark2-export-pdf.png" light-src="/mark2-export-pdf.png" alt="A PDF exported from Mark2 and opened in Preview." /></button>
      </article>
    </div>
  </section>
  <section class="mark2-section mark2-philosophy-section" id="philosophy" aria-labelledby="philosophy-title">
    <div class="mark2-philosophy-card">
      <div class="mark2-philosophy-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="mark2-philosophy-copy"><p class="mark2-eyebrow"><span class="mark2-eyebrow-mark" aria-hidden="true"></span> The Mark2 principle</p><h2 id="philosophy-title">Good tools leave<br /><em>room for thought.</em></h2></div>
      <p class="mark2-philosophy-compact-copy">Powerful enough to carry serious work, quiet enough to let it remain yours.</p>
    </div>
  </section>
  <section class="mark2-section mark2-final-section" id="download" aria-labelledby="download-title">
    <p class="mark2-final-kicker">A calmer way to make</p>
    <h2 id="download-title">Start with a blank page.<br /><em>See where it takes you.</em></h2>
    <div class="mark2-final-actions"><a class="mark2-button mark2-button-primary" href="/docs/">Read the help docs <ArrowUpRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a></div>
    <p class="mark2-final-note">Currently available for macOS only · Built for writers, makers, and deep work.</p>
  </section>
  <Mark2ImageLightbox ref="lightbox" close-label="Close image" />
  <footer class="mark2-home-footer"><div class="mark2-footer-brand"><span class="mark2-brand-glyph mark2-brand-image" aria-hidden="true"><img src="/mark2-icon.png" alt="" /></span><span>mark2</span></div><div class="mark2-footer-meta"><span>Markdown, with intent.</span><span>© 2026 Mark2</span></div></footer>
</div>
