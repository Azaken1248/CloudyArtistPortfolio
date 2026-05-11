# Frontend Architecture

## Scope

This document covers the frontend portfolio experience only.

## Product Shape

The site should be a single-page React application with section-based navigation and a content flow that feels like a curated gallery rather than a generic landing page.

## Recommended Frontend Structure

- `App shell`: persistent navigation, background treatment, section framing.
- `Hero section`: artist name, short introduction, and one primary call to action.
- `Gallery section`: artwork grid or masonry-style layout with responsive hover states.
- `Commission section`: status, tiers, examples, and inquiry path.
- `FAQ / TOS section`: text-focused policies and common questions.
- `Contact section`: simple form or contact handoff that feels low-friction.

## TypeScript Approach

- Keep shared content and section metadata in typed models.
- Define explicit props for each section component so content stays predictable.
- Prefer small, composable components over large page-level components.
- Keep presentational components separate from content definitions.

## Tailwind Strategy

- Use Tailwind for spacing, layout, color, responsive behavior, and interaction states.
- Create a small set of reusable design tokens through utility conventions rather than custom CSS wherever possible.
- Reserve custom CSS for only the rare cases where the layout needs a non-standard treatment.

## Data Direction

The frontend should be designed so it can later consume content from an API, but the first phase can still work from local typed content objects. That keeps the frontend plan realistic without pulling backend work into this stage.

## Component Boundaries

- Navigation owns section targeting and active-state behavior.
- Gallery owns responsive tile sizing and hover presentation.
- Commission and policy sections own static content rendering.
- Contact owns form layout and validation-ready structure.

## Separation From Admin

The admin dashboard must be documented and built separately. Nothing in this frontend architecture should depend on admin UI screens, admin auth flows, or backend CRUD interactions beyond future data readiness.
