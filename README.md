# srivatsavsurya.com

Personal portfolio of Srivatsav N D, a mechatronics engineer working across robotics, embedded systems and software. Live at **[www.srivatsavsurya.com](https://www.srivatsavsurya.com)**.

## Stack

Vite, React, TypeScript, Tailwind CSS, shadcn/ui (Radix) and React Router. Originally scaffolded with Lovable.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. `CNAME` points the Pages site at `www.srivatsavsurya.com`.
