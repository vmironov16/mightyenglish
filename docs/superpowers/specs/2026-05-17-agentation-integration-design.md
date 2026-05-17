# Agentation Integration Design

**Date:** 2026-05-17
**Project:** mightyenglish (Astro + Tailwind)

## Goal

Integrate Agentation into the dev workflow so UI feedback can be given as precise element annotations instead of vague descriptions, feeding directly into Claude Code.

## Architecture

```
Browser (Agentation toolbar)
        |
        v
 HTTP server :4747   <--->   MCP server
        |                        |
        v                        v
  Annotations store        Claude Code MCP client
```

The `agentation-mcp` package runs both servers from a single process. Claude Code connects via MCP and can read/write annotations in real time.

## Components

| Component | Description |
|-----------|-------------|
| `.claude/settings.json` | Registers `agentation-mcp` as a project MCP server |
| `.claude/settings.local.json` | Allows all 9 Agentation MCP tool calls |
| `docs/AGENTATION-SETUP.md` | Dev team setup guide |

## Workflow

1. Run `npx agentation-mcp server` (once per dev session)
2. Use browser toolbar to annotate elements on the running Astro site
3. Ask Claude Code to read and fix annotations
4. Claude confirms fixes and clears annotations

## No npm dependency needed

`agentation-mcp` runs via `npx -y` on demand. No install required in `package.json`.
