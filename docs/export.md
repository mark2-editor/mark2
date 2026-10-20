---
title: Export documents
description: Choose PDF, PNG, HTML, or Markdown, adjust page settings, and check exported documents.
---

# Export documents

Choose **File → Export** to turn your draft into a shareable file. Start with the reader's needs: a fixed page layout, an image, a browser document, or editable Markdown.

## Choose a format

| Format | Best for | What to check |
| --- | --- | --- |
| PDF | Printing and sharing a finished layout | Page breaks, margins, tables, and links |
| PNG | A rendered image | Image dimensions and readability |
| HTML | Reading in a browser | Rendering, links, and referenced assets |
| Markdown | Editing in another tool | Source syntax and image paths |

You can also copy original Markdown or formatted rich text from the editor menus when you only need to transfer content.

## Prepare your document

1. Save the latest draft.
2. Check heading order, image loading, and table width in the visual editor.
3. Confirm that code, math, and Mermaid diagrams render correctly.
4. Remove unfinished notes and check any links readers need.

Exports depend on the content that can be rendered. Resolve broken images and diagram syntax before exporting.

## Configure page settings

Open **Settings → Export** before exporting or printing:

- **Page size:** A4, A3, A5, US Letter, or US Legal.
- **Margins:** set the top, bottom, left, and right margins.
- **Table of contents:** generate a contents section from document headings.

The table of contents setting is used for PDF, HTML, PNG, and printing. Page settings also affect PDF and PNG output. Heading structure matters: use descriptive section headings in a consistent hierarchy.

## Export a PDF

1. Choose your page settings.
2. Select **File → Export → PDF**, or press **⌘⇧E**.
3. Choose the output location and name.
4. Open the result in Preview and inspect every page.

<Mark2DocImage src="/mark2-export-pdf.png" alt="A PDF exported from Mark2 open in Preview with a generated table of contents." caption="A real Mark2 document exported to PDF and checked in Preview." />

Look for wide tables, long code lines, clipped content, awkward page breaks, and diagrams that need more space. Increase the page size, adjust margins, or simplify the content if necessary.

## Export PNG or HTML

Choose the format in **File → Export** and save the result. Open a PNG in an image viewer or HTML in a browser to check how readers will see it.

For HTML and Markdown, inspect image references before sending the file. A path to an image on your computer may not be available on the reader's computer. Share any required local assets with the document, or use appropriate hosted images.

## Export Markdown

Markdown preserves editable text and syntax rather than a fixed page layout. Use it when someone needs to revise the document or publish it through another Markdown tool.

Check source mode for tool-specific syntax and relative paths. Rendering of extensions such as math and Mermaid depends on the destination tool.

## Print instead of exporting

Use **File → Print** (**⌘⇧P**) when you need the system print workflow. Review the preview and destination before confirming the print job.

For rendering or output problems, see [Export troubleshooting](./troubleshooting#an-export-is-missing-content-or-has-an-unexpected-layout).
