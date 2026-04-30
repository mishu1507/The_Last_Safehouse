# DESIGN DOCUMENT — "INFECTED"
### Aditi Mishra Portfolio | Visual & Interaction Design
### Version 1.0

---

## 1. Design Philosophy

This portfolio is built around one central metaphor: **a biological virus infecting a digital system.** The UI starts as a clean, sterile, clinical environment — and the act of scrolling introduces contamination. By the end, the system is fully compromised.

The design must feel **hand-crafted and raw**, not polished and corporate. Every element should feel like it's fighting the infection — or giving in to it.

**Three words that should describe the final output:**
`Corrupted. Alive. Personal.`

---

## 2. Color System

### Base Palette

```
--white:        #F9F7F4   /* warm white, not pure — feels like aged paper */
--black:        #0A0000   /* near-black with red undertone */
--blood:        #8B0000   /* dark blood red — primary infection color */
--arterial:     #C41E3A   /* brighter red — active elements, glows */
--rust:         #5C1A1A   /* mid-dark red — borders, dividers at high infection */
--clinical:     #E8E8E8   /* clean section backgrounds at 0% infection */
--toxic:        #1A0000   /* deep red-black — fully infected background */
```

### Infection Gradient (applied to `--bg` via JS interpolation)
```
0%   → #F9F7F4
25%  → #FFF0F0
50%  → #FFB8B8 blended with #1A0000 at 30% opacity
75%  → #2D0000
100% → #0A0000
```

### Text Color (interpolated)
```
0–40%:   #111111 (near-black)
40–70%:  #8B0000 (blood)
70–100%: #F9F7F4 (white on dark)
```

---

## 3. Typography

### Display Font: `Bebas Neue` (Google Fonts)
- Used for: Hero name, section headings
- Why: Wide, compressed, industrial — feels like a biohazard warning label

### Body Font: `Courier Prime` (Google Fonts)
- Used for: About section bio, project descriptions, skill labels
- Why: Typewriter/terminal feel — clinical and slightly broken

### Accent Font: `Hacked` or `Share Tech Mono` (Google Fonts)
- Used for: Glitch text, easter egg reveal, corrupted labels
- Why: Genuinely looks corrupted without a plugin

### Size Scale
```
Hero name:       clamp(5rem, 12vw, 10rem)
Section headers: clamp(2.5rem, 5vw, 4rem)
Body:            1rem / 1.6 line-height
Labels:          0.7rem / uppercase / 0.15em letter-spacing
```

---

## 4. Layout System

### Grid
- Max content width: 1200px, centered
- Sections: full-viewport-height (`100svh`) for Hero, Contact. Other sections: `min-height: 80vh`
- No rigid column grid — each section has its own spatial logic

### Hero
```
Centered vertically and horizontally
Name: left-aligned at 20% from left
Subtitle: left-aligned, 1rem below name
Red dot: absolute, bottom-right corner, 12px
```

### About
```
Two-column: 60% text / 40% decorative (biohazard watermark, specimen labels)
Labels stacked above text block in small caps
```

### Skills
```
Full-width stacked bars
Category label left / percentage right
Bar fills from left, organic blob edge via SVG clip-path
```

### Projects
```
Asymmetric two-column alternating layout:
  — Card left / detail right
  — Detail left / card right (alternating)
Cards have torn-paper bottom edge (CSS clip-path polygon)
```

### Contact
```
Centered vertical stack
Each contact item on its own line, 2rem gap
Signal pulse dot before each link
```

---

## 5. Animation Specification

### 5.1 Scroll-Driven Infection Engine

```javascript
// Pseudo-code for the core engine
const infectionLevel = scrollY / maxScrollY * 100

// Applied as CSS variables on <html> or <body>
document.documentElement.style.setProperty('--infection', infectionLevel)
document.documentElement.style.setProperty('--bg', interpolate(infectionLevel))
document.documentElement.style.setProperty('--crack-opacity', infectionLevel / 100)
document.documentElement.style.setProperty('--vignette', infectionLevel / 100 * 0.9)
```

All CSS variables are read by elements throughout the page — no section needs its own scroll listener.

---

### 5.2 Hero Animations

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Name | Typewriter (letter by letter) | 2.5s | linear |
| Subtitle | Fade in after name | 0.8s | ease-out |
| Red dot | Scale pulse (1 → 1.4 → 1) | 1.2s | ease-in-out, infinite |
| First crack (corner) | SVG stroke-dashoffset draw | 3s delayed | ease-in |

---

### 5.3 Crack Overlay System

Three layered SVG crack patterns, each at a different z-index and opacity:

```
Layer 1: Corner cracks — appear at infection 15%
Layer 2: Screen-spanning spiderweb cracks — appear at infection 45%
Layer 3: Heavy shatter pattern — appear at infection 75%
```

Each layer uses `stroke-dashoffset` animation — the cracks literally draw themselves.

SVG crack paths should be hand-drawn (irregular, organic) not geometric.

---

### 5.4 Glitch Effect (Text Corruption)

Used on: Project card titles on hover, percentage numbers in skills, easter egg reveal.

```javascript
// Glitch chars pool
const CHARS = '!@#$%^&*<>{}[]|\\░▒▓█▄▀'

function glitchText(element, originalText, duration = 800) {
  const interval = setInterval(() => {
    element.textContent = originalText
      .split('')
      .map((char, i) =>
        Math.random() < 0.3
          ? CHARS[Math.floor(Math.random() * CHARS.length)]
          : char
      )
      .join('')
  }, 50)
  setTimeout(() => {
    clearInterval(interval)
    element.textContent = originalText
  }, duration)
}
```

---

### 5.5 Project Card Hover

1. Card border shifts from white/grey → arterial red (0.15s)
2. Background inverts briefly (red flash, 0.1s)
3. Title runs glitch function for 400ms then resolves
4. Card translates Y: -4px with drop shadow
5. Tech tags scale up 1.05

All via Framer Motion `whileHover` variants.

---

### 5.6 Skill Bars (Infection Fill)

```jsx
// Each bar uses a custom SVG clip-path with irregular right edge
// Framer Motion animates scaleX from 0 → skill% when in view

<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: skill.level / 100 }}
  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
  style={{ transformOrigin: 'left' }}
  className="skill-fill"
/>
```

---

### 5.7 Screen Shake (Easter Egg)

```css
@keyframes shake {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  10% { transform: translate(-8px, -4px) rotate(-0.5deg); }
  20% { transform: translate(8px, 4px) rotate(0.5deg); }
  30% { transform: translate(-6px, 6px) rotate(-0.3deg); }
  40% { transform: translate(6px, -6px) rotate(0.3deg); }
  50% { transform: translate(-4px, 4px) rotate(-0.2deg); }
  60% { transform: translate(4px, -4px) rotate(0.2deg); }
  70% { transform: translate(-2px, 2px) rotate(0deg); }
  80% { transform: translate(2px, -2px) rotate(0deg); }
  90% { transform: translate(-1px, 1px) rotate(0deg); }
}

body.shaking {
  animation: shake 0.8s ease-out;
}
```

---

### 5.8 Custom Cursor

```css
cursor: none; /* on everything */

/* Custom cursor element (absolute positioned div following mouse) */
.cursor {
  width: 32px;
  height: 32px;
  border: 1.5px solid var(--arterial);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
}

/* Inner dot */
.cursor::after {
  content: '';
  width: 4px;
  height: 4px;
  background: var(--arterial);
  border-radius: 50%;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* On hover over interactive elements */
.cursor.hovering {
  transform: scale(1.8);
  border-color: var(--blood);
}
```

---

### 5.9 Scroll Progress Infection Bar

```
Position: fixed, top: 0, full width
Height: 3px
Background: transparent
Fill: linear-gradient(90deg, #8B0000, #C41E3A)
Width: scrollY / maxScrollY * 100%
At 100%: label "FULLY INFECTED" pulses once for 2s
```

---

## 6. Textures & Visual Details

### Noise Grain Overlay
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise pattern */
  opacity: 0.04;
  pointer-events: none;
  z-index: 100;
  mix-blend-mode: overlay;
}
```

### Red Vignette
```css
.vignette {
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at center,
    transparent 40%,
    rgba(139, 0, 0, calc(var(--vignette) * 0.9)) 100%
  );
  pointer-events: none;
  z-index: 50;
}
```

### Biohazard Watermark (About section)
- SVG biohazard symbol
- opacity: 0.04 at 0% infection → 0.12 at 100%
- Slowly rotates: `animation: rotate 60s linear infinite`

---

## 7. Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| < 768px (mobile) | Single column layout. Crack SVGs scaled down. Custom cursor disabled. |
| 768–1024px (tablet) | Two-column projects collapse to single. |
| > 1024px (desktop) | Full layout as designed. |

---

## 8. File Structure

```
/infected-portfolio
├── public/
│   ├── sounds/
│   │   └── zombie-groan.mp3
│   └── favicon.ico (biohazard icon)
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── CrackOverlay.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── InfectionBar.jsx
│   │   ├── Vignette.jsx
│   │   └── EasterEgg.jsx
│   ├── hooks/
│   │   ├── useInfectionLevel.js
│   │   └── useGlitch.js
│   ├── utils/
│   │   └── interpolate.js
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   └── App.jsx
└── package.json
```

---

## 9. DO NOTs (Design Guard Rails)

- ❌ No purple, blue, or green anywhere
- ❌ No card shadows that look like Material Design
- ❌ No rounded corners > 4px on project cards
- ❌ No stock photos or AI-generated images
- ❌ No Inter or Roboto
- ❌ No horizontal scrolling
- ❌ No loading spinner — page loads content directly
- ❌ No "hover for more" tooltips — interactions must be self-evident
