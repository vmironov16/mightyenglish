# Agentation Integration

Agentation is a desktop tool for annotating UI elements and feeding precise context to AI agents like Claude Code.

## Setup

### 1. Install the desktop app

Download Agentation from [agentation.com](https://www.agentation.com/).

### 2. Start the MCP server

```bash
npx agentation-mcp server
```

This starts both the HTTP server (port 4747, used by the browser toolbar) and the MCP server that Claude Code connects to.

To verify the connection:

```bash
npx agentation-mcp doctor
```

### 3. MCP is pre-configured

The `.claude/settings.json` already registers the Agentation MCP server. When you open Claude Code in this project, it connects automatically.

## Dev Workflow

1. **Start dev server** — `npm run dev`
2. **Open the Astro site** in the browser with the Agentation toolbar active
3. **Annotate an element** — hover over it, click, add a note describing what needs fixing
4. **Open Claude Code** — ask Claude to check annotations and fix the issue
5. **Claude confirms** when the fix is done and clears the annotation

## Claude Code Commands

Once connected, you can ask Claude Code:

- `"What annotations do I have?"` — lists all active feedback
- `"Fix the annotations on the hero section"` — reads annotations and applies fixes
- `"Confirm you fixed the button alignment"` — Claude marks the annotation resolved

## MCP Tools Available

Claude Code has access to these Agentation tools via MCP:

| Tool | Purpose |
|------|---------|
| `agentation_list_sessions` | List all annotation sessions |
| `agentation_get_annotations` | Get annotations for a page |
| `agentation_add_annotation` | Add a new annotation |
| `agentation_update_annotation` | Update an existing annotation |
| `agentation_delete_annotation` | Remove an annotation |
| `agentation_clear_session` | Clear all annotations in a session |
| `agentation_ask_user` | Claude asks for clarification |
| `agentation_complete_task` | Mark a fix as complete |
| `agentation_get_schema` | Get the annotation format schema |
