# Kalculate.me

Kalculate.me is an SEO-first calculator platform built with **Next.js 14**, **React**, and **TypeScript**.
This repository is scaffolded for rapid implementation of calculator features, category pages, state management, and production deployment.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- ESLint (Next.js config)

## Project Structure

```text
src/
  app/
    calculators/[slug]/page.tsx
    category/[category]/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    CalculatorForm.tsx
    ResultDisplay.tsx
    SEOHead.tsx
  lib/
    formulas/index.ts
    state/store.ts
  data/
    calculators.json
  utils/
    seo.ts
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` – start development server
- `npm run build` – build production app
- `npm run start` – run production server
- `npm run lint` – run ESLint

## Environment

Copy `.env.example` to `.env.local` and update values as needed.

```bash
cp .env.example .env.local
```

## Deployment

Deploy on Vercel:

1. Push this repository to GitHub.
2. Import project in Vercel.
3. Configure environment variables from `.env.local`.
4. Deploy.

---

This is the initial scaffold. Calculator logic, SEO content, and platform features will be added incrementally.
