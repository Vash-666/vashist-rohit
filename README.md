# Vash Rebrand — Personal Website

A single-page, snap-scroll gallery experience showcasing the pivot from AI/Web3 builder to wisdom seeker across multiple domains.

## Overview

**Live Site:** https://vash-666.github.io/vashist-rohit  
**Tech Stack:** HTML5, CSS3, Vanilla JS, GSAP + ScrollTrigger  
**Fonts:** Editorial New (Georgia fallback), Space Grotesk (Google Fonts)

## The Six Rooms

1. **The Portal** — Opening atmosphere with animated texture
2. **AI & Web3** — Technical foundation and credibility
3. **The Pivot** — Narrative transition moment
4. **Life Coach** — East-meets-West wisdom work
5. **Pilot** — Mental and physical mastery
6. **Investment + The Signal** — Long-term thinking + contact

## Features

- **Snap & Hold Scroll:** GSAP ScrollTrigger pinning with smooth snap behavior
- **Responsive Design:** Mobile-first with reduced motion support
- **Performance:** 60fps animations using transform and opacity only
- **Accessibility:** Respects `prefers-reduced-motion` media query

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Sandstone | `#D4A574` | Primary accent, warmth |
| Indigo | `#1A1B3A` | Deep backgrounds |
| Saffron | `#FF9933` | Energy, highlights |
| Marble | `#F5F5F0` | Light text, breathing room |

## File Structure

```
build/
├── index.html          # Single page, all rooms
├── css/
│   └── main.css        # All styles
├── js/
│   └── main.js         # GSAP animations & scroll behavior
├── assets/
│   └── textures/       # SVG texture backgrounds
│       ├── texture-01.svg  # Portal
│       ├── texture-02.svg  # Tech
│       ├── texture-03.svg  # Pivot
│       ├── texture-04.svg  # Coach
│       ├── texture-05.svg  # Pilot
│       └── texture-06.svg  # Signal
└── README.md
```

## GitHub Pages Deployment

This site is configured for GitHub Pages. Simply push the `build/` contents to the root of your repository's `gh-pages` branch (or main branch for user sites).

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Notes

- Textures are SVG-based for scalability and small file size
- Animations use `transform` and `opacity` for GPU acceleration
- `will-change` is applied strategically before animations
- Intersection Observer used for triggering where applicable

## Contact

**Email:** rohit.vashist@live.com

---

Built with intention. No frameworks, no bloat — just craft.
