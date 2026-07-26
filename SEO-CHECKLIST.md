# SEO Checklist — Express Store By Kaushaindra

A complete record of every SEO technique implemented in this project, organized into **Technical**, **On-Page**, and **Off-Page** SEO — the three pillars taught alongside this site.

---

## ✅ Technical SEO

| Item | Status | Where to find it |
|---|---|---|
| `robots.txt` | ✅ | `/robots.txt` — allows all crawling, links to sitemap |
| `sitemap.xml` | ✅ | `/sitemap.xml` — lists every indexable page with priority & changefreq |
| Canonical tags | ✅ | `<link rel="canonical">` in every page's `<head>` |
| Robots meta tag | ✅ | `<meta name="robots" content="index, follow">` (404 uses `noindex, follow`) |
| Favicon | ✅ | `/images/favicon.svg` + `<link rel="icon">` |
| Web app manifest | ✅ | `/manifest.json` + `<link rel="manifest">` |
| Mobile-first responsive design | ✅ | Fluid CSS Grid/Flexbox layouts, `<meta name="viewport">`, tested down to ~360px |
| HTTPS-ready, no mixed content | ✅ | All external assets (fonts, placeholder images) load over HTTPS |
| Clean, descriptive URLs | ✅ | `/shop.html`, `/about.html` — short, lowercase, hyphen-free where possible |
| No duplicate content | ✅ | Every page has a unique title, meta description and canonical URL |
| Core Web Vitals best practices | ✅ | See below |
| Structured data validation-ready | ✅ | All JSON-LD blocks are valid, testable in Google's Rich Results Test |

### Core Web Vitals techniques used
- **LCP (Largest Contentful Paint):** no render-blocking frameworks; `<link rel="preconnect">` to font/image hosts; hero image sized explicitly.
- **CLS (Cumulative Layout Shift):** every `<img>` has explicit `width`/`height` attributes so the browser reserves space before the image loads.
- **INP / interactivity:** all JavaScript is small, vanilla, and deferred to `DOMContentLoaded` — no heavy libraries blocking the main thread.
- **Lazy loading:** product and blog images use `loading="lazy"` outside the hero.
- **Lightweight CSS:** a single hand-written stylesheet, no unused framework CSS shipped.

---

## ✅ On-Page SEO

| Item | Status | Notes |
|---|---|---|
| Unique `<title>` per page | ✅ | ~50–60 characters, keyword near the front |
| Unique meta description per page | ✅ | ~150–160 characters, written to earn clicks |
| One `<h1>` per page | ✅ | Matches the page's primary keyword/topic |
| Logical heading hierarchy (H1→H2→H3) | ✅ | No skipped levels |
| Semantic HTML5 | ✅ | `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` used throughout, not generic `<div>` soup |
| Internal linking | ✅ | Nav, footer, breadcrumbs, related products, and in-content links tie every page together |
| Breadcrumb navigation | ✅ | Visible breadcrumb trail + matching `BreadcrumbList` schema on every inner page |
| Image SEO | ✅ | Descriptive `alt` text on every image, explicit dimensions, lazy loading |
| Keyword-relevant, natural copy | ✅ | Product descriptions and blog excerpts written for humans first |
| Open Graph tags | ✅ | `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name` |
| Twitter Card tags | ✅ | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` |
| Accessible, crawlable navigation | ✅ | Plain `<a href>` links (no JS-only navigation), works with JavaScript disabled |
| Mobile usability | ✅ | Touch-friendly tap targets, responsive nav, readable font sizes without zooming |

### Schema.org / JSON-LD implemented
- **Organization** — every page (`/`)
- **WebSite** + `SearchAction` (sitelinks search box target) — every page
- **LocalBusiness** — every page (demo address/phone in Rewari, Haryana)
- **BreadcrumbList** — every inner page
- **Product** — `product-details.html` (price, availability, rating, brand)
- **FAQPage** — `faq.html` (matches the visible accordion content exactly)
- **ItemList** — `index.html` (featured products)

---

## ✅ Off-Page SEO (learning material — not implemented on this static demo)

This project has no real backlinks, because it's not a live business. Use this section as study material instead:

1. **Backlinks** — links from other reputable websites pointing to yours. Quality (relevance, authority) matters more than quantity.
2. **Guest posting** — writing articles for other blogs in your niche with a natural link back to your site.
3. **Business citations & directories** — listing a real business consistently (same NAP: Name, Address, Phone) across Google Business Profile, Justdial, IndiaMART, etc.
4. **Social signals** — shares and mentions on social platforms that drive referral traffic and brand awareness (not a direct ranking factor, but supports discovery).
5. **Digital PR** — earning coverage or mentions from news sites, niche publications, or influencers.
6. **Broken link building** — finding dead links on other sites and suggesting your content as a replacement.
7. **E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)** — Google's framework for judging content quality, especially relevant to About/Contact page completeness and author transparency (both present on this project).

See `ASSIGNMENTS.md` for a practical off-page SEO exercise based on this checklist.
