# AI Coding Agent Instructions

## Repository Purpose

This repository is a **high-signal engineering monorepo** designed to host a personal portfolio alongside multiple production-grade applications.

The goal is not to accumulate projects — it is to demonstrate **senior-level engineering judgment**, architectural clarity, and operational discipline.

Every application in this repository should feel intentional, deployable, and professionally built.

**This repo is a proof-of-engineering-quality artifact.**

---

# Core Philosophy

Prioritize:

- Simplicity over cleverness  
- Performance over features  
- Maintainability over speed of delivery  
- Explicitness over magic  
- Proven patterns over experimentation  

Avoid unnecessary complexity at all costs.

When in doubt:

👉 Choose the boring, reliable solution.

---

# Monorepo Architecture

## Structure

```
apps/
  portfolio/        → Public developer portfolio (primary hub)
  <project1>/      → Independent production-grade Node.js app
  <project2>/      → Independent production-grade Node.js app

packages/          → Shared libraries (create only when justified)
```

## Architectural Laws (Non-Negotiable)

### 1. Apps Are Independent Systems
- Every app must build, run, and deploy independently.
- No runtime coupling between apps.
- No cross-importing application code.

If code must be shared → move it into `packages/`.

---

### 2. Extract Late, Not Early
Do NOT create shared packages prematurely.

**Rule: duplicate twice → extract on the third use.**

Premature abstraction is a bigger risk than duplication.

---

### 3. Prefer Lean Infrastructure
Applications should remain inexpensive and operationally simple.

Avoid introducing infrastructure that requires ongoing management unless it delivers clear, meaningful value.

---

### 4. This Is NOT a Startup Platform
Do not architect for imaginary scale.

Instead, optimize for:

- clarity  
- performance  
- low operational burden  
- fast iteration  

---

# Technology Standards

## Runtime

All applications use a **Node.js-compatible stack**.

Prefer libraries that are also **edge-compatible** when possible to preserve deployment flexibility.

Avoid dependencies that:

- require native binaries  
- significantly increase cold start times  
- depend heavily on Node-only internals without strong justification  

Favor lightweight, fetch-native tooling.

---

## Tooling (Root Governed)

The root config is the **single source of truth** for:

- pnpm workspaces  
- Turbo  
- TypeScript  
- Biome (lint + format)  
- shared environment patterns  

### Non-Negotiables

✅ Always use `pnpm`  
✅ Keep dependency versions aligned  
✅ Prefer shared configs over duplication  
✅ Maintain strict TypeScript settings  

---

# Application Roles

## `apps/portfolio`

The portfolio is the **public hub** of the ecosystem.

Its job is to signal engineering maturity instantly.

### Must Be:

- extremely fast  
- SEO optimized  
- mobile-first  
- accessible  
- visually restrained  
- content-focused  

### Must NOT Become:

- a platform  
- a heavy SPA  
- infrastructure-heavy  
- animation-driven  

Resist the urge to overbuild.

The highest signal portfolio is often the simplest one.

---

## `apps/<project*>`

Projects are treated as **real software**, not demos.

They should demonstrate:

- strong architecture  
- type safety  
- validation  
- error handling  
- operational awareness  

Avoid calling them “side projects” anywhere in the codebase.

---

# Shared Packages (`packages/`)

Create a package only when reuse is obvious.

Good candidates:

- environment loaders  
- logging  
- API clients  
- schema / validation  
- shared TypeScript configs  
- UI primitives (if multiple web apps exist)

Bad candidates:

- speculative abstractions  
- unstable utilities  
- rapidly changing logic  

**Stability justifies sharing.**

---

# Performance Doctrine

Copilot should default toward performance-oriented decisions.

Prefer:

✅ server rendering  
✅ static generation  
✅ streaming when useful  
✅ aggressive caching  
✅ minimal client JavaScript  

Avoid:

❌ large UI frameworks  
❌ unnecessary global state  
❌ client-heavy architectures  
❌ render-blocking dependencies  

Performance is a feature.

---

# Dependency Philosophy

Before adding a dependency, ask:

1. Does this meaningfully improve DX or performance?
2. Can the platform already do this?
3. What is the long-term maintenance cost?
4. Is this solving a real problem?

This repository should remain intentionally lean.

---

# Code Quality Standards

Copilot must generate code that is:

- production-quality  
- strongly typed  
- readable  
- minimally abstracted  
- dependency-conscious  

## Prefer:

- small functions  
- clear naming  
- explicit return types on public interfaces  
- predictable patterns  

## Avoid:

- clever one-liners  
- deep inheritance  
- hidden side effects  
- unnecessary generics  

Readability is senior.

---

# Project Workflows

## Development

Run the full monorepo:

```bash
pnpm run dev
```

Run a single app:

```bash
pnpm --filter portfolio dev
pnpm --filter <project-name> dev
```

Build all apps:

```bash
pnpm run build
```

Turbo caching should be leveraged aggressively.

---

## Code Health

After making changes:

```bash
pnpm run format
pnpm run lint
pnpm run typecheck
```

Never leave the repository in a degraded state.

---

# TypeScript Expectations

- Favor strict typing.
- Avoid `any`.
- Prefer discriminated unions over optional chaos.
- Model domains clearly.

Types are architecture — treat them seriously.

---

# Environment Management

- Validate environment variables at startup.
- Fail fast on misconfiguration.
- Never rely on silently missing env values.

Predictability > convenience.

---

# Testing Guidance

When tests exist, they should be:

- deterministic  
- fast  
- behavior-focused  

Fail loudly on unexpected shapes.

Example type-narrowing pattern:

```ts
if ('message' in response) {
  expect(response.message).toBeDefined();
} else {
  throw new Error('Expected property missing from response');
}
```

---

# Cloud & Infrastructure Guidance

Prefer low-ops platforms (e.g., Cloudflare) when appropriate, but do not force edge runtimes if Node is the better fit for a project.

Choose infrastructure intentionally — not ideologically.

---

# Scaling Philosophy

Design this repository so it could comfortably support **5–10 serious applications** without structural changes.

Avoid assumptions that:

- only one app matters  
- apps can safely depend on each other  
- the portfolio is the runtime center  

Think ecosystem, not project.

---

# Design Taste

The overall aesthetic across apps should feel:

- fast  
- intentional  
- uncluttered  
- professional  

Restraint signals seniority more than flash.

---

# What This Repository Is NOT

- Not a playground  
- Not a tutorial dump  
- Not trend-driven  
- Not over-engineered  

Every project should justify its existence.

Quality > quantity.

---

# Copilot Behavioral Rules

When generating code:

✅ Prefer the simplest viable architecture  
✅ Reduce moving parts  
✅ Optimize for readability  
✅ Respect repo structure  
✅ Avoid speculative abstraction  

Automatically push toward senior-level patterns.

---

# Decision Heuristic

When multiple solutions exist, choose the one that maximizes:

**clarity → reliability → performance → maintainability**

(In that order.)

---

# Final Principle

> Build software that still looks well-engineered two years from now.

Avoid decisions that future-you would have to apologize for.
