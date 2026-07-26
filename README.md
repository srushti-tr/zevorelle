# Express Store By Kaushaindra

A free, beginner-friendly **static e-commerce website** built to teach Digital Marketing students practical, real-world SEO — on-page, technical, and off-page — using a realistic (but fake) online store.

> ⚠️ **This is a training project, not a real business.** No real payments, orders, or shipments happen anywhere on this site.

- **Creator & Trainer:** Kaushaindra Kumar
- **Location:** Rewari, Haryana, India
- **Purpose:** SEO learning + GitHub portfolio practice

---

## ✨ What's inside

| Feature | Details |
|---|---|
| Pages | Home, Shop, Product Details, About, Contact, Blog, FAQ, Privacy Policy, Terms, 404 |
| Products | 12 realistic product cards with placeholder images, ratings, pricing & sale badges |
| Shop tools | Live search, category filter chips, price sort (low→high / high→low) |
| Extras | Newsletter sign-up UI, testimonials, related products, breadcrumb navigation |
| SEO | Titles, meta descriptions, canonical tags, robots meta, Open Graph, Twitter Cards, Schema.org/JSON-LD (Organization, WebSite, Product, FAQPage, BreadcrumbList, LocalBusiness), robots.txt, sitemap.xml, manifest.json, image SEO, semantic heading hierarchy |
| Accessibility | Skip link, visible focus states, alt text everywhere, `prefers-reduced-motion` support |

## 🧱 Tech stack

- **HTML5** — semantic markup on every page
- **CSS3** — one hand-written stylesheet, no framework
- **Vanilla JavaScript** — no libraries, no build step

**Not used, on purpose:** Bootstrap, Tailwind, React, Node.js, PHP, any database, any external API, any bundler. Everything here runs by opening an `.html` file — no `npm install` required.

## 📂 Folder structure

```
express-store/
├── index.html              Home page
├── shop.html                Shop / product listing
├── product-details.html     Single product page (Nomad Canvas Backpack)
├── about.html
├── contact.html
├── blog.html
├── faq.html
├── privacy-policy.html
├── terms.html
├── 404.html
├── css/
│   └── style.css            All styling + design tokens (CSS variables)
├── js/
│   └── main.js               Search, filter, sort, cart count, forms, accordions
├── images/
│   └── favicon.svg
├── robots.txt                Crawl rules for search engines
├── sitemap.xml                Full URL list for search engines
├── manifest.json              PWA / technical SEO metadata
├── README.md                  You are here
├── CUSTOMIZATION.md           How to rebrand & extend the site
├── TRAINER-GUIDE.md           How to teach with this project
├── SEO-CHECKLIST.md           Every SEO technique used, explained
└── ASSIGNMENTS.md             Practice exercises for students
```

This is a **flat, SEO-friendly folder structure**: short, descriptive, lowercase file names; no unnecessary nesting; assets grouped by type (`css/`, `js/`, `images/`) so URLs stay short and readable — e.g. `/shop.html`, `/css/style.css`.

## 🚀 How to run it locally

No installation needed.

1. Download or clone this project.
2. Double-click `index.html` to open it in your browser — **or**, for the most accurate experience (some browsers restrict local file requests), serve it with a simple local server:

   ```bash
   # Python 3
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```

## 🌐 How to deploy it (free, in minutes)

**GitHub Pages** (recommended for students):
1. Create a new GitHub repository and push this project to it.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, select `main` and `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
5. Update `SITE_URL` references in the meta tags (see `CUSTOMIZATION.md`) to match your real URL.

Any static host works identically: Netlify, Vercel, Cloudflare Pages, or a basic shared-hosting FTP upload.

## 👤 Credits

Built by **Kaushaindra Kumar**, Digital Marketing Trainer, Rewari, Haryana, India — for classroom and self-study SEO practice.

## 📄 License

Free to use, fork, and modify for learning, coursework, and portfolio purposes.
