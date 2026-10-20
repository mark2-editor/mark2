---
title: AI assistant
description: Set up providers and models, give Agent useful context, control permissions, and use inline completion.
---

# AI assistant

Mark2 has two optional AI tools. **Agent** handles requests such as rewriting, research, and document tasks. **Inline completion** suggests a short continuation while you write.

<Mark2DocImage dark-src="/mark2-agent-dark.png" light-src="/mark2-agent-light.png" alt="Mark2 Agent reviewing a draft in the right sidebar beside the document." caption="Keep your draft in view while asking Agent for help." />

## Configure a provider and model

A **provider** is an AI service. A **model** is a particular AI available through that service. An **API key** authenticates your requests; keep it private.

1. Open **Settings → AI** and enable AI if it is disabled.
2. Add a provider: OpenAI, DeepSeek, Anthropic, Gemini, or a custom OpenAI-compatible service.
3. Enter the provider's API key. Custom services may allow an empty key.
4. Fetch the model list or add a model available to your account.
5. Select the Agent provider and model, then test the connection.

For a custom service, enter its API endpoint in the provider configuration. The endpoint and model must match the protocol the service supports. A successful connection test is a useful first check; Agent tool tasks also depend on the model's capabilities.

::: info Provider usage
AI requests use your configured service credentials. Access, quotas, and usage charges are determined by that service. Mark2 editing and export do not require AI setup.
:::

## Start with a focused request

Open the right sidebar, select the AI panel, and describe both the task and the result you want.

| Goal | Example request |
| --- | --- |
| Shorten text | “Cut this introduction to two paragraphs. Keep every factual claim.” |
| Summarize notes | “Summarize these notes as decisions, open questions, and next actions.” |
| Translate | “Translate this section into English. Keep commands and file names unchanged.” |
| Improve structure | “Suggest an outline for this guide before making any edits.” |
| Check clarity | “Find sentences that a new user might misunderstand and explain why.” |

Ask for one focused change first. Review the result for meaning, factual accuracy, and tone before using it.

## Give Agent context

The active document or selected passage can provide context. Type **@** in the prompt to reference workspace files, or **/** to browse available skills such as rewrite, summarize, translate, and proofread.

Name the intended scope: “Only revise the conclusion” is clearer than “Improve everything.” For long documents, reference the sections or files that matter rather than assuming every detail will fit in the model's context.

Agent can read and search workspace files, and use web tools when available. Referenced text and tool results may become part of the request sent to your provider. Read [Privacy and AI](./privacy).

## Choose a permission mode

The default for new sessions is configured in AI settings; it can also be changed per session.

| Mode | Tool behavior |
| --- | --- |
| **Default** | Read-only tools can run; write tools require confirmation |
| **Plan** | Read-only work is allowed; write tools are blocked |
| **Auto** | Write tools can run without individual confirmation, subject to the app's protections |

Use Plan when you want analysis or an outline before changes. In Default, inspect a requested action before approving it. Use Auto only when its wider permission fits your task.

Review proposed document edits in the change view before applying them when that view is offered. Tool permission and reviewing the resulting text are separate parts of the workflow.

## Use inline completion

In **Settings → AI → Inline completion**, enable completion and choose a trigger mode:

- **Auto** requests a suggestion after you pause typing. Adjust the delay to suit your pace.
- **Manual** requests a suggestion with **⌘J**.

Suggestions appear as ghost text. Press **Tab** to accept, **Esc** to dismiss, or keep typing. Inline completion follows the Agent provider and model by default. Advanced settings let you override these and adjust the maximum suggestion length.

For less background activity, use Manual mode. To stop requests from both AI tools, disable AI in settings.

## When a request fails

Check the selected provider, model, API key, endpoint, network connection, and provider quota. If ordinary chat works but a tool task fails, try a model with the required tool support.

See [AI troubleshooting](./troubleshooting#ai-does-not-respond) for a step-by-step checklist, and [Keyboard shortcuts](./shortcuts#ai-and-navigation) for the relevant keys.
