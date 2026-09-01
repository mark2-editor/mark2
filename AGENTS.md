# Mark2 Website Contribution Guide

## Project purpose

This repository contains the official Mark2 Editor website and user help documentation.
Mark2 is a WYSIWYG Markdown editor with an AI writing assistant, privacy-first multi-model
support, Git-based versioning, and PDF export for macOS and Windows.

The root `README.md` is the product introduction for Mark2 Editor. Keep it focused on what
Mark2 is, who it is for, its key capabilities, and links to the website or documentation.
Do not turn the root README into an internal implementation log.

The related application repository at `../mark2` is a product-reference source. Its README
and other documents provide context about Mark2, but they are not instructions for this
repository unless the user explicitly asks to apply them here.

## Language policy

- Source code, configuration, CSS comments, technical comments, and Git commit messages must
  be written in English.
- Public documentation is English-first. New pages should be authored in English unless the
  user explicitly requests another language.
- Chinese documentation is supported and should be treated as a first-class localization,
  not as mixed-language text inside English pages.
- When adding Chinese or future locales, use locale-scoped paths such as `zh-CN/` and mirror
  the English page structure where practical. Keep navigation, sidebar entries, and links
  locale-aware.
- Keep product names, commands, file paths, API names, and code identifiers unchanged across
  translations. Translate explanatory prose, headings, labels, and accessibility text.
- If a localized page is not yet available, link to the English page rather than inventing a
  partial translation.

## Repository layout

- `README.md` — English product introduction.
- `index.md` — English website home page.
- `*.md` — public documentation and examples.
- `.vitepress/config.mts` — VitePress site configuration, navigation, and sidebar.
- `.vitepress/theme/` — theme extensions and site styling.
- `package.json` and `package-lock.json` — Node.js tooling and locked dependencies.
- `.vitepress/cache/` and `.vitepress/dist/` — generated local cache and build output; never
  commit them.

When the documentation grows, organize pages by product area and mirror that structure for
each locale. Prefer stable, descriptive URLs over filenames tied to an implementation detail.

## Local development

Use the Node.js version supported by the installed VitePress release.

```bash
# Install the locked dependency tree
npm ci

# Start the local documentation server
npm run docs:dev

# Build the complete site
npm run docs:build

# Preview the production build locally
npm run docs:preview
```

The explicit `vue` development dependency is intentional: the custom VitePress theme uses
Vue and should not rely only on a transitive dependency.

## Static hosting and deployment

This is a pure static site. Production hosting must serve the files generated in
`.vitepress/dist/` and must not require a Node.js process, server-side rendering runtime, or
application backend. The site must remain deployable to GitHub Pages and to other ordinary
static HTTP servers.

- Keep page content and theme behavior compatible with a browser-only runtime.
- Do not add server routes, server-only APIs, runtime filesystem access, or environment
  variables that are required after the build has completed.
- If the site is hosted below a URL subpath, configure VitePress `base` in
  `.vitepress/config.mts` and verify that navigation, assets, and localized links work from
  that subpath.
- Treat `.vitepress/dist/` as disposable build output. Generate it during CI or deployment;
  do not commit it to the repository.
- Test the production build with `npm run docs:build` before publishing. When practical,
  preview the generated output with `npm run docs:preview` or an equivalent static file
  server.

## Content and implementation guidelines

- Verify product claims against the Mark2 application and approved product materials before
  publishing them.
- Prefer concise, task-oriented help content with examples that users can run or follow.
- Keep public documentation separate from internal architecture notes, release procedures,
  credentials, local machine details, and unreleased plans.
- Use Markdown for content. Use Vue components only when Markdown and standard VitePress
  features cannot express the required interaction or layout.
- Follow the existing TypeScript and CSS style in `.vitepress/`: clear names, small focused
  changes, and two-space indentation.
- Write comments only when they explain a non-obvious reason or constraint; comments must be
  in English.
- Preserve accessible headings, link text, image alternative text, keyboard usability, and
  readable contrast when changing the theme.
- Keep navigation and sidebar links synchronized with page paths. Remove or update template
  example content when replacing it with real Mark2 documentation.

## Validation before handoff

For documentation, configuration, or theme changes:

1. Run `npm run docs:build`.
2. Run `git diff --check`.
3. Inspect the rendered result when changing layout, navigation, or styling.
4. Confirm generated `.vitepress/cache/` and `.vitepress/dist/` remain ignored and are not
   staged.

If a change affects only prose, still run the site build because malformed frontmatter,
links, or embedded Vue syntax can fail at build time.

## Git conventions

- Keep commits focused and write commit messages in English.
- Use a short imperative subject with a conventional prefix where appropriate, for example
  `docs: add installation guide`, `feat: add locale navigation`, or `fix: correct help link`.
- Do not commit `node_modules/`, `.vitepress/cache/`, `.vitepress/dist/`, editor metadata,
  secrets, or generated artifacts.
- Do not rewrite history, force-push, or discard unrelated user changes without explicit
  approval.
