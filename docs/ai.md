---
title: AI assistant
description: Configure Mark2 AI, use Agent, and enable inline completion.
---

# AI assistant

Mark2 has two AI tools: **AI Agent** helps with a complete request, while **inline completion** offers a short suggestion as you write. Both are optional.

<Mark2DocImage dark-src="/mark2-agent-dark.png" light-src="/mark2-agent-light.png" alt="Mark2 Agent reviewing a Markdown draft beside the editor." caption="Agent can work beside the document while you keep the draft in view." />

## A quick explanation of the terms

- A **provider** is the company or service that supplies the AI.
- A **model** is the particular AI you choose from that provider.
- An **API key** is the access key supplied by the provider. Treat it like a password.

## Set up AI

Open **Settings → AI**, then:

1. Add a provider.
2. Enter its API key if it requires one.
3. Add or discover a model.
4. Test the connection and select the provider and model you want to use.

Mark2 supports OpenAI, DeepSeek, Anthropic, Gemini, and compatible custom services. If you are not sure which option to choose, start with a built-in provider supported by your account.

## Ask AI Agent for help

Open the AI panel from the editor's right sidebar. You can ask it to rewrite, continue, translate, summarize, explain, or polish text. The current document or a selected passage can give it context.

Type `/` to see available commands. Type `@` to choose a file from the workspace as additional context. Agent can also read and search workspace files, or look up information on the web when needed.

Mark2 does not silently change your files. It asks before a write operation and lets you review document edits before applying them.

## Get suggestions while writing

Open **Settings → AI → Inline completion**, turn it on, and choose:

- **Auto** — show a suggestion after you pause typing.
- **Manual** — show a suggestion only when you ask for one.

Suggestions appear as light preview text. Accept them if they help, or continue typing to ignore them. Inline completion follows the Agent provider and model by default; advanced settings can use a different choice.
