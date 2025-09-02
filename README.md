# Next.js TypeScript Starter

A modern starter template for building web applications with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- ⚡ Next.js 15 (App Router)
- 🟦 TypeScript
- 💅 PostCSS & Prettier
- 🧩 Modular folder structure (`app`, `lib`, `types`, `utils`)
- 🏷️ Custom configuration files (`next.config.ts`, `tsconfig.json`, etc.)
- 🏎️ Fast dependency management with [pnpm](https://pnpm.io/)

## Getting Started

1. **Install dependencies:**
    ```powershell
    pnpm install
    ```

2. **Run the development server:**
    ```powershell
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/         # App router pages, layouts, global styles
  assets/      # Static assets
  lib/         # Utility libraries
  types/       # TypeScript types
  utils/       # Shared utilities
public/        # Public static files (SVGs, etc.)
```

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Run linter
- `pnpm format` — Format code with Prettier

## License

MIT

