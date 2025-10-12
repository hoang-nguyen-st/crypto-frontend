## Crypto Frontend

Modern React + TypeScript app powered by Vite, Tailwind CSS v4, Apollo Client, Redux Toolkit, and Sera UI components (via CLI).

### Tech stack

- React 19, TypeScript 5, Vite 6
- Tailwind CSS 4 with `@tailwindcss/vite`
- Apollo Client + GraphQL
- Redux Toolkit
- React Router v7
- Sera UI (component generator via `seraui` CLI)

### Quick start

```bash
# 1) Install deps
yarn

# 2) Start dev server
yarn dev

# 3) Build
yarn build

# 4) Lint
yarn lint
```

Dev server defaults to port `3000` (configurable via `PORT` env var).

### Project structure

```
.
├─ src/
│  ├─ components/
│  │  ├─ layouts/
│  │  └─ templates/
│  ├─ pages/
│  │  └─ Home/
│  ├─ config/
│  ├─ constants/
│  ├─ lib/
│  ├─ redux/
│  ├─ routes/
│  └─ main.tsx
├─ components/              # Sera UI generated components (via CLI)
├─ lib/                     # shared utils (CLI target)
├─ seraui.config.json       # Sera UI registry & output dirs
├─ vite.config.ts           # Vite + aliases
└─ docker-compose.yaml      # Optional dev in Docker
```

### Aliases

- `@` → `./src`
- `@components` → `./components`

Example import:

```tsx
import Button from "@components/button";
```

If you prefer keeping generated UI inside `src`, change the alias and Sera UI config accordingly (see below).

### Tailwind CSS

Tailwind v4 is already wired in `src/index.css`:

```css
@import "tailwindcss";
@import "tw-animate-css";
```

### Sera UI usage

Sera UI components are managed via the `seraui` CLI, configured by `seraui.config.json`.

Current config:

```json
{
  "registryUrl": "https://seraui.seraprogrammer.com/registry",
  "componentsDir": "components",
  "libDir": "lib"
}
```

Typical workflow:

```bash
# Initialize (reads seraui.config.json)
npx seraui@latest init

# Add components
npx seraui@latest add button
npx seraui@latest add card

# Components will be generated into ./components
# Then import via the alias
import Button from '@components/button'
```

Prefer components inside `src`? Update config + aliases:

```json
// seraui.config.json
{
  "registryUrl": "https://seraui.seraprogrammer.com/registry",
  "componentsDir": "src/components/ui",
  "libDir": "src/lib"
}
```

```ts
// vite.config.ts
alias: {
  '@': path.resolve(__dirname, './src'),
  '@components': path.resolve(__dirname, './src/components/ui'),
}
```

```json
// tsconfig.app.json
"paths": {
  "@/*": ["./src/*"],
  "@components/*": ["./src/components/ui/*"]
}
```

### Environment

Create a `.env` at project root if needed:

```env
PORT=3000
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

### Docker (optional)

```bash
docker compose up --build
```

### Troubleshooting

- Cannot find module 'react/jsx-runtime': ensure `@types/react`, `@types/react-dom` installed and `jsx: react-jsx` in `tsconfig.app.json`.
- Vite cannot resolve `@components/*`: check `vite.config.ts` alias and `tsconfig.app.json` paths match and files exist.
- Sera UI generates at root unexpectedly: ensure target folders exist and run CLI from project root. If needed, pin CLI: `npx seraui@latest ...`.
