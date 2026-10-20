---
title: Files and workspaces
description: Open folders, organize Markdown files, manage image assets, and understand drafts and auto-save.
---

# Files and workspaces

Mark2 works with files on your computer. Open a single document for a quick edit, or a folder to keep a set of related notes together.

## Open the right scope

| What you want to do | How to start |
| --- | --- |
| Edit one file | **File → Open**, or **⌘O** |
| Browse related documents | **File → Open Folder** |
| Start a new draft | **File → New**, or **⌘N** |
| Jump to a workspace file | **File → Quick Open**, or **⌘P** |
| Work in another window | **File → New Window**, or **⌘⇧N** |

The folder tree shows the workspace files; the open-files list keeps documents you are working on within reach. Closing a document with **⌘W** closes its editor view, rather than deleting the file.

## Organize a small writing project

Keep related Markdown and images together. For example:

```text
project-notes/
  overview.md
  meetings/
    kickoff.md
  guides/
    setup.md
  assets/
    screenshot.png
```

Use descriptive names and relative links, such as `[Setup guide](./guides/setup.md)`. If you move or rename a file, review links that refer to its previous location.

## Understand drafts and saves

A **draft** is your working content in Mark2. A **saved file** is the version written to disk. A **history snapshot** is an older version retained by local history.

Press **⌘S** to save. A new document needs a name and location before it becomes a disk file. Use **File → Save As** (**⌘⇧S**) to save under another name or location.

In **Settings → Editor**, choose an auto-save mode:

| Mode | When Mark2 writes to disk |
| --- | --- |
| Off | You save manually with **⌘S**; edits remain drafts until then |
| After delay | After typing stops for the configured delay |
| On focus change | When switching documents or apps, or minimizing the window |

::: tip Save before sharing
If another application, Git, or a backup tool needs the latest content, save the document first. A visible draft can be newer than the disk file.
:::

Auto-save and local history have separate settings. An automatic disk save does not necessarily create a new history entry every time. See [Local history](./history).

## Keep images with your document

Insert an image with the **Insert** menu, or paste or drag an image into the editor. In **Settings → Image**, choose where pasted and dragged images are stored.

For portable documents, keep local assets with the project and check the resulting image paths in source mode. When sharing Markdown, include the referenced image files too.

Image upload is an optional alternative. If enabled and configured, pasted or dragged images are sent to your S3-compatible storage and the document receives an online link. Failed uploads fall back to local saving. See [Privacy and AI](./privacy#other-network-features) before enabling uploads.

## Search your workspace

Use **⌘F** to search the current document and **⌘⇧F** for global search. A specific word, file name, or phrase helps narrow a large collection of notes.

Use the [Outline panel](./editor#navigate-a-long-document) to jump between headings within a document.

## Protect your files

Local history helps recover previous text on this computer. Git records deliberate checkpoints for a project. Keep a separate backup of important files and images; neither an unsaved draft nor local-only history is a copy on another device.

Continue with [Local history](./history) or [Git workflow](./git).
