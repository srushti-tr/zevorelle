# Assignments — Practice Exercises

Hands-on tasks for students working through Express Store By Kaushaindra, roughly ordered from beginner to advanced. Each includes what to submit for review.

## Beginner

### 1. Rewrite a meta description
Pick any page and rewrite its `<meta name="description">` to be more click-worthy while staying under 160 characters and accurately describing the page.
**Submit:** old vs. new description, plus one sentence on why the new one is stronger.

### 2. Fix an image's alt text
Find a product image and rewrite its `alt` attribute to be more descriptive without keyword-stuffing.
**Submit:** before/after alt text.

### 3. Audit the heading hierarchy
Open any two pages and list every heading tag in order (H1, H2, H3...). Confirm there's exactly one H1 and no skipped levels.
**Submit:** a short outline of the heading structure for both pages.

## Intermediate

### 4. Add a 13th product
Following the pattern in `CUSTOMIZATION.md`, add a new product card to `shop.html` and `index.html`'s featured grid. Include a unique name, category, price, description, and alt text.
**Submit:** the new product's HTML block.

### 5. Validate the structured data
Deploy the site (or use a local server) and run `faq.html` and `product-details.html` through Google's Rich Results Test. Fix any warnings.
**Submit:** a screenshot of both validation results.

### 6. Improve internal linking
Add two new contextual internal links inside `about.html`'s body copy that point to other relevant pages (not already linked). Explain why you chose those anchor texts.
**Submit:** the updated paragraph + your reasoning.

### 7. Write a full blog post
Pick one of the six blog post cards on `blog.html` and write the full article (600–900 words) it would link to, following the site's on-page SEO patterns (H1, intro, subheadings, natural keyword use).
**Submit:** the article as a new HTML page, correctly linked from `blog.html`.

## Advanced

### 8. Build a second full product page
Following the extension steps in `CUSTOMIZATION.md`, create a standalone `product-details.html`-style page for a second product, complete with its own `Product` JSON-LD, breadcrumb, and related products. Add it to `sitemap.xml`.
**Submit:** the new page + a diff/summary of what changed in `sitemap.xml` and any product cards you re-linked.

### 9. Run a Core Web Vitals audit
Deploy the site and run Lighthouse (Chrome DevTools) or PageSpeed Insights against it. Identify the three lowest-scoring metrics and propose one concrete fix for each, grounded in what you can see in the codebase.
**Submit:** the Lighthouse report (screenshot or export) + your three proposed fixes.

### 10. Off-page SEO outreach draft
Using the Off-Page SEO section of `SEO-CHECKLIST.md`, write a realistic guest-post pitch email to a fictional lifestyle blog, proposing an article that would naturally link back to `blog.html`. Include a suggested anchor text and explain why it's relevant (not exact-match spammy).
**Submit:** the pitch email + your anchor text reasoning.

### 11. Convert this into a small local business site
Using `CUSTOMIZATION.md`, fully rebrand this project (name, colors via CSS variables, copy, LocalBusiness schema) into a fictional business of your choice, and deploy it to GitHub Pages.
**Submit:** the live GitHub Pages link + your repository link.

---

## Suggested rubric (out of 10 per task)

| Criteria | Points |
|---|---|
| Technically correct (valid HTML, working schema, no broken links) | 4 |
| Follows on-page SEO best practices from `SEO-CHECKLIST.md` | 3 |
| Clear written reasoning / explanation submitted | 2 |
| Presentation & attention to detail | 1 |
