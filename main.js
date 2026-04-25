// BURGER MENU TOGGLE

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

  const expanded = navToggle.getAttribute("aria-expanded") === "true";

  navToggle.setAttribute("aria-expanded", !expanded);
});

// auto close when link clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
