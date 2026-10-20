---
title: Getting started
description: Install Mark2 on macOS and go from your first draft to an exported document.
---

# Getting started

This guide covers installing Mark2, creating and saving a Markdown document, and exporting a PDF.

## Install Mark2

1. Open the [Mark2 releases page](https://github.com/mark2-editor/mark2/releases/latest).
2. Download the macOS installer for your Mac. Choose **Apple Silicon / aarch64** for an M-series Mac or **Intel / x64** for an Intel Mac when separate downloads are offered. You can check your chip in **Apple menu → About This Mac**.
3. Open the downloaded `.dmg` and move Mark2 to **Applications**.
4. Open Mark2 from Applications.

If macOS prevents the app from opening, see [installation troubleshooting](./troubleshooting#mark2-will-not-open). The public download currently supports macOS only.

## Create your first document

1. Choose **File → New** or press **⌘N**.
2. Write a title and a short paragraph. Use **Format → Heading** to turn the title into a heading.
3. Add a few bullet points with the formatting toolbar or **Format** menu.
4. Press **⌘S**, choose a location, and save the file as `first-note.md`.

You are editing a Markdown file. You can open the same file in another text editor or include it in an existing project.

::: tip Try a small, useful document
Write a meeting note with a heading, three decisions, and a task list. You will learn more from a real draft than from an empty page.
:::

## Open an existing file or folder

Use **File → Open** (**⌘O**) for an individual document. Use **File → Open Folder** to work with a collection of files in the sidebar.

For a folder of notes, **⌘P** opens the quick-open picker and **⌘⇧F** searches the workspace. Learn how to organize your documents in [Files and workspaces](./files).

## See the Markdown underneath

Choose **View → Source mode** to edit the underlying text. Switch back to continue on the rendered page. Both modes work on the same document.

Try this in source mode:

```markdown
# My first note

Notes for today's meeting.

- [ ] Write a first draft
- [ ] Review the wording
- [ ] Share the result
```

For tables, code, math, and diagrams, see [Markdown examples](./markdown).

## Set up saving and recovery

- **⌘S** writes your document to disk.
- **Settings → Editor → Auto-save** controls automatic disk saves.
- **Settings → Storage → Enable local history** controls saved snapshots.

Drafts, saved files, and historical snapshots serve different purposes. See [saving behavior](./files#understand-drafts-and-saves) before relying on auto-save.

## Export a PDF

1. Save your work.
2. Open **Settings → Export** and choose your page size and margins.
3. Choose **File → Export → PDF** (**⌘⇧E**).
4. Save the PDF and open it in Preview to check the result.

[Export documents](./export) explains the other formats and how to prepare a document for sharing.

## Add AI when you want it

AI setup is optional. To try it, open **Settings → AI**, add a provider, configure a model, and test the connection. Then open the right sidebar and ask Agent to improve a short passage.

Start with a focused request: “Make this paragraph shorter while keeping all the facts.” Read [AI assistant](./ai) and [Privacy and AI](./privacy) before working with sensitive content.

## Where to go next

- [Editor basics](./editor) — formatting, navigation, and search.
- [Keyboard shortcuts](./shortcuts) — common macOS actions at a glance.
- [Appearance](./appearance) — find a comfortable theme and layout.
- [Troubleshooting](./troubleshooting) — resolve common problems.
