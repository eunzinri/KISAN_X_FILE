const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const searchInput = document.querySelector("[data-search-input]");
const searchItems = Array.from(document.querySelectorAll("[data-search-item]"));

if (searchInput && searchItems.length) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    searchItems.forEach((item) => {
      const text = `${item.textContent} ${item.dataset.tags || ""}`.toLowerCase();
      item.hidden = Boolean(query) && !text.includes(query);
    });
  });
}
