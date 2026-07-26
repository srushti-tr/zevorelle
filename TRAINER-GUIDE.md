# Trainer Guide

Notes for using Express Store By Kaushaindra as a teaching tool in a Digital Marketing / SEO course.

**Author:** Kaushaindra Kumar, Rewari, Haryana, India

## Who this is for

Beginner-to-intermediate Digital Marketing students who need to *see and edit* real SEO tags rather than only read about them in slides. No coding background is required to complete most exercises — copy/paste and careful reading is enough — but basic HTML familiarity helps.

## Suggested course flow (4 sessions)

### Session 1 — On-Page SEO
- Open any page's source (`Ctrl+U` / right-click → View Page Source).
- Walk through `<title>`, `<meta name="description">`, and heading hierarchy (`H1` → `H2` → `H3`) using `index.html` and `shop.html`.
- Exercise: have students rewrite the homepage `<title>` and meta description for a different target keyword, then explain their reasoning.

### Session 2 — Technical SEO
- Inspect `robots.txt` and `sitemap.xml` together — explain what each line means.
- Open browser DevTools → Lighthouse (or PageSpeed Insights) against a deployed copy and read the Core Web Vitals report.
- Exercise: identify which techniques in this codebase (image `width`/`height`, `loading="lazy"`, font `preconnect`, no render-blocking frameworks) support good Core Web Vitals scores, and why.

### Session 3 — Structured Data (Schema.org / JSON-LD)
- Open `faq.html` and find the `FAQPage` JSON-LD block; paste it into Google's [Rich Results Test](https://search.google.com/test/rich-results) once deployed.
- Compare it against the `Product` schema in `product-details.html` and the `BreadcrumbList` schema present on every inner page.
- Exercise: add a new FAQ question/answer pair to both the visible accordion **and** the JSON-LD block, and validate it.

### Session 4 — Off-Page SEO (concepts only — this demo has no real backlinks)
- Because this is a static demo site, it has no real backlink profile. Use `SEO-CHECKLIST.md`'s Off-Page section as lecture material: backlinks, guest posting, citations, social signals, brand mentions, E-E-A-T.
- Exercise: have students draft an outreach email pitching a (fictional) guest post that would link back to the `blog.html` page, applying what they know about anchor text and relevance.

## Grading ideas

Use `ASSIGNMENTS.md` directly — it includes a rubric-friendly list of tasks ranging from "edit a meta description" (beginner) to "add a fully new indexable product page with schema" (advanced).

## Common student mistakes to watch for

- Writing meta descriptions that are too long (over ~160 characters) or duplicated across pages.
- Using more than one `<h1>` per page, or skipping heading levels (H1 straight to H3).
- Leaving `alt=""` empty on meaningful images, or stuffing alt text with keywords unnaturally.
- Forgetting to update the canonical URL after changing a page's filename.
- Copy-pasting JSON-LD without updating the actual visible content to match (schema must reflect real page content).

## Where to point curious students next

- Google Search Central documentation (search-friendly, official, free)
- Google's Rich Results Test & Lighthouse
- `web.dev` for Core Web Vitals deep-dives

This project intentionally avoids frameworks so that everything a student inspects in DevTools is something they can also find in the source file — no compiled/minified output getting in the way of learning.
