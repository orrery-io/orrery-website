# Orrery Website

Marketing site and documentation for [Orrery](https://github.com/orrery-io/orrery) — a self-hosted, open source BPMN 2.0 workflow orchestration engine built in Rust. This repository is a single Next.js application serving the marketing homepage at `/` and the full documentation at `/documentation`.

## Structure

```
app/
  (marketing)/       # Homepage — layout, page, globals.css
  (docs)/
    documentation/   # Nextra docs — [[...mdxPath]] catch-all
content/             # MDX documentation source files
components/          # Shared React components (Logo, Nav, BpmnViewer, etc.)
lib/                 # Design tokens
public/              # Static assets (favicon, icons)
mdx-components.tsx   # Nextra MDX component registry
next.config.ts       # Next.js + Nextra configuration
```

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.2
- Node.js ≥ 20 (used by some tooling)

## Development

```bash
bun install
bun dev
```

- Marketing: http://localhost:3000
- Docs: http://localhost:3000/documentation

## Build

```bash
bun run build
```

Runs `next build` then generates the Pagefind search index from the compiled output.

## Environment Variables

Set in Vercel project settings (or `.env.local` for local overrides):

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production root URL | `https://orrery.io` |
| `NEXT_PUBLIC_DOCS_URL` | Production docs URL | `https://orrery.io/documentation` |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub repository URL | `https://github.com/orrery-io/orrery` |

## Deployment

Deployed on Vercel. Configuration is in `vercel.json`. Set the **Root Directory** to the repo root in Vercel project settings.
