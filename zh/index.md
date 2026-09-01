---
title: Mark2 — 按自己的节奏写作
description: Mark2 是一款专注于写作的 Markdown 编辑器，内置 AI、Git 版本管理和高质量 PDF 导出。
layout: page
sidebar: false
outline: false
---

<script setup lang="ts">
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Focus,
  GitBranch,
  Sparkles
} from 'lucide-vue-next'
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
        <a class="mark2-button mark2-button-primary" href="#features">了解核心功能 <ArrowDownRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
        <a class="mark2-button mark2-button-quiet" href="/zh/docs/">阅读帮助文档 <ArrowRight :size="16" :stroke-width="1.8" aria-hidden="true" /></a>
      </div>
      <div class="mark2-platform-line"><span class="mark2-status-dot" aria-hidden="true"></span> 支持 macOS 与 Windows <span class="mark2-divider" aria-hidden="true"></span> 为专注写作而生</div>
    </div>
    <div class="mark2-hero-preview" aria-label="Mark2 编辑器预览">
      <div class="mark2-orbit orbit-one" aria-hidden="true"></div>
      <div class="mark2-orbit orbit-two" aria-hidden="true"></div>
      <div class="mark2-orbit-node" aria-hidden="true"></div>
      <div class="mark2-shot-frame">
        <img class="mark2-product-shot" src="/mark2-editor-dark.png" alt="Mark2 编辑器深色模式下展示渲染后的 Markdown 文章。" />
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
      <article class="mark2-feature-card mark2-feature-card-wide">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">01 / 04</span><span class="mark2-feature-symbol mark2-symbol-focus" aria-hidden="true"><Focus :size="15" :stroke-width="1.6" /></span></div>
        <h3>专注本身就是功能。</h3>
        <p>经过思考的界面、快捷命令和清晰的画布，让操作始终在手边，却不会抢走注意力。</p>
        <div class="mark2-mini-canvas" aria-hidden="true"><span class="mini-line mini-line-short"></span><span class="mini-line mini-line-long"></span><span class="mini-line mini-line-medium"></span><span class="mini-cursor"></span></div>
      </article>
      <article class="mark2-feature-card mark2-feature-card-accent">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">02 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><Sparkles :size="15" :stroke-width="1.6" /></span></div>
        <h3>用你的声音与 AI 协作。</h3>
        <p>接入自己的模型，不离开当前页面，就能获得提示、更利落的句子，或另一个思考角度。</p>
        <div class="mark2-feature-shot"><img src="/mark2-agent-dark.png" alt="Mark2 Agent 深色模式下审阅 Markdown 草稿。" /></div>
      </article>
      <article class="mark2-feature-card mark2-feature-card-dark">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">03 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><GitBranch :size="15" :stroke-width="1.6" /></span></div>
        <h3>让每一次修改都有迹可循。</h3>
        <p>Git 版本管理融入写作，而不是另一套仪式。看见变化，保留真正重要的内容。</p>
        <div class="mark2-commit-row" aria-hidden="true"><span class="mark2-commit-line"></span><span class="mark2-commit-line mark2-commit-line-active"></span><span class="mark2-commit-line"></span><span class="mark2-commit-node"></span></div>
      </article>
      <article class="mark2-feature-card mark2-feature-card-wide mark2-feature-card-export">
        <div class="mark2-feature-card-top"><span class="mark2-feature-index">04 / 04</span><span class="mark2-feature-symbol" aria-hidden="true"><ArrowUpRight :size="15" :stroke-width="1.6" /></span></div>
        <div class="mark2-export-copy"><h3>从 Markdown 到完整作品。</h3><p>导出精致的 PDF，支持表格、代码、数学公式、图表，以及让文档真正完整的细节。</p></div>
        <div class="mark2-export-sheet" aria-hidden="true"><div class="mark2-sheet-top"><span>MARK2</span><span>01</span></div><div class="mark2-sheet-title"></div><div class="mark2-sheet-lines"><span></span><span></span><span></span></div><div class="mark2-sheet-orb"></div></div>
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
    <p class="mark2-final-note">支持 macOS 与 Windows · 为写作者、创作者和深度工作而生。</p>
  </section>
  <footer class="mark2-home-footer"><div class="mark2-footer-brand"><span class="mark2-brand-glyph mark2-brand-image" aria-hidden="true"><img src="/mark2-icon.png" alt="" /></span><span>mark2</span></div><div class="mark2-footer-meta"><span>Markdown，专注表达。</span><span>© 2026 Mark2</span></div></footer>
</div>
