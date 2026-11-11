# Guidance for AI Agents Working in This Repo

This repository ships the **`pixijs` skill** for AI coding agents: a single skill that routes to topic reference files.

## Where the content comes from

`skills/` is synced from [pixijs/pixijs](https://github.com/pixijs/pixijs) on each release (commits titled `chore: sync skills from pixijs/pixijs@<version>`). Make content changes upstream; a local edit is overwritten by the next sync. Edit this repo's README, plugin configs, examples and Copilot instructions directly.

## Repo structure

- **skills/pixijs/SKILL.md**: the entry point. Frontmatter, the "read before you write" workflow, silent-failure pitfalls, and the reference router table.
- **skills/pixijs/references/<topic>.md**: one file per topic (`application`, `assets`, `scene-sprite`, `filters`, ...). Each row in the SKILL.md router links to one.
- **skills/pixijs/references/<topic>/<page>.md**: sub-pages for rarer branches of a topic, linked from the topic file.
- **skills/pixijs/references/index.md**: every topic file and sub-page with long-tail keywords (rare options, v7 names, error strings). Agents fall back to it when no router row matches.

The skills CLI and plugin manifests discover skills by scanning `skills/` for directories that contain `SKILL.md`.

## SKILL.md requirements

- **Frontmatter (YAML):**
  - `name` (required): lowercase, hyphens only, max 64 chars, must match the parent directory name (`skills/pixijs/` ↔ `name: pixijs`).
  - `description` (required): what the skill covers and when to use it, with trigger terms. Max 1024 chars.
  - `license` (optional): `MIT`.
- **Body:** keep under ~500 lines; long material goes in `references/`.

## Adding or changing a topic (upstream)

1. Add or edit `references/<topic>.md` (and sub-pages under `references/<topic>/`).
2. Add a row to the matching router table in `SKILL.md` and an entry in `references/index.md`.
3. If the topic owns a silent failure, add a one-line pitfall in `SKILL.md` linking to the section.

New topics go in the `pixijs` skill, not a new skill directory.

## Conventions

- Write descriptions in **third person** ("Use when…", not "You can use when…").
- Be concise; don't restate the PixiJS docs. Focus on correct v8 API usage and pitfalls.
- Link to anchors (`references/events.md#drag`) so the pitfall points at the rule that owns it.

## References

- [Agent Skills specification](https://agentskills.io/specification.md)
- [skills CLI (discovery, install)](https://github.com/vercel-labs/skills)
