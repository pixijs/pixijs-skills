# Guidance for AI Agents Working in This Repo

This repository ships two skills for AI coding agents: **`pixijs`** for PixiJS v8 (`pixi.js`) and **`pixijs-3d`** for PixiJS 3D (`@pixi/3d`). Each is a single skill that routes to reference files.

## Where the content comes from

Each skill folder is synced from its library's repo on each release:

- `skills/pixijs/` from [pixijs/pixijs](https://github.com/pixijs/pixijs) (commits titled `chore: sync skills from pixijs/pixijs@<version>`).
- `skills/pixijs-3d/` from [pixijs/3d](https://github.com/pixijs/3d) (commits titled `chore: sync skills from pixijs/3d@<ref>`).

A sync replaces only its own repo's skill folders. Make content changes upstream; a local edit is overwritten by the next sync. Edit this repo's README, plugin configs, examples and Copilot instructions directly.

## Repo structure

- **skills/pixijs/SKILL.md**: the entry point. Frontmatter, the "read before you write" workflow, silent-failure pitfalls, and the reference router table.
- **skills/pixijs/references/<topic>.md**: one file per topic (`application`, `assets`, `scene-sprite`, `filters`, ...). Each row in the SKILL.md router links to one.
- **skills/pixijs/references/<topic>/<page>.md**: sub-pages for rarer branches of a topic, linked from the topic file.
- **skills/pixijs/references/index.md**: every topic file and sub-page with long-tail keywords (rare options, v7 names, error strings). Agents fall back to it when no router row matches.
- **skills/pixijs-3d/SKILL.md**: the entry point. Frontmatter, the mental model, a complete starting app, conventions, silent-failure pitfalls, the table that points each job to a reference, and a Three.js name map.
- **skills/pixijs-3d/references/<job>.md**: one runnable recipe per job (`cameras`, `materials`, `post-processing`, ...). `references/from-threejs/` holds the name tables for porting a Three.js app.

The skills CLI and plugin manifests discover skills by scanning `skills/` for directories that contain `SKILL.md`.

## SKILL.md requirements

- **Frontmatter (YAML):**
  - `name` (required): lowercase, hyphens only, max 64 chars, must match the parent directory name (`skills/pixijs/` ↔ `name: pixijs`).
  - `description` (required): what the skill covers and when to use it, with trigger terms. Max 1024 chars.
  - `license` (optional): `MIT`.
- **Body:** keep under ~500 lines; long material goes in `references/`.

## Adding or changing a topic (upstream)

In `pixijs`, in pixijs/pixijs:

1. Add or edit `references/<topic>.md` (and sub-pages under `references/<topic>/`).
2. Add a row to the matching router table in `SKILL.md` and an entry in `references/index.md`.
3. If the topic owns a silent failure, add a one-line pitfall in `SKILL.md` linking to the section.

In `pixijs-3d`, follow [`docs/skills.md`](https://github.com/pixijs/3d/blob/main/docs/skills.md) in pixijs/3d.

New pixi.js topics go in `pixijs` and new `@pixi/3d` topics in `pixijs-3d`. Don't add skill directories here.

## Conventions

- Write descriptions in **third person** ("Use when…", not "You can use when…").
- Be concise; don't restate the PixiJS docs. Focus on correct v8 API usage and pitfalls.
- Link to anchors (`references/events.md#drag`) so the pitfall points at the rule that owns it.

## References

- [Agent Skills specification](https://agentskills.io/specification.md)
- [skills CLI (discovery, install)](https://github.com/vercel-labs/skills)
