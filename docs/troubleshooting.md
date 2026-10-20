---
title: Troubleshooting
description: Resolve common installation, saving, history, AI, Git, image, and export problems in Mark2.
---

# Troubleshooting

Start with the symptom below. Save a copy of important work before making changes to files or settings.

## Mark2 will not open

1. Confirm that you downloaded the macOS package from the [official release page](https://github.com/mark2-editor/mark2/releases/latest).
2. Check **Apple menu → About This Mac** and verify the package matches your chip when the release offers separate builds.
3. Move Mark2 into Applications before launching it.
4. If macOS shows a security prompt, review **System Settings → Privacy & Security** and follow the system's available opening workflow for an app you trust.
5. If the download appears damaged or incomplete, download it again from the release page.

Keep macOS security controls enabled. Include the exact error text when reporting an installation issue.

## Changes do not appear in the disk file

A draft can be newer than the saved file. Press **⌘S**, confirm the save location, and reopen the file in the other application.

Check **Settings → Editor → Auto-save**. Off keeps edits as drafts until a manual save; After delay waits for a pause; On focus change writes when you switch away.

If saving reports a permission error, use **Save As** to a writable folder you control. Check that the original folder or external drive is available and writable. See [Files and workspaces](./files).

## Local history is empty or missing entries

Check **Settings → Storage → Enable local history**, then make a manual save. Automatic snapshots also depend on the history interval. A **Never** interval disables automatic snapshots.

Older entries can be pruned by the per-file or total storage limit. Clearing history removes snapshots permanently; changing the limits does not restore deleted entries. See [Local history](./history).

## AI does not respond

Check these in order:

1. AI is enabled and a provider and model are selected.
2. The API key is present when the provider requires it.
3. The configured model is available to your account.
4. A custom endpoint matches the expected provider protocol.
5. The connection test succeeds and your network can reach the service.
6. The provider has not rejected the request because of quota, rate limits, or account restrictions.

If chat works but tools fail, check model tool support. If Agent cannot write, check whether the session is in Plan mode or awaiting confirmation in Default mode.

If only inline completion fails, enable it, check its provider/model overrides, and try **⌘J** in the document. See [AI assistant](./ai).

## Git is unavailable or a remote action fails

| Symptom | What to check |
| --- | --- |
| Git not found | Git is installed and available to the system |
| No repository | The opened file or folder belongs to a Git repository |
| Expected changes missing | The document is saved to disk; inspect ignored files too |
| Commit rejected | Git author name and email are configured |
| Push or pull rejected | Remote URL, network, credentials, and branch permissions |
| Conflicting changes | Resolve and save the conflicts before continuing |

Remote Git uses Git's authentication, not the AI API key. See [Git workflow](./git) for the normal staging and commit sequence.

## An image is missing

Check the image path in source mode. A relative path must match the document's current location; moving a file can break it. Confirm that the asset exists and can be opened.

For a remote image, check its URL and network access. For uploaded images, check your storage configuration and whether the URL is accessible to the intended readers.

When sharing Markdown or HTML, include any referenced local assets. See [Files and workspaces](./files#keep-images-with-your-document).

## An export is missing content or has an unexpected layout

1. Check that the visual editor renders the content correctly.
2. Fix missing images, invalid math, or Mermaid errors.
3. Review page size, margins, and table of contents in **Settings → Export**.
4. Try a wider page or simplify wide tables and long code lines.
5. Export again and open the output in the appropriate viewer.

Check every page of a PDF, rather than only its first page. See [Export documents](./export).

## The interface or shortcut looks wrong

Reset zoom with **⌘0**, try a built-in font, and check interface scale in Appearance settings. Use the **View** menu to restore a hidden toolbar or sidebar.

For a shortcut issue, focus the editor and compare the key with the in-app **Keyboard shortcuts** reference. Some controls handle keys differently. See [Appearance](./appearance) and [Keyboard shortcuts](./shortcuts).

## Report a reproducible problem

Include the Mark2 version from About, your macOS version, the action you took, what you expected, and the exact error. If relevant, attach a small example document with private text removed.

Before sharing screenshots or logs, remove API keys, private file paths, and sensitive content. Use the support channel listed on the [Mark2 project page](https://github.com/mark2-editor/mark2).
