# resume

Personal resume of Jutipong Subin (jutipong.su), presented as a terminal-style system dashboard.

## Stack

- Vue 3 and Vite
- UnoCSS (Wind4 preset, with Line Awesome and Logos icons through Iconify)
- SCSS for component styles
- JetBrains Mono, self-hosted from `src/assets/fonts`

## Install the dependencies

```bash
pnpm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
pnpm dev
```

### Lint the files

```bash
pnpm lint
```

### Format the files

```bash
pnpm format
```

### Build the app for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

## Customize the resume data

Everything shown on the page comes from `src/config/resume.json`:

- `profile`: `name` and `title`
- `personal`: `nationality`, `height`, `weight`, and `birthDate` in `YYYY-MM-DD` format. The age is calculated automatically.
- `contact`: `email` (separate several addresses with a comma), `phone`, and `github` (a full URL, displayed without the protocol)
- `experience`: newest first. `start` and `end` use `MM/YYYY`, and `end` is `null` for the current job. Durations and bars are calculated automatically, and the Uptime under the name is counted from the earliest `start`.
- `skills`: categories with a `level` from 0 to 100 and a list of `tags`. A tag can reference an icon file in `src/assets/img/skills/` by name.
- `education`: `title`, `description`, and `gpa` (out of 4.00)
- `certifications`: a list of strings

The profile photo is `src/assets/img/profile-me.png`.

## Project structure

- `src/pages/Index.vue`: the dashboard page with all sections
- `src/components/TerminalPanel.vue`: panel frame with a heading and a dotted rule
- `src/components/MeterBar.vue`: bar that fills when it scrolls into view
- `src/layouts/MainLayout.vue`: layout with the scroll-to-top button and footer
- `src/assets/css/app.scss`: font faces and terminal color variables
- `uno.config.ts`: theme colors, shortcuts, and icon settings

## Deploy

Netlify runs `pnpm build` and publishes `dist` (see `netlify.toml`).
