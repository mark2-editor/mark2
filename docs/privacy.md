---
title: Privacy and AI
description: Understand local files, AI context sharing, Agent permissions, image uploads, and remote Git operations.
---

# Privacy and AI

Mark2 edits files on your computer. AI and other network features have their own data flows; choose them according to the content you are working with.

## What stays local

Your disk documents, working drafts, local history, and Agent session records are stored on this computer. Basic editing, formatting, source mode, and export do not require an AI provider.

A file inside a folder synced by another application can still be uploaded by that application. Mark2's local file workflow does not change the behavior of your cloud drive or backup software.

## What an AI request can share

AI requests go to your configured provider or custom endpoint. Depending on the task, their context can include:

- Your prompt and relevant conversation history.
- The active document or selected passage.
- Files you reference with **@**.
- Content returned by file-reading, search, or other Agent tools.
- Images you attach when the selected model supports them.

Inline completion sends context used to generate its suggestion. Auto mode can make requests after you pause typing; Manual mode requests completion when triggered.

::: info Local files and remote processing
Keeping a Markdown file on disk does not mean its content stays local when you use an external AI service. That service's handling and retention of requests follow its own policies.
:::

To avoid AI requests, disable AI in settings. To reduce automatic requests while keeping Agent, disable inline completion or choose Manual mode. A local compatible endpoint can change where AI requests go, but its actual processing depends on the service you configure.

## Protect API keys

Mark2 saves provider configuration on this machine. Do not put API keys into Markdown documents, screenshots, public repositories, or support reports.

Removing a provider from Mark2 removes its saved settings but does not revoke the key with the provider. Revoke or rotate a compromised key in that service's account controls.

## Control Agent tools

| Mode | Write-tool policy |
| --- | --- |
| Default | Requests confirmation |
| Plan | Blocks writes |
| Auto | Allows writes without individual confirmation, subject to app protections |

Read-only tools can run in all three modes. “Read-only” describes file modification permissions; content read by a tool can still be sent to your selected AI service.

Choose the smallest workspace scope that contains the files needed for the task. Review prompts, referenced files, and requested actions before working with private material.

## Other network features

- **Image upload:** when configured and enabled, pasted or dragged images are uploaded to your chosen S3-compatible storage. The document gets an online URL.
- **Remote Git:** fetch, pull, push, and sync contact the configured remote. A push sends the selected commits and their tracked content.
- **Agent web tools:** web lookups contact external services and can bring returned content into the AI context.
- **Updates:** Mark2 can check for and download app updates. Automatic checks can be changed in **Settings → General**.

Enable these features only when their behavior fits your workflow. For image uploads, review the access settings of your storage service before sharing the resulting URLs.

## A practical private-writing setup

1. Keep sensitive notes in a dedicated local folder.
2. Disable AI, or limit it to content you intend to send to the configured service.
3. Keep image storage local unless you want uploads.
4. Review staged files before pushing a Git repository.
5. Keep backups with access controls appropriate for your documents.

For setup details, read [AI assistant](./ai), [Files and workspaces](./files), and [Git workflow](./git).
