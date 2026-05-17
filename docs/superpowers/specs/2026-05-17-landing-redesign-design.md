# Mighty English Landing — Full Redesign Spec

**Date:** 2026-05-17  
**Source:** Claude Design bundle (`h/2ZnuzpACzaH8vtuahasr_Q`) + `DESIGN.md`  
**Stack:** Astro 6 · Custom CSS design system · Vanilla JS  
**Telegram:** https://t.me/mighty_english  

---

## Overview

Full replacement of the existing landing page with the Mighty English design system. The existing About/Skills/Contact sections are removed and replaced with a mobile-first premium landing selling Rudolf Ladner's personal brand as an English tutor.

**Aesthetic:** "Премиально, рукотворно, дерзко." Deep navy frame (#322D6B), warm off-white background (#FBFAF7), British red (#CC2936) for CTAs only, hand-drawn SVG accents.

**Brand voice:** "Интеллигентный хулиган" — Sage archetype with Rebel edge.

**Primary action:** All CTAs open Telegram (`https://t.me/mighty_english`).

---

## CSS Architecture

**Approach A — Direct CSS port.** The design bundle's CSS is production-quality and is used verbatim.

```
src/styles/
  tokens.css       ← colors_and_type.css from bundle (CSS variables, font imports)
  landing.css      ← landing.css from bundle (all .me-* component classes)
  global.css       ← @import tokens + landing; minimal resets
```

Tailwind stays configured but the new landing sections use the `.me-*` class system. No Tailwind utilities in new landing components.

### Design tokens (key values)

| Token | Value |
|-------|-------|
| `--color-primary` | `#322D6B` |
| `--color-surface` | `#FBFAF7` |
| `--color-accent` | `#CC2936` |
| `--color-gold` | `#C9A24B` |
| `--color-surface-dark` | `#1E1B40` |
| `--font-display` | Unbounded (Google Fonts) |
| `--font-body` | Inter (Google Fonts) |
| `--font-quote` | Lora italic (Google Fonts) |
| `--radius-md` | 12px |
| `--radius-lg` | 16px |
| `--radius-pill` | 999px |

---

## Sections (in page order)

### 1. Header
**Component:** `Header.astro`  
Sticky (`z-50`), frosted glass (`backdrop-filter: blur`), 72px tall. Logo + brand name left; nav links center (desktop only); red "Записаться" button right (desktop); burger icon right (mobile).

Mobile nav: full-screen overlay, slides in from top. Contains anchor links + large CTA button. Vanilla JS handles open/close + `body overflow` lock.

### 2. Hero
**Component:** `Hero.astro`  
Two-column grid (7:5) on desktop, stacked on mobile. Left: eyebrow badge → H1 with drawn underline SVG → subtitle → two CTA buttons. Right: Rudolf's photo (`rudolf-warm.png`) in a warm-beige 4:5 card with a floating "идёт набор · осень 2026" badge.

H1 text: *«Английский, который наконец-то останется.»*

### 3. ValueRow
**Component:** `ValueRow.astro`  
White background strip, 3 stat items: `12 лет · 240+ учеников · 1 на 1`. Horizontal rule separators on desktop, top border separators on mobile.

### 4. About (dark)
**Component:** `About.astro`  
Dark section (`--color-surface-dark`). 5:7 grid. Left: Rudolf photo. Right: eyebrow → H2 → italic Lora quote in gold → bio text → credentials grid (CELTA, МГУ, Manchester, IELTS 7.5) → CTA buttons.

### 5. Methodology
**Component:** `Methodology.astro`  
Light section. 4 step cards in a row (desktop), stacked (mobile). Steps: Knock-knock → Программа → Уроки 1-on-1 → Чат 24/7. Drawn arrows between steps on desktop. Below: "как выглядит урок" card with chalkboard cartoon (`rudolf-cartoon-chalkboard.jpg`).

### 6. Services
**Component:** `Services.astro`  
3 cards: Indiv (3 900₽, old 5 200₽) · Pair (2 600₽) · Intensive (48 000₽). Each card: hand-drawn icon SVG → H3 → description → price → "Записаться →" link. Hover: `translateY(-6px)` + enhanced shadow.

### 7. Tariffs
**Component:** `Tariffs.astro`  
White background. 3 tariff cards: Базовый · Расширенный · Премиум. Recommended card has primary border + "Выбор большинства" badge + elevated 12px (desktop). Premium card has gold border + gold name.

Prices (per lesson): 3 900 · 3 400 (was 5 200) · 6 800 ₽/урок.

### 8. Reviews
**Component:** `Reviews.astro`  
3-column grid (desktop), 1-col (mobile). 6 review cards. Each: large decorative `"` mark in Lora · review text in Lora italic · avatar initial + name + meta label. No real photos — initials-based avatars.

### 9. FAQ
**Component:** `FAQ.astro`  
White background. Aside + accordion layout (4:8 on desktop). Aside: cartoon Rudolf illustration (`rudolf-cartoon-standing.png`) + "Напиши в Telegram". Accordion: 6 questions, one open at a time. Vanilla JS `<script>` handles toggle. CSS `max-height` transition for smooth open/close.

### 10. FinalCTA
**Component:** `FinalCTA.astro`  
Dark section, centered. Eyebrow in gold. H2: *«Давай по-человечески.»* Sub-text. Mega button with drawn-ring SVG overlay. No form — direct Telegram link.

### 11. Footer
**Component:** `Footer.astro`  
Warm surface background. Logo + brand name left. Nav links right. Legal line: `© 2014 — 2026 · Рудольф Ладнер · ИП`.

### 12. StickyMobileCTA
**Component:** `StickyMobileCTA.astro`  
Fixed bar, bottom of viewport, mobile only (hidden ≥1024px). Red accent background. Appears after 600px scroll. Vanilla JS scroll listener. Links to `#cta`.

---

## Images

Extracted from design bundle → placed in `src/img/`:

| File | Used in |
|------|---------|
| `logo-full.jpg` | Header, Footer |
| `rudolf-warm.png` | Hero, About |
| `rudolf-cartoon-chalkboard.jpg` | Methodology |
| `rudolf-cartoon-standing.png` | FAQ |

The existing `src/img/me.jpg` is replaced by `rudolf-warm.png` from the bundle.

---

## JavaScript

All JS is vanilla, no framework. Three interaction patterns:

1. **Header burger menu** — toggle `.open` on `.me-mobnav`, lock `body.overflow`. Inline `<script>` in `Header.astro`.
2. **FAQ accordion** — toggle `.me-faq__item--open`, one-at-a-time logic. Inline `<script>` in `FAQ.astro`.
3. **StickyMobileCTA visibility** — `scroll` event listener, toggle `.visible` class after 600px. Inline `<script>` in `StickyMobileCTA.astro`.

All inline scripts use `is:inline` in Astro (no bundling needed).

---

## Fonts

Google Fonts (loaded in `tokens.css` `@import`):
- Unbounded: 400, 500, 600, 700, 800
- Inter: 400, 500, 600, 700
- Lora Italic: 400, 500, 600

The existing Jost font (local TTF files in `src/fonts/`) is no longer used on the new landing.

---

## Layout

- Container: `max-width: 1200px`, `padding: 0 24px` (mobile) / `0 48px` (≥1024px)
- Breakpoints: 768px (tablet) · 1024px (desktop)
- Mobile-first media queries throughout

---

## What Changes vs. Current Site

| Before | After |
|--------|-------|
| Generic portfolio structure | Personal-brand landing |
| Jost font | Unbounded + Inter + Lora |
| Gradient hero header | Two-column Hero with photo |
| About/Skills/Contact sections | Methodology/Services/Tariffs/Reviews/FAQ |
| Custom SCSS + Bootstrap grid | Pure CSS design system (`me-*` classes) |
| No Telegram CTA | All CTAs → Telegram |

The `Layout.astro` is updated to remove the Font Awesome CDN link and include the Google Fonts via the CSS `@import`. The `_data/settings.yml` Telegram URL is used for all CTA links.

---

## Reference

- Design bundle: `https://api.anthropic.com/v1/design/h/2ZnuzpACzaH8vtuahasr_Q`
- GitHub repo: `vmironov16/mightyenglish`
- Design system source: `DESIGN.md` in project root
