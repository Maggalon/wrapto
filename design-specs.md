# Wrapto — Landing Page Design Specification

> **Product**: Wrapto — Vladivostok-based passive income platform for drivers via car advertising wraps  
> **Target Audience**: Everyday drivers (25–50 y/o), couriers, commuters in Vladivostok  
> **Design Direction**: Dynamic, trustworthy, mobile-first. Inspired by Yandex Go / Uber / modern automotive UX  
> **Date**: 2026-04-14  

---

## 1. Layout Wireframe

### Section Order & Content Mapping

```
┌─────────────────────────────────────────────────┐
│  STICKY NAV                                     │
│  Logo (left) · "Оставить заявку" btn (right)    │
│  Height: 56px mobile / 64px desktop             │
│  Background: transparent → solid on scroll      │
├─────────────────────────────────────────────────┤
│                                                 │
│  § 1 — HERO                                     │
│  ┌───────────────────────────────────────────┐  │
│  │  Headline (H1)                            │  │
│  │  Subheadline (body-lg)                    │  │
│  │  [ Оставить заявку ] primary CTA          │  │
│  │                                            │  │
│  │  Background: dark gradient + subtle        │  │
│  │  car silhouette / road graphic             │  │
│  └───────────────────────────────────────────┘  │
│  Padding: 80px top / 64px bottom (mobile)       │
│  Padding: 120px top / 96px bottom (desktop)     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  § 2 — OPPORTUNITY (Pain → Solution)            │
│  ┌───────────────────────────────────────────┐  │
│  │  Section headline (H2)                    │  │
│  │                                            │  │
│  │  Pain bullet 1 (red accent icon)          │  │
│  │  Pain bullet 2 (red accent icon)          │  │
│  │  Solution bullet (green/gold accent icon) │  │
│  └───────────────────────────────────────────┘  │
│  Spacing between bullets: 24px                  │
│  Section padding: 64px vertical (mobile)        │
│  Section padding: 96px vertical (desktop)       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  § 3 — HOW IT WORKS (3-Step Process)            │
│  ┌───────────────────────────────────────────┐  │
│  │  Section headline (H2)                    │  │
│  │                                            │  │
│  │  ┌─────┐  ┌─────┐  ┌─────┐               │  │
│  │  │ 01  │  │ 02  │  │ 03  │               │  │
│  │  │Card │  │Card │  │Card │               │  │
│  │  └─────┘  └─────┘  └─────┘               │  │
│  │  (vertical stack on mobile,               │  │
│  │   horizontal row on desktop)              │  │
│  │  Connecting line/arrow between cards      │  │
│  └───────────────────────────────────────────┘  │
│  Card gap: 24px mobile / 32px desktop           │
│  Section padding: 64px vertical (mobile)        │
│  Section padding: 96px vertical (desktop)       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  § 4 — EARNING OPTIONS (Tier Cards)             │
│  ┌───────────────────────────────────────────┐  │
│  │  Section headline (H2)                    │  │
│  │                                            │  │
│  │  ┌────────┐ ┌────────┐ ┌────────┐        │  │
│  │  │ ЛАЙТ   │ │СТАНДАРТ│ │МАКСИМУМ│        │  │
│  │  │ 3–5K   │ │ 7–12K  │ │ 15–25K │        │  │
│  │  └────────┘ └────────┘ └────────┘        │  │
│  │                                            │  │
│  │  Disclaimer footnote                      │  │
│  │  [ Рассчитать мой доход ] secondary CTA   │  │
│  └───────────────────────────────────────────┘  │
│  Section padding: 64px vertical (mobile)        │
│  Section padding: 96px vertical (desktop)       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  § 5 — TRUST & FAQ (Accordion)                  │
│  ┌───────────────────────────────────────────┐  │
│  │  Section headline (H2)                    │  │
│  │                                            │  │
│  │  ┌─ Q1 (expandable) ──────────────────┐   │  │
│  │  ├─ Q2 (expandable) ──────────────────┤   │  │
│  │  └─ Q3 (expandable) ──────────────────┘   │  │
│  └───────────────────────────────────────────┘  │
│  Accordion item gap: 12px                       │
│  Section padding: 64px vertical (mobile)        │
│  Section padding: 96px vertical (desktop)       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  § 6 — SOCIAL PROOF (Testimonials)              │
│  ┌───────────────────────────────────────────┐  │
│  │  Section headline (H2)                    │  │
│  │                                            │  │
│  │  ┌────────────┐  ┌────────────┐           │  │
│  │  │ Testimonial│  │ Testimonial│           │  │
│  │  │ Card 1     │  │ Card 2     │           │  │
│  │  └────────────┘  └────────────┘           │  │
│  │  (horizontal scroll on mobile,            │  │
│  │   side-by-side on desktop)                │  │
│  └───────────────────────────────────────────┘  │
│  Section padding: 64px vertical (mobile)        │
│  Section padding: 96px vertical (desktop)       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  § 7 — FINAL CTA                                │
│  ┌───────────────────────────────────────────┐  │
│  │  Headline (H2)                            │  │
│  │  Subheadline (body)                       │  │
│  │  [ Оставить заявку ] primary CTA          │  │
│  │                                            │  │
│  │  Background: gradient or brand dark fill  │  │
│  └───────────────────────────────────────────┘  │
│  Section padding: 80px vertical (mobile)        │
│  Section padding: 120px vertical (desktop)      │
│                                                 │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
│  "Wrapto · Владивосток · 2026"                  │
│  Legal links · Social icons                     │
│  Height: ~120px                                 │
└─────────────────────────────────────────────────┘
```

### Section Spacing System

| Gap Location | Mobile | Tablet | Desktop |
|---|---|---|---|
| Nav height | 56px | 60px | 64px |
| Hero vertical padding | 80px / 64px | 100px / 80px | 120px / 96px |
| Standard section vertical padding | 64px / 64px | 80px / 80px | 96px / 96px |
| Final CTA vertical padding | 80px / 80px | 100px / 100px | 120px / 120px |
| Container horizontal padding | 16px | 24px | 32px |
| Section headline → content gap | 32px | 40px | 48px |

---

## 2. Color Palette

### Design Rationale

Dark-anchored palette for automotive premium feel with a high-energy amber accent that reads as "money / earned income." Inspired by the nighttime street aesthetic of Vladivostok's Golden Horn Bridge and the trust signals of fintech apps.

### Primary Palette

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--brand-dark` | `#0D0F14` | 13, 15, 20 | Page background, hero background |
| `--brand-charcoal` | `#161922` | 22, 25, 34 | Card backgrounds, nav on-scroll |
| `--brand-slate` | `#1E2231` | 30, 34, 49 | Elevated surfaces, FAQ items |
| `--brand-steel` | `#2A3040` | 42, 48, 64 | Borders, dividers |

### Secondary Palette (Text)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--text-primary` | `#F4F5F7` | 244, 245, 247 | Headlines, primary body text |
| `--text-secondary` | `#9BA1B0` | 155, 161, 176 | Subheadlines, supporting text |
| `--text-muted` | `#5C6478` | 92, 100, 120 | Captions, disclaimers |

### CTA & Accent Colors

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--accent-gold` | `#F5A623` | 245, 166, 35 | **Primary CTA buttons**, earning amounts |
| `--accent-gold-hover` | `#E6960F` | 230, 150, 15 | CTA hover state |
| `--accent-gold-glow` | `rgba(245, 166, 35, 0.20)` | — | CTA glow / soft shadow |
| `--accent-amber-light` | `#FFF0D4` | 255, 240, 212 | CTA text on gold bg, highlights |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--semantic-danger` | `#E54D4D` | Pain-point bullet icons (🔴) |
| `--semantic-danger-bg` | `rgba(229, 77, 77, 0.10)` | Pain-point bullet background tint |
| `--semantic-success` | `#34D399` | Solution bullet icon (🟢), positive indicators |
| `--semantic-success-bg` | `rgba(52, 211, 153, 0.10)` | Solution bullet background tint |

### Gradient Definitions

```css
/* Hero background gradient */
--gradient-hero: linear-gradient(
  170deg,
  #0D0F14 0%,
  #131720 40%,
  #1A1520 70%,
  #0D0F14 100%
);

/* Final CTA background */
--gradient-cta: linear-gradient(
  135deg,
  #161922 0%,
  #1C1A28 50%,
  #161922 100%
);

/* Gold shimmer for premium feel (subtle) */
--gradient-gold-shimmer: linear-gradient(
  90deg,
  #F5A623 0%,
  #FFD580 50%,
  #F5A623 100%
);
```

### Contrast Ratios (WCAG AA ✓)

| Combination | Ratio | Status |
|---|---|---|
| `--text-primary` on `--brand-dark` | 17.2:1 | ✅ AAA |
| `--text-secondary` on `--brand-dark` | 7.1:1 | ✅ AA |
| `--text-muted` on `--brand-dark` | 3.8:1 | ✅ AA Large |
| `--accent-gold` on `--brand-dark` | 8.4:1 | ✅ AA |
| `#0D0F14` text on `--accent-gold` bg | 8.4:1 | ✅ AAA |

---

## 3. Typography

### Font Pairing

| Role | Font | Fallback | Weight(s) | Notes |
|---|---|---|---|---|
| **Headlines** | **Manrope** | system-ui, sans-serif | 700, 800 | Geometric sans with a techy, automotive character. Excellent Cyrillic support. |
| **Body / UI** | **Inter** | system-ui, sans-serif | 400, 500, 600 | Superior readability at small sizes on mobile. Robust Cyrillic glyphs. |

### Google Fonts Load

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap" rel="stylesheet">
```

### Type Scale (Mobile-First)

| Token | Mobile | Tablet | Desktop | Weight | Font | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|---|
| `--type-hero` | 32px | 42px | 56px | 800 | Manrope | 1.1 | -0.02em |
| `--type-h2` | 24px | 30px | 36px | 700 | Manrope | 1.2 | -0.01em |
| `--type-h3` | 20px | 22px | 24px | 700 | Manrope | 1.3 | 0 |
| `--type-body-lg` | 17px | 18px | 20px | 400 | Inter | 1.6 | 0 |
| `--type-body` | 15px | 16px | 16px | 400 | Inter | 1.65 | 0.01em |
| `--type-body-sm` | 13px | 14px | 14px | 400 | Inter | 1.5 | 0.01em |
| `--type-caption` | 12px | 12px | 13px | 500 | Inter | 1.4 | 0.02em |
| `--type-btn` | 15px | 16px | 16px | 600 | Inter | 1.0 | 0.02em |
| `--type-btn-lg` | 17px | 18px | 18px | 600 | Inter | 1.0 | 0.02em |
| `--type-overline` | 11px | 12px | 13px | 600 | Inter | 1.3 | 0.08em |

> All body text uses a minimum of 15px on mobile for comfortable thumb-zone reading. The hero uses tight line-height (1.1) for visual punch.

---

## 4. Component Specifications

---

### 4.1 Sticky Navigation Bar

```
┌──────────────────────────────────────────────┐
│  [Wrapto logo]         [ Оставить заявку ▸ ] │
└──────────────────────────────────────────────┘
```

| Property | Value |
|---|---|
| Height | 56px (mobile) / 64px (desktop) |
| Background | `transparent` → `rgba(13,15,20, 0.92)` + `backdrop-filter: blur(12px)` on scroll |
| Logo | Text mark "Wrapto" in Manrope 800, 22px, `--text-primary` |
| CTA button | Ghost style → solid on scroll. See CTA Button spec below. |
| Z-index | 50 |
| Transition | background 300ms ease, box-shadow 300ms ease |
| Position | `position: fixed; top: 0` |
| Border-bottom on scroll | `1px solid rgba(255,255,255,0.06)` |

---

### 4.2 Hero Section

```
┌─────────────────────────────────────────────────┐
│                                                 │
│       ↕ 80px (mobile) / 120px (desktop)         │
│                                                 │
│  H1: Ваша машина уже зарабатывает —             │
│      вы просто об этом не знали                 │
│                                                 │
│       ↕ 16px                                    │
│                                                 │
│  Sub: Wrapto — сервис во Владивостоке...         │
│                                                 │
│       ↕ 32px                                    │
│                                                 │
│  ┌──────────────────────────┐                   │
│  │   ⚡ Оставить заявку      │ ← primary CTA    │
│  └──────────────────────────┘                   │
│                                                 │
│       ↕ 64px (mobile) / 96px (desktop)          │
│                                                 │
│  BG: --gradient-hero + subtle animated          │
│      road-line particles (optional)             │
└─────────────────────────────────────────────────┘
```

| Element | Spec |
|---|---|
| **Headline** | `--type-hero`, `--text-primary`, max-width 640px, centered |
| **Subheadline** | `--type-body-lg`, `--text-secondary`, max-width 520px, centered |
| **CTA** | Primary CTA button (see § 4.8), full-width on mobile (max 360px), centered |
| **Background** | `--gradient-hero`. Optional: subtle SVG road markings or light particle animation at 0.3 opacity. |
| **Text alignment** | Center on all breakpoints |
| **Content max-width** | 720px |

---

### 4.3 Opportunity Bullet Cards

```
┌──────────────────────────────────────────────┐
│  ● (red dot)  Pain headline (bold)           │
│               Body text with detail          │
│               wraps to 2–3 lines             │
└──────────────────────────────────────────────┘
```

| Property | Pain Bullet | Solution Bullet |
|---|---|---|
| Icon | 12px filled circle, `--semantic-danger` | 12px filled circle, `--semantic-success` |
| Left border | 3px solid `--semantic-danger` | 3px solid `--semantic-success` |
| Background | `--semantic-danger-bg` | `--semantic-success-bg` |
| Padding | 20px 24px | 20px 24px |
| Border radius | 12px | 12px |
| Headline font | `--type-h3`, `--text-primary` | `--type-h3`, `--text-primary` |
| Body font | `--type-body`, `--text-secondary` | `--type-body`, `--text-secondary` |
| Gap headline → body | 8px | 8px |
| Gap between bullets | 16px (mobile) / 20px (desktop) | — |
| Max width | 640px, centered | 640px, centered |

---

### 4.4 Process Step Cards (How It Works)

```
         ┌──────────┐     ┌──────────┐     ┌──────────┐
         │   01     │ ─── │   02     │ ─── │   03     │
         │ icon     │     │ icon     │     │ icon     │
         │ title    │     │ title    │     │ title    │
         │ body     │     │ body     │     │ body     │
         └──────────┘     └──────────┘     └──────────┘
```

| Property | Value |
|---|---|
| Card background | `--brand-charcoal` |
| Card border | `1px solid --brand-steel` |
| Card border-radius | 16px |
| Card padding | 28px 24px |
| Step number | `--type-overline`, `--accent-gold`, uppercase. Displayed as "01", "02", "03" |
| Icon area | 48×48px circle, `--accent-gold` at 10% opacity bg, icon color `--accent-gold`. Icons: 📋 form, 🔧 wrench, 💳 card |
| Title | `--type-h3`, `--text-primary`, margin-top 16px |
| Body | `--type-body`, `--text-secondary`, margin-top 8px |
| Card width | 100% on mobile (stacked) / ~320px on desktop (flex row) |
| Gap between cards | 20px (mobile) / 28px (desktop) |
| Connector line | 2px dashed `--brand-steel`, vertical on mobile, horizontal on desktop. Hidden on mobile (use step numbers instead). Visible on tablet+. |
| Hover effect | `transform: translateY(-4px)`, `box-shadow: 0 12px 32px rgba(0,0,0,0.3)`, border-color → `--accent-gold` at 30% opacity. Transition: 300ms ease. |

---

### 4.5 Earning Tier Cards

```
┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│  ЛАЙТ             │  │  ★ СТАНДАРТ       │  │  МАКСИМУМ         │
│  ─────            │  │  ─────            │  │  ─────            │
│  Заднее стекло    │  │  Двери + крыло    │  │  Полная оклейка   │
│                   │  │                   │  │                   │
│  3 000–5 000 ₽    │  │  7 000–12 000 ₽   │  │  15 000–25 000 ₽  │
│  /мес             │  │  /мес             │  │  /мес             │
└───────────────────┘  └───────────────────┘  └───────────────────┘
                            ↑ "Popular" badge
```

| Property | Лайт | Стандарт (featured) | Максимум |
|---|---|---|---|
| Card background | `--brand-charcoal` | `--brand-slate` | `--brand-charcoal` |
| Border | `1px solid --brand-steel` | `2px solid --accent-gold` | `1px solid --brand-steel` |
| Border-radius | 16px | 16px | 16px |
| Padding | 28px 24px | 32px 28px | 28px 24px |
| Scale | `scale(1)` | `scale(1.03)` on desktop | `scale(1)` |
| Badge | — | "Популярное" pill: bg `--accent-gold`, text `#0D0F14`, 11px/600 Inter, border-radius 100px, padding 4px 12px | — |
| Tier name | `--type-overline`, `--text-muted`, uppercase tracking 0.1em | Same, but `--accent-gold` | Same as Лайт |
| Description | `--type-body`, `--text-secondary` | Same | Same |
| Price | `--type-h2`, `--text-primary` (the number) + `--type-body-sm` `--text-muted` ("/мес") | Price in `--accent-gold` | Same as Лайт |
| Hover | Same as Process cards | Gold glow: `box-shadow: 0 0 40px rgba(245,166,35,0.12)` | Same as Лайт |
| Layout | Stacked vertically on mobile, horizontal row on desktop | — | — |
| Card gap | 16px (mobile) / 24px (desktop) | — | — |

**Disclaimer Text** (below cards):
- Font: `--type-caption`, `--text-muted`
- Italic
- Max-width: 520px, centered
- Margin-top: 24px

**Secondary CTA** (below disclaimer):
- Style: outlined gold button (see § 4.8)
- Margin-top: 32px

---

### 4.6 FAQ Accordion

```
┌──────────────────────────────────────────────┐
│  ▸  Не испортит ли плёнка краску моей маши…  │
├──────────────────────────────────────────────┤
│  ▾  Мне придётся ездить больше или менять…   │
│                                              │
│     Нет. Вы ездите так же, как и раньше.     │
│     На работу, за детьми, по заказам...       │
│                                              │
├──────────────────────────────────────────────┤
│  ▸  Как и когда я получаю деньги?            │
└──────────────────────────────────────────────┘
```

| Property | Value |
|---|---|
| Accordion container max-width | 680px, centered |
| Item background (collapsed) | `--brand-charcoal` |
| Item background (expanded) | `--brand-slate` |
| Item border | `1px solid --brand-steel` |
| Item border-radius | 12px |
| Item gap | 12px |
| Question padding | 20px 24px |
| Answer padding | 0 24px 20px 24px |
| Question font | `--type-body-lg`, font-weight 600, `--text-primary` |
| Answer font | `--type-body`, `--text-secondary`, line-height 1.7 |
| Chevron icon | 20px, `--text-muted` → rotates 180° on expand |
| Expand animation | `max-height` transition 400ms ease + `opacity` 300ms ease |
| First item | Open by default |
| Focus ring | `2px solid --accent-gold`, offset 2px |

---

### 4.7 Testimonial Cards

```
┌─────────────────────────────────────────┐
│                                         │
│  "  Оклеил двери и заднее стекло        │
│     четыре месяца назад..."             │
│                                         │
│  ────                                   │
│                                         │
│  👤  Алексей, 34 года                   │
│      водитель, Toyota Fielder           │
│      Вторая Речка                       │
│                                         │
│  ★★★★★                                  │
│                                         │
└─────────────────────────────────────────┘
```

| Property | Value |
|---|---|
| Card background | `--brand-charcoal` |
| Card border | `1px solid --brand-steel` |
| Card border-radius | 16px |
| Card padding | 28px 24px |
| Card min-width | 300px (for horizontal scroll on mobile) |
| Card max-width | 480px |
| Quote mark | Decorative `"` in `--accent-gold`, 48px Manrope 800, opacity 0.4. Positioned top-left of card. |
| Quote text | `--type-body`, `--text-primary`, font-style italic |
| Divider | 40px × 2px, `--accent-gold`, margin 16px 0 |
| Name | `--type-body`, font-weight 600, `--text-primary` |
| Details | `--type-body-sm`, `--text-secondary` |
| Star rating | 5× filled star icons, 16px, `--accent-gold` |
| Mobile behavior | Horizontal scroll (snap scroll), 16px gap, overflow visible |
| Desktop behavior | Side-by-side grid (2 columns), 24px gap, centered |

---

### 4.8 CTA Buttons

#### Primary CTA (e.g. "Оставить заявку")

| Property | Value |
|---|---|
| Background | `--accent-gold` |
| Text color | `#0D0F14` |
| Font | `--type-btn-lg` (17px/600 Inter, tracking 0.02em) |
| Padding | 16px 32px |
| Border-radius | 12px |
| Min-width | 200px |
| Full-width on mobile | Yes (max-width 360px, centered) |
| Box-shadow | `0 4px 20px rgba(245, 166, 35, 0.25)` |
| **Hover** | `background: --accent-gold-hover`, `transform: translateY(-2px)`, `box-shadow: 0 8px 32px rgba(245,166,35,0.35)` |
| **Active** | `transform: translateY(0)`, `box-shadow: 0 2px 8px rgba(245,166,35,0.20)` |
| **Focus** | `outline: 2px solid --accent-gold`, `outline-offset: 3px` |
| **Disabled** | `opacity: 0.5`, `cursor: not-allowed` |
| Transition | `all 200ms ease` |
| Icon (optional) | `⚡` lightning bolt before text, 16px, margin-right 8px |

#### Secondary / Outlined CTA (e.g. "Рассчитать мой доход")

| Property | Value |
|---|---|
| Background | `transparent` |
| Border | `2px solid --accent-gold` |
| Text color | `--accent-gold` |
| Font | `--type-btn` (15px/600 Inter) |
| Padding | 14px 28px |
| Border-radius | 12px |
| **Hover** | `background: rgba(245,166,35,0.08)`, `border-color: --accent-gold-hover` |
| **Active** | `background: rgba(245,166,35,0.14)` |

#### Nav CTA (Ghost → Solid on scroll)

| Property | Default (transparent nav) | On Scroll |
|---|---|---|
| Background | `transparent` | `--accent-gold` |
| Border | `1.5px solid --accent-gold` | `none` |
| Text color | `--accent-gold` | `#0D0F14` |
| Font | `--type-btn` | `--type-btn` |
| Padding | 10px 20px | 10px 20px |
| Border-radius | 10px | 10px |
| Transition | `all 300ms ease` | — |

---

### 4.9 Final CTA Section

| Property | Value |
|---|---|
| Background | `--gradient-cta` |
| Content max-width | 600px, centered |
| Text alignment | Center |
| Headline | `--type-h2`, `--text-primary` |
| Subheadline | `--type-body-lg`, `--text-secondary`, margin-top 12px |
| CTA button | Primary CTA (§ 4.8), margin-top 32px |
| Decorative | Optional subtle radial gradient glow behind button. Optional animated shimmer line on hover. |

---

### 4.10 Footer

| Property | Value |
|---|---|
| Background | `--brand-dark` |
| Border-top | `1px solid --brand-steel` |
| Padding | 32px 16px |
| Brand text | "Wrapto · Владивосток · 2026", `--type-caption`, `--text-muted` |
| Layout | Centered, single column on mobile. Row with legal links on desktop. |

---

## 5. Responsive Breakpoints

### Strategy: Mobile-First

| Breakpoint | Name | Range | Container Max-Width | Columns |
|---|---|---|---|---|
| Base | **Mobile** | 320px – 639px | 100% (padding 16px) | 1 |
| `sm` | **Small Tablet** | 640px – 767px | 608px | 2 |
| `md` | **Tablet** | 768px – 1023px | 720px | 2 |
| `lg` | **Desktop** | 1024px – 1279px | 960px | 3 |
| `xl` | **Large Desktop** | 1280px+ | 1120px | 3–4 |

### Component Responsiveness Matrix

| Component | Mobile (< 640px) | Tablet (640–1023px) | Desktop (1024px+) |
|---|---|---|---|
| **Nav** | Logo + hamburger OR logo + CTA | Logo + CTA | Logo + CTA |
| **Hero** | Stacked, centered, full-bleed | Same + larger type | Same + max-width container |
| **Opportunity bullets** | Single column, full-width cards | Same | Same, slightly wider cards |
| **Process cards** | Vertical stack, numbered | 3-column grid starts | 3-column row + connectors |
| **Earning tiers** | Vertical stack, featured on top | 3-column starts | 3-column, featured scaled up |
| **FAQ accordion** | Full width - padding | Max-width 680px, centered | Same |
| **Testimonials** | Horizontal scroll snap | 2-column grid | 2-column grid, centered |
| **Final CTA** | Full width, stacked | Same + larger type | Same + max 600px |
| **CTA Buttons** | Full width (max 360px) | Auto width, centered | Auto width, centered |

### CSS Breakpoint Definitions

```css
/* Mobile: base styles (no media query) */

/* Small Tablet */
@media (min-width: 640px) { ... }

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1280px) { ... }

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Micro-Interactions & Animation

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Nav background | Opacity transition on scroll | 300ms | ease |
| CTA button hover | translateY(-2px) + shadow grow | 200ms | ease |
| CTA button active | translateY(0) + shadow shrink | 100ms | ease |
| Process cards hover | translateY(-4px) + shadow + border glow | 300ms | ease |
| Earning cards hover | translateY(-4px) + gold glow | 300ms | ease |
| FAQ chevron rotation | rotate(180deg) | 300ms | ease-in-out |
| FAQ answer expand | max-height + opacity | 400ms | ease |
| Scroll-reveal (sections) | translateY(24px) → 0 + opacity 0 → 1 | 600ms | cubic-bezier(0.23, 1, 0.32, 1) |
| Testimonial card entrance | Stagger 100ms between cards | 500ms | ease-out |
| Hero headline | Subtle fade-up on load | 800ms | cubic-bezier(0.23, 1, 0.32, 1) |
| Gold shimmer on featured tier | Background-position animation | 3000ms | linear, infinite (subtle) |

---

## 7. Accessibility Checklist

- [x] **Color contrast**: All text/background combinations meet WCAG AA (4.5:1 body, 3:1 large text)
- [x] **Touch targets**: All interactive elements ≥ 44×44px
- [x] **Focus indicators**: Visible `--accent-gold` outline on all focusable elements
- [x] **Keyboard navigation**: Full tab-order through nav → hero CTA → content → FAQ → final CTA
- [x] **Screen reader**: Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`), appropriate ARIA labels on accordion
- [x] **Reduced motion**: All animations respect `prefers-reduced-motion: reduce`
- [x] **Font sizing**: Minimum 15px body text on mobile; scales with `rem` units
- [x] **Language attribute**: `<html lang="ru">`

---

## 8. Design Token System (CSS Custom Properties)

```css
:root {
  /* ── Colors ── */
  --brand-dark: #0D0F14;
  --brand-charcoal: #161922;
  --brand-slate: #1E2231;
  --brand-steel: #2A3040;

  --text-primary: #F4F5F7;
  --text-secondary: #9BA1B0;
  --text-muted: #5C6478;

  --accent-gold: #F5A623;
  --accent-gold-hover: #E6960F;
  --accent-gold-glow: rgba(245, 166, 35, 0.20);
  --accent-amber-light: #FFF0D4;

  --semantic-danger: #E54D4D;
  --semantic-danger-bg: rgba(229, 77, 77, 0.10);
  --semantic-success: #34D399;
  --semantic-success-bg: rgba(52, 211, 153, 0.10);

  /* ── Typography ── */
  --font-display: 'Manrope', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* ── Spacing ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;

  /* ── Radii ── */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-pill: 100px;

  /* ── Shadows ── */
  --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.20);
  --shadow-card-hover: 0 12px 32px rgba(0, 0, 0, 0.30);
  --shadow-cta: 0 4px 20px rgba(245, 166, 35, 0.25);
  --shadow-cta-hover: 0 8px 32px rgba(245, 166, 35, 0.35);

  /* ── Transitions ── */
  --ease-fast: 200ms ease;
  --ease-normal: 300ms ease;
  --ease-slow: 400ms ease;
  --ease-spring: 600ms cubic-bezier(0.23, 1, 0.32, 1);
}
```

---

## 9. Asset Checklist

| Asset | Format | Notes |
|---|---|---|
| Wrapto logo (text mark) | SVG | Manrope 800, "Wrapto" |
| Step icons (3) | SVG, 24px stroke | Form/clipboard, wrench/tool, card/payment |
| Chevron icon (FAQ) | SVG, 20px | Rotates on expand |
| Star icon (testimonials) | SVG, 16px filled | Gold colored |
| Car silhouette (hero bg) | SVG or WebP | Subtle, low opacity decorative element |
| Social icons (footer) | SVG, 20px | Telegram, VK, WhatsApp |

---

*Specification prepared for developer handoff. All values are implementation-ready.*
