---
title: Local history
description: Compare and restore local document snapshots in Mark2.
---

# Local history

Local history is Mark2's built-in safety net. It saves older copies of a document on this computer, so you can look back or recover an earlier draft.

It is different from Git: local history protects individual documents, while Git keeps a shared change record for a whole folder or project.

## Turn it on

Open **Settings → Storage** and choose:

- **Enable local history** — turn automatic snapshots on or off.
- **Max versions per file** — keep 10, 25, or 50 versions of each file.
- **Total storage limit** — use 200 MB, 500 MB, 1 GB, or no limit.
- **Auto-save history interval** — decide how often auto-save adds a new version.

Mark2 records a version when you save. A manual save always records one; the interval keeps frequent auto-saves from filling the list too quickly.

## Compare older versions

Open the document's **History** view in the editor sidebar. Each entry shows a small content preview and its time. Select an entry to compare it with the previous version, the current document, or another entry.

## Restore a version

Choose **Restore** in the comparison view. Mark2 puts the older content into a draft first, so the file on disk is not replaced immediately. Review it, then save it when you are happy with the result.

You can clear all local history in **Settings → Storage**. This cannot be undone.
