---
title: Editor basics
description: Write visually or in source mode, format documents, navigate headings, and search your work.
---

# Editor basics

Mark2 gives you two views of the same Markdown document: a visual editor for writing on a rendered page and source mode for working directly with the text.

<Mark2DocImage dark-src="/mark2-editor-basics-dark.png" light-src="/mark2-editor-light.png" alt="A Markdown document in the Mark2 visual editor with a folder sidebar and formatting controls." caption="Write on the rendered page and keep your project files close at hand. Select the image to enlarge it." />

## Format text

Select a passage, then use the formatting toolbar or **Format** menu. For a new block, place the cursor where you want it before choosing a heading, list, quote, or code block.

| Content | What to use |
| --- | --- |
| A document title or section | **Format → Heading** |
| Emphasis | Bold (**⌘B**) or italic (**⌘I**) |
| Steps or related points | Ordered or bullet list |
| A quotation | Blockquote |
| A short code identifier | Inline code |
| A code example | Code block with a language label |
| A comparison | Table |
| A reference or illustration | Link or image from **Insert** |

Markdown input also lets you create common structures as you type. Use source mode when you want to paste a complete Markdown example.

## Work with lists and tables

- Press **Enter** in a list to create the next item.
- Use **Tab** and **Shift+Tab** to indent or outdent list items.
- In a table, **Tab** moves to the next cell and **Shift+Tab** to the previous one.
- From the last cell, **Tab** can add another row.
- Use **Shift+Enter** for a line break within a block.

When an AI suggestion is visible, **Tab** accepts that suggestion. Dismiss it with **Esc** before using Tab for normal table or list navigation.

## Switch to source mode

Choose **View → Source mode**. This is useful for checking a link target, editing frontmatter, adjusting a code block, or inspecting Markdown syntax.

Source mode and the visual editor share the document; switching views does not create a separate file. Save with **⌘S** in either mode.

::: tip Keep a copy of complex documents
When opening Markdown that uses another tool's custom syntax or HTML, check it in source mode and review the saved output before replacing your only copy. Different Markdown renderers can interpret extensions differently.
:::

## Navigate a long document

Use headings to create a clear structure. The **Outline** panel lists those headings; select one to jump to its section.

A useful structure is one main title, second-level headings for major sections, and third-level headings for details. Heading structure also feeds the optional export table of contents.

Show or hide the outline, formatting toolbar, and sidebars from the **View** menu. In **Settings → Editor**, choose the outline side and document alignment.

## Find and replace

| Action | macOS shortcut |
| --- | --- |
| Search this document | **⌘F** |
| Find next match | **⌘G** |
| Find previous match | **⌘⇧G** |
| Open replace | **⌘⌥F** |
| Search the workspace | **⌘⇧F** |
| Quickly open a file | **⌘P** |

Review replacement results before saving, especially when replacing a short word that can appear inside longer words or links.

## Undo, save, and recover

Use **⌘Z** to undo and **⌘⇧Z** to redo recent edits. Undo handles the current editing session. [Local history](./history) helps compare or restore older saved versions, and [Git](./git) records project checkpoints.

For saving and auto-save details, read [Files and workspaces](./files). For copyable syntax, continue with [Markdown examples](./markdown).
