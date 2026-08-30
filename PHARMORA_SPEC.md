# PHARMORA — WORLD-CLASS PHARMACY SOFTWARE WEBSITE
## MASTER UI / UX / FRONTEND SPECIFICATION

Build a complete, highly polished, production-quality marketing website for **Pharmora**.

Pharmora is a modern pharmacy operating platform for pharmacies, pharmacy owners, pharmacy chains, dispensaries, healthcare retailers, and medicine businesses.

Pharmacies should be able to access Pharmora in two primary ways:

1. Download the Pharmora desktop application for Windows as a `.exe` setup file.
2. Launch and use Pharmora directly through the browser.

This phase is primarily about the **website UI, UX, responsiveness, interactions, animations, routing and frontend experience**.

Do NOT implement the full Pharmora business backend in this phase.
However, the website must NOT feel static.
Every visible button, dropdown, navigation item, accordion, tab, modal, carousel and interactive component should behave properly.

---

# 1. CORE DESIGN PHILOSOPHY
Pharmora should NOT look like:
- A generic pharmacy template
- A hospital website
- A basic SaaS landing page
- An AI-generated template
- A Bootstrap website
- A copied VS Code website
- A generic green healthcare website

The website should feel uniquely designed for Pharmora.
Think of the level of polish found in world-class product companies.
The design should combine:
- premium SaaS design
- sophisticated health-tech aesthetics
- excellent product storytelling
- carefully controlled whitespace
- subtle gradients
- immersive product previews
- elegant motion
- strong typography
- sophisticated cards
- realistic software dashboard previews
- modern glass effects used sparingly
- clean visual hierarchy

The website should feel like a product that could compete internationally.

---

# 2. IMPORTANT REFERENCE CONCEPT
A visitor should immediately understand:
WHAT THE SOFTWARE IS → WHAT IT HELPS THEM DO → WHAT THE PRODUCT LOOKS LIKE → WHY IT IS BETTER → DOWNLOAD DESKTOP APP OR USE WEB APP

---

# 3. BRAND PERSONALITY
Trust · Safety · Technology · Healthcare · Efficiency · Modern pharmacy operations · Professionalism · Reliability · Calmness · Intelligence · Accessibility · Premium software

Overall visual feeling: "Modern healthcare infrastructure." Not: "Online medicine shop."

---

# 4. PRIMARY BRAND COLOUR SYSTEM
- **Primary Emerald**: `#059669` (primary buttons, active states, selected navigation, icons, key highlights)
- **Deep Emerald**: `#047857` (hover states, stronger CTAs, premium dark gradients, dark brand areas)
- **Bright Pharmora Teal**: `#0D9488` (feature highlights, charts, gradients, secondary accents, active indicators)
- **Mint**: `#DDF7EF` (soft cards, badges, selected states, healthcare icons, subtle backgrounds)
- **Ultra-Light Mint**: `#F2FBF8` (large section backgrounds, cards, feature areas, subtle visual separation)

---

# 5. DARK COLOURS
- **Main heading colour**: `#0B1739` (Pharmora premium deep navy)
- **Body text**: `#43516A`
- **Secondary text**: `#667085`
- **Muted text**: `#98A2B3`

---

# 6. BACKGROUND COLOURS
- **Main page**: `#FFFFFF`
- **Secondary surface**: `#F8FAFC`
- **Mint surface**: `#F4FBF8`
- **Alternative premium section**: `#F6F8FA`
- **Dark section**: `#071B18`
- **Dark emerald**: `#052E2B`

---

# 7. BORDER COLOURS
- **Default**: `#E6EAEF`
- **Emerald subtle**: `#CDEFE3`
- **Hover**: `#A7E3CF`
- **Dark mode borders**: `rgba(255,255,255,0.10)`

---

# 8. GRADIENT SYSTEM
- **Primary CTA gradient**: `linear-gradient(135deg, #059669 0%, #0D9488 100%)`
- **Hero atmosphere gradient**: `radial-gradient(circle at 70% 30%, rgba(13,148,136,0.15), transparent 45%)`
- **Secondary atmospheric glow**: `radial-gradient(circle, rgba(16,185,129,0.12), transparent 65%)`
- **Dark CTA gradient**: `linear-gradient(135deg, #052E2B, #071B18)`
- **Mint surface gradient**: `linear-gradient(135deg, #F3FCF8, #EAF8F3)`

---

# 9. TYPOGRAPHY & SCALE
- Premium modern sans-serif: Plus Jakarta Sans / Inter
- Hero headline desktop: 64–76px (weight 700–800, line-height 0.98–1.08, letter-spacing -0.03em)
- Section headline desktop: 44–52px
- Card titles: 18–22px
- Body: 16–18px
- Navigation: 14–15px
- Microcopy: 12–14px

---

# 10. PAGE CONTAINER & RADIUS
- Max-width: 1280px (Hero up to 1360px, Reading 720px)
- Padding: 32–48px desktop, 24–32px tablet, 18–20px mobile
- Radius: Buttons 12–14px, Inputs 14–16px, Normal cards 20–24px, Feature cards 28–32px, Hero/Containers 32–36px

---

# 11. KEY SECTIONS & FEATURES
1. **Sticky Header & Mega-Menu**: Logo + Wordmark, Mega menu for Product (Inventory, Orders, Prescriptions, Customers, Payments, Analytics, Delivery, Desktop, Web), Solutions, Desktop, Web, Pricing, Resources, Sign In, Use Online, Download App. Backdrop blur on scroll.
2. **Hero Section**: Badge ("PHARMACY OPERATIONS, REIMAGINED"), Headline ("Run your pharmacy smarter with Pharmora."), Dual CTAs (Download for Windows with .exe badge, Use Pharmora Online), Micro trust badges, Layered dynamic Pharmacy Console dashboard with floating reactive metric cards (Low Stock Alert, New Order GH₵, Prescription Review, Today's Sales).
3. **Trust / Audience Strip**: "Built for modern pharmacies" — Independent, Chains, Health Retailers, Clinics, Dispensaries.
4. **Two Ways to Work (Platform Cards)**: Large Dark Emerald Card (Pharmora Desktop) vs Light Mint Card (Pharmora Web) with interactive highlights.
5. **Product Experience Tabs**: Interactive tabbed live console (Dashboard, Inventory with healthy/low/critical tags, Orders Kanban, Prescriptions workflow, Customers, Analytics dark view with multi-shade charts).
6. **Prescription Workflow Interactive Sequence**: Step by step visual pipeline with connected animation.
7. **Order Management Kanban**: Live moving interactive preview.
8. **Dark Analytics Section**: Deep emerald telemetry with KPIs and interactive chart switches.
9. **How It Works Timeline**: 4-step interactive timeline.
10. **Bento Grid Benefits**: Role permissions, batch tracking, point of sale, delivery dispatch.
11. **Desktop Download Hub**: OS detection, installer dropdown (.exe, portable, mac coming soon), live mock download state simulation ("Preparing download..." -> "Download started ✓").
12. **Web Version Section**: Browser mock with app.pharmora.com address bar and interactive preview.
13. **Desktop vs Web Detailed Matrix**: Clear comparison.
14. **Security & Role-Based Access Controls**: Interactive role permission toggles (Owner, Manager, Pharmacist, Cashier, Inventory Staff).
15. **Testimonials**: Interactive carousel with authentic pharmacy personas.
16. **Pricing Plans**: Starter, Professional (Featured), Enterprise with toggle (Monthly/Annual) & feature breakdown.
17. **Accordion FAQ**: Expandable questions with instant search/filter.
18. **Lead Capture / Demo Request Form**: Interactive validation modal or page.
19. **Complete Multi-Page Routing**: `/`, `/features`, `/desktop`, `/web`, `/pricing`, `/downloads`, `/release-notes`, `/installation`, `/help`, `/contact`, `/privacy`, `/terms`.
20. **Polished Footer**: Product, Solutions, Resources, Company columns, newsletter signup, and copyright.
