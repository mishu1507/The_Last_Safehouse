# PRD — "INFECTED" Portfolio
### Product: Personal Portfolio — Aditi Mishra
### Version: 1.0 | Status: Pre-build
### Owner: Aditi Mishra | CSE (Cybersecurity), Parul University

---

## 1. Overview

A single-page personal portfolio that simulates a biological infection spreading across a digital interface as the user scrolls. The portfolio begins clean, minimal, and clinical — and progressively degrades into a corrupted, blood-red, cracked environment by the time the user reaches the footer. It is a direct personality expression: a cybersecurity student who plays Resident Evil and The Walking Dead.

The portfolio is **primarily scroll-driven** — user interaction is minimal by design. The screen does the storytelling.

---

## 2. Goals

- Create a portfolio experience no recruiter or developer has seen before
- Communicate Aditi's actual personality (dark games, cybersecurity, chaos under control)
- Showcase projects and skills in a thematically consistent way
- Load fast, run smooth, work on all screen sizes
- Be genuinely memorable — the kind of thing people screenshot and share

---

## 3. Non-Goals

- Not a traditional "card grid" layout
- Not a resume dump
- Not mobile-first (desktop-first, mobile must still work)
- No login, no backend, no CMS

---

## 4. Target Audience

- Recruiters (cybersecurity internships, research programs)
- Developers (peers, hackathon judges)
- Anyone who Googles Aditi Mishra and lands here

---

## 5. Sections & Feature Requirements

### 5.1 — HERO (0% infection)
- Full screen, stark white/near-white background
- Name appears via a slow typewriter: `ADITI MISHRA`
- Subtitle fades in: `CSE · Cybersecurity · Digital Forensics`
- A single red dot pulses in the corner — the "patient zero"
- No scroll indicator. Just the dot. Let the user discover.
- **Animation:** Name types in letter by letter. Subtitle dissolves in. Red dot heartbeat pulse.

### 5.2 — ABOUT (20% infection)
- Background begins to tint — barely noticeable cream → pale pink
- Hairline cracks appear in corners (SVG overlay, opacity 0.2)
- Bio rendered as a "specimen file" — clinical font, small label text like `SUBJECT:`, `STATUS: ALIVE`, `THREAT LEVEL: ACTIVE`
- A faint biohazard watermark behind the text
- **Animation:** Cracks draw themselves in (SVG stroke-dashoffset animation). Bio text fades in staggered.

### 5.3 — SKILLS (40% infection)
- Background now visibly pink-red tint
- Skills displayed as **infection progress bars** — not normal bars. They fill like a spreading stain, left to right, with uneven edges (blob/organic shape using SVG clip-path)
- Categories: `[ FORENSICS ] [ SIEM ] [ PENTESTING ] [ THREAT INTEL ] [ DEV ]`
- Each bar has a label and a percentage — but the percentage flickers/glitches randomly ±2%
- Optional: A looping DNA helix SVG animation as a section divider
- **Animation:** Bars fill on scroll-enter. Glitch effect on percentage numbers (random character swap every 2–4s).

### 5.4 — PROJECTS (60% infection)
- Background is now deep red-black, cracked SVG overlay at opacity 0.5
- Project cards look like **torn evidence files** — rough edges, tape texture, handwritten-style labels
- Cards: ForensicLens, Hexpose, VERITAS, ThreatScope
- Each card has: Project name (corrupted on hover), 1-line description, tech tags, link
- **Hover behavior:** Text glitches, colors invert (white → black → red), card shakes slightly
- Subtle red drip CSS animation on the card borders
- **Animation:** Cards slide in from alternating sides. Hover triggers glitch + shake.

### 5.5 — CONTACT (80% infection)
- Screen looks nearly destroyed — heavy cracks, red vignette at full intensity
- Simple: email, GitHub, LinkedIn — but rendered as "last transmission" signals
- Each link pulses like a dying signal
- A corrupted "SEND HELP" text in background (barely visible, red on dark red)
- **Animation:** Signal pulse loop on each contact item.

### 5.6 — EASTER EGG
- A hidden biohazard symbol somewhere on the page (About section, very low opacity)
- Clicking it triggers:
  1. Screen shake (CSS keyframe transform)
  2. Full red flash overlay
  3. A zombie groan / RE ambient sound (Web Audio API or HTML5 audio)
  4. "YOU FOUND PATIENT ZERO" text appears in glitch font for 2s then disappears
- **Must be subtle enough that most users miss it**

### 5.7 — GLOBAL ELEMENTS
- Custom cursor: a red crosshair / biohazard reticle
- Sticky header: minimal — just initials `AM` and nav dots (no text nav)
- Scroll progress: a red infection bar at the very top of the viewport (like a reading progress bar, but themed as "infection spread %")
- At 100% scroll: "FULLY INFECTED" flashes once in the infection bar

---

## 6. Infection Progression System

The core mechanic. As `scrollY` increases from 0 → max, a global `infectionLevel` (0–100) drives:

| infectionLevel | Background | Cracks Opacity | Vignette | Text Color Drift |
|---|---|---|---|---|
| 0–10 | #FAFAFA (white) | 0 | 0 | Black |
| 10–30 | #FFF0F0 | 0.1 | 0.05 | Black |
| 30–50 | #FFD0D0 | 0.3 | 0.2 | Dark red |
| 50–70 | #C0302020 | 0.6 | 0.5 | Red/white mix |
| 70–90 | #1A0000 | 0.85 | 0.8 | White on dark red |
| 90–100 | #0D0000 | 1.0 | 1.0 | White/glitch |

All values interpolated smoothly via CSS variables updated by JS scroll listener.

---

## 7. Performance Requirements

- First Contentful Paint < 1.5s
- No layout shift on scroll
- 60fps animations (use `transform` and `opacity` only — no layout-triggering props)
- Framer Motion `useInView` for scroll-triggered animations (not IntersectionObserver manually)
- Crack SVGs preloaded — no pop-in
- Audio autoplay blocked by default — only on explicit click (easter egg)

---

## 8. Accessibility

- All text meets WCAG AA contrast at each infection level
- Reduced motion media query: disables glitch/shake, keeps fade transitions
- Alt text on all non-decorative images
- Keyboard navigable

---

## 9. Success Metrics

- Recruiters spend > 2 min on page (session duration)
- Easter egg discovery rate > 15% (via optional analytics)
- Zero "template" comments — it reads as hand-crafted

---

## 10. Out of Scope (v1)

- Blog section
- Dark/light toggle (the infection IS the toggle)
- Backend contact form
- Multilingual support
