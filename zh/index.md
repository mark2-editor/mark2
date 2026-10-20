---
title: Mark2 — 专注写作的 Markdown 编辑器
description: 面向 macOS 的 Markdown 编辑器，支持可视化与源码编辑、可选 AI 辅助、本地历史、Git 集成，以及 PDF、PNG、HTML 和 Markdown 导出。
titleTemplate: false
layout: page
sidebar: false
outline: false
---

<script setup lang="ts">
import { withBase } from 'vitepress'
import { ArrowRight, Download, FileText, GitBranch, History, Palette, ShieldCheck, Sparkles } from 'lucide-vue-next'
import Mark2ProductTour from '../.vitepress/components/Mark2ProductTour.vue'
</script>

<div class="mark2-home">
  <section class="mark2-hero mark2-shell" aria-labelledby="hero-title">
    <div class="mark2-hero-copy">
      <h1 id="hero-title">专注写作的<br /><em>Markdown 编辑器。</em></h1>
      <p class="mark2-hero-lede">在一个桌面应用中完成 Markdown 文档的编辑、审阅、版本管理和导出，并在需要时使用 AI 辅助写作。</p>
      <div class="mark2-actions">
        <a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer"><Download :size="17" aria-hidden="true" />下载 macOS 版</a>
        <a class="mark2-button mark2-button-secondary" :href="withBase('/zh/docs/getting-started')">快速开始<ArrowRight :size="17" aria-hidden="true" /></a>
      </div>
    </div>
    <Mark2ProductTour locale="zh" />
  </section>
  <div class="mark2-capabilities mark2-shell">
    <span><FileText :size="17" aria-hidden="true" />可视化与源码编辑</span>
    <span><Sparkles :size="17" aria-hidden="true" />自由选择 AI 服务</span>
    <span><History :size="17" aria-hidden="true" />本地历史与 Git</span>
    <span><Download :size="17" aria-hidden="true" />PDF、HTML 等多种导出</span>
  </div>
  <section class="mark2-section mark2-shell" id="features" aria-labelledby="features-title">
    <div class="mark2-section-heading"><div><p class="mark2-eyebrow">核心功能</p><h2 id="features-title">Mark2 能做什么。</h2></div><p>编辑、审阅和导出 Markdown，不必切换应用。</p></div>
    <div class="mark2-feature-grid">
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><FileText :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">01</span></div><h3>可视化编辑，随时切换源码。</h3><p>在渲染后的页面上写作，需要精确修改时切换到源码模式；标题、列表和表格等格式可使用工具栏完成。</p><a :href="withBase('/zh/docs/editor')">编辑器使用指南<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><Sparkles :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">02</span></div><h3>在编辑器中使用 AI。</h3><p>用 Agent 改写、总结、翻译和回答文档问题；行内补全则在写作时提供下一句建议。</p><a :href="withBase('/zh/docs/ai')">AI 配置与使用<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><GitBranch :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">03</span></div><h3>在一个面板中管理 Git。</h3><p>查看 diff、暂存文件、创建提交，并处理分支和远端，不必切换到终端。</p><a :href="withBase('/zh/docs/git')">Git 工作流指南<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><History :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">04</span></div><h3>本地文档历史</h3><p>比较已保存的文档快照，将早期版本恢复到草稿，审阅后再保存到磁盘。</p><a :href="withBase('/zh/docs/history')">历史版本与恢复<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><Download :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">05</span></div><h3>导出 PDF、PNG、HTML 或 Markdown。</h3><p>PDF 会保留标题、表格、代码、数学公式和 Mermaid 图表等内容。</p><a :href="withBase('/zh/docs/export')">文档导出指南<ArrowRight :size="15" aria-hidden="true" /></a></article>
      <article class="mark2-feature-card"><div class="mark2-card-top"><span class="mark2-feature-icon"><Palette :size="21" :stroke-width="1.6" aria-hidden="true" /></span><span class="mark2-feature-number">06</span></div><h3>外观与布局设置</h3><p>选择明亮或深色主题，分别设置正文与代码字体，调整大纲、工具栏和侧边栏布局。</p><a :href="withBase('/zh/docs/appearance')">外观设置指南<ArrowRight :size="15" aria-hidden="true" /></a></article>
    </div>
  </section>
  <section class="mark2-ai-section" aria-labelledby="ai-title">
    <div class="mark2-shell mark2-ai-grid"><div><p class="mark2-eyebrow">可选的 AI 集成</p><h2 id="ai-title">接入自己的<br /><em>AI 服务。</em></h2><p class="mark2-ai-lede">连接 OpenAI、DeepSeek、Anthropic、Gemini 或兼容的自定义服务，分别配置 Agent 和行内补全所用的服务商与模型。</p><div class="mark2-provider-list"><span>OpenAI</span><span>DeepSeek</span><span>Anthropic</span><span>Gemini</span><span>Custom API</span></div></div><div class="mark2-ai-details">
      <div class="mark2-ai-point"><ShieldCheck :size="20" aria-hidden="true" /><div><h3>按需启用</h3><p>编辑、文件管理与导出无需配置 AI 服务。</p></div></div>
      <div class="mark2-ai-point"><ShieldCheck :size="20" aria-hidden="true" /><div><h3>文档上下文</h3><p>处理选中的段落，或使用 @ 引用工作区文件。</p></div></div>
      <div class="mark2-ai-point"><ShieldCheck :size="20" aria-hidden="true" /><div><h3>工具操作权限</h3><p>通过 Default、Plan 或 Auto 模式控制 Agent 的写入操作。</p></div></div>
      <a class="mark2-privacy-link" :href="withBase('/zh/docs/privacy')">AI 请求会向所选服务发送上下文。了解数据发送范围 →</a>
    </div></div>
  </section>
  <section class="mark2-section mark2-shell" aria-labelledby="workflow-title"><p class="mark2-eyebrow">文档工作流</p><h2 id="workflow-title">从草稿<br /><em>到最终文件。</em></h2><ol class="mark2-workflow">
    <li><span class="mark2-workflow-number">01</span><h3>编辑</h3><p>可视化编辑与源码模式。</p></li>
    <li><span class="mark2-workflow-number">02</span><h3>修改</h3><p>Agent 与行内补全。</p></li>
    <li><span class="mark2-workflow-number">03</span><h3>审阅</h3><p>本地历史与 Git。</p></li>
    <li><span class="mark2-workflow-number">04</span><h3>导出</h3><p>PDF、PNG、HTML 或 Markdown。</p></li>
  </ol></section>
  <section class="mark2-guides-section mark2-shell" aria-labelledby="guides-title"><div class="mark2-section-heading"><div><p class="mark2-eyebrow">使用文档</p><h2 id="guides-title">按任务查阅指南。</h2></div><a class="mark2-text-link" :href="withBase('/zh/docs/')">进入帮助中心<ArrowRight :size="17" aria-hidden="true" /></a></div><div class="mark2-home-guides">
    <a :href="withBase('/zh/docs/getting-started')"><span>01 / 指南</span><h3>快速开始</h3><p>安装 Mark2，创建文档并导出 PDF。</p><ArrowRight :size="20" aria-hidden="true" /></a>
    <a :href="withBase('/zh/docs/markdown')"><span>02 / 指南</span><h3>Markdown 示例</h3><p>查阅表格、代码、公式和图表的常用写法。</p><ArrowRight :size="20" aria-hidden="true" /></a>
    <a :href="withBase('/zh/docs/troubleshooting')"><span>03 / 指南</span><h3>常见问题</h3><p>排查保存、AI、Git 和导出中的常见问题。</p><ArrowRight :size="20" aria-hidden="true" /></a>
  </div></section>
  <section class="mark2-section mark2-shell mark2-faq" aria-labelledby="faq-title"><div><p class="mark2-eyebrow">常见问题</p><h2 id="faq-title">安装前须知。</h2></div><div class="mark2-faq-list">
    <details><summary>支持哪些平台？<span aria-hidden="true">+</span></summary><p>Mark2 暂时仅提供 macOS 版本。请在发布页面下载与你的 Mac 芯片类型匹配的安装包。</p></details>
    <details><summary>必须使用 AI 吗？<span aria-hidden="true">+</span></summary><p>不需要。编辑、文件管理、本地历史和导出无需配置 AI 服务。AI 功能由你选择是否启用。</p></details>
    <details><summary>可以打开现有的 Markdown 文件吗？<span aria-hidden="true">+</span></summary><p>可以。你可以打开单个文件，也可以打开包含多篇文档的文件夹。内容依然以 Markdown 保存，方便在其他编辑器中继续使用。</p></details>
    <details><summary>本地历史和 Git 有什么区别？<span aria-hidden="true">+</span></summary><p>本地历史在这台电脑上保存文档快照；Git 为整个仓库记录提交，并可通过已配置的远端分享这些提交。</p></details>
  </div></section>
  <section class="mark2-final mark2-shell" aria-labelledby="download-title"><img :src="withBase('/mark2-icon.png')" alt="" width="64" height="64" /><p class="mark2-eyebrow">下载 Mark2</p><h2 id="download-title">从你的下一篇<br /><em>Markdown 文档开始。</em></h2><p>支持 macOS，提供 Apple Silicon 与 Intel 版本。</p><div class="mark2-actions"><a class="mark2-button mark2-button-primary" href="https://github.com/mark2-editor/mark2/releases/latest" target="_blank" rel="noopener noreferrer"><Download :size="17" aria-hidden="true" />下载 macOS 版</a><a class="mark2-button mark2-button-secondary" :href="withBase('/zh/docs/getting-started')">快速开始<ArrowRight :size="17" aria-hidden="true" /></a></div></section>
  <footer class="mark2-home-footer mark2-shell"><div><a class="mark2-footer-brand" :href="withBase('/zh/')"><img :src="withBase('/mark2-icon.png')" alt="" width="25" height="25" />Mark2</a><p>专注写作的 Markdown 编辑器。</p></div><nav :aria-label="'帮助文档'"><a :href="withBase('/zh/docs/')">帮助文档</a><a :href="withBase('/zh/docs/privacy')">隐私与 AI</a><a href="https://github.com/mark2-editor/mark2/releases">版本发布</a></nav><span>© 2026 Mark2</span></footer>
</div>
