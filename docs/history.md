---
title: Local history
description: Configure snapshots, compare document versions, and safely restore older content into a draft.
---

# Local history

Local history keeps earlier document versions on this computer. Use it to compare drafts or recover wording you want to bring back.

It is separate from [Git](./git): history protects individual documents with local snapshots, while Git records deliberate commits for a repository.

## Enable and configure snapshots

Open **Settings → Storage**:

| Setting | What it controls |
| --- | --- |
| Enable local history | Whether Mark2 records history snapshots |
| Max versions per file | Retain 10, 25, or 50 versions per document |
| Total storage limit | 200 MB, 500 MB, 1 GB, or unlimited |
| Auto-save history interval | How frequently automatic saves may add a snapshot |

When history is enabled, manual saves record changed content without waiting for the automatic interval. Unchanged content is not duplicated. Automatic saves follow the history interval, so frequent disk writes do not have to create frequent snapshots. Choosing **Never** for the automatic history interval stops automatic snapshots, while manual saves still record versions.

Old snapshots are pruned when retention limits are reached. Increasing a limit preserves more future history; it does not recreate entries already removed.

## Compare two versions

1. Open the document you want to review.
2. Open **History** from the editor sidebar.
3. Select an entry by its timestamp and content preview.
4. Choose the comparison target: the previous version, the current document, or another entry.
5. Read the diff before deciding what to restore.

<Mark2DocImage dark-src="/mark2-history-draft-dark.png" light-src="/mark2-history-draft-light.png" alt="Mark2 comparing a saved version with the current draft." caption="Compare the saved text with the current draft before restoring anything." />

## Restore an older version

Choose **Restore** in the comparison view. Mark2 loads the selected content into a draft first; the disk file is not immediately replaced.

Review the draft, make any needed adjustments, and press **⌘S** when you want that content written to the file. If auto-save is enabled, the restored draft can be written according to your auto-save mode. Switch auto-save off first if you want time to inspect it without an automatic disk save.

If you only need one paragraph, use the comparison to find it and bring back the relevant text rather than restoring the entire document.

## Manage storage

The storage settings show local storage use and let you clear history. **Clear all local history** removes stored snapshots and cannot be undone.

History is local to this computer and is subject to retention limits. Keep a separate backup of important documents and assets. A Git remote can preserve commits you have pushed, but it does not include every local draft or snapshot.

## If an entry is missing

Check that history was enabled when the document was saved. Auto-save may not have passed the snapshot interval yet, and older entries may have been removed by the version or storage limit.

For disk-save behavior, see [Files and workspaces](./files#understand-drafts-and-saves). For named project checkpoints, see [Git workflow](./git).
