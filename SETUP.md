# Setup & customization notes

Quick reference for finishing the personalization of this portfolio.

## 1. Set your real domain (needed for social share cards)

Social previews (LinkedIn, X, Slack) need an **absolute** image URL. Replace
`https://developerfolio.js.org` with your production domain in:

- `index.html` → `og:url`, `og:image`, `twitter:url`, `twitter:image`
- `package.json` → `"homepage"`

The share image lives at `public/og-image.png` (1200×630, regenerate from
`public/og-image.svg` if you tweak it).

## 2. Enable live GitHub data (optional)

The pinned-repos (`Projects`) and GitHub profile (`Profile`) sections are
driven by data fetched at **build time** by `fetch.cjs`. To turn them on:

1. Create a GitHub token (no scopes needed for public data).
2. Set these environment variables (locally in `.env`, and in **Vercel →
   Project → Settings → Environment Variables**):

   ```
   REACT_APP_GITHUB_TOKEN = <your token>
   GITHUB_USERNAME        = opswithranjan
   USE_GITHUB_DATA        = "true"
   MEDIUM_USERNAME        = <your medium handle>   # optional, auto-fetches blogs
   ```

3. In `src/portfolio.js` set `openSource.display = true` and
   `openSource.showGithubProfile = "true"`.

> If `USE_GITHUB_DATA` is unset, `fetch.cjs` skips the fetch and these sections
> stay hidden — no errors.

## 3. Remaining content TODOs (search `TODO` in `src/portfolio.js`)

- **Certification verify links** — AZ-400, AZ-104, CKA, CKS buttons were removed
  because the template's URLs were wrong/placeholder. Add your real Credly /
  Microsoft Learn verification URLs.
- **Stack Overflow** — `socialMediaLinks.stackoverflow` is empty (icon hidden);
  add your profile URL or leave blank.
- **Blogs / Talks / Podcast / Twitter** — emptied of the original template's
  sample data; add your own and flip the section's `display` to `true`.

## 4. Local commands

```
npm install        # no --legacy-peer-deps needed
npm run dev        # vite dev server (port 3000)
npm run build      # production build -> build/
npm run preview    # preview the production build
npm test           # vitest
```
