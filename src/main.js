const mobileMenu = document.querySelector(".backdrop");
const openMenuBtn = document.querySelector(".header-button");
const closeMenuBtn = document.querySelector(".backdrop-close-btn");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
