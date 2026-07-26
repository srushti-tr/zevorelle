/* ==========================================================================
   EXPRESS STORE BY KAUSHAINDRA — MAIN JAVASCRIPT (Vanilla JS only)
   Author: Kaushaindra Kumar
   Notes for students: every feature here is intentionally framework-free so
   you can see exactly how the DOM is being read and updated. No build step,
   no bundler — just one script tag at the bottom of each page.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------------------------------------------------------------------
     1) MOBILE NAV TOGGLE
     --------------------------------------------------------------------- */
  var navToggle = document.querySelector(".nav__toggle");
  var navLinks = document.querySelector(".nav__links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------------------------------------------------------------------
     2) FAKE CART COUNTER (client-side only, for teaching purposes)
     This project has no backend/database, so "Add to cart" just updates a
     number stored in localStorage to demonstrate simple state handling.
     --------------------------------------------------------------------- */
  var CART_KEY = "expressStoreCartCount";
  var cartCountEls = document.querySelectorAll("[data-cart-count]");

  function getCartCount() {
    return parseInt(localStorage.getItem(CART_KEY) || "0", 10);
  }
  function renderCartCount() {
    var count = getCartCount();
    cartCountEls.forEach(function (el) { el.textContent = count; });
  }
  function addToCart() {
    var count = getCartCount() + 1;
    localStorage.setItem(CART_KEY, count);
    renderCartCount();
  }
  renderCartCount();

  document.querySelectorAll("[data-add-to-cart]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      addToCart();
      var original = btn.textContent;
      btn.textContent = "Added ✓";
      setTimeout(function () { btn.textContent = original; }, 1200);
    });
  });

  /* ---------------------------------------------------------------------
     3) PRODUCT SEARCH (client-side filter across data-name attributes)
     --------------------------------------------------------------------- */
  var searchInput = document.querySelector("[data-product-search]");
  var searchForm = document.querySelector("[data-search-form]");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      applyFilters();
    });
  }

  /* ---------------------------------------------------------------------
     4) CATEGORY FILTER CHIPS (shop.html only)
     --------------------------------------------------------------------- */
  var chips = document.querySelectorAll("[data-filter-chip]");
  var activeCategory = "all";
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.setAttribute("aria-current", "false"); });
      chip.setAttribute("aria-current", "true");
      activeCategory = chip.getAttribute("data-filter-chip");
      applyFilters();
    });
  });

  /* ---------------------------------------------------------------------
     5) PRICE SORT (shop.html only)
     --------------------------------------------------------------------- */
  var sortSelect = document.querySelector("[data-sort]");
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      applySort(sortSelect.value);
    });
  }

  function getGrid() {
    return document.querySelector("[data-product-grid]");
  }

  function applyFilters() {
    var grid = getGrid();
    if (!grid) return;
    var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var cards = grid.querySelectorAll("[data-product-card]");
    var visibleCount = 0;
    cards.forEach(function (card) {
      var name = (card.getAttribute("data-name") || "").toLowerCase();
      var cat = card.getAttribute("data-category") || "all";
      var matchesQuery = query === "" || name.indexOf(query) !== -1;
      var matchesCategory = activeCategory === "all" || cat === activeCategory;
      var show = matchesQuery && matchesCategory;
      card.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });
    var emptyMsg = document.querySelector("[data-empty-message]");
    if (emptyMsg) emptyMsg.hidden = visibleCount !== 0;
  }

  function applySort(order) {
    var grid = getGrid();
    if (!grid) return;
    var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-product-card]"));
    cards.sort(function (a, b) {
      var pa = parseFloat(a.getAttribute("data-price"));
      var pb = parseFloat(b.getAttribute("data-price"));
      if (order === "price-asc") return pa - pb;
      if (order === "price-desc") return pb - pa;
      return 0; /* "featured" = original DOM order */
    });
    cards.forEach(function (card) { grid.appendChild(card); });
  }

  /* ---------------------------------------------------------------------
     6) QUANTITY STEPPER (product-details.html)
     --------------------------------------------------------------------- */
  var qtyWrap = document.querySelector("[data-qty]");
  if (qtyWrap) {
    var qtyValue = qtyWrap.querySelector("[data-qty-value]");
    var min = 1, max = 10;
    qtyWrap.querySelector("[data-qty-minus]").addEventListener("click", function () {
      var v = Math.max(min, parseInt(qtyValue.textContent, 10) - 1);
      qtyValue.textContent = v;
    });
    qtyWrap.querySelector("[data-qty-plus]").addEventListener("click", function () {
      var v = Math.min(max, parseInt(qtyValue.textContent, 10) + 1);
      qtyValue.textContent = v;
    });
  }

  /* ---------------------------------------------------------------------
     7) PRODUCT GALLERY THUMBNAILS (product-details.html)
     --------------------------------------------------------------------- */
  var thumbs = document.querySelectorAll("[data-thumb]");
  var mainImage = document.querySelector("[data-main-image]");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      thumbs.forEach(function (t) { t.classList.remove("active"); });
      thumb.classList.add("active");
      if (mainImage) mainImage.src = thumb.src;
    });
  });

  /* ---------------------------------------------------------------------
     8) NEWSLETTER FORM (front-end only demo — no backend configured)
     --------------------------------------------------------------------- */
  var newsletterForm = document.querySelector("[data-newsletter-form]");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = newsletterForm.querySelector("[data-newsletter-msg]");
      if (msg) msg.textContent = "Thanks for subscribing! (Demo only — no email is actually sent.)";
    });
  }

  /* ---------------------------------------------------------------------
     9) CONTACT FORM (front-end only demo — no backend configured)
     --------------------------------------------------------------------- */
  var contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = contactForm.querySelector("[data-contact-msg]");
      if (msg) msg.textContent = "Thanks! This is a static demo site, so your message wasn't actually sent — but in a real project this is where a backend or form service (like Formspree) would receive it.";
      contactForm.reset();
    });
  }

  /* ---------------------------------------------------------------------
     10) FOOTER YEAR
     --------------------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

});
