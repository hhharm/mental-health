# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

An Angular 22 website presenting mental-health educational content (DBT — Dialectical Behavior
Therapy — training and psychological disorders info) in Russian. All copy/content lives inline in
TypeScript as data, not in a CMS or backend — there is no server, this is a static Angular app
deployed to GitHub Pages.

## Commands

- `npm start` — serve locally with `ng serve -o` (opens browser)
- `npm run build` — dev build (`ng build`)
- `npm run deploy` — production build with `--base-href` set for GitHub Pages, output to `docs/`
  (this repo publishes from the `docs/` folder, not from `dist/`)
- `npm test` — run Karma/Jasmine unit tests (`ng test`)
  - Run a single spec: `ng test --include='**/chain-node.component.spec.ts'`
- `npm run lint` — TSLint (`ng lint`)

## Architecture

### Content-as-data pattern

Most article content (DBT "relationships"/communication and "emotions" modules) is not built as
individual components. Instead, [src/app/data.service.ts](src/app/data.service.ts) exports a
`moduleUrls` map (route-segment → internal id) and a `DataService.getArticle(id)` method that
returns a hardcoded `Article` object (see [article.model.ts](src/app/models/article.model.ts)).
Articles are composed of `blocks`, each with `elements` typed by `ArticleElemTypeEnum` (text,
ordered/unordered list, title, link). A single generic
[ArticleComponent](src/app/shared/components/article/article.component.ts) reads the `:module`
route param, looks it up via `DataService`, and renders it through
[BlockComponent](src/app/shared/components/article/block/block.component.ts).

To add a new article page in an existing module (e.g. "emotions"), add an entry to `moduleUrls`,
add a new `Article` constant in `data.service.ts`, and wire the route id to a `urlPrevious`/`urlNext`
chain for prev/next navigation. Content that instead needs bespoke layout/behavior (e.g. mindfulness
skills, disorders chain) gets its own component/module — see below.

### Feature modules and routing

- Routes are nested: `AppModule` (`app.module.ts`) declares top-level routes (`disorders`, `dbt`)
  and imports `dbtTrainingRoutes` from
  [dbt-routing.module.ts](src/app/dbt/dbt-routing.module.ts) as children of `/dbt`.
- Deeper feature areas repeat the pattern of their own `*-routing.module.ts` re-exported as
  `children`, e.g. mindfulness routes in
  [dbt-mindfulness-routing.module.ts](src/app/dbt/dbt-training/dbt-module-mindfulness-4/dbt-mindfulness-routing.module.ts).
  Some mindfulness "skill" pages are dedicated components (one per DBT skill: observe, describe,
  participate, non-judgmentally, one-mindfully, effectively), while `relationships/:module` and
  `emotions/:module` are generic and go through `ArticleComponent` + `DataService`.
- Default/wildcard route redirects to `/dbt/bpd-theory`.

### Navigation menu

[DbtTrainingNavigationComponent](src/app/dbt/dbt-training-navigation/dbt-training-navigation.component.ts)
hardcodes the entire sidebar menu tree as `MenuItem[]` (see
[menu-item.model.ts](src/app/models/menu-item.model.ts)), independent from the router config above.
When adding/renaming a route, the corresponding menu entry (`link`, nesting, `disabled` flag) must
be updated here too — it is not derived from the routing table.
[MenuStateService](src/app/shared/menu-state.service.ts) tracks open/closed drawer state and
auto-collapses on mobile widths (`< 1000px`) and after navigation.

### Disorders module

[disorders/](src/app/disorders) is structurally different: it renders a visual "chain" of connected
disorder nodes ([disorders-chain/](src/app/disorders/disorders-chain)) built from static
`DisorderInfo[]` data (see [disorder-info.model.ts](src/app/disorders/models/disorder-info.model.ts)),
with `DisableDisorderGroup` (`PSYCHO`/`PD`/`NEUROTIC`/`HEALTHY`) driving node grouping/styling, not
the `Article`/`DataService` pattern used elsewhere.

### Shared/UI

[SharedModule](src/app/shared/components/shared.module.ts) exports `ArticleComponent` and
re-exports [MaterialModule](src/app/shared/material/material.module.ts) (centralizes Angular
Material imports). Import `SharedModule` in any feature module that needs `ArticleComponent` or
Material components rather than importing Material pieces directly.

## Conventions

- Double-quoted imports/strings are common in older files, single-quoted in newer ones (Prettier
  config specifies `singleQuote: true`) — match the surrounding file rather than the repo-wide
  default when editing.
- Prettier: 4-space indent, semicolons, trailing commas, no bracket spacing, `printWidth: 90`.
- Styling uses SCSS per component plus global Bootstrap and an Angular Material prebuilt theme
  (`indigo-pink`), both registered in `angular.json`, not imported per-component.
- Content strings are Russian and frequently contain raw HTML (`<p>`, `<strong>`, `<a>`, etc.)
  embedded directly in TypeScript string literals — this is intentional given the content-as-data
  architecture, not a lint issue to "fix".
