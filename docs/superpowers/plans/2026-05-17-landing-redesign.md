# Mighty English Landing Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing Astro landing page with the complete Mighty English design system — 12 sections, premium navy/off-white/red aesthetic, mobile-first, all CTAs → Telegram.

**Architecture:** Port the design bundle's `colors_and_type.css` and `landing.css` verbatim as the CSS foundation, then convert each JSX component to an Astro `.astro` file using the same `.me-*` class names. Vanilla JS inline scripts handle the three interactive patterns (burger menu, FAQ accordion, sticky CTA). All images extracted from design bundle → `public/assets/img/`.

**Tech Stack:** Astro 6 · Custom CSS (`.me-*` design system) · Google Fonts (Unbounded, Inter, Lora) · Vanilla JS

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `src/styles/tokens.css` | CSS variables + Google Fonts `@import` |
| Create | `src/styles/landing.css` | All `.me-*` component classes |
| Modify | `src/styles/global.css` | Import tokens + landing; remove old styles |
| Modify | `src/layouts/Layout.astro` | Remove FontAwesome CDN; no other changes |
| Create | `public/assets/img/rudolf-warm.png` | Rudolf hero/about photo |
| Create | `public/assets/img/rudolf-cartoon-chalkboard.jpg` | Methodology illustration |
| Create | `public/assets/img/rudolf-cartoon-standing.png` | FAQ illustration |
| Replace | `src/components/Header.astro` | Sticky nav, mobile burger |
| Replace | `src/components/Hero.astro` | H1, photo, drawn underline SVG |
| Replace | `src/components/About.astro` | Dark section, bio, credentials |
| Replace | `src/components/Footer.astro` | Logo, nav links, legal |
| Create | `src/components/ValueRow.astro` | 3 stat items (12 лет, 240+, 1 на 1) |
| Create | `src/components/Methodology.astro` | 4 steps + chalkboard card |
| Create | `src/components/Services.astro` | 3 service cards |
| Create | `src/components/Tariffs.astro` | 3 tariff cards |
| Create | `src/components/Reviews.astro` | 6 review cards |
| Create | `src/components/FAQ.astro` | Accordion + cartoon aside |
| Create | `src/components/FinalCTA.astro` | Dark mega-CTA section |
| Create | `src/components/StickyMobileCTA.astro` | Scroll-triggered mobile bar |
| Replace | `src/pages/index.astro` | Assembles all sections |
| Delete | `src/components/Nav.astro` | Replaced by Header |
| Delete | `src/components/Skills.astro` | Not in new design |
| Delete | `src/components/Contact.astro` | Not in new design |

---

## Task 1: CSS Tokens

**Files:**
- Create: `src/styles/tokens.css`

- [ ] **Step 1.1: Create `src/styles/tokens.css`** with the full design token set (Google Fonts import + CSS custom properties)

```css
/* src/styles/tokens.css */
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Lora:ital,wght@1,400;1,500;1,600&display=swap');

:root {
  --color-primary:           #322D6B;
  --color-on-primary:        #FBFAF7;
  --color-secondary:         #1E1B40;
  --color-on-secondary:      #FBFAF7;
  --color-accent:            #CC2936;
  --color-on-accent:         #FBFAF7;
  --color-accent-hover:      #A8212C;
  --color-gold:              #C9A24B;
  --color-on-gold:           #1E1B40;
  --color-surface:           #FBFAF7;
  --color-surface-card:      #FFFFFF;
  --color-surface-dark:      #1E1B40;
  --color-on-surface:        #1E1B40;
  --color-on-surface-variant:#6B6880;
  --color-on-surface-dark:   #FBFAF7;
  --color-border:            #E5E3DC;

  --font-display:  "Unbounded", "Onest", "Manrope", system-ui, sans-serif;
  --font-body:     "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-quote:    "Lora", "Georgia", serif;

  --fw-regular: 400;
  --fw-medium:  500;
  --fw-semi:    600;
  --fw-bold:    700;
  --fw-black:   800;

  --fs-h1:        4rem;
  --fs-h2:        2.75rem;
  --fs-h3:        1.75rem;
  --fs-body-lg:   1.125rem;
  --fs-body-md:   1rem;
  --fs-label:     0.875rem;
  --fs-button:    1.125rem;
  --fs-quote:     1.625rem;

  --lh-tight:     1.1;
  --lh-snug:      1.2;
  --lh-quote:     1.45;
  --lh-body:      1.6;

  --ls-tight:     -0.5px;
  --ls-caps:      0.04em;

  --radius-sm:    8px;
  --radius-md:    12px;
  --radius-lg:    16px;
  --radius-pill:  999px;

  --space-xs:     8px;
  --space-sm:     16px;
  --space-md:     24px;
  --space-lg:     48px;
  --space-xl:     96px;

  --shadow-card:       0 4px 16px rgba(30,27,64,0.06);
  --shadow-card-hover: 0 12px 28px rgba(30,27,64,0.12);
  --shadow-cta:        0 6px 20px rgba(204,41,54,0.30);
  --shadow-cta-mega:   0 10px 32px rgba(204,41,54,0.40);

  --container:    1200px;
  --ease-out:     cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast:     180ms;
  --dur-base:     320ms;
  --dur-slow:     560ms;
}

html, body {
  background: var(--color-surface);
  color: var(--color-on-surface);
  font-family: var(--font-body);
  font-size: var(--fs-body-md);
  line-height: var(--lh-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--color-on-surface);
  margin: 0;
  text-wrap: balance;
}

h1 {
  font-size: clamp(2.25rem, 1.2rem + 4.4vw, var(--fs-h1));
  font-weight: var(--fw-black);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-tight);
}
h2 {
  font-size: clamp(1.75rem, 1rem + 3.2vw, var(--fs-h2));
  font-weight: var(--fw-black);
  line-height: var(--lh-tight);
}
h3 {
  font-size: clamp(1.375rem, 1rem + 1.4vw, var(--fs-h3));
  font-weight: var(--fw-semi);
  line-height: var(--lh-snug);
}

p { margin: 0; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 1.2: Commit**

```bash
git add src/styles/tokens.css
git commit -m "feat: add design system CSS tokens (Unbounded/Inter/Lora, colors, spacing)"
```

---

## Task 2: Landing CSS

**Files:**
- Create: `src/styles/landing.css`

- [ ] **Step 2.1: Create `src/styles/landing.css`** with all `.me-*` component classes

```css
/* src/styles/landing.css — Mighty English component classes */
* { box-sizing: border-box; }
html, body { margin: 0; }
a { color: inherit; }

/* ---- Container ---- */
.me-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
@media (min-width: 1024px) { .me-container { padding: 0 48px; } }
.me-container--narrow { max-width: 880px; }

/* ---- Section spacing ---- */
.me-section { padding: 56px 0; }
@media (min-width: 1024px) { .me-section { padding: 96px 0; } }

/* ---- Button ---- */
.me-btn-wrap { position: relative; display: inline-block; }
.me-btn {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.2;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out),
              background-color var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out);
}
.me-btn__inner { display: inline-flex; align-items: center; gap: 10px; }
.me-btn--md { font-size: 16px; padding: 16px 28px; }
.me-btn--lg { font-size: 18px; padding: 18px 36px; }
.me-btn--xl { font-size: 20px; padding: 22px 48px; border-radius: var(--radius-lg); }
.me-btn--primary { background: var(--color-accent); color: var(--color-on-accent); box-shadow: var(--shadow-cta); }
.me-btn--primary:hover { background: var(--color-accent-hover); transform: translateY(-2px); box-shadow: 0 10px 24px rgba(204,41,54,0.40); }
.me-btn--primary:active { transform: scale(0.98); box-shadow: 0 2px 8px rgba(204,41,54,0.25); }
.me-btn--secondary { background: transparent; color: var(--color-primary); border: 2px solid var(--color-primary); padding-block: 14px; }
.me-btn--secondary:hover { background: var(--color-primary); color: var(--color-on-primary); transform: translateY(-2px); }
.me-btn--ghost { background: transparent; color: var(--color-on-surface-dark); border: 2px solid rgba(251,250,247,0.6); padding-block: 14px; }
.me-btn--ghost:hover { background: rgba(251,250,247,0.1); border-color: var(--color-on-surface-dark); transform: translateY(-2px); }
.me-btn--mega { background: var(--color-accent); color: var(--color-on-accent); box-shadow: var(--shadow-cta-mega); border-radius: var(--radius-lg); }
.me-btn--mega:hover { background: var(--color-accent-hover); transform: translateY(-2px); }
.me-drawn-ring { position: absolute; inset: -14px -22px; width: calc(100% + 44px); height: calc(100% + 28px); pointer-events: none; z-index: 0; }
.me-btn-wrap .me-btn { position: relative; z-index: 1; }

/* ---- Badge ---- */
.me-badge {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  line-height: 1.2;
  white-space: nowrap;
}
.me-badge--primary { background: var(--color-primary); color: var(--color-on-primary); }
.me-badge--accent  { background: var(--color-accent);  color: var(--color-on-accent); }
.me-badge--gold    { background: var(--color-gold);    color: var(--color-on-gold); }
.me-badge__dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; }

/* ---- Hand-drawn primitives ---- */
.me-drawn-underline { position: absolute; left: -4px; right: -4px; bottom: -12%; width: calc(100% + 8px); height: 0.4em; overflow: visible; }
.me-drawn-arrow { width: 80px; height: 28px; }
.me-drawn-wave { width: 100%; height: 18px; display: block; }

/* ---- Header ---- */
.me-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(251,250,247,0.82);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid var(--color-border);
}
.me-header__row { display: flex; align-items: center; justify-content: space-between; height: 72px; }
.me-header__logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.me-header__logo img { width: 40px; height: 40px; object-fit: contain; }
.me-header__brand { font-family: var(--font-display); font-weight: 800; font-size: 15px; line-height: 1; color: var(--color-primary); letter-spacing: -0.2px; }
.me-header__brand small { display: block; font-size: 11px; font-weight: 600; color: var(--color-on-surface-variant); margin-top: 2px; letter-spacing: 0.04em; text-transform: uppercase; }
.me-nav { display: none; align-items: center; gap: 28px; }
@media (min-width: 1024px) { .me-nav { display: flex; } }
.me-nav a { font-family: var(--font-body); font-size: 15px; font-weight: 500; color: var(--color-on-surface); text-decoration: none; }
.me-nav a:hover { color: var(--color-accent); }
.me-header__cta { display: none; }
@media (min-width: 1024px) { .me-header__cta { display: inline-flex; } }
.me-burger { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: transparent; border: none; color: var(--color-primary); cursor: pointer; padding: 0; }
@media (min-width: 1024px) { .me-burger { display: none; } }
.me-mobnav {
  position: fixed; inset: 72px 0 0; z-index: 49;
  background: var(--color-surface);
  padding: 24px;
  display: flex; flex-direction: column; gap: 4px;
  transform: translateY(-110%); visibility: hidden; opacity: 0; pointer-events: none;
  transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-out), visibility 0s linear var(--dur-base);
}
.me-mobnav.open { transform: translateY(0); visibility: visible; opacity: 1; pointer-events: auto; transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-out), visibility 0s linear; }
.me-mobnav a { font-family: var(--font-display); font-weight: 600; font-size: 24px; color: var(--color-on-surface); text-decoration: none; padding: 12px 0; border-bottom: 1px solid var(--color-border); }
.me-mobnav .me-btn { margin-top: 16px; align-self: flex-start; }

/* ---- Hero ---- */
.me-hero { padding-top: 32px; padding-bottom: 56px; }
@media (min-width: 1024px) { .me-hero { padding-top: 56px; padding-bottom: 96px; } }
.me-hero__grid { display: grid; gap: 32px; grid-template-columns: 1fr; align-items: center; }
@media (min-width: 1024px) { .me-hero__grid { grid-template-columns: 7fr 5fr; gap: 48px; } }
.me-hero__eyebrow { color: var(--color-on-surface-variant); margin-bottom: 14px; }
.me-hero h1 { font-size: clamp(2.25rem, 1rem + 5vw, 4.25rem); line-height: 1.05; letter-spacing: -0.5px; font-weight: 800; margin-bottom: 20px; }
.me-hero h1 .underlined { position: relative; display: inline-block; color: var(--color-primary); }
.me-hero__sub { font-size: clamp(1rem, 0.8rem + 0.6vw, 1.25rem); line-height: 1.55; color: var(--color-on-surface); max-width: 540px; margin-bottom: 28px; }
.me-hero__sub b { font-weight: 600; }
.me-hero__ctas { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
.me-hero__photo-wrap { position: relative; aspect-ratio: 4/5; border-radius: var(--radius-lg); background: linear-gradient(180deg, #EBE7DC 0%, #F5F2EA 100%); overflow: hidden; }
.me-hero__photo-wrap img { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; height: auto; max-height: 110%; object-fit: contain; object-position: bottom; }
.me-hero__photo-tag { position: absolute; left: 16px; top: 16px; background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: var(--radius-pill); padding: 6px 14px; font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-on-surface); box-shadow: var(--shadow-card); display: inline-flex; align-items: center; gap: 8px; }
.me-hero__photo-tag .dot { width: 8px; height: 8px; border-radius: 50%; background: #2E7D5A; }

/* ---- Value row ---- */
.me-value { background: var(--color-surface-card); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); }
.me-value__grid { display: grid; grid-template-columns: 1fr; gap: 16px; padding: 32px 0; }
@media (min-width: 768px) { .me-value__grid { grid-template-columns: repeat(3, 1fr); padding: 40px 0; } }
.me-value__item { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; }
.me-value__num { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 1rem + 3vw, 3rem); line-height: 1; color: var(--color-primary); }
.me-value__lbl { font-family: var(--font-body); font-size: 14px; color: var(--color-on-surface); }
.me-value__item + .me-value__item { padding-top: 16px; border-top: 1px solid var(--color-border); }
@media (min-width: 768px) { .me-value__item + .me-value__item { padding-top: 0; border-top: none; border-left: 1px solid var(--color-border); padding-left: 28px; } }

/* ---- Dark section ---- */
.me-section--dark { background: var(--color-surface-dark); color: var(--color-on-surface-dark); }
.me-section--dark h1, .me-section--dark h2, .me-section--dark h3 { color: var(--color-on-surface-dark); }
.me-section--dark .me-eyebrow { color: rgba(251,250,247,0.6); }

/* ---- About ---- */
.me-about__grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
@media (min-width: 1024px) { .me-about__grid { grid-template-columns: 5fr 7fr; gap: 64px; } }
.me-about__photo-wrap { position: relative; aspect-ratio: 4/5; border-radius: var(--radius-lg); background: #322D6B; overflow: hidden; }
.me-about__photo-wrap img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.me-about h2 { margin-bottom: 20px; }
.me-about__lead { font-family: var(--font-quote); font-style: italic; font-size: clamp(1.125rem, 0.9rem + 0.8vw, 1.5rem); line-height: 1.5; color: var(--color-gold); margin-bottom: 24px; }
.me-about__body { font-family: var(--font-body); font-size: 16px; line-height: 1.7; color: var(--color-on-surface-dark); margin-bottom: 12px; }
.me-about__creds { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px 24px; margin-top: 28px; list-style: none; padding: 0; }
.me-about__creds li { display: flex; gap: 12px; align-items: flex-start; font-family: var(--font-body); font-size: 14px; line-height: 1.5; color: var(--color-on-surface-dark); }
.me-about__creds svg { flex-shrink: 0; margin-top: 2px; }
.me-about__actions { margin-top: 32px; display: flex; gap: 14px; flex-wrap: wrap; }

/* ---- Eyebrow + section head ---- */
.me-eyebrow { font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-on-surface-variant); margin-bottom: 16px; display: inline-flex; align-items: center; gap: 12px; }
.me-eyebrow::before { content: ""; display: inline-block; width: 32px; height: 1.5px; background: currentColor; border-radius: 2px; }
.me-section__head { max-width: 720px; margin-bottom: 48px; }
.me-section__head h2 { margin-bottom: 16px; }
.me-section__head p { font-size: 18px; line-height: 1.6; color: var(--color-on-surface-variant); font-family: var(--font-body); }

/* ---- Methodology ---- */
.me-method__grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .me-method__grid { grid-template-columns: repeat(2, 1fr); gap: 18px; } }
@media (min-width: 1024px) { .me-method__grid { grid-template-columns: repeat(4, 1fr); gap: 18px; } }
.me-step { background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px 24px 32px; position: relative; display: flex; flex-direction: column; gap: 12px; }
.me-step__num { font-family: var(--font-display); font-weight: 800; font-size: 14px; color: var(--color-accent); letter-spacing: 0.04em; text-transform: uppercase; }
.me-step h3 { font-size: 22px; }
.me-step p { font-family: var(--font-body); font-size: 15px; line-height: 1.55; color: var(--color-on-surface); }
.me-step__arrow { position: absolute; right: -32px; top: 40%; display: none; z-index: 2; }
@media (min-width: 1024px) { .me-step__arrow { display: block; } }
.me-method__hero { position: relative; margin-top: 32px; background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px 28px 0; display: grid; grid-template-columns: 1fr; gap: 12px; overflow: hidden; }
@media (min-width: 768px) { .me-method__hero { grid-template-columns: 5fr 4fr; gap: 32px; padding: 36px 36px 0; } }
.me-method__hero h3 { font-size: clamp(1.5rem, 1rem + 1.5vw, 2rem); margin-bottom: 12px; }
.me-method__hero p { font-family: var(--font-body); font-size: 16px; line-height: 1.6; color: var(--color-on-surface); margin-bottom: 20px; max-width: 460px; }
.me-method__hero img { display: block; width: 100%; max-width: 380px; margin: 0 auto; align-self: end; }
.me-method__hero-content { padding-bottom: 32px; }

/* ---- Services ---- */
.me-services__grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .me-services__grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
.me-service { background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: 14px; transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.me-service:hover { transform: translateY(-6px); box-shadow: var(--shadow-card-hover); }
.me-service__ico { width: 52px; height: 52px; display: inline-flex; align-items: center; justify-content: center; color: var(--color-primary); }
.me-service h3 { font-size: 22px; }
.me-service p { font-family: var(--font-body); font-size: 15px; line-height: 1.55; color: var(--color-on-surface); flex: 1; }
.me-service__price { display: flex; align-items: baseline; gap: 10px; }
.me-service__price .new { font-family: var(--font-display); font-weight: 800; font-size: 24px; color: var(--color-on-surface); }
.me-service__price .old { font-family: var(--font-body); font-size: 14px; color: var(--color-on-surface-variant); text-decoration: line-through; }
.me-service__cta { font-family: var(--font-display); font-weight: 600; font-size: 14px; color: var(--color-accent); text-decoration: none; display: inline-flex; align-items: center; gap: 6px; align-self: flex-start; }
.me-service__cta:hover { color: var(--color-accent-hover); }

/* ---- Tariffs ---- */
.me-tariffs__grid { display: grid; grid-template-columns: 1fr; gap: 18px; align-items: stretch; }
@media (min-width: 1024px) { .me-tariffs__grid { grid-template-columns: repeat(3, 1fr); gap: 22px; align-items: start; padding-top: 18px; } }
.me-tariff { background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 32px 28px; box-shadow: var(--shadow-card); position: relative; display: flex; flex-direction: column; gap: 14px; }
.me-tariff--reco { border: 2px solid var(--color-primary); }
@media (min-width: 1024px) { .me-tariff--reco { transform: translateY(-12px); } }
.me-tariff--premium { border: 2px solid var(--color-gold); }
.me-tariff--premium .me-tariff__name { color: var(--color-gold); }
.me-tariff__badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); }
.me-tariff__name { font-family: var(--font-display); font-weight: 600; font-size: 18px; color: var(--color-on-surface); }
.me-tariff__price { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.me-tariff__price .old { color: var(--color-on-surface-variant); text-decoration: line-through; font-family: var(--font-body); font-size: 15px; }
.me-tariff__price .new { font-family: var(--font-display); font-weight: 800; font-size: 40px; line-height: 1; color: var(--color-on-surface); }
.me-tariff__price .per { font-family: var(--font-body); font-size: 14px; color: var(--color-on-surface-variant); }
.me-tariff__feat { list-style: none; padding: 0; margin: 8px 0; display: flex; flex-direction: column; gap: 10px; }
.me-tariff__feat li { font-family: var(--font-body); font-size: 15px; line-height: 1.5; color: var(--color-on-surface); display: flex; gap: 10px; align-items: flex-start; }
.me-tariff__feat li svg { margin-top: 4px; flex-shrink: 0; }
.me-tariff__cta { margin-top: auto; }
.me-tariff__cta .me-btn { width: 100%; justify-content: center; }
.me-tariff--premium .me-btn--secondary { color: var(--color-gold); border-color: var(--color-gold); }
.me-tariff--premium .me-btn--secondary:hover { background: var(--color-gold); color: var(--color-on-gold); }

/* ---- Reviews ---- */
.me-reviews__grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
@media (min-width: 768px) { .me-reviews__grid { grid-template-columns: repeat(2, 1fr); gap: 22px; } }
@media (min-width: 1024px) { .me-reviews__grid { grid-template-columns: repeat(3, 1fr); gap: 22px; } }
.me-review { position: relative; background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 32px 28px; box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: 18px; }
.me-review__mark { position: absolute; top: -2px; right: 22px; font-family: var(--font-quote); font-style: italic; font-weight: 600; font-size: 110px; line-height: 0.9; color: var(--color-primary); pointer-events: none; opacity: 0.12; }
.me-review__body { font-family: var(--font-quote); font-style: italic; font-weight: 500; font-size: 18px; line-height: 1.5; color: var(--color-on-surface); position: relative; z-index: 1; }
.me-review__who { display: flex; gap: 12px; align-items: center; margin-top: auto; }
.me-review__avatar { width: 44px; height: 44px; border-radius: 999px; background: var(--color-primary); color: var(--color-on-primary); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; font-size: 15px; flex-shrink: 0; }
.me-review__name { font-family: var(--font-display); font-weight: 600; font-size: 15px; color: var(--color-on-surface); }
.me-review__meta { font-family: var(--font-body); font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-on-surface-variant); margin-top: 2px; }

/* ---- FAQ ---- */
.me-faq__layout { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start; }
@media (min-width: 1024px) { .me-faq__layout { grid-template-columns: 4fr 8fr; gap: 64px; } }
.me-faq__aside img { display: block; width: 100%; max-width: 320px; margin: 0 auto; }
.me-faq__aside h3 { font-size: 24px; margin-bottom: 12px; text-align: center; }
.me-faq__aside p { font-family: var(--font-body); font-size: 15px; color: var(--color-on-surface-variant); line-height: 1.55; text-align: center; max-width: 280px; margin: 0 auto; }
.me-faq__list { display: flex; flex-direction: column; }
.me-faq__item { border-top: 1px solid var(--color-border); padding: 22px 0; cursor: pointer; }
.me-faq__item:last-child { border-bottom: 1px solid var(--color-border); }
.me-faq__q { display: flex; align-items: center; justify-content: space-between; gap: 16px; font-family: var(--font-display); font-weight: 600; font-size: 18px; color: var(--color-on-surface); }
.me-faq__q svg { transition: transform var(--dur-base) var(--ease-out); flex-shrink: 0; }
.me-faq__item--open .me-faq__q svg { transform: rotate(45deg); }
.me-faq__a { max-height: 0; overflow: hidden; transition: max-height var(--dur-base) var(--ease-out), padding var(--dur-base) var(--ease-out); font-family: var(--font-body); font-size: 15px; line-height: 1.6; color: var(--color-on-surface); }
.me-faq__item--open .me-faq__a { max-height: 320px; padding-top: 12px; }

/* ---- Final CTA ---- */
.me-final { text-align: center; }
.me-final__eyebrow { color: var(--color-gold); }
.me-final__eyebrow::before { background: var(--color-gold); }
.me-final h2 { font-size: clamp(2rem, 1rem + 4vw, 4rem); margin: 0 auto 16px; max-width: 18ch; }
.me-final__sub { font-family: var(--font-body); font-size: 18px; line-height: 1.55; color: rgba(251,250,247,0.7); max-width: 580px; margin: 0 auto 40px; }
.me-final__cta { display: inline-flex; }

/* ---- Footer ---- */
.me-footer { background: var(--color-surface); border-top: 1px solid var(--color-border); padding: 48px 0 32px; }
.me-footer__row { display: flex; flex-direction: column; gap: 24px; align-items: flex-start; }
@media (min-width: 768px) { .me-footer__row { flex-direction: row; align-items: center; justify-content: space-between; } }
.me-footer__brand { display: flex; gap: 14px; align-items: center; }
.me-footer__brand img { width: 56px; height: 56px; object-fit: contain; }
.me-footer__name { font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--color-primary); line-height: 1.2; }
.me-footer__name small { display: block; font-family: var(--font-body); font-size: 12px; font-weight: 500; color: var(--color-on-surface-variant); margin-top: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
.me-footer__links { display: flex; gap: 24px; flex-wrap: wrap; }
.me-footer__links a { font-family: var(--font-body); font-size: 14px; color: var(--color-on-surface); text-decoration: none; }
.me-footer__links a:hover { color: var(--color-accent); }
.me-footer__legal { font-family: var(--font-body); font-size: 12px; color: var(--color-on-surface-variant); margin-top: 24px; }

/* ---- Sticky mobile CTA ---- */
.me-sticky-cta {
  position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 40;
  border-radius: var(--radius-lg);
  background: var(--color-accent); color: var(--color-on-accent);
  box-shadow: var(--shadow-cta-mega);
  padding: 14px 22px;
  display: flex; align-items: center; justify-content: center; gap: 10px;
  font-family: var(--font-display); font-weight: 600; font-size: 16px;
  text-decoration: none;
  transform: translateY(120%); opacity: 0;
  transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out);
}
.me-sticky-cta.visible { transform: translateY(0); opacity: 1; }
@media (min-width: 1024px) { .me-sticky-cta { display: none; } }
```

- [ ] **Step 2.2: Commit**

```bash
git add src/styles/landing.css
git commit -m "feat: add landing component CSS (.me-* class system)"
```

---

## Task 3: Update global.css

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 3.1: Replace `src/styles/global.css`** to import the design tokens and landing CSS

```css
/* src/styles/global.css */
@import "./tokens.css";
@import "./landing.css";

/* Reset scroll behavior */
html { scroll-behavior: smooth; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
```

- [ ] **Step 3.2: Verify build compiles**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes without errors.

- [ ] **Step 3.3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: update global.css to use design system tokens and landing CSS"
```

---

## Task 4: Extract images from design bundle

**Files:**
- Create: `public/assets/img/rudolf-warm.png`
- Create: `public/assets/img/rudolf-cartoon-chalkboard.jpg`
- Create: `public/assets/img/rudolf-cartoon-standing.png`

The design bundle is a gzip+tar archive at:
`/Users/vmironov/.claude/projects/-Users-vmironov-WebstormProjects-mightyenglish/26b64ee2-5508-4d02-9ff1-3527c996242b/tool-results/webfetch-1779023329223-vhdbxy.bin`

- [ ] **Step 4.1: Extract images from bundle**

```bash
BUNDLE="/Users/vmironov/.claude/projects/-Users-vmironov-WebstormProjects-mightyenglish/26b64ee2-5508-4d02-9ff1-3527c996242b/tool-results/webfetch-1779023329223-vhdbxy.bin"
cd /tmp && gunzip -c "$BUNDLE" | tar -x \
  "mighty-english-design-system/project/assets/rudolf-warm.png" \
  "mighty-english-design-system/project/assets/rudolf-cartoon-chalkboard.jpg" \
  "mighty-english-design-system/project/assets/rudolf-cartoon-standing.png"

cp /tmp/mighty-english-design-system/project/assets/rudolf-warm.png \
   /Users/vmironov/WebstormProjects/mightyenglish/public/assets/img/

cp /tmp/mighty-english-design-system/project/assets/rudolf-cartoon-chalkboard.jpg \
   /Users/vmironov/WebstormProjects/mightyenglish/public/assets/img/

cp /tmp/mighty-english-design-system/project/assets/rudolf-cartoon-standing.png \
   /Users/vmironov/WebstormProjects/mightyenglish/public/assets/img/
```

- [ ] **Step 4.2: Verify files exist and are non-zero**

```bash
ls -lh /Users/vmironov/WebstormProjects/mightyenglish/public/assets/img/rudolf-*
```

Expected: three files, each > 10KB.

- [ ] **Step 4.3: Commit**

```bash
cd /Users/vmironov/WebstormProjects/mightyenglish
git add public/assets/img/rudolf-warm.png \
        public/assets/img/rudolf-cartoon-chalkboard.jpg \
        public/assets/img/rudolf-cartoon-standing.png
git commit -m "feat: add Rudolf photos from design bundle"
```

---

## Task 5: Update Layout.astro

**Files:**
- Modify: `src/layouts/Layout.astro`

Remove the Font Awesome CDN link (icon font no longer used) and the reference to the old `main.js`. Google Fonts load via `tokens.css`.

- [ ] **Step 5.1: Replace `src/layouts/Layout.astro`**

```astro
---
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
}

const { title = 'Мощный английский', description = 'Авторская школа английского языка Рудольфа Ладнера' } = Astro.props;
---
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#322D6B" />
    <meta name="description" content={description} />
    <link rel="shortcut icon" href="/assets/img/english.png" type="image/x-icon" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 5.2: Verify build**

```bash
npm run build 2>&1 | tail -10
```

Expected: no errors.

- [ ] **Step 5.3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: update Layout — remove FontAwesome CDN, clean up for new design"
```

---

## Task 6: Header component

**Files:**
- Replace: `src/components/Header.astro`

- [ ] **Step 6.1: Replace `src/components/Header.astro`**

```astro
---
// Header.astro — sticky nav, mobile burger menu
const tg = "https://t.me/mighty_english";
---
<header class="me-header">
  <div class="me-container">
    <div class="me-header__row">
      <a class="me-header__logo" href="#top">
        <img src="/assets/img/logo-full.jpg" alt="Mighty English" width="40" height="40" />
        <div class="me-header__brand">
          мощный английский
          <small>Mighty English · Rudolf Ladner</small>
        </div>
      </a>

      <nav class="me-nav" aria-label="Основная навигация">
        <a href="#method">Методика</a>
        <a href="#services">Форматы</a>
        <a href="#tariffs">Тарифы</a>
        <a href="#reviews">Отзывы</a>
        <a href="#faq">FAQ</a>
      </nav>

      <a class="me-header__cta me-btn me-btn--primary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
        <span class="me-btn__inner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          <span>Записаться</span>
        </span>
      </a>

      <button class="me-burger" id="me-burger" aria-label="Открыть меню" aria-expanded="false">
        <svg id="icon-menu" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
        <svg id="icon-close" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true" style="display:none"><path d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
    </div>
  </div>

  <nav class="me-mobnav" id="me-mobnav" aria-label="Мобильная навигация" aria-hidden="true">
    <a href="#method">Методика</a>
    <a href="#services">Форматы</a>
    <a href="#tariffs">Тарифы</a>
    <a href="#reviews">Отзывы</a>
    <a href="#faq">FAQ</a>
    <a class="me-btn me-btn--primary me-btn--lg" href={tg} target="_blank" rel="noopener noreferrer" style="margin-top:16px;align-self:flex-start">
      <span class="me-btn__inner">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        <span>Записаться в Telegram</span>
      </span>
    </a>
  </nav>
</header>

<script is:inline>
(function () {
  var burger = document.getElementById('me-burger');
  var nav = document.getElementById('me-mobnav');
  var iconMenu = document.getElementById('icon-menu');
  var iconClose = document.getElementById('icon-close');
  var isOpen = false;

  function setOpen(open) {
    isOpen = open;
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    iconMenu.style.display = open ? 'none' : '';
    iconClose.style.display = open ? '' : 'none';
    burger.setAttribute('aria-expanded', String(open));
    nav.setAttribute('aria-hidden', String(!open));
  }

  burger.addEventListener('click', function () { setOpen(!isOpen); });

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) setOpen(false);
  });
})();
</script>
```

- [ ] **Step 6.2: Verify build**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 6.3: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: add Header component with sticky nav and mobile burger"
```

---

## Task 7: Hero component

**Files:**
- Replace: `src/components/Hero.astro`

- [ ] **Step 7.1: Replace `src/components/Hero.astro`**

```astro
---
// Hero.astro
const tg = "https://t.me/mighty_english";
---
<section class="me-hero" id="top">
  <div class="me-container">
    <div class="me-hero__grid">
      <div>
        <div class="me-hero__eyebrow me-eyebrow">авторская школа · с 2014</div>
        <h1>
          Английский, который{" "}
          <span class="underlined">
            наконец&#8209;то останется
            <svg class="me-drawn-underline" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9 C 40 2, 80 12, 120 6 S 190 4, 198 8" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" fill="none"/>
            </svg>
          </span>.
        </h1>
        <p class="me-hero__sub">
          Меня зовут <b>Рудольф Ладнер</b>. Я учу взрослых, которые
          устали от приложений, групп и Title Case. Один на один,
          по делу, без зубрёжки. Запись&nbsp;— в&nbsp;Telegram.
        </p>
        <div class="me-hero__ctas">
          <a class="me-btn me-btn--primary me-btn--lg" href={tg} target="_blank" rel="noopener noreferrer">
            <span class="me-btn__inner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              <span>Записаться в Telegram</span>
            </span>
          </a>
          <a class="me-btn me-btn--secondary me-btn--md" href="#about">
            <span class="me-btn__inner"><span>Познакомиться</span></span>
          </a>
        </div>
      </div>

      <div class="me-hero__photo-wrap">
        <span class="me-hero__photo-tag">
          <span class="dot"></span>идёт набор · осень 2026
        </span>
        <img src="/assets/img/rudolf-warm.png" alt="Рудольф Ладнер" loading="eager" />
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 7.2: Verify build**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 7.3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Hero section with H1, photo, and CTAs"
```

---

## Task 8: ValueRow component

**Files:**
- Create: `src/components/ValueRow.astro`

- [ ] **Step 8.1: Create `src/components/ValueRow.astro`**

```astro
---
// ValueRow.astro
---
<section class="me-value">
  <div class="me-container">
    <div class="me-value__grid">
      <div class="me-value__item">
        <div class="me-value__num">12</div>
        <div class="me-value__lbl">лет преподаю взрослым</div>
      </div>
      <div class="me-value__item">
        <div class="me-value__num">240+</div>
        <div class="me-value__lbl">учеников · от A2 до C1</div>
      </div>
      <div class="me-value__item">
        <div class="me-value__num">1 на 1</div>
        <div class="me-value__lbl">ни одной групповой минуты</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 8.2: Commit**

```bash
git add src/components/ValueRow.astro
git commit -m "feat: add ValueRow stats section"
```

---

## Task 9: About component

**Files:**
- Replace: `src/components/About.astro`

- [ ] **Step 9.1: Replace `src/components/About.astro`**

```astro
---
// About.astro — dark section with Rudolf's bio
const tg = "https://t.me/mighty_english";
---
<section class="me-section me-section--dark" id="about">
  <div class="me-container">
    <div class="me-about">
      <div class="me-about__grid">
        <div class="me-about__photo-wrap">
          <img src="/assets/img/rudolf-warm.png" alt="Рудольф Ладнер" loading="lazy" />
        </div>

        <div>
          <div class="me-eyebrow">о Рудольфе</div>
          <h2>Преподаватель университета. Любитель Joy Division и нормальной грамматики.</h2>
          <p class="me-about__lead">
            «Я не школа. Я один человек, который любит свою работу двенадцатый год подряд.»
          </p>
          <p class="me-about__body">
            Закончил филфак, преподавал в МГУ, два года жил в Манчестере.
            Учу взрослых, у которых уже было пять «попыток»&nbsp;— три приложения
            и две группы на пятнадцать человек. Без zoom&#8209;зомби и домашек
            на сорок страниц.
          </p>

          <ul class="me-about__creds">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>CELTA Pass A · Cambridge, 2017</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>МГУ им. Ломоносова · филфак</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>2 года в Манчестере</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>Готовлю к IELTS · средний 7.5</span>
            </li>
          </ul>

          <div class="me-about__actions">
            <a class="me-btn me-btn--primary me-btn--lg" href={tg} target="_blank" rel="noopener noreferrer">
              <span class="me-btn__inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                <span>Записаться в Telegram</span>
              </span>
            </a>
            <a class="me-btn me-btn--ghost me-btn--md" href="#method">
              <span class="me-btn__inner"><span>Как устроен урок →</span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 9.2: Commit**

```bash
git add src/components/About.astro
git commit -m "feat: redesign About section — dark section with bio and credentials"
```

---

## Task 10: Methodology component

**Files:**
- Create: `src/components/Methodology.astro`

- [ ] **Step 10.1: Create `src/components/Methodology.astro`**

```astro
---
// Methodology.astro — 4 steps + chalkboard card
const tg = "https://t.me/mighty_english";
const steps = [
  { n: "01", h: "Knock-knock", p: "20-минутный звонок в Telegram. Я слушаю, чем тебе нужен английский — собес, переезд, чтение. Без анкет и тестов." },
  { n: "02", h: "Программа", p: "Делаю план на 8 недель под твою задачу. Не учебник, а маршрут. Никаких «Unit 5 — Hobbies»." },
  { n: "03", h: "Уроки 1‑on‑1", p: "Час в Zoom. Говорим по 80% времени, грамматика — между делом. Запись остаётся у тебя." },
  { n: "04", h: "Чат 24/7", p: "Между уроками — голосовые в Telegram. Прислал мысль на английском — я разобрал ошибки в течение дня." },
];
---
<section class="me-section" id="method">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">методика</div>
      <h2>Четыре шага. Никаких юнитов и unit tests.</h2>
      <p>Я веду по живой программе, которая собирается под тебя. Так больше шансов, что английский останется насовсем — а не до конца курса.</p>
    </div>

    <div class="me-method__grid">
      {steps.map((s, idx) => (
        <div class="me-step">
          <div class="me-step__num">шаг · {s.n}</div>
          <h3>{s.h}</h3>
          <p>{s.p}</p>
          {idx < steps.length - 1 && (
            <div class="me-step__arrow">
              <svg class="me-drawn-arrow" viewBox="0 0 80 28" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 14 C 20 4, 40 24, 60 12 L 72 12"/>
                <path d="M66 6 L 74 12 L 66 18"/>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>

    <div class="me-method__hero">
      <div class="me-method__hero-content">
        <div class="me-eyebrow">как выглядит урок</div>
        <h3>Я говорю на доске. Ты — со мной.</h3>
        <p>
          Никаких слайдов «вставьте пропущенное слово». Тема рождается из твоего вопроса,
          я пишу на виртуальной доске, ты сразу пробуешь применить. По итогу — два&#8209;три
          листа конспекта, который ты сам сделал.
        </p>
        <a class="me-btn me-btn--primary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
          <span class="me-btn__inner">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            <span>Попробовать первый урок</span>
          </span>
        </a>
      </div>
      <img src="/assets/img/rudolf-cartoon-chalkboard.jpg" alt="Рудольф у доски" loading="lazy" />
    </div>
  </div>
</section>
```

- [ ] **Step 10.2: Commit**

```bash
git add src/components/Methodology.astro
git commit -m "feat: add Methodology section with 4 steps and chalkboard card"
```

---

## Task 11: Services component

**Files:**
- Create: `src/components/Services.astro`

- [ ] **Step 11.1: Create `src/components/Services.astro`**

```astro
---
// Services.astro — 3 service format cards
const tg = "https://t.me/mighty_english";
---
<section class="me-section" id="services">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">форматы</div>
      <h2>Два формата. Один — для большинства.</h2>
      <p>Если не знаешь, что выбрать — бери Indiv. 9 из 10 учеников приходят именно так.</p>
    </div>

    <div class="me-services__grid">
      <!-- Indiv -->
      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="24" cy="16" r="7"/>
            <path d="M10 40 C 10 30, 38 30, 38 40"/>
          </svg>
        </div>
        <h3>Indiv · 1 на 1</h3>
        <p>Час со мной в Zoom. Программа под твою задачу — собеседование, IELTS, переезд, чтение. Видеозапись остаётся.</p>
        <div class="me-service__price">
          <span class="old">5 200 ₽</span>
          <span class="new">3 900 ₽</span>
        </div>
        <a class="me-service__cta" href={tg} target="_blank" rel="noopener noreferrer">Записаться →</a>
      </article>

      <!-- Pair -->
      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="17" cy="16" r="6"/>
            <circle cx="33" cy="16" r="6"/>
            <path d="M6 40 C 6 30, 28 30, 28 40"/>
            <path d="M20 40 C 20 30, 42 30, 42 40"/>
          </svg>
        </div>
        <h3>Pair · вдвоём</h3>
        <p>Для пары: муж–жена, друзья, коллеги. Меньше говорения в час, но цена и динамика комфортнее. Беру не любую пару.</p>
        <div class="me-service__price">
          <span class="new">2 600 ₽</span>
        </div>
        <a class="me-service__cta" href={tg} target="_blank" rel="noopener noreferrer">Записаться →</a>
      </article>

      <!-- Intensive -->
      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M8 38 L 18 26 L 26 32 L 40 14"/>
            <path d="M32 14 H 40 V 22"/>
          </svg>
        </div>
        <h3>Intensive · 4 недели</h3>
        <p>Для собеседования или поездки. 5 уроков в неделю + ежедневная голосовая практика. Беру по 4 человека за поток.</p>
        <div class="me-service__price">
          <span class="new">48 000 ₽</span>
        </div>
        <a class="me-service__cta" href={tg} target="_blank" rel="noopener noreferrer">Записаться →</a>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 11.2: Commit**

```bash
git add src/components/Services.astro
git commit -m "feat: add Services section with 3 format cards"
```

---

## Task 12: Tariffs component

**Files:**
- Create: `src/components/Tariffs.astro`

- [ ] **Step 12.1: Create `src/components/Tariffs.astro`**

```astro
---
// Tariffs.astro — 3 tariff cards: Базовый / Расширенный / Премиум
const tg = "https://t.me/mighty_english";
---
<section class="me-section" id="tariffs" style="background: var(--color-surface-card)">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">тарифы</div>
      <h2>Месячные пакеты — выгоднее, чем разовые.</h2>
      <p>Цена — за один урок. Платишь за месяц, занимаешься в своём темпе. Без «сгораний» и абонементов на год.</p>
    </div>

    <div class="me-tariffs__grid">
      <!-- Базовый -->
      <article class="me-tariff">
        <div class="me-tariff__name">Базовый</div>
        <div class="me-tariff__price">
          <span class="new">3 900</span>
          <span class="per">₽ / урок</span>
        </div>
        <ul class="me-tariff__feat">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>1 урок в неделю · 60 мин</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Видеозапись каждого урока</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Без домашки и чата</span>
          </li>
        </ul>
        <div class="me-tariff__cta">
          <a class="me-btn me-btn--secondary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
            <span class="me-btn__inner"><span>Выбрать</span></span>
          </a>
        </div>
      </article>

      <!-- Расширенный (recommended) -->
      <article class="me-tariff me-tariff--reco">
        <div class="me-tariff__badge">
          <span class="me-badge me-badge--primary">Выбор большинства</span>
        </div>
        <div class="me-tariff__name">Расширенный</div>
        <div class="me-tariff__price">
          <span class="old">5 200 ₽</span>
          <span class="new">3 400</span>
          <span class="per">₽ / урок</span>
        </div>
        <ul class="me-tariff__feat">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>2 урока в неделю · 60 мин</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Чат 24/7 — голосовые, разбор</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Домашка с моими комментариями</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Видеозаписи и конспекты</span>
          </li>
        </ul>
        <div class="me-tariff__cta">
          <a class="me-btn me-btn--primary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
            <span class="me-btn__inner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              <span>Записаться в Telegram</span>
            </span>
          </a>
        </div>
      </article>

      <!-- Премиум -->
      <article class="me-tariff me-tariff--premium">
        <div class="me-tariff__name">Премиум</div>
        <div class="me-tariff__price">
          <span class="new">6 800</span>
          <span class="per">₽ / урок</span>
        </div>
        <ul class="me-tariff__feat">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>3 урока в неделю + интенсив</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Личный план на 6 месяцев</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Голосовые в любое время</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
            <span>Подготовка к Cambridge / IELTS</span>
          </li>
        </ul>
        <div class="me-tariff__cta">
          <a class="me-btn me-btn--secondary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
            <span class="me-btn__inner"><span>Узнать больше</span></span>
          </a>
        </div>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 12.2: Commit**

```bash
git add src/components/Tariffs.astro
git commit -m "feat: add Tariffs section with 3 pricing cards"
```

---

## Task 13: Reviews component

**Files:**
- Create: `src/components/Reviews.astro`

- [ ] **Step 13.1: Create `src/components/Reviews.astro`**

```astro
---
// Reviews.astro — 6 student review cards
const reviews = [
  { initial: "А", name: "Аня", meta: "Indiv · 6 мес", body: "За три месяца я начала думать на английском. Без zoom‑зомби и домашек на 40 страниц — просто разговор. Сдала собес в Stripe." },
  { initial: "Д", name: "Дима", meta: "Intensive · 4 недели", body: "Перед переездом в Берлин взял интенсив. К концу мог обсуждать договор аренды без переводчика — и не ненавидеть процесс." },
  { initial: "К", name: "Катя", meta: "Pair · 8 мес", body: "Учились вдвоём с мужем. Рудольф первый, кто не стесняется поправлять и шутить одновременно. У нас наконец появилась общая привычка." },
  { initial: "М", name: "Михаил", meta: "Indiv · 1 год", body: "С B1 дошёл до C1 за 11 месяцев. Главное — он не учитель из роли, а человек, которому интересен ты. Это и есть метод." },
  { initial: "О", name: "Оля", meta: "Indiv · IELTS", body: "Сдала IELTS на 8.0. До Рудольфа было 6.5 после двух школ. Разница не в часах, а в том, что мы наконец говорили о моих ошибках, а не о Past Perfect." },
  { initial: "Н", name: "Никита", meta: "Indiv · 4 мес", body: "Думал, что слишком занят. Оказалось — три урока в неделю и голосовые в перерывах между встречами. За четыре месяца перестал переводить в голове." },
];
---
<section class="me-section" id="reviews">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">отзывы</div>
      <h2>Не reviews — а живые сообщения учеников.</h2>
      <p>Скриншоты в Telegram сохраняю с разрешения. Кому&#8209;то нужны были собеседования, кому&#8209;то — переезд, кому&#8209;то — отказаться от Google Translate в почте.</p>
    </div>

    <div class="me-reviews__grid">
      {reviews.map((r) => (
        <article class="me-review">
          <div class="me-review__mark" aria-hidden="true">"</div>
          <div class="me-review__body">{r.body}</div>
          <div class="me-review__who">
            <div class="me-review__avatar" aria-hidden="true">{r.initial}</div>
            <div>
              <div class="me-review__name">{r.name}</div>
              <div class="me-review__meta">{r.meta}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 13.2: Commit**

```bash
git add src/components/Reviews.astro
git commit -m "feat: add Reviews section with 6 student review cards"
```

---

## Task 14: FAQ component

**Files:**
- Create: `src/components/FAQ.astro`

- [ ] **Step 14.1: Create `src/components/FAQ.astro`**

```astro
---
// FAQ.astro — accordion + cartoon aside
const tg = "https://t.me/mighty_english";
const items = [
  { q: "У меня ноль. С нуля берёшь?", a: "Беру с A2 — это уровень «могу заказать кофе и понять расписание». Чистый ноль — нет, потому что в одиночку с ним нечего обсуждать, а играть в учителя для первокурсника я не люблю." },
  { q: "А пробный урок бесплатный?", a: "Пробный — 1 500 ₽, 30 минут в Zoom. Если после него не сработались — деньги возвращаю. За двенадцать лет вернул семь раз — статистика честная." },
  { q: "Сколько уроков нужно?", a: "По‑честному — 4–6 месяцев, чтобы английский «остался». На результат «не страшно поехать в отпуск» хватит 8 недель. Чудес за 2 урока не бывает, и я их не продаю." },
  { q: "Что с расписанием?", a: "Договариваемся в Telegram, я работаю с 10:00 до 21:00 по Мск. Перенос — бесплатно, если за 12 часов. После — урок сгорает, я тоже человек." },
  { q: "Готовишь к IELTS / TOEFL / Cambridge?", a: "К IELTS — да, основной формат подготовки. Средний результат учеников 7.5. К Cambridge — да, к CAE / CPE. К TOEFL — нет, формат не люблю." },
  { q: "Записываешь уроки?", a: "Да. Запись и конспект приходят тебе в Telegram в день урока. Хранятся у тебя — я ничего не публикую без разрешения." },
];
---
<section class="me-section" id="faq" style="background: var(--color-surface-card)">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">вопросы</div>
      <h2>Что обычно спрашивают перед записью.</h2>
      <p>Всё, чего нет в списке, — пиши в Telegram. Отвечаю в течение дня, без скрипта.</p>
    </div>

    <div class="me-faq__layout">
      <aside class="me-faq__aside">
        <img src="/assets/img/rudolf-cartoon-standing.png" alt="Рудольф" loading="lazy" />
        <h3>Чего‑то нет?</h3>
        <p>Напиши вопрос в <a href={tg} target="_blank" rel="noopener noreferrer" style="color:var(--color-accent)">Telegram</a> — отвечу сегодня, без шаблонов.</p>
      </aside>

      <div class="me-faq__list" id="faq-list">
        {items.map((item, i) => (
          <div class={`me-faq__item${i === 0 ? " me-faq__item--open" : ""}`} data-faq>
            <div class="me-faq__q">
              <span>{item.q}</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">
                <path d="M12 5V19M5 12H19"/>
              </svg>
            </div>
            <div class="me-faq__a"><p>{item.a}</p></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<script is:inline>
(function () {
  var items = document.querySelectorAll('[data-faq]');
  items.forEach(function (item) {
    item.querySelector('.me-faq__q').addEventListener('click', function () {
      var isOpen = item.classList.contains('me-faq__item--open');
      items.forEach(function (el) { el.classList.remove('me-faq__item--open'); });
      if (!isOpen) item.classList.add('me-faq__item--open');
    });
  });
})();
</script>
```

- [ ] **Step 14.2: Commit**

```bash
git add src/components/FAQ.astro
git commit -m "feat: add FAQ accordion section"
```

---

## Task 15: FinalCTA component

**Files:**
- Create: `src/components/FinalCTA.astro`

- [ ] **Step 15.1: Create `src/components/FinalCTA.astro`**

```astro
---
// FinalCTA.astro — dark closing section with mega CTA
const tg = "https://t.me/mighty_english";
---
<section class="me-section me-section--dark me-final" id="cta">
  <div class="me-container me-container--narrow">
    <div class="me-eyebrow me-final__eyebrow">шаг последний</div>
    <h2>Давай по&#8209;человечески.</h2>
    <p class="me-final__sub">
      Зайди в Telegram, напиши «привет». Мы 10 минут поговорим — и решим,
      подхожу ли я тебе. Без воронок, без менеджеров.
    </p>
    <span class="me-final__cta">
      <span class="me-btn-wrap">
        <svg class="me-drawn-ring" viewBox="0 0 320 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 12 14 C 80 4, 240 6, 308 16 C 314 30, 314 60, 308 76 C 240 86, 80 84, 12 74 C 6 60, 6 30, 12 14 Z" stroke="var(--color-gold)" stroke-width="2.6" stroke-linecap="round" fill="none"/>
        </svg>
        <a class="me-btn me-btn--mega me-btn--xl" href={tg} target="_blank" rel="noopener noreferrer">
          <span class="me-btn__inner">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            <span>Написать в Telegram</span>
          </span>
        </a>
      </span>
    </span>
  </div>
</section>
```

- [ ] **Step 15.2: Commit**

```bash
git add src/components/FinalCTA.astro
git commit -m "feat: add FinalCTA dark section with mega button"
```

---

## Task 16: Footer component

**Files:**
- Replace: `src/components/Footer.astro`

- [ ] **Step 16.1: Replace `src/components/Footer.astro`**

```astro
---
// Footer.astro
const tg = "https://t.me/mighty_english";
---
<footer class="me-footer">
  <div class="me-container">
    <div class="me-footer__row">
      <div class="me-footer__brand">
        <img src="/assets/img/logo-full.jpg" alt="Mighty English" width="56" height="56" />
        <div class="me-footer__name">
          мощный английский
          <small>Mighty English · Rudolf Ladner · с 2014</small>
        </div>
      </div>

      <nav class="me-footer__links" aria-label="Навигация в футере">
        <a href="#method">Методика</a>
        <a href="#services">Форматы</a>
        <a href="#tariffs">Тарифы</a>
        <a href="#reviews">Отзывы</a>
        <a href="#faq">FAQ</a>
        <a href={tg} target="_blank" rel="noopener noreferrer">Telegram</a>
      </nav>
    </div>

    <div class="me-footer__legal">
      © 2014 — 2026 · Рудольф Ладнер · ИП · Все ученики — настоящие. Все цены — окончательные.
    </div>
  </div>
</footer>
```

- [ ] **Step 16.2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: redesign Footer component"
```

---

## Task 17: StickyMobileCTA component

**Files:**
- Create: `src/components/StickyMobileCTA.astro`

- [ ] **Step 17.1: Create `src/components/StickyMobileCTA.astro`**

```astro
---
// StickyMobileCTA.astro — appears after 600px scroll, mobile only
const tg = "https://t.me/mighty_english";
---
<a class="me-sticky-cta" id="me-sticky-cta" href={tg} target="_blank" rel="noopener noreferrer" aria-label="Записаться в Telegram">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
  Записаться в Telegram
</a>

<script is:inline>
(function () {
  var el = document.getElementById('me-sticky-cta');
  function update() {
    el.classList.toggle('visible', window.scrollY > 600);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
</script>
```

- [ ] **Step 17.2: Commit**

```bash
git add src/components/StickyMobileCTA.astro
git commit -m "feat: add StickyMobileCTA — scroll-triggered mobile bar"
```

---

## Task 18: Assemble index.astro

**Files:**
- Replace: `src/pages/index.astro`

- [ ] **Step 18.1: Replace `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import ValueRow from '../components/ValueRow.astro';
import About from '../components/About.astro';
import Methodology from '../components/Methodology.astro';
import Services from '../components/Services.astro';
import Tariffs from '../components/Tariffs.astro';
import Reviews from '../components/Reviews.astro';
import FAQ from '../components/FAQ.astro';
import FinalCTA from '../components/FinalCTA.astro';
import Footer from '../components/Footer.astro';
import StickyMobileCTA from '../components/StickyMobileCTA.astro';
---
<Layout
  title="Мощный английский — Рудольф Ладнер"
  description="Авторская школа английского языка. Один на один, по делу, без зубрёжки. Запись в Telegram."
>
  <Header />
  <main>
    <Hero />
    <ValueRow />
    <About />
    <Methodology />
    <Services />
    <Tariffs />
    <Reviews />
    <FAQ />
    <FinalCTA />
  </main>
  <Footer />
  <StickyMobileCTA />
</Layout>
```

- [ ] **Step 18.2: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: assemble full landing page from design system components"
```

---

## Task 19: Delete obsolete components

**Files:**
- Delete: `src/components/Nav.astro`
- Delete: `src/components/Skills.astro`
- Delete: `src/components/Contact.astro`

- [ ] **Step 19.1: Delete unused components**

```bash
git rm src/components/Nav.astro src/components/Skills.astro src/components/Contact.astro
```

- [ ] **Step 19.2: Full build verification**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes without errors, no warnings about missing components.

- [ ] **Step 19.3: Commit**

```bash
git commit -m "chore: remove obsolete Nav, Skills, Contact components"
```

---

## Task 20: Final verification

- [ ] **Step 20.1: Start dev server and visually inspect**

```bash
npm run dev
```

Open `http://localhost:4321` and verify:
- [ ] Header is sticky, frosted glass effect on scroll
- [ ] Hero: H1 text visible, Rudolf photo shows, both CTA buttons visible
- [ ] Drawn SVG underline appears under "наконец-то останется"
- [ ] ValueRow: 3 stats appear in a row on desktop, stacked on mobile
- [ ] About: dark navy background, gold credentials checkmarks
- [ ] Methodology: 4 step cards with drawn arrows between them on desktop
- [ ] Services: 3 cards with hover lift effect
- [ ] Tariffs: "Расширенный" card elevated with "Выбор большинства" badge; "Премиум" has gold border
- [ ] Reviews: 6 cards in 3-col grid, large quote marks
- [ ] FAQ: accordion opens/closes one at a time, Rudolf cartoon visible
- [ ] FinalCTA: dark section, gold drawn ring around mega button
- [ ] Footer: logo + nav links + legal text
- [ ] Mobile (375px): burger menu opens/closes, sticky CTA bar appears after scrolling

- [ ] **Step 20.2: Run production build**

```bash
npm run build && echo "BUILD OK"
```

Expected: `BUILD OK` with no errors.

- [ ] **Step 20.3: Final commit**

```bash
git add -A
git commit -m "feat: complete Mighty English landing redesign from design system bundle"
```
