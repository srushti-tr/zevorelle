# Customization Guide

This guide walks through the exact places you need to edit to make Express Store By Kaushaindra your own — new brand name, new products, new domain.

## 1. Rename the brand

Search every `.html` file for:
- `Express Store By Kaushaindra` — the full site name
- `Express Store` — the short name (used in the header/footer logo)
- `Kaushaindra Kumar` — the author/trainer name
- `Rewari, Haryana, India` — the location

If you're comfortable with find-and-replace tools (VS Code's "Replace in Files", or `sed` on macOS/Linux), you can update all pages in one pass.

> This project was generated from shared header/footer/meta "template" logic during development. If you're extending it further, keeping that same *find every instance* approach for the brand name (rather than hardcoding it separately on each page) will save you time.

## 2. Update the live domain

Every page's `<head>` includes a **canonical URL**, **Open Graph URL**, and **JSON-LD `url` fields** that currently point to:

```
https://kaushaindra.github.io/express-store
```

Once you deploy your own copy (see README.md), replace this placeholder domain everywhere it appears — it drives:
- `<link rel="canonical">`
- `<meta property="og:url">`
- Organization / WebSite / LocalBusiness / Product / BreadcrumbList JSON-LD `url` and `item` fields
- `robots.txt`'s `Sitemap:` line
- Every `<loc>` in `sitemap.xml`

## 3. Swap the product catalog

Product data lives inline inside each page's product cards (`shop.html`, `index.html`, `product-details.html`). Each card follows this pattern:

```html
<article class="product-card" data-product-card
         data-name="Product Name"
         data-category="bags"
         data-price="1499">
  ...
  <img src="PLACEHOLDER_IMAGE_URL" alt="Descriptive alt text" width="600" height="600" loading="lazy" />
  ...
</article>
```

To add or change a product:
1. Duplicate a `<article class="product-card">` block.
2. Update `data-name`, `data-category`, `data-price` — these three attributes power the search, filter, and sort features in `js/main.js`.
3. Replace the placeholder image URL with your own product photo (see section 5).
4. Write unique, descriptive `alt` text — never leave it blank or generic ("image1.jpg").

## 4. Add real categories

Category filter chips live in `shop.html` inside `.chip-row`. Keep the `data-filter-chip="<value>"` in sync with the `data-category` value used on your product cards.

## 5. Replace placeholder images

This project uses auto-generated placeholder graphics from `placehold.co` so the site works without any image uploads. For a real project:
1. Add real photos to an `images/products/` folder.
2. Point each `<img src="...">` at your local file, e.g. `images/products/backpack-1.jpg`.
3. Compress images before upload (TinyPNG, Squoosh) to protect Core Web Vitals.
4. Always keep `width`/`height` attributes matching the real image dimensions to avoid layout shift.

## 6. Extend to full per-product pages

Currently `product-details.html` renders one reference product (the Nomad Canvas Backpack) with full `Product` schema. To give every product its own indexable URL:
1. Duplicate `product-details.html` per product (e.g. `product-nomad-backpack.html`, `product-horizon-earbuds.html`).
2. Update the H1, description, price, images, and the `Product` JSON-LD block for each.
3. Update the `href` on every matching product card across the site to point to the new file instead of `product-details.html?id=...`.
4. Add each new URL to `sitemap.xml`.

This is also a great practice exercise — see `ASSIGNMENTS.md`.

## 7. Contact form & newsletter

Both forms in `contact.html` and the newsletter block are **front-end only** — they show a confirmation message but don't send data anywhere (see `js/main.js`). To make them functional without a backend, connect them to a free form service like Formspree, Getform, or Netlify Forms by changing the `<form>` tag's `action`/`method` attributes per that service's docs.

## 8. Colors, fonts & spacing

All design tokens live at the top of `css/style.css` inside `:root { ... }` as CSS custom properties (`--color-teal`, `--font-display`, etc.). Change a value once there and it updates across the whole site.
