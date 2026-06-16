# Vashist Website v2

**Version:** 2.0.0  
**Tagline:** Builder. Seeker.  
**Framework:** Next.js (Exported Static)  
**Status:** Active Development

---

## Project Structure

```
projects/vashist-website-v2/
├── index.html                 # Main entry (21KB minified)
├── 404.html                   # Error page
├── _next/static/              # Compiled assets
│   ├── chunks/               # JS/CSS bundles
│   └── media/                # Fonts (woff2)
├── _not-found/               # 404 components
├── favicon.ico
└── *.svg                     # Icons
```

---

## Website Sections

1. **Hero** — "Vash" + "Builder. Seeker."
2. **The Builder** — Systems, AI, Web3, Federal AI
3. **The Seeker** — Ancient wisdom meets modern West
4. **The Pilot** — Aviation, instrument-rated
5. **The Investor** — Patient capital, blockchain, AI
6. **Contact** — rohit.vashist@live.com

---

## Design System

- **Colors:** Dark minimal + gold accents (#C9A84C)
- **Fonts:** Inter + Cormorant Garamond
- **Animations:** Scroll-triggered, SVG path animations
- **Effects:** Canvas noise overlay, gradient backgrounds

---

## Local Development

```bash
cd projects/vashist-website-v2
python3 -m http.server 8889
```

Open: http://localhost:8889/

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| v2.0.0 | 2026-06-16 | Initial setup — Next.js export from commit 4810448 |

---

## Previous Versions (Archived)

- `vashist-rohit-edits/` — HTML/Tailwind version with services/pricing
- `vash1st-com-v2-deploy/` — Original Next.js deploy location
