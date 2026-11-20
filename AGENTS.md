# AGENTS.md — Public Personal Website (`jankrloz/jankrloz-site`)

This repository contains the **public personal website** for **JC Navarrete (`jankrloz`)**.

---

## 1. Public-Only Scope (Non-Negotiable)

This repository is **PUBLIC**. Every file, route, comment, and commit is publicly visible.

- **Allowed Scope Only:**
  - Public monograph (`/`), public CV (`/cv/`), public writing feed (`/writing/`), and sanitized public PDF (`public/JuanCarlosNavarrete_CV.pdf`).
- **Strictly Prohibited:**
  - Keep this repository strictly self-contained: never add non-public pages, internal workflows, internal company project codenames or initiative terms, internal document/ticket IDs, counts of internal design docs/ADRs/reviews, external contractor engagements, or non-public financials.
  - Never import or reference paths outside this repository root.
- **Narrative & Attribution Rules:**
  - Distinguish **founded/built**, **defined & co-led cross-team**, and **contributed strategy/decisions** accurately; state tenure accurately (`11+ years` engineering, `~4 years` architecture leadership) and frame regulated scope as `banking-license readiness` (never licensed banking or plural financial institutions).
  - Apply `unslop`, `stop-slop`, and `humanizer` rules to all copy (no em dashes, active voice, plain verbs).
  - Keep `src/data/career.ts`, `src/pages/cv.astro`, and `public/JuanCarlosNavarrete_CV.pdf` in sync.

---

## 2. Brand, Identity & Design Invariants

- **Identity:** Use `JC Navarrete` and `jankrloz` for hero, navigation, and social links; use `Juan Carlos Navarrete` + `github.com/jankrloz` only in formal CV metadata. Never repeat the name/alias inside summary prose.
- **Retired Branding:** No `JZN`, `jzn.dev`, Greek letters/phrases, `"Axiom"`, or geographic coordinates.
- **Role Ordering:** `AI → Platform → Architecture → Cloud`.
- **UI Kit (Edition β):** `#07070C` Obsidian + `#3F00FF` Ultramarine (`#A58EFF` on-dark accent), `Source Serif 4` + `Libre Franklin` + `JetBrains Mono`, `--radius: 0px`, square edges, `1px` hairlines, glassmorphic header, Three.js `ArchitecturalManifold`.

---

## 3. Toolchain & Verification

- **Install:** `aube install --frozen-lockfile`
- **Dev:** `vp run dev -- --host 0.0.0.0 --port 4321` _(do not use bare `vp dev` / `vp build`)_
- **Verify:** `vp check && aube exec astro check && vp run build`
