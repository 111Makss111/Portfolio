// Додаємо перевірку в консоль
const mobileMenu = document.querySelector(".backdrop");
const openMenuBtn = document.querySelector(".header-button");
const closeMenuBtn = document.querySelector(".backdrop-close-btn");

console.log("Open Button:", openMenuBtn); // Має вивести кнопку
console.log("Close Button:", closeMenuBtn); // Якщо тут null - JS не бачить хрестик
console.log("Menu:", mobileMenu); // Має вивести div

if (openMenuBtn && closeMenuBtn && mobileMenu) {
  openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });
} else {
  console.error("Один з елементів не знайдено! Перевір класи в HTML.");
}
