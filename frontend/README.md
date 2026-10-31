# micro-frontend-architecture

A showcase Turborepo monorepo demonstrating a micro-frontend setup: four independently
built/run apps across three different frontend frameworks, sharing one headless design
system.

## Apps

| App         | Framework         | Local URL               |
| ----------- | ----------------- | ------------------------ |
| `web`       | Next.js (React)   | http://localhost:3000    |
| `docs`      | Next.js (React)   | http://localhost:3001    |
| `order`     | Vite + Vue         | http://localhost:5173    |
| `dashboard` | SvelteKit (Svelte) | http://localhost:5174    |

Each app is independently deployable and owns its own routing — there's no shared router or
runtime embedding between them. A small nav bar in every app's root layout links to the other
three (using their local ports above), so navigating between apps feels cohesive even though
each one is a separate build.

## Shared design system — `@repo/ui`

All four apps render UI through `packages/ui`, which re-exports headless, unstyled components
per framework:

- `packages/ui/react` — [Base UI](https://base-ui.com) components, used by `web` and `docs`
- `packages/ui/vue` — [Base UI Vue](https://www.npmjs.com/package/base-ui-vue) components, used by `order`
- `packages/ui/svelte` — [Bits UI](https://bits-ui.com) components, used by `dashboard`
- `packages/ui/styles` — plain CSS Modules (one per component, e.g. `button.module.css`), shared
  as-is across every framework since CSS doesn't care who rendered the DOM, plus
  `typography.module.css` for shared base typography/tokens

Every component is a thin default re-export of its underlying headless primitive — no styling
baked in. Styling lives entirely in `packages/ui/styles` and is opted into per app.

## Getting started

Install once from `frontend/`:

```sh
bun install
cp .env.example .env
```

Run everything at once:

```sh
bun run dev
# (or, with turbo installed globally: turbo dev)
```

Run a single app:

```sh
turbo dev --filter=web
turbo dev --filter=docs
turbo dev --filter=order
turbo dev --filter=dashboard
```

Build everything:

```sh
turbo build
```

### Local routing & ports

Since nothing is deployed, "routing" between apps is just plain links between local ports.
Every port lives in `.env.example` (copy to `.env` to override — gitignored) as
`PORT_WEB` / `PORT_DOCS` / `PORT_ORDER` / `PORT_DASHBOARD`; nothing is hardcoded in app code.
Turborepo is told about these via `globalEnv` in `turbo.json`, and each app's `dev` script loads
`../../.env` (via `bun --env-file`) before starting, falling back to the defaults in the table
above if `.env` doesn't exist. The Next apps expose the vars to client code through
`next.config.js`'s `env` field; the Vite-based apps (`order`, `dashboard`) expose them through
`envPrefix: ['VITE_', 'PORT_']`, so the nav bar in each app reads the real port instead of a
hardcoded URL.

## What's inside

- `apps/web`, `apps/docs` — Next.js (React) apps
- `apps/order` — Vite + Vue SPA
- `apps/dashboard` — SvelteKit app
- `packages/ui` — the shared, per-framework headless component library described above
- `packages/eslint-config`, `packages/typescript-config` — shared lint/TS config
