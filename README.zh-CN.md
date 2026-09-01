# Mark2

[English](README.md)

Mark2 是一款适用于 macOS 的桌面 Markdown 编辑器，将写作、审阅、版本管理和导出整合在同一个工作区中。

## 应用功能

- **可视化编辑与源码模式**：直接在渲染后的页面上写作，需要精确控制时编辑底层 Markdown 文本。
- **文件与文件夹工作区**：打开文档或工作区，使用大纲、搜索、自动保存和本地历史整理写作内容。
- **写作中的 AI 辅助**：使用 Agent 进行对话、改写、总结、翻译和工作区文件操作；行内补全可以建议下一句话。
- **通过 Git 审阅变更**：查看 diff、暂存文件、创建提交、切换分支，并在编辑器中完成常用 Git 操作。
- **工作区自定义**：选择编辑器和代码主题，并调整字体和背景纹理。
- **预览与导出文档**：预览 HTML、PDF、图片和视频文件；导出 Markdown、HTML、PDF 或 PNG，也可以复制富文本。

![Mark2 编辑器展示渲染后的 Markdown 文档](./public/mark2-editor-dark.png)

## 下载

Mark2 当前支持 macOS。请前往 [最新 Mark2 版本](https://github.com/hzjjg/mark2-editor-release/releases/latest)，并根据 Mac 芯片选择安装包：

- **Apple 芯片（M1、M2、M3 或 M4）**：`mark2_<version>_aarch64.dmg`
- **Intel 芯片**：`mark2_<version>_x64.dmg`

手动安装时只需要下载 `.dmg` 文件。`.app.tar.gz`、`.app.tar.gz.sig` 和 `latest.json` 供应用内更新使用。详细使用说明请参阅 [Mark2 帮助文档](./zh/docs/index.md)。

## 在 macOS 上安装

1. 打开下载的 DMG 文件。
2. 将 **mark2** 拖入“应用程序（Applications）”文件夹。
3. 打开“应用程序”，右键点击 **mark2**，选择“打开”，然后确认。
4. 如果 macOS 拦截应用，请打开“系统设置 → 隐私与安全性”，选择“仍要打开”。

当前版本尚未使用 Apple Developer ID 完成签名和公证，首次打开 Mark2 时 macOS 可能会显示安全提示。请保持 Gatekeeper 开启。如果应用仍然无法打开，请参考 Apple 的[打开来自身份不明开发者的 Mac App](https://support.apple.com/en-ie/guide/mac-help/-mh40616/mac)指南。

> **开发状态**：Mark2 仍处于早期开发阶段，部分功能可能不完整、不稳定，或会在后续版本中调整。重要文档请做好备份，不要将 Mark2 作为关键资料的唯一副本。
