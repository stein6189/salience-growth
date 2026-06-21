# Salience Growth — website

Marketing site for **Salience Growth**, a B2B growth consultancy that helps
service firms win and scale Tier-1 / enterprise accounts. Built with
[Astro](https://astro.build) — a fast, static-first framework.

---

## Run it locally

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:4321
```

Other commands:

```bash
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

> Requires Node.js 18.20+ (you have v24). No database, no backend — it builds to
> plain HTML/CSS/JS that can be hosted anywhere for free.

---

## Editing content (the important part)

**Almost all text lives in one file:** [`src/data/site.ts`](src/data/site.ts).
Open it and edit the copy — every section of the page updates automatically.
Look for `TODO` comments; those are placeholders to replace with real details:

- `email`, `bookingUrl`, `linkedin` — your real contact + booking links
- `proofStrip`, `results.metrics`, `results.testimonial` — real numbers & quotes
- `about.founder` — your name, bio (and add a photo, see below)
- `contact.formAction` — your Formspree form ID (see "Contact form" below)

### Colours & fonts
Theme variables are at the top of [`src/styles/global.css`](src/styles/global.css)
(`--ink`, `--paper`, `--accent`, fonts…). Change them once to re-skin the site.

### Adding your photo
Drop a square image at `public/founder.jpg`, then in
`src/components/About.astro` swap the `.avatar` initials block for
`<img src="/founder.jpg" alt="..." />`.

### Contact form
The form works out of the box by opening the visitor's email client. For proper
inbox delivery, create a free form at [formspree.io](https://formspree.io), then
put your form ID into `contact.formAction` in `src/data/site.ts`
(`https://formspree.io/f/abcmyform`). Done — submissions arrive in your inbox.

---

## Deploy (free) + connect your domain

Recommended host: **Cloudflare Pages** or **Netlify** (both free, both give HTTPS).

### Option A — Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Pages → *Create* → connect the repo.
3. Build command: `npm run build` · Output directory: `dist`.
4. After deploy you get a `*.pages.dev` URL. Add your custom domain under
   *Custom domains* and follow the DNS prompts.

### Option B — Netlify (drag-and-drop, no Git needed)
1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the
   `dist` folder onto the page. Instantly live on a `*.netlify.app` URL.
3. Add your domain under *Domain settings*.

### Connecting `saliencegrowth.com`
1. Register the domain at a registrar (Namecheap, Cloudflare Registrar, Porkbull,
   IONOS for `.de`, etc.).
2. In your host's dashboard, add the custom domain — it will tell you exactly
   which DNS records to set (usually a `CNAME` for `www` and the host's
   nameservers or an `A`/`ALIAS` record for the apex).
3. Update `site` in [`astro.config.mjs`](astro.config.mjs) to your final URL so
   canonical links and the sitemap are correct.

---

## Project structure

```
salience-growth/
├─ public/            static assets served as-is (favicon, robots.txt, images)
├─ src/
│  ├─ data/site.ts    ← all editable copy lives here
│  ├─ styles/         global design system (colours, type)
│  ├─ layouts/        page shell (head, meta, fonts)
│  ├─ components/     page sections (Hero, Services, …)
│  └─ pages/          routes (index.astro = home page)
└─ astro.config.mjs   site URL & config
```
