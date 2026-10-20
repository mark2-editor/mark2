---
title: Mark2 — Markdown editing and document workflows
description: A macOS Markdown editor with visual and source editing, optional AI assistance, local history, Git integration, and PDF, PNG, HTML, and Markdown export.
titleTemplate: false
layout: page
sidebar: false
outline: false
---

<script setup lang="ts">
import { withBase } from 'vitepress'
import { ArrowRight, Download, FileText, GitBranch, History, Palette, ShieldCheck, Sparkles } from 'lucide-vue-next'
import Mark2ProductTour from './.vitepress/components/Mark2ProductTour.vue'
</script>

<div class="mark2-home">
  <section class="mark2-hero mark2-shell" aria-labelledby="hero-title">
    <div class="mark2-hero-copy">
      <p class="mark2-eyebrow"><span class="mark2-status-dot" aria-hidden="true"></span>Markdown editor for macOS</p>
      <h1 id="hero-title">Write, review, and share<br /><em>with Markdown.</em></h1>
      <p class="mark2-hero-lede">Visual and source editing, optional AI assistance, and version control in one desktop application. Work with local Markdown files and export in the format your readers need.</p>
      <div class="mark2-actions">
        <a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer"><Download :size="17" aria-hidden="true" />Download for macOS</a>
        <a class="mark2-button mark2-button-secondary" :href="withBase('/docs/getting-started')">Get started<ArrowRight :size="17" aria-hidden="true" /></a>
      </div>
      <p class="mark2-platform-line">Apple Silicon & Intel · Your files stay yours</p>
    </div>
    <div class="mark2-hero-note" aria-hidden="true"><span>MARKDOWN</span><span>VISUAL + SOURCE</span><div class="mark2-note-rule"></div><span class="mark2-note-foot">Local files. Standard format.</span></div>
    <Mark2ProductTour locale="en" />
  </section>
  <div class="mark2-capabilities mark2-shell">
    <span><FileText :size="17" aria-hidden="true" />Visual + source editing</span>
    <span><Sparkles :size="17" aria-hidden="true" />Your choice of AI</span>
    <span><History :size="17" aria-hidden="true" />Local history + Git</span>
    <span><Download :size="17" aria-hidden="true" />PDF, HTML & more</span>
  </div>
  <section class="mark2-section mark2-shell" id="features" aria-labelledby="features-title">
    <div class="mark2-section-heading"><div><p class="mark2-eyebrow">Core capabilities</p><h2 id="features-title">Tools for your<br />document workflow.</h2></div><p>Edit Markdown, review changes, and prepare documents for sharing from the same workspace.</p></div>
    <div class="mark2-feature-grid">
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><FileText :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">01</span></div><h3>Visual and source editing</h3><p>Format headings, lists, tables, and images on the rendered page. Switch to source mode for direct control over Markdown syntax.</p><a :href="withBase('/docs/editor')">Editor guide<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><Sparkles :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">02</span></div><h3>AI writing assistance</h3><p>Use Agent to rewrite, summarize, or translate content. Enable inline completion for short suggestions while writing.</p><a :href="withBase('/docs/ai')">AI setup and usage<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><GitBranch :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">03</span></div><h3>Git version control</h3><p>Review diffs, stage changes, and create commits. Manage branches and configured remotes in the Git panel.</p><a :href="withBase('/docs/git')">Git workflow guide<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><History :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">04</span></div><h3>Local document history</h3><p>Compare saved snapshots and restore an earlier version into a draft before saving it to disk.</p><a :href="withBase('/docs/history')">History and recovery<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><Download :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">05</span></div><h3>Multiple export formats</h3><p>Export PDF, PNG, HTML, or Markdown. Configure page size, margins, and a table of contents generated from headings.</p><a :href="withBase('/docs/export')">Export guide<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><Palette :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">06</span></div><h3>Configurable appearance</h3><p>Choose light or dark themes, set prose and code fonts, and adjust the outline, toolbar, and sidebar layout.</p><a :href="withBase('/docs/appearance')">Appearance settings<ArrowRight :size="15" aria-hidden="true" /></a></article>
    </div>
  </section>
  <section class="mark2-ai-section" aria-labelledby="ai-title">
    <div class="mark2-shell mark2-ai-grid"><div><p class="mark2-eyebrow">Optional AI integration</p><h2 id="ai-title">Choose your provider.<br /><em>Control permissions.</em></h2><p class="mark2-ai-lede">Connect OpenAI, DeepSeek, Anthropic, Gemini, or a compatible custom service. Configure the provider and model for Agent and inline completion.</p><div class="mark2-provider-list"><span>OpenAI</span><span>DeepSeek</span><span>Anthropic</span><span>Gemini</span><span>Custom API</span></div></div><div class="mark2-ai-details">
      <div class="mark2-ai-point"><ShieldCheck :size="20" aria-hidden="true" /><div><h3>Optional configuration</h3><p>Editing, file management, and export work without an AI provider.</p></div></div>
      <div class="mark2-ai-point"><ShieldCheck :size="20" aria-hidden="true" /><div><h3>Document context</h3><p>Work with a selected passage or reference workspace files with @.</p></div></div>
      <div class="mark2-ai-point"><ShieldCheck :size="20" aria-hidden="true" /><div><h3>Tool permissions</h3><p>Choose Default, Plan, or Auto mode to control Agent write operations.</p></div></div>
      <a class="mark2-privacy-link" :href="withBase('/docs/privacy')">AI requests send context to your selected service. Understand what is shared →</a>
    </div></div>
  </section>
  <section class="mark2-section mark2-shell" aria-labelledby="workflow-title"><p class="mark2-eyebrow">Typical workflow</p><h2 id="workflow-title">From editing<br />to export.</h2><ol class="mark2-workflow">
    <li><span class="mark2-workflow-number">01</span><h3>Create or open</h3><p>Start a document or open an existing file or folder.</p></li>
    <li><span class="mark2-workflow-number">02</span><h3>Edit and revise</h3><p>Use visual or source editing, with optional AI assistance.</p></li>
    <li><span class="mark2-workflow-number">03</span><h3>Review and save</h3><p>Compare local history and record project changes with Git.</p></li>
    <li><span class="mark2-workflow-number">04</span><h3>Export and share</h3><p>Choose PDF, PNG, HTML, or editable Markdown.</p></li>
  </ol></section>
  <section class="mark2-guides-section mark2-shell" aria-labelledby="guides-title"><div class="mark2-section-heading"><div><p class="mark2-eyebrow">Documentation</p><h2 id="guides-title">Guides by task.</h2></div><a class="mark2-text-link" :href="withBase('/docs/')">Visit the help center<ArrowRight :size="17" aria-hidden="true" /></a></div><div class="mark2-home-guides">
    <a :href="withBase('/docs/getting-started')"><span>01 / GUIDE</span><h3>Getting started</h3><p>Install Mark2, create a document, and export a PDF.</p><ArrowRight :size="20" aria-hidden="true" /></a>
    <a :href="withBase('/docs/markdown')"><span>02 / GUIDE</span><h3>Markdown examples</h3><p>Copy patterns for tables, code, math, and diagrams.</p><ArrowRight :size="20" aria-hidden="true" /></a>
    <a :href="withBase('/docs/troubleshooting')"><span>03 / GUIDE</span><h3>Troubleshooting</h3><p>Check common saving, AI, Git, and export problems.</p><ArrowRight :size="20" aria-hidden="true" /></a>
  </div></section>
  <section class="mark2-section mark2-shell mark2-faq" aria-labelledby="faq-title"><div><p class="mark2-eyebrow">Frequently asked questions</p><h2 id="faq-title">Before you install.</h2></div><div class="mark2-faq-list">
    <details><summary>Which platforms are supported?<span aria-hidden="true">+</span></summary><p>Mark2 is currently available for macOS. Download the installer that matches your Mac from the release page.</p></details>
    <details><summary>Do I need AI to use Mark2?<span aria-hidden="true">+</span></summary><p>No. Editing, file management, local history, and export work without setting up an AI provider. AI features are optional.</p></details>
    <details><summary>Can I use my existing Markdown files?<span aria-hidden="true">+</span></summary><p>Yes. Open an individual file or a folder of documents. Your content remains Markdown that you can use with other editors.</p></details>
    <details><summary>What is the difference between history and Git?<span aria-hidden="true">+</span></summary><p>Local history keeps document snapshots on this computer. Git records commits for a repository and can share them through a configured remote.</p></details>
  </div></section>
  <section class="mark2-final mark2-shell" aria-labelledby="download-title"><img :src="withBase('/mark2-icon.png')" alt="" width="64" height="64" /><p class="mark2-eyebrow">Download Mark2</p><h2 id="download-title">Start with your next document.</h2><p>Available for macOS, with Apple Silicon and Intel builds.</p><div class="mark2-actions"><a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer"><Download :size="17" aria-hidden="true" />Download for macOS</a><a class="mark2-button mark2-button-secondary" :href="withBase('/docs/getting-started')">Get started<ArrowRight :size="17" aria-hidden="true" /></a></div></section>
  <footer class="mark2-home-footer mark2-shell"><div><a class="mark2-footer-brand" :href="withBase('/')"><img :src="withBase('/mark2-icon.png')" alt="" width="25" height="25" />Mark2</a><p>Markdown editing for macOS.</p></div><nav :aria-label="'Documentation'"><a :href="withBase('/docs/')">Documentation</a><a :href="withBase('/docs/privacy')">Privacy & AI</a><a href="https://github.com/mark2-editor/mark2/releases">Releases</a></nav><span>© 2026 Mark2</span></footer>
</div>
