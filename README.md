# Dustaway

Modern cleaning website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed to grow into booking, accounts, and a dashboard.

## Design

- **Colors:** Pastel pink and pastel green
- **Fonts:** Outfit (body), Fraunces (headings)
- **Routes:** Home, Booking, Dashboard (placeholders ready for real features)

## Get started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

## Project structure

- `src/app/` — App Router pages (home, booking, dashboard)
- `src/components/` — Header, Footer
- `src/app/globals.css` — theme variables and Tailwind
- `tailwind.config.ts` — pastel color palette and fonts

Add booking flow, auth, and dashboard features under `src/app/booking`, `src/app/dashboard`, and new API routes as needed.
