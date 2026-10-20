---
title: Git workflow
description: Review diffs, stage files, commit changes, and work with branches and remotes in Mark2.
---

# Git workflow

Git keeps a change history for a folder. Mark2 brings common Git operations into a visual panel so you can review and commit your writing alongside the document.

## Before you begin

Git must be installed and available to the system. Open a file or folder inside an existing Git repository, then open the **Git** panel. If no repository is detected, verify that you opened the intended folder.

A remote is optional for local commits. Remote actions need a configured remote and working Git credentials; AI credentials do not authenticate Git.

## Learn the essential terms

| Term | Meaning |
| --- | --- |
| Repository | A folder whose changes Git tracks |
| Working tree | The files as they currently exist on disk |
| Diff | A comparison showing what changed |
| Stage | Select changes for the next commit |
| Commit | A named checkpoint of staged changes |
| Branch | A separate line of work |
| Remote | Another copy of the repository, often hosted online |

## Make a focused commit

1. Save your documents with **⌘S** so Git sees the latest text on disk.
2. Open the Git panel and select a changed file.
3. Review the diff. Check for accidental edits or files that should stay private.
4. Stage the files or changes that belong together.
5. Enter a message such as `docs: clarify setup steps`.
6. Choose **Commit** and check that the new entry appears in the history.

<Mark2DocImage dark-src="/mark2-git-dark.png" light-src="/mark2-git-light.png" alt="The Mark2 Git panel showing staged changes and recent commits." caption="Review changes and create a checkpoint without leaving the editor." />

A commit contains staged changes, not every open draft. If you edit a file after staging it, review and stage the new changes too. Mark2 can suggest a commit message with AI when configured; review the suggestion before committing.

## Work on a branch

Create a branch before trying a substantial rewrite. Use a descriptive name such as `revise-installation-guide`, make your changes, and commit them.

Before switching branches, inspect uncommitted changes. Commit or stash work you need to keep, and resolve any Git prompt about conflicting local changes. Switching branches changes the files on disk.

## Work with a remote

| Action | Purpose |
| --- | --- |
| Fetch | Download information about remote changes without integrating them |
| Pull | Fetch and integrate remote changes into the current branch |
| Push | Upload local commits to the configured remote |
| Sync | Coordinate incoming and outgoing changes using the panel's selected strategy |

Read the panel's ahead/behind status before syncing. A local commit is not on the remote until it has been pushed successfully.

**Merge** joins lines of work and may create a merge commit. **Rebase** replays local commits on top of another history and changes their identities. Use the strategy your project expects; inspect the operation before applying it to shared work.

## Resolve a conflict

A conflict means Git cannot combine overlapping edits automatically.

1. Open the conflicted file and inspect both versions.
2. Keep the intended wording and remove conflict markers such as `<<<<<<<`, `=======`, and `>>>>>>>`.
3. Save the resolved file and stage it.
4. Continue the operation shown by the Git panel.
5. Review the finished document before pushing.

## History and recovery

Use commit diffs to understand a previous change. A revert creates a new commit that undoes a previous commit; it is useful when the change has already been shared. Actions that discard working changes remove uncommitted work, so review what will be discarded first.

Use [Local history](./history) for document snapshots and [Git troubleshooting](./troubleshooting#git-is-unavailable-or-a-remote-action-fails) for missing Git, authentication, and identity errors.
