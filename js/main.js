/* ========================================================================== 
   ZEVORELLE — MAIN JAVASCRIPT
   Lightweight interactions for navigation, product browsing and cart state.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector(".nav__toggle");
  var navLinks = document.querySelector(".nav__links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var CART_KEY = "zevorelleCartCount";
  var cartCountEls = document.querySelectorAll("[data-cart-count]");

  function getCartCount() {
    return parseInt(localStorage.getItem(CART_KEY) || "0", 10);
  }

  function renderCartCount() {
    var count = getCartCount();
    cartCountEls.forEach(function (el) { el.textContent = count; });
  }

  function addToCart() {
    localStorage.setItem(CART_KEY, getCartCount() + 1);
    renderCartCount();
  }

  renderCartCount();

  document.querySelectorAll("[data-add-to-cart]").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      addToCart();
      var originalLabel = btn.textContent;
      btn.textContent = "Added to cart ✓";
      setTimeout(function () { btn.textContent = originalLabel; }, 1200);
    });
  });

  var searchInput = document.querySelector("[data-product-search]");
  var searchForm = document.querySelector("[data-search-form]");
  var activeCategory = "all";

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
      var category = card.getAttribute("data-category") || "all";
      var matchesQuery = query === "" || name.indexOf(query) !== -1;
      var matchesCategory = activeCategory === "all" || category === activeCategory;
      var show = matchesQuery && matchesCategory;
      card.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });

    var emptyMessage = document.querySelector("[data-empty-message]");
    if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
  }

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      applyFilters();
    });
  }

  document.querySelectorAll("[data-filter-chip]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll("[data-filter-chip]").forEach(function (item) {
        item.setAttribute("aria-current", "false");
      });
      chip.setAttribute("aria-current", "true");
      activeCategory = chip.getAttribute("data-filter-chip");
      applyFilters();
    });
  });

  var sortSelect = document.querySelector("[data-sort]");
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      var grid = getGrid();
      if (!grid) return;

      var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-product-card]"));
      cards.sort(function (a, b) {
        var firstPrice = parseFloat(a.getAttribute("data-price"));
        var secondPrice = parseFloat(b.getAttribute("data-price"));
        if (sortSelect.value === "price-asc") return firstPrice - secondPrice;
        if (sortSelect.value === "price-desc") return secondPrice - firstPrice;
        return 0;
      });
      cards.forEach(function (card) { grid.appendChild(card); });
    });
  }

  var quantityWrap = document.querySelector("[data-qty]");
  if (quantityWrap) {
    var quantityValue = quantityWrap.querySelector("[data-qty-value]");
    var minusButton = quantityWrap.querySelector("[data-qty-minus]");
    var plusButton = quantityWrap.querySelector("[data-qty-plus]");

    if (quantityValue && minusButton && plusButton) {
      minusButton.addEventListener("click", function () {
        quantityValue.textContent = Math.max(1, parseInt(quantityValue.textContent, 10) - 1);
      });
      plusButton.addEventListener("click", function () {
        quantityValue.textContent = Math.min(10, parseInt(quantityValue.textContent, 10) + 1);
      });
    }
  }

  var thumbs = document.querySelectorAll("[data-thumb]");
  var mainImage = document.querySelector("[data-main-image]");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      thumbs.forEach(function (item) { item.classList.remove("active"); });
      thumb.classList.add("active");
      if (mainImage) mainImage.src = thumb.src;
    });
  });

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
