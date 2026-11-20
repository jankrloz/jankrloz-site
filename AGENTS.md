# AGENTS.md — Public Personal Website (`jankrloz/jankrloz-site`)

This repository is the **public personal website** for **JC Navarrete (`jankrloz`)**, deployed to `https://jankrloz.vercel.app/` and mounted as a Git submodule (`site/`) inside the private hub repository.

---

## 1. Public-Only Scope & Data Restrictions (Non-Negotiable)

This repository is **PUBLIC**. Every file, route, comment, and commit is publicly visible.

- **Allowed Routes & Assets Only:**
  - Public monograph (`/`), public CV (`/cv/`), public writing feed (`/writing/`), and sanitized public PDF (`public/JuanCarlosNavarrete_CV.pdf`).
- **Strictly Prohibited Content:**
  - Never add private hub dashboards (`/hub/`), internal career research, compensation benchmarks, job-search pipelines, or session handoffs.
  - Never expose internal company project codenames, internal document/ticket IDs (`SD-*`, `ADR-*`, `AR-*`), external contractor engagements, or non-public financials.
  - Never import or reference files outside this repository root (no `../docs/`, `../research/`, `../cv/`).

---

## 2. Brand, Identity & Design Invariants

- **Identity:** Use `JC Navarrete` and `jankrloz` for hero, navigation, and social links; use `Juan Carlos Navarrete` + `github.com/jankrloz` only in formal CV metadata. Never repeat the name/alias inside summary prose.
- **Retired Branding:** No `JZN`, `jzn.dev`, Greek letters/phrases, `"Axiom"`, or geographic coordinates.
- **Role Ordering:** `AI → Platform → Architecture → Cloud`.
- **UI Kit (Edition β):** `#07070C` Obsidian + `#3F00FF` Ultramarine (`#A58EFF` on-dark accent), `Source Serif 4` + `Libre Franklin` + `JetBrains Mono`, `--radius: 0px`, square edges, `1px` hairlines, glassmorphic header, Three.js `ArchitecturalManifold`.

---

## 3. Toolchain & Verification

- **Install:** `aube install --frozen-lockfile`
- **Dev:** `vp run dev -- --host 0.0.0.0 --port 4321` *(do not use bare `vp dev` / `vp build`)*
- **Verify:** `vp check && aube exec astro check && vp run build`
