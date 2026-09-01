# Mark2

> This repository does not contain the Mark2 editor source code. It is maintained for the official website, user documentation, and issue tracking.

Official website and documentation: [https://mark2-editor.github.io/mark2/](https://mark2-editor.github.io/mark2/)

[简体中文](README.zh-CN.md)

Mark2 is a desktop Markdown editor for macOS. It keeps writing, review, versioning, and export in one focused workspace.

## Features

- **Write in visual or source mode** — Compose on a rendered page, or edit the underlying Markdown when you need precise control.
- **Work with files and folders** — Open a document or workspace, then use outline, search, auto-save, and local history to keep your work organized.
- **Use AI while you write** — Ask Agent to chat, rewrite, summarize, translate, or work with workspace files. Inline completion can suggest the next sentence.
- **Review changes with Git** — Inspect diffs, stage files, create commits, switch branches, and manage common Git operations from the editor.
- **Customize the workspace** — Choose editor and code themes, and adjust the font and background texture.
- **Preview and export documents** — Preview HTML, PDF, images, and video files. Export Markdown, HTML, PDF, or PNG, and copy rich text when needed.

![Mark2 editor showing a rendered Markdown document](./public/mark2-editor-dark.png)

## Main features

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Visual and source editing</h3>
      <p>Write on a rendered page, then switch to source mode when you need precise control over the Markdown.</p>
      <img src="./public/mark2-editor-basics-dark.png" alt="Mark2 visual editor showing a rendered Markdown document" width="100%" />
      <p><a href="./docs/editor.md">Read the editor guide →</a></p>
    </td>
    <td width="50%" valign="top">
      <h3>AI assistance</h3>
      <p>Use Agent for rewrites, summaries, translations, and document questions while keeping the draft in view.</p>
      <img src="./public/mark2-agent-dark.png" alt="Mark2 Agent reviewing a Markdown draft beside the editor" width="100%" />
      <p><a href="./docs/ai.md">Read the AI guide →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Local history</h3>
      <p>Compare saved snapshots and restore an earlier draft without immediately replacing the file on disk.</p>
      <img src="./public/mark2-history-draft-dark.png" alt="Mark2 comparing a saved version with a draft" width="100%" />
      <p><a href="./docs/history.md">Read the history guide →</a></p>
    </td>
    <td width="50%" valign="top">
      <h3>Git workflow</h3>
      <p>Review diffs, stage changes, create commits, and work with branches and remotes from one visual panel.</p>
      <img src="./public/mark2-git-dark.png" alt="Mark2 Git panel showing changes and recent commits" width="100%" />
      <p><a href="./docs/git.md">Read the Git guide →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Document export</h3>
      <p>Export PDF, PNG, HTML, or Markdown. PDF keeps headings, tables, code, math, and Mermaid diagrams.</p>
      <img src="./public/mark2-export-pdf.png" alt="A PDF exported from Mark2 and opened in Preview" width="100%" />
      <p><a href="./docs/export.md">Read the export guide →</a></p>
    </td>
    <td width="50%" valign="top">
      <h3>Appearance settings</h3>
      <p>Choose the editor theme, code theme, fonts, interface scale, and background texture for comfortable sessions.</p>
      <img src="./public/mark2-settings-appearance.png" alt="Mark2 Appearance settings showing theme and font controls" width="100%" />
      <p><a href="./docs/appearance.md">Read the appearance guide →</a></p>
    </td>
  </tr>
</table>

## Download

Mark2 currently supports macOS. Open the [latest Mark2 release](https://github.com/mark2-editor/mark2/releases/latest), then choose the installer for your Mac:

- **Apple silicon (M1, M2, M3, or M4):** `mark2_<version>_aarch64.dmg`
- **Intel:** `mark2_<version>_x64.dmg`

For a manual installation, download the `.dmg` file. The `.app.tar.gz`, `.app.tar.gz.sig`, and `latest.json` files are used by the in-app updater. For usage instructions, see the [Mark2 help documentation](./docs/index.md).

## Install on macOS

1. Open the downloaded DMG.
2. Drag **mark2** to **Applications**.
3. Open **Applications**, Control-click **mark2**, choose **Open**, and confirm.
4. If macOS blocks the app, open **System Settings → Privacy & Security**, then choose **Open Anyway**.

Current builds are not signed or notarized with an Apple Developer ID, so macOS may show a security warning the first time you open Mark2. Keep Gatekeeper enabled. If the app is still blocked, follow Apple’s guide for [opening a Mac app from an unidentified developer](https://support.apple.com/en-ie/guide/mac-help/-mh40616/mac).

> **Development status:** Mark2 is still in early development. Some features may be incomplete, unstable, or change in future releases. Keep backups of important documents and do not rely on Mark2 as the only copy of critical work.
