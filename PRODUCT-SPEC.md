# Product Specification: Vashist Website v2.1

## Document Information
- **Version:** 2.1
- **Date:** 2026-06-16
- **Product Agent:** Product Agent
- **Source File:** `/Users/rohitvashist/Downloads/vash1st-improved (1).html`

---

## Executive Summary

This specification defines the enhancement of an existing poetic HTML website into an immersive, "living" digital experience while preserving the sacred poetic content. The website represents Vash — a builder, life coach, pilot, and investor — through five interconnected identity sections.

**Core Philosophy:** *The content is sacred. The experience is elevated.*

---

## Feature Prioritization

### P0 — Must Have (Critical Path)
These features are essential for the v2.1 release. Without them, the enhancement fails.

| Feature | Section | Description | Acceptance Criteria |
|---------|---------|-------------|---------------------|
| **P0.1** | Hero | Typing animation for "Vash" | Character-by-character reveal, 80-120ms per char, Playfair Display font |
| **P0.2** | Hero | Staggered subtitle reveal | "Builder. Life Coach. Pilot. Investor." word-by-word, 200ms stagger |
| **P0.3** | All | Scroll reveal animations | Sections fade-up + translate on scroll, threshold 0.12, 700ms duration |
| **P0.4** | All | Section accent colors preserved | Gold (#c9a227), Sage (#7c9a8e), Blue (#6b8e9f), Brown (#8a7c5e), Terracotta (#b38c6e) |
| **P0.5** | All | Content preservation | ALL text remains EXACTLY as written — no modifications allowed |
| **P0.6** | Global | Mobile responsiveness | Animations reduce/disabled on mobile, layout intact |
| **P0.7** | Global | Performance | <3s load time, 60fps desktop, 30fps mobile |

### P1 — Should Have (High Value)
These features significantly enhance the experience and should be included if time permits.

| Feature | Section | Description | Acceptance Criteria |
|---------|---------|-------------|---------------------|
| **P1.1** | Hero | Particle/constellation background | Subtle, interactive on mouse move, connects to cursor, max 50 particles |
| **P1.2** | Hero | Ambient glow around "Vash" | CSS text-shadow animation, gold (#c9a227), 3s pulse cycle |
| **P1.3** | Hero | Scroll indicator animation | Bounce/pulse on loop, 2s cycle, arrow points down |
| **P1.4** | Sections | Icon animations on reveal | Scale(1.05) + subtle rotation, 80ms delay after section visible |
| **P1.5** | Sections | Quote border draw-in | Left border animates height from 0 to 100%, 600ms ease-out |
| **P1.6** | Sections | Section number animation | Fade in + slight translate-x, 400ms |
| **P1.7** | Nav | Scroll-based nav background | Blur + opacity change at scrollY > 80px |
| **P1.8** | Nav | Smooth scroll to sections | Offset for nav height (68px), 300ms ease |

### P2 — Nice to Have (Polish)
These features add delight but can be deferred if needed.

| Feature | Section | Description | Acceptance Criteria |
|---------|---------|-------------|---------------------|
| **P2.1** | Global | Magnetic buttons | Buttons follow cursor within 20px radius, subtle (max 5px offset) |
| **P2.2** | Sections | Parallax depth | Background elements move at 0.5x scroll speed |
| **P2.3** | Sections | Morphing dividers | Animated gradient line between sections |
| **P2.4** | Sections | Quote word-by-word fade | Each word fades in sequentially, 50ms stagger |
| **P2.5** | Sections | Keyword shimmer | Key terms have subtle shimmer animation on hover |
| **P2.6** | Global | Ambient gradient mesh | Very slow color shift in background, 20s cycle |
| **P2.7** | Global | Floating dust particles | Optional, very light, max 20 particles, no mobile |
| **P2.8** | CTA | Email glow pulse | Subtle box-shadow pulse on email button, 4s cycle |

---

## User Journey Map

### Entry Point: Hero Section
```
[User Lands] → ["Vash" types in] → [Subtitle words stagger] → [Particle field visible]
     ↓
[Scroll Indicator pulses] → [User scrolls or clicks "Enter the Layers"]
     ↓
```

### Section Flow: The Five Identities
```
[Hero] ──scroll──► [01 The Builder] ──scroll──► [02 The Life Coach]
   │                      │                           │
   │              [Icon animates]              [Icon animates]
   │              [Quote border draws]         [Quote border draws]
   │              [Content fades up]           [Content fades up]
   │                      │                           │
   └────────────── [Minimal divider] ──────────────────┘
                          │
                          ▼
              [03 The Pilot] ──scroll──► [04 The Investor]
                    │                           │
            [Icon animates]               [Icon animates]
            [Quote border draws]          [Quote border draws]
                    │                           │
                    └────────── [Minimal divider] ──────────┘
                                      │
                                      ▼
                          [05 Now It's About You]
                                    │
                            [Tribal invitation card]
                                    │
                                    ▼
                              [CTA Section]
                           [Email + Read Notes]
                                    │
                                    ▼
                              [Footer]
```

### Emotional Arc
| Stage | Section | Emotion | Animation Support |
|-------|---------|---------|-------------------|
| 1. Intrigue | Hero | Curiosity, pause | Typing effect, particles, glow |
| 2. Grounding | Builder | Stability, competence | Gold accents, solid icon |
| 3. Reflection | Life Coach | Introspection | Sage tones, balanced icon |
| 4. Aspiration | Pilot | Elevation, clarity | Blue tones, upward icon |
| 5. Wisdom | Investor | Patience, depth | Earth tones, growth icon |
| 6. Connection | Tribe | Belonging | Warm terracotta, handshake |
| 7. Action | CTA | Commitment | Clear path forward |

---

## Animation Trigger Points

### Hero Section Triggers
| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| "Vash" title | Page load | Type character-by-character | 80ms/char | linear |
| Subtitle words | After title complete | Fade + translateY stagger | 200ms stagger | ease-out |
| Particle field | Page load | Fade in + start movement | 1000ms | ease-out |
| Scroll indicator | After subtitle complete | Bounce loop | 2000ms | ease-in-out |
| Glow effect | Continuous | Pulse opacity 0.12 → 0.20 | 3000ms | sine |

### Section Triggers (Each of 5 Sections)
| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Section container | Scroll into view (threshold 0.12) | Opacity 0→1, translateY 22px→0 | 700ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Section number | After section visible | Fade in + translateX | 400ms | ease-out |
| Pillar icon | 80ms after section visible | Scale 1.05 + subtle rotation | 420ms | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Quote border | After section visible | Height 0→100% | 600ms | ease-out |
| Poetic text | After section visible | Fade up | 500ms | ease-out |
| Body text | Staggered after poetic | Fade up | 400ms each, 100ms stagger | ease-out |

### Navigation Triggers
| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Nav background | scrollY > 80px | Add blur + bg opacity | 300ms | ease |
| Nav links | Hover | Underline grows from center | 250ms | ease |
| CTA buttons | Hover | Background/color transition | 200ms | ease |

### Interactive Triggers
| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Pillar icons | Hover | Scale 1.12 + rotate 3deg + glow | 400ms | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Email CTA | Continuous (P2) | Box-shadow pulse | 4000ms | ease-in-out |
| Magnetic buttons (P2) | Mouse move | Follow cursor (max 5px) | 100ms | ease-out |

---

## Content Preservation Checklist

### Sacred Text — DO NOT MODIFY
The following text must remain EXACTLY as written, including punctuation, line breaks, and spacing:

#### Hero Section
- [ ] Title: "Vash"
- [ ] Subtitle: "Builder. Life Coach. Pilot. Investor."
- [ ] Tagline: "I stand where code meets cosmos. Building systems that shape decisions, and asking the questions that shape the one who builds."
- [ ] CTA: "ENTER THE LAYERS"

#### 01 — The Builder
- [ ] Poetic: "Systems are my mother tongue."
- [ ] Body para 1: "I orchestrate the places where product, code, governance, incentives, and human truth collide — Web3 protocols, intelligent systems, and the architectures that decide how we live and choose together."
- [ ] Body para 2: "A decade at the edge has taught me to hear the difference between noise and the signal that compounds."
- [ ] Meta: "CERTIFIED" / "Ethereum Expert"
- [ ] Meta: "CRAFT" / "Product systems that scale with integrity"
- [ ] Meta: "PATH" / "Built, shipped, learned — sometimes the hard way"
- [ ] Quote: "Every system is a wager on tomorrow. Or the deliberate, conscious act of bringing a better one into being."

#### 02 — The Life Coach
- [ ] Poetic: "Between the temple and the terminal, I walk."
- [ ] Body para 1: "Capability without inner clarity is well-dressed drift."
- [ ] Body para 2: "I guide at the meeting point of ancient maps of the self and the psychology of today — religion, history, meaning, discipline, and transformation."
- [ ] Body para 3: "At the sharp turns, leaders rarely come asking for answers. They come asking for the question sharp enough to cut through fear, ambition, and the stories we tell ourselves."
- [ ] Quote: "Because the highest form of success is the one that does not cost the soul."

#### 03 — The Pilot
- [ ] Poetic: "The sky is the oldest teacher."
- [ ] Body para 1: "It demands presence when everything is uncertain — weather, instruments, altitude, and the quiet voice that says "now.""
- [ ] Body para 2: "No room for ego at ten thousand feet. Only preparation so complete that the moment can finally be still."
- [ ] Body para 3: "What the sky teaches, the ground remembers."
- [ ] Quote: "The sky does not negotiate. Neither should you."

#### 04 — The Investor
- [ ] Poetic: "Patient capital is a form of prayer."
- [ ] Body para 1: "I place long bets on technology that compounds — blockchain, intelligence, and the transformations that outlast quarters and cycles."
- [ ] Body para 2: "The real edge has never been speed. It has always been the courage to see clearly, prepare deeply, and remain solvent long enough for truth to arrive."
- [ ] Quote: "The edge is rarely speed. It is restraint, preparation, and staying solvent long enough to be right."

#### 05 — Now It's About You
- [ ] Poetic: "You've read this far. That already says something."
- [ ] Body para 1: "I don't collect clients. I recognize tribe."
- [ ] Body para 2: "If these words feel like they were written for the part of you that is tired of noise and hungry for alignment — builders who still ask real questions, guides of their own lives, pilots of their attention, and patient stewards of what matters —"
- [ ] Body para 3: "then we are already in relation."
- [ ] Invitation card: "We will find the form together. Whatever life makes possible. No pitch. Only signal."
- [ ] Closing: "If this feels true, the next step is simple."

#### CTA Section
- [ ] Label: "IF SOMETHING HERE RESONATED"
- [ ] Headline: "That is enough signal."
- [ ] Button 1: "WRITE ME"
- [ ] Button 2: "READ MY NOTES"
- [ ] Footer text: "ROHIT.VASHIST@LIVE.COM • FRIENDS • FAMILY • REFERRALS ONLY"

#### Footer
- [ ] Left: "© VASH — RADICAL AUTHENTICITY"
- [ ] Right: "vash1st.com"

### Structural Elements — Preserve
- [ ] Section IDs: #builder, #coach, #pilot, #investor, #tribe
- [ ] Font families: Playfair Display (headings), Inter (body)
- [ ] Section accent colors (CSS classes)
- [ ] Grid texture background
- [ ] Font Awesome icons for each section
- [ ] Navigation anchor links
- [ ] Email link: mailto:rohit.vashist@live.com

---

## Technical Constraints Verification

### Approved Stack
| Technology | Current | v2.1 | Notes |
|------------|---------|------|-------|
| Tailwind CSS | CDN v3.x | Keep CDN | No build step required |
| Font Awesome | CDN 6.5.1 | Keep CDN | Icons must remain |
| Google Fonts | Inter + Playfair | Keep | Preconnect for performance |
| JavaScript | Vanilla | Vanilla | No external JS libraries |

### Constraints Check
- [x] **Single HTML file output** — Confirmed deliverable
- [x] **Tailwind CDN** — Current implementation uses; keep
- [x] **Font Awesome** — Current implementation uses; keep
- [x] **Google Fonts** — Current implementation uses; keep
- [x] **No external JS libraries** — All animations via vanilla JS + CSS
- [x] **Mobile compatible** — Reduce/disable effects on mobile
- [x] **Performance budget** — <3s load, 60fps target

### Performance Requirements
| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | <1.5s | Lighthouse |
| Largest Contentful Paint | <2.5s | Lighthouse |
| Time to Interactive | <3s | Lighthouse |
| Animation Frame Rate (Desktop) | 60fps | DevTools |
| Animation Frame Rate (Mobile) | 30fps min | DevTools |
| Lighthouse Performance Score | >90 | Lighthouse |
| Total Page Weight | <500KB | Network tab |

### Mobile Adaptations
| Feature | Desktop | Mobile |
|---------|---------|--------|
| Particle field | Full (50 particles) | Disabled |
| Typing animation | Full speed | 20% faster |
| Parallax effects | Enabled | Disabled |
| Magnetic buttons | Enabled | Disabled |
| Glow effects | Full | Reduced opacity |
| Hover effects | Full | Touch-friendly tap |

---

## Success Criteria

### Functional Success
- [ ] All P0 features implemented and working
- [ ] All sacred text preserved exactly
- [ ] All navigation links functional
- [ ] Email CTA works correctly
- [ ] Mobile responsive (tested on iOS Safari, Android Chrome)

### Performance Success
- [ ] Load time <3s on 3G connection
- [ ] 60fps maintained during all animations (desktop)
- [ ] 30fps minimum on mid-tier mobile devices
- [ ] Lighthouse score >90 (Performance)
- [ ] No layout shift during animations
- [ ] Reduced motion respected (`prefers-reduced-motion`)

### Experience Success
- [ ] Hero creates "pause" moment for visitors
- [ ] Section transitions feel fluid and poetic
- [ ] Animations enhance rather than distract
- [ ] Site feels "alive" but not overwhelming
- [ ] Typography remains highly readable
- [ ] Visual hierarchy is clear

### Quality Gates
| Gate | Criteria | Sign-off |
|------|----------|----------|
| **QG1** | Content audit passed — all text exact | Product Agent |
| **QG2** | Performance benchmarks met | Engineering |
| **QG3** | Mobile testing passed | QA |
| **QG4** | Accessibility check — reduced motion | Engineering |
| **QG5** | Cross-browser test (Chrome, Safari, Firefox) | QA |

---

## Implementation Notes

### Animation Library Strategy
Since external JS libraries are restricted, implement using:
1. **CSS Animations** — For continuous effects (glow, pulse, bounce)
2. **CSS Transitions** — For hover states and simple reveals
3. **Intersection Observer API** — For scroll-triggered animations
4. **requestAnimationFrame** — For particle field (if P1 implemented)
5. **Web Animations API** — For complex sequencing if needed

### Critical Implementation Order
1. **Phase 1:** P0 features (typing, stagger, scroll reveal, colors)
2. **Phase 2:** P1 features (particles, glow, icon animations, borders)
3. **Phase 3:** P2 features (magnetic buttons, parallax, mesh gradient)
4. **Phase 4:** Polish, performance optimization, mobile testing

### Risk Mitigation
| Risk | Mitigation |
|------|------------|
| Performance degradation | Implement `prefers-reduced-motion`, throttle particle updates |
| Mobile battery drain | Disable particles/parallax on mobile, reduce animation complexity |
| Content accidentally modified | Content audit checklist, diff against original |
| Browser incompatibility | Progressive enhancement, CSS fallbacks |
| Load time exceeded | Lazy load non-critical animations, optimize fonts |

---

## Appendix: Current Implementation Reference

### Existing CSS Classes (Preserve)
```
.heading-serif → Playfair Display, 700 weight
.texture-bg → Grid background pattern
.section-number → Playfair Display, 0.85rem, letter-spacing 0.3em
.minimal-divider → 1px gradient line
.body-text → 1.03rem, line-height 1.95
.poetic → 1.08rem, line-height 2.05
.quote-text → 1.06rem, italic, opacity 0.92
.pillar-header → Flex layout for icon + title
.pillar-icon → 54px circle, animated on hover
.nav-scrolled → Blur background on scroll
.section-* → Section-specific accent colors
.gold-glow → Text shadow for hero
```

### Existing JavaScript Functions (Enhance)
```javascript
handleNav() → Scroll detection, smooth scroll
initScrollReveal() → Intersection Observer for sections
addKeyboardSupport() → '/' key to focus email
```

### Color Palette (Preserve Exactly)
| Section | Primary | Border (30% opacity) | Glow (8% opacity) |
|---------|---------|---------------------|-------------------|
| Builder | #c9a227 (Gold) | #c9a22730 | rgba(201, 162, 39, 0.08) |
| Coach | #7c9a8e (Sage) | #7c9a8e30 | rgba(124, 154, 142, 0.08) |
| Pilot | #6b8e9f (Blue) | #6b8e9f30 | rgba(107, 142, 159, 0.08) |
| Investor | #8a7c5e (Brown) | #8a7c5e30 | rgba(138, 124, 94, 0.08) |
| Tribe | #b38c6e (Terracotta) | #b38c6e30 | rgba(179, 140, 110, 0.08) |

### Typography Scale (Preserve)
| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| Hero Title | 92px (md: 118px) | 0.84 | 700 |
| Hero Subtitle | 29px (md: 34px) | - | 300 |
| Section Heading | 23px | - | - |
| Poetic Text | 1.08rem | 2.05 | - |
| Body Text | 1.03rem | 1.95 | - |
| Quote Text | 1.06rem | 1.9 | italic |
| Section Number | 0.85rem | - | - |
```

---

## Sign-off

This specification is ready for engineering implementation. All requirements have been analyzed, prioritized, and documented with clear acceptance criteria.

**Next Steps:**
1. Engineering review of technical constraints
2. Engineering implementation per Phase order
3. QA validation against Success Criteria
4. Product sign-off on final deliverable

---

*Document generated by Product Agent for Vashist Website v2.1*
*Source: `/Users/rohitvashist/Downloads/vash1st-improved (1).html`*
*Requirements: `/Users/rohitvashist/.openclaw/workspace/projects/vashist-website-v2/REQUIREMENTS-PRODUCT.md`*
